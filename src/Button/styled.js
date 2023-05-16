import styled from "styled-components";

export const StyledButton = styled.button`
  display: block;
  max-width: 120px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.transparentWhite};
  font-weight: bold;
  transition: 1s;
  cursor: pointer;
  margin: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.waikawa};
    transform: scale(1.1);
  }
`;
