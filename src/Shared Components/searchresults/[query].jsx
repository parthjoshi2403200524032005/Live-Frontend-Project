// 'use client';

// import { Box, IconButton, InputBase, Typography } from "@mui/material";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { AiSearch } from "../../Service/Services"; // Update with actual path
// import VideoCard from "./VideoCard"; // Update with actual path
// import SearchIcon from "@mui/icons-material/Search";
// import AICard from "./AICard"; // Update with actual path
// import VideosLoad from "./ShimmerUI/VideosLoad"; // Update with actual path
// import MobileAICard from "./MobileAICard"; // Update with actual path
// import LeadGenerationForm from "../../components/common/Lead-Generation"; // Update with actual path
// import NavBar from "../../Components/NavBar";

// const primaryColor = "#133682";

// const Search = () => {
//   const router = useRouter();
//   const { query } = router.query;

//   const [apiResults, setApiResults] = useState({ videos: null, aiData: "" });
//   const [searchInput, setSearchInput] = useState("");

//   const APISearch = async (Searchquery) => {
//     if (Searchquery && Searchquery.trim()) {
//       try {
//         const { data } = await AiSearch(Searchquery);
//         console.log("data", data); // Ensure to check if real data is fetched

//         setApiResults({
//           videos: data?.data?.videosData,
//           aiData: data?.data?.aiData || "AI Data not available",
//         });
//       } catch (error) {
//         console.error("Search error:", error);
//         // Handle error gracefully by showing a message to the user
//         setApiResults({
//           videos: [],
//           aiData: "Something went wrong. Please try again later.",
//         });
//       }
//     }
//   };

//   const handleSearchInput = (e) => {
//     e.preventDefault();
//     setApiResults({
//       videos: null,
//       aiData: null,
//     });

//     APISearch(searchInput);
//   };

//   useEffect(() => {
//     console.log('Query:', query); // Add this line to check the query value
//     if (query) {
//       setSearchInput(query);
//       APISearch(query);
//     }


//     // return () => {
//     //   window.speechSynthesis.cancle();
//     // };
//   }, [query]);


//   return (
//     <>
//       <NavBar />
//       <h1>Search Results for: {query}</h1>
//       <Box
//         borderRadius={2}
//         margin={{ xs: 0, md: 4 }}
//         padding={4}
//         sx={{
//           boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
//           background: "#FFFCFC",
//         }}
//       >
//         {/* Search */}
//         <Box sx={{ flexGrow: 1, marginTop: "40px" }}>
//           <form onSubmit={handleSearchInput}>
//             <Box
//               sx={{
//                 position: "relative",
//                 borderRadius: "44px",
//                 backgroundColor: "#FFF",
//                 width: "100%",
//                 maxWidth: "1207px",
//                 margin: "auto",
//                 display: "flex",
//                 alignItems: "center",
//                 border: '1px solid #007BFF',
//               }}
//             >
//               <InputBase
//                 type="search"
//                 required={true}
//                 placeholder="Search for Treatments, Doctors, or Hospitals"
//                 inputProps={{ "aria-label": "search" }}
//                 value={searchInput}
//                 onChange={(e) => setSearchInput(e.target.value)}
//                 sx={{
//                   width: "100%",
//                   "& .MuiInputBase-input": {
//                     padding: "12.5px 20px",
//                     paddingRight: "48px",
//                     fontSize: { xs: "14px", sm: "18px" },
//                     fontWeight: 400,
//                     "&::placeholder": {
//                       color: " #007BFF",
//                       opacity: 1,
//                     },
//                   },
//                 }}
//               />
//               <IconButton
//                 type="submit"
//                 sx={{
//                   padding: "12px",
//                   position: "absolute",
//                   right: 0,
//                   color: "#133682",
//                 }}
//                 aria-label="search"
//               >
//                 <SearchIcon />
//               </IconButton>
//             </Box>
//           </form>
//         </Box>

//         {/* Mobile View: AI Results First, then Videos, then Form */}
//         <Box display={{ xs: "block", md: "none" }} sx={{ padding: "12px 0" }}>
//           <MobileAICard apiResults={apiResults} primaryColor={primaryColor} />
//         </Box>

