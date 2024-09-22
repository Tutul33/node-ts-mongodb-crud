# To create a Node.js API with TypeScript, you can follow these steps:

## Install mongodb  in your local pc/server

### 1.Setup Project Directory

  #### Create a new directory for your project and navigate into it:

  #### mkdir node-ts-mongodb-crud

  #### cd node-ts-mongodb-crud

### 2.Initialize the Project

  #### Run the following command to initialize a new Node.js project:

  #### npm init -y

  #### This will generate a package.json file with default configurations.

### 3.Install Dependencies

  #### You will need to install the following dependencies:

  #### express: For creating API routes.

  #### typescript: To enable TypeScript in the project.

  #### ts-node-dev: For running TypeScript directly.

  #### @types/node and @types/express: Type definitions for Node.js and Express.

  #### Install them using:

  #### npm install express mongoose

  #### npm install -D typescript ts-node-dev @types/express @types/node

  #### npm install tsyringe reflect-metadata

  #### Explanation:

  #### tsyringe: A dependency injection library for TypeScript.

  #### reflect-metadata: Required for decorators to work in TypeScript.

### 4.Setup TypeScript Configuration
   
  #### Run the following command to create a tsconfig.json file:

  #### npx tsc --init

  #### This will generate the tsconfig.json file. You can modify it to suit your needs. Here’s a basic example configuration:

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
### 5.Create Folder Structure

  Create the src directory, which will contain all the TypeScript source files:

  mkdir src

  Create the following folder structure for your project:

  node-ts-mongodb-crud

  │

  ├── src

  │   ├── controllers

  │   │   └── user.controller.ts

  │   ├── middleware

  │   │   └── auth.ts

  │   │   └── errorHandler.ts

  │   ├── models

  │   │   └── user.model.ts

  │   ├── routes

  │   │   └── user.routes.ts

  │   ├── services

  │   │   └── user.service.ts

  │   ├── types

  │   │   └── custom.d.ts

  │   ├── app.ts

  │   └── server.ts

  ├── package.json

  └── tsconfig.json


# Install necessary packages

npm install express bcryptjs jsonwebtoken tsyringe mongoose

npm install @types/express @types/bcryptjs @types/jsonwebtoken

# Step 2: Authentication and Authorization

You will need to use JWT (JSON Web Tokens) for authentication. Middleware will be created for both public and private routes.

src/middleware/auth.ts

# Public and Private Routes

src/routes/user.routes.ts

# UserController with Authentication and Authorization

src/controllers/user.controller.ts

Methods:

async register(req: Request, res: Response)

async login(req: Request, res: Response)

# Global Error Handling Middleware

src/middleware/errorHandler.ts

src/app.ts 

//Add this in app.ts file

app.use(globalErrorHandler);

# User Service

src/services/user.service.ts

async createUser(data: Partial<IUser>): Promise<IUser> {
    return UserModel.create(data);
  }

  async findUserByEmail(email: string): Promise<IUser | null> {
    return UserModel.findOne({ email });
  }

# This setup includes:

Authentication via JWT.

Authorization with middleware (authenticateToken).

Global error handling.

Separation of public and private routes using middleware.

User registration and login functionality.

# Run the Application
To run the API in development mode, use the following command:

npm run dev
