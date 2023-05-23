import styled from "styled-components";

export const StyledSpan = styled.span`
  font-size: 22px;
  width: 250px;
  display: inline-block;
`;

export const StyledInput = styled.input`
  min-width: 200px;
  font-size: 18px;
  text-align: center;
  border-radius: 10px;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    min-width: 90vw;
  }
`;
