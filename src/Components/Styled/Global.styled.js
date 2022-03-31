import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        background-color:${({theme})=> theme.bg};
        color: ${({theme})=>theme.textColor};
    }

    body::-webkit-scrollbar {
    width: 6px;               /* width of the entire scrollbar */
    }
    body::-webkit-scrollbar-track {
    background: transparent;        /* color of the tracking area */
    }
    body::-webkit-scrollbar-thumb {
    background-color: ${({theme})=> theme.scrollColor};   /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    }
`

export default GlobalStyles
