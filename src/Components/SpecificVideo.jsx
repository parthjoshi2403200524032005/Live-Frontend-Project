import React, { useEffect, useState } from "react";
import Plyr from "plyr-react";
import { useParams } from "react-router-dom";
import { videoHomePage } from "../Service/Services";
import DoctorProfile from "./DoctorProfile";
import {
  BookAppointmentFixedbar,
  SpecificVideoWrapper,
} from "../styles/SpecificVideo";
import { Helmet } from "react-helmet";
import LeadGenerationForm from "./common/Lead-Generation";
import RenderModalOrBottomSheet from "./common/RenderModalBS";
import { Flex } from "../styles/CommonStyles";
import { Description } from "../styles/CommonStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown , faAngleUp } from '@fortawesome/free-solid-svg-icons'

function SpecificVideo() {
  const { videotitle } = useParams();
  const [url, setUrl] = useState("");
  const [data, setData] = useState(null);
  const [isBtsVisible, setShowBts] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [qaData, setQaData] = useState([]);
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleDescription = () => setIsExpanded(!isExpanded);

  const toggleAnswer = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  const fetchVideoData = async () => {
    try {
      var videoTitle2 = videotitle.split("-").join(" ");
      const responseJson = await videoHomePage(videoTitle2);
      if (responseJson?.data?.data?.length > 0) {
        const videoData = responseJson.data.data[0];
        setData(videoData);
        setUrl(videoData.link);
        setQaData(videoData.questionsAnswers || []);
      } else {
        console.error("No data found for the provided video title.");
      }
    } catch (error) {
      console.error("Failed to fetch video data:", error);
    }
  };

  useEffect(() => {
    if (videotitle) {
      fetchVideoData();
    }
  }, [videotitle]);

  const handleAppointmentBts = () => {
    document.querySelector(".widget-visible")?.setAttribute("style", "display:none !important");
    setShowBts(true);
  };

  return (
    <>
      <Helmet>
        <title>{data?.title}</title>
        <meta name="description" content={data?.description} />
      </Helmet>
      <SpecificVideoWrapper justifyContent="center">
        <div className="videoDetails">
          {url && (
            <Plyr
              source={{
                type: "video",
                sources: [{ src: url, provider: "youtube" }],
              }}
            />
          )}

          <h1 className="h1">{data?.title}</h1>

          <Description>
            <div className="description-container">
              <p className={isExpanded ? 'description expanded' : 'description collapsed'}>
                {data?.description}
              </p>
              <button onClick={toggleDescription}>
                {isExpanded ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
              </button>
            </div>
          </Description>

          <DoctorProfile doctorid={data?.doctorId} subprofile={true} />
        </div>

        <div className="leadFormWrapper">
          {qaData.length > 0 && <h1 className="h2">Important questions <br /> answered in this video</h1>}
          {qaData.map((item, index) => (
            <div key={index} className="qa-item">
              <div className="question-container" onClick={() => toggleAnswer(index)}>
                <h3 className="question h3">
                  {item.question}
                </h3>
                {visibleIndex === index ? 
                  <FontAwesomeIcon icon={faAngleUp} /> :  
                  <FontAwesomeIcon icon={faAngleDown} />
                }
              </div>
              {visibleIndex === index && (
                <p className="answer">
                  {item.answer}
                </p>
              )}
            </div>
          ))}

          <div className="leadForm">
            <LeadGenerationForm
              title="Want to book appointment with doctor?"
              doctorid={data?.doctorId}
            />
          </div>
        </div>
      </SpecificVideoWrapper>
      <BookAppointmentFixedbar onClick={handleAppointmentBts}>
        Book Appointment Now
      </BookAppointmentFixedbar>
      <RenderModalOrBottomSheet
        isVisible={isBtsVisible}
        onClose={() => {
          document.querySelector(".widget-visible")?.setAttribute("style", "display:block !important");
          setShowBts(false);
        }}
      >
        <Flex padding="20px">
          <LeadGenerationForm
            title="Want to book appointment with doctor?"
            doctorid={data?.doctorId}
          />
        </Flex>
      </RenderModalOrBottomSheet>
    </>
  );
}

export default SpecificVideo;
