import { Permission, Databases } from "node-appwrite"; // Import necessary modules from node-appwrite
import { db, questionCollection } from "../name"; // Import database and collection IDs from another module
import { databases } from "./config"; // Import the configured database instance

// Database operations are always asynchronous operations.

/*
   Function to create the Question collection in the database.
        - This function creates a new collection in the database specifically for questions. 
        - The collection is created with specific permissions that dictate who can perform 
          various operations (e.g., read, create, update, delete) on the documents within the collection.
 */
export default async function createQuestionCollection() {
    try {
        /* 
            Attempt to create the collection using the createCollection method from the databases instance.
            Parameters:
                - db: The ID of the database where the collection will be created.
                - questionCollection: A unique identifier for the collection.
                - questionCollection: The name of the collection (in this case, it's the same as the identifier).
                - Permissions array: Defines who has permission to read, create, update, and delete documents in this collection.
        */

        await databases.createCollection(
            db,
            questionCollection,
            questionCollection, // Collection name, should be unique within the database.
            [
                Permission.read("any"),     // Allow any user to read documents in this collection.
                Permission.read("user"),    // Allow authenticated users to read documents in this collection.
                Permission.create("user"),  // Allow authenticated users to create new documents in this collection.
                Permission.update("user"),  // Allow authenticated users to update existing documents in this collection.
                Permission.delete("user"),  // Allow authenticated users to delete documents in this collection.
            ]
        );

        // Log a success message to the console if the collection is created successfully.
        console.log('Question collection created successfully');

        /* 
            - Create attributes and indexes for the collection to structure and optimize queries on the data.
            - Attributes are essentially the fields that will store data within each document in the collection.
            
            Parameters:
                - db: The ID of the database where the collection resides.
                - questionCollection: The ID of the collection to which attributes are being added.
                - Attribute name: The name of the attribute to add.
                - Maximum length: The maximum length allowed for the attribute value.
                - Required: Boolean indicating if the attribute is required (true means it cannot be null).
        */

        await Promise.all([
            databases.createStringAttribute(db, questionCollection, "title", 100, true), // Title of the question (required)
            databases.createStringAttribute(db, questionCollection, "content", 10000, true), // Content of the question (required)
            databases.createStringAttribute(db, questionCollection, "authorId", 50, true), // ID of the author (required)
            databases.createStringAttribute(db, questionCollection, "tags", 100, true, undefined, true), // Tags related to the question (required, array of strings)
            databases.createStringAttribute(db, questionCollection, "attachmentId", 50, true, undefined, false), // ID of an attachment (optional)
        ]);

        // Log a success message to the console after attributes are successfully created.
        console.log('Question attributes created successfully');


        // Create indexes for efficient querying of the collection.
        // Indexes are used to improve the speed of data retrieval operations on a database table.
        /*
        await Promise.all([
            databases.createIndex(
                db,
                questionCollection,
                "title",
                IndexType.Fulltext,
                ["title"],
                ["asc"]
            ),            
            
            databases.createIndex(
                db,
                questionCollection,
                "content",
                IndexType.Fulltext,
                ["content"],
                ["asc"]
            ),
        ]);
        */

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
