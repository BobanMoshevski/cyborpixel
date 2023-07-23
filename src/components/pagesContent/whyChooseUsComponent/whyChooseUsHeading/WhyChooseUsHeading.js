import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import {
  whyChooseUsHeadingAboutUsPage,
  whyChooseUsHeadingHomePage,
} from "../../../../util/data/DataDetails";

const WhyChooseUsHeading = () => {
  const pathName = useLocation();

  const isAboutUs = pathName.pathname === "/about-us";

  return (
    <>
      {isAboutUs && (
        <Typography
          data-aos={whyChooseUsHeadingAboutUsPage.dataAos}
          data-aos-offset={whyChooseUsHeadingAboutUsPage.dataAosOffset}
          data-aos-easing={whyChooseUsHeadingAboutUsPage.dataAosEasing}
          data-aos-once="false"
          className={whyChooseUsHeadingAboutUsPage.headingClassName}
          variant="h4"
          component="h2"
          sx={{
            marginLeft: whyChooseUsHeadingAboutUsPage.headingMarginLeft,
            marginTop: whyChooseUsHeadingAboutUsPage.headingMarginTop,
            marginBottom: whyChooseUsHeadingAboutUsPage?.headingMarginBottom,
          }}
        >
          WHY CHOOSE US?
        </Typography>
      )}

      {!isAboutUs && (
        <Typography
          data-aos={whyChooseUsHeadingHomePage.dataAos}
          data-aos-offset={whyChooseUsHeadingHomePage.dataAosOffset}
          data-aos-easing={whyChooseUsHeadingHomePage.dataAosEasing}
          data-aos-once="false"
          className={whyChooseUsHeadingHomePage.headingClassName}
          variant="h4"
          component="h2"
          sx={{
            marginLeft: whyChooseUsHeadingHomePage.headingMarginLeft,
            marginTop: whyChooseUsHeadingHomePage.headingMarginTop,
            marginBottom: whyChooseUsHeadingHomePage.headingMarginBottom,
          }}
        >
          WHY CHOOSE US?
        </Typography>
      )}
    </>
  );
};

export default WhyChooseUsHeading;
