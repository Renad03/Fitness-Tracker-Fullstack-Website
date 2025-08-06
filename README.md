# Fitness-Tracker-Fullstack-Website

A full-stack web application for managing fitness memberships, trainers, reviews, and personalized coaching tools. Built with Node.js/Express for the backend and React for the frontend.

## Features

- User registration and authentication
- Membership management and benefits
- Trainer profiles and booking
- Fitness tools: BMI, calorie, and macronutrient calculators
- Reviews and ratings
- Multiple coaching programs (one-on-one, group, online, nutrition)
- Responsive UI with Bootstrap

## Project Structure

```
Backend/
  ├── Config/                # Database configuration
  ├── Controllers/           # Express controllers
  ├── Models/                # Mongoose models
  ├── Routes/                # API routes
  ├── server.js              # Express server entry point
  └── .env                   # Environment variables

Frontend/
  ├── public/                # Static assets
  ├── src/                   # React source code
  ├── package.json           # Frontend dependencies
  └── README.md              # Frontend-specific docs
```

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB

### Backend Setup

1. Navigate to `Backend/`
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure `.env` with your MongoDB URI and other settings.
4. Start the server:
   ```sh
   npm start
   ```

### Frontend Setup

1. Navigate to `Frontend/`
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm start
   ```

## API Endpoints

See [Backend/server.js](Backend/server.js) for route setup. Main endpoints include:

- `/users`
- `/review`
- `/membership`
- `/membershipBenefits`
- `/fitnessTools`
- `/trainers`
