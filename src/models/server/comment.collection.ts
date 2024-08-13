import { Permission } from "node-appwrite"; // Import the Permission module from node-appwrite
import { commentCollection, db } from "../name"; // Import database and collection IDs from another module
import { databases } from "./config"; // Import the configured database instance

/**
 * Function to create the Comment collection and its attributes
 */
export default async function createCommentCollection() {
    try {
        // Create the Comment collection in the database with specific permissions
        await databases.createCollection(
            db, // Database ID
            commentCollection, // Collection ID (and name)
            commentCollection, // Collection name
            [
                Permission.create("users"), // Allow users to create comments
                Permission.read("any"), // Allow anyone to read comments
                Permission.read("users"), // Allow users to read comments
                Permission.update("users"), // Allow users to update comments
                Permission.delete("users"), // Allow users to delete comments
            ]
        );
        console.log("Comment Collection Created");

        // Create attributes for the Comment collection
        await Promise.all([
            databases.createStringAttribute(db, commentCollection, "content", 10000, true), // Attribute for storing the comment content
            databases.createEnumAttribute(db, commentCollection, "type", ["answer", "question"], true), // Attribute for specifying the type of comment (e.g., answer or question). 'Enum' is simply array of strings
            databases.createStringAttribute(db, commentCollection, "typeId", 50, true), // Attribute for linking to the related type (e.g., ID of the answer or question)
            databases.createStringAttribute(db, commentCollection, "authorId", 50, true), // Attribute for storing the ID of the comment's author
        ]);
        console.log("Comment Attributes Created");

    } catch (error) {
        if (error instanceof Error) {
            // Handle known Error types
            console.error(`Failed to create comment collection or attributes: ${error.message}`);
        } else {
            // Handle unknown error types
            console.error(`An unknown error occurred: ${String(error)}`);
        }
    }
}
