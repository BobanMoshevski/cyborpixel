import { useEffect } from "react";
import AOS from "aos";
import { Box } from "@mui/material";
import {
  networkSetupAndManagementFigure,
  networkSetupAndManagementHeading,
  networkSetupAndManagementImage,
  networkSetupAndManagementText,
} from "../../util/data/DataDetails";
import FigureComponent from "../../components/pagesContent/figureComponent/FigureComponent";
import HeadingComponent from "../../components/pagesContent/headingComponent/HeadingComponent";
import ImageComponent from "../../components/pagesContent/imageComponent/ImageComponen";
import TextComponent from "../../components/pagesContent/textComponent/TextComponent";
import "./NetworkSetupAndManagementPageStyle.css";

const NetworkSetupAndManagementPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        minHeight: "100vh",
        marginTop: "30px",
      }}
    >
      <FigureComponent
        dataAos={networkSetupAndManagementFigure.dataAos}
        dataAosOffset={networkSetupAndManagementFigure.dataAosOffset}
        dataAosEasing={networkSetupAndManagementFigure.dataAosEasing}
        figureImgClassName={networkSetupAndManagementFigure.figureImgClassName}
        figureImgSrc={networkSetupAndManagementFigure.figureImgSrc}
        figureImgAlt={networkSetupAndManagementFigure.figureImgAlt}
        figureWidth={networkSetupAndManagementFigure.figureWidth}
        figureHeight={networkSetupAndManagementFigure.figureHeight}
        figureMarginLeft={networkSetupAndManagementFigure.figureMarginLeft}
        figureMarginTop={networkSetupAndManagementFigure.figureMarginTop}
      />

      <HeadingComponent
        dataAos={networkSetupAndManagementHeading.dataAos}
        dataAosOffset={networkSetupAndManagementHeading.dataAosOffset}
        dataAosEasing={networkSetupAndManagementHeading.dataAosEasing}
        headingClassName={networkSetupAndManagementHeading.headingClassName}
        heading={networkSetupAndManagementHeading.heading}
        headingMarginLeft={networkSetupAndManagementHeading.headingMarginLeft}
        headingMarginTop={networkSetupAndManagementHeading.headingMarginTop}
      />

      <ImageComponent
        dataAos={networkSetupAndManagementImage.dataAos}
        dataAosOffset={networkSetupAndManagementImage.dataAosOffset}
        dataAosEasing={networkSetupAndManagementImage.dataAosEasing}
        imageClassName={networkSetupAndManagementImage.imageClassName}
        imageSrc={networkSetupAndManagementImage.imageSrc}
        imageAlt={networkSetupAndManagementImage.imageAlt}
        imageWidth={networkSetupAndManagementImage.imageWidth}
        imageHeight={networkSetupAndManagementImage.imageHeight}
        imageMarginLeft={networkSetupAndManagementImage.imageMarginLeft}
        imageMarginTop={networkSetupAndManagementImage.imageMarginTop}
      />

      <TextComponent
        dataAos={networkSetupAndManagementText.dataAos}
        dataAosOffset={networkSetupAndManagementText.dataAosOffset}
        dataAosEasing={networkSetupAndManagementText.dataAosEasing}
        textClassName={networkSetupAndManagementText.textClassName}
        textContent={networkSetupAndManagementText.textContent}
        textMarginLeft={networkSetupAndManagementText.textMarginLeft}
        textMarginTop={networkSetupAndManagementText.textMarginTop}
      />
    </Box>
  );
};

export default NetworkSetupAndManagementPage;
