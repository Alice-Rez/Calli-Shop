import styled from "styled-components";

const StyledFigure = styled.figure`
  display: grid;
  place-items: center;

  img {
    width: 100%;
    max-width: 500px;

    @media screen and (min-width: 500px) and (max-height: 850px) {
      max-width: 350px;
    }
  }
`;

export default StyledFigure;
