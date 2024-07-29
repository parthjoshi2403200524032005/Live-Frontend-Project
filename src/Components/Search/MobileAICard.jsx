import { AutoAwesome, VolumeUp } from "@mui/icons-material";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { Box, Typography, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ChatDataLoad from "./ShimmerUI/ChatDataLoad";

const MobileAICard = ({ apiResults, primaryColor }) => {
  const speech = new SpeechSynthesisUtterance();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [displayMore, setDisplayMore] = useState(false);
  const [voices, setVoices] = useState([]);

  const speakContent = () => {
    if ("speechSynthesis" in window) {
      const selectedVoice = voices.find(
        (voice) => voice.name === "Microsoft Mark - English (United States)"
      );

      if (selectedVoice) {
        speech.voice = selectedVoice;
      } else {
        toast.error("An Error occured, please try again...");
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

  return (
    <Box
      sx={{
        background: "#F2F2F2",
        boxShadow: "1px -87px 34px -14px rgb(215 229 241 / 75%) inset",
        borderRadius: "12px",
        height: displayMore ? "fit-content" : "300px",
        overflow: "hidden",
        paddingY: "16px",
        position: "relative",
      }}
    >
      <Typography
        padding={{ xs: "18px 2px", sm: "18px 12px" }}
        fontSize={{ xs: 18, sm: 22 }}
        lineHeight="100%"
        color={primaryColor}
        variant="h5"
      >
        <AutoAwesome sx={{ fontSize: { xs: "16px", sm: "21px" } }} />
        What AI says about your Questions ?
      </Typography>

      {!apiResults.aiData ? (
        <ChatDataLoad />
      ) : (
        <Box>
          <Typography
            variant="body1"
            paddingX={{ xs: 2, sm: 3 }}
            paddingBottom={2}
            fontSize={{ xs: "14px", md: "16px" }}
            sx={{
              color: "#454545",
              lineHeight: "26px",
              fontWeight: 400,
              letterSpacing: "0.8px",
            }}
          >
            {apiResults.aiData && (
              <div
                id="ai-response"
                dangerouslySetInnerHTML={{ __html: apiResults.aiData }}
              ></div>
            )}
          </Typography>

          <IconButton
            title="Tap to play/ stop..."
            onClick={speakContent}
            sx={{
              position: "absolute",
              bottom: "16px",
              right: "16px",
              backgroundColor: primaryColor,
              color: "white",
              "&:hover": {
                backgroundColor: primaryColor,
                opacity: 0.8,
              },
            }}
          >
            {isSpeaking ? <VolumeOffIcon /> : <VolumeUp />}
          </IconButton>
          <span
            onClick={() => setDisplayMore(!displayMore)}
            style={{
              backgroundColor: primaryColor,
              borderRadius: "35px",
              color: "#fff",
              position: "absolute",
              bottom: "0px",
              left: "-8px",
            }}
            type="button"
            className="px-4"
          >
            {displayMore ? "show less...." : "show more..."}
          </span>
        </Box>
      )}
    </Box>
  );
};

export default MobileAICard;
