// import { VolumeUp } from "@mui/icons-material";
// import VolumeOffIcon from "@mui/icons-material/VolumeOff";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import { Box, Typography, IconButton } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import ChatDataLoad from "./ShimmerUI/ChatDataLoad";

// const MobileAICard = ({ apiResults, primaryColor }) => {
//   const speech = new SpeechSynthesisUtterance();
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [showFullContent, setShowFullContent] = useState(false);
//   const [voices, setVoices] = useState([]);

//   const speakContent = () => {
//     if (typeof window !== "undefined" && "speechSynthesis" in window) {
//       const selectedVoice = voices.find(
//         (voice) => voice.name === "Microsoft Mark - English (United States)"
//       );

//       if (selectedVoice) {
//         speech.voice = selectedVoice;
//       } else {
//         toast.error("An Error occurred, please try again...");
//         console.warn("Desired voice not found, using default.");
//       }

//       const content = document.getElementById("ai-response").textContent;
//       speech.text = content;
//       speech.onend = () => setIsSpeaking(false);

//       if (isSpeaking) {
//         window.speechSynthesis.cancel();
//         setIsSpeaking(false);
//       } else {
//         window.speechSynthesis.speak(speech);
//         setIsSpeaking(true);
//       }
//     } else {
//       toast.error("Your browser doesn't support text to speech!");
//       console.error("Sorry, your browser doesn't support text to speech!");
//     }
//   };

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       window.speechSynthesis.cancel();
//       const updateVoices = () => {
//         const allVoices = window.speechSynthesis.getVoices();
//         setVoices(allVoices);
//       };
//       window.speechSynthesis.onvoiceschanged = updateVoices;
//       updateVoices();
//     }
//   }, []);

//   const getLimitedContent = (content, limit) => {
//     const tempDiv = document.createElement("div");
//     tempDiv.innerHTML = content;
//     const lines = tempDiv.innerText.split("\n").slice(0, limit);
//     return lines.join("\n");
//   };

//   return (
//     <Box
//       sx={{
//         background: "#F2F2F2",
//         boxShadow: "1px -87px 34px -14px rgb(215 229 241 / 75%) inset",
//         borderRadius: "12px",
//         height: "fit-content",
//         overflow: "hidden",
//         paddingY: "16px",
//         position: "relative",
//         marginBottom: "16px",
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           paddingX: { xs: 2, sm: 3 },
//           marginBottom: "16px",
//         }}
//       >
//         <Typography
//           fontSize={{ xs: 18, sm: 22 }}
//           color={primaryColor}
//           variant="h5"
//           sx={{
//             color: "var(--900, #133682)",
//             textAlign: "center",
//             fontFamily: "Poppins",
//             fontSize: "16px",
//             fontStyle: "normal",
//             fontWeight: 600,
//             lineHeight: "140%", // 22.4px
//             flex: 1,
//             marginBottom: "16px",
//           }}
//         >
//           What AI says about your Questions?
//         </Typography>
//         <IconButton
//           title="Tap to play/ stop..."
//           onClick={speakContent}
//           sx={{
//             backgroundColor: primaryColor,
//             color: "white",
//             display: "flex",
//             width: "30px",
//             height: "32px",
//             padding: "2px 2px 1.268px 6px",
//             justifyContent: "flex-end",
//             alignItems: "center",
//             flexShrink: 0,
//             "&:hover": {
//               backgroundColor: primaryColor,
//               opacity: 0.8,
//             },
//           }}
//         >
//           {isSpeaking ? <VolumeOffIcon /> : <VolumeUp />}
//         </IconButton>
//       </Box>

//       {!apiResults.aiData ? (
//         <ChatDataLoad />
//       ) : (
//         <Box sx={{ paddingX: { xs: 2, sm: 3 }, paddingBottom: "16px" }}>
//           <Typography
//             variant="body1"
//             fontSize={{ xs: "14px", md: "16px" }}
//             sx={{
//               color: "#454545",
//               lineHeight: "26px",
//               fontWeight: 400,
//               letterSpacing: "0.8px",
//               marginBottom: "8px",
//             }}
//           >
//             Here’s a quick summary of what AI thinks:
//           </Typography>

//           <Typography
//             variant="body1"
//             fontSize={{ xs: "14px", md: "16px" }}
//             sx={{
//               color: "#454545",
//               lineHeight: "26px",
//               fontWeight: 400,
//               letterSpacing: "0.8px",
//               marginBottom: "16px",
//               maxHeight: showFullContent ? "none" : "120px",
//               overflow: "hidden",
//               transition: "max-height 0.3s ease",
//             }}
//           >
//             {apiResults.aiData && (
//               <div
//                 id="ai-response"
//                 dangerouslySetInnerHTML={{
//                   __html: showFullContent
//                     ? apiResults.aiData
//                     : getLimitedContent(apiResults.aiData, 5),
//                 }}
//               ></div>
//             )}
//           </Typography>

