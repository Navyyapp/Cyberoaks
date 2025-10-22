import React, { useEffect, useState } from "react";
import "./WebDevelopment.css";
import fullstackImg from "../assets/images/fullstack-home.jpg";
import reactIcon from "../assets/images/full-stack-img3.png";
import bootstrapIcon from "../assets/images/full-stack-img4.png";
import cssIcon from "../assets/images/full-stack-img5.png";
import htmlIcon from "../assets/images/full-stack-img1.png";
import jsIcon from "../assets/images/full-stack-img2.png";
import { Link } from "react-router-dom";
import Demo from "./Demo";

export default function WebDevelopment() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const tools = [htmlIcon, cssIcon, jsIcon, bootstrapIcon, reactIcon];
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

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const modules = [
    {
      title: "Module 1: Frontend HTML",
      content: ["HTML Basics", "HTML Forms", "HTML5 APIs", "Accessibility"],
    },
    {
      title: "Module 2: CSS & Bootstrap",
      content: ["Selectors", "Flexbox", "Grid", "Bootstrap Components"],
    },
    {
      title: "Module 3: JavaScript",
      content: ["Variables", "Functions", "DOM", "ES6 & Async"],
    },
    {
      title: "Module 4: React JS",
      content: ["Components", "Hooks", "Routing", "APIs"],
    },
    {
      title: "Module 5: NodeJS & MongoDB",
      content: ["Express", "REST API", "MongoDB CRUD", "JWT Auth"],
    },
  ];

  const faqs = [
    {
      q: "What makes Cyberoaks’ Full Stack Development course different?",
      a: "Cyberoaks focuses on hands-on learning with real projects, expert trainers, and placement assistance. You’ll not just learn coding, but also how to apply it in real-world applications.",
    },
    {
      q: "Why choose Cyberoaks for Full Stack Development Training in Hyderabad?",
      a: "Our training combines classroom sessions, live projects, and mentorship by industry professionals with guaranteed placement assistance.",
    },
    {
      q: "What is the duration of the Full Stack Development course in Hyderabad?",
      a: "The course typically runs for 4–6 months including project and internship support.",
    },
    {
      q: "Does Cyberoaks offer placement support?",
      a: "Yes, 100% placement assistance is provided through mock interviews, resume prep, and interview scheduling.",
    },
    {
      q: "Are there any live projects in Cyberoaks’ Full Stack training?",
      a: "Yes, learners will build live applications using React, Node.js, and MongoDB to gain practical exposure.",
    },
  ];

  return (
    <section className="webdev-page">
      {/* ===== Banner ===== */}
      <div className="webdev-banner">
        <div className="webdev-banner-content">
          <h1>Full Stack Course in Hyderabad</h1>
          <p>
            Full Stack Development involves building both the front-end and
            back-end of web applications, enabling developers to create complete
            digital solutions using technologies like React, Node.js, and
            MongoDB.
          </p>
          <Link to="/enroll" className="webdev-btn">
            Enroll Now
          </Link>
          <p>Offline | Online | Realtime Projects | Internship</p>
        </div>

        <div className="webdev-banner-image-right">
          <img
            className="webdev-banner-image"
            src={fullstackImg}
            alt="Full Stack"
          />
        </div>
      </div>

      {/* ===== Scrolling Strip ===== */}
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
      <div className="webdev-overview">
        <div className="webdev-overview-left">
          <h2>Course Overview</h2>
          <p>
            Full Stack Development offers skills across front-end, back-end,
            APIs, and databases, allowing developers to build complete web
            solutions. The MERN Stack—MongoDB, Express.js, React, and Node.js—
            empowers efficient, modern applications.
          </p>
          <h3>Why Learn Full Stack Development?</h3>
          <h3>Widely Used</h3>
          <p>
            Technologies like React, Node.js, and Express.js are used globally
            for building high-performance apps with responsive UIs.
          </p>
          <h3>Lucrative Salary</h3>
          <p>
            The average salary for a Full Stack Developer in India is over 6
            LPA, making it one of the most in-demand careers.
          </p>
          <h3>Create with Ease</h3>
          <p>
            Build modular, scalable applications using React for front-end and
            Node.js for back-end integration.
          </p>
        </div>

        <div>
          <Demo />
        </div>
      </div>

      {/* ===== Curriculum ===== */}
      <div className="webdev-curriculum">
        <h2>Course Curriculum</h2>
        <div className="webdev-curriculum-container">
          {modules.map((mod, index) => (
            <div
              key={index}
              className={`webdev-accordion-item ${activeIndex === index ? "active" : ""
                }`}
            >
              <button
                className="webdev-accordion-title"
                onClick={() => handleToggle(index)}
              >
                {mod.title}
                <span>{activeIndex === index ? "−" : "+"}</span>
              </button>
              <div
                className="webdev-accordion-content"
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
      <section className="webdev-tools-section">
        <h2>Become an Expert in Demand Tools</h2>
        <div className="webdev-carousel">
          <div className="webdev-tools-wrapper">
            {getVisibleTools().map((icon, i) => (
              <div className="webdev-tool" key={i}>
                <img src={icon} alt={`tool-${i}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="webdev-dots">
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
      <div className="webdev-faq">
        <h2>FAQ's</h2>
        <div className="webdev-faq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`webdev-faq-item ${activeFAQ === index ? "active" : ""
                }`}
            >
              <button
                className="webdev-faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {faq.q}
                <span>{activeFAQ === index ? "−" : "+"}</span>
              </button>
              <div
                className="webdev-faq-answer"
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
