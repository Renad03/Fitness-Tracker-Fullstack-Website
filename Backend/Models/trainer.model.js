import { Schema, model } from "mongoose";

const trainerSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 120,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    role: {
        type: String,
        required: true,
        minLength: 3,
    },
    gender: {
        type: String,
        required: true,
        minLength: 3,
        trim: true,
    },
    birthday: {
        type: Date,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        minLength: 10,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    address: {
        type: String,
        required: true,
        minLength: 3,
        trim: true,
    },
    image: {
        type: String,
        required: true,
    },
});

const Trainer = model('Trainer', trainerSchema);
export default Trainer;
    