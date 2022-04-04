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
        display: flex;
        justify-content: space-between;
        align-items: center;
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
            border: 1px solid ${({theme})=> theme.formBorder};
            background: ${({theme})=> theme.formFieldBg};
            color: ${({theme})=> theme.textColor};
            font-size: 18px;
        }
        textarea{
            width: 100%;
            height: 150px;
            border: 1px solid ${({theme})=> theme.formBorder};
            background: ${({theme})=> theme.formFieldBg};
            color: ${({theme})=> theme.textColor};
            padding: 12px;
            font-size: 18px;
        }
        select{
            width: 100%;
            padding: 12px;
            background: ${({theme})=> theme.formFieldBg};
            color: ${({theme})=> theme.textColor};
            border: 1px solid ${({theme})=> theme.formBorder};
            font-size: 18px;
            

        }

        .img-prv{
        width: 100%;
        margin-top: 20px;
        position: relative;
        img{
            width: 100%;
            border-radius: 5px;
        }
        .img-loading{
            background: #8d8d8d17;
            text-align: center;
            padding: 20px;
            border-radius: 3px;
            position: absolute;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            span{
                color: ${({theme})=> theme.textColor};
                font-size: 14px;
            }
        }
        .hide{
            display: none;
        }
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
            border: 1px solid ${({theme})=> theme.formBorder};
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

    @mixin bt-sm-light-props {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .bt-sm-light{
        padding: 8px 20px;
        border: 1px solid ${({theme})=> theme.btSmBorder};
        border-radius: 3px;
        color: ${({theme})=> theme.btSmColor};
        background: ${({theme})=> theme.btSmBg};
        font-weight: 500;
        cursor: pointer;

    }

    .bt-submit.sb-disabled{
        opacity: 0.7;
    }

    


    .blog-author{
            display: flex;
            gap: 10px;
            align-items: center;
            color: #7e7e7e;
            span{
                color: #000;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #f9f9f9;
                border: 1px solid #e9e9e9;
                width: 30px;
                height: 30px;
                border-radius: 30px;
                font-weight: 500;
            }
    }


    .blog-category{
        display: block;
        span{
            padding: 2px 10px;
            display: inline-flex;
            border-radius: 40px;
            margin-top: 8px;
            opacity: 0.8;
            font-size: 13px;
            color: ${({theme})=> theme.catTextColor};
        }
        .cat-Tech{background:${({theme})=> theme.c1}}
        .cat-Entertainment{background: ${({theme})=> theme.c2}}
        .cat-Sports{background: ${({theme})=> theme.c3}}
        .cat-Other{background: ${({theme})=> theme.c4}}
        .cat-Lifestyle{background: ${({theme})=> theme.c5}}
        

        .hide{
            display: none;
        }
    }

    @media only screen and (max-width: 600px) {
        .mb-hide {
            display: none;
        }
    }

    
`

export default GlobalStyles
