import { JwtPayload } from 'jsonwebtoken';
import { Request } from 'express';

// Extending the Express Request interface
declare module 'express-serve-static-core' {
  interface Request {
    user?: string | JwtPayload;  // Adjust type based on your JWT payload structure
  }
}
