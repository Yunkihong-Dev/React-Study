import { useState } from "react";
import OneTodo from "./one-todo";

const TodoList = ({todoList, setTodoList}) => {

    const updateTodo = (id, content) =>{
        const _todoList = [...todoList]
        const todo = _todoList.find((todo) => todo.id === id)

        /**
         *불뱐성을 지키기 위해 find는 새로운 배열을 반환하지 않기 때문에 
         *기존에 있는 todolist를 깊은 복사하여 다른 아모리 주소값을 갖게하고 수정한다.
         */

        todo.content = content
        setTodoList(_todoList)
    }
    
    const deleteTodo = (id) =>{
        if(window.confirm("정말 삭제하시겠습니까?")){
            const _todoList = todoList.filter((todo) => todo.id !== id)
            setTodoList(_todoList)
        }
    }

    const checkTodo = (id,checked)=>{
        const _todoList = [...todoList]
        const todo = _todoList.find((todo) => todo.id === id)
        console.log("id : " +todo.id + " checked : "+ todo.checked)
        todo.checked = !todo.checked;
        console.log("id : " +todo.id + " checked : "+ todo.checked)
        setTodoList(_todoList)
    }
    return (
        <>
            {todoList.map((todo) => (
            <OneTodo key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
            ))}
        </>
    );

};
export default TodoList;