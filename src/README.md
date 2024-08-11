This README.md file created understand the sub-directory structure inside 'src' directory.

1. This file, 'env.ts', is created to manage environment variables in a TypeScript project, 
    while we often use `process.env` directly, sometimes it's necessary to ensure that the 
    incoming data adheres to specific types, which is especially important in TypeScript.

2.  Inside 'src' directory:
    - Create models: mkdir models
    - Inside 'src/models/':
        + mkdir client 
        + mkdir server
        + touch index.ts name.ts

    - Go inside 'client' directory:
        + touch config.ts    // to connect client on the client side we are using config.ts

    - Go inside 'server' directory:
        + touch answer.collection.ts comment.collection.ts question.collection.ts vote.collection.ts storage.collection.ts config.ts dbSetup.ts
        // to connect server on the server side (i.e; Appwrite) we are using 'config.ts'
        // if the collection is there we don't do anything but if application is deployed for the very first time, we are able to structure the collection automatically, for that we are using 'dbSetup.ts' (seeding database here).
        // we are allowing user to upload the images via Appwrite, we don't want to use any third party app for that so that we are creating 'storage.collection.ts'

3. 'name.ts' (src/models/server/name.ts)
    - This script is created to define and centralize the names of the database, 
    collections, and storage buckets used in the project. By doing so, it ensures 
    consistency across the project and makes it easier to manage and update these 
    names in a single location.























--------------------------- Real src/README.md File Format ------------------------

# `'src'` Structure Overview

This 'README.md' file is designed to help you understand the sub-directory structure inside the `src` directory of this project.

## Environment Variable Configuration (env.ts)

The `env.ts` file is created to manage environment variables in a TypeScript project. While we often use `process.env` directly, it's sometimes necessary to ensure that the incoming data adheres to specific types. This is particularly important in TypeScript to maintain type safety and prevent runtime errors.

## Directory Structure

The following steps outline how to set up the sub-directories and files within the `src` directory.

### 1. Create Models Directory (src/)

```bash
mkdir models
```

### 2. Inside Models Directory (src/models/)

- Create Subdirectories for `Client` and `Server`:
  
```bash
mkdir client 
mkdir server
```
  
- Create `index.ts` & `name.ts` Scripts:
  
```bash
touch index.ts name.ts
```

### 3. Client-Side Setup

- Inside `Client` Directory (src/models/client)
  
  ```bash
  touch config.ts
  ```
  
  - This file is used to manage configurations specific to the client side of the application

### 4. Server-Side Setup

- Inside the `Server` Directory (src/models/server)
  
  #### Create Collection & Setup Files
  
  ```bash
  touch answer.collection.ts comment.collection.ts question.collection.ts vote.collection.ts storage.collection.ts config.ts dbSetup.ts
  ```

  - `config.ts`: Used for server-side connection configuration, specifically for connecting to Appwrite.

  - `dbSetup.ts`: This file is utilized for database seeding. If the application is being deployed for the first time, this script is            going to ensures that the collections are automatically structured and ready for use.

  - `storage.collection.ts`: This file is responsible for handling image uploads directly through Appwrite, removing the need for any            third-party applications.
    
  - `answer.collection.ts` `comment.collection.ts` `question.collection.ts` `vote.collection.ts` : These Collection files are responsible        for defining and structuring different collections in the database. The files ensure that the necessary collections exist and are           properly structured.



