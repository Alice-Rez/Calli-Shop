import styled from "styled-components";

const StyledCard = styled.article`
  max-width: 340px;
  width: 90%;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2),
    -5px -5px 15px rgba(255, 255, 255, 0.2);
  margin: 0 auto 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    height: 300px;
    object-fit: cover;
    padding: var(--space-medium);
  }
`;

export default StyledCard;
