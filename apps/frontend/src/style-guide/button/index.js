import styled, { css } from "styled-components";
import { Button as AntButton } from "antd";

// Button style variants are defined by 'type' prop,
// but actual styles for "primary" and "secondary" are not yet implemented.
// Styles will be added as needed during development.

const Button = styled(AntButton)`
  font-weight: 500;
  font-size: 14px;

  ${({ type }) => {
    switch (type) {
      case "primary":
        return css``;
      case "secondary":
        return css``;
      case "link":
        return css`
          border: none;
          margin: 0;
          padding: 0;
        `;
      default:
        return css``;
    }
  }};
`;

export default Button;
