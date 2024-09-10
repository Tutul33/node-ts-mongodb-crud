import express from 'express';
import 'reflect-metadata'; // Required for tsyringe
import userRoutes from './routes/user.routes';
import mongoose from 'mongoose';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', userRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/users_db')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('Error connecting to MongoDB:', error));

export default app;
