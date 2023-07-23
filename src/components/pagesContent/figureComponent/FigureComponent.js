const FigureComponent = ({
  dataAos,
  dataAosOffset,
  dataAosEasing,
  figureImgClassName,
  figureImgSrc,
  figureImgAlt,
  figureWidth,
  figureHeight,
  figureMarginLeft,
  figureMarginTop,
}) => {
  return (
    <img
      data-aos={dataAos}
      data-aos-offset={dataAosOffset}
      data-aos-easing={dataAosEasing}
      data-aos-once="false"
      className={figureImgClassName}
      src={figureImgSrc}
      alt={figureImgAlt}
      style={{
        width: figureWidth,
        height: figureHeight,
        marginLeft: figureMarginLeft,
        marginTop: figureMarginTop,
      }}
    />
  );
};

export default FigureComponent;
