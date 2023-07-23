import { Box } from "@mui/material";
import TextContent from "../../textContent/TextContent";

const TextComponent = ({
  dataAos,
  dataAosOffset,
  dataAosEasing,
  textClassName,
  textContent,
  textMarginLeft,
  textMarginTop,
}) => {
  return (
    <Box
      data-aos={dataAos}
      data-aos-offset={dataAosOffset}
      data-aos-easing={dataAosEasing}
      data-aos-once="true"
      className={textClassName}
      sx={{
        width: "30%",
        marginTop: textMarginTop,
        marginLeft: textMarginLeft,
      }}
    >
      <TextContent content={textContent} />
    </Box>
  );
};

export default TextComponent;
