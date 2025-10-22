import React from "react";
import { Link } from "react-router-dom";
import "./Courses.css";
import fullstackImg from "../assets/images/fullstack-home.jpg";
import uiuxImg from "../assets/images/uiux-home.jpg";
import datascienceImg from "../assets/images/datascience-home.jpg";
import reactnativeImg from "../assets/images/reactnative-home.jpg";
import flutterImg from "../assets/images/flutter-home.jpg";

export default function Courses() {
  return (
    <div className="courses-container">
      {/* Courses Section */}
      <section className="courses-section container">
        <h1 className="course-heading-main">Explore Our Courses</h1>
        <p>
          Learn in-demand skills with Cyberoaks’ professional training programs.
        </p>
        <div className="course-grid">
          <div className="course-card">
            <img src={fullstackImg} alt="Full Stack Development" className="course-image" />
            <h3 className="course-heading">Full Stack Development</h3>
            <p>Master front-end & back-end with real projects using HTML, CSS, JS, React, Node.js & MongoDB.</p>
            <Link to="/web-development" className="btn-sm">Enroll Now</Link>
          </div>

          <div className="course-card">
            <img src={uiuxImg} alt="UI / UX Design" className="course-image" />
            <h3 className="course-heading">UI / UX Design</h3>
            <p>Design beautiful, user-friendly interfaces with Figma, Photoshop, Illustrator & Adobe XD.</p>
            <Link to="/ui-ux-design" className="btn-sm">Enroll Now</Link>
          </div>

          <div className="course-card">
            <img src={datascienceImg} alt="Data Science" className="course-image" />
            <h3 className="course-heading">Data Science</h3>
            <p>Learn Python, ML, AI, and analytics with hands-on projects to become a skilled Data Scientist.</p>
            <Link to="/data-science" className="btn-sm">Enroll Now</Link>
          </div>

          <div className="course-card">
            <img src={reactnativeImg} alt="React Native" className="course-image" />
            <h3 className="course-heading">React Native</h3>
            <p>Build high-performance mobile apps for Android & iOS with React Native and real projects.</p>
            <Link to="/demo" className="btn-sm">Enroll Now</Link>
          </div>

          <div className="course-card">
            <img src={flutterImg} alt="Flutter" className="course-image" />
            <h3 className="course-heading">Flutter</h3>
            <p>Learn Google’s Flutter framework to create cross-platform mobile apps with Dart and widgets.</p>
            <Link to="/demo" className="btn-sm">Enroll Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
