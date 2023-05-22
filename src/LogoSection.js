import React, { useState, useRef } from "react";
//import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import "react-responsive-carousel/lib/styles/carousel.min.css";
const LogoSection = () => {
  const logos = [
    {
      id: 1,
      src: "Google Logo.png",
      alt: "Google Logo",
    },
    {
      id: 2,
      src: "Microsoft Logo.png",
      alt: "Microsoft Logo",
    },
    {
      id: 3,
      src: "OYO Logo.png",
      alt: "OYO Logo",
    },
    {
      id: 4,
      src: "FedEx Logo.png",
      alt: "FedEx Logo",
    },
    {
      id: 5,
      src: "Amazon Logo.png",
      alt: "Microsoft Logo",
    },
    {
      id: 6,
      src: "OLA Logo.png",
      alt: "Ola Logo",
    },
    {
      id: 7,
      src: "OLA Logo.png",
      alt: "Ola Logo",
    },
    {
      id: 8,
      src: "OLA Logo.png",
      alt: "Ola Logo",
    },
    // Add more logos here
  ];

  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setStartX(e.pageX);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!startX) return;
    const x = e.pageX;
    const walk = (x - startX) * 2; // Adjust the sliding speed
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setStartX(null);
  };

  const handleWheel = (e) => {
    e.preventDefault(); // Prevent vertical scrolling of the window
    const delta = Math.sign(e.deltaY || e.deltaX) * 40; // Adjust the scrolling speed
    containerRef.current.scrollLeft -= delta;
  };

  return (
    <div
      // style={{
      //   width: "100%",
      //   maxWidth: "1440px",
      //   flexWrap: "wrap",
      //   height: "330px",
      //   display: "flex",
      //   flexDirection: "column",
      //   paddingLeft: "20px",
      //   position: "relative",
      //   overflowX: "scroll", // Enable horizontal scrolling
      //   overflowY: "hidden", // Disable vertical scrolling
      //   margin: "0 auto", // Center the logo section horizontally
      // }}
      style={{
        width: "100%",
        maxWidth: "1440px",

        height: "330px",
        flexWrap: "wrap",
        display: "flex",
        flexDirection: "column",
        paddingLeft: "20px",
        position: "relative",
        overflowX: "hidden", // Enable horizontal scrolling
        overflowY: "hidden", // Disable vertical scrolling
        margin: "0 auto", // Center the logo section horizontally
        scrollbarWidth: "none", // Hide the scrollbar for Firefox
        "-ms-overflow-style": "none", // Hide the scrollbar for IE and Edge
        "&::-webkit-scrollbar": {
          display: "none", // Hide the scrollbar for Chrome, Safari, and Opera
        },
      }}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
    >
      <h3 style={{ marginTop: "28px", width: "686px", height: "24px" }}>
        Join these great companies committed to fighting climate change
      </h3>
      <div
        style={{
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
          //flexWrap: "wrap",
          gap: "48px",
          marginTop: "60px",
        }}
      >
        {logos.map((logo) => (
          <div key={logo.id}>
            <img
              src={logo.src}
              alt={logo.alt}
              style={{ width: "170px", height: "96px", margin: "10px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSection;
