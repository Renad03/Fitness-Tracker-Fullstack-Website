import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './Config/db.js'; // Assuming you have your database connection in this file
import userRoutes from './Routes/user.routes.js';
import reviewRoutes from './Routes/reviews.routes.js';
import membershipRoutes from './Routes/membership.routes.js';
import membershipBenefitsRoutes from './Routes/membership_benefits.routes.js';
import fitnessToolsRoutes from './Routes/fitnessTools.routes.js';
import trainerRoutes from './Routes/trainer.routes.js';
import cors from 'cors';

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors());
connectDB();

// Define a basic route for testing
app.get('/', (req, res) => {
  res.send('Fitness Tracker Backend API is running!');
});


app.use('/users', userRoutes);
app.use('/review', reviewRoutes);
app.use('/membership', membershipRoutes);
app.use('/membershipBenefits', membershipBenefitsRoutes);
app.use('/fitnessTools', fitnessToolsRoutes);
app.use('/trainers', trainerRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});