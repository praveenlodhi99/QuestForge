/*
    The `src/models/server/config.ts` file is created to centralize and configure 
    the Appwrite client and associated SDK services for server-side operations. 
    It sets up the client with the necessary API endpoint, project ID, and API key, 
    and provides pre-configured instances of the Users, Databases, Avatars, 
    and Storage services. These instances are then exported for use throughout 
    the server-side code, ensuring consistent access to Appwrite services 
    and simplifying the management of these resources across the application.
*/

import env from "@/env"; 

// Importing the necessary SDKs from the Appwrite Node.js SDK
import { Client, Users, Avatars, Databases, Storage } from "node-appwrite"; 

// Initialize the Appwrite client with your API endpoint, project ID, and secret API key
const client = new Client();

client
    .setEndpoint(env.appwrite.endpoint) // Set your Appwrite API Endpoint (e.g., 'http://localhost/v1')
    .setProject(env.appwrite.projectId) // Set your Appwrite project ID
    .setKey(env.appwrite.apikey); // Set your secret API key for server-side operations

// Create instances of Appwrite services for interacting with the Appwrite API on the server-side
const users = new Users(client); // Manages user accounts (e.g., creation, update, deletion)
const databases = new Databases(client); // Provides access to Appwrite databases (CRUD operations)
const avatars = new Avatars(client); // Allows retrieval and manipulation of user avatars
const storage = new Storage(client); // Manages file storage (upload, download, etc.)

// Export the initialized instances to use them throughout your server-side application
export { client, databases, users, avatars, storage };


