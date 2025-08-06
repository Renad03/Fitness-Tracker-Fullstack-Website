import { text } from "express";
import { Schema, model } from "mongoose";

const membershipPlansSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 3,
  },

  price: {
    type: String,
    required: true,
    minLength: 3,
  },
  period: {
    type: String,
    required: true,
    minLength: 3,
  },
  features: {
    type: [String],
    required: true,
    validate: [(array) => array.length > 0, "At least one feature is required"],
  },
  color: {
    type: String,
    required: true,
    minLength: 3,
  },
  textColor: {
    type: String,
    required: true,
    minLength: 3,
  },
});

const MemberShip = model("MemberShip", membershipPlansSchema);
export default MemberShip;
