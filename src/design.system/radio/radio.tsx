import React, { useState, FC, ChangeEvent } from 'react';
import { RadioButtonContainer, RadioButtonBorder } from './radio.styled';
import { Text } from '@/design.system/text/text';
import Checked from '../../assets/icons/checked-radio.svg';
interface RadioButtonProps {
  label?: string;
  value?: string | boolean;
  size?: number;
  textStyles?: React.CSSProperties;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton: FC<RadioButtonProps> = ({
  label = '',
  onChange,
  value,
  size = 25,
  textStyles = {},
}) => {
  function handleChange() {
    onChange && onChange({} as ChangeEvent<HTMLInputElement>);
  }

  return (
    <RadioButtonContainer>
      <div
        onClick={handleChange}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        {value ? (
          <Checked width={size} height={size} />
        ) : (
          <RadioButtonBorder style={{ width: size, height: size }} />
        )}
      </div>
      <Text {...textStyles}>{label}</Text>
    </RadioButtonContainer>
  );
};
