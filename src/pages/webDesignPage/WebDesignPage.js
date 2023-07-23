import { useEffect } from "react";
import AOS from "aos";
import { Box } from "@mui/material";
import {
  webDesignFigure,
  webDesignHeading,
  webDesignImage,
  webDesignText,
} from "../../util/data/DataDetails";
import FigureComponent from "../../components/pagesContent/figureComponent/FigureComponent";
import HeadingComponent from "../../components/pagesContent/headingComponent/HeadingComponent";
import ImageComponent from "../../components/pagesContent/imageComponent/ImageComponen";
import TextComponent from "../../components/pagesContent/textComponent/TextComponent";
import "./WebDesignPageStyle.css";

const WebDesignPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <Box sx={{ overflow: "hidden", width: "100%", minHeight: "100vh" }}>
      <FigureComponent
        dataAos={webDesignFigure.dataAos}
        dataAosOffset={webDesignFigure.dataAosOffset}
        dataAosEasing={webDesignFigure.dataAosEasing}
        figureImgClassName={webDesignFigure.figureImgClassName}
        figureImgSrc={webDesignFigure.figureImgSrc}
        figureImgAlt={webDesignFigure.figureImgAlt}
        figureWidth={webDesignFigure.figureWidth}
        figureHeight={webDesignFigure.figureHeight}
        figureMarginLeft={webDesignFigure.figureMarginLeft}
        figureMarginTop={webDesignFigure.figureMarginTop}
      />

      <HeadingComponent
        dataAos={webDesignHeading.dataAos}
        dataAosOffset={webDesignHeading.dataAosOffset}
        dataAosEasing={webDesignHeading.dataAosEasing}
        headingClassName={webDesignHeading.headingClassName}
        heading={webDesignHeading.heading}
        headingMarginLeft={webDesignHeading.headingMarginLeft}
        headingMarginTop={webDesignHeading.headingMarginTop}
      />

      <ImageComponent
        dataAos={webDesignImage.dataAos}
        dataAosOffset={webDesignImage.dataAosOffset}
        dataAosEasing={webDesignImage.dataAosEasing}
        imageClassName={webDesignImage.imageClassName}
        imageSrc={webDesignImage.imageSrc}
        imageAlt={webDesignImage.imageAlt}
        imageWidth={webDesignImage.imageWidth}
        imageHeight={webDesignImage.imageHeight}
        imageMarginLeft={webDesignImage.imageMarginLeft}
        imageMarginTop={webDesignImage.imageMarginTop}
      />

      <TextComponent
        dataAos={webDesignText.dataAos}
        dataAosOffset={webDesignText.dataAosOffset}
        dataAosEasing={webDesignText.dataAosEasing}
        textClassName={webDesignText.textClassName}
        textContent={webDesignText.textContent}
        textMarginLeft={webDesignText.textMarginLeft}
        textMarginTop={webDesignText.textMarginTop}
      />
    </Box>
  );
};

export default WebDesignPage;
