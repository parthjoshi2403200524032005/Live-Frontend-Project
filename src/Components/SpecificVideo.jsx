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
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const videocode = queryParams.get("videocode");
  // const doctor = queryParams.get("doctor");
  const { videotitle } = useParams();
  const [url, setUrl] = useState("");

  const [data, setData] = useState(null);
  const [isBtsVisible, setShowBts] = useState(false);

  //useState for status of video description
  const [isExpanded, setIsExpanded] = useState(false);

  //function to toggle video description
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  //State to store question and answers fetched from api
  const [qaData, setQaData] = useState([]);

  //state to track which question does user wants to view
  const [visibleIndex, setVisibleIndex] = useState(null);

  //answer toggle
  const toggleAnswer = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };
  

  const fetchVideoData = async () => {
    var videoTitle2 = videotitle.split("-").join(" ");
    const responseJson = await videoHomePage(videoTitle2);
    console.log(responseJson.data.data[0]);
    setData(responseJson.data.data[0]);
    setUrl(responseJson.data.data[0].link);

    //demo data of question and answers
    const demoData = [
      { question: 'How does diabetes affect life?', answer: 'Damage to large (macrovascular) and small (microvascular) blood vessels, which can lead to heart attack, stroke, and problems with the kidneys, eyes, gums, feet and nerves.' },
      { question: 'Can spondylosis be cured?', answer: 'This is a chronic condition, which means there no affect your quality of life.' },
      { question: 'Can tooth cavities be fixed?', answer: 'A cavity is permanent damage that a dentist has to repair with a filling.' },
    ];

    setQaData(demoData);
  };

  useEffect(() => {
    if (videotitle) {
      fetchVideoData();
    }
  }, [videotitle]);

  const handleAppointmentBts = () => {
    document
      .querySelector(".widget-visible")
      .setAttribute("style", "display:none !important");
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
          {url.length > 0 && (
            <Plyr
              source={{
                type: "video",
                sources: [
                  {
                    src: url,
                    provider: "youtube",
                  },
                ],
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
              {isExpanded ? <FontAwesomeIcon icon={faAngleUp} /> :  <FontAwesomeIcon icon={faAngleDown} /> }
            </button>
            
          </div>
          </Description>

          <DoctorProfile doctorid={data?.doctorId} subprofile={true} />
        </div>

        
        <div className="leadFormWrapper">
          
          <div className="qa-container">
            <h1 className="h2">Important questions <br /> answered in this video</h1>
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
          </div>

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
          document
            .querySelector(".widget-visible")
            .setAttribute("style", "display:block !important");
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
