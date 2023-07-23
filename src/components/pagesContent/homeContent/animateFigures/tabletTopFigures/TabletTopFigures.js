import { Box } from "@mui/material";
import { tabletTopFigures } from "../../../../../util/data/DataDetails";
import "./TabletTopFigures.css";

const TabletTopFigures = () => {
  return (
    <Box className="figures-animate" sx={{ height: "110vh" }}>
      {tabletTopFigures.map((figure, index) => (
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

export default TabletTopFigures;
