import {useRef, useMemo, useState} from "react";

function UseMemo(){
    const arr = useRef([1,2,3,4])
    const [state1,setState1] = useState(false);
    const [state2,setState2] = useState(false);



    const memoCount = useMemo(()=>{
        arr.current.push(arr.length+1);
        console.log(arr.current.length);
        return arr.current;
    },[state2])

    return(
    <div>
        {memoCount.length}
        <button onClick={()=> setState2((prev) => !prev)}>+</button>
        <button onClick={()=> setState1((prev) => !prev)}>유지</button>
    </div>
    );
}
export default UseMemo