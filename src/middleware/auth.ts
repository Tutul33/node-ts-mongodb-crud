import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Secret key for signing JWTs
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

// Middleware to protect private routes
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Get token from the Authorization header
  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET); // Verify token
    req.user = decoded; // Attach user to request
    next();
  } catch (error) {
    return res.status(400).json({ message: 'Invalid token.' });
  }
};

// Middleware for public routes (no authentication needed)
export const publicRoute = (req: Request, res: Response, next: NextFunction) => {
  next(); // Allow access
};
