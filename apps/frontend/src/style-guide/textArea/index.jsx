import styled from "styled-components";

import { Input } from "antd";

const { TextArea } = Input;

const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.85);
  padding-bottom: 8px;
`;

const RequiredMark = styled.span`
  color: #ff4d4f;
  margin-right: 4px;
`;

const ErrorMessage = styled.span`
  box-sizing: border-box;
  margin-top: 20px;
  color: #ff4d4f;
  margin-top: 0.5rem;
  font-size: 12px;
`;

const StyledTextArea = ({
  label,
  placeholder,
  error,
  value,
  onChange,
  required = false,
  ...props
}) => {
  return (
    <TextAreaWrapper>
      {label && (
        <StyledLabel>
          {required && <RequiredMark>*</RequiredMark>}
          {label}
        </StyledLabel>
      )}
      <TextArea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        status={error ? "error" : ""}
        {...props}
      />
    </TextAreaWrapper>
  );
};

export default StyledTextArea;
