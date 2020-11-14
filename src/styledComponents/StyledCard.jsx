import styled from "styled-components";

const StyledCard = styled.article`
  max-width: 340px;
  width: 90%;
  box-shadow: var(--shadow-big);
  margin: 0 auto var(--space-large);
  padding: var(--space-medium);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: var(--black);

  img {
    height: 300px;
    padding: var(--space-small);
  }

  h4 {
    text-transform: uppercase;
    color: var(--primary-dark);
  }

  h5 {
    color: var(--grey);
    font-size: 0.9rem;
  }

  .sold-out {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1.3rem;
    transform: rotate(-7deg);
    color: var(--primary);
  }

  span {
    margin-left: var(--space-medium);
  }
`;

export default StyledCard;