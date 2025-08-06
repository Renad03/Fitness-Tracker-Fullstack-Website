import Review from '../Models/reviews.model.js';

export async function addReview(req, res, next) {
    try {
        const review = await Review.create(req.body);
        res.send(review);
    } catch (err) {
        next(err);
    }
}

export async function getAllReviews(req, res, next) {
    try {
        const reviews = await Review.find();
        res.send(reviews);
    } catch (err) {
        next(err);
    }
}

export async function getReviewById(req, res, next) {
    try {
        const review = await Review.findById(req.params.id);
        res.send(review);
    } catch (err) {
        next(err);
    }
}

export async function updateReview(req, res, next) {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(review);
    } catch (err) {
        next(err);
    }
}

export async function deleteReview(req, res, next) {
    try {
        const review = await Review.findByIdAndDelete(req.params.id);
        res.send(review);
    } catch (err) {
        next(err);
    }
}

