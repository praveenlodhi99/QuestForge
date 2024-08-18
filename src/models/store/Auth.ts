//---------------------------------------- imports ----------------------------------------

import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';

import { AppwriteException, ID, Models } from 'appwrite';
import { account } from '@/models/client/config';

// creating reputation for the user depend upon upvote and downvote each user have 

export interface Userprefs {
    reputation: number
}

//---------------------------------------- interface ----------------------------------------

interface IAuthStore {
    session: Models.Session | null;
    jwt: string | null;

    //coz 'user' have no idea how 'models.User' look like, we are creating explicit user which of generic type and expecting 'UserPrefs' might be there, we can also add name, email, etc. in UserPrefs.
    user: Models.User<Userprefs> | null;

    hydrated: boolean;
    setHydrated(): void;

    verifySession(): Promise<void>;

    login(
        email: string,
        password: string
    ): Promise < {
        success: boolean
        error?: AppwriteException | null 
    }>;

    createAccount(
        name: string,
        email: string,
        password: string
    ): Promise < {
        success: boolean
        error?: AppwriteException | null 
    }>;

    logout(): Promise<void>;

}

//---------------------------------------- store implementation ----------------------------------------

//we can multiple store, but here we are making only one
export const useAuthStore = create<IAuthStore>() {
    persist {
        //all the functionality go inside immer & immer can take care whether states are mutated or not-mutated.
        //every time we used to set variables or set any data, immer will take care we do not overwrite the existing state and creating new state following the rule of never mutate.
        immer(),
        {
            name: "auth",
            onRehydrateStorage() {
                // when it returns a callback, almost every method storing in the storage, has access to the state, we don't need to declare the state, zustand automatically create but if we are using other library like redux toolkit, we have to explicity tell.
                 return (state, error) => {
                    if(!error) state?.setHydrated()
                 }
            }
        }
    }
}