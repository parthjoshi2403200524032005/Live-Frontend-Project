import { Box, IconButton, InputBase, Typography } from "@mui/material";
import { AiSearch } from "../Service/Services"; // Update with actual path
import VideoCard from "./searchresults/VideoCard"; // Update with actual path
import SearchIcon from "@mui/icons-material/Search";
import AICard from "./searchresults/AICard"; // Update with actual path
import VideosLoad from "./searchresults/ShimmerUI/VideosLoad"; // Update with actual path
import MobileAICard from "./searchresults/MobileAICard"; // Update with actual path
import LeadGenerationForm from "../Components/common/Lead-Generation"; // Update with actual path
import NavBar from "../Components/NavBar";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Using react-router-dom for navigation

const primaryColor = "#133682";

const SearchResults = () => {
  const [inputValue, setInputValue] = useState("");
  const [apiResults, setApiResults] = useState({ videos: [], aiData: "" });
  const navigate = useNavigate();
  const { query } = useParams(); // Assuming you use React Router for routing

  useEffect(() => {
    if (query) {
      setInputValue(query);
      fetchApiResults(query);
    }
  }, [query]);

  const fetchApiResults = async (searchQuery) => {
    try {
      const { data } = await AiSearch(searchQuery); // Ensure AiSearch is properly imported and functional
      setApiResults({
        videos: data?.data?.videosData || [],
        aiData: data?.data?.aiData || "AI Data not available",
      });
    } catch (error) {
      console.error("Search error:", error);
      setApiResults({
        videos: [],
        aiData: "Something went wrong. Please try again later.",
      });
    }
  };

  const handleSearch = () => {
    if (inputValue.trim() === "") {
      navigate("/search/doctor");
    } else {
      navigate(`/searchresults/${inputValue}`);
    }
  };

  return (
    <>
      <NavBar />
      {/* <h1>Search Results for: {inputValue}</h1> */}
      <Box
        borderRadius={2}
        margin={{ xs: 0, md: 4 }}
        padding={4}
        sx={{
          boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
          background: "#FFFCFC",
        }}
      >
        {/* Search */}
        <Box sx={{ flexGrow: 1, marginTop: "40px" }}>
          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: "44px",
                backgroundColor: "#FFF",
                width: "100%",
                maxWidth: "1207px",
                margin: "auto",
                display: "flex",
                alignItems: "center",
                border: '1px solid #007BFF',
              }}
            >
              <InputBase
                type="search"
                required={true}
                placeholder="Search for Treatments, Doctors, or Hospitals"
                inputProps={{ "aria-label": "search" }}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                sx={{
                  width: "100%",
                  "& .MuiInputBase-input": {
                    padding: "12.5px 20px",
                    paddingRight: "48px",
                    fontSize: { xs: "14px", sm: "18px" },
                    fontWeight: 400,
                    "&::placeholder": {
                      color: " #007BFF",
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
                  color: "#133682",
                }}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* Mobile View: AI Results First, then Videos, then Form */}
        <Box display={{ xs: "block", md: "none" }} sx={{ padding: "12px 0" }}>
          <MobileAICard apiResults={apiResults} primaryColor={primaryColor} />
        </Box>

        {/* Mobile View: Videos */}
        <Box display={{ xs: "block", md: "none" }} sx={{ padding: "12px 0" }}>
          <Box
            padding="14px 24px"
            sx={{
              background: "#F2F2F2",
              boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
              borderRadius: "12px",
            }}
          >
            <Typography
              padding="6px 0 25px 0"
              fontSize={22}
              lineHeight="100%"
              color={primaryColor}
              variant="h5"
            >
              Expert Doctors Opinion
            </Typography>

            {!apiResults.videos ? (
              <VideosLoad />
            ) : apiResults.videos.length === 0 ? (
              <h3>No Videos Found... </h3>
            ) : (
              <Box
                sx={{
                  marginTop: 2,
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                    md: "1fr 1fr 1fr",
                  },
                  gap: "24px",
                  rowGap: "16px",
                  width: "100%",
                }}
              >
                {apiResults.videos.map((video, index) => (
                  <VideoCard key={index} video={video} />
                ))}
              </Box>
            )}
          </Box>
        </Box>

        {/* Mobile View: Lead Generation Form */}
        <Box display={{ xs: "block", md: "none" }} sx={{ padding: "12px 0" }}>
          <Box
            sx={{
              background: "#F2F2F2",
              boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
              borderRadius: "12px",
              padding: 0,
            }}
          >
            <LeadGenerationForm
              title="Want to book appointment with the Doctor?"
              subtitle=""
              doctorid={123} // Replace with actual doctor ID if needed
            />
          </Box>
        </Box>

        {/* Desktop View: Original Layout */}
        <Box sx={{ padding: { xs: "12px 0", sm: "25px 0" } }}>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              margin: { xs: "16px 8px", sm: "16px 25px" },
              gap: 5,
            }}
          >
            {/* Video Data */}
            <Box
              padding="14px 24px"
              sx={{
                background: "#F2F2F2",
                boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
                flex: 2,
              }}
            >
              <Typography
                padding="6px 0 25px 0"
                fontSize={22}
                lineHeight="100%"
                color={primaryColor}
                variant="h5"
              >
                Expert Doctors Opinion
              </Typography>

              {!apiResults.videos ? (
                <VideosLoad />
              ) : apiResults.videos.length === 0 ? (
                <h3>No Videos Found... </h3>
              ) : (
                <Box
                  sx={{
                    marginTop: 2,
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      sm: "1fr 1fr",
                      md: "1fr 1fr 1fr",
                    },
                    gap: "24px",
                    rowGap: "16px",
                    width: "100%",
                  }}
                >
                  {apiResults.videos.map((video, index) => (
                    <VideoCard key={index} video={video} />
                  ))}
                </Box>
              )}
            </Box>

            {/* AI Results and Lead Generation Form */}
            <Box
              display={{ xs: "none", md: "block" }}
              sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}
            >
              <AICard apiResults={apiResults} primaryColor={primaryColor} />
              <Box
                sx={{
                  background: "#F2F2F2",
                  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                  borderRadius: "12px",
                  padding: 0,
                }}
              >
                <LeadGenerationForm
                  title="Want to book appointment with the Doctor?"
                  subtitle=""
                  doctorid={123} // Replace with actual doctor ID if needed
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SearchResults;
