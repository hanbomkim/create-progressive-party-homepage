import { ForwardedRef, forwardRef } from "react";

type OptionProps = {
  value: string;
  options: {
    label: string;
    value: string;
  }[];
  onChange?: (value: string) => void;
};

const Option = (props: OptionProps, ref: ForwardedRef<HTMLSelectElement>) => {
  const { value, onChange, options } = props;

  return (
    <>
      <ul>
        {options.map(({ label, value }) => (
          <li key={value} value={value}>
            {label}
          </li>
        ))}
      </ul>
    </>
  );
};

export default forwardRef(Option);
