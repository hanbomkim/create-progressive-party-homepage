import { useState } from "react";

import { ArrowIcon } from "@/styles/svg/Arrow";
import {
  Option,
  OptionWrap,
  Selectbox,
  SelectboxWrapper,
  ToggleBtn,
} from "./Styled";

type changPops = {
  label: string;
  value: number;
};

type SelectProps = {
  value: {
    label: string;
    value: number;
  };
  options: {
    label: string;
    value: number;
  }[];
  onChange?: (value: changPops) => void;
};

const Select = (props: SelectProps) => {
  const [isToggle, setIsToggle] = useState(false);
  const { value, options, onChange } = props;

  const handleSelect = (newOption) => {
    onChange(newOption);
    setIsToggle(!isToggle);
  };

  return (
    <SelectboxWrapper>
      <ToggleBtn onClick={() => setIsToggle(!isToggle)}>
        {value.label}
        <ArrowIcon />
      </ToggleBtn>
      <Selectbox hide={!isToggle}>
        {options.map((item) => (
          <OptionWrap key={item.value} onClick={() => handleSelect(item)}>
            <Option>{item.label}</Option>
          </OptionWrap>
        ))}
      </Selectbox>
    </SelectboxWrapper>
  );
};

export default Select;
