// import { Box } from "@mui/material";
// import React from "react";

// import { useNavigate } from "react-router-dom";

// const VideoCard = ({ video }) => {
//   const navigate = useNavigate();
//   const { link, title } = video;

//   const videoId = (link) =>
//     link.match(
//       /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^&?]+)/
//     )?.[1] || null;


//   return (
//     <Box
//     sx={{
//       margin: {sm: "auto"},
//       textAlign: {xs: "center", sm: "start"}
//     }}
//       type="button"
//       onClick={() => {
//         navigate(
//           `/videos/${decodeURIComponent(
//             title.split(" ").join("-").toString()
//           )}`
//         );
//       }}
//     >
//       <img
//         width="280x"
//         height="160px"
//         style={{ borderRadius: "12px" }}
//         src={`https://img.youtube.com/vi/${videoId(link)}/maxresdefault.jpg`}
//         alt=""
//       />
//       <h5 style={{ width: "80%", fontSize: "15px", textAlign: "start", }} className="p-3 p-md-2">
//         {title.length > 50 ? title.substring(0, 50) + "......" : title}
//       </h5>
//     </Box>
//   );
// };

// export default VideoCard;


// import { Box } from "@mui/material";
// import React from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";

// const VideoCard = ({ video }) => {
//   const router = useRouter();
//   const { link, title } = video;

//   const videoId = (link) =>
//     link.match(
//       /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^&?]+)/
//     )?.[1] || null;

//   const handleClick = () => {
//     const formattedTitle = decodeURIComponent(title.split(" ").join("-"));
//     router.push(`/videos/${formattedTitle}`);
//   };

//   return (
//     <Box
//       sx={{
//         margin: { sm: "auto" },
//         textAlign: { xs: "center", sm: "start" },
//         cursor: "pointer", // Added cursor style for better UX
//       }}
//       onClick={handleClick}
//     >
//       <Image
//         width={280}
//         height={160}
//         style={{ borderRadius: "12px" }}
//         src={`https://img.youtube.com/vi/${videoId(link)}/maxresdefault.jpg`}
//         alt={title} // Use the title as alt text for better accessibility
//         onError={(e) => {
//           e.currentTarget.src = '/path/to/fallback/image.jpg'; // Add fallback image if necessary
//         }}
//       />
//       <h5
//         style={{ width: "80%", fontSize: "15px", textAlign: "start" }}
//         className="p-3 p-md-2"
//       >
//         {title.length > 50 ? title.substring(0, 50) + "..." : title}
//       </h5>
//     </Box>
//   );
// };

// export default VideoCard;

import { Box } from "@mui/material";
import React from "react";
import { useRouter } from "next/router"; // Import useRouter from next/router

const VideoCard = ({ video }) => {
  const router = useRouter(); // Use useRouter for navigation
  const { link, title } = video;

  const videoId = (link) =>
    link.match(
      /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^&?]+)/
    )?.[1] || null;

  return (
    <Box
      sx={{
        margin: { sm: "auto" },
        textAlign: { xs: "center", sm: "start" },
      }}
      type="button"
      onClick={() => {
        router.push(
          `/videos/${encodeURIComponent(
            title.split(" ").join("-").toString()
          )}`
        );
      }}
    >
      <img
        width="280"
        height="160"
        style={{ borderRadius: "12px" }}
        src={`https://img.youtube.com/vi/${videoId(link)}/maxresdefault.jpg`}
        alt={title}
      />
      <h5
        style={{
          width: "80%",
          fontSize: "15px",
          textAlign: "start",
        }}
        className="p-3 p-md-2"
      >
        {title.length > 50 ? title.substring(0, 50) + "......" : title}
      </h5>
    </Box>
  );
};

export default VideoCard;
