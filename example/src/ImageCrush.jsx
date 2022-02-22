import React, { memo, useEffect, useState } from "react";
import { getKey } from "./key";

const baseServiceUrl = "https://service.assetcrush.com";

const ImageCrush = ({ url, width, height, ...props }) => {
  const [image, setImage] = useState("");
  const key = getKey();

  const imageUrl = `https://service.assetcrush.com?width=${
    width || "auto"
  }&height=${height || "auto"}&original_uri=${encodeURIComponent(url)}`;

  useEffect(() => {
    if (!url) return;

    const _width = width || "auto";
    const _height = height || "auto";
    const imageUrl = `${baseServiceUrl}?width=${_width}&height=${_height}&original_uri=${encodeURIComponent(
      url
    )}`;
    const key = getKey();

    fetch(imageUrl, { headers: { "assetcrush-key": key } })
      .then((r) => r.blob())
      .then((d) => {
        if (typeof window === undefined) return;
        setImage(window.URL.createObjectURL(d));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, width, height]);

  if (!image) return null;

  return <img src={image} alt={"resized"} {...props} />;
};

export default memo(ImageCrush);
