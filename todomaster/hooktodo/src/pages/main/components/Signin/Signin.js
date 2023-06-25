import { useRef, useState } from 'react';
import BasicButton from '../../../../components/Button/Button';
import useInputs from '../../../../hooks/use-inputs';
import * as S from '../../style';
import theme from '../../../../styles/theme';
import {useNavigate} from 'react-router-dom';

const SignInForm = ()=>{
    const [{email, password},onChangeForm] = useInputs({
        email: '',
        password : ''
      })

    // const emailRef = useRef(null);
    // const passwordRef = useRef(null); 

    // signInHandler();
    // function signInHandler(){
    //     let emailchk=false;
    //     let passwordchk=false;
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
    //     if(passwordchk && emailchk){
    //         return false;
    //     }  
        
    //     return true;
    // };


    const navigation = useNavigate();
                       





    const onPressSignIn = (e) => {
        e.preventDefault();
        // console.log(emailRef.current.value,passwordRef.current.value);
        console.log(e.target.email.value, e.target.password.value); 
        const email = e.target.email.value;
        const password = e.target.password.value;
        if(email === "test" && password === "test"){
            return navigation('/todo/1',{
                state:{
                    email,
                    password
                }
            })
        }
    };
    
    return (
        <S.Form onSubmit={onPressSignIn}>
            <S.InputBox>
                <label>
                    이메일
                </label> 
                <input 
                    // ref={emailRef} 
                    onChange={onChangeForm} 
                    // type="email" 
                    name="email"
                />
            </S.InputBox>

            <S.InputBox>
                <label>
                    비밀번호
                </label>
                <input
                    // ref={passwordRef}
                    onChange={onChangeForm}
                    type="password"
                    name="password"
                    value={password} 
                />
            </S.InputBox>

            <BasicButton 
                size={"full"} 
                shape={"default"} 
                variant={"primary"}
                // disabled={signInHandler()}
            >
                로그인
            </BasicButton>
        </S.Form>
    )
}
export default SignInForm
