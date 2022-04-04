import React, { memo, useEffect, useState } from "react";
import { ErrorRender } from "./ErrorRender/ErrorRender";
import { getKey } from "./key";
import { Spinner } from "./Spinner/Spinner";
import './styles.css'

const baseServiceUrl = "https://service.assetcrush.com";

const ImageCrush = ({ onError = () => null, onLoad = () => null, url, width, height, acEnv = 'production', ...props }) => {
  const [image, setImage] = useState("");
  const [isError, setIsError] = useState(false)

  const handleError = (e) => {
    onError(e);
    setIsError(true)
  }

  const handleRetry = () => {
    fetchImage()
  }

  const fetchImage = () => {

    setIsError(false)

    const _width = width || "auto";
    const _height = height || "auto";
    const imageUrl = `${baseServiceUrl}?width=${_width}&height=${_height}&original_uri=${encodeURIComponent(
      url
    )}`;
    const key = getKey();

    fetch(imageUrl, { headers: { "assetcrush-key": key, 'ac-env': acEnv } })
      .then((r) => {
        onLoad(r.headers)
        return r.blob()
      })
      .then((d) => {
        if (typeof window === undefined) return;
        if (!d.type.includes('image')) {
          handleError();
          return;
        }
        setImage(window.URL.createObjectURL(d));
      }).catch(handleError);
  }

  useEffect(() => {
    if (!url) return;
    fetchImage()
  }, [url, width, height]);

  if (isError) return <ErrorRender handleRetry={handleRetry} />
  if (!image) return <Spinner />

  return <img className={'fade-in-Image'} src={image} {...props} />;
};

export default memo(ImageCrush);
