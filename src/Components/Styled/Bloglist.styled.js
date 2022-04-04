import styled from 'styled-components'

export const Bloglist = styled.div`
    display: grid;
    /* flex-direction: column; */
    gap: 20px;
    /* grid-template-columns: repeat(3, 1fr); */
    grid-template-columns: repeat(auto-fill, minmax(340px,1fr));

`