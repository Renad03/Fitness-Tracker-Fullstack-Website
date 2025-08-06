import { text } from 'express';
import { Schema, model } from 'mongoose';

const membershipBenefitsSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: 3,
    },

    description: {
        type: String,
        required: true,
        minLength: 3,
    },
}); 

const MembershipBenefits = model('MembershipBenefits', membershipBenefitsSchema);
export default MembershipBenefits;