import styled from 'styled-components'

export const CreateBlog = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 25px 12px 65px;
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
    
`
