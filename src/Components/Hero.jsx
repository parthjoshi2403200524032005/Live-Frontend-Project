import { AutoAwesome, Search } from "@mui/icons-material";
import { Box, IconButton, InputBase, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  { main: "/HeroMockup/img1.jpg", preview: "/HeroMockup/img1_prev.webp" },
  { main: "/HeroMockup/img2.jpg", preview: "/HeroMockup/img2_prev.webp" },
  { main: "/HeroMockup/img3.jpg", preview: "/HeroMockup/img3_prev.webp" },
];

const primaryColor = "#133682";

const Hero = () => {
  const navigate = useNavigate();
  const [serachValue, setSearchValue] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${serachValue}`);
    console.log(serachValue);
  };

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
      <Box sx={{ paddingTop: 12, textAlign: "center" }}>
        <Typography
          variant="h1"
          fontSize={{ xs: "25px", sm: "45px", md: "64px" }}
          fontWeight="600"
          letterSpacing="3.2px"
          lineHeight="72px"
          color="#000"
          component="h2"
        >
          {"Watch > Connect > Heal."}
        </Typography>
        <Typography
          sx={{ paddingY: "15px" }}
          color="#FD2621"
          variant="h2"
          fontSize={{ xs: "19px", sm: "35px", md: "36px" }}
          fontWeight="600"
          lineHeight={{ xs: "35px", sm: "68px", md: "72px" }}
          letterSpacing="1.8px"
        >
          Solutions directly form Expert Doctors
        </Typography>
        <Typography
          variant="h2"
          color="#000"
          fontSize={{ xs: "19px", sm: "32px", md: "36px" }}
          fontWeight="500"
          lineHeight={{ xs: "38px", sm: "72px" }}
          letterSpacing="1.8px"
        >
          Expert <span style={{ color: primaryColor }}>Doctors</span> +{" "}
          <span style={{ color: primaryColor }}>AI</span> assistant
        </Typography>
      </Box>

      {/* Search */}
      <Box sx={{ flexGrow: 1, marginTop: { xs: "30px", md: "40px" } }}>
        <form onSubmit={handleSearchSubmit}>
          <Box
            sx={{
              position: "relative",
              borderRadius: "44px",
              backgroundColor: "#FFF",
              boxShadow:
                "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;",
              width: { xs: "90%", sm: "100%" },
              maxWidth: "630px",
              margin: "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <InputBase
              type="search"
              required={true}
              placeholder="Ask any questions related to your health....."
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
                    color: primaryColor,
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
              Schedule a consultation with the doctor of your choice. Schedule a
              consultation with the doctor of your choice. Schedule a
              consultation with the doctor of you....
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
