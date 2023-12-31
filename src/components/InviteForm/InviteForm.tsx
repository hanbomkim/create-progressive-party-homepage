import DaumPost from "@/common/DaumPost";
import { SignatureComponent } from "@/common/SignatureComponent";
import { downloadForm } from "@/common/excel";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { useInput } from "@/hooks/useInput";
import { ArrowIcon } from "@/styles/svg/Arrow";
import { FormCheckIcon } from "@/styles/svg/Check";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import React, { ForwardedRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { default as SignatureCanvas } from "react-signature-canvas";
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
  SignatureLabel,
  UseAgreementContent,
  UseAgreementHead,
  UseAgreementWrapper,
} from "./Styled";

type changPops = {
  label: string;
  value: number;
};

const genderOptions = [
  {
    label: `성별 (필수)`,
    value: 0,
  },
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
  const isMobile = useMediaQuery({ maxWidth: 768 });

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

  // const {
  //   valueRef: emailValueRef,
  //   ref: emailInputRef,
  //   onChange: handleEmailChange,
  // } = useInput("value");

  const {
    valueRef: phoneNumberValueRef,
    ref: phoneNumberInputRef,
    onChange: handlePhoneNumberChange,
  } = useInput("value");
  const {
    valueRef: birthDateValueRef,
    ref: birthDateInputRef,
    onChange: handleBirthDateChange,
  } = useInput("value");

  const [addressNumValue, setAddressNumValue] = useState<string>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const padRef = React.useRef<SignatureCanvas>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [genderSelect, setGenderSelect] = useState<changPops>(genderOptions[0]);
  const [useAgreementToggle, setUseAgreementToggle] = useState<boolean>(false);

  const {
    valueRef: useAgreementValueRef,
    ref: useAgreementInputRef,
    onChange: handleUseAgreementChange,
  } = useInput("checked", false);
  // const {
  //   valueRef: agreeMessageValueRef,
  //   ref: agreeMessageInputRef,
  //   onChange: handleAgreeMessageChange,
  // } = useInput("checked", false);
  const setMobilePlaceholder = (text: string) => {
    return isMobile ? `${text} (필수)` : text;
  };
  const handleSubmit = async () => {
    if (!usernameValueRef.current) {
      setErrorMessage(usernameInputRef.current?.classList[2]);
      usernameInputRef.current?.focus();
      return;
    }
    if (genderSelect.value === 0) {
      alert("성별을 선택해주세요.");
      return;
    }

    if (!birthDateValueRef.current) {
      setErrorMessage(birthDateInputRef.current?.classList[2]);
      birthDateInputRef.current?.focus();
      return;
    }
    if (birthDateValueRef.current.length !== 10) {
      alert("생년월일을 다시 입력해주세요.");
      birthDateInputRef.current?.focus();
      return;
    }
    if (!phoneNumberValueRef.current) {
      setErrorMessage(phoneNumberInputRef.current?.classList[2]);
      phoneNumberInputRef.current?.focus();
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

    const birth = birthDateValueRef.current
      .replace(/-/g, "")
      .replace(/^(\d{4})(\d{2})(\d{2})$/, `$1년$2월$3일`);
    const sendData = {
      userName: usernameValueRef.current,
      birthDate: birth,
      gender: genderSelect.label,
      toDay: format(new Date(), "PPP", { locale: ko }),
      phoneNumber: phoneNumberValueRef.current,
      // receiveAgreement: agreeMessageValueRef.current ? "동의" : "미동의",
      jobName: jobnameValueRef.current || "",
      address: addressNumValue + addressDetailValueRef.current,
      signature: padRef.current?.getTrimmedCanvas().toDataURL("image/png"),
    };
    const isSubmit = downloadForm(sendData);
    if (isSubmit) {
      alert(
        "당원 가입이 완료되었습니다.\n국민주권당의 당원이 되어주셔서 감사합니다."
      );
      window.location.href = "http://jugwon.kr";
      // router.push("http://jugwon.tistory.com/"); // 랜딩 페이지의 경로로 수정
    } else {
      alert("당원 가입에 실패하였습니다.\n다시 시도해 주세요.");
    }
  };

  const handleAddressInput = (e) => {
    setAddressNumValue(e.target.value);
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
                    placeholder={setMobilePlaceholder("이름")}
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
                {/* <DatePickerSingle
                  setInitDate={selectedDate}
                  setPickedDate={setSelectedDate}
                /> */}
                <Input
                  className="phone-number"
                  placeholder={setMobilePlaceholder(
                    "생년월일 8자리(0000-00-00)"
                  )}
                  maxLength={10}
                  ref={birthDateInputRef}
                  onChange={(e) => {
                    e.currentTarget.value = e.currentTarget.value
                      .replace(/[^0-9]/g, "")
                      .replace(/^(\d{4})(\d{2})(\d{2})$/, `$1-$2-$3`);
                    handleBirthDateChange(e);
                  }}
                />
              </InputWrap>
            </RowWrap>
          </label>
          {/* <label>
            <RowWrap>
              <LabelText>이메일</LabelText>
              <InputWrap>
                <Input
                  type="email"
                  placeholder="이메일"
                  ref={emailInputRef}
                  onChange={handleEmailChange}
                />
              </InputWrap>
            </RowWrap>
          </label> */}
          <label>
            <RowWrap>
              <LabelText required>휴대폰번호</LabelText>
              {/* <InputWrap margin> */}
              <ErrorInput error={errorMessage}>
                <InputWrap>
                  <Input
                    className="phone-number"
                    placeholder={setMobilePlaceholder("휴대폰번호")}
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
              {/* <AgreeCheckbox>
                  <CheckboxContainer>
                    <input
                      className="acc-box"
                      type="checkbox"
                      ref={agreeMessageInputRef}
                      onChange={handleAgreeMessageChange}
                    />
                    <div className="acc-check">
                      <FormCheckIcon />
                    </div>
                  </CheckboxContainer>
                  문자 수신에 동의합니다.
                </AgreeCheckbox> */}
              {/* </InputWrap> */}
            </RowWrap>
          </label>

          <label>
            <RowWrap>
              <LabelText>직업</LabelText>
              <InputWrap>
                <Input
                  className="jobname"
                  placeholder="직업"
                  ref={jobnameInputRef}
                  onChange={handleJobnameChange}
                />
              </InputWrap>
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
                    paddingBottom: "0.8rem",
                  }}
                >
                  <ErrorInput error={errorMessage}>
                    <InputWrap onClick={() => setIsOpen(!isOpen)}>
                      <Input
                        className="address-search"
                        placeholder={setMobilePlaceholder("주민등록상주소")}
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
                      marginLeft: "0.5rem",
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
                      placeholder="상세주소 입력 (필수)"
                      ref={addressDetailInputRef}
                      onChange={handleAddressDetailChange}
                      disabled={addressNumValue === null}
                    />
                  </InputWrap>
                </ErrorInput>
              </InputWrap>
            </RowWrap>
          </label>
          <SignatureLabel>
            <RowWrap>
              <LabelText required>서명</LabelText>
              <InputWrap>
                <SignatureComponent padRef={padRef} />
              </InputWrap>
            </RowWrap>
          </SignatureLabel>
          <UseAgreementWrapper>
            <UseAgreementHead
              onClick={() => setUseAgreementToggle(!useAgreementToggle)}
            >
              <ArrowIcon />
              <p>이용약관</p>
            </UseAgreementHead>
            <UseAgreementContent open={useAgreementToggle}>
              <p>
                국민주권당(가칭) 창당준비위원회[국민주권당(준)]의 뜻을 같이하는
                사람은 누구나 가입할 수 있습니다. 다만 정당법에 의하여
                창당준비위원회에 함께 할 수 없는 분들은 가입이 제한됨을
                알려드립니다.
              </p>
              <br />
              <p>
                [정당법]
                <br />
                제 4장 제 22조(발기인 및 당원의 자격)
                <br />
                ① 국회의원 선거권이 있는 자는 공무원 그 밖에 그 신분을 이유로
                정당가입이나 정치활동을 금지하는 다른 법령의 규정에 불구하고
                누구든지 정당의 발기인 및 당원이 될 수 있다. 다만, 다음 각 호의
                어느 하나에 해당하는 자는 그러하지 아니하다. &lt;개정
                2011.7.21., 2012.2.29., 2013.12.30.&gt;
                <br />
                1. 「국가공무원법」 제2조(공무원의 구분) 또는 「지방공무원법」
                제2조(공무원의 구분)에 규정된 공무원. 다만, 대통령, 국무총리,
                국무위원, 국회의원, 지방의회의원, 선거에 의하여 취임하는
                지방자치 단체의 장, 국회 부의장의
                수석비서관·비서관·비서·행정보조요원, 국회
                상임위원회·예산결산특별위원회·윤리특별위원회 위원장의
                행정보조요원, 국회의원의 보좌관·비서관·비서, 국회 교섭단체
                대표의원의 행정비서관, 국회 교섭단체의
                정책연구위원·행정보조요원과 「고등교육법」 제14조(교직원의
                구분)제1항·제2항에 따른 교원은 제외한다.
                <br />
                2. 「고등교육법」 제14조제1항·제2항에 따른 교원을 제외한
                사립학교의 교원
                <br />
                3. 법령의 규정에 의하여 공무원의 신분을 가진 자 ②대한민국 국민이
                아닌 자는 당원이 될 수 없다.
              </p>
              <br />
              <p>
                『개인정보 보호법』, 『정보통신망법』 규정에 따라
                국민주권당(준)은 가입에 필요한 개인정보의 항목, 개인정보의 수집
                및 이용 목적 등을 안내드리오니 동의하여 주시기 바랍니다.
              </p>
              <br />
              <p>
                1. 수집항목
                <br />
                - 이름, 주소, 생년월일, 성별, 직업, 전화번호, 전자서명*
                <br />
                (*전자서명법 제 3조(전자서명의 효력) ① 전자서명은 전자적
                형태라는 이유만으로 서명, 서명날인 또는 기명날인으로서의 효력이
                부인되지 아니한다. ② 법령의 규정 또는 당사자 간의 약정에 따라
                서명, 서명날인 또는 기명날인의 방식으로 전자서명을 선택한 경우
                그 전자서명은 서명, 서명날인 또는 기명날인으로서의 효력을
                가진다.)
              </p>
              <br />
              <p>
                2. 수집 및 목적
                <br />
                - 국민주권당(준)의 창당준비위원회 가입원서를 받음
                <br />- 국민주권당(준)의 창당 등록과 등록 후 정당 활동에 따른
                문자 전송 및 소통에 필요한 사항
              </p>
              <br />
              <p>
                3. 개인정보의 보유 및 기간
                <br />- 개인정보의 수집 및 목적이 달성되면 지체 없이 파기
              </p>
              <br />
              <p>
                4. 국민주권당(준) 개인정보 보호 책임자
                <br />- 국민주권당(준) 사무국
                <br />- 010-9762-0813 (문자전용)
              </p>
            </UseAgreementContent>
          </UseAgreementWrapper>
          <AgreeCheckbox all>
            <CheckboxContainer>
              <input
                className="acc-box"
                type="checkbox"
                ref={useAgreementInputRef}
                onChange={handleUseAgreementChange}
              />
              <div className="acc-check">
                <FormCheckIcon />
              </div>
            </CheckboxContainer>
            모든 약관에 동의합니다. (필수)
          </AgreeCheckbox>
          {/* <label>
            <LayoutNoti>
              <NotiIcon />
              <NotificationText>
                발기인 참여 회비(1만 원 이상) 납부를 부탁드립니다. 소중한 회비는
                발기인 대회 및 창당 활동에 사용할 계획입니다.
                <br />
                국민은행 817201-04-168778 촛불전진
              </NotificationText>
            </LayoutNoti>
          </label> */}
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