//         {/* Mobile View: Videos */}
//         <Box display={{ xs: "block", md: "none" }} sx={{ padding: "12px 0" }}>
//           <Box
//             padding="14px 24px"
//             sx={{
//               background: "#F2F2F2",
//               boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
//               borderRadius: "12px",
//             }}
//           >
//             <Typography
//               padding="6px 0 25px 0"
//               fontSize={22}
//               lineHeight="100%"
//               color={primaryColor}
//               variant="h5"
//             >
//               Expert Doctors Opinion
//             </Typography>

//             {!apiResults.videos ? (
//               <VideosLoad />
//             ) : apiResults.videos.length === 0 ? (
//               <h3>No Videos Found... </h3>
//             ) : (
//               <Box
//                 sx={{
//                   marginTop: 2,
//                   display: "grid",
//                   gridTemplateColumns: {
//                     xs: "1fr",
//                     sm: "1fr 1fr",
//                     md: "1fr 1fr 1fr",
//                   },
//                   gap: "24px",
//                   rowGap: "16px",
//                   width: "100%",
//                 }}
//               >
//                 {apiResults.videos.map((video, index) => (
//                   <VideoCard key={index} video={video} />
//                 ))}
//               </Box>
//             )}
//           </Box>
//         </Box>

//         {/* Mobile View: Lead Generation Form */}
//         <Box display={{ xs: "block", md: "none" }} sx={{ padding: "12px 0" }}>
//           <Box
//             sx={{
//               background: "#F2F2F2",
//               boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
//               borderRadius: "12px",
//               padding: 0,
//             }}
//           >
//             <LeadGenerationForm
//               title="Want to book appointment with the Doctor?"
//               subtitle=""
//               doctorid={123} // Replace with actual doctor ID if needed
//             />
//           </Box>
//         </Box>

//         {/* Desktop View: Original Layout */}
//         <Box sx={{ padding: { xs: "12px 0", sm: "25px 0" } }}>
//           <Box
//             sx={{
//               display: { xs: "none", md: "flex" },
//               margin: { xs: "16px 8px", sm: "16px 25px" },
//               gap: 5,
//             }}
//           >
//             {/* Video Data */}
//             <Box
//               padding="14px 24px"
//               sx={{
//                 background: "#F2F2F2",
//                 boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
//                 borderRadius: "10px",
//                 flex: 2,
//               }}
//             >
//               <Typography
//                 padding="6px 0 25px 0"
//                 fontSize={22}
//                 lineHeight="100%"
//                 color={primaryColor}
//                 variant="h5"
//               >
//                 Expert Doctors Opinion
//               </Typography>

//               {!apiResults.videos ? (
//                 <VideosLoad />
//               ) : apiResults.videos.length === 0 ? (
//                 <h3>No Videos Found... </h3>
//               ) : (
//                 <Box
//                   sx={{
//                     marginTop: 2,
//                     display: "grid",
//                     gridTemplateColumns: {
//                       xs: "1fr",
//                       sm: "1fr 1fr",
//                       md: "1fr 1fr 1fr",
//                     },
//                     gap: "24px",
//                     rowGap: "16px",
//                     width: "100%",
//                   }}
//                 >
//                   {apiResults.videos.map((video, index) => (
//                     <VideoCard key={index} video={video} />
//                   ))}
//                 </Box>
//               )}
//             </Box>

//             {/* AI Results and Lead Generation Form */}
//             <Box
//               display={{ xs: "none", md: "block" }}
//               sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}
//             >
//               <AICard apiResults={apiResults} primaryColor={primaryColor} />
//               <Box
//                 sx={{
//                   background: "#F2F2F2",
//                   boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
//                   borderRadius: "12px",
//                   padding: 0,
//                 }}
//               >
//                 <LeadGenerationForm
//                   title="Want to book appointment with the Doctor?"
//                   subtitle=""
//                   doctorid={123} // Replace with actual doctor ID if needed
//                 />
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default Search;

// import { Box, IconButton, InputBase, Typography } from "@mui/material";
// import { useRouter } from "next/router";
// import { AiSearch } from "../../Service/Services"; // Update with actual path
// import VideoCard from "./VideoCard"; // Update with actual path
// import SearchIcon from "@mui/icons-material/Search";
// import AICard from "./AICard"; // Update with actual path
// import VideosLoad from "./ShimmerUI/VideosLoad"; // Update with actual path
// import MobileAICard from "./MobileAICard"; // Update with actual path
// import LeadGenerationForm from "../../components/common/Lead-Generation"; // Update with actual path
// import NavBar from "../../Components/NavBar";

