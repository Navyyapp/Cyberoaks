import React, { useRef, useState, useEffect } from "react";
import "./Home.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import fullstackImg from "../assets/images/fullstack-home.jpg";
import uiuxImg from "../assets/images/uiux-home.jpg";
import datascienceImg from "../assets/images/datascience-home.jpg";
import reactnativeImg from "../assets/images/reactnative-home.jpg";
import flutterImg from "../assets/images/flutter-home.jpg";
import aboutImg from "../assets/images/cyberoaks-about-section.png";
import aboutImage from "../assets/images/cyberoaks-home-img1.png";
import student1 from "../assets/images/cyberoaks-student9.jpg";
import student2 from "../assets/images/cyberoaks-student1.jpg";
import student3 from "../assets/images/cyberoaks-student6.jpg";
import student4 from "../assets/images/cyberoaks-student4.jpg";
import student5 from "../assets/images/cyberoaks-student8.jpg";
import student6 from "../assets/images/cyberoaks-student5.jpg";
import student7 from "../assets/images/cyberoaks-student7.jpg";
import student8 from "../assets/images/cyberoaks-student3.jpg";

import { FaArrowRight } from "react-icons/fa";
import { FaChalkboardTeacher, FaBookOpen, FaUserGraduate, FaHeadset } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Reviews from "./Reviews";
import Courses from "./Courses";
import Demo from "./Demo";

const students = [
  { img: student1, name: "Arjun Mehta", company: "Infosys", role: "Full Stack Developer" },
  { img: student2, name: "Sneha Nair", company: "Wipro", role: "Frontend Engineer" },
  { img: student3, name: "Rahul Deshmukh", company: "Capgemini", role: "React Developer" },
  { img: student4, name: "Priya Sharma", company: "TCS", role: "UI/UX Designer" },
  { img: student5, name: "Rohit Menon", company: "Cognizant", role: "Data Analyst" },
  { img: student6, name: "Divya Reddy", company: "Accenture", role: "Backend Developer" },
  { img: student7, name: "Karan Patel", company: "Tech Mahindra", role: "Software Engineer" },
  { img: student8, name: "Neha Verma", company: "IBM", role: "MERN Stack Developer" },
];

