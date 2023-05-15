import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 15px;
    display: flex;
    flex-direction: column;
`;

export const StyledTitle = styled.h1`
     color: #0000ff;
    transition: all 0.5s cubic-bezier(0.67, 0.05, 0, 0.89);
    cursor: pointer;
    align-self: center;

    &:hover{
        color: crimson;
        transform: scale(1.2);
        margin-bottom: 30px;
    };
`;

export const StyledFieldset = styled.fieldset`
     max-width: 900px;
    align-self: center;
    background-color: #3d74e96e;
    border-radius: 25px;
    border: 3px solid #000000;

    @media(max-width:767px) {
   
        flex-basis: 100%;
        flex-wrap: wrap;
    };
`;