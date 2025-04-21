import Search from "../../../style-guide/search";
import { Radio } from "antd";

const SearchTickets = ({
  handleStatusChange,
  filterStatus,
  searchValue,
  handleSearch,
}) => {
  return (
    <div className="col-12 search-container">
      <Search
        className="search-input"
        placeholder="Search by title"
        allowClear
        defaultValue={searchValue}
        enterButton
        onSearch={handleSearch}
      />
      <Radio.Group value={filterStatus} onChange={handleStatusChange}>
        <Radio.Button value="all">All</Radio.Button>
        <Radio.Button value="open">Open</Radio.Button>
        <Radio.Button value="closed">Closed</Radio.Button>
      </Radio.Group>
    </div>
  );
};
export default SearchTickets;
