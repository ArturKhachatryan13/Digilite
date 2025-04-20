import styled, { css } from "styled-components";

const Text = styled.h1`
  margin: 0;
  padding: 0;
  ${({ size, color }) => {
    switch (size) {
      case "big":
        return css`
          font-size: 30px;
          font-weight: 700;
          line-height: 2;
        `;
      case "middle":
        return css`
          font-size: 24px;
          font-weight: 600;
          line-height: 1.3;
        `;
      case "small":
        return css`
          font-size: 14px;
          font-weight: 400;
          word-break: break-word;
          line-height: 1.5;
          color: ${color};
        `;
      default:
        return css`
          font-size: 1.5rem;
        `;
    }
  }};
`;
export default Text;
