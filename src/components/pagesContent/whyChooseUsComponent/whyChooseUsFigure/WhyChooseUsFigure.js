import { useLocation } from "react-router-dom";
import {
  whyChooseUsFigureAboutUsPage,
  whyChooseUsFigureHomePage,
} from "../../../../util/data/DataDetails";

const WhyChooseUsFigure = () => {
  const pathName = useLocation();

  const isAboutUsPath = pathName.pathname === "/about-us";

  return (
    <>
      {isAboutUsPath && (
        <img
          data-aos={whyChooseUsFigureAboutUsPage.dataAos}
          data-aos-offset={whyChooseUsFigureAboutUsPage.dataAosOffset}
          data-aos-easing={whyChooseUsFigureAboutUsPage.dataAosEasing}
          data-aos-once="false"
          className={whyChooseUsFigureAboutUsPage.figureImgClassName}
          src={whyChooseUsFigureAboutUsPage.figureImgSrc}
          alt={whyChooseUsFigureAboutUsPage.figureImgAlt}
          style={{
            width: whyChooseUsFigureAboutUsPage.figureImgWidth,
            height: whyChooseUsFigureAboutUsPage.figureImgHeight,
            marginLeft: whyChooseUsFigureAboutUsPage.figureImgMarginLeft,
            marginTop: whyChooseUsFigureAboutUsPage.figureMarginTop,
          }}
        />
      )}

      {!isAboutUsPath && (
        <img
          data-aos={whyChooseUsFigureHomePage.dataAos}
          data-aos-offset={whyChooseUsFigureHomePage.dataAosOffset}
          data-aos-easing={whyChooseUsFigureHomePage.dataAosEasing}
          data-aos-once="false"
          className={whyChooseUsFigureHomePage.figureImgClassName}
          src={whyChooseUsFigureHomePage.figureImgSrc}
          alt={whyChooseUsFigureHomePage.figureImgAlt}
          style={{
            width: whyChooseUsFigureHomePage.figureImgWidth,
            height: whyChooseUsFigureHomePage.figureImgHeight,
            marginLeft: whyChooseUsFigureHomePage.figureImgMarginLeft,
            marginTop: whyChooseUsFigureHomePage.figureMarginTop,
          }}
        />
      )}
    </>
  );
};

export default WhyChooseUsFigure;
