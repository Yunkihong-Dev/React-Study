import { useEffect,  useRef, useState} from "react";

function TimerModal(){
    const [count, setCount] = useState(60);
    let intervalRef = useRef(null);

    
    useEffect(() => {
        console.log("timer mount!");
      
        intervalRef.current = setInterval(async () => {
      
          setCount((prev) => prev - 1);
        }, 1000);
      
         
        return () =>{
            clearInterval(intervalRef.current);
            //  When the page is loaded, two counts are added each time, useEffect Unmount and then unmounting.
            //  That's why we need to clear the interval so the count could add 1 every moment.
            console.log("timer unmount");
            /**
             * Differnce between useEffect and useMemo is do they cashing the value or not.
             * 
             * So if you want to cash the value, then using useMemo would be desirable, 
             * and or if you want to use the logic if the state changed, then using useEffect would be nice.
             * Using useEffect and useRef for cashing the specific value would cause the memory leek.
             */
        }
    },[]);

    useEffect(()=>{
        if (count <= 0) {
            alert("제한시간이 초과되었습니다.");
            clearInterval(intervalRef.current);
          }
    },[count]);
    
    let secound =(count%60<10?'0'+count%60:count%60);
    
    return <div>{Math.floor(count/60)}:{secound}</div>
}
export default TimerModal