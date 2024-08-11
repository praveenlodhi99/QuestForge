/*
    This file, name.ts, is created to define and centralize the names of the database, 
    collections, and storage buckets used in the project. By doing so, it ensures 
    consistency across the project and makes it easier to manage and update these 
    names in a single location.
*/

// Define the name of the main database to be used in the project
export const db = "main-stackflow";

// Define the collection names within the database for storing various entities
export const questionCollection = "questions"; // Collection for storing questions
export const answerCollection = "answers"; // Collection for storing answers to questions
export const commentCollection = "comments"; // Collection for storing comments on questions and answers
export const voteCollection = "votes"; // Collection for storing upvotes/downvotes on questions, answers, and comments

// Define the name of the storage bucket for storing file attachments related to questions
export const questionAttachmentBucket = "question-attachment";
