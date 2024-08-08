import { AutoAwesome, Search } from "@mui/icons-material";
import { Box, IconButton, InputBase, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const images = [
  { main: "/HeroMockup/img1.jpg", preview: "/HeroMockup/img1_prev.webp" },
  { main: "/HeroMockup/img2.jpg", preview: "/HeroMockup/img2_prev.webp" },
  { main: "/HeroMockup/img3.jpg", preview: "/HeroMockup/img3_prev.webp" },
];

const primaryColor = "#1B5AE3";

const Hero = () => {
  const navigate = useNavigate();
  const [serachValue, setSearchValue] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${serachValue}`);
    console.log(serachValue);
  };

  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box
      borderRadius={2}
      margin={{ xs: 0, md: 4 }}
      sx={{
        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
        background: "#FFFCFC",
      }}
    >
      {/* Text Info */}
      <Box sx={{ paddingTop: 6, textAlign: "center" }}>
        <Typography
          variant="h1"
          fontSize={{ xs: "32px", sm: "32px", md: "64px" }}
          fontWeight="600"
          letterSpacing="3.2px"
          lineHeight={{ xs: "40px", sm: "40px", md: "72px" }}
          color="#000"
          component="h2"
        >
          Watch &gt; Connect {isSmallScreen && <br />} &gt; Heal.
        </Typography>

        <Typography
          variant="h2"
          color="#818181"
          fontSize={{ xs: "16px", sm: "32px", md: "36px" }}
          fontWeight="500"
          lineHeight={{ xs: "54px", sm: "72px" }}
          letterSpacing="1.8px"
        >
          <span style={{ color: primaryColor }}>Expert </span> Doctors + AI
          <span style={{ color: primaryColor }}> assistant</span>
        </Typography>
      </Box>

      {/* Search */}
      <Box
        sx={{ flexGrow: 1, marginTop: { xs: "1 0px", sm: "24", md: "49px" } }}
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
              value={serachValue}
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
          </Box>
        </form>
      </Box>

      {/* MockUp Data */}
      <Box sx={{ padding: "25px 0" }}>
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
            // display={{xs: "none", sm: "block"}}
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

            <Box sx={{ display: "flex", gap: { xs: 1, sm: 2 } }}>
              {images.map((img, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    width: "250px",
                    height: { xs: "85px", sm: "150px" },
                    cursor: "pointer",
                    "&:hover .main-img": { opacity: 0 },
                    "&:hover .preview-img": { opacity: 1 },
                  }}
                >
                  <Box
                    component="img"
                    src={img.main}
                    alt={`Sample IMG${index + 1}`}
                    className="main-img"
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: { xs: "10px", sm: "12px" },
                      position: "absolute",
                      top: 0,
                      left: 0,
                      transition: "opacity 0.3s ease",
                    }}
                  />
                  <Box
                    component="img"
                    src={img.preview}
                    alt=""
                    className="preview-img"
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "12px",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              paddingBottom: { xs: 3, md: 0 },
              marginTop: { xs: "24px", md: 0 },
              background: "#F2F2F2",
              boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
              borderRadius: "12px",
            }}
          >
            <Typography
              padding="18px 12px"
              fontSize={{ xs: 18, sm: 22 }}
              lineHeight="100%"
              color={primaryColor}
              variant="h5"
            >
              <AutoAwesome sx={{ fontSize: { xs: "18px", sm: "21px" } }} /> What
              AI says about your Questions ?
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
              }}
            >
              AI provides accurate, personalized health insights, addressing
              your medical concerns with reliable, data-driven answers tailored
              for your well-being!
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
