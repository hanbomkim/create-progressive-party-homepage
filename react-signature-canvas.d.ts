// react-signature-canvas.d.ts

import * as React from "react";
import SignaturePad = require("signature_pad");

export interface ReactSignatureCanvasProps
  extends SignaturePad.SignaturePadOptions {
  canvasProps?: React.CanvasHTMLAttributes<HTMLCanvasElement> | undefined;
  clearOnResize?: boolean | undefined;
  onEnd?: () => void; // onEnd 함수 추가
  onMouseDown?: () => void; // onMouseDown 함수 추가
  onMouseUp?: () => void; // onMouseUp 함수 추가
}

declare class ReactSignatureCanvas extends React.Component<ReactSignatureCanvasProps> {
  on: SignaturePad["on"];

  off: SignaturePad["off"];

  clear: SignaturePad["clear"];

  isEmpty: SignaturePad["isEmpty"];

  fromDataURL: SignaturePad["fromDataURL"];

  toDataURL: SignaturePad["toDataURL"];

  fromData: SignaturePad["fromData"];

  toData: SignaturePad["toData"];

  getCanvas(): HTMLCanvasElement;

  getTrimmedCanvas(): HTMLCanvasElement;

  getSignaturePad(): SignaturePad;
}

export default ReactSignatureCanvas;