// const primaryColor = "#133682";

// const Search = ({ apiResults, searchInput }) => {
//   const router = useRouter();
//   const { query } = router.query;

//   return (
//     <>
//       <NavBar />
//       <h1>Search Results for: {query}</h1>
//       <Box
//         borderRadius={2}
//         margin={{ xs: 0, md: 4 }}
//         padding={4}
//         sx={{
//           boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
//           background: "#FFFCFC",
//         }}
//       >
//         {/* Search */}
//         <Box sx={{ flexGrow: 1, marginTop: "40px" }}>
//           <form onSubmit={(e) => e.preventDefault()}>
//             <Box
//               sx={{
//                 position: "relative",
//                 borderRadius: "44px",
//                 backgroundColor: "#FFF",
//                 width: "100%",
//                 maxWidth: "1207px",
//                 margin: "auto",
//                 display: "flex",
//                 alignItems: "center",
//                 border: '1px solid #007BFF',
//               }}
//             >
//               <InputBase
//                 type="search"
//                 required={true}
//                 placeholder="Search for Treatments, Doctors, or Hospitals"
//                 inputProps={{ "aria-label": "search" }}
//                 value={searchInput}
//                 sx={{
//                   width: "100%",
//                   "& .MuiInputBase-input": {
//                     padding: "12.5px 20px",
//                     paddingRight: "48px",
//                     fontSize: { xs: "14px", sm: "18px" },
//                     fontWeight: 400,
//                     "&::placeholder": {
//                       color: " #007BFF",
//                       opacity: 1,
//                     },
//                   },
//                 }}
//                 onChange={(e) => router.push(`/search/${e.target.value}`)}
//               />
//               <IconButton
//                 type="submit"
//                 sx={{
//                   padding: "12px",
//                   position: "absolute",
//                   right: 0,
//                   color: "#133682",
//                 }}
//                 aria-label="search"
//                 onClick={() => router.push(`/search?query=${searchInput}`)}
//               >
//                 <SearchIcon />
//               </IconButton>
//             </Box>
//           </form>
//         </Box>

//         {/* Mobile View: AI Results First, then Videos, then Form */}
//         <Box display={{ xs: "block", md: "none" }} sx={{ padding: "12px 0" }}>
//           <MobileAICard apiResults={apiResults} primaryColor={primaryColor} />
//         </Box>

//         {/* Mobile View: Videos */}
//         <Box display={{ xs: "block", md: "none" }} sx={{ padding: "12px 0" }}>
//           <Box
//             padding="14px 24px"
//             sx={{
//               background: "#F2F2F2",
//               boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
//               borderRadius: "12px",
//             }}
//           >
//             <Typography
//               padding="6px 0 25px 0"
//               fontSize={22}
//               lineHeight="100%"
//               color={primaryColor}
//               variant="h5"
//             >
//               Expert Doctors Opinion
//             </Typography>

//             {!apiResults.videos ? (
//               <VideosLoad />
//             ) : apiResults.videos.length === 0 ? (
//               <h3>No Videos Found... </h3>
//             ) : (
//               <Box
//                 sx={{
//                   marginTop: 2,
//                   display: "grid",
//                   gridTemplateColumns: {
//                     xs: "1fr",
//                     sm: "1fr 1fr",
//                     md: "1fr 1fr 1fr",
//                   },
//                   gap: "24px",
//                   rowGap: "16px",
//                   width: "100%",
//                 }}
//               >
//                 {apiResults.videos.map((video, index) => (
//                   <VideoCard key={index} video={video} />
//                 ))}
//               </Box>
//             )}
//           </Box>
//         </Box>

//         {/* Mobile View: Lead Generation Form */}
//         <Box display={{ xs: "block", md: "none" }} sx={{ padding: "12px 0" }}>
//           <Box
//             sx={{
//               background: "#F2F2F2",
//               boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
//               borderRadius: "12px",
//               padding: 0,
//             }}
//           >
//             <LeadGenerationForm
//               title="Want to book appointment with the Doctor?"
//               subtitle=""
//               doctorid={123} // Replace with actual doctor ID if needed
//             />
//           </Box>
//         </Box>

