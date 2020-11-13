import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--primary);
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  span {
    font-size: 1.5rem;
  }

  img {
    width: 50px;
  }
`;

export default StyledLink;
