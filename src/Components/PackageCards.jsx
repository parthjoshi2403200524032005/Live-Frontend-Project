import React from "react";

import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import MembershipBenifits from "./MembershipBenifits";
import Pricing from "./Pricing";
import Dashboard from "../AdminPannel/pages/Dashboard";

const PackageCards = () => {
  return (
    <>
      <Pricing />

      <p className="text-center sm:text-[48px] text-[40px] font-poppins font-semibold sm:mt-3 mt-1 capitalize">
        Our membership benefits
      </p>

      {/* <MembershipBenifits />
<FrequentlyAskedQuestions /> */}
      <Dashboard />
    </>
  );
};

export default PackageCards;