export default function Home() {

  const carouselRef = useRef(null);
  const [cardWidthWithGap, setCardWidthWithGap] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your free demo request has been submitted.");
    setFormData({ name: "", phone: "", email: "", course: "", message: "" });
  };
  // compute card width + gap
  const computeCardWidth = () => {
    const container = carouselRef.current;
    if (!container) return;

    const firstCard = container.querySelector(".wall-card");
    if (!firstCard) return;

    const cardRect = firstCard.getBoundingClientRect();
    const style = window.getComputedStyle(container);
    // try to read gap from container if using gap (flex gap)
    let gap = 0;
    // 'gap' property is available when using CSS gap in modern browsers
    const gapStr = style.getPropertyValue("gap") || style.getPropertyValue("column-gap");
    if (gapStr) {
      gap = parseFloat(gapStr) || 0;
    } else {
      // fallback: compute margin-right of card
      const cardStyle = window.getComputedStyle(firstCard);
      gap = parseFloat(cardStyle.marginRight) || 0;
    }
    setCardWidthWithGap(Math.round(cardRect.width + gap));
  };

  // scroll helpers
  const scrollRight = () => {
    const container = carouselRef.current;
    if (!container || cardWidthWithGap === 0) return;
    container.scrollBy({ left: cardWidthWithGap, behavior: "smooth" });
  };

  const scrollLeft = () => {
    const container = carouselRef.current;
    if (!container || cardWidthWithGap === 0) return;
    container.scrollBy({ left: -cardWidthWithGap, behavior: "smooth" });
  };

  // update arrow enabled/disabled states
  const updateArrows = () => {
    const container = carouselRef.current;
    if (!container) return;
    setCanScrollLeft(container.scrollLeft > 5);
    // compare scrollLeft + clientWidth to scrollWidth
    setCanScrollRight(container.scrollLeft + container.clientWidth + 5 < container.scrollWidth);
  };

  useEffect(() => {
    computeCardWidth();
    updateArrows();

    const onResize = () => {
      computeCardWidth();
      updateArrows();
    };
    window.addEventListener("resize", onResize);

    const container = carouselRef.current;
    if (container) {
      // update arrows while user scrolls (so buttons reflect current pos)
      container.addEventListener("scroll", updateArrows, { passive: true });
    }
    return () => {
      window.removeEventListener("resize", onResize);
      if (container) container.removeEventListener("scroll", updateArrows);
    };
  }, [carouselRef.current]);


  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section ">
        <div className="hero-overlay container">
          <div className="hero-content-left">
            <h1 className="hero-content-left-heading">Empower Your Future with Cyberoaks</h1>
            <div className="hero-content-left-text-main">
              <div className="hero-content-text-left">
                <p className="hero-content-text-left-rating">
                  <span className="rating-num">4.95</span>Average Rating
                </p>
                <div className="rating-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <span className="rating-reviews">
                    <strong>500+</strong> Learner Reviews
                  </span>

                </div>
                <p className="powered-by">Powered by <strong>Cyberoaks</strong></p>
              </div>

              <div className="hero-content-text-right">
                <p className="hero-content-text-right-inner">Learn in-demand skills and build a career that makes a difference.</p>
              </div>
            </div>

            <div className="hero-buttons">
              <a href="/enroll" className="btn-primary">
                <span className="icon-circle">
                  <FaArrowRight />
                </span>
                Enroll Now
              </a>

              <a href="/courses" className="btn-secondary">
                <span className="icon-circle">
                  <FaArrowRight />
                </span>
                Explore Courses
              </a>
            </div>
          </div>
          <div className="hero-content-right">
            <img className="hero-section-image" src={aboutImage} alt="hero-Image" />
          </div>
        </div>
      </section>
      {/* ====== SCROLLING STRIP ====== */}
      <div className="scroll-banner">
        <div className="scroll-track">
          <div className="scroll-content">
            <span>
              <i className="fas fa-phone-alt"></i>&nbsp; 7893907799
              <span className="divider"></span>
              <i className="fas fa-rocket"></i>&nbsp;Join Now
              <span className="divider"></span>
              <i className="fas fa-clock"></i>&nbsp;New Sessions Begin Soon
            </span>

            <span>
              <i className="fas fa-phone-alt"></i>&nbsp; 7893907799
              <span className="divider"></span>
              <i className="fas fa-rocket"></i>&nbsp;Join Now
              <span className="divider"></span>
              <i className="fas fa-clock"></i>&nbsp;New Sessions Begin Soon
            </span>

            <span>
              <i className="fas fa-phone-alt"></i>&nbsp; 7893907799
              <span className="divider"></span>
              <i className="fas fa-rocket"></i>&nbsp;Join Now
              <span className="divider"></span>
              <i className="fas fa-clock"></i>&nbsp;New Sessions Begin Soon
            </span>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <section className="courses-section container">
       <Courses/>
      </section>

      {/* ====== ABOUT SECTION ====== */}

      <section className="about-section ">
        <h2 className="about-section-heading">Who we are</h2>
        <div className="about-container">

          <div className="about-img">
            <img src={aboutImg} alt="About Cyberoaks" />
          </div>

          <div className="about-content">
            <h4 className="section-subtitle">About Cyberoaks</h4>
            <h2 className="section-title">
              Empower Your <span>Future</span> With Cyberoaks
            </h2>
            <p className="about-description">
              Step confidently into your career with Cyberoaks' structured, mentor-driven programs.
              Gain practical, hands-on experience through guided learning paths and lifetime access to materials.
            </p>

            <ul className="about-points">
              <li><FaChalkboardTeacher className="icon" /> Offline & Online Training</li>
              <li><FaBookOpen className="icon" /> Lifetime Access to Materials</li>
              <li><FaUserGraduate className="icon" /> 100% Placement Assistance</li>
              <li><FaHeadset className="icon" /> Expert Mentorship</li>
            </ul>

            <div className="about-stats">
              <div className="stat-card">
                <h3>155+</h3>
                <p>Positive Reviews</p>
              </div>
              <div className="stat-card">
                <h3>2 Years</h3>
                <p>Experience</p>
              </div>
            </div>

            <div className="about-contact">
              <div className="about-contact">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="contact-text">
                    <h5>Call us now:</h5>
                    <p>+91  7893907799</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <h5>Get in touch:</h5>
                    <p>cyberoaks53@gmail.com</p>
                  </div>
                </div>
              </div>


            </div>

          </div>
        </div>
      </section>


