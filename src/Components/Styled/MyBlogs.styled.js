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
            position: relative;
            .mb-img{
                img{
                    width: 180px;
                    height: 100px;
                    object-fit: cover;
                    border-radius: 5px;
                }
            }
            .mb-content{
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                h3{
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                text-overflow: ellipsis;
                overflow: hidden;
                margin-bottom: 5px;
                }
                .mb-p1{
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    font-size: 14px;
                    color: ${({theme})=>theme.textLightColor};
                }
                .mb-p2{
                    color: #ccc;
                    font-size: 14px;
                    padding-bottom: 10px;
                }
                .mb-li-opt{
                    opacity: 0;
                    display: flex;
                    justify-content: flex-end;
                    gap: 10px;
                    position: absolute;
                    right: 0;
                    bottom: 0;
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
    }

    .myb-loading{
        animation: shadow-loading 0.5s infinite alternate;
        margin-bottom: 34px;
        display: flex;
        gap: 26px;
       .myb-img{
           border-radius: 3px;
            width: 180px;
            height: 100px;
            background: rgb(122,122,122);
            background: linear-gradient(342deg, rgba(122,122,122,0) 0%, rgba(177,177,177,1) 100%);
       } 
       .myb-content{
           flex: 1;
           display: flex;
               flex-direction: column;
               justify-content: space-between;
           div{
               
               .myb-title{
                    height: 19px;
                    border-radius: 30px;
                    width: 70%;
                    background: linear-gradient(342deg, rgba(120,122,132,0) 0%, rgba(177,177,177,1) 100%);

                    margin-bottom: 12px;
               }
               .myb-paragraph{
                    height: 15px;
                    border-radius: 30px;
                    width: 90%;
                    background: linear-gradient(342deg, rgba(120,122,132,0) 0%, rgba(177,177,177,1) 100%);

               }
           }
           .myb-time{
               height: 12px;
               width: 100px;
               background: linear-gradient(342deg, rgba(120,122,132,0) 0%, rgba(177,177,177,1) 100%);
               display: block;
               border-radius: 30px;
               padding-bottom: 10px;
           }
       }
       .myb-time{

       }
    }

    @keyframes shadow-loading {
        0%{opacity: 0.1;}
        100%{opacity: 0.15;}
    }

`