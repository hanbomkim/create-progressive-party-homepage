import { ChangeEvent, useRef } from "react";

export const useInput = <Value = string>(
  value: "value" | "checked",
  defaultValue?: Value
) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputValueRef = useRef<Value | undefined>(defaultValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    inputValueRef.current = e.currentTarget[value] as Value;
  };

  return {
    ref: inputRef,
    onChange,
    valueRef: inputValueRef,
  };
};
