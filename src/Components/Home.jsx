import React, { useEffect } from "react";
import Videos from "./Videos";
import { Mixpanel } from "../utils/MixPanel";
import Howitworks from "./Howitworks";

const Home = () => {
  useEffect(() => {
    Mixpanel.track("hm_landing_page_viewed");
  }, []);
  return (
    <React.Fragment>
      <Howitworks/>
      <Videos />
    </React.Fragment>
  );
};

export default Home;
