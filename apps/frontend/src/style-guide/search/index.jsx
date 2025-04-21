import styled from "styled-components";
import { Input } from "antd";

const { Search } = Input;

const StyledSearch = styled(Search)`
  border-radius: 8px;
  padding: 8px 12px;

  input {
    border-radius: 8px;
    font-size: 16px;
  }

  .ant-input-search-button {
    border-radius: 0 8px 8px 0;
  }
`;

export default Search;
