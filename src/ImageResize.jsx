import React from "react";

export const ImageResize = ({ url, width, height, key }) => {
  const imageUrl = `https://service.assetcrush.com?width=${width}&height=${height}&original_uri=${url}`;
  return <img src={imageUrl} alt={url} />;
};