//         {/* Desktop View: Original Layout */}
//         <Box sx={{ padding: { xs: "12px 0", sm: "25px 0" } }}>
//           <Box
//             sx={{
//               display: { xs: "none", md: "flex" },
//               margin: { xs: "16px 8px", sm: "16px 25px" },
//               gap: 5,
//             }}
//           >
//             {/* Video Data */}
//             <Box
//               padding="14px 24px"
//               sx={{
//                 background: "#F2F2F2",
//                 boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
//                 borderRadius: "10px",
//                 flex: 2,
//               }}
//             >
//               <Typography
//                 padding="6px 0 25px 0"
//                 fontSize={22}
//                 lineHeight="100%"
//                 color={primaryColor}
//                 variant="h5"
//               >
//                 Expert Doctors Opinion
//               </Typography>

//               {!apiResults.videos ? (
//                 <VideosLoad />
//               ) : apiResults.videos.length === 0 ? (
//                 <h3>No Videos Found... </h3>
//               ) : (
//                 <Box
//                   sx={{
//                     marginTop: 2,
//                     display: "grid",
//                     gridTemplateColumns: {
//                       xs: "1fr",
//                       sm: "1fr 1fr",
//                       md: "1fr 1fr 1fr",
//                     },
//                     gap: "24px",
//                     rowGap: "16px",
//                     width: "100%",
//                   }}
//                 >
//                   {apiResults.videos.map((video, index) => (
//                     <VideoCard key={index} video={video} />
//                   ))}
//                 </Box>
//               )}
//             </Box>

//             {/* AI Results and Lead Generation Form */}
//             <Box
//               display={{ xs: "none", md: "block" }}
//               sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}
//             >
//               <AICard apiResults={apiResults} primaryColor={primaryColor} />
//               <Box
//                 sx={{
//                   background: "#F2F2F2",
//                   boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
//                   borderRadius: "12px",
//                   padding: 0,
//                 }}
//               >
//                 <LeadGenerationForm
//                   title="Want to book appointment with the Doctor?"
//                   subtitle=""
//                   doctorid={123} // Replace with actual doctor ID if needed
//                 />
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export async function getServerSideProps(context) {
//   const { query } = context.query;
//   let apiResults = { videos: [], aiData: "" };
//   let searchInput = "";

//   if (query) {
//     searchInput = query;
//     try {
//       const { data } = await AiSearch(query); // Ensure AiSearch is properly imported and functional
//       apiResults = {
//         videos: data?.data?.videosData || [],
//         aiData: data?.data?.aiData || "AI Data not available",
//       };
//     } catch (error) {
//       console.error("Search error:", error);
//       apiResults = {
//         videos: [],
//         aiData: "Something went wrong. Please try again later.",
//       };
//     }
//   }

//   return {
//     props: {
//       apiResults,
//       searchInput,
//     },
//   };
// }

// export default Search;

import { Box, IconButton, InputBase, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { AiSearch } from "../../Service/Services"; // Update with actual path
import VideoCard from "./VideoCard"; // Update with actual path
import SearchIcon from "@mui/icons-material/Search";
import AICard from "./AICard"; // Update with actual path
import VideosLoad from "./ShimmerUI/VideosLoad"; // Update with actual path
import MobileAICard from "./MobileAICard"; // Update with actual path
import LeadGenerationForm from "../../Components/common/Lead-Generation"; // Update with actual path
import NavBar from "../../Components/NavBar";
import { useState } from "react";

const primaryColor = "#133682";

const Searchresults = ({ apiResults, searchInput }) => {
  const [inputValue, setInputValue] = useState(searchInput || "");
  const router = useRouter();

  const handleSearch = () => {
    if (inputValue.trim() === "") {
      router.push(`/search/doctor`);
    } else {
      router.push(`/searchresults/${inputValue}`);
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

export async function getServerSideProps(context) {
  const { query } = context.query;
  let apiResults = { videos: [], aiData: "" };
  let searchInput = "";

  if (query) {
    searchInput = query;
    try {
      const { data } = await AiSearch(query); // Ensure AiSearch is properly imported and functional
      apiResults = {
        videos: data?.data?.videosData || [],
        aiData: data?.data?.aiData || "AI Data not available",
      };
    } catch (error) {
      console.error("Search error:", error);
      apiResults = {
        videos: [],
        aiData: "Something went wrong. Please try again later.",
      };
    }
  }

  return {
    props: {
      apiResults,
      searchInput,
    },
  };
}

export default Searchresults;
