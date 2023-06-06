import styled from "styled-components";

export const ConsultationRequestRoot = styled.section`
  width: 100%;
  background-color: #fff;
`;

export const ConsultationRequestForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4em;
  gap: 40px;
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const FeedbackMessage = styled.p`
  animation-name: "validation";
  color: red;
  animation-duration: 0.3s;
  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  animation-direction: alternate;
  animation-fill-mode: forwards;
  opacity: 0;
  height: 25px !important;
  padding-top: 2px;

  @keyframes validation {
    100% {
      opacity: 1;
      height: 7px;
    }
  }
`;
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding-right: 8px;

  .acc-box {
    display: none;
  }
  .acc-check {
    width: 18px;
    height: 18px;
    background-color: #fff;
    border: 2px solid #e2e5ed;
    border-radius: 4px;
    svg {
      visibility: hidden;
    }
  }
  .acc-box:checked + .acc-check {
    svg {
      visibility: visible;
    }
  }
`;

export const LabelText = styled.div<{
  required?: boolean;
}>`
  display: flex;
  font-size: 16px;
  width: 30%;
  /* margin-bottom: 8px; */

  &::after {
    content: "*";
    color: ${({ required }) => (required ? "red" : "transparent")};
  }
`;
export const RowWrap = styled.div`
  display: flex;
  align-items: baseline;
`;
export const InputWrap = styled.div`
  width: 100%;
  margin-right: 5px;
`;
export const NotiText = styled.p`
  padding: 5px;
  font-size: 13px;
  color: #ed4949;
`;
export const RequiredNotiText = styled.p`
  font-size: 16px;
  color: red;
`;

export const AgreeCheckbox = styled.label<{
  all?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: ${({ all }) => (all ? "center" : "none")};
  line-height: 1.2;
  margin: 8px 0;

  input {
    margin: 0 4px;
  }
`;