//           <Box
//             onClick={() => setShowFullContent(!showFullContent)}
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               width: "50px",
//               height: "55px",
//               borderRadius: "50%",
//               backgroundColor: primaryColor,
//               color: "#fff",
//               cursor: "pointer",
//               position: "absolute",
//               bottom: "-20px",
//               left: "50%",
//               transform: "translateX(-50%)",
//             }}
//           >
//             {showFullContent ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//           </Box>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default MobileAICard;


import { VolumeUp } from "@mui/icons-material";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Box, Typography, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ChatDataLoad from "./ShimmerUI/ChatDataLoad";

const MobileAICard = ({ apiResults, primaryColor }) => {
  const speech = new SpeechSynthesisUtterance();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);
  const [voices, setVoices] = useState([]);

  const speakContent = () => {
    if ("speechSynthesis" in window) {
      const selectedVoice = voices.find(
        (voice) => voice.name === "Microsoft Mark - English (United States)"
      );

      if (selectedVoice) {
        speech.voice = selectedVoice;
      } else {
        toast.error("An Error occurred, please try again...");
        console.warn("Desired voice not found, using default.");
      }

      const content = document.getElementById("ai-response").textContent;
      speech.text = content;
      speech.onend = () => setIsSpeaking(false);

      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      } else {
        window.speechSynthesis.speak(speech);
        setIsSpeaking(true);
      }
    } else {
      toast.error("Your browser doesn't support text to speech!");
      console.error("Sorry, your browser doesn't support text to speech!");
    }
  };

  useEffect(() => {
    window.speechSynthesis.cancel();
    const updateVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      setVoices(allVoices);
    };
    window.speechSynthesis.onvoiceschanged = updateVoices;
    updateVoices();
  }, []);

  // Function to get a limited number of lines
  const getLimitedContent = (content, limit) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;
    const lines = tempDiv.innerText.split("\n").slice(0, limit);
    return lines.join("\n");
  };

  return (
    <Box
      sx={{
        background: "#F2F2F2",
        boxShadow: "1px -87px 34px -14px rgb(215 229 241 / 75%) inset",
        borderRadius: "12px",
        height: "fit-content",
        overflow: "hidden",
        paddingY: "16px",
        position: "relative",
        marginBottom: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingX: { xs: 2, sm: 3 },
          marginBottom: "16px",
        }}
      >
        <Typography
          fontSize={{ xs: 18, sm: 22 }}
          color={primaryColor}
          variant="h5"
          sx={{
            color: "var(--900, #133682)",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "140%", // 22.4px
            flex: 1,
            marginBottom: "16px",
          }}
        >
          What AI says about your Questions?
        </Typography>
        <IconButton
          title="Tap to play/ stop..."
          onClick={speakContent}
          sx={{
            backgroundColor: primaryColor,
            color: "white",
            display: "flex",
            width: "30px",
            height: "32px",
            padding: "2px 2px 1.268px 6px",
            justifyContent: "flex-end",
            alignItems: "center",
            flexShrink: 0,
            "&:hover": {
              backgroundColor: primaryColor,
              opacity: 0.8,
            },
          }}
        >
          {isSpeaking ? <VolumeOffIcon /> : <VolumeUp />}
        </IconButton>
      </Box>

      {!apiResults.aiData ? (
        <ChatDataLoad />
      ) : (
        <Box sx={{ paddingX: { xs: 2, sm: 3 }, paddingBottom: "16px" }}>
          {/* Introductory Text */}
          <Typography
            variant="body1"
            fontSize={{ xs: "14px", md: "16px" }}
            sx={{
              color: "#454545",
              lineHeight: "26px",
              fontWeight: 400,
              letterSpacing: "0.8px",
              marginBottom: "8px",  // Added margin-bottom
            }}
          >
            Here’s a quick summary of what AI thinks:
          </Typography>

          <Typography
            variant="body1"
            fontSize={{ xs: "14px", md: "16px" }}
            sx={{
              color: "#454545",
              lineHeight: "26px",
              fontWeight: 400,
              letterSpacing: "0.8px",
              marginBottom: "16px",
              maxHeight: showFullContent ? "none" : "120px", // Adjusted for line limit
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
          >
            {apiResults.aiData && (
              <div
                id="ai-response"
                dangerouslySetInnerHTML={{ __html: showFullContent ? apiResults.aiData : getLimitedContent(apiResults.aiData, 5) }} // Adjusted to limit lines
              ></div>
            )}
          </Typography>

          <Box
            onClick={() => setShowFullContent(!showFullContent)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50px", // Set the width for circle
              height: "55px", // Set the height for circle
              borderRadius: "50%", // Make it circular
              backgroundColor: primaryColor, // Background color
              color: "#fff", // Icon color
              cursor: "pointer",
              position: "absolute",
              bottom: "-20px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {showFullContent ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MobileAICard;
