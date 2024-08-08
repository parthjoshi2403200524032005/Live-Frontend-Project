import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player/youtube";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { userHomePage } from "../Service/Services";
import toast from "react-hot-toast";
import { HMCard, VideoShareWrapper } from "./DoctorCard/DoctorCardStyles";
import { Flex, FlexCol } from "../styles/CommonStyles";
import { useNavigate } from "react-router-dom";
import RenderModalOrBottomSheet from "../Components/common/RenderModalBS";
import LeadGenerationForm from "../Components/common/Lead-Generation";
import vector2 from "./Svgs/vector2.svg";
import vector1 from "./Svgs/vector1.svg";
import DoctorCard from "./DoctorCard"; // Adjust the path if necessary

const HomePageVideos = () => {
  const [doctor, setDoctor] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "auto",
          borderRadius: "22.572px",
          background: "#FFFFFF",
          boxShadow: "0px 0px 8.652px 0px rgba(0, 0, 0, 0.25)",
          padding: "50px 20px 100px",
          textAlign: "center",
          marginTop: "80px",
          position: "relative",
        }}
      >
        <div className="container mt-3">
          {loading ? (
            <div className="spinner"></div>
          ) : (
            <>
              <div className="col-12 text-center my-10">
                <h1
                  className="fw-bold"
                  style={{
                    color: "#000",
                    fontFamily: "Poppins",
                    fontSize: "48px",
                    fontWeight: "600",
                    lineHeight: "normal",
                    textTransform: "capitalize",
                    marginBottom: "10px",
                  }}
                >
                  Explore Our Health Advisors
                </h1>
                <p
                  style={{
                    color: "rgba(38, 38, 38, 0.60)",
                    fontFamily: "Arial",
                    fontSize: "24px",
                    fontWeight: 400,
                    lineHeight: "26.334px",
                    textAlign: "center",
                    marginBottom: "56px",
                  }}
                >
                  Solutions Directly From Expert Doctors
                </p>
              </div>
              <Slider ref={sliderRef} {...settings}>
                {doctor.length > 0 &&
                  doctor.map((item, idx) => (
                    <div key={idx} style={{ padding: "0 20px" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          margin: "0 0 30px",
                        }}
                      >
                        <HMCard
                          style={{
                            borderRadius: "12px",
                            overflow: "hidden",
                            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
                            cursor: "pointer",
                            padding: "15px",
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
                                height: "200px", // Set a fixed height for consistency
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
            </>
          )}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            left: "10px",
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background:
                  i === currentSlide ? "var(--900, #133682)" : "#D0D5D8",
                margin: "0 5px",
                cursor: "pointer",
              }}
              onClick={() => sliderRef.current.slickGoTo(i)}
            />
          ))}
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
          <img
            src={vector2}
            alt="Previous"
            onClick={handlePrev}
            style={{
              cursor: "pointer",
              marginRight: "10px",
              width: "40px",
              height: "40px",
            }}
          />
          <img
            src={vector1}
            alt="Next"
            onClick={handleNext}
            style={{
              cursor: "pointer",
              marginLeft: "10px",
              width: "40px",
              height: "40px",
            }}
          />
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
    </>
  );
};

export default HomePageVideos;
