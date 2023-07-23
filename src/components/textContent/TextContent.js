import { Typography } from "@mui/material";

const TextContent = ({ content, alignLeft, alignRight }) => {
  const isAlignLeft = alignLeft === "left" ? alignLeft : alignRight;

  return (
    <Typography
      variant="subtitle1"
      component="p"
      sx={{
        color: "#fff",
        textAlign: isAlignLeft,
      }}
    >
      {content}
    </Typography>
  );
};

export default TextContent;
