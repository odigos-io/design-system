import React, { useState, FC, ChangeEvent } from "react";
import { RadioButtonContainer, RadioButtonBorder } from "./radio.styled";
import { Text } from "@/design.system/text/text";
import Checked from "../../assets/icons/checked-radio.svg";
interface RadioButtonProps {
  label?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton: FC<RadioButtonProps> = ({
  label = "",
  onChange,
  value,
}) => {
  function handleChange() {
    onChange && onChange({} as ChangeEvent<HTMLInputElement>);
  }

  return (
    <RadioButtonContainer>
      <div onClick={handleChange}>
        {value ? <Checked width={25} height={25} /> : <RadioButtonBorder />}
      </div>
      <Text>{label}</Text>
    </RadioButtonContainer>
  );
};
