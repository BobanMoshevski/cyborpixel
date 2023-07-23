import { useLocation } from "react-router-dom";
import {
  whatMakesUsFigureAboutUsPage,
  whatMakesUsFigureHomePage,
} from "../../../../util/data/DataDetails";
import "./WhatMakesUsFigureStyle.css";

const WhatMakesUsFigure = () => {
  const pathName = useLocation();

  const isAboutUsPath = pathName.pathname === "/about-us";

  return (
    <>
      {isAboutUsPath && (
        <img
          data-aos={whatMakesUsFigureAboutUsPage.dataAos}
          data-aos-offset={whatMakesUsFigureAboutUsPage.dataAosOffset}
          data-aos-easing={whatMakesUsFigureAboutUsPage.dataAosEasing}
          data-aos-once="false"
          className={whatMakesUsFigureAboutUsPage.figureImgClassName}
          src={whatMakesUsFigureAboutUsPage.figureImgSrc}
          alt={whatMakesUsFigureAboutUsPage.figureImgAlt}
          style={{
            width: whatMakesUsFigureAboutUsPage.figureImgWidth,
            height: whatMakesUsFigureAboutUsPage.figureImgHeight,
            marginLeft: whatMakesUsFigureAboutUsPage.figureImgMarginLeft,
            marginTop: whatMakesUsFigureAboutUsPage.figureMarginTop,
          }}
        />
      )}

      {!isAboutUsPath && (
        <img
          data-aos={whatMakesUsFigureHomePage.dataAos}
          data-aos-offset={whatMakesUsFigureHomePage.dataAosOffset}
          data-aos-easing={whatMakesUsFigureHomePage.dataAosEasing}
          data-aos-once="false"
          className={whatMakesUsFigureHomePage.figureImgClassName}
          src={whatMakesUsFigureHomePage.figureImgSrc}
          alt={whatMakesUsFigureHomePage.figureImgAlt}
          style={{
            width: whatMakesUsFigureHomePage.figureImgWidth,
            height: whatMakesUsFigureHomePage.figureImgHeight,
            marginLeft: whatMakesUsFigureHomePage.figureImgMarginLeft,
            marginTop: whatMakesUsFigureHomePage.figureMarginTop,
          }}
        />
      )}
    </>
  );
};

export default WhatMakesUsFigure;
