// src/design.system/radio/radio.tsx
import React3 from "react";

// src/design.system/radio/radio.styled.tsx
import styled from "styled-components";
var RadioButtonContainer = styled.label`
  width: 24px;
  height: 24px;
  color: #303030;
  font-size: 14px;
  font-weight: 400;
  margin-right: 7px;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
var RadioButtonBorder = styled.span`
  cursor: pointer;
  width: 23px;
  height: 23px;
  border: ${({ theme: theme2 }) => `solid 2px ${theme2.colors.light_grey}`};
  border-radius: 50%;
  display: inline-block;
  position: relative;
`;

// src/design.system/text/text.tsx
import React2 from "react";

// src/design.system/text/text.styled.tsx
import styled2 from "styled-components";
var TextWrapper = styled2.p`
  color: ${({ theme: theme2 }) => theme2.text.white};
  margin: 0;
  font-family: ${({ theme: theme2 }) => theme2.font_family.primary}, sans-serif;
  font-size: 16px;
  font-weight: 400;
`;

// src/design.system/text/text.tsx
function KeyvalText({
  children,
  color,
  style,
  weight,
  size
}) {
  return /* @__PURE__ */ React2.createElement(
    TextWrapper,
    {
      style: {
        fontWeight: weight,
        color,
        fontSize: size,
        ...style
      }
    },
    children
  );
}

// src/assets/icons/checked-radio.svg
var checked_radio_default = "./checked-radio-QJNJNSOQ.svg";

// src/design.system/radio/radio.tsx
var KeyvalRadioButton = ({
  label = "",
  onChange,
  value
}) => {
  function handleChange() {
    onChange && onChange({});
  }
  return /* @__PURE__ */ React3.createElement(RadioButtonContainer, null, /* @__PURE__ */ React3.createElement("div", { onClick: handleChange }, value ? /* @__PURE__ */ React3.createElement(checked_radio_default, { width: 25, height: 25 }) : /* @__PURE__ */ React3.createElement(RadioButtonBorder, null)), /* @__PURE__ */ React3.createElement(KeyvalText, null, label));
};

// src/design.system/button/button.tsx
import React4 from "react";

// src/design.system/button/button.styled.tsx
import styled3 from "styled-components";
var ButtonContainer = styled3.div`
  :hover {
    background: ${({ theme: theme2, disabled }) => disabled ? theme2.colors.blue_grey : theme2.colors.torquiz_light};
  }
  p {
    cursor: ${({ disabled }) => disabled ? "not-allowed !important" : "pointer !important"};
  }
`;
var StyledButton = styled3.button`
  display: flex;
  padding: 8px 16px;
  align-items: center;
  border-radius: 8px;
  border: none;
  width: 100%;
  height: 100%;
  cursor: ${({ disabled }) => disabled ? "not-allowed !important" : "pointer !important"};
  background: ${({ theme: theme2, disabled }) => disabled ? theme2.colors.blue_grey : theme2.colors.secondary};
  justify-content: center;
  align-items: center;
