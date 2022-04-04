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
        margin-bottom: 5px;
    }
    .blog-author{

    }
    
    .blog-text-prv{
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
        height: 60px;
        margin-top: 8px;
    }
    
    .bg-foot{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        align-items: center;
        
        .blog-timestamp{
            font-size: 14px;
            color: ${({theme})=>theme.textLightColor};

        }
    }
`