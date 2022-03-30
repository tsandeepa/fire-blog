import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        background-color:${({theme})=> theme.bg};
        color: ${({theme})=>theme.textColor};
    }
`

export default GlobalStyles
