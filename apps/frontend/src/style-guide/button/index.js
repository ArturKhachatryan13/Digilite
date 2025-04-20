import styled, { css } from "styled-components";
import { Button as AntButton } from "antd";

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
