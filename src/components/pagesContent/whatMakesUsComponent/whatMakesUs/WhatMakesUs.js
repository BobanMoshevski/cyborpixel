import { useEffect } from "react";
import { Box } from "@mui/material";
import AOS from "aos";
import WhatMakesUsFigure from "../whatMakesUsFigure/WhatMakesUsFigure";
import WhatMakesUsHeading from "../whatMakesUsHeading/WhatMakesUsHeading";
import WhatMakesUsText from "../whatMakesUsText/WhatMakesUsText";

const WhatMakesUs = () => {
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
      <WhatMakesUsFigure />

      <WhatMakesUsHeading />

      <WhatMakesUsText />
    </Box>
  );
};

export default WhatMakesUs;
