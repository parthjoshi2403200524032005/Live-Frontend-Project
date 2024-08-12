/* import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player/youtube";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { userHomePage } from "../Service/Services";
import toast from "react-hot-toast";
import { HMCard, VideoShareWrapper } from "./DoctorCard/DoctorCardStyles";
import { Flex, FlexCol } from "../styles/CommonStyles";
import RenderModalOrBottomSheet from "../Components/common/RenderModalBS";
import LeadGenerationForm from "../Components/common/Lead-Generation";

import DoctorCard from "./DoctorCard";
import { useNavigate } from "react-router-dom";

const HeroSlider = () => {
  const [doctor, setDoctor] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const [isBtsVisible, setShowBts] = useState(false);
  const [doctorId, setDoctorId] = useState("");
  const sliderRef = useRef(null);

  const doctorDetails = async () => {
    const response = await userHomePage();
    if (response?.data.status) {
      setLoading(true);
      setDoctor(response.data?.data);
      setLoading(false);
    } else {
      setLoading(false);
      toast.error(response.data?.message);
    }
  };

  useEffect(() => {
    doctorDetails();
  }, []);

  const handleAppointmentBts = (e, doctorId) => {
    document
      .querySelector(".widget-visible")
      .setAttribute("style", "display:none !important");
    setDoctorId(doctorId);
    setShowBts(true);
    e.stopPropagation();
    e.preventDefault();
  };

  const handleClick = () => {
    navigate("/videos");
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

 

  return (
    <div
      style={{
              width: "100%",
          
      
        
        borderRadius: "22.572px",
        background: "var(--Gray-6, #F2F2F2)",
        textAlign: "center",
       
        position: "relative",
      }}
    >
      <div className="container mt-3">
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <Slider ref={sliderRef} {...settings}>
            {doctor.length > 0 &&
              doctor.map((item, idx) => (
                <div key={idx} style={{ padding: "0" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      margin: "0",
                    }}
                  >
                    <HMCard
                      style={{
                        borderRadius: "12px",
                        overflow: "hidden",
                        cursor: "pointer",
                        marginBottom: "20px",
                        marginRight: "20px",
                      }}
                      onClick={() => {
                        navigate(
                          `/videos/${decodeURIComponent(
                            item.title.split(" ").join("-").toString()
                          )}`
                        );
                      }}
                    >
                      <FlexCol>
                        <VideoShareWrapper
                          style={{
                            width: "100%",
                            height: "200px",
                            overflow: "hidden",
                            borderRadius: "5px",
                          }}
                        >
                          {item.video.link.length > 0 && (
                            <ReactPlayer
                              url={item.video.link}
                              light={true}
                              width="100%"
                              height="100%"
                              style={{ borderRadius: "5px" }}
                            />
                          )}
                        </VideoShareWrapper>

                        <DoctorCard
                          item={item}
                          videocode={item.title}
                          handleBtsModal={handleAppointmentBts}
                        />
                      </FlexCol>
                    </HMCard>
                  </div>
                </div>
              ))}
          </Slider>
        )}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          right: "10px",
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
    
     
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
            title="Want to book appointment with doctor?"
            doctorid={doctorId}
          />
        </Flex>
      </RenderModalOrBottomSheet>
    </div>
  );
};

export default HeroSlider;
 */