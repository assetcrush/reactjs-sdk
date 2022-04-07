import React, {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import ImageCrush from "./ImageCrush";

const styles = (backgroundColor) =>  ({
  wrapperStyle: {
    background: backgroundColor,
    width: '100%',
    height: '100%',
    display:'flex',
    alignItems:'center',
    justifyContent: 'center'
  }
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
  }, [setWidth,setHeight, setCurrentHeight, width, height])

  useLayoutEffect(() => {
   const handler = setTimeout(onLayout, debounce);

   return () => clearTimeout(handler);
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div style={_wrapperStyle} ref={ref}>
      {!!width && !!height && (
        <ImageCrush url={url} width={width} height={currentHeight} {...restProps} />
      )}
    </div>
  );
};

export default React.memo(ImageCrushAdoptive);
