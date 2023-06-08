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
        <FeedbackMessage>필수입력사항입니다.</FeedbackMessage>
      )}
    </InputWrap>
  );
};

export default ErrorInput;
