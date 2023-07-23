import { Box } from "@mui/material";
import { desktopTopFigures } from "../../../../../util/data/DataDetails";
import "./DesktopTopFigures.css";

const DesktopTopFigures = () => {
  return (
    <Box className="figures-animate" sx={{ height: "110vh" }}>
      {desktopTopFigures.map((figure, index) => (
        <img
          key={index}
          className={figure.imageClassName}
          src={figure.imageSrc}
          alt={figure.imageAlt}
        />
      ))}
    </Box>
  );
};

export default DesktopTopFigures;
