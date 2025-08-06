import { Schema, model } from 'mongoose';

const reviewSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
        minLength: 3,
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

});

const Review = model('Review', reviewSchema);
export default Review;    