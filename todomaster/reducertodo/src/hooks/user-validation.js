import { useState } from "react";

const a = ( email, password) => {
    const [disabled, setDisabled] = useState () ;
    const [errors, setErrors] = useState();
    useEffect (()=>{
    if(!email || !password)
    return setDisabled(true)
    if(email.includes("@") && password. length>8){
    return setDisabled(false)
    }
    return setdisabled (true)
    },[email , password])
    return {disabled, errors}
}