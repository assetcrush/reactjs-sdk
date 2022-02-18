import React, { memo, useEffect, useState } from 'react';
import { getKey } from './key';

const baseServiceUrl = 'https://service.assetcrush.com'

const ImageResize = ({ url, width, height, ...props }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    if (!url) return;

    const _width = width || 'auto'
    const _height = height || 'auto'
    const imageUrl = `${baseServiceUrl}?width=${_width}&height=${_height}&original_uri=${encodeURIComponent(url)}`;
    const key = getKey();

    fetch(imageUrl, { headers: { 'assetcrush-key': key }})
      .then((r) => r.blob())
      .then((d) => {
        if (typeof window === undefined) return
        setImage(window.URL.createObjectURL(d));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, width, height]);

  if (!image) return null

  return <img src={image} alt={'resized'} {...props} />;
};

export default memo(ImageResize);
