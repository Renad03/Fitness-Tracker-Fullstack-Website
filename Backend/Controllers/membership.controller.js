import MemberShip from '../Models/membership.model.js';

export async function getAllMemberships(req, res, next) {
    try {
        const memberships = await MemberShip.find();
        res.send(memberships);
    } catch (err) {
        next(err);
    }
}

export async function addMembership(req, res, next) {
    try {
        const membership = await MemberShip.create(req.body);
        res.send(membership);
    } catch (err) {
        next(err);
    }
}

export async function getMembershipById(req, res, next) {
    try {
        const membership = await MemberShip.findById(req.params.id);
        res.send(membership);
    } catch (err) {
        next(err);
    }
}

export async function updateMembership(req, res, next) {
    try {
        const membership = await MemberShip.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(membership);
    } catch (err) {
        next(err);
    }
}

export async function deleteMembership(req, res, next) {
    try {
        const membership = await MemberShip.findByIdAndDelete(req.params.id);
        res.send(membership);
    } catch (err) {
        next(err);
    }
}

