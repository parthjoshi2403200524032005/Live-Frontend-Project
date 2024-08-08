import { Box, IconButton, InputBase, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiSearch } from "../../Service/Services";
import VideoCard from "./VideoCard";
import SearchIcon from "@mui/icons-material/Search";
import "./styles.css";
import AICard from "./AICard";
import VideosLoad from "./ShimmerUI/VideosLoad";
import MobileAICard from "./MobileAICard";
import LeadGenerationForm from "../common/Lead-Generation"; // Import the form component

const primaryColor = "#133682";

const Search = () => {
  const { query } = useParams();

  const [apiResults, setApiResults] = useState({ videos: null, aiData: "" });
  const [searchInput, setSearchInput] = useState("");

  const APISearch = async (Searchquery) => {
    if (Searchquery && Searchquery.trim()) {
      try {
        const { data } = await AiSearch(Searchquery);
        setApiResults({
          videos: data?.data?.videosData,
          aiData: data?.data?.aiData,
        });
      } catch (error) {
        console.error("Search error:", error);
      }
    }
  };

  const handleSearchInput = (e) => {
    e.preventDefault();
    setApiResults({
      videos: null,
      aiData: null,
    });
    APISearch(searchInput);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setSearchInput(query);
    APISearch(query);

    return () => {
      window.speechSynthesis.cancel();
    };
  }, [query]);

  return (
    <>
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
          <form onSubmit={handleSearchInput}>
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
                placeholder="Search for Treatments,Doctors or Hospitals"
                inputProps={{ "aria-label": "search" }}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
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
                  color: "#133682 ",
                }}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Box>
          </form>
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
              padding: 0, // Set padding to 0
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
                  padding: 0, // Set padding to 0
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

export default Search;
