To create a Node.js API with TypeScript, you can follow these steps:

1.Setup Project Directory

Create a new directory for your project and navigate into it:

mkdir node-ts-mongodb-crud

cd node-ts-mongodb-crud

2. Initialize the Project

Run the following command to initialize a new Node.js project:

npm init -y

This will generate a package.json file with default configurations.

3. Install Dependencies

You will need to install the following dependencies:

express: For creating API routes.

typescript: To enable TypeScript in the project.

ts-node-dev: For running TypeScript directly.

@types/node and @types/express: Type definitions for Node.js and Express.

Install them using:

npm install express mongoose

npm install -D typescript ts-node-dev @types/express @types/node

npm install tsyringe reflect-metadata

Explanation:

tsyringe: A dependency injection library for TypeScript.

reflect-metadata: Required for decorators to work in TypeScript.

4. Setup TypeScript Configuration
   
Run the following command to create a tsconfig.json file:

npx tsc --init

This will generate the tsconfig.json file. You can modify it to suit your needs. Here’s a basic example configuration:

{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
5. Create Folder Structure

Create the src directory, which will contain all the TypeScript source files:

mkdir src

Put project functional folder and file inside src folder.

node-ts-mongodb-crud

│

├── src

│   ├── controllers

│   │   └── user.controller.ts

│   ├── models

│   │   └── user.model.ts

│   ├── routes

│   │   └── user.routes.ts

│   ├── services

│   │   └── user.service.ts

│   ├── app.ts

│   └── server.ts

├── package.json

└── tsconfig.json

Run the Application

To run the API in development mode, use the following command:

npm run dev
