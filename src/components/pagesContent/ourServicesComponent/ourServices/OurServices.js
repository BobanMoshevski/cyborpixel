import { Box } from "@mui/material";
import OurServicesFigure from "../ourServicesFigure/OurServicesFigure";
import OurServicesHeading from "../ourServicesHeading/OurServicesHeading";
import OurServicesCards from "../ourServicesCards/OurServicesCards";

const OurServices = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        minHeight: "100vh",
        position: "absolute",
      }}
    >
      <OurServicesFigure />

      <OurServicesHeading />

      <OurServicesCards />
    </Box>
  );
};

export default OurServices;
