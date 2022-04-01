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
        border-radius: 10px;
    }
    .blog-author{

    }
    .blog-category{
        height: 20px;
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
    .blog-text-prv{
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
        height: 60px;
        margin-top: 15px;
    }
    
    .bg-foot{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        align-items: center;
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
        .blog-timestamp{
            font-size: 14px;
            color: ${({theme})=>theme.textLightColor};

        }
    }
`