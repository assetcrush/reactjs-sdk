import React, {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import ImageCrush from "./ImageCrush";

const styles = (backgroundColor) =>  ({
 wrapperStyle: { height: "inherit", width: "inherit", background: backgroundColor, display:'flex', alignItems:'center', justifyContent: 'center' }
})

const ImageCrushAdoptive = ({  backgroundColor = '#f9f9f9', url, debounce = 100, wrapperStyle, ...restProps }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(0)
  const ref = useRef();
  const _wrapperStyle = wrapperStyle ||  styles(backgroundColor).wrapperStyle;
  

  const onLayout = useCallback(() => {
    const _width = ref?.current?.clientWidth;
    const _height = ref?.current?.clientHeight;
    setCurrentHeight(_height)
    if (_width > width || _height > height) {
      setWidth(_width);
      setHeight(_height);
    }
  }, [setWidth,setHeight, setCurrentHeight])

  useLayoutEffect(() => {
   const handler = setTimeout(onLayout, debounce);

   return () => clearTimeout(handler);
  }, []);


  return (
    <div style={_wrapperStyle} ref={ref}>
      {!!width && !!height && (
        <ImageCrush url={url} width={width} height={currentHeight} {...restProps} />
      )}
    </div>
  );
};

export default memo(ImageCrushAdoptive);
