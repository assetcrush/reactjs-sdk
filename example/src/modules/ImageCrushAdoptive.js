import React, {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import ImageCrush from "./ImageCrush";

const styles = {
 wrapperStyle: { height: "inherit", width: "inherit", background: '#f9f9f9', display:'flex', alignItems:'center', justifyContent: 'center' }
}

const ImageCrushAdoptive = ({ url, debounce = 100, wrapperStyle = styles.wrapperStyle, ...restProps }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const ref = useRef();

  const onLayout = useCallback(() => {
    const _width = ref?.current?.clientWidth;
    const _height = ref?.current?.clientHeight;

    if (_width > width || _height > height) {
      setWidth(_width);
      setHeight(_height);
    }
  }, [setWidth,setHeight])

  useLayoutEffect(() => {
   const handler = setTimeout(onLayout, debounce);

   return () => clearTimeout(handler);
  }, []);


  return (
    <div style={wrapperStyle} ref={ref}>
      {!!width && !!height && (
        <ImageCrush url={url} width={width} height={height} {...restProps} />
      )}
    </div>
  );
};

export default memo(ImageCrushAdoptive);
