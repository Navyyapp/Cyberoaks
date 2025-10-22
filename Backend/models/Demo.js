
import mongoose from "mongoose";

const demoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/, // only 10 digits
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    course: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
      minlength: 10,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Demo", demoSchema);
