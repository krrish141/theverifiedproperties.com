import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomClass, setZoomClass] = useState(""); // State to control zoom effect
  const sliderItems = [
    {
      backgroundImage: "assets/images/hero/hero4.jpg",
      title: "The Verified Properties",
      location: null,
    },
    {
      backgroundImage: "assets/images/hero/hero3.jpg",
      title: "The Verified Properties",
      location: null,
    },
    {
      backgroundImage: "assets/images/hero/hero2.jpg",
      title: "The Verified Properties",
      location: null,
    },
    {
      backgroundImage: "assets/images/hero/hero1.jpg",
      title: "The Verified Properties",
      location: null,
    },
  ];

  // Auto-slide logic with zoom effect toggle
  useEffect(() => {
    const interval = setInterval(() => {
      setZoomClass("zoom-out"); // Add zoom-out class when the slide changes
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [sliderItems.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setZoomClass(""); // Remove zoom effect after 1 second (duration of the transition)
    }, 1000); // Same as transition duration

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <>
      {/* Hero Section start */}
      <div className="hero-section section position-relative">
        {/* Hero Slider start */}
        <div className="hero-slider section">
          {/* Render Current Hero Item */}
          <div
            className={`hero-item ${zoomClass}`}
            style={{
              backgroundImage: `url(${sliderItems[currentIndex].backgroundImage})`,
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="hero-property-content text-center">
                    <h1 className="title">
                      <Link to="">{sliderItems[currentIndex].title}</Link>
                    </h1>
                    {sliderItems[currentIndex].location && (
                      <span className="location">
                        <img src="assets/images/icons/marker.png" alt="" />
                        <img
                          src="assets/images/icons/hero-marker.png"
                          alt=""
                        />{" "}
                        {sliderItems[currentIndex].location}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Slider end */}
      </div>
      {/* Hero Section end */}
    </>
  );
};

export default Banner;
