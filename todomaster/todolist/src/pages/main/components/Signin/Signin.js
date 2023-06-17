import BasicButton from '../../../../components/Button/Button'
import * as S from '../../style'

const SignInForm = ()=>{
    const onPressSignIn = (e) => {
        e.preventDefault();
        console.log("sign-in");
    };
    return (
        <S.Form>
            <S.InputBox>
                <label>
                    이메일
                </label> 
                <input/>
            </S.InputBox>
            <S.InputBox>
                <label>
                    비밀번호
                </label>
                <input/>
            </S.InputBox>
            <BasicButton 
            size={"full"} 
            shape={"default"} 
            variant={"primary"}
            onClick={onPressSignIn} 
            >
                로그인
            </BasicButton>
        </S.Form>
    )
}
export default SignInForm