import { useState } from "react";
import styled from "styled-components";
import SignInForm from "./components/Signin/Signin";
import SignUpForm from "./components/Signup/Signup";

import { flexCenter } from "styles/common";
import { PALETTE } from "styles/theme";

const MainPage = () => {
  const [isFormLogin, setIsFormLogin] = useState(true);

  const onClickFormHeader = (e) => {
    const { innerText } = e.target;
    if (innerText === "LOGIN") return (setIsFormLogin(true));
    setIsFormLogin(false); 
  };
  // const handleClickFormHeader = (e) =>{
  // }

  return (
    <S.Container>
      <S.Header>
        <S.LoginHeader isFormLogin={isFormLogin} onClick={onClickFormHeader}>
          LOGIN
        </S.LoginHeader>
        <S.SignUpHeader isFormLogin={isFormLogin} onClick={onClickFormHeader}>
          SIGN
        </S.SignUpHeader>
      </S.Header>
      {isFormLogin ? <SignInForm /> : <SignUpForm setIsFormLogin={setIsFormLogin}/>}
    </S.Container>
  );
};
export default MainPage;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  ${flexCenter}
  flex-direction: column;
`;
const Header = styled.div`
  width: 360px;
  height: 48px;
  display: flex;
  /* background-color: ${PALETTE.primary[300]}; */
  background-color: ${({theme}) => theme.PALETTE.primary[300]};
  div {
    ${flexCenter}
    width: 50%;
    cursor: pointer;
    :hover {
      opacity: 0.7;
    }
  }
`;

const LoginHeader = styled.div`
  background-color: ${({ theme, isFormLogin }) =>
    isFormLogin ? "#e0е0е0" : "#f5f5f5"};
`;
// styled-componetne는 변수를 속성으로 전달받아
//해당 변수 없에 따라서 스타일을 조정할 수 있다 = stvle 변경을 위해 DON API에 접근할 필요가 없다
const SignUpHeader = styled.div`
  background-color: ${({ theme, isFormLogin }) =>
    isFormLogin ? "#f5f5f5" : "#e0е0е0"};
`;
const S = {
  Container,
  Header,
  LoginHeader,
  SignUpHeader
};
