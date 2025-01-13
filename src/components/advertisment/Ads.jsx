import React, { useRef, useEffect, useState } from "react";
import "./Ads.css";

const Ads = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0); // Track vertical start position
  const [scrollTop, setScrollTop] = useState(0);
  const [videos, setVideos] = useState([]);

  // Fetch video data from API
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("https://theverifiedproperties.com/the-verified-properties-admin/api/get_advertisment.php");
        const data = await response.json();
        if (data.status === "success" && data.data.length > 0) {
          setVideos(data.data);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  // Handle dragging functionality for vertical scrolling
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartY(e.pageY - scrollContainer.offsetTop); // Get Y position
      setScrollTop(scrollContainer.scrollTop); // Get initial scrollTop
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const y = e.pageY - scrollContainer.offsetTop; // Get current Y position
      const walk = (y - startY) * 2; // Scrolling speed multiplier
      scrollContainer.scrollTop = scrollTop - walk; // Scroll vertically
    };

    const handleMouseUpOrLeave = () => {
      setIsDragging(false);
    };

    scrollContainer.addEventListener("mousedown", handleMouseDown);
    scrollContainer.addEventListener("mousemove", handleMouseMove);
    scrollContainer.addEventListener("mouseup", handleMouseUpOrLeave);
    scrollContainer.addEventListener("mouseleave", handleMouseUpOrLeave);

    return () => {
      scrollContainer.removeEventListener("mousedown", handleMouseDown);
      scrollContainer.removeEventListener("mousemove", handleMouseMove);
      scrollContainer.removeEventListener("mouseup", handleMouseUpOrLeave);
      scrollContainer.removeEventListener("mouseleave", handleMouseUpOrLeave);
    };
  }, [isDragging, startY, scrollTop]);

  // Intersection observer to play/pause videos
  useEffect(() => {
    const videos = scrollContainerRef.current.querySelectorAll("video");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.play();
          } else {
            entry.target.pause();
          }
        });
      },
      { threshold: 0.9 }
    );

    videos.forEach((video) => observer.observe(video));

    return () => {
      videos.forEach((video) => observer.unobserve(video));
    };
  }, []);

  return (
    <div className="center-container">
      <div
        className="video-scroll-container"
        ref={scrollContainerRef}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        {videos.map((videoData) => (
          <div key={videoData.id} className="video-item">
            <video
              muted
              autoPlay
              loop
              playsInline
              controls
              controlsList="nodownload"
              src={videoData.PostVideoPath}
            ></video>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Ads;
