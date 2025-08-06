import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  age: Number,  
  name: String,
  gender: String,
  level: Number,
  xp: Number,
  xpToNext: Number,
  streak: Number,
  totalWorkouts: Number,
  stats: {
    caloriesBurned: Number,
    stepsToday: Number,
    heartRate: Number,
    workoutTime: Number
  },
  weeklyProgress: [{
    day: String,
    calories: Number,
    steps: Number
  }],
  achievements: [{
    id: Number,
    name: String,
    desc: String,
    icon: String,
    unlocked: Boolean
  }]
});

const User = mongoose.model('User', UserSchema);

export default User;
