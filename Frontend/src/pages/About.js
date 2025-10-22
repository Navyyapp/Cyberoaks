import React, { useState } from "react";
import "./About.css";
import aboutPageimg1 from "../assets/images/cyberoaks-about.jpg";
import fullstackImg from "../assets/images/fullstack-home.jpg";
import uiuxImg from "../assets/images/uiux-home.jpg";
import Reviews from "./Reviews";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer: "Call or WhatsApp +91  7893907799 to get started!",
    },
    {
      question: "Is there a support system for students?",
      answer:
        "Absolutely! We offer 24/7 support through live chat, email, and WhatsApp mentoring.",
    },
    {
      question: "Can I book a live demo session?",
      answer: "Yes! You can schedule a live demo with our expert trainers.",
    },
    {
      question: "Can I access my courses on mobile devices?",
      answer: "All our courses are mobile-friendly for flexible learning.",
    },
  ];

  return (
    <section className="about-page">
      {/* === Hero Banner === */}
      <div className="about-page-banner">
        <img
          src={aboutPageimg1}
          alt="Cyberoaks learning banner"
          className="about-page-banner-img"
        />
        <div className="about-page-banner-text">
          Take the next step toward your personal & professional goals
        </div>
      </div>

      {/* === About Section === */}
      <div className="about-page-container">
        <div className="about-page-left">
          <div className="about-page-images">
            <div className="about-page-img about-page-img1">
              <img
                src={fullstackImg}
                alt="Student learning online"
                className="about-page-image"
              />
              <div className="about-page-play-btn">▶</div>
            </div>

            <div className="about-page-img about-page-img2">
              <img
                src={uiuxImg}
                alt="Student attending online session"
                className="about-page-image"
              />
              <div className="about-page-stats-card">
                <div className="about-page-stat-icon">👨‍🎓</div>
                <div>
                  <h3>500+</h3>
                  <p>Happy Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-page-right">
          <h1 className="about-page-title">
            A Faster Way For Your Employees To{" "}
            <span className="about-page-highlight">Grow & Upskill</span>
          </h1>

          <p className="about-page-desc">
            Cyberoaks is dedicated to excellence in training, skill development, and
            building a supportive learning community.
          </p>

          <ul className="about-page-features">
            <li>
              <div className="about-page-feature-icon">🎓</div>
              <div>
                <h4>Expert-Led Training</h4>
                <p>
                  Our trainers, like our learners, come from diverse
                  backgrounds, bringing real-world industry experience.
                </p>
              </div>
            </li>
            <li>
              <div className="about-page-feature-icon">📘</div>
              <div>
                <h4>In-Depth Knowledge</h4>
                <p>
                  Our instructors are subject matter experts, providing
                  hands-on insights and practical learning.
                </p>
              </div>
            </li>
            <li>
              <div className="about-page-feature-icon">✨</div>
              <div>
                <h4>Personalized Learning</h4>
                <p>
                  We recognize that every learner is unique and tailor our
                  training to enhance individual strengths.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* === Benefits Section === */}
      <div className="about-page-benefits">
        <div className="about-page-benefits-content">
          <h2 className="about-page-section-title">
            Benefits Of A{" "}
            <span className="about-page-highlight">Cyberoaks Certificate</span>
          </h2>

          <ul className="about-page-benefit-list">
            <li>
              <span className="about-page-benefit-icon">✅</span>
              <div>
                <h4>Validate Your Expertise</h4>
                <p>
                  A Cyberoaks certificate showcases your skills and knowledge,
                  enhancing your professional credibility.
                </p>
              </div>
            </li>
            <li>
              <span className="about-page-benefit-icon">🚀</span>
              <div>
                <h4>Gain a Competitive Edge</h4>
                <p>
                  Add your Cyberoaks certification to your resume and stand out in
                  your field.
                </p>
              </div>
            </li>
            <li>
              <span className="about-page-benefit-icon">🎯</span>
              <div>
                <h4>Boost Your Career Growth</h4>
                <p>
                  Showcase your Cyberoaks certification to employers to highlight
                  your skills and advance your career.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="about-page-benefit-images">
          <img src={fullstackImg} alt="Certificate benefit" />
        </div>
      </div>

      {/* === Reviews Section === */}
      <Reviews />

      {/* === FAQ Section === */}
      <div className="about-page-faq">
        <h2 className="about-page-section-title">
          Frequently Asked <span className="about-page-highlight">Questions</span>
          <br /> We’ve Got <span className="about-page-highlight">Answers!</span>
        </h2>

        <div className="about-page-faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`about-page-faq-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <button
                className="about-page-faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="about-page-faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className="about-page-faq-answer"
                style={{
                  maxHeight: activeIndex === index ? "200px" : "0",
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
