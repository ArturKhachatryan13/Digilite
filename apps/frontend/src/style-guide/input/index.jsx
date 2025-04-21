import React from "react";
import styled from "styled-components";
import { Input } from "antd";

//All color values should be moved to a theme file

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.85);
  margin-bottom: 8px;
`;

const RequiredMark = styled.span`
  color: #ff4d4f;
  margin-right: 4px;
`;

const StyledInput = ({
  label,
  placeholder,
  error,
  value,
  onChange,
  required = false,
  ...props
}) => {
  return (
    <InputWrapper>
      {label && (
        <StyledLabel>
          {required && <RequiredMark>*</RequiredMark>}
          {label}
        </StyledLabel>
      )}
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        status={error ? "error" : ""}
        {...props}
      />
    </InputWrapper>
  );
};

export default StyledInput;
