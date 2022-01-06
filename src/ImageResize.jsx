import React, { useLayoutEffect, useRef, useState } from "react";

export const ImageResize = ({ url, width, height, key }) => {
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      });
    }
  }, []);

  const imageUrl = `https://service.assetcrush.com?width=${dimensions?.width}&height=${dimensions.height}&original_uri=${url}`;
  return (
    <div ref={targetRef}>
      <img ref={targetRef} src={imageUrl} alt={url} />
    </div>
  );
};
