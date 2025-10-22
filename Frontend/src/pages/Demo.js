import React, { useState } from "react";
import "./Demo.css";
import {
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaTimes,
} from "react-icons/fa";

export default function Demo() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (!/^[A-Za-z\s]+$/.test(formData.name))
      newErrors.name = "Name must contain only alphabets";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10 digits";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address";

    if (!formData.course) newErrors.course = "Please select a course";

    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    setLoading(true);

    try {
      const res = await fetch("https://cyberoaks-cj2p.vercel.app/api/demo/saveDemo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Server Response:", data);

      if (data.success) {
        setFormData({
          name: "",
          phone: "",
          email: "",
          course: "",
          message: "",
        });
        setPopupVisible(true);

        // Auto-close popup after 5 seconds
        setTimeout(() => setPopupVisible(false), 5000);
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error("Error submitting demo form:", err);
      alert("Server error! Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="demo-container">
      <div className="demo-content container">
        {/* Left Section */}
        <div className="demo-left">
          <h2>Book A Free Demo</h2>
          <p>
            Have any questions or need assistance? Our team is here to help!
            Reach out to us via call, WhatsApp, or email — we’ll be happy to
            assist you.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h5  className="contact-info-heading">Contact Us</h5>
                <p>
                  Landline: <a href="tel:04043590308">040 - 43590308</a>
                </p>
                <p>
                  Mobile: <a href="tel:+917893907799">+91 7893907799</a>
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:cyberoaks53@gmail.com">
                    cyberoaks53@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="info-item">
              <FaClock className="info-icon" />
              <div>
                <h5 className="contact-info-heading">Opening Hours</h5>
                <p>Mon - Fri: 9:30 AM - 6:30 PM</p>
                <p>Sat & Sunday: Closed</p>
              </div>
            </div>

            {/* Address */}
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h5 className="contact-info-heading">Address</h5>
                <p>
                  Flat No. 204, 2nd Floor, Vasanthas Cyberview, Opp GHMC Park
                  Gate, near Jain Sadguru Image Capital Park, Madhapur - 500081.
                </p>
              </div>
            </div>

           

            
          </div>
        </div>

        {/* Right Section */}
        <div className="demo-right">
          <h3>Request For More Details</h3>

          <form onSubmit={handleSubmit} noValidate>
            <label>Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
            />
            {errors.name && <small className="error-text">{errors.name}</small>}

            <label>Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit Phone Number"
              maxLength="10"
            />
            {errors.phone && <small className="error-text">{errors.phone}</small>}

            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
            />
            {errors.email && <small className="error-text">{errors.email}</small>}

            <label>Select Course *</label>
            <select name="course" value={formData.course} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Web Development">Web Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Data Science">Data Science</option>
              <option value="React Native">React Native</option>
              <option value="Flutter">Flutter</option>
            </select>
            {errors.course && <small className="error-text">{errors.course}</small>}

            <label>Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
            ></textarea>
            {errors.message && <small className="error-text">{errors.message}</small>}

            <div className="btn-group">
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {popupVisible && (
        <div className="Demo-popup-overlay">
          <div className="Demo-popup">
            <FaCheckCircle className="Demo-popup-icon" />
            <h4>Thank you for submitting!</h4>
            <p>
              We’ve received your request. Our team will contact you soon with
              more details.
            </p>
            <button className="Demo-popup-close" onClick={() => setPopupVisible(false)}>
              <FaTimes /> Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
