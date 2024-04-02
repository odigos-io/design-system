import React, { ButtonHTMLAttributes, FC } from 'react';
import { StyledButton, ButtonContainer } from './button.styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Additional custom props if needed
  variant?: string;
  style?: object;
}

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  children,
  style,
  disabled,
  type = 'button',
  ...rest
}) => {
  return (
    <ButtonContainer variant={variant} disabled={disabled}>
      <StyledButton
        type={type}
        variant={variant}
        disabled={disabled}
        style={{ ...style }}
        {...rest}
      >
        {children}
      </StyledButton>
    </ButtonContainer>
  );
};
