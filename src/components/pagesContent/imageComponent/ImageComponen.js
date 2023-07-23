const ImageComponent = ({
  dataAos,
  dataAosOffset,
  dataAosEasing,
  imageClassName,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  imageMarginLeft,
  imageMarginTop,
}) => {
  return (
    <img
      data-aos={dataAos}
      data-aos-offset={dataAosOffset}
      data-aos-easing={dataAosEasing}
      data-aos-once="true"
      className={imageClassName}
      src={imageSrc}
      alt={imageAlt}
      style={{
        width: imageWidth,
        height: imageHeight,
        marginLeft: imageMarginLeft,
        marginTop: imageMarginTop,
      }}
    />
  );
};

export default ImageComponent;