{/* {WALL SECTION} */}
      <section className="wall-section container">
        <h2>Cyberoaks Wall of Love</h2>

        <div className="wall-carousel-wrapper">
          <button
            className="wall-arrow left"
            onClick={scrollLeft}
            aria-label="Scroll left"
            disabled={!canScrollLeft}
            title={!canScrollLeft ? "Start reached" : "Scroll left"}
          >
            <FaChevronLeft />
          </button>

          <div className="wall-carousel" ref={carouselRef} role="list">
            {students.map((s, i) => (
              <div key={i} className="wall-card" role="listitem">
                <img src={s.img} alt={s.name} />
                <h3>{s.name}</h3>
                <p>
                  Placed in <strong>{s.company}</strong>
                </p>
                <span>{s.role}</span>
              </div>
            ))}
          </div>

          <button
            className="wall-arrow right"
            onClick={scrollRight}
            aria-label="Scroll right"
            disabled={!canScrollRight}
            title={!canScrollRight ? "End reached" : "Scroll right"}
          >
            <FaChevronRight />
          </button>
        </div>
      </section>
  {/* Stats Section */}
      <section className="stats-section">
        <h2>Providing Exceptional Courses</h2>
        <p>We deliver engaging and effective programs designed to accelerate your career growth and technical expertise.</p>
        <div className="stats-grid">
          <div className="stat-item"><h3>500+</h3><p>Students Trained</p></div>
          <div className="stat-item"><h3>800+</h3><p>Projects Completed</p></div>
          <div className="stat-item"><h3>15+</h3><p>Expert Trainers</p></div>
          <div className="stat-item"><h3>450+</h3><p>Career Placements</p></div>
          <div className="stat-item"><h3>100%</h3><p>Job-Oriented Courses</p></div>
        </div>
      </section>
      {/* Features Section */}
      <section className="features-section container">
        <h2>Why Choose Cyberoaks</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Expert Trainers</h3>
            <p>Our instructors are skilled professionals committed to your success.</p>
          </div>
          <div className="feature-card">
            <h3>Hands-On Projects</h3>
            <p>Gain practical experience by working on real-world projects.</p>
          </div>
          <div className="feature-card">
            <h3>Flexible Learning</h3>
            <p>Learn online or offline at your own pace with lifetime access.</p>
          </div>
          <div className="feature-card">
            <h3>Official Certificates</h3>
            <p>Earn certificates recognized by industry leaders upon course completion.</p>
          </div>
        </div>
      </section>

    
    <Reviews/>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Interactive & Career-Oriented Learning</h2>
        <p>The perfect platform to enhance skills and build a thriving career with Cyberoaks.</p>
        <a href="/enroll" className="btn-primary">Get Started</a>
      </section>

      {/* Contact Section */}
      <section className="home-cyberoaks-contact-section">
        <h2 className="home-cyberoaks-contact-title">Get In Touch</h2>

        <div>
          <Demo/>
        </div>
      </section>
    </div>
  );
}
