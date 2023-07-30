import { useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";
import BasicButton from "../../components/Button/Button";
import useModal from "../../hooks/use-modal";
import { flexAlignCenter, flexCenter } from "../../styles/common";
import TodoList from "./components/List/todo-list";
import TodoAddModal from "./components/Modal/add-modal";

const TodoPage = () => {
  const params = useParams();
  const [ isModalOpen, toggleModal] = useModal(false);
  // useEffect(()=>{
  //   Axios.get("http://localhost:3030/todo/todo-list",
  //   {withCredentials:true})
  //   .then((res)=> {res.json()})
  //   .then((data)=>
  //   setTodoList(data.getlists))
  //   .catch((data)=>alert(data.message))
  //   })
  const [todoList, setTodoList] = useState([
    {
    id : 1,
    title : "example1" ,
    content : "content1",
    state : false,
    checked : true,
    },
    {
    id:2,
    title : "example2",
    content : "content2",
    state : false,
    checked : false,
    },
    {
    id: 3,
    title : "example3",
    content : "content3", 
    state : false,
    checked : false,
    },
  ]);

  const addTodo = (title, content) => {
    return new Promise((resolve) =>
      setTimeout(() => {
        const newTodo = {
          id: Math.floor(Math.random() * 100000),
          state: false,
          title,
          content,
          checked:false
        };
        resolve(newTodo);
      }, 3000)
    ).then((todo) => {
      console.log(todo);
      setTodoList([todo, ...todoList]);
      toggleModal(); // 모달 닫기
    });
  };

  const showTodoToastMessage = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    toast.promise(addTodo(title, content), {
      pending: 'TODO LOADING',
      success: "TODO SUCCESS",
      error: "TODO ERROR"
    });
  };

  const toastOption = {
    autoClose: 1000,
    theme: 'colored'
  };

   



  return (
    <>
      {isModalOpen && <TodoAddModal onAddToDo={showTodoToastMessage} onClose={toggleModal} />}
      <Wrapper>
        <Container>
          <Title>List</Title>
          <Content>
            <TodoList todoList={todoList} setTodoList={setTodoList} />
          </Content>
          <ButtonBox>
            <BasicButton variant="primary" size="full" onClick={toggleModal}>
              추가
            </BasicButton>
          </ButtonBox>
        </Container>
      </Wrapper>
      <ToastContainer {...toastOption} />
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
  position: relative
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