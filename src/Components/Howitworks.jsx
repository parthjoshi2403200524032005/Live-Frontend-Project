import React, { useState, useEffect } from "react";
import hww1 from "../assets/hww1.png";
import hww2 from "./Svgs/hww2.svg";
import hww4i from "../assets/hww4i.png";
import hww3 from "../assets/hww3.png";
import { useNavigate } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

export default function HowItWorks() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [navigateTo, setNavigateTo] = useState(null); // State for navigation
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const navigate = useNavigate();

  const handleMouseEnter = (buttonId) => {
    setHoveredButton(buttonId);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  useEffect(() => {
    if (navigateTo) {
      navigate(navigateTo);
      setNavigateTo(null); // Reset navigation state
    }
  }, [navigateTo, navigate]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
      setIsTablet(window.innerWidth <= 768 && window.innerWidth > 480);
    };

    handleResize(); // Set initial state based on window size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const buttonStyle = (isHovered) => ({
    position: "absolute",
    bottom: isMobile ? "10px" : "20px",
    left: "50%",
    transform: "translateX(-50%)",
    width: isMobile ? "95%" : "358.325px",
    height: "60.191px",
    background: isHovered ? "var(--900, #133682)" : "#FFF",
    borderRadius: "15.048px",
    border: "none",
    boxShadow: "0px 3.762px 3.762px 0px rgba(0, 0, 0, 0.25)",
    padding: isMobile ? "5px 10px" : "10px 0",
    cursor: "pointer",
    color: isHovered ? "#FFF" : "var(--900, #133682)",
    fontFamily: "Poppins",
    fontSize: isTablet ? "14px" : "16px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
    textTransform: "capitalize",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: isTablet ? "20px" : "25px",
    paddingLeft: isTablet ? "10px" : "14.11px", // Add space for the icon
  });

  const cardStyle = {
    width: isMobile ? "100%" : isTablet ? "90%" : "399.71px",

    height: "400px",
    background: "#BEB4FB",
    borderRadius: "15.0478px",
    padding: "20px",
    textAlign: "center",
    position: "relative",
  };

  const containerStyle = {
    padding: isMobile ? "30px 10px" : "50px 20px",
    width: isMobile ? "90%" : "auto",
    margin: isMobile ? "25px" : "auto",
    marginTop: "80px", // Add 80px from the top
  };

  const titleStyle = {
    color: "#000",
    fontFamily: "Poppins",

    fontSize: isMobile ? "32px" : "48px",
    fontWeight: "600",
    lineHeight: "normal",
    textTransform: "capitalize",
    marginBottom: "10px",
  };

  const descriptionStyle = {
    color: "rgba(38, 38, 38, 0.60)",
    fontfamily: "Arial",
    fontSize: isMobile ? "20px" : "24px",
    fontWeight: 400,
    lineHeight: "26.334px",
    textAlign: "center",
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1280px",

        ...containerStyle,
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: "30px" }}>
        <h1 className="fw-bold" style={titleStyle}>
          How We Work
        </h1>
        <p style={descriptionStyle}>
          Delivering top-notch healthcare through expert advice and
          personalized treatments
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {/* First Card */}
        <div style={{ ...cardStyle, background: "#BEB4FB" }}>
          <h3
            style={{
              color: "var(--Background-Background, #FFF)",
              textAlign: "center",
              fontFamily: "Poppins",
              fontSize: "22.572px",
              fontWeight: "600",
              lineHeight: "30.096px",
              letterSpacing: "1.129px",
              textTransform: "capitalize",
            }}
          >
            Watch Experts Videos
          </h3>
          <p
            style={{
              color: "var(--Background-Background, #FFF)",
              textAlign: "center",
              fontFamily: "Arial",
              fontSize: "16.929px",
              fontWeight: "400",
              lineHeight: "24.453px",
              letterSpacing: "0.846px",
              textTransform: "capitalize",
            }}
          >
            Find valuable health advice from our trusted doctors
          </p>
          <div>
            <img
              src={hww1}
              alt=""
              style={{
                width: "300px",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
                marginLeft: "35px",
              }}
            />
          </div>
          <button
            onMouseEnter={() => handleMouseEnter("button1")}
            onMouseLeave={handleMouseLeave}
            style={buttonStyle(hoveredButton === "button1")}
            onClick={() => setNavigateTo("/videos")}
          >
            <span onClick={() => navigate("/videos")}>Discover Videos</span>
            <GoArrowUpRight
              style={{
                width: "30px",
                height: "30px",
                transition: "color 0.3s",
              }}
              color={
                hoveredButton === "button1" ? "#FFF" : "var(--900, #133682)"
              }
            />
          </button>
        </div>

        {/* Second Card */}
        <div style={{ ...cardStyle, background: "#FDB093" }}>
          <h3
            style={{
              color: "var(--Background-Background, #FFF)",
              textAlign: "center",
              fontFamily: "Poppins",
              fontSize: "22.572px",
              fontWeight: "600",
              lineHeight: "30.096px",
              letterSpacing: "1.129px",
              textTransform: "capitalize",
            }}
          >
            Book Consultation
          </h3>
          <p
            style={{
              color: "var(--Background-Background, #FFF)",
              textAlign: "center",
              fontFamily: "Arial",
              fontSize: "16.929px",
              fontWeight: "400",
              lineHeight: "24.453px",
              letterSpacing: "0.846px",
              textTransform: "capitalize",
            }}
          >
            Schedule a consultation with the doctor of your choice
          </p>
          <div>
            <img
              src={hww2}
              alt=""
              style={{
                width: "243px",
                height: "169px",
                objectFit: "cover",
                borderRadius: "12px",
                marginLeft: "60px",
              }}
            />
          </div>
          <button
            onMouseEnter={() => handleMouseEnter("button2")}
            onMouseLeave={handleMouseLeave}
            style={buttonStyle(hoveredButton === "button2")}
            onClick={() => setNavigateTo("/plans")}
          >
            <span onClick={() => navigate("/plans")}>Book An Appointment</span>
            <GoArrowUpRight
              style={{
                width: "30px",
                height: "30px",
                transition: "color 0.3s",
              }}
              color={
                hoveredButton === "button2" ? "#FFF" : "var(--900, #133682)"
              }
            />
          </button>
        </div>

        {/* Third Card */}
        <div style={{ ...cardStyle, background: "#BEB4FB" }}>
          <h3
            style={{
              color: "var(--Background-Background, #FFF)",
              textAlign: "center",
              fontFamily: "Poppins",
              fontSize: "22.572px",
              fontWeight: "600",
              lineHeight: "30.096px",
              letterSpacing: "1.129px",
              textTransform: "capitalize",
            }}
          >
            Get Treated By Experts
          </h3>
          <p
            style={{
              color: "var(--Background-Background, #FFF)",
              textAlign: "center",
              fontFamily: "Arial",
              fontSize: "16.929px",
              fontWeight: "400",
              lineHeight: "24.453px",
              letterSpacing: "0.846px",
              textTransform: "capitalize",
            }}
          >
            Schedule a consultation with the doctor of your choice
          </p>
          <img
            src={hww4i}
            alt=""
            style={{
              width: "40%",
              marginLeft: "120px",
            }}
          />
          <div>
            <img
              src={hww3}
              alt=""
              style={{
                width: "270px",
                height: "270px",
                objectFit: "cover",
                borderRadius: "12px",
                marginLeft: "50px",
              }}
            />
          </div>
          <button
            onMouseEnter={() => handleMouseEnter("button3")}
            onMouseLeave={handleMouseLeave}
            style={buttonStyle(hoveredButton === "button3")}
            onClick={() => setNavigateTo("/plans")}
          >
            <span>Get Treated</span>
            <GoArrowUpRight
              style={{
                width: "30px",
                height: "30px",
                transition: "color 0.3s",
              }}
              color={
                hoveredButton === "button3" ? "#FFF" : "var(--900, #133682)"
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
}
