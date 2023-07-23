import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import { Box, Button, Card, Typography } from "@mui/material";

const ServicesCards = ({
  dataAos,
  dataAosOffset,
  dataAosEasing,
  cardImageSrc,
  cardName,
  cardWidth,
  cardHeight,
  cardImgMarginTop,
  cardHeadingMarginTop,
  cardHeadingMarginBottom,
  cardBtnPath,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <Box
      data-aos={dataAos}
      data-aos-offset={dataAosOffset}
      data-aos-easing={dataAosEasing}
      data-aos-once="false"
      sx={{
        padding: "0",
        width: "100%",
        height: "100%",
        border: "1px solid white",
        borderRadius: "0 35% 0 0",
      }}
    >
      <Card
        sx={{
          background: "none",
          padding: "10px 40px",
          width: "100%",
          height: "100%",
          marginLeft: "7px",
          marginTop: "7px",
          border: "1px solid white",
          borderRadius: "0 30% 0 0",
          overflow: "visible",
        }}
      >
        <img
          src={cardImageSrc}
          alt={cardName}
          style={{
            width: cardWidth,
            height: cardHeight,
            marginTop: cardImgMarginTop,
          }}
        />

        <Typography
          variant="h6"
          component="h4"
          className="font-color"
          sx={{
            fontWeight: "bold",
            marginTop: cardHeadingMarginTop,
            marginBottom: cardHeadingMarginBottom,
          }}
        >
          {cardName}
        </Typography>

        <Button variant="text" sx={{ marginLeft: "-8px" }}>
          <NavLink
            to={cardBtnPath}
            style={{
              textDecoration: "none",
              color: "#37bcb6",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Read Details
          </NavLink>
        </Button>
      </Card>
    </Box>
  );
};

export default ServicesCards;
