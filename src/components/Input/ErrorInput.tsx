import React from "react";
import { FeedbackMessage, InputWrap } from "../InviteForm/Styled";

interface ErrorInputProps {
  children: React.ReactNode;
  error: string;
}

const ErrorInput = ({ children, error }: ErrorInputProps) => {
  const childClassName = (children as React.ReactElement)?.props?.children
    ?.props?.className;

  return (
    <InputWrap>
      {children}
      {error === childClassName && (
        <FeedbackMessage>필수정보가 누락되었습니다.</FeedbackMessage>
      )}
    </InputWrap>
  );
};

export default ErrorInput;
