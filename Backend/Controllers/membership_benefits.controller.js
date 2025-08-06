import MembershipBenefits from "../Models/membership_benefits.model.js";

export async function getAllMembershipBenefits(req, res, next) {
    try {
        const membershipBenefits = await MembershipBenefits.find(); // Use User.find()
        res.send(membershipBenefits);
    } catch (err) {
        next(err);
    }
}

export async function getMembershipBenefitsById(req, res, next) {
    try {
        const membershipBenefits = await MembershipBenefits.findById(req.params.id); // Use User.find()
        res.send(membershipBenefits);
    } catch (err) {
        next(err);
    }
}

export async function addMembershipBenefits(req, res, next) {
    try {
        const membershipBenefits = await MembershipBenefits.create(req.body); // Use User.find()
        res.send(membershipBenefits);
    } catch (err) {
        next(err);
    }
}

export async function deleteMembershipBenefits(req, res, next) {
    try {
        const membershipBenefits = await MembershipBenefits.findByIdAndDelete(req.params.id); // Use User.find()
        res.send(membershipBenefits);
    } catch (err) {
        next(err);
    }
}

export async function updateMembershipBenefits(req, res, next) {
    try {
        const membershipBenefits = await MembershipBenefits.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Use User.find()
        res.send(membershipBenefits);
    } catch (err) {
        next(err);
    }
}

