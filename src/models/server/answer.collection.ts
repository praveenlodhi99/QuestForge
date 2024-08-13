import { IndexType, Permission } from "node-appwrite"; // Import necessary modules from node-appwrite
import { answerCollection, db } from "../name"; // Import database and collection IDs from another module
import { databases } from "./config"; // Import the configured database instance

/**
 * Function to create the Answer collection and its attributes
 */
export default async function createAnswerCollection() {
    try {
        // Create the Answer collection in the database
        await databases.createCollection(
            db,
            answerCollection,  // Database ID
            answerCollection,  // Collection ID (and name)
            [
                Permission.create("users"), // Allow users to create documents
                Permission.read("any"), // Allow anyone to read documents
                Permission.read("users"), // Allow users to read documents
                Permission.update("users"), // Allow users to update documents
                Permission.delete("users"), // Allow users to delete documents
            ]
        );
        console.log("Answer Collection Created");

        // Create attributes for the Answer collection
        await Promise.all([
            databases.createStringAttribute(db, answerCollection, "content", 10000, true), // Attribute for storing the answer content
            databases.createStringAttribute(db, answerCollection, "questionId", 50, true), // Attribute for linking to the associated question
            databases.createStringAttribute(db, answerCollection, "authorId", 50, true) // Attribute for storing the author's ID
        ]);
        console.log("Answer Attributes Created");

    } catch (error) {
        if (error instanceof Error) {
            // Handle known Error types
            console.error(`Failed to create answer collection or attributes: ${error.message}`);
        } else {
            // Handle unknown error types
            console.error(`An unknown error occurred: ${String(error)}`);
        }
    }
}
