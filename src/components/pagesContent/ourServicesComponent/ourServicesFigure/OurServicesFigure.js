import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import {
  ourServicesFigureHomePage,
  servicesFigurePage,
} from "../../../../util/data/DataDetails";
import "./OurServicesFigureStyle.css";

const OurServicesFigure = () => {
  const pathName = useLocation();

  const isOurServices = pathName.pathname === "/services";

  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        minHeight: "100%",
      }}
    >
      {isOurServices && (
        <img
          data-aos={servicesFigurePage.dataAos}
          data-aos-offset={servicesFigurePage.dataAosOffset}
          data-aos-easing={servicesFigurePage.dataAosEasing}
          data-aos-once="false"
          className={servicesFigurePage.figureImgClassName}
          style={{
            width: servicesFigurePage.figureImgWidth,
            height: servicesFigurePage.figureHeight,
            marginLeft: servicesFigurePage.figureImgMarginLeft,
            marginTop: servicesFigurePage.figureMarginTop,
          }}
          src={servicesFigurePage.figureImgSrc}
          alt={servicesFigurePage.figureImgAlt}
        />
      )}

      {!isOurServices && (
        <img
          data-aos={ourServicesFigureHomePage.dataAos}
          data-aos-offset={ourServicesFigureHomePage.dataAosOffset}
          data-aos-easing={ourServicesFigureHomePage.dataAosEasing}
          data-aos-once="false"
          className={ourServicesFigureHomePage.figureImgClassName}
          style={{
            width: ourServicesFigureHomePage.figureImgWidth,
            height: ourServicesFigureHomePage.figureHeight,
            marginLeft: ourServicesFigureHomePage.figureImgMarginLeft,
            marginTop: ourServicesFigureHomePage.figureMarginTop,
          }}
          src={ourServicesFigureHomePage.figureImgSrc}
          alt={ourServicesFigureHomePage.figureImgAlt}
        />
      )}
    </Box>
  );
};

export default OurServicesFigure;
