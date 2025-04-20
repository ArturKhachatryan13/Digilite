import React from "react";
import styled from "styled-components";

const StyledText = styled.span`
  color: ${({ status }) => (status === "open" ? "#389e0d" : "#cf1322")};
  font-weight: 500;
  border: 0.1px solid
    ${({ status }) => (status === "open" ? "#b7eb8f" : "#ffa39e")};
  border-radius: 6px;
  padding: 4px 8px;
  background-color: ${({ status }) =>
    status === "open" ? "#f6ffed" : "#fff1f0"};
  font-size: 12px;
`;

export const StatusBadge = ({ status = "open", className }) => {
  const text = status === "open" ? "Open" : "Closed";

  return (
    <StyledText className={className} status={status}>
      {text}
    </StyledText>
  );
};
