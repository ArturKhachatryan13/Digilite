import styled, { css } from "styled-components";

const Title = styled.h1`
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.88);
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
          font-weight: 600;
          font-size: 16px;
          line-height: 1.5;
        `;
      default:
        return css`
          font-size: 1.5rem;
        `;
    }
  }};
`;
export default Title;
