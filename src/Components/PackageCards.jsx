import React from "react";

import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import MembershipBenifits from "./MembershipBenifits";
import Pricing from "./Pricing";

const PackageCards = () => {
  return (
    <>
      <Pricing />

      <MembershipBenifits />
      <FrequentlyAskedQuestions />
    </>
  );
};

export default PackageCards;
