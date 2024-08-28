import { Box } from "@mui/material";
import React from "react";

import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
  const navigate = useNavigate();
  const { link, title } = video;

  const videoId = (link) =>
    link.match(
      /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^&?]+)/
    )?.[1] || null;


  return (
    <Box
    sx={{
      margin: {sm: "auto"},
      textAlign: {xs: "center", sm: "start"}
    }}
      type="button"
      onClick={() => {
        navigate(
          `/videos/${decodeURIComponent(
            title.split(" ").join("-").toString()
          )}`
        );
      }}
    >
      <img
        width="280x"
        height="160px"
        style={{ borderRadius: "12px" }}
        src={`https://img.youtube.com/vi/${videoId(link)}/maxresdefault.jpg`}
        alt=""
      />
      <h5 style={{ width: "80%", fontSize: "15px", textAlign: "start", }} className="p-3 p-md-2">
        {title.length > 50 ? title.substring(0, 50) + "......" : title}
      </h5>
    </Box>
  );
};

export default VideoCard;
