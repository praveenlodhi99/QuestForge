//---------------------------------------- imports ----------------------------------------

import { create } from 'zustand'; // Zustand is a state management library
import { immer } from 'zustand/middleware/immer'; // Middleware for immutable state updates
import { persist } from 'zustand/middleware'; // Middleware for persisting state

import { AppwriteException, ID, Models } from 'appwrite'; // Imports from Appwrite SDK
import { account } from '@/models/client/config'; // Importing the configured Appwrite account instance

// Creating a user reputation system based on upvotes and downvotes.

export interface Userprefs {
    reputation: number; // User's reputation score
}

//---------------------------------------- interface ----------------------------------------

interface IAuthStore {
    session: Models.Session | null; // Current user session, null if not logged in
    jwt: string | null; // JSON Web Token for authentication, null if not logged in

    // Explicitly defining the user object with potential additional preferences like 'reputation'.
    // You can also extend 'Userprefs' with other fields like 'name', 'email', etc.
    user: Models.User<Userprefs> | null; // User object with preferences, null if not logged in

    hydrated: boolean; // Indicates if the store has been rehydrated from persistent storage
    setHydrated(): void; // Function to set the hydrated state

    verifySession(): Promise<void>; // Function to verify the current session

    login(
        email: string, // User's email for login
        password: string // User's password for login
    ): Promise<{
        success: boolean; // Indicates if the login was successful
        error?: AppwriteException | null; // Error object if login failed
    }>;

    createAccount(
        name: string, // User's name for account creation
        email: string, // User's email for account creation
        password: string // User's password for account creation
    ): Promise<{
        success: boolean; // Indicates if the account creation was successful
        error?: AppwriteException | null; // Error object if account creation failed
    }>;

    logout(): Promise<void>; // Function to log out the user
}

//---------------------------------------- store implementation ----------------------------------------

// We can create multiple stores, but here we are creating only one.
export const useAuthStore = create<IAuthStore>()(
    persist(
        // Using immer to handle state updates immutably
        immer((set) => ({
            session: null, // Initial state for session
            jwt: null, // Initial state for JWT
            user: null, // Initial state for user
            hydrated: false, // Initial state for hydration status

            // Set hydrated state to true.
            setHydrated() {
                set({ hydrated: true }); // Update the hydrated state
            },

            // Verify session by checking with the Appwrite backend.
            async verifySession() {
                try {
                    const session = await account.getSession("current"); // Fetch current session from Appwrite
                    set({ session }); // Update session state
                } catch (error) {
                    console.log("Error verifying session:", error); // Log any errors
                }
            },

            // Login using email and password. If successful, set session, user, and JWT.
            async login(email: string, password: string) {
                try {
                    // Attempt to create a session with email and password
                    const session = await account.createEmailPasswordSession(email, password);
                    const [user, { jwt }] = await Promise.all([
                        account.get<Userprefs>(), // Fetch user details
                        account.createJWT(), // Create JWT for the session
                    ]);

                    // Initialize user reputation if not already set.
                    if (!user.prefs?.reputation) {
                        await account.updatePrefs<Userprefs>({ // Update user preferences with initial reputation
                            reputation: 0,
                        });
                    }

                    // Update store state with session, user, and JWT
                    set({ session, user, jwt });

                    return { success: true }; // Return success status
                } catch (error) {
                    console.log("Login error:", error); // Log any login errors
                    return {
                        success: false, // Return failure status
                        error: error instanceof AppwriteException ? error : null, // Return error if it's an AppwriteException
                    };
                }
            },

            // Create a new account using name, email, and password.
            async createAccount(name: string, email: string, password: string) {
                try {
                    // Create a new user account in Appwrite
                    await account.create(ID.unique(), email, password, name);
                    return { success: true }; // Return success status
                } catch (error) {
                    console.log("Account creation error:", error); // Log any account creation errors
                    return {
                        success: false, // Return failure status
                        error: error instanceof AppwriteException ? error : null, // Return error if it's an AppwriteException
                    };
                }
            },

            // Logout the user by deleting all sessions and resetting the store state.
            async logout() {
                try {
                    await account.deleteSessions(); // Delete all user sessions from Appwrite
                    set({ session: null, jwt: null, user: null }); // Reset store state
                } catch (error) {
                    console.log("Logout error:", error); // Log any logout errors
                }
            },
        })),
        {
            name: "auth", // Name for the persistent storage
            onRehydrateStorage() {
                // Rehydrate the state from storage and set it to hydrated if no errors occur.
                return (state, error) => {
                    if (!error) state?.setHydrated(); // Call setHydrated if no errors
                };
            },
        }
    )
);