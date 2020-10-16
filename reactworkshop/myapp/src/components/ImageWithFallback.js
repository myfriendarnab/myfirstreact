import React from "react";

function ImageWithFallback(prop) {
  let [imgSrc, updateImage] = React.useState(prop.source);

  return (
    <img
      src={imgSrc}
      className="img-thumbnail"
      height="200"
      width="200"
      alt='product'
      onError={() => updateImage("/default.png")}
    />
  );
}

export default ImageWithFallback;
