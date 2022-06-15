import React, { useCallback, useEffect, useState } from "react";
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
  hideSpinner = false,
  onError = () => null,
  onLoad = () => null,
  url,
  width,
  height,
  acEnv = "production",
  alt = '',
  headers = {},
  ...props
}) => {
  const [image, setImage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleError = useCallback(
    (e) => {
      onError(e);
      setIsError(true);
    },
    [onError, setIsError]
  );

  const fetchImage = useCallback(() => {
    setIsError(false);

    const _width = width || "auto";
    const _height = height || "auto";
    const imageUrl = `${baseServiceUrl}?width=${_width}&height=${_height}&original_uri=${encodeURIComponent(
      url
    )}`;
    const key = getKey() ? getKey() : process.env.NODE_ENV === "development" ? 'test-key' : '';
    let headers = {};

    if (process.env.NODE_ENV !== "development" && key === '') {
      console.log(' Key is not present, please go to console.assetcrush.com and sign up to get one.')
    }

    fetch(imageUrl, { headers: { "assetcrush-key": key, "ac-env": acEnv, ...headers } })
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
  }, [acEnv, handleError, height, onLoad, url, width, setIsError, setImage]);

  
  const handleRetry = useCallback(() => {
    fetchImage();
  }, [fetchImage]);

  useEffect(() => {
    if (!url) return;
    fetchImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, width, height]);

  if (isError) {
    return (
      <ErrorRender
        width={width}
        height={height}
        reloadIconColor={reloadIconColor}
        icon={reloadIcon}
        handleRetry={handleRetry}
      />
    );
  }

  if (!image) {
    return (
      <>{!hideSpinner && <Spinner  width={width}
      height={height} icon={spinnerIcon} color={spinnerColor} />}</>
    );
  }

  return (
    <img
      className={animated && "assetcrush-fade-in-Image"}
      src={image}
      alt={alt}
      {...props}
    />
  );
};

export default React.memo(ImageCrush);
