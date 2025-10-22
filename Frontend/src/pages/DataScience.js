import React, { useState, useEffect, useRef } from "react";
import "./DataScience.css";
import dsBanner from "../assets/images/datascience-home.jpg";
import pythonIcon from "../assets/images/data-science-img1.png";
import pandasIcon from "../assets/images/data-science-img2.png";
import numpyIcon from "../assets/images/data-science-img3.png";
import mlIcon from "../assets/images/data-science-img4.png";
import tableauIcon from "../assets/images/data-science-img5.png";
import vscodeIcon from "../assets/images/data-science-img6.png";
import mysqlIcon from "../assets/images/data-science-img7.png";
import Demo from "./Demo";
import { Link } from "react-router-dom";

export default function DataScience() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const tools = [pythonIcon, pandasIcon, numpyIcon, mlIcon, tableauIcon, mysqlIcon, vscodeIcon];
  const visibleCount = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1 >= tools.length ? 0 : prev + 1));
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
      title: "Module 1: Python for Data Science",
      content: [
        "Python Basics and Syntax",
        "Data Structures and Functions",
        "Numpy and Pandas",
        "Data Cleaning and Manipulation",
      ],
    },
    {
      title: "Module 2: Data Visualization",
      content: [
        "Matplotlib and Seaborn",
        "Exploratory Data Analysis (EDA)",
        "Storytelling with Data",
        "Dashboarding with Tableau and Power BI",
      ],
    },
    {
      title: "Module 3: Statistics and Probability",
      content: [
        "Descriptive Statistics",
        "Hypothesis Testing",
        "Probability Distributions",
        "Regression Analysis",
      ],
    },
    {
      title: "Module 4: Machine Learning",
      content: [
        "Supervised and Unsupervised Learning",
        "Model Evaluation and Optimization",
        "Scikit-learn and TensorFlow",
        "Real-world ML Projects",
      ],
    },
    {
      title: "Module 5: Projects & Deployment",
      content: [
        "End-to-End Data Pipeline",
        "Model Deployment using Flask",
        "Version Control with Git",
        "Portfolio and Capstone Project",
      ],
    },
  ];

  const faqs = [
    {
      q: "Why choose Cyberoaks for Data Science Training in Hyderabad?",
      a: "Cyberoaks offers hands-on Data Science training with real-world projects, expert mentors, and placement assistance, helping you become job-ready from day one.",
    },
    {
      q: "What is the duration of the Data Science course?",
      a: "The program typically runs for 4–6 months including project work, internships, and placement sessions.",
    },
    {
      q: "Does Cyberoaks provide placement assistance?",
      a: "Yes, 100% placement support is provided with mock interviews, resume building, and industry connections.",
    },
    {
      q: "What tools will I learn in the Data Science course?",
      a: "You’ll master Python, Pandas, NumPy, Matplotlib, Tableau, Power BI, and Machine Learning frameworks like Scikit-learn and TensorFlow.",
    },
    {
      q: "Is this course suitable for beginners?",
      a: "Absolutely! Cyberoaks’ Data Science course starts from basics, gradually progressing to advanced ML and AI concepts.",
    },
  ];

  return (
    <section className="datascience-page">
      {/* ====== Banner ====== */}
      <div className="datascience-banner">
        <div className="datascience-banner-content">
          <h1>Data Science Course in Hyderabad</h1>
          <p>
            Data Science empowers professionals to extract valuable insights from raw data using analytics, machine learning, and AI. This course covers Python, Data Analysis, Visualization, Machine Learning, and Deployment, preparing you for high-demand data-driven careers.
          </p>
          <Link to="/enroll" className="datascience-btn">Enroll Now</Link>
          <p>Offline | Online | Live Projects | Internship</p>
        </div>
        <div className="datascience-banner-image-right">
          <img className="datascience-banner-image" src={dsBanner} alt="Data Science" />
        </div>
      </div>

      {/* ====== Scroll Banner ====== */}
      <div className="scroll-banner">
        <div className="scroll-track">
          <div className="scroll-content">
            <span>
              <i className="fas fa-phone-alt"></i>&nbsp; 7893907799
              <span className="divider"></span>
              <i className="fas fa-rocket"></i>&nbsp;Join Now
              <span className="divider"></span>
              <i className="fas fa-clock"></i>&nbsp;New Batches Starting Soon
            </span>

            <span>
              <i className="fas fa-phone-alt"></i>&nbsp; 7893907799
              <span className="divider"></span>
              <i className="fas fa-rocket"></i>&nbsp;Join Now
              <span className="divider"></span>
              <i className="fas fa-clock"></i>&nbsp;New Batches Starting Soon
            </span>
            <span>
              <i className="fas fa-phone-alt"></i>&nbsp; 7893907799
              <span className="divider"></span>
              <i className="fas fa-rocket"></i>&nbsp;Join Now
              <span className="divider"></span>
              <i className="fas fa-clock"></i>&nbsp;New Batches Starting Soon
            </span>
          </div>
        </div>
      </div>

      {/* ====== Overview ====== */}
      <div className="datascience-overview">
        <div className="datascience-overview-left">
          <h2>Course Overview</h2>
          <p>
            Data Science combines statistics, programming, and business understanding to derive insights from data. Cyberoaks’ Data Science course focuses on real-world applications—covering Python, Data Analysis, Visualization, Machine Learning, and deployment.
          </p>

          <h3>Why Learn Data Science?</h3>
          <h3>High Demand</h3>
          <p>Data Science is one of the most in-demand skills worldwide, empowering industries to make data-driven decisions.</p>
          <h3>Lucrative Career</h3>
          <p>Data Scientists are among the highest-paid professionals with salaries averaging ₹8–15 LPA in India.</p>
          <h3>Real-World Application</h3>
          <p>From healthcare to finance, data science drives innovation, helping organizations predict trends and optimize performance.</p>
        </div>
        <div>
          <Demo />
        </div>
      </div>

      {/* ====== Curriculum ====== */}
      <div className="datascience-curriculum">
        <h2>Course Curriculum</h2>
        <div className="datascience-curriculum-container">
          {modules.map((mod, index) => (
            <div
              key={index}
              className={`datascience-accordion-item ${activeIndex === index ? "active" : ""}`}
            >
              <button
                className="datascience-accordion-title"
                onClick={() => handleToggle(index)}
              >
                {mod.title}
                <span>{activeIndex === index ? "−" : "+"}</span>
              </button>
              <div
                className="datascience-accordion-content"
                style={{
                  maxHeight: activeIndex === index ? "250px" : "0px",
                }}
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
      <section className="datascience-tools-section">
        <h2>Become an Expert in Demand Tools</h2>
        <div className="datascience-carousel">
          <div className="datascience-tools-wrapper">
            {getVisibleTools().map((icon, i) => (
              <div className="datascience-tool" key={i}>
                <img src={icon} alt={`tool-${i}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="datascience-dots">
          {tools.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(i)}
            ></span>
          ))}
        </div>
      </section>


      {/* ====== FAQ ====== */}
      <div className="datascience-faq">
        <h2>FAQ's</h2>
        <div className="datascience-faq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`datascience-faq-item ${activeFAQ === index ? "active" : ""}`}
            >
              <button
                className="datascience-faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {faq.q}
                <span>{activeFAQ === index ? "−" : "+"}</span>
              </button>
              <div
                className="datascience-faq-answer"
                style={{
                  maxHeight: activeFAQ === index ? "200px" : "0px",
                }}
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
