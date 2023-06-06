import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";

import { InputRoot } from "./Styled";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <>
      <InputRoot
        ref={ref}
        type="text"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        {...props}
      />
    </>
  );
};

export default forwardRef(Input);
