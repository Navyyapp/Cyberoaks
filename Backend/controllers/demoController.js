
import Demo from "../models/Demo.js";

export const saveDemo = async (req, res) => {
  try {
    const { name, phone, email, course, message } = req.body;

    // Basic backend validation
    if (!name || !phone || !email || !course || !message) {
      return res.status(400).json({ success: false, error: "All fields are required" });
    }

    // Optional: extra validation (similar to frontend)
    if (!/^[A-Za-z\s]+$/.test(name)) {
      return res.status(400).json({ success: false, error: "Invalid name" });
    }
    if (!/^[0-9]{10}$/.test(phone)) {
      return res.status(400).json({ success: false, error: "Phone must be 10 digits" });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ success: false, error: "Invalid email address" });
    }

    const newDemo = new Demo({ name, phone, email, course, message });
    await newDemo.save();

    console.log(" New Demo Request Saved:", newDemo); // Log to console

    res.json({
      success: true,
      message: "Demo request saved successfully!",
      data: newDemo,
    });
  } catch (error) {
    console.error(" Error saving demo request:", error);
    res.status(500).json({ success: false, error: "Failed to save demo request" });
  }
};
