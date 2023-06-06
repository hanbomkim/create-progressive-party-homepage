import DaumPost from "@/common/DaumPost";
import { downloadForm } from "@/common/excel";
import { Button } from "@/components/Button";
import DatePickerSingle from "@/components/DatePickerSingle";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { useInput } from "@/hooks/useInput";
import { CheckIcon } from "@/styles/svg/Check";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { ForwardedRef, useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import ErrorInput from "../Input/ErrorInput";
import {
  AgreeCheckbox,
  CheckboxContainer,
  ConsultationRequestForm,
  ConsultationRequestRoot,
  InputWrap,
  LabelText,
  RequiredNotiText,
  RowWrap,
} from "./Styled";

type changPops = {
  label: string;
  value: number;
};

const genderOptions = [
  {
    label: "남",
    value: 1,
  },
  {
    label: "여",
    value: 2,
  },
];

const InviteForm = ({}, ref: ForwardedRef<HTMLDivElement>) => {
  const {
    valueRef: usernameValueRef,
    ref: usernameInputRef,
    onChange: handleUsernameChange,
  } = useInput("value");

  const {
    valueRef: addressDetailValueRef,
    ref: addressDetailInputRef,
    onChange: handleAddressDetailChange,
  } = useInput("value");
  const {
    valueRef: jobnameValueRef,
    ref: jobnameInputRef,
    onChange: handleJobnameChange,
  } = useInput("value");

  const {
    valueRef: emailValueRef,
    ref: emailInputRef,
    onChange: handleEmailChange,
  } = useInput("value");

  const {
    valueRef: phoneNumberValueRef,
    ref: phoneNumberInputRef,
    onChange: handlePhoneNumberChange,
  } = useInput("value");

  const [addressNumValue, setAddressNumValue] = useState<string>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const signatureRef = useRef<SignatureCanvas>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date>(null);
  const [genderSelect, setGenderSelect] = useState<changPops>(genderOptions[0]);

  const {
    valueRef: useAgreementValueRef,
    ref: useAgreementInputRef,
    onChange: handleUseAgreementChange,
  } = useInput("checked", false);
  const {
    valueRef: agreeMessageValueRef,
    ref: agreeMessageInputRef,
    onChange: handleAgreeMessageChange,
  } = useInput("checked", false);

  const handleSubmit = async () => {
    if (!usernameValueRef.current) {
      setErrorMessage(usernameInputRef.current?.classList[2]);
      usernameInputRef.current?.focus();
      return;
    }
    if (selectedDate === null) {
      alert("생년월일을 선택해주세요.");
      return;
    }

    if (!phoneNumberValueRef.current) {
      setErrorMessage(phoneNumberInputRef.current?.classList[2]);
      phoneNumberInputRef.current?.focus();
      return;
    }
    if (!jobnameValueRef.current) {
      setErrorMessage(jobnameInputRef.current?.classList[2]);
      jobnameInputRef.current?.focus();
      return;
    }
    if (!addressDetailValueRef.current) {
      setErrorMessage(addressDetailInputRef.current?.classList[2]);
      addressDetailInputRef.current?.focus();
      return;
    }

    if (!useAgreementValueRef.current) {
      alert("필수약관에 동의해 주세요.");
      return;
    }

    const sendData = {
      userName: usernameValueRef.current,
      birthDate: format(selectedDate, "PPP", { locale: ko }),
      gender: genderSelect.label,
      toDay: format(new Date(), "PPP", { locale: ko }),
      email: emailValueRef.current,
      phoneNumber: phoneNumberValueRef.current,
      jobName: jobnameValueRef.current,
      address: addressNumValue + addressDetailValueRef.current,
      signature: signatureRef.current.toDataURL("image/png"),
    };
    downloadForm(sendData);
  };

  const handleAddressInput = (e) => {
    setAddressNumValue(e.target.value);
  };

  const handleCancel = () => {
    signatureRef.current.clear();
  };

  return (
    <>
      <ConsultationRequestRoot>
        <ConsultationRequestForm>
          <RequiredNotiText>*는 필수입력 사항입니다.</RequiredNotiText>
          <label>
            <RowWrap>
              <LabelText required>이름</LabelText>
              <ErrorInput error={errorMessage}>
                <InputWrap>
                  <Input
                    placeholder="이름"
                    className="username"
                    ref={usernameInputRef}
                    onChange={handleUsernameChange}
                  />
                </InputWrap>
              </ErrorInput>
            </RowWrap>
          </label>
          <label>
            <RowWrap>
              <LabelText required>성별</LabelText>
              <Select
                value={genderSelect}
                options={genderOptions}
                onChange={setGenderSelect}
              />
            </RowWrap>
          </label>
          <label>
            <RowWrap>
              <LabelText required>생년월일</LabelText>
              <InputWrap>
                <DatePickerSingle
                  setInitDate={selectedDate}
                  setPickedDate={setSelectedDate}
                />
              </InputWrap>
            </RowWrap>
          </label>
          <label>
            <RowWrap>
              <LabelText>이메일</LabelText>
              <InputWrap>
                <Input
                  type="email"
                  placeholder="email@email.co.kr"
                  ref={emailInputRef}
                  onChange={handleEmailChange}
                />
              </InputWrap>
            </RowWrap>
          </label>
          <label>
            <RowWrap>
              <LabelText required>전화번호</LabelText>
              <InputWrap>
                <ErrorInput error={errorMessage}>
                  <InputWrap>
                    <Input
                      className="phone-number"
                      placeholder="'-' 제외하고 숫자만 입력"
                      maxLength={13}
                      ref={phoneNumberInputRef}
                      onChange={(e) => {
                        e.currentTarget.value = e.currentTarget.value
                          .replace(/[^0-9]/g, "")
                          .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
                        handlePhoneNumberChange(e);
                      }}
                    />
                  </InputWrap>
                </ErrorInput>
                <AgreeCheckbox>
                  <CheckboxContainer>
                    <input
                      className="acc-box"
                      type="checkbox"
                      ref={agreeMessageInputRef}
                      onChange={handleAgreeMessageChange}
                    />
                    <div className="acc-check">
                      <CheckIcon />
                    </div>
                  </CheckboxContainer>
                  문자 수신에 동의합니다.
                </AgreeCheckbox>
              </InputWrap>
            </RowWrap>
          </label>
          <label>
            <RowWrap>
              <LabelText required>직업</LabelText>
              <ErrorInput error={errorMessage}>
                <InputWrap>
                  <Input
                    className="jobname"
                    placeholder="직업"
                    ref={jobnameInputRef}
                    onChange={handleJobnameChange}
                  />
                </InputWrap>
              </ErrorInput>
            </RowWrap>
          </label>
          <label>
            <RowWrap>
              <LabelText required>주소</LabelText>
              <InputWrap>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: "12px",
                  }}
                >
                  <ErrorInput error={errorMessage}>
                    <InputWrap>
                      <Input
                        className="address-search"
                        placeholder="주민등록상주소 입력"
                        name="address"
                        onChange={handleAddressInput}
                        value={addressNumValue}
                        readOnly
                      />
                    </InputWrap>
                  </ErrorInput>

                  <Button
                    style={{
                      width: "25%",
                      height: "43px",
                    }}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    검색
                  </Button>
                </div>
                <ErrorInput error={errorMessage}>
                  <InputWrap>
                    <Input
                      className="address-detail"
                      placeholder="상세주소 입력(필수)"
                      ref={addressDetailInputRef}
                      onChange={handleAddressDetailChange}
                      disabled={addressNumValue === null}
                    />
                  </InputWrap>
                </ErrorInput>
              </InputWrap>
            </RowWrap>
          </label>
          <label>
            <RowWrap>
              <LabelText required>서명</LabelText>
              {/* <InputWrap>
                <Signature forwardedRef={signatureRef} />
                <button onClick={handleCancel}>다시 작성하기</button>
              </InputWrap> */}
            </RowWrap>
          </label>
          <AgreeCheckbox all>
            <CheckboxContainer>
              <input
                className="acc-box"
                type="checkbox"
                ref={useAgreementInputRef}
                onChange={handleUseAgreementChange}
              />
              <div className="acc-check">
                <CheckIcon />
              </div>
            </CheckboxContainer>
            모든 약관에 동의합니다.(필수)
          </AgreeCheckbox>
          <Button type="submit" onClick={handleSubmit}>
            완료
          </Button>
        </ConsultationRequestForm>
      </ConsultationRequestRoot>
      {isOpen && (
        <DaumPost
          isOpen={isOpen}
          setOpen={setIsOpen}
          company={addressNumValue}
          setCompany={setAddressNumValue}
        />
      )}
    </>
  );
};

export default InviteForm;
