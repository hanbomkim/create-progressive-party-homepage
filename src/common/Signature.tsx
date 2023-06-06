import { NotiText } from "@/components/InviteForm/Styled";
import styled from "@emotion/styled";
import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
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

export const Signature: React.FC = () => {
  const signatureCanvasRef = useRef<SignatureCanvas>(null);
  const [isSignatureEmpty, setIsSignatureEmpty] = useState(true);

  const handleReset = () => {
    if (signatureCanvasRef.current) {
      signatureCanvasRef.current.clear();
      setIsSignatureEmpty(true);
    }
  };

  const handleSave = () => {
    if (signatureCanvasRef.current) {
      const signatureImage = signatureCanvasRef.current.toDataURL("image/png");
      // 서명 이미지를 저장하거나 다른 작업을 수행할 수 있습니다.
      console.log(signatureImage);
    }
  };

  const handleBegin = () => {
    setIsSignatureEmpty(false);
  };

  // const [isSignatureWritten, setIsSignatureWritten] = useState(false);
  // const convertDataUrlToFile = () => {
  //   const dataURL = forwardedRef.current.toDataURL("image/png");
  //   // const decodedURL = dataURL.replace(/^data:image\/\w+;base64,/, "");
  //   // const buf = Buffer.from(decodedURL, "base64");
  //   // const blob = new Blob([buf], { type: "image/png" });
  //   // return new File([blob], `${name}.png`, { type: "image/png" });
  // };

  // const handleCancel = () => {
  //   if (forwardedRef.current && isSignatureWritten) {
  //     forwardedRef.current.clear();
  //     setIsSignatureWritten(false);
  //   }
  // };
  // const handleDraw = () => {
  //   setIsSignatureWritten(true);
  // };

  return (
    <>
      <CanvasWrapper>
        <NotiText>반드시 본인의 성명을 정자로 기재해주세요.</NotiText>
        <SignatureWrap>
          <SignatureCanvas
            ref={signatureCanvasRef}
            canvasProps={{ width: 420, height: 111 }}
            onBegin={handleBegin}
          />
        </SignatureWrap>
        <button onClick={handleReset} disabled={isSignatureEmpty}>
          리셋
        </button>
        <button onClick={handleSave} disabled={isSignatureEmpty}>
          저장
        </button>
      </CanvasWrapper>
    </>
  );
};
