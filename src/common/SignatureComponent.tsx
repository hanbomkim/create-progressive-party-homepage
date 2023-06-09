import { Button } from "@/components/Button";
import {
  NotiText,
  SigPreview,
  SignatureWrapper,
} from "@/components/InviteForm/Styled";
import React from "react";
import {
  default as SignatureCanvas,
  default as SignaturePad,
} from "react-signature-canvas";

type SignaturePadProps = {
  padRef: React.RefObject<SignatureCanvas | null>;
}; //타입 설정

export const SignatureComponent: React.FC<SignaturePadProps> = ({ padRef }) => {
  const clear = () => {
    padRef.current?.clear();
  };

  const trim = () => {
    const url = padRef.current?.getTrimmedCanvas().toDataURL("image/png");
  };

  return (
    <>
      <SignatureWrapper>
        <NotiText>반드시 본인의 이름을 정자로 기재해주세요.</NotiText>
        <SignaturePad
          clearOnResize={false}
          ref={padRef}
          canvasProps={{ className: "sigCanvas" }}
        />
      </SignatureWrapper>
      <SigPreview>
        <button onClick={trim}></button>
        <Button onClick={clear}>다시 서명하기</Button>
      </SigPreview>
    </>
  );
};
