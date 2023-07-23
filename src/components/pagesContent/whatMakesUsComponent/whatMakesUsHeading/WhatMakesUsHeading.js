import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import {
  whatMakesUsHeadingAboutUsPage,
  whatMakesUsHeadingHomePage,
} from "../../../../util/data/DataDetails";
import "./WhatMakesUsHeadingStyle.css";

const WhatMakesUsHeading = () => {
  const pathName = useLocation();

  const isAboutUs = pathName.pathname === "/about-us";

  return (
    <>
      {isAboutUs && (
        <Typography
          data-aos={whatMakesUsHeadingAboutUsPage.dataAos}
          data-aos-offset={whatMakesUsHeadingAboutUsPage.dataAosOffset}
          data-aos-easing={whatMakesUsHeadingAboutUsPage.dataAosEasing}
          data-aos-once="false"
          className={whatMakesUsHeadingAboutUsPage.headingClassName}
          variant="h4"
          component="h2"
          sx={{
            marginLeft: whatMakesUsHeadingAboutUsPage.headingMarginLeft,
            marginTop: whatMakesUsHeadingAboutUsPage.headingMarginTop,
            marginBottom: whatMakesUsHeadingAboutUsPage.headingMarginBottom,
          }}
        >
          WHAT MAKES US DIFFERENT MAKES US BETTER
        </Typography>
      )}

      {!isAboutUs && (
        <Typography
          data-aos={whatMakesUsHeadingHomePage.dataAos}
          data-aos-offset={whatMakesUsHeadingHomePage.dataAosOffset}
          data-aos-easing={whatMakesUsHeadingHomePage.dataAosEasing}
          data-aos-once="false"
          className={whatMakesUsHeadingHomePage.headingClassName}
          variant="h4"
          component="h2"
          sx={{
            marginLeft: whatMakesUsHeadingHomePage.headingMarginLeft,
            marginTop: whatMakesUsHeadingHomePage.headingMarginTop,
            marginBottom: whatMakesUsHeadingHomePage.headingMarginBottom,
          }}
        >
          WHAT MAKES US DIFFERENT MAKES US BETTER
        </Typography>
      )}
    </>
  );
};

export default WhatMakesUsHeading;
