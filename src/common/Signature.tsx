import { NotiText } from "@/components/InviteForm/Styled";
import { useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import styled from "styled-components";

const CanvasWrapper = styled.div`
  position: relative;
  width: 100%;
  border-style: solid;
  border-color: #e2e5ed;
  border-radius: 4px;
  border-width: 1px;
`;
const SignatureWrap = styled.div`
  text-align: center;
`;
const CanvasResetWrapper = styled.div`
  text-align: center;
`;

export const Signature = ({
  forwardedRef,
}: {
  forwardedRef: React.RefObject<SignatureCanvas>;
}) => {
  const [isSignatureWritten, setIsSignatureWritten] = useState(false);
  const convertDataUrlToFile = () => {
    const dataURL = forwardedRef.current.toDataURL("image/png");
    // const decodedURL = dataURL.replace(/^data:image\/\w+;base64,/, "");
    // const buf = Buffer.from(decodedURL, "base64");
    // const blob = new Blob([buf], { type: "image/png" });
    // return new File([blob], `${name}.png`, { type: "image/png" });
  };

  const handleCancel = () => {
    if (forwardedRef.current && isSignatureWritten) {
      forwardedRef.current.clear();
      setIsSignatureWritten(false);
    }
  };
  const handleDraw = () => {
    setIsSignatureWritten(true);
  };

  return (
    <>
      <CanvasWrapper>
        <NotiText>반드시 본인의 성명을 정자로 기재해주세요.</NotiText>
        <SignatureWrap>
          <SignatureCanvas
            canvasProps={{
              className: "signature-canvas",
              height: 111,
              width: 420,
            }}
            ref={forwardedRef}
            // onEnd={handleDraw}
          />
        </SignatureWrap>
        {/* <CanvasResetWrapper>
          <Button
            style={{
              width: "25%",
              height: "43px",
            }}
            onClick={handleCancel}
          >
            다시 작성하기
          </Button>
        </CanvasResetWrapper> */}
      </CanvasWrapper>
    </>
  );
};
