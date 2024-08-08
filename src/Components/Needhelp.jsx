import React from "react";
import Baa from "../assets/BAA.png";
import { FaUser, FaPhone, FaEnvelope, FaPencilAlt } from "react-icons/fa";

const Needhelp = () => {
  return (
    <div
      style={{
        backgroundColor: "#D3E9FD",
        padding: "50px",
        display: "flex",
        marginTop: "80px",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        flexWrap: "wrap", // Allow wrapping for smaller screens
      }}
    >
      <h1
        style={{
          color: "#262626",
          fontSize: "48px",
          fontFamily:"Poppins",
          fontWeight: "600",
          textAlign: "center",
          marginBottom: "30px",
          position: "absolute",
          top: "27px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
        }}
      >
        Book an Appointment
      </h1>
      <div style={{ flex: 2, marginTop: "80px", width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "46px",
              width: "100%",
              flexWrap: "wrap", // Allow wrapping for input fields
            }}
          >
            <div style={{ flex: 1, paddingRight: "15px", minWidth: "250px" }}>
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  color: "#000",
                  fontFamily: "Arial",
                  fontSize: "24px",
                  fontWeight: "400",
                }}
              >
                <FaUser
                  style={{
                    marginRight: "10px",
                    marginBottom: "8px",
                    color: "black",
                    width: "18px",
                  }}
                />
                Name
              </h3>
              <input
                type="text"
                placeholder="Enter Your Name"
                style={{
                  width: "100%",
                  height: "43px",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <div
              style={{
                flex: 1,
                paddingLeft: "15px",
                paddingRight: "15px",
                minWidth: "250px",
              }}
            >
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  color: "#000",
                  fontFamily: "Arial",
                  fontSize: "24px",
                  fontWeight: "400",
                }}
              >
                <FaPhone
                  style={{
                    marginRight: "10px",
                    marginBottom: "8px",
                    color: "black",
                    width: "18px",
                  }}
                />
                Phone Number
              </h3>
              <input
                type="tel"
                placeholder="Mobile No"
                style={{
                  width: "100%",
                  height: "43px",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <div style={{ flex: 1, paddingLeft: "15px", minWidth: "250px" }}>
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  color: "#000",
                  fontFamily: "Arial",
                  fontSize: "24px",
                  fontWeight: "400",
                }}
              >
                <FaEnvelope
                  style={{
                    marginRight: "10px",
                    marginBottom: "8px",
                    color: "black",
                    width: "18px",
                  }}
                />
                Mail Address
              </h3>
              <input
                type="email"
                placeholder="Enter Your Mail"
                style={{
                  width: "100%",
                  height: "43px",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
          </div>
          <div style={{ marginBottom: "20px", width: "100%" }}>
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                color: "#000",
                fontFamily: "Arial",
                fontSize: "24px",
                fontWeight: "400",
              }}
            >
              <FaPencilAlt
                style={{
                  marginRight: "10px",
                  marginBottom: "8px",
                  color: "black",
                  width: "18px",
                }}
              />
              Write Your Query
            </h3>
            <textarea
              placeholder="Describe Your Query Here"
              style={{
                width: "100%",
                height: "117px",
                padding: "10px",
                borderRadius: "5px",
                resize: "none",
                border: "1px solid rgba(19, 54, 130, 0.22)",
                background: "#FAFAFA",
              }}
            />
            <div
              style={{
                textAlign: "right",
                color: "#999",
                fontSize: "12px",
                marginTop: "5px",
              }}
            >
              0/300
            </div>
          </div>
          <button
            style={{
              display: "block",
              width: "256px",
              height: "44px",
              backgroundColor: "var(--900, #133682)",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Book An Appointment
          </button>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: "30px",
        }}
      >
        <img
          src={Baa}
          alt="Book an Appointment"
          style={{
            width: "100%",
            maxWidth: "434px",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};

export default Needhelp;
