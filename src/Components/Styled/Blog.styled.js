import styled from 'styled-components'

export const Blog = styled.div`
    flex: 1;
    min-width: 251px;
    border-radius: 3px;
    padding: 10px;
    margin-bottom: 50px;
    a{
        color: ${({theme})=> theme.textColor};
        text-decoration: none;
    }
    .blog-cover-title{
        font-size: 26px;
        height: 66px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-bottom: 10px;
    }
    .blog-cover-img{
        width: 100%;
        height:200px;
        object-fit: cover;
        border-radius: 5px;
    }
    .blog-author{

    }
    .blog-category{
        height: 20px;
        display: block;
        .hide{
            display: none;
        }
    }
    .blog-text-prv{
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
        height: 60px;
    }
    
    .bg-foot{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        .blog-author{
            display: flex;
            gap: 10px;
            align-items: center;
            span{
                display: flex;
                align-items: center;
                justify-content: center;
                background: #ccc;
                width: 30px;
                height: 30px;
                border-radius: 30px;
            }
        }
        .blog-timestamp{
            font-size: 14px;
            color: ${({theme})=>theme.textLightColor};

        }
    }
`