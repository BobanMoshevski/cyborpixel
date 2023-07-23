import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import WhatMakesUs from "../../components/pagesContent/whatMakesUsComponent/whatMakesUs/WhatMakesUs";
import WhyChooseUs from "../../components/pagesContent/whyChooseUsComponent/whyChooseUs/WhyChooseUs";

const AboutUsPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <WhatMakesUs />
      <WhyChooseUs />
    </>
  );
};

export default AboutUsPage;
