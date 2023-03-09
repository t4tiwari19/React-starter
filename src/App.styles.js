import styled from "styled-components";
const AppWrapper = styled.div`
  display: flex;
  @media ${(props) => props.theme.mediaQuery.desktop} {
    display: none;
  }
`;

export default AppWrapper;
