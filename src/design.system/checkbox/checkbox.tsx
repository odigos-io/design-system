import React from 'react';
import { Text } from '../text/text';
import { CheckboxWrapper, CheckboxItem } from './checkbox.styled';
import Checked from '../../assets/icons/checkbox-rect.svg';

interface CheckboxProps {
  value: boolean;
  onChange: () => void;
  label?: string;
  disabled?: boolean;
}

export function Checkbox({
  onChange,
  value,
  label = '',
  disabled = false,
  ...rest
}: CheckboxProps) {
  return (
    <CheckboxWrapper
      disabled={disabled || undefined}
      onClick={onChange}
      {...rest}
    >
      {value ? <Checked /> : <CheckboxItem />}
      <Text size={14}>{label}</Text>
    </CheckboxWrapper>
  );
}
