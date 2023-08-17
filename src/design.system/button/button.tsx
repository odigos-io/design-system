import React, { FC } from 'react';
import { StyledButton, ButtonContainer } from './button.styled';

interface ButtonProps {
  // Additional custom props if needed
  variant?: 'primary' | 'secondary';
  children: JSX.Element | JSX.Element[];
  onClick?: () => void;
  style?: object;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  variant = 'secondary',
  children,
  style,
  onClick,
  disabled,
}) => {
  return (
    <ButtonContainer variant={variant} disabled={disabled}>
      <StyledButton
        variant={variant}
        disabled={disabled}
        onClick={onClick}
        style={{ ...style }}
      >
        {children}
      </StyledButton>
    </ButtonContainer>
  );
};
