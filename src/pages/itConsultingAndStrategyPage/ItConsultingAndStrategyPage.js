import { useEffect } from "react";
import AOS from "aos";
import { Box } from "@mui/material";
import {
  itConsultingAndStrategyFigure,
  itConsultingAndStrategyHeading,
  itConsultingAndStrategyImage,
  itConsultingAndStrategyText,
} from "../../util/data/DataDetails";
import FigureComponent from "../../components/pagesContent/figureComponent/FigureComponent";
import HeadingComponent from "../../components/pagesContent/headingComponent/HeadingComponent";
import ImageComponent from "../../components/pagesContent/imageComponent/ImageComponen";
import TextComponent from "../../components/pagesContent/textComponent/TextComponent";
import "./ItConsultingAndStrategyPageStyle.css";

const ItConsultingAndStrategyPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <Box sx={{ overflow: "hidden", width: "100%", minHeight: "100vh" }}>
      <FigureComponent
        dataAos={itConsultingAndStrategyFigure.dataAos}
        dataAosOffset={itConsultingAndStrategyFigure.dataAosOffset}
        dataAosEasing={itConsultingAndStrategyFigure.dataAosEasing}
        figureImgClassName={itConsultingAndStrategyFigure.figureImgClassName}
        figureImgSrc={itConsultingAndStrategyFigure.figureImgSrc}
        figureImgAlt={itConsultingAndStrategyFigure.figureImgAlt}
        figureWidth={itConsultingAndStrategyFigure.figureWidth}
        figureHeight={itConsultingAndStrategyFigure.figureHeight}
        figureMarginLeft={itConsultingAndStrategyFigure.figureMarginLeft}
        figureMarginTop={itConsultingAndStrategyFigure.figureMarginTop}
      />

      <HeadingComponent
        dataAos={itConsultingAndStrategyHeading.dataAos}
        dataAosOffset={itConsultingAndStrategyHeading.dataAosOffset}
        dataAosEasing={itConsultingAndStrategyHeading.dataAosEasing}
        headingClassName={itConsultingAndStrategyHeading.headingClassName}
        heading={itConsultingAndStrategyHeading.heading}
        headingMarginLeft={itConsultingAndStrategyHeading.headingMarginLeft}
        headingMarginTop={itConsultingAndStrategyHeading.headingMarginTop}
      />

      <ImageComponent
        dataAos={itConsultingAndStrategyImage.dataAos}
        dataAosOffset={itConsultingAndStrategyImage.dataAosOffset}
        dataAosEasing={itConsultingAndStrategyImage.dataAosEasing}
        imageClassName={itConsultingAndStrategyImage.imageClassName}
        imageSrc={itConsultingAndStrategyImage.imageSrc}
        imageAlt={itConsultingAndStrategyImage.imageAlt}
        imageWidth={itConsultingAndStrategyImage.imageWidth}
        imageHeight={itConsultingAndStrategyImage.imageHeight}
        imageMarginLeft={itConsultingAndStrategyImage.imageMarginLeft}
        imageMarginTop={itConsultingAndStrategyImage.imageMarginTop}
      />

      <TextComponent
        dataAos={itConsultingAndStrategyText.dataAos}
        dataAosOffset={itConsultingAndStrategyText.dataAosOffset}
        dataAosEasing={itConsultingAndStrategyText.dataAosEasing}
        textClassName={itConsultingAndStrategyText.textClassName}
        textContent={itConsultingAndStrategyText.textContent}
        textMarginLeft={itConsultingAndStrategyText.textMarginLeft}
        textMarginTop={itConsultingAndStrategyText.textMarginTop}
      />
    </Box>
  );
};

export default ItConsultingAndStrategyPage;
