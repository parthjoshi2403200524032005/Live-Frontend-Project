import React, { useEffect, useState, useCallback } from "react";
import { Box, TextField, Button, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import DoctorCard from "./DoctorCard";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { userHomePage } from "../Service/Services";
import toast from "react-hot-toast";
import ShareIcon from "@mui/icons-material/Share";
import { HMCard, VideoShareWrapper } from "./DoctorCard/DoctorCardStyles";
import { Flex, FlexCol } from "../styles/CommonStyles";
import { useNavigate } from "react-router-dom";
import RenderModalOrBottomSheet from "../Components/common/RenderModalBS";
import LeadGenerationForm from "../Components/common/Lead-Generation";
import debounce from "lodash/debounce";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet-async";

const Videos = () => {
  const [doctor, setDoctor] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [isBtsVisible, setShowBts] = useState(false);
  const [doctorId, setDoctorId] = useState("");

  const handleSearch = async (term) => {
    try {
      setLoading(true);
      const response = await userHomePage(term);
      if (response?.data.status) {
        setDoctor(response.data?.data);
      } else {
        toast.error(response.data?.message);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const debouncedSearch = useCallback(
    debounce((term) => handleSearch(term), 500),
    []
  );

  useEffect(() => {
    if (searchTerm) {
      debouncedSearch(searchTerm);
    } else {
      doctorDetails();
    }
  }, [searchTerm, debouncedSearch]);

  const doctorDetails = async () => {
    try {
      setLoading(true);
      const response = await userHomePage();
      if (response?.data.status) {
        setDoctor(response.data?.data);
      } else {
        toast.error(response.data?.message);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleShareVideo = async (link) => {
    const webShareSupported =
      typeof window != "undefined" ? "canShare" in window?.navigator : false;

    if (webShareSupported) {
      const data = {
        url: window.location.href,
        title: `Checkout this informative health video ${link}!`,
        text: `Hey, I'd like to recommend Healthmudraa to learn more about health-related cures before going to any pharma and avoid taking random medicines`,
      };
      if (navigator.canShare(data)) {
        try {
          await navigator.share(data);
        } catch (err) {
          if (err.name !== "AbortError") {
            console.error(err.name, err.message);
          }
        } finally {
          return;
        }
      }
    } else {
      navigator.clipboard.writeText(link);
      toast.success("Copied link to share");
    }
  };

  const handleAppointmentBts = (e, doctorId) => {
    document
      .querySelector(".widget-visible")
      .setAttribute("style", "display:none !important");
    setDoctorId(doctorId);
    setShowBts(true);
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <>
      <Helmet>
        <title>Healthmudraa-Videos</title>
        <meta name="description" content="Videos page description comes here" />
      </Helmet>
      
      <Box display="flex" justifyContent="center" marginTop={"1rem"}>
        <TextField
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          variant="outlined"
          placeholder="Search..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button onClick={() => debouncedSearch(searchTerm)}>
                  <Search />
                </Button>
              </InputAdornment>
            ),
          }}
          sx={{ width: "50vw", "@media (max-width: 600px)": { width: "90vw" } }}
        />
      </Box>
      <div className="container mt-3">
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <div className="row justify-content-center">
            <div className="col-12 text-center my-10">
              <h1 className="fw-bold my-5">Expert Health Advice</h1>
            </div>
            {doctor.length > 0 &&
              doctor.map((item) => (
                <LazyLoadVideoCard
                  key={item.id}
                  item={item}
                  navigate={navigate}
                  handleShareVideo={handleShareVideo}
                  handleAppointmentBts={handleAppointmentBts}
                />
              ))}
          </div>
        )}
      </div>
      <RenderModalOrBottomSheet
        isVisible={isBtsVisible}
        onClose={() => {
          setDoctorId("");
          document
            .querySelector(".widget-visible")
            .setAttribute("style", "display:block !important");
          setShowBts(false);
        }}
      >
        <Flex padding="20px">
          <LeadGenerationForm
            title="Want to book an appointment with a doctor?"
            doctorid={doctorId}
          />
        </Flex>
      </RenderModalOrBottomSheet>
    </>
  );
};

const LazyLoadVideoCard = ({ item, navigate, handleShareVideo, handleAppointmentBts }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Load the video only once when it comes into view
    threshold: 0.5, // Load the video when 50% of it is in view
  });

  return (
    <div
      className="col-lg-4 col-md-6 col-sm-12 col-12"
      style={{ marginBottom: "20px", borderRadius: "12px" }}
      ref={ref}
    >
      <HMCard
        onClick={() => {
          navigate(
            `/videos/${decodeURIComponent(
              item.title.split(" ").join("-").toString()
            )}`
          );
        }}
      >
        <FlexCol>
          <VideoShareWrapper>
            {inView && item.video.link.length > 0 && (
              <Plyr
                source={{
                  type: "video",
                  sources: [
                    {
                      src: item.video.link,
                      provider: "youtube",
                    },
                  ],
                }}
              />
            )}
            <ShareIcon
              className="shareIcon"
              sx={{ fontSize: "1rem", marginRight: "0.5rem" }}
              onClick={() =>
                handleShareVideo(
                  `https://healthmudraa.com/videos/${decodeURIComponent(
                    item.title.split(" ").join("-").toString()
                  )}`
                )
              }
            />
          </VideoShareWrapper>
          <DoctorCard
            item={item}
            videocode={item.title}
            handleBtsModal={handleAppointmentBts}
          />
        </FlexCol>
      </HMCard>
    </div>
  );
};

export default Videos;
