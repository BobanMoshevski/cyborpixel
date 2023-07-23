import { Container, Grid } from "@mui/material";
import { cardsDetail } from "../../../../util/data/DataDetails";
import ServicesCards from "../ourServicesCard/ServicesCards";

const OurServicesCards = () => {
  return (
    <Container>
      <Grid container spacing={7}>
        {cardsDetail.map((cardDetail, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            key={index}
            sx={{ marginBottom: "40px" }}
          >
            <ServicesCards
              dataAos={cardDetail.dataAos}
              dataAosOffset={cardDetail.dataAosOffset}
              dataAosEasing={cardDetail.dataAosEasing}
              cardImageSrc={cardDetail.cardImageSrc}
              cardName={cardDetail.cardName}
              cardWidth={cardDetail.cardWidth}
              cardHeight={cardDetail.cardHeight}
              cardImgMarginTop={cardDetail.cardImgMarginTop}
              cardHeadingMarginTop={cardDetail.cardHeadingMarginTop}
              cardHeadingMarginBottom={cardDetail.cardHeadingMarginBottom}
              cardBtnPath={cardDetail.cardBtnPath}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OurServicesCards;
