import React, { useEffect } from "react";
import { Box, Grid, Icon, Typography, useMediaQuery } from "@mui/material";
// import ImageX from "../assets/Group 4600.png";
// import ImageY from "../assets/Group 4601.png";
// import ImageZ from "../assets/Group 4607.png";
// // import ImageCall from "../assets/Icon zocial-call.png";
// // import ImageChat from "../assets/Group 4612.png";
// // import ImageSearch from "../assets/Icon awesome-search.png";
// import FounderImg from "../../assets/Group 4610.png";
import TeamCard from "./TeamCard";
import PartnersCard from "./PartnersCard";

import YouTubeIcon from "@mui/icons-material/YouTube";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MedicationIcon from "@mui/icons-material/Medication";

//primary color: #133682

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <div
        className="conatiner-fluid"
        style={{ backgroundColor: "#133682", color: "#fff" }}
      >
        <div className="container py-5">
          <h1 className="text-start">About Us</h1>

          <p className="w-50 my-4 fs-5 fw-normal">
            Health Mudraa was founded in 2020 to change how people access
            medical information and healthcare services. Our team includes
            doctors, surgeons, management experts from IIM, engineers from IIT
            and IIIT, and dedicated student interns.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="my-5">
          <h1>Our Purpose</h1>
          <p className="my-4 w-50 fs-5">
            At Health Mudraa, our mission is to address major healthcare
            challenges by solving key problems in the industry.
          </p>
          <div className="d-flex">
            <div className="card mb-3">
              <div className="card-body">
                <h3 className="card-title">Wrong Medical Information</h3>
                <p className="card-text">
                  The internet is full of inaccurate medical advice, causing
                  confusion and fear. We’re here to fix that by providing
                  reliable information from trusted doctors.
                </p>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <h3 className="card-title">
                  Lack of Awareness About Treatment Options
                </h3>
                <p className="card-text">
                  Many people don't know what treatments are available or how to
                  find good doctors. We help by offering detailed information
                  and connecting you with top healthcare professionals.
                </p>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <h3 className="card-title">Fear of Hospital Bills</h3>
                <p className="card-text">
                  Hospital bills can be scary and confusing. We aim to make
                  things clearer and help you understand the costs involved.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h1>What Makes Us Special</h1>
          <div className="d-flex my-4">
            <div className="card mb-3">
              <div className="card-body">
                <h3 className="card-title">Trustworthy Doctors' Advice</h3>
                <p className="card-text">
                  Get accurate medical information directly from verified
                  doctors.
                </p>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <h3 className="card-title">Personalized Health Plans</h3>
                <p className="card-text">
                  Receive recommendations and treatment options based on your
                  medical history.
                </p>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <h3 className="card-title">Personal Branding</h3>
                <p className="card-text">
                  Connect with top doctors for private practice, available both
                  offline and online.
                </p>
              </div>
            </div>
          </div>
        </div>

        <q>
          Educating people on medical treatment options and insurance while
          using modern technologies to enhance overall well-being and organize
          the private health sector.
        </q>

        {/* <div className="mb-4">
        <h2>How to Use Health Mudraa</h2>
        <p>Are you randomly searching your medical symptoms on the internet? Feeling confused with all the information out there?</p>
        <p>Stop! Instead, visit <a href="https://healthmudraa.com">healthmudraa.com</a> to find accurate answers to your medical questions.</p>
        <p>Not sure who to consult next?</p>
        <ul>
          <li><strong>Chat:</strong> Connect with our clinical coordinators, share your medical problems and reports.</li>
          <li><strong>Search:</strong> Based on your condition, we help you find the best doctors nearby and guide you from hospital entry to discharge.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2>Why Choose Health Mudraa?</h2>
        <p>Your health is our priority. Whether you need a regular checkup or advanced surgery, we're here for you. Here’s why you should choose us:</p>
        <ul>
          <li>Relevant and Reliable Information: Directly from verified doctors.</li>
          <li>Evidence-Based Approach: No false claims or miracle cures.</li>
          <li>Bill Transparency: Clear comparisons of surgery costs.</li>
          <li>Wide Range of Health Topics: Detailed treatment information.</li>
          <li>Medical Community and Support: Positive user reviews and support.</li>
          <li>Doctors from Various States and Languages: Access a diverse pool of healthcare professionals.</li>
        </ul>
      </div> */}
      </div>

      <div className="container">
        {/* Partners */}
        <div className="my-5">
          <Typography
            varient="h2"
            component={"h2"}
            sx={{
              fontSize: 30,
              fontFamily: "Montserrat",
              textAlign: "center",
              fontWeight: "bolder",
            }}
          >
            Our Trusted Partners
          </Typography>

          <PartnersCard />
        </div>

        {/* Teams */}
        <div className="my-5">
          {/* <Typography
            variant="h2"
            component={"h2"}
            sx={{
              fontFamily: "Montserrat",
              fontWeight: "bold",
              fontSize: 22,
              textAlign: "center",
            }}
          >
            Our Team
          </Typography> */}
          <Typography
            varient="h2"
            component={"h2"}
            sx={{
              fontSize: 30,
              fontFamily: "Montserrat",
              textAlign: "center",
              fontWeight: "bolder",
            }}
          >
            The Leadership Team
          </Typography>

          <TeamCard />
        </div>

        {/* How It Works */}
        <div className="my-5">
          <Typography
            varient="h2"
            component={"h2"}
            sx={{
              fontSize: 30,
              fontFamily: "Montserrat",
              textAlign: "center",
              fontWeight: "bolder",
            }}
          >
            How It Works
          </Typography>

          <div class="container text-center" style={{ margin: "36px 0" }}>
            <div class="row gap-4">
              <div
                role="button"
                class="col rounded pointer"
                style={{ border: "1px solid #D9D9D9", margin: "0 30px" }}
              >
                <div className="content my-5">
                  <YouTubeIcon sx={{ fontSize: "50px", color: "#133682" }} />
                  <h5
                    style={{
                      fontWeight: 600,
                      fontSize: "22px",
                      padding: "14px 0",
                    }}
                  >
                    Watch Expert Videos
                  </h5>
                  <div
                    style={{ width: "85%", margin: "auto", fontSize: "21px" }}
                  >
                    <p>Find valuable health advice from our trusted doctors.</p>
                  </div>
                </div>
              </div>
              <div
                class="col rounded"
                style={{ border: "1px solid #D9D9D9", margin: "0 30px" }}
              >
                <div className="content my-5">
                  <CalendarMonthIcon
                    sx={{ fontSize: "50px", color: "#133682" }}
                  />
                  <h5
                    style={{
                      fontWeight: 600,
                      fontSize: "22px",
                      padding: "14px 0",
                    }}
                  >
                    Book an Appointment
                  </h5>
                  <div
                    style={{ width: "85%", margin: "auto", fontSize: "21px" }}
                  >
                    <p>
                      Schedule a consultation with the doctor of your choice.
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div
                class="col rounded"
                style={{ border: "1px solid #D9D9D9", margin: "0 30px" }}
              >
                <div className="content my-5">
                  <MedicationIcon sx={{ fontSize: "50px", color: "#133682" }} />
                  <h5
                    style={{
                      fontWeight: 600,
                      fontSize: "22px",
                      padding: "14px 0",
                    }}
                  >
                    Get Treatment
                  </h5>
                  <div
                    style={{ width: "85%", margin: "auto", fontSize: "21px" }}
                  >
                    <p>Receive personalized care and treatment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Deatils*/}
        <div style={{ margin: "85px 0" }}>
          <div
            className="d-flex rounded justify-content-evenly align-items-center"
            style={{
              margin: "0 30px",
              padding: "38px 0",
              border: "1px solid #D9D9D9",
            }}
          >
            <h2 style={{ fontWeight: 600 }}>Need Help ?</h2>
            <div className="phone">
              <h6 className="fs-4">Call or WhatsApp at</h6>
              <a
                className="fs-6 py-2 text-black fw-semibold text-decoration-none"
                href="tel:+917349796783"
              >
                <strong>+91-73497 96783</strong>
              </a>
            </div>
            <h5
              style={{
                padding: 10,
                backgroundColor: "#133682",
                color: "#fff",
                borderRadius: "50%",
              }}
            >
              Or
            </h5>
            <div className="chat">
              <h6 className="fs-4">Live chat with Health Pilots</h6>
              <a
                className="fs-6 py-2 fw-semibold"
                href="#"
                style={{ color: "#133682" }}
              >
                Start live chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
