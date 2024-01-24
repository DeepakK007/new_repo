import { useRef } from "react";
import "./button.css";
import ColorConstant from "./ColorConstant";
import _isEqual from "lodash/isEqual";
export default function Button(props: object) {
  let { variant, size ,color, sx, name, disableElevated, href, children , ...rest } = props;
  //const [definedStyle,setStyle] = useState(ColorConstant(color,sx));
  // useEffect(()=>{
  //     const isPreviousSx = !_isEqual(previousSx.current,sx);
  //     if(isPreviousSx || previousColor.current != color ){
  //       setStyle(ColorConstant(color,sx));
  //     }
  //     previousSx.current = sx;
  //     previousColor.current = color;
  // },[color,sx]);
  if (href) {
    return (
      <a href={href}>
        <button
          className={""
            .concat(variant ? variant : "text")
            .concat(disableElevated ?" ":" elevated ").concat(size?size:" medium ").concat(color?color:" primary")}
          style={sx}
          onClick={()=>console.log("Clicked")}
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
        className={"".concat(variant ? variant : "text").concat(disableElevated != undefined ?" ":" elevated ").concat(size ?size:" medium ").concat(color?" "+color:" primary")}
        style={sx}
        {...rest}
      >
        {children?children:""}
      </button>
    </>
  );
}
