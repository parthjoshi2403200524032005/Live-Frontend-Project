import { Search } from "@mui/icons-material";
import { Box, IconButton, InputBase, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import handImage from "../assets/hand.png";
/*import HeroSlider from "./HeroSlider";  */
import herodrop from "../assets/herodrop.png";
// import ReactTypingEffect from "react-typing-effect";

const primaryColor = "#1B5AE3";
const TypingEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return <span>{displayedText}</span>;
};
const Hero = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    try {
      // Construct the URL with the search value
      const url = `/searchresults/${searchValue}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "text/html", // Assuming you're fetching HTML content
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const htmlContent = await response.text();
      console.log(htmlContent); // Output the fetched HTML content

      // Example: Set the fetched HTML into a state variable if you want to display it in a component
      // setFetchedHtml(htmlContent);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleSearchClick = () => {
    setIsSearchClicked(true);
  };

  return (
    <Box
      sx={{
        background: isSmallScreen
          ? "linear-gradient(180deg, #FFF 0%, #ECF2FF 100%)"
          : "linear-gradient(180deg, #FFF 0%, #ECF2FF 100%)",
        width: "100%",
        paddingBottom: { xs: "40px" },
      }}
    >
      {/* Text Info */}
      <Box
        sx={{
          paddingTop: 10,
          textAlign: "center",
          marginBottom: isSearchClicked
            ? { xs: "40px", sm: "50px", md: "60px" }
            : { xs: "24px", sm: "24px", md: "24px" }, // Adjust marginBottom for mobile
          transition: "margin-bottom 0.5s ease",
        }}
      >
        <Typography
          variant="h1"
          fontSize={{ xs: "18px", sm: "32px", md: "58px" }} // Font size for mobile
          fontWeight={{ xs: 600, sm: "500" }} // Font weight for mobile
          fontFamily="Poppins"
          lineHeight="normal" // Line height for mobile
          color="#000"
          component="h2"
          sx={{ textAlign: "center" }} // Center text for mobile
        >
          Any Questions to Ask Doctors?
        </Typography>

        <Typography
          variant="h2"
          fontSize={{ xs: "12px", sm: "32px", md: "30px" }} // Font size for different screen sizes
          fontFamily="Poppins"
          fontWeight={{ xs: "400", md: "500" }}
          lineHeight={{ xs: "1.2", md: "normal" }} // Line height for mobile to ensure no extra space
          color="#000" // Consistent color
          sx={{
            textAlign: "center",
            marginTop: "8px",
            whiteSpace: { xs: "pre-wrap", md: "normal" },
          }} // Center text and control wrapping
        >
          <span style={{ color: "#133682" }}>
            Clinically accurate health info, directly
          </span>
          {"\n"}
          from <span style={{ color: "#133682" }}>doctors</span> with Quick{" "}
          <span style={{ color: "#133682" }}>AI</span> Answers
        </Typography>
      </Box>

      {/* Search */}
      <Box
        sx={{ flexGrow: 1, marginTop: { xs: "10px", sm: "24px", md: "49px" } }}
      >
        <form onSubmit={handleSearchSubmit}>
          <Box
            sx={{
              position: "relative",
              borderRadius: "44px",
              backgroundColor: "#FFF",
              border: "2px solid #487AE8",
              width: { xs: "90%", sm: "90%", md: "90%" },
              maxWidth: "2030px",
              margin: "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <InputBase
              type="search"
              required={true}
              placeholder="Search for Treatments, Doctors, or Hospitals"
              inputProps={{ "aria-label": "search" }}
              value={searchValue}
              onClick={handleSearchClick}
              onChange={(e) => setSearchValue(e.target.value)}
              sx={{
                width: "100%",
                "& .MuiInputBase-input": {
                  padding: "14px 16px",
                  paddingRight: "48px",
                  fontSize: { xs: "14px", sm: "18px" },
                  fontWeight: 400,
                  "&::placeholder": {
                    color: "rgba(0, 0, 0, 0.60)",
                    opacity: 1,
                  },
                },
              }}
            />
            <IconButton
              type="submit"
              sx={{
                padding: "12px",
                position: "absolute",
                right: 0,
                color: primaryColor,
              }}
              aria-label="search"
            >
              <Search />
            </IconButton>
            {/* Image at the top right of the search bar */}
            <Box
              component="img"
              src={handImage} // Adjust the path to match the actual location of the image
              alt="Hand Image"
              sx={{
                position: "absolute",
                top: { xs: "-75px", md: "-160px" },
                width: { xs: "59px", md: "130px" },
                height: { xs: "76px", md: "168px" }, // Adjust this value to fine-tune the position
                right: "-10px", // Adjust this value to fine-tune the position
                animation: "heartbeat 1.5s infinite", // Apply heartbeat animation
              }}
            />
          </Box>
        </form>
      </Box>

      {/* Expert Doctors Advice + AI assistant Text */}
      {/*       <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontFamily: "Poppins",
          fontSize: { xs: "12px", sm: "36px" },
          fontStyle: "normal",
          fontWeight: 500,
          display: { xs: "block", sm: "block" },
          lineHeight: "normal",
          marginTop: { xs: "20px", md: "35px" },
          transition: { md: "margin-top 0.5s ease, transform 0.5s ease" },
          transform: {
            md: isSearchClicked ? "translateY(-150px)" : "translateY(0)",
          },
        }}
      >
        <span style={{ color: "#133682" }}>Expert Doctors</span> Advice +{" "}
        <span style={{ color: "#133682" }}>AI</span> assistant
      </Typography> */}

      {/* MockUp Data */}
      <Box
        sx={{
          display: { xs: "none", md: "grid" },
          gridTemplateColumns: "auto auto",
          margin: { xs: "18px", md: "16px 75px" },
          gap: 5,
          opacity: isSearchClicked ? 1 : 0, // Control visibility based on state
          transform: isSearchClicked ? "translateY(0)" : "translateY(-20px)",
          transition: "opacity 0.5s ease, transform 0.5s ease", // Smooth transition
        }}
      >
        {isSearchClicked && (
          <Box
            sx={{
              display: { xs: "block", md: "grid" },
              gridTemplateColumns: "auto auto",

              margin: { xs: "18px", md: "16px 75px" },
              gap: 5,
            }}
          >
            <Box
              padding={{ xs: "14px 6px", sm: "14px 24px" }}
              sx={{
                background: "#F2F2F2",
                boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                borderRadius: "12px",
              }}
            >
              <Typography
                padding={{ xs: "4px 0 16px 4px", sm: "6px 0 25px 0" }}
                fontSize={{ xs: 18, sm: 22 }}
                lineHeight="100%"
                color={primaryColor}
                variant="h5"
              >
                Expert Doctors Opinion
              </Typography>
              <img
                src={herodrop}
                alt=""
                style={{
                  width: "100%", // Adjust the width to be responsive
                  maxWidth: "900px", // Max width for larger screens
                }}
              />
              {/*  <Box
                style={{
                  width: "100%", // Adjust the width to be responsive
                  maxWidth: "900px", // Max width for larger screens
                }}
              >
                <HeroSlider />
              </Box> */}
            </Box>
            <Box
              sx={{
                paddingBottom: { xs: 3, md: 0 },
                marginTop: { xs: "24px", md: 0 },
                background: "#F2F2F2",
                boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                borderRadius: "12px",
                width: "100%",
              }}
            >
              <Typography
                padding="18px 12px"
                fontSize={{ xs: 18, sm: 22 }}
                lineHeight="100%"
                color={primaryColor}
                variant="h5"
              >
                What AI says about your Questions?
              </Typography>
              <Typography
                variant="body1"
                paddingX={2}
                fontSize={{ xs: "14px", sm: "16px" }}
                sx={{
                  color: "#454545",
                  lineHeight: "26px",
                  fontWeight: 400,
                  letterSpacing: "0.8px",
                  whiteSpace: "pre-wrap",
                  overflowWrap: "break-word",
                  width: "100%", // Set a fixed width for the Typography
                  maxWidth: "100%", // Ensure it doesn't exceed the container's width
                  minHeight: "78px", // Set a minimum height to accommodate the full text
                }}
              >
                <TypingEffect
                  text="AI provides accurate, personalized health insights, addressing your medical concerns with reliable, data-driven answers tailored for your well-being!"
                  speed={50} // Typing speed in milliseconds
                />
              </Typography>
            </Box>
          </Box>
        )}
      </Box>

      <style>
        {`
          @keyframes heartbeat {
            0% {
              transform: scale(1);
            }
            20% {
              transform: scale(1.1);
            }
            40% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Hero;
