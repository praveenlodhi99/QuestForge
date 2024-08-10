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








<!-- ------------------------------------------------------ -->

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

3. Create variables in .env file (requirement from Next.js)
    - 

