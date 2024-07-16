import { useEffect } from "react";
import {
  Box,
  Grid,
  Container,
  Paper,
  Typography,
  Link
} from "@mui/material";

import TeamCard from "./TeamCard";
import PartnersCard from "./PartnersCard";

import YouTubeIcon from "@mui/icons-material/YouTube";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MedicationIcon from "@mui/icons-material/Medication";

const primaryColor = "#133682";
const Heading = ({ text, size }) => {
  return (
    <Typography
      varient="h2"
      component={"h2"}
      sx={{
        fontSize: { xs: 30, sm: 35, lg: size ? 40 : 35 },
        letterSpacing: 1.5,
        lineHeight: "56px",
        textAlign: "center",
        fontWeight: "bold",
      }}
    >
      {text}
    </Typography>
  );
};

const Para = ({ text }) => {
  return (
    <Typography
      varient="h3"
      component={"h3"}
      sx={{
        fontSize: {xs: 14, md: 15, lg: 20 },
        lineHeight: "28px",
        textAlign: { sm: "start", lg: "center" },
        letterSpacing: 1.03,
      }}
    >
      {text}
    </Typography>
  );
};

const ContentSection = ({ Icon, title, text }) => (
  <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
    <Paper
      role="button"
      sx={{
        border: "1px solid #D9D9D9",
        borderRadius: 3,
        cursor: "pointer",
        boxShadow: 1,
        p: 3,
        py: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexGrow: 1,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Icon sx={{ fontSize: 50, color: "#133682" }} />
        <Typography
          variant="h5"
          lineHeight={2}
          sx={{ fontWeight: 600, fontSize: 24, py: 1.5 }}
        >
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          textAlign: "start",
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          lineHeight={1.5}
          letterSpacing={1.2}
          fontSize={{xs: 16,md:18}}
          variant="body2"
        >
          {text}
        </Typography>
      </Box>
    </Paper>
  </Grid>
);

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* About Section */}
      <Box pt={{ xs: 6, lg: 12 }} pb={6}>
        <Heading size="30" text="About Healthmudraa" />
        <Box width={{ xs: "90%", lg: "65%" }} m="auto" py={4}>
          <Para
            text="HealthMudraa is a health information platform offering 
          subscription-based services, including surgery assistance, physiotherapy, 
          nursing, and insurance. We address misinformation, raise awareness of treatment options, 
          and alleviate fears about hospital bills. Join us in empowering people to make informed healthcare 
          decisions and revolutionizing patient care."
          />
        </Box>
      </Box>

      {/* Vision Mission */}
      <Box
        bgcolor={primaryColor}
        py={7}
        color="#FCFCFC"
        display="grid"
        gridTemplateColumns={{ xs: "95%", sm: "40% 40%", lg: "30% 30%" }}
        justifyContent="center"
        gap={{xs: 8, md:12}}
      >
        <Box textAlign={{xs: "center", md: "start", lg: "center" }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            fontSize={{ xs: 28, lg: 32 }}
            letterSpacing="1.2px"
            lineHeight="44px"
          >
            Our Vission
          </Typography>
          <Typography
            px={{ sm: 0, lg: 4 }}
            mt={2}
            variant="body2"
            letterSpacing="1.2px"
            fontSize={{xs: 16, md:20}}
            lineHeight="28px"
          >
            Appropriate, affordable and advanced healthcare services should be
            accessible for all
          </Typography>
        </Box>
        <Box textAlign={{xs: "center", md: "start", lg: "center" }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            fontSize={{ xs: 28, lg: 32 }}
            letterSpacing="1.2px"
            lineHeight="44px"
          >
            Our Misson
          </Typography>
          <Typography
            px={{ sm: 0, lg: 4 }}
            mt={2}
            variant="body2"
            letterSpacing="1.2px"
            fontSize={{xs: 16, md:20}}
            lineHeight="28px"
          >
            Appropriate, affordable and advanced healthcare services should be
            accessible for all
          </Typography>
        </Box>
      </Box>

      {/* <div
        className="conatiner-fluid"
        style={{ backgroundColor: "#133682", color: "#fff" }}
      >
        <div className="container py-5">
          <h1 className="text-start">About Us</h1>

          <p className="w-xl-50 w-lg-50 w-md-50 w-sm-50 w-50 my-4 fs-5 fw-normal">
            Health Mudraa was founded in 2020 to change how people access
            medical information and healthcare services. Our team includes
            doctors, surgeons, management experts from IIM, engineers from IIT
            and IIIT, and dedicated student interns.
          </p>
        </div>
      </div> */}

      {/* Purpose */}
      <Box pt={{ xs: 8, lg: 10 }} pb={6}>
        <Heading text="Our Purpose" />

        <Container sx={{ marginY: 6 }}>
          <Grid container spacing={{ xs: 4, lg: 8 }} justifyContent="center">
            <ContentSection
              Icon={YouTubeIcon}
              title="Medical Information"
              text="The internet is full of inaccurate medical advice, causing confusion and fear. We’re here to fix that by providing reliable information from trusted doctors."
            />
            <ContentSection
              Icon={CalendarMonthIcon}
              title="Lack of Awareness"
              text="Many people don't know what treatments are available or how to find good doctors. We help by offering detailed information and connecting you with top healthcare professionals."
            />
            <ContentSection
              Icon={MedicationIcon}
              title="Fear of Hospital Bills"
              text="Hospital bills can be scary and confusing. We aim to make things clearer and help you understand the costs involved."
            />
          </Grid>
        </Container>
      </Box>

      {/* What's Sets us */}
      <Box py={{ xs: 2, lg: 4 }}>
        <Heading text="What Sets Us" />

        <Container sx={{ marginY: 6 }}>
          <Grid container spacing={{ xs: 4, lg: 8 }} justifyContent="center">
            <ContentSection
              Icon={YouTubeIcon}
              title="Trustworthy Doctors"
              text="Get accurate medical information directly from verified
                      doctors."
            />
            <ContentSection
              Icon={CalendarMonthIcon}
              title="Health Plans"
              text=" Receive recommendations and treatment options based on
                      your medical history."
            />
            <ContentSection
              Icon={MedicationIcon}
              title=" Personal Branding"
              text="Connect with top doctors for private practice, available
                      both offline and online."
            />
          </Grid>
        </Container>
      </Box>

      {/* <section class="quote">
          <div class="rounded">
            <div class="d-flex align-items-center p-4">
              <div class="text-center">
                <img
                  src="https://pngfreepic.com/wp-content/uploads/2022/04/Health-Care-Medicine-Health-insurance-Vector-image.png?v=1663341819"
                  alt="Bulb"
                  width="120"
                />
                <h6 className="p-1 fw-bold">Our Mission</h6>
              </div>

              <div>
                <blockquote class="blockquote px-4 text-center fs-4">
                  <span style={{ color: "#133682" }} className="fs-2 fw-bold">
                    “{" "}
                  </span>
                  Educating people on medical treatment options and insurance
                  while using modern technologies to enhance overall well-being
                  and organize the private health sector.
                  <span style={{ color: "#133682" }} className="fs-2 fw-bold">
                    {" "}
                    ”
                  </span>
                </blockquote>
              </div>
            </div>
          </div>
        </section> */}

      <div className="container">
        {/* Partners */}
        <div className="my-5">
          <Heading text={"Our Trusted Partners"} />
          <PartnersCard />
        </div>

        {/* Teams */}
        <Box mt={12}>
          <Heading text={"The Leadership Team"} />
          <TeamCard />
        </Box>

        {/* How It Works */}
        <div className="my-5">
          <Heading text={"How It Works"} />

          <Container sx={{ marginY: 6 }}>
            <Grid container spacing={{ xs: 4, lg: 8 }} justifyContent="center">
              <ContentSection
                Icon={YouTubeIcon}
                title="Watch Expert Videos"
                text="Find valuable health advice from our trusted doctors."
              />
              <ContentSection
                Icon={CalendarMonthIcon}
                title="Book an Appointment"
                text="Schedule a consultation with the doctor of your choice."
              />
              <ContentSection
                Icon={MedicationIcon}
                title="Get Treatment"
                text="Receive personalized care and treatment."
              />
            </Grid>
          </Container>
        </div>

        {/* Contact Deatils*/}
        <Box sx={{ margin: "85px 0" }}>
          <Box
            sx={{
              margin: "0 30px",
              padding: "38px 0",
              border: "1px solid #D9D9D9",
              borderRadius: 2,
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Typography
              variant="h2"
              sx={{ fontWeight: 600, fontSize: { xs: "1.5rem", sm: "2rem" } }}
            >
              Need Help?
            </Typography>
            <Box
              className="phone"
              sx={{ textAlign: "center", mt: { xs: 2, sm: 0 }, fontSize: "1.2rem" }}
            >
              <Typography variant="h6">
                Call or WhatsApp at
              </Typography>
              <Link
                href="tel:+917349796783"
                sx={{
                  py: 2,
                  color: "black",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                +91-73497 96783
              </Link>
            </Box>
            <Typography
              variant="h5"
              display={{xs: "none", md: "block"}}
              sx={{
                padding: 1,
                backgroundColor: "#133682",
                color: "#fff",
                fontSize: "16px",
                borderRadius: "50%",
              }}
            >
              Or
            </Typography>
            <Box
              className="chat"
              display={{xs: "none", md: "block"}}
              sx={{ textAlign: "center", mt: { xs: 2, sm: 0 }, fontSize: "1.2rem", }}
            >
              <Typography variant="h6">
                Live chat with Health Pilots
              </Typography>
              <Link
                href="#"
                sx={{
                  
                  py: 2,
                  color: "#133682",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Start live chat
              </Link>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default About;
