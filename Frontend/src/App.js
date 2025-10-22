
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Reviews from "./pages/Reviews";
import Enroll from "./pages/Enroll";
import WebDevelopment from "./pages/WebDevelopment";
import UIUXDesign from "./pages/UIUXDesign";
import DataScience from "./pages/DataScience";
import Demo from "./pages/Demo";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses/*" element={<Courses />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/Demo" element={<Demo />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/ui-ux-design" element={<UIUXDesign />} />
        <Route path="/data-science" element={<DataScience />} />
         <Route path="/enroll" element={<Enroll />} />
         <Route path="/terms-and-conditions" element={<TermsAndConditions/>} />
         <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/Refund-policy" element={<RefundPolicy/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
