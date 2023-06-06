import { ButtonHTMLAttributes } from 'react';

import { ButtonRoot } from './Styled';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  return <ButtonRoot {...props} />;
};

export default Button;
