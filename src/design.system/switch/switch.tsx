import React from "react";
import { Text } from "../text/text";
import {
  SwitchButtonWrapper,
  SwitchInputWrapper,
  SwitchToggleWrapper,
} from "./switch.styled";

interface SwitchProps {
  toggle: boolean;
  handleToggleChange: () => void;
  style?: object;
  label?: string;
}

export function Switch({
  toggle,
  handleToggleChange,
  style,
  label = "Select All",
}: SwitchProps) {
  return (
    <SwitchInputWrapper>
      <SwitchToggleWrapper
        active={toggle || undefined}
        onClick={handleToggleChange}
      >
        <SwitchButtonWrapper disabled={toggle || undefined} />
      </SwitchToggleWrapper>
      {label && <Text size={14}>{label}</Text>}
    </SwitchInputWrapper>
  );
}
