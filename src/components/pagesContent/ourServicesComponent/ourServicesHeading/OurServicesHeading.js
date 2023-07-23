import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import {
  ourServicesHeadingHomePage,
  servicesHeadingPage,
} from "../../../../util/data/DataDetails";
import "./OurServicesHeadingStyle.css";

const OurServicesHeading = () => {
  const pathName = useLocation();

  const isServices = pathName.pathname === "/services";

  return (
    <>
      {isServices && (
        <Typography
          data-aos={servicesHeadingPage.dataAos}
          data-aos-offset={servicesHeadingPage.dataAosOffset}
          data-aos-easing={servicesHeadingPage.dataAosEasing}
          data-aos-once="false"
          className={servicesHeadingPage.headingClassName}
          variant="h4"
          component="h2"
          sx={{
            marginLeft: servicesHeadingPage.headingMarginLeft,
            marginTop: servicesHeadingPage.headingMarginTop,
            marginBottom: "120px",
          }}
        >
          OUR SERVICES
        </Typography>
      )}

      {!isServices && (
        <Typography
          data-aos={ourServicesHeadingHomePage.dataAos}
          data-aos-offset={ourServicesHeadingHomePage.dataAosOffset}
          data-aos-easing={ourServicesHeadingHomePage.dataAosEasing}
          data-aos-once="false"
          className={ourServicesHeadingHomePage.headingClassName}
          variant="h4"
          component="h2"
          sx={{
            marginLeft: ourServicesHeadingHomePage.headingMarginLeft,
            marginTop: ourServicesHeadingHomePage.headingMarginTop,
            marginBottom: "120px",
          }}
        >
          OUR SERVICES
        </Typography>
      )}
    </>
  );
};

export default OurServicesHeading;
