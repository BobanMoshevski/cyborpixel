import { useEffect } from "react";
import AOS from "aos";
import { Box } from "@mui/material";
import {
  graphicDesignFigure,
  graphicDesignHeading,
  graphicDesignImage,
  graphicDesignText,
} from "../../util/data/DataDetails";
import FigureComponent from "../../components/pagesContent/figureComponent/FigureComponent";
import HeadingComponent from "../../components/pagesContent/headingComponent/HeadingComponent";
import ImageComponent from "../../components/pagesContent/imageComponent/ImageComponen";
import TextComponent from "../../components/pagesContent/textComponent/TextComponent";
import "./GraphicDesignPageStyle.css";

const GraphicDesignPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <Box sx={{ overflow: "hidden", width: "100%", minHeight: "100vh" }}>
      <FigureComponent
        dataAos={graphicDesignFigure.dataAos}
        dataAosOffset={graphicDesignFigure.dataAosOffset}
        dataAosEasing={graphicDesignFigure.dataAosEasing}
        figureImgClassName={graphicDesignFigure.figureImgClassName}
        figureImgSrc={graphicDesignFigure.figureImgSrc}
        figureImgAlt={graphicDesignFigure.figureImgAlt}
        figureWidth={graphicDesignFigure.figureWidth}
        figureHeight={graphicDesignFigure.figureHeight}
        figureMarginLeft={graphicDesignFigure.figureMarginLeft}
        figureMarginTop={graphicDesignFigure.figureMarginTop}
      />

      <HeadingComponent
        dataAos={graphicDesignHeading.dataAos}
        dataAosOffset={graphicDesignHeading.dataAosOffset}
        dataAosEasing={graphicDesignHeading.dataAosEasing}
        headingClassName={graphicDesignHeading.headingClassName}
        heading={graphicDesignHeading.heading}
        headingMarginLeft={graphicDesignHeading.headingMarginLeft}
        headingMarginTop={graphicDesignHeading.headingMarginTop}
      />

      <ImageComponent
        dataAos={graphicDesignImage.dataAos}
        dataAosOffset={graphicDesignImage.dataAosOffset}
        dataAosEasing={graphicDesignImage.dataAosEasing}
        imageClassName={graphicDesignImage.imageClassName}
        imageSrc={graphicDesignImage.imageSrc}
        imageAlt={graphicDesignImage.imageAlt}
        imageWidth={graphicDesignImage.imageWidth}
        imageHeight={graphicDesignImage.imageHeight}
        imageMarginLeft={graphicDesignImage.imageMarginLeft}
        imageMarginTop={graphicDesignImage.imageMarginTop}
      />

      <TextComponent
        dataAos={graphicDesignText.dataAos}
        dataAosOffset={graphicDesignText.dataAosOffset}
        dataAosEasing={graphicDesignText.dataAosEasing}
        textClassName={graphicDesignText.textClassName}
        textContent={graphicDesignText.textContent}
        textMarginLeft={graphicDesignText.textMarginLeft}
        textMarginTop={graphicDesignText.textMarginTop}
      />
    </Box>
  );
};

export default GraphicDesignPage;
