import React from "react";
import { Text } from "../text/text";
import { CheckboxWrapper, CheckboxItem } from "./checkbox.styled";

interface CheckboxProps {
  value: boolean;
  onChange: () => void;
  label?: string;
  disabled?: boolean;
}

export function Checkbox({
  onChange,
  value,
  label = "",
  disabled = false,
}: CheckboxProps) {
  return (
    <CheckboxWrapper disabled={disabled || undefined} onClick={onChange}>
      {value ? <div>Test</div> : <CheckboxItem />}
      <Text size={14}>{label}</Text>
    </CheckboxWrapper>
  );
}
