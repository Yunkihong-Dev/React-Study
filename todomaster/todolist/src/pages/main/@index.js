import React from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"



const MainPage = () => {
    const [searchParams,setSerchParams] = useSearchParams(); 
    console.log(searchParams.get("todoId"));
    const navigate = useNavigate();
    
    
    const onClickNavigateTodo = () => {
        // window.location.href = '/todo/1'
        // navigate('/todo/1')
        // navigate(-1)
        setSerchParams({
            todoId: 3, 
            page:5
        })
    }

    return ( 
        <React.Fragment>  
         {/*태그명이 없는 태그를 Fragment라고 한다. 만약 fragment에 속성을 줄 경우  */}
         <div> main</div>%
        <div>:)</div>
        <button  onClick={onClickNavigateTodo}>todoPage로 이동</button> 
        <a href="/todo/3">TodoPage</a>
        <Link to="/todo/5">TodoPage</Link>
        </React.Fragment> 

        )
}
export default MainPage
