import React, { ReactNode, MouseEvent } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

const Button = ({ children, onClick, disabled }: ButtonProps) => (
  <button className="button" onClick={onClick} disabled={disabled}>
    {children}
  </button>
);

export default Button;
