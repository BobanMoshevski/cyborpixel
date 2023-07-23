import { useEffect } from "react";
import { Box } from "@mui/material";
import AOS from "aos";
import {
  helpDeskAndTechnicalSupportFigure,
  helpDeskAndTechnicalSupportHeading,
  helpDeskAndTechnicalSupportImage,
  helpDeskAndTechnicalSupportText,
} from "../../util/data/DataDetails";
import FigureComponent from "../../components/pagesContent/figureComponent/FigureComponent";
import HeadingComponent from "../../components/pagesContent/headingComponent/HeadingComponent";
import ImageComponent from "../../components/pagesContent/imageComponent/ImageComponen";
import TextComponent from "../../components/pagesContent/textComponent/TextComponent";
import "./HelpDeskAndTechnicalSupportStyle.css";

const HelpDeskAndTechnicalSupportPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <Box sx={{ overflow: "hidden", width: "100%", minHeight: "100vh" }}>
      <FigureComponent
        dataAos={helpDeskAndTechnicalSupportFigure.dataAos}
        dataAosOffset={helpDeskAndTechnicalSupportFigure.dataAosOffset}
        dataAosEasing={helpDeskAndTechnicalSupportFigure.dataAosEasing}
        figureImgClassName={
          helpDeskAndTechnicalSupportFigure.figureImgClassName
        }
        figureImgSrc={helpDeskAndTechnicalSupportFigure.figureImgSrc}
        figureImgAlt={helpDeskAndTechnicalSupportFigure.figureImgAlt}
        figureWidth={helpDeskAndTechnicalSupportFigure.figureWidth}
        figureHeight={helpDeskAndTechnicalSupportFigure.figureHeight}
        figureMarginLeft={helpDeskAndTechnicalSupportFigure.figureMarginLeft}
        figureMarginTop={helpDeskAndTechnicalSupportFigure.figureMarginTop}
      />

      <HeadingComponent
        dataAos={helpDeskAndTechnicalSupportHeading.dataAos}
        dataAosOffset={helpDeskAndTechnicalSupportHeading.dataAosOffset}
        dataAosEasing={helpDeskAndTechnicalSupportHeading.dataAosEasing}
        headingClassName={helpDeskAndTechnicalSupportHeading.headingClassName}
        heading={helpDeskAndTechnicalSupportHeading.heading}
        headingMarginTop={helpDeskAndTechnicalSupportHeading.headingMarginTop}
        headingMarginLeft={helpDeskAndTechnicalSupportHeading.headingMarginLeft}
      />

      <ImageComponent
        dataAos={helpDeskAndTechnicalSupportImage.dataAos}
        dataAosOffset={helpDeskAndTechnicalSupportImage.dataAosOffset}
        dataAosEasing={helpDeskAndTechnicalSupportImage.dataAosEasing}
        imageClassName={helpDeskAndTechnicalSupportImage.imageClassName}
        imageSrc={helpDeskAndTechnicalSupportImage.imageSrc}
        imageAlt={helpDeskAndTechnicalSupportImage.imageAlt}
        imageWidth={helpDeskAndTechnicalSupportImage.imageWidth}
        imageHeight={helpDeskAndTechnicalSupportImage.imageHeight}
        imageMarginLeft={helpDeskAndTechnicalSupportImage.imageMarginLeft}
        imageMarginTop={helpDeskAndTechnicalSupportImage.imageMarginTop}
      />

      <TextComponent
        dataAos={helpDeskAndTechnicalSupportText.dataAos}
        dataAosOffset={helpDeskAndTechnicalSupportText.dataAosOffset}
        dataAosEasing={helpDeskAndTechnicalSupportText.dataAosEasing}
        textContent={helpDeskAndTechnicalSupportText.textContent}
        textClassName={helpDeskAndTechnicalSupportText.textClassName}
        textMarginLeft={helpDeskAndTechnicalSupportText.textMarginLeft}
        textMarginTop={helpDeskAndTechnicalSupportText.textMarginTop}
      />
    </Box>
  );
};

export default HelpDeskAndTechnicalSupportPage;
