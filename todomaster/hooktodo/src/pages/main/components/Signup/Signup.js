import { useEffect, useState } from "react";
import BasicButton from "../../../../components/Button/Button";
import useInputs from "../../../../hooks/use-inputs";
import * as S from "../../style";
import axios from "axios";

const SignUpForm = ({setIsFormLogin}) => {
 const [{email, password, passwordConfirm},onChangeForm] = useInputs({
    email: "",
    password : "",
    passwordConfirm:"",
  })
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  console.log(isPasswordConfirm);

  useEffect(()=>{
    if(password !== passwordConfirm)return setIsPasswordConfirm(false)
   setIsPasswordConfirm(true)
  },[password,passwordConfirm])

  // 내가 구현했던 것
  // const emailRef = useRef(null);
  // const passwordRef = useRef(null);
  // const passwordConfirmRef = useRef(null);
  
  // signInHandler();
  // function signInHandler(){
  //     let emailchk=false;
  //     let passwordchk=false;
  //     let passwordConfirmchk = false;
  //     let getEmail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
  //     if(emailRef.current){
  //         if(!getEmail.test(emailRef.current.value)){
  //         emailRef.current.style.borderColor=theme.PALETTE.error;
  //         }else{
  //             emailRef.current.style.borderColor=theme.PALETTE.primary[300];
  //             emailchk=true;
  //         }
  //     }

  //     if(passwordRef.current){
  //         if(passwordRef.current.value===""){
  //             passwordRef.current.style.borderColor=theme.PALETTE.error;
  //         }else{
  //             passwordRef.current.style.borderColor=theme.PALETTE.primary[300];
  //             passwordchk=true; 
  //         }
         
  //     }
  //     if(passwordConfirmRef.current){
  //         if(passwordConfirmRef.current.value===passwordRef.current.value){
  //          passwordConfirmRef.current.style.borderColor=theme.PALETTE.primary[300];
  //           passwordConfirmchk=true;
  //         }else{
  //           passwordConfirmRef.current.style.borderColor=theme.PALETTE.error;
  //         }
         
  //     }

  //     if(emailchk && passwordchk && passwordConfirmchk){
  //       return false;
  //   }  
      
  //     return true;
  // };


    /*     
        email은 email 양식을 지켜야하며 (@ 포함)
        password는 8글자 이상 작성 되어야한다.

        password - passwordconfirm 달라졌을 때 실시간으로 
        비밀번호와 비밀번호 확인이 다르지 않은지 확인하라는 여러 에세지

        BasicButton은
        데이터가 모두 채워져있지 않으면 dsiabled

        유효성이 검사되지 않으면 disabled --> 아이디와 비밀번호 양식을 확인해주세요 에러 대세지
        비밀번호와 비밀번호 확인이 다르면 disabled --> css속성도 변경 (회색)

        login의 email 로직에도 똑같이 useInputs를 적용하고 유호성 적용
        커스터 혹으로 함수 재사용 할 것 


        +

        (심화)
        react-hook-from 이용하여 랜더링 최적화
        단, 장단점을 정리하고 원하는 대로 효과를 거뒀는지 작성할 것 
        구현을 목표로 하지 말고 실무에서 자주 사용하는 라이브러리 이므로 확실하게 이해하는 컷이 중요
    */
  // const [datas, setDatas] = useState(false);
  const useSignUpSumbit = (e) => {
    e.preventDefault();
    if(!email || !password) return;
    if(!isPasswordConfirm) return;
    console.log("email : "+email+"password : "+password)
   
    axios.post("http://localhost:3030/user/sign-up", { email: email, password: password })
  .then((response) => {
    console.log(response);
    if (response.status === 200) {
      // 회원가입 성공
      const data = response.data.message;
      alert(data);
      setIsFormLogin(true)
      // TODO: 원하는 동작 수행
    }
  })
  .catch((error) => {
    if (error.response && error.response.status === 400) {
      // 회원가입 오류 (이미 사용 중인 이메일)
      const data = error.response.data.message;
      alert(data)
      console.log(data);
      setIsFormLogin(false);
      // TODO: 원하는 오류 처리 동작 수행
    } else {
      // 기타 오류
      alert(error);
      // TODO: 원하는 오류 처리 동작 수행
    }

  });

    
    
  };
  return (
    <S.Form onSubmit={useSignUpSumbit}>
      <S.InputBox>
        <label>이메일</label>
        <input 
          // ref={emailRef} 
          onChange={onChangeForm} 
          type="email" 
          name="email"
        />
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호</label> 
        <input 
          // ref={passwordRef}
          type="password"
          onChange={onChangeForm} 
          name="password"
        />
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호 확인</label> 
        <input 
        // ref={passwordConfirmRef} 
        type="password" 
        onChange={onChangeForm} 
        name="passwordConfirm"
      />
      {}
      </S.InputBox>
      <BasicButton 
      size={"full"} 
      shape={"default"} 
      variant={"primary"}
      // disabled={s1ignInHandler()}
      >
        회원가입
      </BasicButton>
    </S.Form>
  );
};
export default SignUpForm;
