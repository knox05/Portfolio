import React, { useState } from "react";
import { getImage } from "../utils/imagekit";

const OptimizedImage = ({
  src,
  alt,
  width = 400,
  height,
  className = "",
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={getImage(src, { width, height })}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      className={className}
      style={{
        filter: loaded ? "blur(0)" : "blur(12px)",
        transition: "0.4s ease",
      }}
    />
  );
};

export default OptimizedImage;