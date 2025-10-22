import React, { useState } from "react";
import "./Enroll.css";

export default function Enroll() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });

  const [errors, setErrors] = useState({});
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [paymentId, setPaymentId] = useState("");

  // ---------------- VALIDATION ----------------
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name should contain only alphabets.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.course) {
      newErrors.course = "Please select a course.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ---------------- HANDLE INPUT CHANGE ----------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: "" }));

    if (name === "course") {
      switch (value) {
        case "Web Development":
          setPrice(1);
          break;
        case "UI/UX Design":
          setPrice(9999);
          break;
        case "Data Science":
          setPrice(8999);
          break;
        default:
          setPrice(0);
      }
    }
  };

  // ---------------- HANDLE PAYMENT ----------------
  const handlePayment = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const orderRes = await fetch("http://localhost:5000/api/enroll/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: price }),
      });

      const orderData = await orderRes.json();

      if (!orderData.success) {
        alert("Failed to create payment order. Try again.");
        setLoading(false);
        return;
      }

      const options = {
        key: "rzp_test_RW9Fsq6Hebd3YN",
        amount: orderData.amount,
        currency: "INR",
        name: "Cyberoaks",
        description: `${formData.course} Course Payment`,
        image: "https://cyberoaks.in/logo.png",
        order_id: orderData.orderId,
        handler: async function (response) {
          const saveRes = await fetch("http://localhost:5000/api/enroll/save", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...formData,
              paymentId: response.razorpay_payment_id,
              amount: price,
            }),
          });

          const saveData = await saveRes.json();
          if (saveData.success) {
            setPaymentId(response.razorpay_payment_id);
            setShowPopup(true);
            setFormData({ name: "", phone: "", email: "", course: "" });
            setPrice(0);
          } else {
            alert("Enrollment save failed. Please contact support.");
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: { color: "#0ea865" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment error:", err);
      alert("Payment initialization failed. Try again later.");
    }
    setLoading(false);
  };

  // ---------------- CLOSE POPUP ----------------
  const closePopup = () => setShowPopup(false);

  return (
    <div className="enroll-payment-container">
      <div className="enroll-payment-box">
        <h2>Enroll Now</h2>
        <p>Fill in your details and proceed to secure payment.</p>

        <form className="payment-form" onSubmit={(e) => e.preventDefault()}>
          <label>Full Name *</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <label>Phone Number *</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            maxLength="10"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}

          <label>Email *</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <label>Select Course *</label>
          <select name="course" value={formData.course} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Web Development">Web Development</option>
            <option value="UI/UX Design">UI/UX Design </option>
            <option value="Data Science">Data Science</option>
          </select>
          {errors.course && <span className="error">{errors.course}</span>}

          {price > 0 && (
            <div className="price-display">
              <strong>Total Amount:</strong> ₹{price}
            </div>
          )}

          <button
            type="button"
            className="pay-btn"
            onClick={handlePayment}
            disabled={loading}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </form>
      </div>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <div className="popup-icon">🎉</div>
            <h3>Enrollment Successful!</h3>
            <p>
              Thank you, <strong>{formData.name || "Student"}</strong>! <br />
              Your enrollment for <strong>{formData.course}</strong> was successful.
            </p>
            <p className="payment-id">
              <strong>Payment ID:</strong> {paymentId}
            </p>
            <button className="close-popup-btn" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
