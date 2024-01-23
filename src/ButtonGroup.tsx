
export default function ButtonGroup(props: object) {
    const {variant, children, ...rest} = props;
    
    console.log(children);
  return (
    <div style={{borderRadius:"5px"}}>
         {children}
    </div>
  )
}
