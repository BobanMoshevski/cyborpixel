import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import DesktopTopFigures from "../../components/pagesContent/homeContent/animateFigures/desktopTopFigures/DesktopTopFigures";
import TabletTopFigures from "../../components/pagesContent/homeContent/animateFigures/tabletTopFigures/TabletTopFigures";
import OurServices from "../../components/pagesContent/ourServicesComponent/ourServices/OurServices";
import WhatMakesUs from "../../components/pagesContent/whatMakesUsComponent/whatMakesUs/WhatMakesUs";
import WhyChooseUs from "../../components/pagesContent/whyChooseUsComponent/whyChooseUs/WhyChooseUs";

const HomePage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <DesktopTopFigures />
      <TabletTopFigures />
      <WhatMakesUs />
      <OurServices />
      <WhyChooseUs />
    </>
  );
};

export default HomePage;
