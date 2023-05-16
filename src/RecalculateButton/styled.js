import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 22px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.waikawa};
  align-self: center;
  padding: 5px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 25px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 8px;
  font-weight: 900;
`;
