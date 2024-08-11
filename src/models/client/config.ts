/*
    src/models/client/config.ts: This script is created to configure and initialize 
    the Appwrite client and its services. It centralizes the setup of the Appwrite 
    client with your API endpoint and project ID, and it creates instances of 
    Appwrite services (Account, Databases, Avatars, Storage) that can be used 
    throughout the client-side of your application.
*/

import env from "@/env"; 
import { Client, Account, Avatars, Databases, Storage } from "appwrite"; 

// Initialize the Appwrite client with your API endpoint and project ID
const client = new Client()
    .setEndpoint(env.appwrite.endpoint) // Set your Appwrite API Endpoint (e.g., 'http://localhost/v1')
    .setProject(env.appwrite.projectId); // Set your Appwrite project ID

// Create instances of Appwrite services for interacting with the Appwrite API
const account = new Account(client); // Handles user authentication and account management
const database = new Databases(client); // Provides access to the Appwrite databases (CRUD operations)
const avatars = new Avatars(client); // Allows retrieval and manipulation of user avatars
const storage = new Storage(client); // Manages file storage (upload, download, etc.)

// Export the initialized instances to use them throughout your application
export { client, database, account, avatars, storage };
