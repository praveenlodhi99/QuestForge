import { Permission } from "node-appwrite"; // Import the Permission module from node-appwrite
import { db, voteCollection } from "../name"; // Import database and collection IDs from another module
import { databases } from "./config"; // Import the configured database instance

/**
 * Function to create the Vote collection and its attributes
 */
export default async function createVoteCollection() {
    try {
        // Create the Vote collection in the database
        await databases.createCollection(
            db,
            voteCollection,  // Database ID
            voteCollection,  // Collection ID (and name)
            [
                Permission.create("users"), // Allow users to create documents
                Permission.read("any"), // Allow anyone to read documents
                Permission.read("users"), // Allow users to read documents
                Permission.update("users"), // Allow users to update documents
                Permission.delete("users"), // Allow users to delete documents
            ]
        );
        console.log("Vote Collection Created");

        // Create attributes for the Vote collection
        await Promise.all([
            databases.createEnumAttribute(
                db,
                voteCollection,
                "type",
                ["question", "answer"], // Possible values for the 'type' attribute
                true // Whether the attribute is required
            ),
            databases.createStringAttribute(
                db,
                voteCollection,
                "typeId",
                50, // Maximum length of the string
                true // Whether the attribute is required
            ),
            databases.createEnumAttribute(
                db,
                voteCollection,
                "voteStatus",
                ["upvoted", "downvoted"], // Possible values for the 'voteStatus' attribute
                true // Whether the attribute is required
            ),
            databases.createStringAttribute(
                db,
                voteCollection,
                "votedById", // Who created that vote
                50, // Maximum length of the string
                true // Whether the attribute is required
            ),
        ]);
        console.log("Vote Attributes Created");

    } catch (error) {
        if (error instanceof Error) {
            // Handle known Error types
            console.error(`Failed to create vote collection or attributes: ${error.message}`);
        } else {
            // Handle unknown error types
            console.error(`An unknown error occurred: ${String(error)}`);
        }
    }
}
