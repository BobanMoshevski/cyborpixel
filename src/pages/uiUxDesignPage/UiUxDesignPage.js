import { useEffect } from "react";
import AOS from "aos";
import { Box } from "@mui/material";
import {
  uiUxDesignFigure,
  uiUxDesignHeading,
  uiUxDesignImage,
  uiUxDesignText,
} from "../../util/data/DataDetails";
import FigureComponent from "../../components/pagesContent/figureComponent/FigureComponent";
import HeadingComponent from "../../components/pagesContent/headingComponent/HeadingComponent";
import ImageComponent from "../../components/pagesContent/imageComponent/ImageComponen";
import TextComponent from "../../components/pagesContent/textComponent/TextComponent";
import "./UiUxDesignPageStyle.css";

const UiUxDesignPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <Box sx={{ overflow: "hidden", width: "100%", minHeight: "100vh" }}>
      <FigureComponent
        dataAos={uiUxDesignFigure.dataAos}
        dataAosOffset={uiUxDesignFigure.dataAosOffset}
        dataAosEasing={uiUxDesignFigure.dataAosEasing}
        figureImgClassName={uiUxDesignFigure.figureImgClassName}
        figureImgSrc={uiUxDesignFigure.figureImgSrc}
        figureImgAlt={uiUxDesignFigure.figureImgAlt}
        figureWidth={uiUxDesignFigure.figureWidth}
        figureHeight={uiUxDesignFigure.figureHeight}
        figureMarginLeft={uiUxDesignFigure.figureMarginLeft}
        figureMarginTop={uiUxDesignFigure.figureMarginTop}
      />

      <HeadingComponent
        dataAos={uiUxDesignHeading.dataAos}
        dataAosOffset={uiUxDesignHeading.dataAosOffset}
        dataAosEasing={uiUxDesignHeading.dataAosEasing}
        headingClassName={uiUxDesignHeading.headingClassName}
        heading={uiUxDesignHeading.heading}
        headingMarginLeft={uiUxDesignHeading.headingMarginLeft}
        headingMarginTop={uiUxDesignHeading.headingMarginTop}
      />

      <ImageComponent
        dataAos={uiUxDesignImage.dataAos}
        dataAosOffset={uiUxDesignImage.dataAosOffset}
        dataAosEasing={uiUxDesignImage.dataAosEasing}
        imageClassName={uiUxDesignImage.imageClassName}
        imageSrc={uiUxDesignImage.imageSrc}
        imageAlt={uiUxDesignImage.imageAlt}
        imageWidth={uiUxDesignImage.imageWidth}
        imageHeight={uiUxDesignImage.imageHeight}
        imageMarginLeft={uiUxDesignImage.imageMarginLeft}
        imageMarginTop={uiUxDesignImage.imageMarginTop}
      />

      <TextComponent
        dataAos={uiUxDesignText.dataAos}
        dataAosOffset={uiUxDesignText.dataAosOffset}
        dataAosEasing={uiUxDesignText.dataAosEasing}
        textClassName={uiUxDesignText.textClassName}
        textContent={uiUxDesignText.textContent}
        textMarginLeft={uiUxDesignText.textMarginLeft}
        textMarginTop={uiUxDesignText.textMarginTop}
      />
    </Box>
  );
};

export default UiUxDesignPage;
