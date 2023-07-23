import { Box, Grid, Typography } from "@mui/material";
import { whatMakesUsText } from "../../../../util/data/DataDetails";
import TextContent from "../../../textContent/TextContent";

const WhatMakesUsText = () => {
  return (
    <Box sx={{ marginTop: "-270px", position: "relative", zIndex: "1" }}>
      <Grid container spacing={3}>
        <Grid item xs={1} sm={2} />

        <Grid
          item
          xs={10}
          sm={8}
          md={4}
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-once="false"
        >
          <TextContent content={whatMakesUsText.leftText} alignLeft={"left"} />
        </Grid>

        <Grid item xs={1} sm={2} sx={{ display: { sm: "flex", md: "none" } }} />

        <Grid item xs={1} sm={2} md={1} />

        <Grid
          item
          xs={10}
          sm={8}
          md={4}
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-once="false"
        >
          <TextContent
            content={whatMakesUsText.rightText}
            alignRight={"right"}
          />
        </Grid>

        <Grid item xs={1} sm={2} md={1} />

        <Grid item xs={2} />

        <Grid item xs={8}>
          <Typography
            variant="h5"
            component="p"
            sx={{
              color: "#fff",
              marginTop: "80px",
            }}
            data-aos="fade-right"
            data-aos-offset="80"
            data-aos-easing="ease-in-sine"
            data-aos-once="false"
            className="text-font-style"
          >
            Discover the power of what makes us different. Experience the
            difference it can make for your business.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhatMakesUsText;
