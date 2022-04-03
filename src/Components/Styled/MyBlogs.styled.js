import styled from 'styled-components'

export const MyBlogsCustom = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 25px 0;
    .my-blogs{

        .my-blog-li{
            display: flex;
            margin-bottom: 34px;
            gap: 26px;
            .mb-img{
                img{
                    width: 180px;
                    height: 100px;
                    object-fit: cover;
                    border-radius: 5px;
                }
            }
            h3{
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .mb-p1{
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .mb-p2{

            }
            .mb-li-opt{
                opacity: 0;
                display: flex;
                justify-content: flex-end;
                gap: 10px;
                button{
                    width: 34px;
                    height: 34px;
                    border-radius: 40px;
                    border: none;
                    display: flex;
                    color:  ${({theme})=> theme.textColor};
                    align-items: center;
                    justify-content: center;
                    background: transparent;
                    cursor: pointer;
                    &:hover{
                        background: ${({theme})=> theme.btOptBg} !important;
                    }
                }
            }
            &:hover{
                .mb-li-opt{
                    opacity: 1;
                }
            }
        }
    }

`