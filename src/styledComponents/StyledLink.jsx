import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import device from "./device";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--primary);
  font-weight: 900;

  ${(props) =>
    props.main &&
    css`
      display: flex;
      align-items: center;
      justify-content: flex-end;

      span {
        font-size: 1.5rem;
      }

      img {
        width: 50px;
      }
    `}

  ${(props) =>
    props.footer &&
    css`
      text-transform: uppercase;
      font-weight: 0.9rem;
      margin-bottom: var(--space-small);
      :not(:last-of-type) {
        margin-right: var(--space-medium);
      }
    `}
`;

export default StyledLink;
