import styled from "styled-components";

const TicketsListWrapper = styled.div`
  margin-left: 80px;
  margin-right: 80px;
  padding-left: 30px;
  padding-right: 30px;
  .ticket-creation-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 24px 0;
  }
  .search-container {
    margin-bottom: 24px;
  }
  .card-container {
    margin-bottom: 24px;
    cursor: pointer;
    &:hover {
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
    }
  }
  .badge-container {
    display: flex;
    justify-content: end;
  }
  .content-container {
    padding-top: 20px;
  }
  .main-title {
    margin-bottom: 16px;
  }
  .meta-data-text {
    margin-bottom: 8px;
  }
  .description-text {
    margin-bottom: 8px;
  }
`;

export default TicketsListWrapper;
