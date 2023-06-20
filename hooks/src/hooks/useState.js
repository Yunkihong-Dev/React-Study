import {useState} from "react"; 

function UseState(){
    // let count = 0;
    
    const [count, setCount]= useState(0);
    /**
     * const let [변수명, 바꿀 수 있는 순수 함수] = useState(기본값)
     * const/let 변수명 = 기본값;
     * 
     */
    const handleAddaNumber = () =>{
        if(count>=10){alert("그만눌러임마"); return;}
        setCount(count+1);
    }
    const handleMinusNumber = () =>{
        if(count<=0){alert("그만눌러임마"); return;}
        setCount(count-1);
    }
    console.log(count);
    return (
        <div>
            <button onClick={handleAddaNumber}>+</button>
            {count}
            <button onClick={handleMinusNumber}>-</button>
        </div>
    )
}
export default UseState