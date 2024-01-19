import { ReactElement, useState, useRef, useEffect } from "react";
import "./autoComp.css";
export default function ACComp(props:object): ReactElement {
  const Flist: string[] = [...props.list];
  const [list, setList] = useState([...Flist]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [arrowTurnBool, setArrow] = useState(false);
  const [hasfilled, setHasFilled] = useState(false);
  const inputRef = useRef(null);
  const disableInput = useState(props.hasOwnProperty("disabled"));
  console.log(disableInput);
  useEffect(()=>{
    if(!hasfilled){
      inputRef.current.value = "";
      setList(Flist);
    }
    if(!arrowTurnBool){
      document.getElementById("showfield").style.display = "none";
      setList(Flist);
    } else if(arrowTurnBool) {
      document.getElementById("showfield").style.display = "flex";
      inputRef.current.focus();
    }
  },[hasfilled,arrowTurnBool]);
  
  function selectionFilter(): void {
    let value: string = inputRef.current.value;
    value = value.toLowerCase();
    let currentShowList = Flist.filter(
      (text: string): string|boolean => text.toLowerCase().includes(value)
    );
    if(value != "" && hasfilled==false){
      setHasFilled(!hasfilled);
    }
    setList([...currentShowList]);
  }
  function keyPressEventFunc(e:object){
    let showfield = document.getElementById("showfield");
    if(e.key == "ArrowDown" || e.key == "ArrowUp"){
      if(e.key == "ArrowDown"){
        let index:number = selectedIndex == null?0:Math.min(selectedIndex+1,list.length);
        setSelectedIndex(function ():number {
          if(index<0){
            return list.length-1;
          }else if(index==list.length){
            showfield.scrollTop=0;
            return 0;
          }
          return index;
        });
        showfield.scrollTop = showfield.scrollTop + 15;
      }else{
        let index:number = selectedIndex == null?Flist.length:Math.max(selectedIndex-1,-1);
        setSelectedIndex(function ():number {
          if(index<0){
            showfield.scrollTop=showfield?.scrollHeight;
            return list.length-1;
          }else if(index==list.length){
            return 0;
          }
          return index;
        });
        showfield.scrollTop = showfield.scrollTop - 15;
      }
      return;
    }else if(e.key=="Enter" && selectedIndex != null){
      insertion(list[selectedIndex]);
      
      return;
    }else if(e.key == "Backspace" && inputRef.current.value != ""){
      inputRef.current.value.slice(0,-1);
    }
  }
  function mouseOverFunc(index:number):void{
    setSelectedIndex(index);
  }
  function insertion(text:string):void{
    inputRef.current.value = text;
    setHasFilled(true);
    inputRef.current.focus();
  }
  return (
    <div className={"ACComp".concat(disableInput[0]?" disabled":"")} >
      <input
        type="text"
        id="inputfield"
        ref={inputRef}
        onChange={selectionFilter}
        onKeyDown={keyPressEventFunc}
        tabIndex={1}
      />
      <div className="buttonbox">
      <span className={"canceltextbutton".concat(hasfilled?" active":"")} onClick={()=>setHasFilled(!hasfilled)}>╳</span>
      <button onClick = {()=>{console.log("Focus"); setArrow(()=>!arrowTurnBool)}} className={"arrowbutton".concat(arrowTurnBool?" selector":"")}>
      🔼
      </button>
      </div>
      <ul id="showfield">
        {list.map(
          (text: String, index:number): ReactElement => (
            <li onMouseOver={()=>mouseOverFunc(index)} onClick={()=>insertion(text)} key={index} className={selectedIndex==index?"selected":""}>{text}</li>
          )
        )}
      </ul>
    </div>
  );
}
