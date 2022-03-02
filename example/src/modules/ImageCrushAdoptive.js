import React, {
  memo,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import ImageCrush from "./ImageCrush";

const ImageCrushAdoptive = ({ url }) => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const ref = useRef();

  useLayoutEffect(() => {
    const _width = ref?.current?.clientWidth;
    const _height = ref?.current?.clientHeight;

    setWidth(_width);
    setHeight(_height);
  }, []);

  return (
    <div style={{ height: "inherit", width: "inherit" }} ref={ref}>
      {width && height && (
        <ImageCrush url={url} width={width} height={height} />
      )}
    </div>
  );
};

export default memo(ImageCrushAdoptive);
