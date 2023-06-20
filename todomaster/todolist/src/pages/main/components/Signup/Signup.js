import BasicButton from "../../../../components/Button/Button";
import * as S from "../../style";

const SignUpForm = () => {
  const onPressSignUp = (e) => {
    e.preventDefault();
    console.log("sign-in");
};
  return (
    <S.Form>
      <S.InputBox>
        <label>이메일</label>
        <input />
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호</label> 
        <input />
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호 확인</label> 
        <input />
      </S.InputBox>
      <BasicButton 
      size={"full"} 
      shape={"default"} 
      variant={"primary"}
      onclick={onPressSignUp}
      >
        회원가입
      </BasicButton>
    </S.Form>
  );
};
export default SignUpForm;
