import React from "react";
import { SearchInputWrapper, StyledSearchInput } from "./search.input.styled";
import Glass from "@/assets/icons/glass.svg";
import X from "@/assets/icons/X.svg";

import { SETUP } from "@/utils/constants";
interface KeyvalSearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
  loading?: boolean;
  containerStyle?: any;
  inputStyle?: any;
  showClear?: boolean;
}

export function KeyvalSearchInput({
  placeholder = SETUP.MENU.SEARCH_PLACEHOLDER,
  value = "",
  onChange = () => {},
  loading = false,
  containerStyle = {},
  inputStyle = {},
  showClear = true,
}: KeyvalSearchInputProps) {
  const clear = value
    ? () =>
        onChange({
          target: {
            value: "",
          },
        })
    : null;

  return (
    <SearchInputWrapper
      active={!!value || undefined}
      style={{ ...containerStyle }}
    >
      <Glass />
      <StyledSearchInput
        style={{ ...inputStyle }}
        value={value}
        active={!!value || undefined}
        placeholder={placeholder}
        onChange={onChange}
      />

      {showClear && <X onClick={clear} style={{ cursor: "pointer" }} />}
    </SearchInputWrapper>
  );
}
