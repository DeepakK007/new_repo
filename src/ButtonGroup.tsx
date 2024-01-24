import './button.css';
import _cloneDeep from "lodash/cloneDeep";


export default function ButtonGroup(props: object) {
    const {variant, color ,children, size ,orientation ,...rest} = props;
    
  return (
    <div className={"button-group".concat(orientation==="vertical"?" column":" row")} style={{}} {...rest}>
         {children.map((child, index)=>{
          // deepcopying object because  child is prop which does not let us assign value.
          const childVariant = child.props?.variant;
          const childColor = child.props?.color;
          const childSize = child.props?.size;
          let childMod = _cloneDeep(child);
          if(variant && !childVariant){
            childMod.props.variant=variant;
          }
          if(color && !childColor){
            childMod.props.color=color;  
          }
          if(size && !childSize){
            childMod.props.size=size;
          }
          return (
            childMod
          );
         })}
    </div>
  )
}
