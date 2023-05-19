import React, { useState,useRef } from "react";
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

//   const [startIndex, setStartIndex] = useState(0); // Start index of visible logos

//   const showNextLogo = () => {
//     setStartIndex((prevIndex) => (prevIndex + 1) % logos.length);
//   };

//   const showPreviousLogo = () => {
//     setStartIndex((prevIndex) => (prevIndex - 1 + logos.length) % logos.length);
//   };

//   const visibleLogos = logos.slice(startIndex, startIndex + 6);



// const [startX, setStartX] = useState(null);
//   const [scrollLeft, setScrollLeft] = useState(0);
//   const containerRef = useRef(null);

//   const handleMouseDown = (e) => {
//     setStartX(e.pageX - containerRef.current.offsetLeft);
//     setScrollLeft(containerRef.current.scrollLeft);
//   };

//   const handleMouseMove = (e) => {
//     if (!startX) return;
//     const x = e.pageX - containerRef.current.offsetLeft;
//     const walk = (x - startX) * 2; // Adjust the sliding speed
//     containerRef.current.scrollLeft = scrollLeft - walk;
//   };

//   const handleMouseUp = () => {
//     setStartX(null);
//   };

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
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1440px",
        height: "330px",
        display: "flex",
        flexDirection: "column",
        //border: "2px solid red",
        paddingLeft: '20px',
        position: 'relative',

        overflowX: 'scroll', // Enable horizontal scrolling
        overflowY: 'hidden', // Disable vertical scrolling
        margin: '0 auto', // Center the logo section horizontally
      }}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <h3 style={{ marginTop: "28px", marginRight: "550px" }}>
        Join these great companies committed to fighting climate change
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: "60px",
        }}
      >
        {logos.map((logo) => (
          <div key={logo.id}>
            <img
              src={logo.src}
              alt={logo.alt}
              style={{ width: "190px", height: "150px", margin: "10px" }}
            />
          </div>
        ))}
      </div>
      {/* {startIndex > 0 && (

<div
onClick={showPreviousLogo}
style={{
  position: 'absolute',
  top: '50%',
  left: '20px',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
}}
>
<FaChevronLeft size={24} />
</div>

      )}
      {startIndex + 6 < logos.length && (

        <div
          onClick={showNextLogo}
          style={{
            position: 'absolute',
            top: '50%',
            right: '20px',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
          }}
        >
          <FaChevronRight size={24} />
        </div>
      )} */}
    </div>
  );
};

export default LogoSection;
