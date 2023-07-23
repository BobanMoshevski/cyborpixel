import { Typography } from "@mui/material";

const HeadingComponent = ({
  dataAos,
  dataAosOffset,
  dataAosEasing,
  headingClassName,
  heading,
  headingMarginLeft,
  headingMarginTop,
}) => {
  return (
    <Typography
      data-aos={dataAos}
      data-aos-offset={dataAosOffset}
      data-aos-easing={dataAosEasing}
      data-aos-once="false"
      variant="h4"
      component="h2"
      className={headingClassName}
      sx={{
        marginLeft: headingMarginLeft,
        marginTop: headingMarginTop,
      }}
    >
      {heading}
    </Typography>
  );
};

export default HeadingComponent;
