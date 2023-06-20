import {useState, useEffect} from "react";
import TimerModal from "./timermodal";

function UseEffect(){
    const [isOpenTimerModal,setIsOpenTimerModal] = useState(false); 
    
    useEffect(()=>{
        console.log("mount")
    },[isOpenTimerModal])
    
/**
 * 1) 패이지가 mount가 되었을 때 실행 = window.onload
 * 2) state는 비동기로 동작 -> state 변화 이후 실행할 effect(함수, 기능) 관리
 * 
*/                  

    return(

        <div>
            {isOpenTimerModal&&<TimerModal/>}
                <button onClick={() => setIsOpenTimerModal((prev)=>!prev)}> 
                    재실행
                </button>
        </div>
    );
};
export default UseEffect