import styled from "styled-components";

export const StyledLoader = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  letter-spacing: 1.5px;
  padding: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.transparentBlue};
  border-radius: 25px;
  border: 2px solid ${({ theme }) => theme.colors.white};
`;
export const StyledError = styled(StyledLoader)`
  background-color: ${({ theme }) => theme.colors.crimson};
`;
