import { useState,useMemo, useEffect,useRef } from "react";
import "./button.css";
import ColorConstant from "./ColorConstant";
import _isEqual from "lodash/isEqual";
export default function Button(props: object) {
  const previousColor = useRef();
  const previousSx = useRef();
  let { variant, color, sx, name, disableElevated, href, ...rest } = props;
  const [definedStyle,setStyle] = useState(ColorConstant(color,sx));
  useEffect(()=>{
      const isPreviousSx = !_isEqual(previousSx.current,sx);
      if(isPreviousSx || previousColor.current != color ){
        setStyle(ColorConstant(color,sx));
      }
      previousSx.current = sx;
      previousColor.current = color;
  },[color,sx]);
  if (href) {
    console.log("HREF");
    return (
      <a href={href}>
        <button
          className={""
            .concat(variant ? variant : "text")
            .concat(elevated ? " elevated" : "")}
          style={{ ...definedStyle }}
          {...rest}
        >
          {name ? name : ""}
        </button>
      </a>
    );
  }
  return (
    <>
      <button
        className={""
          .concat(variant ? variant : "text")
          .concat(disableElevated ?"":" elevated")}
        style={{...definedStyle}}
        {...rest}
      >
        {name ? name : ""}
      </button>
    </>
  );
}
