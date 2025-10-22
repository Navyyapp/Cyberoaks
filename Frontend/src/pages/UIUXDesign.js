import React, { useState, useEffect, useRef } from "react";
import "./UIUXDesign.css";
import uiuxImg from "../assets/images/uiux-home.jpg";
import photoshopIcon from "../assets/images/uiux-img1.png";
import figmaIcon from "../assets/images/uiux-img2.png";
import adobeXdIcon from "../assets/images/uiux-img3.png";
import illustratorIcon from "../assets/images/uiux-img4.png";
import protopieIcon from "../assets/images/uiux-img5.png";
import sketchIcon from "../assets/images/uiux-img6.png";
import { Link } from "react-router-dom";
import Demo from "./Demo";

export default function UIUXDesign() {

  
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeFAQ, setActiveFAQ] = useState(null);
 
const tools = [
    photoshopIcon,
    figmaIcon,
    adobeXdIcon,
    illustratorIcon,
    protopieIcon,
    sketchIcon,
  ];

  // Duplicate for smooth infinite loop
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 6; // show 6 icons

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 1 >= tools.length ? 0 : prev + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [tools.length]);

  const getVisibleTools = () => {
    const start = currentIndex;
    const end = start + visibleCount;
    return [...tools, ...tools].slice(start, end);
  };
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

 
  const modules = [
    {
      title: "Module 1: Introduction to UI/UX",
      content: [
        "Understanding Design Thinking",
        "Principles of User Experience",
        "Human-Centered Design Process",
        "Design Systems Overview",
      ],
    },
    {
      title: "Module 2: UX Research & Strategy",
      content: [
        "User Research Methods",
        "Personas & User Journey Maps",
        "Information Architecture",
        "Wireframing Basics",
      ],
    },
    {
      title: "Module 3: UI Design Essentials",
      content: [
        "Visual Hierarchy & Layout",
        "Typography & Color Theory",
        "Design Grids & Components",
        "Responsive Design Principles",
      ],
    },
    {
      title: "Module 4: Tools & Prototyping",
      content: [
        "Figma Essentials",
        "Adobe XD & Sketch",
        "Interactive Prototyping",
        "Design Handoff with Developers",
      ],
    },
    {
      title: "Module 5: Portfolio & Case Studies",
      content: [
        "Creating Design Case Studies",
        "Building a Strong Portfolio",
        "Presenting to Clients",
        "Career Guidance & Placement",
      ],
    },
  ];

  const faqs = [
    {
      q: "Why choose Cyberoaks for UI/UX Design Training in Hyderabad?",
      a: "Cyberoaks provides hands-on UI/UX training using tools like Figma, Adobe XD, and Sketch, guided by industry experts and real-world projects.",
    },
    {
      q: "What is the duration of the UI/UX Design course?",
      a: "The course duration is typically 3–4 months, including live projects and portfolio preparation.",
    },
    {
      q: "Do I need prior design experience to enroll?",
      a: "No prior experience is required. The course is beginner-friendly and starts from design fundamentals.",
    },
    {
      q: "Will I work on live projects?",
      a: "Yes, you’ll design real interfaces and prototypes for web and mobile applications.",
    },
    {
      q: "Does Cyberoaks offer placement assistance?",
      a: "Yes, 100% placement support is offered, including portfolio reviews and interview preparation.",
    },
  ];

  return (
    <section className="uiux-page">
      {/* ===== Banner ===== */}
      <div className="uiux-banner">
        <div className="uiux-banner-content">
          <h1>UI/UX Design Course in Hyderabad</h1>
          <p>
            Learn to create stunning and user-friendly digital experiences. The UI/UX Design course at Cyberoaks covers design thinking, user research, wireframing, prototyping, and usability testing. Gain mastery over top design tools like Figma, Adobe XD, and Sketch.
          </p>
          <Link to="/enroll" className="uiux-btn">Enroll Now</Link>
         
          <p>Offline | Online | Live Projects | Internship</p>
        </div>
        <div className="uiux-banner-image-right">
          <img className="uiux-banner-image" src={uiuxImg} alt="UI/UX Design" />
        </div>
      </div>

      {/* ===== SCROLLING STRIP ===== */}
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

      {/* ===== Overview ===== */}
      <div className="uiux-overview">
        <div className="uiux-overview-left">
          <h2>Course Overview</h2>
          <p>
            UI/UX Design bridges creativity and functionality, focusing on delivering engaging digital experiences. Through this course, you’ll master design principles, create responsive layouts, and understand how to align visuals with user goals.
          </p>
          <h3>Why Learn UI/UX Design?</h3>
          <h3>High Demand</h3>
          <p>Businesses increasingly prioritize user experience, creating strong demand for skilled UI/UX designers globally.</p>
          <h3>Creative & Analytical</h3>
          <p>It’s a perfect blend of artistic creativity and data-driven user research.</p>
          <h3>Lucrative Career Path</h3>
          <p>UI/UX designers earn competitive salaries, often starting above 6 LPA in India.</p>
        </div>

      <div>
        <Demo/>
      </div>
      </div>

      {/* ===== Curriculum ===== */}
      <div className="uiux-curriculum">
        <h2>Course Curriculum</h2>
        <div className="uiux-curriculum-container">
          {modules.map((mod, index) => (
            <div
              key={index}
              className={`uiux-accordion-item ${activeIndex === index ? "active" : ""}`}
            >
              <button className="uiux-accordion-title" onClick={() => handleToggle(index)}>
                {mod.title}
                <span>{activeIndex === index ? "−" : "+"}</span>
              </button>
              <div
                className="uiux-accordion-content"
                style={{ maxHeight: activeIndex === index ? "250px" : "0px" }}
              >
                <ul>
                  {mod.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Tools Section ===== */}
     <section className="uiux-tools-section">
      <h2>Master Industry-Standard Tools</h2>

      <div className="uiux-carousel ">
        <div className="uiux-tools-wrapper">
          {getVisibleTools().map((icon, i) => (
            <div className="uiux-tool" key={i}>
              <img src={icon} alt={`tool-${i}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="uiux-dots">
        {tools.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(i)}
          ></span>
        ))}
      </div>
    </section>
      {/* ===== FAQ ===== */}
      <div className="uiux-faq">
        <h2>FAQ's</h2>
        <div className="uiux-faq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`uiux-faq-item ${activeFAQ === index ? "active" : ""}`}
            >
              <button className="uiux-faq-question" onClick={() => toggleFAQ(index)}>
                {faq.q}
                <span>{activeFAQ === index ? "−" : "+"}</span>
              </button>
              <div
                className="uiux-faq-answer"
                style={{ maxHeight: activeFAQ === index ? "200px" : "0px" }}
              >
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
