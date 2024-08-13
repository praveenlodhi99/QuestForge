import { db } from "../name"; // Import the database ID from the configuration file
import createAnswerCollection from "./answer.collection"; // Import the function to create the Answer collection
import createCommentCollection from "./comment.collection"; // Import the function to create the Comment collection
import createQuestionCollection from "./question.collection"; // Import the function to create the Question collection
import createVoteCollection from "./vote.collection"; // Import the function to create the Vote collection

import { databases } from "./config"; // Import the configured database instance

/**
 * Function to get or create the database and its collections
 */
export default async function getOrCreateDB() {
  try {
    // Attempt to retrieve the existing database
    await databases.get(db);
    console.log("Database connection established"); // Log if the database already exists
  } catch (error) {
    // If the database does not exist, create it
    try {
      await databases.create(db, db); // Create the database with the given ID
      console.log("Database created");

      // Create the necessary collections in the newly created database
      await Promise.all([
        createQuestionCollection(), // Create the Question collection
        createAnswerCollection(), // Create the Answer collection
        createCommentCollection(), // Create the Comment collection
        createVoteCollection(), // Create the Vote collection
      ]);
      console.log("Collections created"); // Log after all collections are created
      console.log("Database setup complete"); // Log that database setup is complete
    } catch (error) {
      // Handle any errors that occur during database or collection creation
      console.error("Error creating database or collections:", error);
    }
  }

  return databases; // Return the configured database instance
}
