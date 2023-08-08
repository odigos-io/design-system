import React from "react";
import { SearchInputWrapper, StyledSearchInput } from "./search.input.styled";
import Glass from "@/assets/icons/glass.svg";
import X from "@/assets/icons/X.svg";

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
  loading?: boolean;
  containerStyle?: any;
  inputStyle?: any;
  showClear?: boolean;
}

export function SearchInput({
  placeholder = "Search",
  value = "",
  onChange = () => {},
  loading = false,
  containerStyle = {},
  inputStyle = {},
  showClear = true,
}: SearchInputProps) {
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
