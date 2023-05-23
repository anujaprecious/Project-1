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
      src: "Vector.png",
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
      src: "OLA logo.png",
      alt: "Ola Logo",
    },
    {
      id: 7,
      src: "OLA logo.png",
      alt: "Ola Logo",
    },
    {
      id: 8,
      src: "OLA logo.png",
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
    const logoContainer = containerRef.current;
    logoContainer.scrollLeft = scrollLeft - walk;
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
    <div style={{ maxWidth: "1440px", height: "300px", width: "100%", margin: "0 auto" }}>
      <h3
        style={{
          marginTop: "28px",
          width: "100%",
          maxWidth: "686px",
          height: "24px",
          position: "fixed",
          top: "0",
          background: "white",
          zIndex: "1",
        }}
      >
        Join these great companies committed to fighting climate change
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: "60px",
          overflowX: "hidden",
          overflowY: "hidden",
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      >

        {logos.map((logo) => (
          <div
            key={logo.id}
            style={{
              display: "flex",
              flexDirection: "column",

              alignItems: "center",
              marginRight: "48px", // Added margin between boxes
              marginTop: "128px", // Apply top margin
              marginBottom: "76px",
              background: "#FFFFFF", // Apply white background
              boxShadow: "0px 30px 40px rgba(212, 217, 232, 0.2)", // Apply grey shadow
              borderRadius: "16px", // Apply border radius
              //display: "flex",
              //flexDirection: "column",
              justifyContent: "center",
              //alignItems: "center",
              padding: "16px", // Add padding for content
            }}
          >
            <div
              style={{
                width: "170px",
                height: "96px",
                margin: "10px",
                //gap:"48px",
                //border: "1px solid #ccc",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "122px",
                  height: "26",

                }}
              />
            </div>
            {/* <div style={{ marginTop: "6px" }}>{logo.alt}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSection;
