import { useEffect } from "react";
import { Box } from "@mui/material";
import AOS from "aos";
import WhyChooseUsFigure from "../whyChooseUsFigure/WhyChooseUsFigure";
import WhyChooseUsHeading from "../whyChooseUsHeading/WhyChooseUsHeading";

const WhyChooseUs = () => {
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
        position: "absolute",
      }}
    >
      <WhyChooseUsFigure />

      <WhyChooseUsHeading />
    </Box>
  );
};

export default WhyChooseUs;
