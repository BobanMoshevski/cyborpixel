import { useEffect } from "react";
import AOS from "aos";
import { Box } from "@mui/material";
import {
  dataBackupAndRecoveryFigure,
  dataBackupAndRecoveryHeading,
  dataBackupAndRecoveryImage,
  dataBackupAndRecoveryText,
} from "../../util/data/DataDetails";
import FigureComponent from "../../components/pagesContent/figureComponent/FigureComponent";
import HeadingComponent from "../../components/pagesContent/headingComponent/HeadingComponent";
import ImageComponent from "../../components/pagesContent/imageComponent/ImageComponen";
import TextComponent from "../../components/pagesContent/textComponent/TextComponent";
import "./DataBackupAndRecoveryStyle.css";

const DataBackupAndRecoveryPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <Box sx={{ overflow: "hidden", width: "100%", minHeight: "100vh" }}>
      <FigureComponent
        dataAos={dataBackupAndRecoveryFigure.dataAos}
        dataAosOffset={dataBackupAndRecoveryFigure.dataAosOffset}
        dataAosEasing={dataBackupAndRecoveryFigure.dataAosEasing}
        figureImgClassName={dataBackupAndRecoveryFigure.figureImgClassName}
        figureImgSrc={dataBackupAndRecoveryFigure.figureImgSrc}
        figureImgAlt={dataBackupAndRecoveryFigure.figureImgAlt}
        figureWidth={dataBackupAndRecoveryFigure.figureWidth}
        figureHeight={dataBackupAndRecoveryFigure.figureHeight}
        figureMarginLeft={dataBackupAndRecoveryFigure.figureMarginLeft}
        figureMarginTop={dataBackupAndRecoveryFigure.figureMarginTop}
      />

      <HeadingComponent
        dataAos={dataBackupAndRecoveryHeading.dataAos}
        dataAosOffset={dataBackupAndRecoveryHeading.dataAosOffset}
        dataAosEasing={dataBackupAndRecoveryHeading.dataAosEasing}
        headingClassName={dataBackupAndRecoveryHeading.headingClassName}
        heading={dataBackupAndRecoveryHeading.heading}
        headingMarginLeft={dataBackupAndRecoveryHeading.headingMarginLeft}
        headingMarginTop={dataBackupAndRecoveryHeading.headingMarginTop}
      />

      <ImageComponent
        dataAos={dataBackupAndRecoveryImage.dataAos}
        dataAosOffset={dataBackupAndRecoveryImage.dataAosOffset}
        dataAosEasing={dataBackupAndRecoveryImage.dataAosEasing}
        imageClassName={dataBackupAndRecoveryImage.imageClassName}
        imageSrc={dataBackupAndRecoveryImage.imageSrc}
        imageAlt={dataBackupAndRecoveryImage.imageAlt}
        imageWidth={dataBackupAndRecoveryImage.imageWidth}
        imageHeight={dataBackupAndRecoveryImage.imageHeight}
        imageMarginLeft={dataBackupAndRecoveryImage.imageMarginLeft}
        imageMarginTop={dataBackupAndRecoveryImage.imageMarginTop}
      />

      <TextComponent
        dataAos={dataBackupAndRecoveryText.dataAos}
        dataAosOffset={dataBackupAndRecoveryText.dataAosOffset}
        dataAosEasing={dataBackupAndRecoveryText.dataAosEasing}
        textContent={dataBackupAndRecoveryText.textContent}
        textClassName={dataBackupAndRecoveryText.textClassName}
        textMarginLeft={dataBackupAndRecoveryText.textMarginLeft}
        textMarginTop={dataBackupAndRecoveryText.textMarginTop}
      />
    </Box>
  );
};

export default DataBackupAndRecoveryPage;
