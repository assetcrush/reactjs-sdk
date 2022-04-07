import React from 'react';

export interface ImageCrushProps {
  animated?: boolean,
  reloadIconColor?: string,
  reloadIcon?: React.ReactNode,
  spinnerIcon?: React.ReactNode,
  spinnerColor?: string,
  hideSpinner?: boolean,
  onError?: function,
  onLoad?: function,
  url: string,
  width?: number,
  height?: number,
  acEnv?: string,
  alt?: string,
  className?: string,
  style?: React.CSSProperties
}

declare const ImageCrush: React.FC<ImageCrushProps>;

export interface ImageCrushAdoptiveProps extends ImageCrushProps {
  backgroundColor?: string,
  debounce?: number,
  wrapperStyle?: React.CSSProperties
}

declare const ImageCrushAdoptive: React.FC<ImageCrushAdoptiveProps>;

declare const setKey: (key: string) => void;

export {
  ImageCrush,
  ImageCrushAdoptive,
  setKey
};
