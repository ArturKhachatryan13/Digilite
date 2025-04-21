import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  z-index: 1050;
  box-sizing: border-box;
  border-bottom: 1px solid var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  background-color: rgb(255 255 255);
  .header-title {
    padding: 0;
    margin: 0 24px 0 36px;
  }
`;

export default HeaderWrapper;
