import React from "react";
import {
  default as SignatureCanvas,
  default as SignaturePad,
} from "react-signature-canvas";

type SignaturePadProps = {
  padRef: React.RefObject<SignatureCanvas | null>;
};

export const SignatureComponent: React.FC<SignaturePadProps> = ({ padRef }) => {
  const clear = () => {
    padRef.current?.clear();
  };

  const trim = () => {
    const url = padRef.current?.getTrimmedCanvas().toDataURL("image/png");
  };

  return (
    <div>
      <SignaturePad ref={padRef} canvasProps={{ className: "sigCanvas" }} />
      <div className="sigPreview">
        <button onClick={trim}></button>
        <button onClick={clear}>Clear</button>
      </div>
    </div>
  );
};
