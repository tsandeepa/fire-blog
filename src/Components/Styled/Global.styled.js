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

    .sub-page-header{
        margin-bottom: 50px;
        h3{
            font-size: 34px;
            margin-bottom: 3px;
        }
        label{
            font-size: 14px;
        }
    }

    .form-group{
        margin-bottom: 30px;
        label{
            margin-bottom: 8px;
            display: block;
            font-size: 20px;
        }
        input{
            width: 100%;
            padding: 12px;
            border: none;
            background: ${({theme})=> theme.formFieldBg};
            color: ${({theme})=> theme.textColor};
        }
        textarea{
            width: 100%;
            height: 150px;
            border: none;
            background: ${({theme})=> theme.formFieldBg};
            color: ${({theme})=> theme.textColor};
            padding: 12px;
        }
        select{
            width: 100%;
            padding: 12px;
            background: ${({theme})=> theme.formFieldBg};
            color: ${({theme})=> theme.textColor};
            border: none;
        }
    }
    .upload-input{
        display: flex;
        background: #ccc;
        padding: 10px;
        border-radius: 5px;
        background: ${({theme})=> theme.formFieldBg};
        border: 1px dashed ${({theme})=> theme.borderColor};
        div{
            flex: 1;
            cursor: pointer;
            position: relative;
            height:55px;
            align-items: center;
            display: flex;
            justify-content: center;
            .prg-bar{
                background: ${({theme})=> theme.progressBg};
                display: block;
                position: absolute;
                left: 0;
                display: flex;
                justify-content: flex-start;
                font-size: 12px;
                span{
                    padding-left: 10px;
                }
            }
            span{
                font-size:13px;
            }
            input{
                opacity: 0;
                background: #ccf;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                cursor: pointer;
            }
            
        }
        button{
            background: #fff;
            border: none;
            padding: 0 15px;
            font-weight: 600;
            font-size: 14px;
            border-radius: 3px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap:5px;
        }
        
    }
    
    .bt-submit{
        cursor: pointer;
        padding: 19px 40px;
        font-size: 16px;
        font-weight: 600;
        border: none;
        width: 100%;
        color: #fff;
        border-radius: 3px;
        background: ${({theme})=> theme.btSubmitBg};
    }
    .bt-submit.sb-disabled{
        opacity: 0.7;
    }
`

export default GlobalStyles
