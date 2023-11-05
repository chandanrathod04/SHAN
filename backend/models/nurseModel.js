import mongoose from "mongoose";

const NurseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "nurse" },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
  },
  {
    timestamps: true,
  }
);

const NurseModel = mongoose.model("Nurse", NurseSchema, "nurses");

export default NurseModel;
