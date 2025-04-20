import styled from "styled-components";

const TicketDetailsWrapper = styled.div`
  margin-left: 112px;
  margin-right: 112px;
  padding-top: 24px;
  .back-button-container {
    margin-bottom: 16px;
  }
  .back-icon {
    color: #1677ff;
    margin-right: 4px;
  }
  .ticket-title-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  .ticket-status {
    margin-right: 16px;
  }
  .ticket-date-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  .description-text {
    margin-bottom: 16px;
  }
  .divider-container {
    display: flex;
    align-items: center;
    margin: 32px 0;
    .divider-text {
      margin-right: 16px;
    }
  }
  .first-divider {
    max-width: 56px;
    margin-right: 16px;
  }
  .reply-date-container {
    display: flex;

    margin-bottom: 16px;
  }
  .add-divider-container {
    display: flex;
    align-items: center;
    margin: 32px 0 16px 0;
    .divider-text {
      margin-right: 16px;
      white-space: nowrap;
    }
  }
  .form-container {
    margin-bottom: 120px;
    .reply-text-area {
      height: 120px;
      margin-bottom: 8px;
    }
  }
  .reply-divider {
    margin: 16px 0;
  }
`;

export default TicketDetailsWrapper;
