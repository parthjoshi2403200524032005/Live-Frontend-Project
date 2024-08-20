import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiCircleCheck } from "react-icons/ci";
import RazorPayButton from "./RazorpayButton";

export default function Pricing() {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const plans = [
    {
      title: "Gold One",
      price: "₹699",
      period: "/year",
      description: "Advanced tools to take your work to the next level.",
      features: [
        "Applies to one person only",
        "Free Consultation worth 699",
        "Priority Appointment booking",
        "24/7 Customer Support",
        "Hospitalization Support",
      ],
    },
    {
      title: "Gold Family",
      price: "₹2499",
      period: "/Year",
      description: "Advanced tools to take your work to the next level.",
      features: [
        "4+2 - 4 Adults & 2 Children",
        "Free Consultation Voucher",
        "Priority Appointment Booking",
        "24/7 Customer Support",
        "Hospitalization Support",
      ],
    },
    {
      title: "Gold Grand Family",
      price: "₹2999",
      period: "/Year",
      description: "Unleash the power of gold grand family plan",
      features: [
        "4+4- 4 Adults & 4 Children",
        "Free Consultation Voucher",
        "Priority Appointment booking",
        "24/7 Customer Support",
        "Hospitalization Support",
      ],
    },
  ];

  const cardStyle = (index) => ({
    border: "none",
    borderRadius: hoveredCardIndex === index ? "16px" : "1rem",
    transition: "all 0.2s",
    backgroundColor:
      hoveredCardIndex === index ? "var(--900, #133682)" : "#eef7ff",
    width: "100%",
    boxShadow:
      hoveredCardIndex === index
        ? "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        : "none",
    transform: hoveredCardIndex === index ? "translateY(-49px)" : "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative", // Add position relative for the button positioning
  });

  const textStyle = (index, type) => ({
    color:
      hoveredCardIndex === index
        ? "var(--Background-Background, #FFF)"
        : type === "price" || type === "title"
        ? "#231D4F"
        : type === "feature"
        ? "#848199"
        : "#848199",
    fontFamily: "Poppins",
    fontSize:
      type === "price"
        ? "36px"
        : type === "period"
        ? "17px"
        : type === "feature"
        ? "15px"
        : "28px",
    fontStyle: "normal",
    fontWeight: type === "price" || type === "title" ? "700" : "500",
    lineHeight: type === "price" ? "46px" : "normal",
  });

  const buttonStyle = (index) => ({
    width: "95%",
    borderRadius: "0.6rem",
    fontSize: "15px",
    letterSpacing: "0.1rem",
    fontWeight: hoveredCardIndex === index ? "400" : "400",
    padding: "1rem",
    backgroundColor: hoveredCardIndex === index ? "white" : "#133682",
    color: hoveredCardIndex === index ? "#133682" : "white",
    transition: "all 0.2s",
    textAlign: "center",
  });

  const mostPopularButtonStyle = {
    width: "121px",
    height: "27px",
    flexShrink: "0",
    borderRadius: "13.5px",
    background: "var(--Background-Background, #FFF)",
    color: "#000",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "10px",
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: "normal",
    letterSpacing: "0.833px",
    position: "absolute",
    top: "15px",
    right: "15px",
    zIndex: 10, // Ensures the button is on top
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // Center text vertically
  };

  return (
    <div
      className="outerplans"
      style={{
        marginTop: "80px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "auto",
      }}
    >
      <p
        style={{ fontSize: "2.5rem", fontWeight: "600", letterSpacing: "2px" }}
      >
        Plans
      </p>
      <div className="innerplans my-5" style={{ width: "100%" }}>
        <section
          className="pricing py-2"
          style={{ width: "100%", background: "transparent" }}
        >
          <div
            className="container"
            style={{
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#eef7ff",
              borderRadius: "24px",
              background: "var(--50, #EEF7FF)",
              boxShadow: "0px 0px 9.2px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="row" style={{ width: "100%" }}>
              {plans.map((plan, index) => (
                <div
                  className="col-lg-4 card-container"
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    padding: "0.5rem",
                  }}
                  onMouseEnter={() => setHoveredCardIndex(index)}
                  onMouseLeave={() => setHoveredCardIndex(null)}
                >
                  <div className="card mb-5 mb-lg-0" style={cardStyle(index)}>
                    {plan.title === "Gold Grand Family" && (
                      <div style={mostPopularButtonStyle}>Most Popular</div>
                    )}
                    <div className="card-body" style={{ width: "88%" }}>
                      <h5
                        className="card-title text-uppercase text-center"
                        style={{
                          margin: "0.5rem 0",
                          letterSpacing: "0.1rem",
                          fontWeight: "bold",
                          ...textStyle(index, "price"),
                        }}
                      >
                        {plan.price}
                        <span
                          className="period"
                          style={{
                            fontSize: "0.8rem",
                            ...textStyle(index, "period"),
                          }}
                        >
                          {plan.period}
                        </span>
                      </h5>
                      <h6
                        className="card-price text-center"
                        style={{
                          marginTop: "1.5rem",
                          ...textStyle(index, "title"),
                        }}
                      >
                        <span className="priceclass">{plan.title}</span>
                      </h6>
                      <p
                        className="card-description"
                        style={{
                          margin: "1rem 0", // Reduced gap
                          ...textStyle(index, "description"),
                          fontSize: "15px",
                          textAlign: "left", // Align description to the left
                        }}
                      >
                        {plan.description}
                      </p>
                      <hr style={{ margin: "1rem 0" }} /> {/* Reduced gap */}
                      <ul
                        className="fa-ul"
                        style={{
                          listStyleType: "none",
                          paddingLeft: "0",
                          marginTop: "0",
                        }}
                      >
                        {plan.features.map((feature, i) => (
                          <li
                            key={i}
                            style={{
                              marginBottom: "0.5rem", // Reduced gap
                              ...textStyle(index, "feature"),
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <CiCircleCheck
                              style={{
                                width: "30px",
                                height: "30px",
                                marginRight: "0.5rem",
                                color:
                                  hoveredCardIndex === index
                                    ? "white"
                                    : "#427EFF",
                                borderRadius: "50%",
                                padding: "0.2rem",
                              }}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/"
                        className="btn btn-block my-3"
                        style={buttonStyle(index)}
                      >
                        Choose plan
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
