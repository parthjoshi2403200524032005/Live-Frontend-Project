import React, { useEffect } from "react";
import Videos from "./Videos";
import { Mixpanel } from "../utils/MixPanel";
import Howitworks from "./Howitworks";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import Footer2 from "./Footer2";
import Needhelp from "./Needhelp";
import Slider from "./Slider";
import Partners from "./Partners";
import Hero from "./Hero";
import Pricing from "./Pricing";
import HomePageVideos from "./HomePageVideos";
import { Helmet } from "react-helmet-async";



const Home = () => {
  useEffect(() => {
    Mixpanel.track("hm_landing_page_viewed");
  }, []);
  return (
    <React.Fragment>
      {/* <Slider/> */}
      <Helmet>
        <title>HealthMudraa-HOME</title>
        <meta name="description" content="home page description comes here" />
        <link rel ="canonical" href="/home"/>
      </Helmet>
      <Hero/>
      <Partners/>
      <Howitworks/>
      <HomePageVideos/>
      <Pricing/>
      <Needhelp/>
      <FrequentlyAskedQuestions/>
      <Footer2/>
    </React.Fragment>
  );
};

export default Home;
