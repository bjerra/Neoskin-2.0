import styled from "@emotion/styled"

export const Wrapper = styled.div`
 
  color: ${({ theme }) => theme.COLOR.LIGHT.hex};
  text-decoration: none;
  transition: color 0.3s linear;

  a{
    text-decoration: none;
  }
`;
