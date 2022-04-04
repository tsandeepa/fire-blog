import styled from 'styled-components'

export const BlogLogin = styled.div`
    padding: 20px;
    background: transparent;
    position: absolute;
    top: 0;
    padding-top: 54px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .log-box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 600px;
        width: 100%;
        margin: 0 auto;
        .site-logo{
            font-size: 56px;
            
        }
        h2{
            background: -webkit-linear-gradient(45deg,#ff7272,#7b33c5 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
        }
        .slogan{
            text-align: center;
            margin: 10px 0 20px;
            color: ${({theme})=>theme.textLightColor};
        }
        .google-login{
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 17px;
            border-radius: 50px;
            .fc-google{
                font-size: 30px;
            }
        }
    }
`
