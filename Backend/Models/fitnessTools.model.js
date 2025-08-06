import { Schema, model } from 'mongoose';

const fitnessToolsSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        minLength: 3,
    },
});

const FitnessTools = model('FitnessTools', fitnessToolsSchema);
export default FitnessTools;    