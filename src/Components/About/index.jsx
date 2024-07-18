import { useEffect } from "react";
import { Box, Grid, Container, Paper, Typography, Link } from "@mui/material";

import TeamCard from "./TeamCard";
import PartnersCard from "./PartnersCard";

import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";

import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";

import YouTubeIcon from "@mui/icons-material/YouTube";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MedicationIcon from "@mui/icons-material/Medication";

import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

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
        fontSize: { xs: 14, md: 15, lg: 20 },
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
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
        p: 3,
        py: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexGrow: 1,
        transition: "background-color 250ms linear",
        "&:hover": {
          backgroundColor: primaryColor,
          color: "#FDFDFD",
          boxShadow:
            "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
          "& .info-icon": {
            color: "#FDFDFD",
          },
        },
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Icon
          className="info-icon"
          sx={{ fontSize: 50, color: primaryColor }}
        />
        <Typography
          variant="h5"
          lineHeight={2}
          letterSpacing-={1.5}
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
          letterSpacing={1.09}
          fontSize={{ xs: 16, md: 18 }}
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
        gap={{ xs: 8, md: 12 }}
      >
        <Box textAlign={{ xs: "center", md: "start", lg: "center" }}>
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
            fontSize={{ xs: 16, md: 20 }}
            lineHeight="28px"
          >
            Appropriate, affordable and advanced healthcare services should be
            accessible for all
          </Typography>
        </Box>
        <Box textAlign={{ xs: "center", md: "start", lg: "center" }}>
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
            fontSize={{ xs: 16, md: 20 }}
            lineHeight="28px"
          >
            Appropriate, affordable and advanced healthcare services should be
            accessible for all
          </Typography>
        </Box>
      </Box>

      {/* Purpose */}
      <Box pt={{ xs: 8, lg: 10 }} pb={6}>
        <Heading text="Our Purpose" />

        <Container sx={{ marginY: 6 }}>
          <Grid container spacing={{ xs: 4, lg: 8 }} justifyContent="center">
            <ContentSection
              Icon={MedicalServicesOutlinedIcon}
              title="Medical Information"
              text="The internet is full of inaccurate medical advice, causing confusion and fear. We’re here to fix that by providing reliable information from trusted doctors."
            />
            <ContentSection
              Icon={CampaignOutlinedIcon}
              title="Lack of Awareness"
              text="Many people don't know what treatments are available or how to find good doctors. We help by offering detailed information and connecting you with top healthcare professionals."
            />
            <ContentSection
              Icon={LocalHospitalOutlinedIcon}
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
              Icon={HandshakeOutlinedIcon}
              title="Trustworthy Doctors"
              text="Get accurate medical information directly from verified
                      doctors."
            />
            <ContentSection
              Icon={TodayOutlinedIcon}
              title="Health Plans"
              text=" Receive recommendations and treatment options based on
                      your medical history."
            />
            <ContentSection
              Icon={WorkspacePremiumOutlinedIcon}
              title=" Personal Branding"
              text="Connect with top doctors for private practice, available
                      both offline and online."
            />
          </Grid>
        </Container>
      </Box>

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
              sx={{
                textAlign: "center",
                mt: { xs: 2, sm: 0 },
                fontSize: "1.2rem",
              }}
            >
              <Typography variant="h6">Call or WhatsApp at</Typography>
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
              display={{ xs: "none", md: "block" }}
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
              display={{ xs: "none", md: "block" }}
              sx={{
                textAlign: "center",
                mt: { xs: 2, sm: 0 },
                fontSize: "1.2rem",
              }}
            >
              <Typography variant="h6">Live chat with Health Pilots</Typography>
              <Link
                href="javascript:void(Tawk_API.toggle())"
                sx={{
                  py: 2,
                  color: "#133682",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                <ChatOutlinedIcon />
                &nbsp;Start live chat
              </Link>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default About;
