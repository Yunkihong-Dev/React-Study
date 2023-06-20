import React from "react";
import {useParams} from "react-router-dom";
import BasicButton from "../../components/Button/Button";
import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../styles/common";
import TodoAddModal from "./components/Modal/add-modal";
import TodoList from "./components/List/todo-list";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const TodoPage = () =>{
    const params = useParams();

    const toastOption = {
        autoClose : 1000,
        theme : 'colored'
    };

    const addTodo = () =>{
    return new Promise ((resolve) =>setTimeout(resolve, 1000))
    };

    const showTodoToastMessage = (e) => {
        e.preventDefault();
            toast.promise(addTodo, {
            pending: 'TODO LOADING',
            success: "TODO SUCEESS",
            error: "TODO ERROR"
            })
     };
//     const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
// toast.promise(
//     resolveAfter3Sec,
//     {
//       pending: 'Promise is pending',
//       success: 'Promise resolved 👌',
//       error: 'Promise rejected 🤯'
//     }
// )
    return (
    <>
        <TodoAddModal onAddToDo={showTodoToastMessage}/>
        <S.Wrapper>
            <S.Container>
                <S.Title>List</S.Title>
                <S.Content>  
                    <TodoList/>
                </S.Content>
                <S.ButtonBox>
                    <BasicButton variant = {"primary"} size={"full"}>
                        추가
                    </BasicButton>
                </S.ButtonBox>
            </S.Container>
        </S.Wrapper>
        <ToastContainer {...toastOption}/>
    </>
    );
};
export default TodoPage;
 
const Wrapper = styled.div`
    height: calc(100vh - 60px); 
    padding-bottom: 60px;
    ${flexCenter};
`;
const Container = styled.div`
    width: 420px;
    height: 100%;
    background-color: ${({ theme }) => theme.PALETTE.white}; 
    border-radius: 8px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1); 
    position: relative;
`;
const Title = styled.h1`
    background-color: ${({ theme }) => theme.PALETTE.primary[300]}; 
    color: ${({ theme }) => theme.PALETTE.fontColor};
    padding-left: 32px;
    height: 32px;
    ${flexAlignCenter};
`;

const Content = styled.div`
    width: 100%;
    height: calc(100% - 32px); 
    padding-bottom: 64px; 
    overflow: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
`;

const ButtonBox = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    `;

const S = {
    Wrapper, 
    Container, 
    Title, 
    ButtonBox,
    Content
};