import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    body{
        background-color: #e7e7e7;
    }
    button{
        border: none;
    }
    ul > li{
        list-style: none;
    }
`;
export default GlobalStyles;