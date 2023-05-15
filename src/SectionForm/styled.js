import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 15px;
    display: flex;
    flex-direction: column;
`;

export const StyledTitle = styled.h1`
    color: ${({ theme }) => theme.colors.blue};
    display:flex;
    transition: all 0.5s cubic-bezier(0.67, 0.05, 0, 0.89);
    cursor: pointer;
    justify-content: center;

    &:hover{
        color: ${({ theme }) => theme.colors.crimson};
        transform: scale(1.2);
        margin-bottom: 30px;
    };
`;

export const StyledFieldset = styled.fieldset`
    max-width: 900px;
    align-self: center;
    background-color: ${({ theme }) => theme.colors.transparentBlue};
    border-radius: 25px;
    border: 2px solid ${({ theme }) => theme.colors.white};

    @media(max-width:${({ theme }) => theme.breakpoints.mobile}px) {
   
        flex-basis: 100%;
        flex-wrap: wrap;
    };
`;