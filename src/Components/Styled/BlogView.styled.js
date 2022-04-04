import styled from 'styled-components'

export const BlogView = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 25px 12px ;
    .blog-box{
        .pc-title{
            font-size: 29px;
            margin-bottom: 20px;
        }
        .pc-image{
            width: 100%;
            margin-bottom: 15px;
        }
        .pc-paragraph{
            margin: 20px 0;
            font-size: 20px;
            font-weight: 300;
            line-height: 1.5em;
        }
        .blog-foot{
            display: flex;
            align-items: center;
            justify-content: space-between;
            
        }
        .date-stamp{
            color: #ccc;
            font-size: 15px;
            margin-bottom: 10px;
            display: block;
        }
    }
    
`
