import React, { memo, useCallback, useEffect, useState } from "react";
import { ErrorRender } from "./ErrorRender/ErrorRender";
import { getKey } from "./key";
import { Spinner } from "./Spinner/Spinner";
import "./styles.css";

const baseServiceUrl = "https://service.assetcrush.com";

const ImageCrush = ({
  animated = true,
  reloadIconColor,
  reloadIcon,
  spinnerIcon,
  spinnerColor = "#fff",
  isSpinner = true,
  onError = () => null,
  onLoad = () => null,
  url,
  width,
  height,
  acEnv = "production",
  ...props
}) => {
  const [image, setImage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleError = useCallback(
    (e) => {
      onError(e);
      setIsError(true);
    },
    [setIsError]
  );

  const handleRetry = useCallback(() => {
    fetchImage();
  }, [setIsError]);

  const fetchImage = useCallback(() => {
    setIsError(false);

    const _width = width || "auto";
    const _height = height || "auto";
    const imageUrl = `${baseServiceUrl}?width=${_width}&height=${_height}&original_uri=${encodeURIComponent(
      url
    )}`;
    const key = getKey();
    let headers = {};

    fetch(imageUrl, { headers: { "assetcrush-key": key, "ac-env": acEnv } })
      .then((r) => {
        headers = r.headers;
        return r.blob();
      })
      .then((d) => {
        if (typeof window === undefined) return;
        if (!d.type.includes("image")) {
          throw new Error("Object is not a valid image");
        }
        setImage(window.URL.createObjectURL(d));
        return Promise.resolve();
      })
      .then(() => onLoad(headers))
      .catch(handleError);
  }, [setIsError]);

  useEffect(() => {
    if (!url) return;
    fetchImage();
  }, [url, width, height]);

  if (isError)
    return (
      <ErrorRender
        width={width}
        height={height}
        reloadIconColor={reloadIconColor}
        icon={reloadIcon}
        handleRetry={handleRetry}
      />
    );
  if (!image)
    return (
      <>{isSpinner && <Spinner icon={spinnerIcon} color={spinnerColor} />}</>
    );

  return <img className={animated && "assetcrush-fade-in-Image"} src={image} {...props} />;
};

export default memo(ImageCrush);
