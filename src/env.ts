/*
 This file, 'env.ts', is created to manage environment variables in a TypeScript 
 project, while we often use `process.env` directly, sometimes it's necessary 
 to ensure that the incoming data adheres to specific types, which is especially 
 important in TypeScript.
*/

const env = {
    appwrite: {
        // Ensuring that the Host URL is treated as a string by typecasting with 'String'
        endpoint: String(process.env.NEXT_PUBLIC_APPWRITE_HOST_URL),
        
        // Ensuring that the Project ID is treated as a string by typecasting with 'String'
        projectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
        
        // Ensuring that the API Key is treated as a string by typecasting with 'String'
        apikey: String(process.env.APPWRITE_API_KEY),
    }
}

// Exporting the 'env' object for use in other parts of the application
export default env;
