import styled from "styled-components";

const StyledApp = styled.header`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-areas: "header" "main" "footer";

  @media screen and (min-width: 1024px) {
    grid-template-areas: "header main" "header footer";
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr auto;
  }
`;

export default StyledApp;
