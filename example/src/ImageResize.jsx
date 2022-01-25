import React, { memo, useEffect, useState } from "react";
import { getKey } from "./key";

const ImageResize = ({ url, width, height, ...props }) => {
  const [image, setImage] = useState("");
  const key = getKey();

  const imageUrl = `https://service.assetcrush.com?width=${
    width || "auto"
  }&height=${height || "auto"}&original_uri=${url}`;

  useEffect(() => {
    if (!url) return;

    fetch(imageUrl, { headers: { assetcrush_key: key } })
      .then((r) => r.blob())
      .then((d) => {
        setImage(window.URL.createObjectURL(d));
      });
  }, []);

  return <img src={image} {...props} />;
};

export default memo(ImageResize);
