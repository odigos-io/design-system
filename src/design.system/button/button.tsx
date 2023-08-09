import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { StyledButton, ButtonContainer } from "./button.styled";

interface ButtonProps {
  // Additional custom props if needed
  variant?: "primary" | "secondary";
  children: any;
  onClick?: () => void;
  style?: object;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  children,
  style,
  onClick,
  disabled,
}) => {
  return (
    <ButtonContainer disabled={disabled}>
      <StyledButton disabled={disabled} onClick={onClick} style={{ ...style }}>
        {children}
      </StyledButton>
    </ButtonContainer>
  );
};
