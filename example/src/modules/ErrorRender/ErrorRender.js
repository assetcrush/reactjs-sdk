import React, { useCallback, useEffect, useRef } from "react";
import "./styles.css";

export const ErrorRender = ({
  reloadIconColor = "gray",
  handleRetry = () => {},
  icon: Icon,
  height,
  width,
}) => {
  const handler = useRef();

  const _handleRetry = useCallback(() => {
    clearTimeout(handler.current);

    handler.current = setTimeout(handleRetry, 300);
  }, [handleRetry]);

  if (Icon) return <div onClick={_handleRetry}>{Icon}</div>;
  return (
    <span
      style={{
        color: reloadIconColor,
        fontSize:
          width < height
            ? height / 2 < 50
              ? height / 2
              : 50
            : width / 2 < 50
            ? width / 2
            : 50,
      }}
      onClick={_handleRetry}
      className="assetcrush-reload"
    >
      &#x21bb;
    </span>
  );
};
