import React, { useState, useRef, useEffect } from "react";
import "./Reviews.css";

export default function Reviews() {
  const reviews = [
    {
      name: "Ramesh",
      quote:
        "Cyberoaks offers the perfect mix of online and offline learning. The courses are well-structured, and the trainers are highly knowledgeable.",
    },
    {
      name: "Akhila",
      quote:
        "Learning at Cyberoaks was a game-changer for me. The hands-on projects and supportive trainers made all the difference!",
    },
    {
      name: "Anusha",
      quote:
        "Cyberoaks’s courses are truly amazing! The expert trainers and practical approach helped me excel in my field. Highly recommend!",
    },
    {
      name: "Kushal",
      quote:
        "The mentors at Cyberoaks really care about your growth. Every project helped me gain real-world confidence.",
    },
    {
      name: "Ramya",
      quote:
        "Cyberoaks’s blended learning style made it so easy to balance work and study. Couldn’t have asked for more!",
    },
    {
      name: "Arjun",
      quote:
        "Hands-on labs and constant support made my transition into tech super smooth. Great experience!",
    },
  ];

  const visibleCards = 3;
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  // Duplicate reviews for seamless infinite loop
  const loopedReviews = [...reviews, ...reviews.slice(0, visibleCards)];

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, []);

  const startAutoplay = () => {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    const total = reviews.length;
    if (index === total) {
      // Reset seamlessly
      setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = "none";
          setIndex(0);
          setTimeout(() => {
            if (trackRef.current)
              trackRef.current.style.transition = "transform 0.7s ease-in-out";
          }, 50);
        }
      }, 700);
    }
  }, [index, reviews.length]);

  // Detect cards per view based on screen size
  const getVisibleCards = () => {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  };

  const cardsVisible = getVisibleCards();

  return (
    <section className="reviews-section">
      <h2 className="reviews-heading">What Students Say About Cyberoaks</h2>

      <div
        className="carousel-container"
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        <div
          className="carousel-track"
          ref={trackRef}
          style={{
            transform: `translateX(-${(index * 100) / cardsVisible}%)`,
            transition: "transform 0.7s ease-in-out",
          }}
        >
          {loopedReviews.map((r, i) => (
            <div className="review-card" key={i}>
              <p className="quote">“{r.quote}”</p>
              <h4>— {r.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
