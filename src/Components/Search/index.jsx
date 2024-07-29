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
  }, []);
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
                boxShadow:
                  "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;",
                width: "100%",
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
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                sx={{
                  //   color: "w",
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
                <SearchIcon />
              </IconButton>
            </Box>
          </form>
        </Box>

        <Box
          display={{ xs: "block", md: "none" }}
          sx={{ padding: { xs: "12px 0", sm: "25px 0" } }}
        >
          <MobileAICard apiResults={apiResults} primaryColor={primaryColor} />
        </Box>

        {/* API Data */}
        <Box sx={{ padding: { xs: "12px 0", sm: "25px 0" } }}>
          <Box
            sx={{
              display: { xs: "block", md: "grid" },
              gridTemplateColumns: "68% 32%",
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
                      xs: "auto",
                      sm: "auto auto",
                      md: "auto auto auto",
                    },
                    gap: 2,
                    rowGap: 3,
                    idth: "100%",
                  }}
                >
                  {apiResults.videos.map((video, index) => (
                    <VideoCard key={index} video={video} />
                  ))}
                </Box>
              )}
            </Box>

            {/* AI Results */}
            <Box display={{ xs: "none", md: "block" }}>
              <AICard apiResults={apiResults} primaryColor={primaryColor} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Search;
