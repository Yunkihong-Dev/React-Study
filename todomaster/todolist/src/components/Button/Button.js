import Button from "./style";

const BasicButton = ({ size, shape, variant, children, ...rest  }) =>{
    return <Button size={size} shape={shape} variant={variant} {...rest}>
         {children}
         </Button>;
}
export default BasicButton;

//  <BasicButton size={full}>
/*
=======================================================================

keypoint
1. 합수형 컴포트는 매개변수로 전달된 * 속성값 을 객체 형태로 받는다.
2. styled-compontent는 속성으로 전달된 없을 콜백함수의 인자로 꺼내쓸 수 있다.
3. 이를 이용하여 유동적인 css 변경이 가능하며 이를 동해 유동적인 공통 컴포넌트를 만들 수 있다.
4. 나머지 매개변수를 통해 props를 통해 명시하지 않은 key 값도 전달 받을 수 있다.

=======================================================================
*/