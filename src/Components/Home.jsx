import React, { useState, useEffect } from "react";
import { Mixpanel } from "../utils/MixPanel";
import Howitworks from "./Howitworks";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import Needhelp from "./Needhelp";
import Partners from "./Partners";
import Hero from "./Hero";
import Pricing from "./Pricing";
import HomePageVideos from "./HomePageVideos";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);

  useEffect(() => {
    Mixpanel.track("hm_landing_page_viewed");

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>HealthMudraa-HOME</title>
        <meta name="description" content="home page description comes here" />
        <link rel="canonical" href="/home" />
      </Helmet>
      <Hero />
      <Partners />
      <Howitworks />
      {!isMobile && (
        <>
          <HomePageVideos />
          <Pricing />
          <Needhelp />
          <FrequentlyAskedQuestions />
        </>
      )}
    </React.Fragment>
  );
};

export default Home;
