import styled from 'styled-components'

export const Navbar = styled.nav`
    position: relative;
    z-index: 1;
    background:${({theme})=> theme.bg};
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    background: ${({theme})=> theme.navBg};
    .h-opt{
        display: flex;
        align-items: center;
        font-size: 25px;
        gap: 8px;
        h1{
            font-size: 18px;
            background: -webkit-linear-gradient(45deg,#ff7272,#7b33c5 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
        }
    }
    .nav-opt{
        display: flex;
        align-items: center;
        gap: 20px;
        font-size: 14px;
        a{
            color:  ${({theme})=> theme.textColor};
            text-decoration: none;
        }
        .logged-user{
            background: ${({theme})=> theme.formFieldBg};
            display: flex;
            align-items: center;
            gap: 10px;
            border: 1px solid  ${({theme})=> theme.loggedUserBorder};
            padding: 3px 5px 4px 20px;
            border-radius: 50px;
            p{text-transform: capitalize;}
            
        }

        @media only screen and (max-width: 600px) {
            .logged-user {
                position: fixed;
                bottom: 12px;
                left: 14px;
            }
        }

        button{
                width: 34px;
                    height: 34px;
                    border-radius: 40px;
                    border: none;
                    display: flex;
                    font-size: 21px;
                    color:  ${({theme})=> theme.textColor};
                    align-items: center;
                    justify-content: center;
                    background: transparent;
                    cursor: pointer;
                    &:hover{
                        background: ${({theme})=> theme.btOptBg} !important;
                    }
        }
        .btn-create-post{
            position: fixed;
            cursor: pointer;
            right: 20px;
            background: ${({theme})=> theme.btSubmitBg} ;
            padding: 10px 20px;
            border-radius: 50px;
            margin-bottom: 13px;
            right: 5px;
            bottom: 0;
            a{
                display: flex;
                align-items: center;
                gap: 10px;
                color: #fff !important;

            }
        }
    }
    
`


