import { Permission } from "node-appwrite"; // Import Permission module from node-appwrite
import { questionAttachmentBucket } from "../name"; // Import the bucket name from another module
import { storage } from "./config"; // Import the configured storage instance

/**
 * Function to get or create the storage bucket for question attachments
 */
export default async function getOrCreateStorage() {
    try {
        // Attempt to get the existing storage bucket
        await storage.getBucket(questionAttachmentBucket);
        console.log("Storage Connected"); // Log if the bucket is successfully connected
    } catch (error) {
        try {
            // If bucket does not exist, create a new storage bucket
            await storage.createBucket(
                questionAttachmentBucket, // Bucket ID and name
                questionAttachmentBucket, // Bucket name
                [
                    Permission.create("users"), // Allow users to create files
                    Permission.read("any"), // Allow anyone to read files
                    Permission.read("users"), // Allow users to read files
                    Permission.update("users"), // Allow users to update files
                    Permission.delete("users"), // Allow users to delete files
                ],
                false, // Set to false to disable file versioning
                undefined, // Default rules (if any) for the bucket
                undefined, // Default quota (if any) for the bucket
                ["jpg", "png", "gif", "jpeg", "webp", "heic"] // Allowed file formats
            );

            console.log("Storage Created"); // Log if the bucket is successfully created
            console.log("Storage Connected"); // Log if the bucket is successfully connected
        } catch (innerError) {
            // Handle errors during bucket creation
            console.error("Error creating storage:", innerError);
        }
    }
}
