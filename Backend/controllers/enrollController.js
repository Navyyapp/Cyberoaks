import Razorpay from "razorpay";
import Enroll from "../models/Enroll.js";
import dotenv from "dotenv";
dotenv.config();

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});


export const createOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({ error: "Amount is required" });
    }

    const options = {
      amount: amount * 100, 
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);
    console.log("Razorpay Order Created:", order.id);
    res.json({ success: true, orderId: order.id, amount: options.amount });
  } catch (error) {
    console.error(" Order Error:", error);
    res.status(500).json({ error: "Failed to create order" });
  }
};

// Save enrollment after payment success
export const saveEnrollment = async (req, res) => {
  try {
    const { name, phone, email, course, paymentId, amount } = req.body;

    if (!name || !phone || !email || !course || !paymentId || !amount) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const enroll = new Enroll({
      name,
      phone,
      email,
      course,
      paymentId,
      amount,
    });

    await enroll.save();

    console.log(" Enrollment Saved:", enroll);
    res.json({ success: true, message: "Enrollment saved successfully" });
  } catch (error) {
    console.error(" Database Error:", error);
    res.status(500).json({ error: "Database save failed" });
  }
};
