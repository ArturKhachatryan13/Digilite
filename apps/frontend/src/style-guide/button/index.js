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
      default:
        return css`
          background-color: #fafafa;
          color: #000;
          border: 1px solid #d9d9d9;
        `;
    }
  }};
`;

export default Button;
