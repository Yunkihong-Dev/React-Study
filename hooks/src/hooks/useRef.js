import {useState,useRef} from "react";



function UseRef(){
    const count = useRef(0);
    const htmlRef = useRef(null);




    const [forceReRender,setForceReRender] = useState(true);

    const onChangeUseRef = () =>{
        htmlRef.current.style.color = 'red';
        count.current +=1;
    }
    
    const onForceReRender = () => {
        setForceReRender((prev) => !prev)
    }
    
    console.log()

    return(
        <div>
            <div ref={htmlRef}>COLORS</div>
            <button onClick={onChangeUseRef}>카운트 추가</button>
            <button onClick={onForceReRender}>리랜더링</button>
        
        </div>
    )
}
export default UseRef




