import mongoose from "mongoose";

const enrollSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  course: String,
  paymentId: String,
  amount: Number,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Enroll", enrollSchema);