`;

// src/design.system/button/button.tsx
var KeyvalButton = ({
  variant = "primary",
  children,
  style,
  onClick,
  disabled
}) => {
  return /* @__PURE__ */ React4.createElement(ButtonContainer, { disabled }, /* @__PURE__ */ React4.createElement(StyledButton, { disabled, onClick, style: { ...style } }, children));
};

// src/design.system/float.box/float.box.tsx
import React5 from "react";
import styled4 from "styled-components";
var FloatBoxBorder = styled4.div`
  background: radial-gradient(
        circle at 100% 100%,
        #ffffff 0,
        #ffffff 3px,
        transparent 3px
      )
      0% 0%/8px 8px no-repeat,
    radial-gradient(circle at 0 100%, #ffffff 0, #ffffff 3px, transparent 3px)
      100% 0%/8px 8px no-repeat,
    radial-gradient(circle at 100% 0, #ffffff 0, #ffffff 3px, transparent 3px)
      0% 100%/8px 8px no-repeat,
    radial-gradient(circle at 0 0, #ffffff 0, #ffffff 3px, transparent 3px) 100%
      100%/8px 8px no-repeat,
    linear-gradient(#ffffff, #ffffff) 50% 50% / calc(100% - 10px)
      calc(100% - 16px) no-repeat,
    linear-gradient(#ffffff, #ffffff) 50% 50% / calc(100% - 16px)
      calc(100% - 10px) no-repeat,
    linear-gradient(0deg, transparent 0%, #0ee6f3 100%),
    radial-gradient(
      78.09% 72.18% at 100% -0%,
      rgba(150, 242, 255, 0.4) 0%,
      rgba(150, 242, 255, 0) 61.91%
    ),
    linear-gradient(180deg, #2e4c55 0%, #303355 100%);
  border-radius: 8px;
  padding: 1px;
  width: 32px;
  height: 32px;
`;
var FloatBoxWrapper = styled4.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
      78.09% 72.18% at 100% -0%,
      rgba(150, 242, 255, 0.4) 0%,
      rgba(150, 242, 255, 0) 61.91%
    ),
    linear-gradient(180deg, #2e4c55 0%, #303355 100%);
`;
function FloatBox({ children, style = {} }) {
  return /* @__PURE__ */ React5.createElement(FloatBoxBorder, null, /* @__PURE__ */ React5.createElement(FloatBoxWrapper, { style: { ...style } }, children));
}

// src/design.system/card/card.tsx
import React6 from "react";

// src/design.system/card/card.styled.tsx
import styled5 from "styled-components";
var CardContainer = styled5.div`
  display: inline-flex;
  position: relative;
  width: 272px;
  height: 204px;
  flex-direction: column;
  border-radius: 24px;
  border: ${({ selected, theme: theme2 }) => `1px solid ${selected ? theme2.colors.secondary : theme2.colors.dark_blue}`};
  background: ${({ theme: theme2 }) => theme2.colors.dark};
`;

// src/design.system/card/card.tsx
function KeyvalCard({ children, focus = false }) {
  return /* @__PURE__ */ React6.createElement(CardContainer, { selected: focus || void 0 }, children);
}

// src/design.system/tag/tag.tsx
import React7 from "react";
import styled6 from "styled-components";
var TagWrapper = styled6.div`
  display: flex;
  padding: 4px 8px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 10px;
`;
function KeyvalTag({ title = "", color = "#033869" }) {
  return /* @__PURE__ */ React7.createElement(TagWrapper, { style: { backgroundColor: color } }, /* @__PURE__ */ React7.createElement(KeyvalText, { weight: 500, size: 13, color: "#CCD0D2" }, title));
}

// src/design.system/tap/tap.tsx
import React8 from "react";
import styled7 from "styled-components";
var TapWrapper = styled7.div`
  display: flex;
  padding: 8px 14px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 16px;
  border: ${({ theme: theme2, selected }) => `1px solid ${selected ? "transparent" : theme2.colors.dark_blue}`};
  background: ${({ theme: theme2, selected }) => selected ? theme2.colors.dark_blue : "transparent"};
`;
function KeyvalTap({
  title = "",
  tapped,
  children,
  style,
  onClick
}) {
  return /* @__PURE__ */ React8.createElement(
    TapWrapper,
    {
      onClick,
      selected: tapped,
      style: { ...style, cursor: onClick ? "pointer" : "auto" }
    },
    children,
    /* @__PURE__ */ React8.createElement(
      KeyvalText,
      {
        weight: 400,
        size: 14,
        color: tapped ? "#CCD0D2" : "#8B92A5",
        style: { cursor: onClick ? "pointer" : "auto" }
      },
      title
    )
  );
}

// src/design.system/drop.down/drop.down.tsx
import React10, { useEffect as useEffect2, useRef, useState as useState2 } from "react";

// src/assets/icons/expand-arrow.svg
var expand_arrow_default = "./expand-arrow-EVPYUWXL.svg";

// src/design.system/drop.down/drop.down.styled.tsx
import styled8 from "styled-components";
var DropdownWrapper = styled8.div`
  position: relative;
  z-index: 9999;
  width: 100%;
  padding: 11px 4px;
  border-radius: 8px;
  cursor: pointer;
  border: ${({ selected, theme: theme2 }) => `1px solid  ${selected ? theme2.colors.white : theme2.colors.blue_grey}`};
  background: ${({ theme: theme2 }) => theme2.colors.dark};

  .dropdown-arrow {
    transform: rotate(0deg);
    transition: all 0.2s ease-in-out;
  }

  .dropdown-arrow.open {
    transform: rotate(180deg);
  }
`;
var DropdownHeader = styled8.div`
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme: theme2 }) => theme2.text.white};
  font-size: 14px;
  font-family: ${({ theme: theme2 }) => theme2.font_family.primary}, sans-serif;
  font-weight: 400;
`;
var DropdownBody = styled8.div`
  position: relative;
  z-index: 9999;
  display: flex;
  width: 100%;
  padding: 11px 4px;
  flex-direction: column;
  border-radius: 8px;
  border: ${({ theme: theme2 }) => `1px solid ${theme2.colors.blue_grey}`};
  background: ${({ theme: theme2 }) => theme2.colors.dark};
  margin-top: 5px;
`;
var DropdownListWrapper = styled8.div`
  position: relative;
  z-index: 100;
  width: 100%;
  max-height: 270px;
  overflow-y: scroll;
  scrollbar-width: none;
  :hover {
    background: ${({ theme: theme2 }) => theme2.colors.dark_blue};
  }
`;
var DropdownItem = styled8.div`
  display: flex;
  padding: 7px 12px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  p {
    cursor: pointer !important;
  }
`;

// src/design.system/search.input/search.input.tsx
import React9 from "react";

// src/design.system/search.input/search.input.styled.tsx
import styled9 from "styled-components";
var SearchInputWrapper = styled9.div`
  position: relative;
  display: flex;
  width: 340px;
  padding: 9px 13px;
  gap: 10px;
  border-radius: 8px;
  border: ${({ active, theme: theme2 }) => `1px solid ${active ? theme2.colors.white : theme2.colors.blue_grey}`};
  background: ${({ active, theme: theme2 }) => `${active ? theme2.colors.dark : theme2.colors.light_dark}`};
  &:hover {
    border: ${({ theme: theme2 }) => `solid 1px ${theme2.colors.white}`};
  }
`;
var StyledSearchInput = styled9.input`
  width: 85%;
  background: ${({ active, theme: theme2 }) => `${active ? theme2.colors.dark : "transparent"}`};
  border: none;
  outline: none;
  color: ${({ active, theme: theme2 }) => `${active ? theme2.colors.white : theme2.text.grey}`};
  font-size: 14px;
  font-family: ${({ theme: theme2 }) => theme2.font_family.primary}, sans-serif;
  font-weight: 400;
  &:focus {
    color: ${({ theme: theme2 }) => `solid 1px ${theme2.colors.white}`};
  }
`;

// src/assets/icons/glass.svg
var glass_default = "./glass-BCM6GGHZ.svg";

// src/assets/icons/X.svg
var X_default = "./X-H3IN6ZOP.svg";

// src/design.system/search.input/search.input.tsx
function KeyvalSearchInput({
  placeholder = "Search",
  value = "",
  onChange = () => {
  },
  loading = false,
  containerStyle = {},
  inputStyle = {},
  showClear = true
}) {
  const clear = value ? () => onChange({
    target: {
      value: ""
    }
  }) : null;
  return /* @__PURE__ */ React9.createElement(
    SearchInputWrapper,
    {
      active: !!value || void 0,
      style: { ...containerStyle }
    },
    /* @__PURE__ */ React9.createElement(glass_default, null),
    /* @__PURE__ */ React9.createElement(
      StyledSearchInput,
      {
        style: { ...inputStyle },
        value,
        active: !!value || void 0,
        placeholder,
        onChange
      }
    ),
    showClear && /* @__PURE__ */ React9.createElement(X_default, { onClick: clear, style: { cursor: "pointer" } })
  );
}

// src/hooks/useOnClickOutside.tsx
import { useEffect } from "react";
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      const el = ref?.current;
      if (el?.contains(event?.target))
        return null;
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

// src/design.system/drop.down/drop.down.tsx
var SELECTED_ITEM = "Select item";
var CONTAINER_STYLE = {
  width: "90%",
  border: "none",
  background: "transparent"
};
var SEARCH_INPUT_STYLE = { background: "transparent" };
function KeyvalDropDown({
  data = [],
  onChange,
  childComp,
  width = 260,
  value
}) {
  const [isOpen, setOpen] = useState2(false);
  const [selectedItem, setSelectedItem] = useState2(value || null);
  const [isHover, setHover] = useState2(false);
  const [searchFilter, setSearchFilter] = useState2("");
  const containerRef = useRef(null);
  useEffect2(() => {
    value && setSelectedItem(value);
  }, [value]);
  useOnClickOutside(containerRef, () => setOpen(false));
  const toggleDropdown = () => setOpen(!isOpen);
  const handleItemClick = (item) => {
    onChange(item);
    setSelectedItem(item);
    setSearchFilter("");
    setOpen(false);
  };
  function getDropdownList() {
    return searchFilter ? data?.filter(
      (item) => item?.label.toLowerCase().includes(searchFilter.toLowerCase())
    ) : data;
  }
  return /* @__PURE__ */ React10.createElement("div", { style: { height: 37, width }, ref: containerRef }, /* @__PURE__ */ React10.createElement(
    DropdownWrapper,
    {
      selected: isHover,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      onClick: toggleDropdown
    },
    /* @__PURE__ */ React10.createElement(DropdownHeader, null, selectedItem ? selectedItem.label : SELECTED_ITEM, /* @__PURE__ */ React10.createElement(expand_arrow_default, { className: `dropdown-arrow ${isOpen && "open"}` }))
  ), isOpen && /* @__PURE__ */ React10.createElement(DropdownBody, null, /* @__PURE__ */ React10.createElement(
    KeyvalSearchInput,
    {
      value: searchFilter,
      onChange: (e) => setSearchFilter(e.target.value),
      placeholder: "Search",
      containerStyle: CONTAINER_STYLE,
      inputStyle: SEARCH_INPUT_STYLE,
      showClear: false
    }
  ), /* @__PURE__ */ React10.createElement(DropdownListWrapper, null, getDropdownList().map((item) => /* @__PURE__ */ React10.createElement(
    DropdownItem,
    {
      key: item.id,
      onClick: (e) => handleItemClick(item)
    },
    /* @__PURE__ */ React10.createElement(KeyvalText, null, item.label),
    /* @__PURE__ */ React10.createElement("div", null, childComp)
  )))));
}

// src/design.system/switch/switch.tsx
import React11 from "react";

// src/design.system/switch/switch.styled.tsx
import styled10 from "styled-components";
var SwitchInputWrapper = styled10.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
var SwitchToggleWrapper = styled10.div`
  position: relative;
  width: 30px;
  height: 16px;
  background-color: ${({ active, theme: theme2 }) => active ? theme2.colors.secondary : theme2.text.grey};
  cursor: pointer;
  user-select: none;
  border-radius: 20px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
var SwitchButtonWrapper = styled10.span`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 14px;
  height: 14px;
  cursor: pointer;
  color: #fff;
  background-color: ${({ disabled, theme: theme2 }) => !disabled ? theme2.text.light_grey : theme2.text.white};
  box-shadow: 0 2px 4px rgb(0, 0, 0, 0.25);
  border-radius: 100%;
  position: absolute;
  transition: all 0.2s ease;
  left: ${({ disabled }) => !disabled ? 2 : 18}px;
`;

// src/design.system/switch/switch.tsx
function KeyvalSwitch({
  toggle,
  handleToggleChange,
  style,
  label = "Select All"
}) {
  return /* @__PURE__ */ React11.createElement(SwitchInputWrapper, null, /* @__PURE__ */ React11.createElement(
    SwitchToggleWrapper,
    {
      active: toggle || void 0,
      onClick: handleToggleChange
    },
    /* @__PURE__ */ React11.createElement(SwitchButtonWrapper, { disabled: toggle || void 0 })
  ), label && /* @__PURE__ */ React11.createElement(KeyvalText, { size: 14 }, label));
}

// src/design.system/checkbox/checkbox.tsx
import React12 from "react";

// src/design.system/checkbox/checkbox.styled.tsx
import { styled as styled11 } from "styled-components";
var CheckboxWrapper = styled11.div`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: ${({ disabled }) => disabled ? "not-allowed" : "pointer"};
  pointer-events: ${({ disabled }) => disabled ? "none" : "auto"};
  opacity: ${({ disabled }) => disabled ? "0.5" : "1"};
`;
var Checkbox = styled11.span`
  width: 16px;
  height: 16px;
  border: ${({ theme: theme2 }) => `solid 1px ${theme2.colors.light_grey}`};
  border-radius: 4px;
`;

// src/assets/icons/checkbox-rect.svg
var checkbox_rect_default = "./checkbox-rect-MLG44VTN.svg";

// src/design.system/checkbox/checkbox.tsx
function KeyvalCheckbox({
  onChange,
  value,
  label = "",
  disabled = false
}) {
  return /* @__PURE__ */ React12.createElement(CheckboxWrapper, { disabled: disabled || void 0, onClick: onChange }, value ? /* @__PURE__ */ React12.createElement(checkbox_rect_default, null) : /* @__PURE__ */ React12.createElement(Checkbox, null), /* @__PURE__ */ React12.createElement(KeyvalText, { size: 14 }, label));
}

// src/design.system/selected.counter/selected.counter.tsx
import React13 from "react";

// src/design.system/selected.counter/selected.counter.styled.tsx
import styled12 from "styled-components";
var SelectedCounterWrapper = styled12.div`
  display: flex;
  padding: 4px;
  align-items: center;
  gap: 4px;
  border-radius: 14px;
  background: ${({ theme: theme2 }) => theme2.colors.dark_blue};
`;

// src/assets/icons/check.svg
var check_default = "./check-RBBYOT2T.svg";

// src/design.system/selected.counter/selected.counter.tsx
function KeyvalSelectedCounter({
  total,
  selected
}) {
  return /* @__PURE__ */ React13.createElement(SelectedCounterWrapper, null, selected !== 0 && /* @__PURE__ */ React13.createElement(check_default, null), /* @__PURE__ */ React13.createElement(KeyvalText, { size: 13, weight: 500 }, `${selected} / ${total}`));
}

// src/design.system/link/link.tsx
import React14 from "react";
import { styled as styled13 } from "styled-components";
var LinkContainer = styled13.div`
  cursor: pointer;
  .p {
    cursor: pointer !important;
  }
`;
function KeyvalLink({ value, onClick }) {
  return /* @__PURE__ */ React14.createElement(LinkContainer, { onClick }, /* @__PURE__ */ React14.createElement(KeyvalText, { color: "#0EE6F3" }, value));
}

// src/design.system/tooltip/tooltip.tsx
import React15, { useState as useState3 } from "react";

// src/assets/icons/question.svg
var question_default = "./question-LLN6JRUE.svg";

// src/design.system/tooltip/tooltip.styled.tsx
import styled14 from "styled-components";
var TooltipWrapper = styled14.div`
  display: inline-block;
  position: relative;
  display: flex;
`;
var TooltipContentWrapper = styled14.div`
  position: absolute;
  max-width: 150px;
  width: min(100px, 250px);
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: ${({ theme: theme2 }) => theme2.colors.dark};
  box-shadow: 0px 6px 13px 0px rgba(0, 0, 0, 0.3);
`;

// src/design.system/tooltip/tooltip.tsx
function KeyvalTooltip(props) {
  let timeout;
  const [active, setActive] = useState3(false);
  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };
  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };
  return /* @__PURE__ */ React15.createElement(TooltipWrapper, { onMouseEnter: showTip, onMouseLeave: hideTip }, active && /* @__PURE__ */ React15.createElement(TooltipContentWrapper, null, /* @__PURE__ */ React15.createElement(KeyvalText, { size: 12, weight: 500 }, props.content)), /* @__PURE__ */ React15.createElement(question_default, null));
}

// src/design.system/image/image.tsx
import Image from "next/image";
import React16 from "react";
var IMAGE_STYLE = {
  borderRadius: 10
};
function KeyvalImage({
  src,
  alt,
  width = 56,
  height = 56,
  style = {}
}) {
  return /* @__PURE__ */ React16.createElement(
    Image,
    {
      src,
      alt: alt || "",
      width,
      height,
      style: { ...IMAGE_STYLE, ...style }
    }
  );
}

// src/design.system/input/input.tsx
import React17, { useState as useState4 } from "react";

// src/design.system/input/input.styled.tsx
import { styled as styled15 } from "styled-components";
var StyledInputContainer = styled15.div`
  position: relative;
  display: flex;
  width: 100%;
  padding-left: 13px;
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  border: ${({ theme: theme2, hasError, active }) => `1px solid ${hasError ? theme2.colors.error : active ? theme2.text.grey : theme2.colors.blue_grey}`};
  background: ${({ theme: theme2 }) => theme2.colors.light_dark};

  &:hover {
    border: ${({ theme: theme2 }) => `solid 1px ${theme2.text.grey}`};
  }
`;
var StyledActionInputContainer = styled15.div`
  position: relative;
  display: flex;
  width: 100%;
  padding: 0px 12px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-radius: 4px;
  border: ${({ theme: theme2 }) => `1px solid ${theme2.colors.secondary}`};
`;
var StyledInput = styled15.input`
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  color: ${({ theme: theme2 }) => theme2.text.white};
`;
var StyledActionInput = styled15(StyledInput)`
  color: var(--dark-mode-white, #fff);
  font-family: Inter, sans-serif;
  font-size: 24px;
`;
var LabelWrapper = styled15.div`
  margin-bottom: 8px;
`;
var ErrorWrapper = styled15.div`
  margin-top: 4px;
`;
var DisplayIconsWrapper = styled15.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
`;

// src/assets/icons/eye-open.svg
var eye_open_default = "./eye-open-ECPQFKVQ.svg";

// src/assets/icons/eye-close.svg
var eye_close_default = "./eye-close-SRDYBMNB.svg";

// src/design.system/input/input.tsx
function KeyvalInput({
  label,
  value,
  onChange,
  type = "text",
  error,
  style = {}
}) {
  const [showPassword, setShowPassword] = useState4(false);
  function handleChange(event) {
    onChange(event.target.value);
  }
  return /* @__PURE__ */ React17.createElement(React17.Fragment, null, label && /* @__PURE__ */ React17.createElement(LabelWrapper, null, /* @__PURE__ */ React17.createElement(KeyvalText, { size: 14, weight: 600 }, label)), /* @__PURE__ */ React17.createElement(
    StyledInputContainer,
    {
      active: !!value || void 0,
      hasError: !!error,
      style: { ...style }
    },
    /* @__PURE__ */ React17.createElement(
      StyledInput,
      {
        type: showPassword ? "text" : type,
        value,
        onChange: handleChange,
        autoComplete: "off"
      }
    ),
    type === "password" && /* @__PURE__ */ React17.createElement(DisplayIconsWrapper, { onClick: () => setShowPassword(!showPassword) }, !showPassword ? /* @__PURE__ */ React17.createElement(eye_open_default, { width: 16, height: 16 }) : /* @__PURE__ */ React17.createElement(eye_close_default, { width: 16, height: 16 }))
  ), error && /* @__PURE__ */ React17.createElement(ErrorWrapper, null, /* @__PURE__ */ React17.createElement(KeyvalText, { size: 14, color: "#FD3F3F" }, error)));
}

// src/design.system/input/action.input.tsx
import React18 from "react";

// src/styles/palette.tsx
var colors = {
  primary: "#FF0000",
  secondary: "#0EE6F3",
  torquiz_light: "#96F2FF",
  dark: "#07111A",
  light_dark: "#132330",
  dark_blue: "#203548",
  light_grey: "#CCD0D2",
  blue_grey: "#374A5B",
  white: "#fff",
  error: "#FD3F3F"
};
var text = {
  primary: "#07111A",
  secondary: "#0EE6F3",
  white: "#fff",
  light_grey: "#CCD0D2",
  grey: "#8b92a5",
  dark_button: "#0A1824"
};
var font_family = {
  primary: "Inter"
};
var theme = {
  colors,
  text,
  font_family
};
var palette_default = theme;

// src/design.system/input/action.input.tsx
function KeyvalActionInput({
  value,
  onChange,
  style = {},
  onAction
}) {
  function handleChange(event) {
    onChange(event.target.value);
  }
  return /* @__PURE__ */ React18.createElement(React18.Fragment, null, /* @__PURE__ */ React18.createElement(StyledActionInputContainer, { style: { ...style } }, /* @__PURE__ */ React18.createElement(
    StyledActionInput,
    {
      value,
      onChange: handleChange,
      autoComplete: "off"
    }
  ), /* @__PURE__ */ React18.createElement(KeyvalButton, { onClick: onAction }, /* @__PURE__ */ React18.createElement(KeyvalText, { size: 14, weight: 500, color: palette_default.text.dark_button }, "Save"))));
}

// src/design.system/video/video.tsx
import React19, { useState as useState5 } from "react";

// src/assets/icons/close.svg
var close_default = "./close-VUVDQRMG.svg";

// src/assets/icons/player.svg
var player_default = "./player-YXZCGNAK.svg";

// src/design.system/video/video.styled.tsx
import { styled as styled16 } from "styled-components";
var ImagePreviewWrapper = styled16.div`
  position: relative;
  margin-top: 8px;
  border-radius: 8px;
  width: 240px;
  height: 140px;
  cursor: pointer;
  background: ${({ url }) => `linear-gradient(
      0deg,
      rgba(2, 20, 30, 0.2) 0%,
      rgba(2, 20, 30, 0.2) 100%
    ),
    url(${url}),
    lightgray 50%`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
var PlayerIconWrapper = styled16.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 30px;
  text-align: center;
`;
var LargePlayerIconWrapper = styled16(PlayerIconWrapper)`
  top: 40%;
`;
var StyledLargeVideo = styled16.video`
  width: 980px;
  border-radius: 8px;
`;
var LargeVideoHeader = styled16.div`
  width: 980px;

  display: flex;
  justify-content: space-between;
  margin-bottom: 21px;
`;
var LargeVideoContainer = styled16.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.65);
  z-index: 9999;
`;

// src/design.system/video/video.tsx
function KeyvalVideo({
  videoSrc,
  title,
  thumbnail
}) {
  const [isLarge, setIsLarge] = useState5(false);
  const [pause, setPause] = useState5(true);
  const handleClick = () => {
    setIsLarge(true);
  };
  const handleClose = () => {
    setIsLarge(false);
    setPause(true);
  };
  const renderSmallView = () => /* @__PURE__ */ React19.createElement(React19.Fragment, null, /* @__PURE__ */ React19.createElement(KeyvalText, { size: 16, weight: 600 }, title), /* @__PURE__ */ React19.createElement(ImagePreviewWrapper, { onClick: handleClick, url: thumbnail }, /* @__PURE__ */ React19.createElement(PlayerIconWrapper, null, /* @__PURE__ */ React19.createElement(player_default, { width: 30 }))));
  const renderLargeView = () => /* @__PURE__ */ React19.createElement(LargeVideoContainer, null, /* @__PURE__ */ React19.createElement(LargeVideoHeader, null, /* @__PURE__ */ React19.createElement(KeyvalText, { size: 20, weight: 600 }, title), /* @__PURE__ */ React19.createElement(close_default, { onClick: handleClose, style: { cursor: "pointer" } })), !pause ? /* @__PURE__ */ React19.createElement(StyledLargeVideo, { src: videoSrc, autoPlay: true, controls: true }) : /* @__PURE__ */ React19.createElement(
    ImagePreviewWrapper,
    {
      url: thumbnail,
      style: { width: 980, height: 560 },
      onClick: () => setPause(false)
    },
    /* @__PURE__ */ React19.createElement(LargePlayerIconWrapper, null, /* @__PURE__ */ React19.createElement(player_default, { width: 80 }))
  ));
  return /* @__PURE__ */ React19.createElement("div", null, isLarge ? renderLargeView() : renderSmallView());
}

// src/design.system/loader/loader.tsx
import React20 from "react";

// src/design.system/loader/loader.styled.tsx
import styled17 from "styled-components";
var LoaderWrapper = styled17.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
var Loader = styled17.div`
  width: 48px;
  height: 48px;
  border: 4px solid;
  border-color: ${({ theme: theme2 }) => `${theme2.colors.secondary} ${theme2.colors.secondary} ${theme2.colors.secondary}  transparent`};
  border-radius: 50%;
  animation: spin-anim 1.2s linear infinite;

  @keyframes spin-anim {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// src/design.system/loader/loader.tsx
function KeyvalLoader() {
  return /* @__PURE__ */ React20.createElement(LoaderWrapper, null, /* @__PURE__ */ React20.createElement(Loader, null));
}

// src/design.system/notification/notification.tsx
import React21, { useEffect as useEffect3 } from "react";

// src/design.system/notification/notification.styled.tsx
import styled18 from "styled-components";
var NotificationContainer = styled18.div`
  position: fixed;
  top: 3%;
  right: 3%;
`;
var StyledNotification = styled18.div`
  display: flex;
  height: 24px;
  padding: 6px 16px 6px 8px;
  /* width: 100%; */
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-radius: 8px;
  border: ${({ theme: theme2 }) => `1px solid ${theme2.colors.secondary}`};
  background: ${({ theme: theme2 }) => theme2.colors.dark_blue};
  svg {
    cursor: pointer;
  }
`;

// src/assets/icons/X-blue.svg
var X_blue_default = "./X-blue-G4IKHVO5.svg";

// src/assets/icons/success-notification.svg
var success_notification_default = "./success-notification-MZSTWMDU.svg";

// src/assets/icons/error-notification.svg
var error_notification_default = "./error-notification-6T6JZGKS.svg";

// src/design.system/notification/notification.tsx
function KeyvalNotification({
  type,
  message,
  onClose
}) {
  useEffect3(() => {
    const id = setTimeout(() => {
      onClose && onClose();
    }, 5e3);
    return () => {
      clearTimeout(id);
    };
  }, []);
  function getIcon() {
    switch (type) {
      case "success":
        return /* @__PURE__ */ React21.createElement(success_notification_default, null);
      case "error":
        return /* @__PURE__ */ React21.createElement(error_notification_default, null);
    }
  }
  function getNotificationStyle() {
    switch (type) {
      case "error":
        return { border: "1px solid #FD3F3F" };
      default:
        return {};
    }
  }
  return /* @__PURE__ */ React21.createElement(NotificationContainer, null, /* @__PURE__ */ React21.createElement(StyledNotification, { style: getNotificationStyle() }, getIcon(), /* @__PURE__ */ React21.createElement(KeyvalText, { weight: 500, size: 14 }, message), /* @__PURE__ */ React21.createElement(X_blue_default, { onClick: onClose })));
}

// src/design.system/data.flow/index.tsx
import React25, { useEffect as useEffect4 } from "react";
import ReactFlow, {
  Background,
  Controls,
  useReactFlow,
  ReactFlowProvider
} from "reactflow";

// src/design.system/data.flow/keyval.middleware.tsx
import React22 from "react";
import { Handle, Position } from "reactflow";

// src/assets/icons/overview/middleware.svg
var middleware_default = "./middleware-JCI7LAYG.svg";

// src/assets/icons/overview/folder.svg
var folder_default = "./folder-BQDLSFZB.svg";

// src/design.system/data.flow/keyval.middleware.tsx
function NamespaceNode({ isConnectable }) {
  return /* @__PURE__ */ React22.createElement("div", null, /* @__PURE__ */ React22.createElement(
    Handle,
    {
      type: "target",
      position: Position.Left,
      style: { visibility: "hidden" }
    }
  ), /* @__PURE__ */ React22.createElement(middleware_default, null), /* @__PURE__ */ React22.createElement(
    Handle,
    {
      type: "source",
      position: Position.Right,
      id: "a",
      isConnectable,
      style: { visibility: "hidden" }
    }
  ));
}

// src/design.system/data.flow/namespace.node.tsx
import React23, { memo as memo2 } from "react";
import { Handle as Handle2, Position as Position2 } from "reactflow";
import { styled as styled19 } from "styled-components";
var NamespaceContainer = styled19.div`
  display: flex;
  padding: 16px;
  border-radius: 12px;
  border: ${({ theme: theme2 }) => `solid 1px ${theme2.colors.blue_grey}`};
  background: ${({ theme: theme2 }) => theme2.colors.light_dark};
  align-items: center;
  width: 272px;
  gap: 8px;
`;
var TextWrapper2 = styled19.div`
  gap: 10px;
`;
var namespace_node_default = memo2(({ data, isConnectable }) => {
  return /* @__PURE__ */ React23.createElement(NamespaceContainer, null, /* @__PURE__ */ React23.createElement(folder_default, { width: 32 }), /* @__PURE__ */ React23.createElement(TextWrapper2, null, /* @__PURE__ */ React23.createElement(KeyvalText, { size: 14, weight: 600 }, data?.name), /* @__PURE__ */ React23.createElement(
    KeyvalText,
    {
      color: "#8b92a5"
    },
    `${data?.totalAppsInstrumented} Apps Instrumented`
  )), /* @__PURE__ */ React23.createElement(
    Handle2,
    {
      type: "source",
      position: Position2.Right,
      id: "a",
      isConnectable,
      style: { visibility: "hidden" }
    }
  ));
});

// src/design.system/data.flow/destination.node.tsx
import React24 from "react";
import { Handle as Handle3, Position as Position3 } from "reactflow";
import { styled as styled20 } from "styled-components";

// src/assets/icons/logs-grey.svg
var logs_grey_default = "./logs-grey-BSAZDGWG.svg";

// src/assets/icons/logs-blue.svg
var logs_blue_default = "./logs-blue-4OLMZHLD.svg";

// src/assets/icons/chart-line-grey.svg
var chart_line_grey_default = "./chart-line-grey-CD5A3RPW.svg";

// src/assets/icons/chart-line-blue.svg
var chart_line_blue_default = "./chart-line-blue-D3WXRUJY.svg";

// src/assets/icons/tree-structure-grey.svg
var tree_structure_grey_default = "./tree-structure-grey-Z7JX2YMF.svg";

// src/assets/icons/tree-structure-blue.svg
var tree_structure_blue_default = "./tree-structure-blue-KAWP435P.svg";

// src/design.system/data.flow/monitors.tsx
var MONITORS = {
  LOGS: "Logs",
  METRICS: "Metrics",
  TRACES: "Traces"
};
var MONITORING_OPTIONS = [
  {
    id: 1,
    icons: {
      notFocus: () => logs_grey_default(),
      focus: () => logs_blue_default()
    },
    title: MONITORS.LOGS,
    type: "logs",
    tapped: true
  },
  {
    id: 2,
    icons: {
      notFocus: () => chart_line_grey_default(),
      focus: () => chart_line_blue_default()
    },
    title: MONITORS.METRICS,
    type: "metrics",
    tapped: true
  },
  {
    id: 3,
    icons: {
      notFocus: () => tree_structure_grey_default(),
      focus: () => tree_structure_blue_default()
    },
    title: MONITORS.TRACES,
    type: "traces",
    tapped: true
  }
];

// src/design.system/data.flow/destination.node.tsx
var DestinationNodeContainer = styled20.div`
  padding: 16px 24px;
  display: flex;
  border-radius: 12px;
  border: ${({ theme: theme2 }) => `solid 1px ${theme2.colors.blue_grey}`};
  background: ${({ theme: theme2 }) => theme2.colors.light_dark};
  align-items: center;
  justify-content: space-between;
  width: 368px;
`;
var NodeDataWrapper = styled20.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
var TextWrapper3 = styled20.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
`;
var IMAGE_STYLE2 = {
  backgroundColor: "#fff",
  padding: 4
};
var IconWrapper = styled20.div`
  padding: 4px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: ${({ theme: theme2, tapped }) => tapped ? theme2.colors.dark_blue : "#0e1c28"};
`;
var MonitorsListWrapper = styled20.div`
  display: flex;
  gap: 8px;
`;
function DestinationNode({ data, isConnectable }) {
  function renderMonitors() {
    return MONITORING_OPTIONS.map((monitor) => /* @__PURE__ */ React24.createElement(
      IconWrapper,
      {
        key: monitor?.id,
        tapped: data?.signals[monitor?.type] || false
      },
      data?.signals[monitor?.type] ? monitor.icons.focus() : monitor.icons.notFocus()
    ));
  }
  return /* @__PURE__ */ React24.createElement(DestinationNodeContainer, null, /* @__PURE__ */ React24.createElement(NodeDataWrapper, null, /* @__PURE__ */ React24.createElement(
    KeyvalImage,
    {
      src: data?.destination_type?.image_url,
      width: 40,
      height: 40,
      style: IMAGE_STYLE2
    }
  ), /* @__PURE__ */ React24.createElement(TextWrapper3, null, /* @__PURE__ */ React24.createElement(KeyvalText, { size: 14, weight: 600 }, data?.destination_type?.display_name), /* @__PURE__ */ React24.createElement(KeyvalText, { color: "#8b92a5" }, data?.name))), /* @__PURE__ */ React24.createElement(MonitorsListWrapper, null, renderMonitors()), /* @__PURE__ */ React24.createElement(
    Handle3,
    {
      type: "target",
      position: Position3.Left,
      id: "a",
      isConnectable,
      style: { visibility: "hidden" }
    }
  ));
}

// src/design.system/data.flow/index.tsx
import "reactflow/dist/style.css";

// src/design.system/data.flow/data.flow.styled.tsx
import styled21 from "styled-components";
var DataFlowContainer = styled21.div`
  width: 100%;
  height: 100%;
`;
var ControllerWrapper = styled21.div`
  button {
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    border: ${({ theme: theme2 }) => `1px solid ${theme2.colors.blue_grey}`};
    background: #0e1c28 !important;
    margin-bottom: 8px;
  }

  .react-flow__controls button path {
    fill: #fff;
  }
`;

// src/design.system/data.flow/index.tsx
var backgroundColor = palette_default.colors.light_dark;
var nodeTypes = {
  custom: NamespaceNode,
  namespace: namespace_node_default,
  destination: DestinationNode
};
function DataFlow({ nodes, edges }) {
  const { fitView } = useReactFlow();
  useEffect4(() => {
    setTimeout(() => {
      fitView();
    }, 100);
  }, [fitView, nodes, edges]);
  return /* @__PURE__ */ React25.createElement(DataFlowContainer, null, /* @__PURE__ */ React25.createElement(
    ReactFlow,
    {
      nodes,
      edges,
      nodeTypes,
      nodesDraggable: false,
      nodeOrigin: [0.4, 0.4]
    },
    /* @__PURE__ */ React25.createElement(ControllerWrapper, null, /* @__PURE__ */ React25.createElement(Controls, { position: "top-left", showInteractive: false })),
    /* @__PURE__ */ React25.createElement(Background, { gap: 12, size: 1, style: { backgroundColor } })
  ));
}
function KeyvalDataFlow(props) {
  return /* @__PURE__ */ React25.createElement(ReactFlowProvider, null, /* @__PURE__ */ React25.createElement(DataFlow, { ...props }));
}

// src/design.system/danger.zone/danger.zone.tsx
import React26 from "react";
import { styled as styled22 } from "styled-components";
var DangerZoneWrapper = styled22.div`
  padding: 10px;
  border: ${({ theme: theme2 }) => `1px solid ${theme2.colors.blue_grey}`};
  border-radius: 8px;
  width: fit-content;
  width: 344px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
var DangerButtonWrapper = styled22.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  :hover {
    background: ${({ theme: theme2 }) => theme2.colors.error};
    p {
      color: #fff !important;
    }
  }
`;
var DangerButton = styled22.button`
  padding: 8px 12px;
  border-radius: 4px;
  background: transparent;
  border: ${({ theme: theme2 }) => `1px solid ${theme2.colors.blue_grey}`};
  cursor: pointer !important;
`;
function DangerZone({
  title,
  subTitle,
  btnText,
  onClick
}) {
  return /* @__PURE__ */ React26.createElement(React26.Fragment, null, /* @__PURE__ */ React26.createElement(DangerZoneWrapper, null, /* @__PURE__ */ React26.createElement(KeyvalText, { size: 14, weight: 600 }, title), /* @__PURE__ */ React26.createElement(KeyvalText, { size: 12 }, subTitle), /* @__PURE__ */ React26.createElement(DangerButtonWrapper, null, /* @__PURE__ */ React26.createElement(DangerButton, { onClick }, /* @__PURE__ */ React26.createElement(KeyvalText, { weight: 500, size: 14, color: palette_default.colors.error }, btnText)))));
}

// src/design.system/modal/modal.tsx
import { useCallback, useEffect as useEffect5, useRef as useRef2 } from "react";

// src/design.system/modal/portal.modal.tsx
import { useState as useState6, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
var PortalModal = ({ children, wrapperId }) => {
  const [portalElement, setPortalElement] = useState6(null);
  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let portalCreated = false;
    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId);
      portalCreated = true;
    }
    setPortalElement(element);
    return () => {
      if (portalCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);
  const createWrapperAndAppendToBody = (elementId) => {
    const element = document.createElement("div");
    element.setAttribute("id", elementId);
    document.body.appendChild(element);
    return element;
  };
  if (!portalElement)
    return null;
  return createPortal(children, portalElement);
};
var portal_modal_default = PortalModal;

// src/design.system/modal/modal.styled.tsx
import styled23, { keyframes } from "styled-components";
var fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
var ModalButtonsContainer = styled23.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
var ModalButtonPrimary = styled23.button`
  display: block;
  padding: 10px 30px;
  border-radius: 3px;
  color: ${({ theme: theme2 }) => theme2.colors.btnText};
  border: 1px solid ${({ theme: theme2 }) => theme2.colors.main};
  background-color: ${({ theme: theme2 }) => theme2.colors.main};
  font-family: "Robot", sans-serif;
  font-weight: 500;
  transition: 0.3s ease all;

  &:hover {
    background-color: ${({ theme: theme2 }) => theme2.colors.shadowMain};
  }
`;
var ModalButtonSecondary = styled23.button`
  display: block;
  padding: 10px 30px;
  border-radius: 3px;
  color: ${({ theme: theme2 }) => theme2.colors.main};
  border: 1px solid ${({ theme: theme2 }) => theme2.colors.main};
  background-color: transparent;
  font-family: "Robot", sans-serif;
  font-weight: 500;
  transition: 0.3s ease all;

  &:hover {
    background-color: ${({ theme: theme2 }) => theme2.colors.shadowMain};
    color: ${({ theme: theme2 }) => theme2.colors.btnText};
  }
`;
var Overlay = styled23.div`
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.showOverlay ? "rgba(23, 23, 23, 0.8)" : "rgba(0, 0, 0, 0)"};
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.positionX ? props.positionX : "center"};
  align-items: ${(props) => props.positionY ? props.positionY : "center"};
  padding: 40px;

  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`;
var ModalContainer = styled23.div`
  width: 500px;
  min-height: 50px;
  background-color: #ffffff;
  position: relative;
  border-radius: 8px;
  padding: ${(props) => props.padding ? props.padding : "20px"};
`;
var ModalHeader = styled23.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #ededed;
`;
var Close = styled23.button`
  position: absolute;
  top: 10px;
  right: 20px;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  transition: 0.3s ease all;
  border-radius: 3px;
  color: "#d1345b";
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;
var PrimaryButton = styled23.button`
  background-color: #ededed8b;
  border: 1px solid #d4d2d2;
  width: 100%;
  height: 36px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #ededed;
  }
`;
var Content = styled23.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme: theme2 }) => theme2.text};
`;
var ModalFooter = styled23.footer`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ededed;
`;

// src/assets/icons/close-modal.svg
var close_modal_default = "./close-modal-BFP7HTRU.svg";

// src/design.system/modal/modal.tsx
function KeyvalModal({ children, closeModal, config }) {
  const modalRef = useRef2(null);
  const handleClickOutside = () => closeModal();
  const handleKeyPress = useCallback((event) => {
    if (event.key === "Escape")
      closeModal();
  }, []);
  useOnClickOutside(modalRef, handleClickOutside);
  useEffect5(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(portal_modal_default, { wrapperId: "modal-portal" }, /* @__PURE__ */ React.createElement(
    Overlay,
    {
      showOverlay: config.showOverlay,
      positionX: config.positionX,
      positionY: config.positionY,
      style: {
        animationDuration: "400ms",
        animationDelay: "0"
      }
    },
    /* @__PURE__ */ React.createElement(ModalContainer, { padding: config.padding, ref: modalRef }, config.showHeader && /* @__PURE__ */ React.createElement(ModalHeader, null, /* @__PURE__ */ React.createElement(KeyvalText, { weight: 500, color: palette_default.text.dark_button }, config.title)), /* @__PURE__ */ React.createElement(Close, { onClick: closeModal }, /* @__PURE__ */ React.createElement(close_modal_default, null)), /* @__PURE__ */ React.createElement(Content, null, children), config?.footer && /* @__PURE__ */ React.createElement(ModalFooter, null, /* @__PURE__ */ React.createElement(PrimaryButton, { onClick: config.footer.primaryBtnAction }, /* @__PURE__ */ React.createElement(KeyvalText, { size: 14, weight: 500, color: "#5c5c5c" }, config.footer.primaryBtnText))))
  )));
}
export {
  DangerZone,
  FloatBox,
  KeyvalActionInput,
  KeyvalButton,
  KeyvalCard,
  KeyvalCheckbox,
  KeyvalDataFlow,
  KeyvalDropDown,
  KeyvalImage,
  KeyvalInput,
  KeyvalLink,
  KeyvalLoader,
  KeyvalModal,
  KeyvalNotification,
  KeyvalRadioButton,
  KeyvalSearchInput,
  KeyvalSelectedCounter,
  KeyvalSwitch,
  KeyvalTag,
  KeyvalTap,
  KeyvalText,
  KeyvalTooltip,
  KeyvalVideo
};
//# sourceMappingURL=index.mjs.map