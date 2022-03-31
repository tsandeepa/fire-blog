import styled from 'styled-components'

export const Blog = styled.div`
    flex: 1;
    min-width: 251px;
    border-radius: 3px;
    padding: 10px;
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

    }
    .blog-text-prv{

    }
    
    .bg-foot{
        .blog-timestamp{

        }
    }
`