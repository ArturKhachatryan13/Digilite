import React from "react";
import styled from "styled-components";
import { Badge } from "antd";

const StyledText = styled.span`
  color: ${({ status }) => status !== "open" && "#cf1322"};

  font-weight: 500;
  border: 0.1px solid
    ${({ status }) => (status === "open" ? "#389e0d" : "#ffa39e")};
  border-radius: 6px;
  padding: 4px;
  background-color: ${({ status }) => {
    return status === "open" ? "#f6ffed" : "#fff1f0";
  }};
  font-size: 12px;
`;

export const StatusBadge = ({ status }) => {
  const color = status === "open" ? "red" : "black";
  const text = status === "open" ? "Open" : "Closed";

  return (
    <Badge
      status={color}
      text={<StyledText status={status}>{text}</StyledText>}
    />
  );
};
