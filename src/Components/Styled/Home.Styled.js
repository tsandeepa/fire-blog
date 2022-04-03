import styled from 'styled-components'

export const HomeMain = styled.div`
    background:${({theme})=> theme.bg};
    max-width: 1100px;
    margin: 0 auto;
    .category-tabs{
        display: flex;
        justify-content: center;
        padding: 20px;
        margin-bottom: 35px;
        div{
            label{
                cursor: pointer;
                padding: 10px 30px;
                border-radius: 50px;
            }
            .active{
                background: ${({theme})=> theme.categoryActive};
                font-weight: 600;
            }
        }
    }
    .loading-blogs{
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(3,1fr);
        .lb-block{
            margin-bottom: 50px;
            animation: shadow-loading 1.1s infinite alternate;
            .lb_title{
                div{border-radius:3px; height: 15px; background: #aeacac; margin-bottom:10px}
                div{
                    &:nth-child(1){
                        width: 100%;
                    }
                }
                div{
                    &:nth-child(2){
                        width: 50%;
                    }
                }
            }
            .lb_image{
                width: 100%;
                height: 200px;
                border-radius: 10px;
                background: rgb(122,122,122);
                background: linear-gradient(342deg, rgba(122,122,122,0) 0%, rgba(177,177,177,1) 100%);
                margin-bottom: 10px;
            }
            .lb_category{
                background: #6f6f6f;
                height: 22px;
                width: 100px;
                border-radius: 30px;
                margin-bottom: 10px;
            }
            .lb_postText{
                div{border-radius:3px; height: 15px; background: #ccc; margin-bottom:10px}
                div{
                    &:nth-child(1){
                        width: 100%;
                    }
                }
                div{
                    &:nth-child(2){
                        width: 70%;
                    }
                }
            }
            .lb_user_date{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .lb_user{
                    display: flex;
                    align-items: center;
                    gap:10px;
                    div{background:#747171}
                    .lbu_img{
                        width: 30px;
                        height: 30px;
                        border-radius: 40px;
                    }
                    .lb_name{
                        width: 120px;
                        height: 13px;
                        border-radius: 3px;
                    }
                }
                .lb_date{
                    background: #ccc;
                    width: 65px;
                    height: 13px;
                    border-radius: 3px;
                }
            }
        }
    }

    @keyframes shadow-loading {
        0%{opacity: 0.1;}
        100%{opacity: 0.15;}
    }

`