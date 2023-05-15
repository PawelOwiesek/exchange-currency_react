import styled from "styled-components";

export const StyledSpan = styled.span`
   
    font-size: 22px;
    width: 250px;
    display: inline-block;
`;

export const StyledInput = styled.input`
 
    min-width: 300px;
    font-size: 18px;
    text-align: center;
    border-radius: 25px;
    padding: 10px;
    border: 2px solid ${({ theme }) => theme.colors.black};

@media(max-width:${({ theme }) => theme.breakpoints.mobile}px) {
        min-width: 90vw;
};
`;