import styled, { css } from "styled-components";

const Text = styled.h1`
  ${"" /* color: rgb(107 114 128); */}
  ${({ size }) => {
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
        `;
      default:
        return css`
          font-size: 1.5rem;
        `;
    }
  }};
`;
export default Text;
