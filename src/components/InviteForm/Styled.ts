import styled from "styled-components";

export const ConsultationRequestRoot = styled.section`
  width: 100%;
  background-color: #fff;
`;

export const SignatureWrapper = styled.div`
  border: 1px solid #e2e5ed;
  border-radius: 6px;
  margin-bottom: 2rem;
  height: 30vh;
  .sigCanvas {
    width: 100%;
    height: 80%;
  }
`;
export const ConsultationRequestForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  gap: 4rem;
  width: 100%;
  margin: 0 auto;
`;
export const UseAgreementWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ all }) => (all ? "center" : "none")};
  line-height: 2.2;
  margin: 8px 0;
  font-size: 1.3rem;
`;
export const SignatureLabel = styled.label`
  padding-bottom: 22rem;
`;

export const UseAgreementHead = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e2e5ed;
  p {
    padding-left: 1rem;
    font-size: 1.3rem;
  }
  cursor: pointer;
`;
export const UseAgreementContent = styled.div<{
  open?: boolean;
}>`
  display: ${({ open }) => (open ? "flex" : "none")};
  p {
    display: ${({ open }) => (open ? "flex" : "none")};
    padding-left: 1rem;
    font-size: 1.3rem;
  }
`;

export const Title = styled.div`
  font-size: 1.125rem;
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
    width: 1.3rem;
    height: 1.3rem;
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
  font-size: 1.3rem;
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
  height: 3.5rem;
  line-height: 0;
`;
export const NotiText = styled.p`
  padding: 0.5rem;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: #ed4949;
`;
export const RequiredNotiText = styled.p`
  font-size: 1.3rem;
  color: red;
`;

export const AgreeCheckbox = styled.label<{
  all?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: ${({ all }) => (all ? "center" : "none")};
  line-height: 2.2;
  margin: 8px 0;
  font-size: 1.3rem;

  input {
    margin: 0 4px;
  }
`;
