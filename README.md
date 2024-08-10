1. Create Next App:
    - npx create-next-app@latest
    - then create .env & .env.sample in root directory.

2. Go to 'Appwrite' App:

    - Create project 'QuestForge'
    - Choose 'Region'
    - Copy 'NEXT_PUBLIC_APPWRITE_PROJECT_ID' & paste it in .env
    
    - Add the platform 'Web'
    
    - Settings -> Hostname Registration:
        + Name: 'QuestForge'
        + Hostname: 'localhost'          //if want to host on vercel select '*.vercel.app' otherwise it give error

    - Install:
        + Install the 'Appwrite' package: npm install appwrite
        + Hostname: 'localhost'          //if want to host on vercel select '*.vercel.app' otherwise it give error

    - Import -> Initialize SDK:
        + NEXT_PUBLIC_APPWRITE_HOST_URL: 'https://cloud.appwrite.io/v1'          //from .setEndpoint

    - Build -> All Set:
        + Go to the Dashboard

    - Create the Api Keys: Integrations -> API Keys -> Create API Keys
        + Details -> Name: 'Keyone', Expiration Date: 'Never'
        + Scope -> Select All (Auth, Database, Functions, Storage, Messaging) for now.

    - From Keyone:
        + Copy API Secret Keys
        + Paste it in .env file

    - Finally, 'Appwrite' settings were all done.

3. Create 'env.ts' file in 'src'










----------------------------------Deployment on Vercel -------------------------------


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.












--------------------------- Real root:/README.md File Format ------------------------

# Project Setup Guide

This 'README.md' file is designed to help you understand how `Project` & `Appwrite` settings are configured.

## 1. Create Next.js App

  ### 1.1 Initialize Next.js App

  ```bash
  npx create-next-app@latest
  ```

  ### 1.2 Create Environment Files

  In the root directory of your Next.js project, create the following files:
  - `.env` - This file will hold your environment variables specific to your local development environment.

## 2. Set Up Appwrite

  ### 2.1 Create Appwrite Project

  - Log in to Appwrite Console: Navigate to Appwrite Console and log in with your account.
    
  - Create a New Project:
      
      - Click Create Project.
      
      - `Project Name: QuestForge`
      
      - `Region`: Select the appropriate Region where you want your Appwrite instance to be hosted. This should match the location closest           to your target audience for better performance.
      
  ### 2.2 Configure Project Settings

  - #### Project ID Generated
    
      - Setup the environment variable `NEXT_PUBLIC_APPWRITE_HOST_URL` in our `.env` file:
    
      ```bash
      # The unique identifier for your Appwrite project
      NEXT_PUBLIC_APPWRITE_PROJECT_ID = <your_appwrite_project_id>
      ```
      
  - #### Add Platform:
    
      - Go to Platform settings.
        
      - Add `Web` as a new platform to indicate that this project will be accessed via a web browser.
        
  - #### Go to Settings -> Hostname Registration
    
      - `Name: QuestForge`
        
      - `Hostname: localhost` for local development.
        
      - *If deploying to Vercel, use *.vercel.app instead to avoid issues with hostname validation.

  ### 2.3 Install Appwrite SDK

  - #### Install the SDK:
    
  ```bash
  npm install appwrite
  ```
        
  - #### Configure SDK for Local Development:
    
      - For local development, the `hostname:localhost`. If you deploy your project to Vercel or another hosting provider, adjust this              setting accordingly.
  
  ### 2.4 Initialize SDK

  - #### Setup SDK Initialization:

      - Import and initialize the Appwrite SDK in your project.
      
      - Setup the environment variable `NEXT_PUBLIC_APPWRITE_HOST_URL` in our `.env` file:
    
      ```bash
      # The base URL for connecting to the Appwrite server
      NEXT_PUBLIC_APPWRITE_HOST_URL = https://cloud.appwrite.io/v1
      ```

      - This URL points to the Appwrite server's endpoint, allowing your application to communicate with the Appwrite backend.

    
  ### 2.5 Create API Keys

  - #### Generate API Keys:

      - Go to ####Integrations -> API Keys -> Create API Key.
      
      - `Name: Keyone`
        
      - `Expiration Date: Never` (or set an appropriate expiration date based on your security requirements).
        
      - `Scope: Select all` available scopes (Auth, Database, Functions, Storage, Messaging) for comprehensive access during development.
      
      - Setup the environment variable `NEXT_PUBLIC_APPWRITE_HOST_URL` in our `.env` file:
   
  - #### Update Environment File:

      - Copy the API Secret Key from the newly created API key.
      
      - Paste it into your .env file:
      
      ```bash
      # The API key used for authenticating requests to the Appwrite server
      APPWRITE_API_KEY = <your_api_secret_key>
      ```






   

