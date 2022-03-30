import styled from 'styled-components'

export const HomeMain = styled.div`
    background:${({theme})=> theme.bg};
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px;
    .category-tabs{
        display: flex;
        gap: 20px;
        justify-content: center;
        padding: 20px;
    }
`