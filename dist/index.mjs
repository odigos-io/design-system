// src/design.system/radio/radio.tsx
import React4 from "react";

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
function Text({ children, color, style, weight, size }) {
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
import * as React3 from "react";
var SvgCheckedRadio = (props) => /* @__PURE__ */ React3.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React3.createElement("rect", { x: 0.5, y: 0.5, width: 23, height: 23, rx: 11.5, fill: "#96F2FF", stroke: "#96F2FF" }), /* @__PURE__ */ React3.createElement("path", { d: "M18.3636 8L9.86364 16.5L6 12.6364", stroke: "#132330", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }));
var checked_radio_default = SvgCheckedRadio;

// src/design.system/radio/radio.tsx
var RadioButton = ({
  label = "",
  onChange,
  value
}) => {
  function handleChange() {
    onChange && onChange({});
  }
  return /* @__PURE__ */ React4.createElement(RadioButtonContainer, null, /* @__PURE__ */ React4.createElement("div", { onClick: handleChange }, value ? /* @__PURE__ */ React4.createElement(checked_radio_default, { width: 25, height: 25 }) : /* @__PURE__ */ React4.createElement(RadioButtonBorder, null)), /* @__PURE__ */ React4.createElement(Text, null, label));
};

// src/design.system/button/button.tsx
import React5 from "react";

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
var Button = ({
  variant = "primary",
  children,
  style,
  onClick,
  disabled
}) => {
  return /* @__PURE__ */ React5.createElement(ButtonContainer, { disabled }, /* @__PURE__ */ React5.createElement(StyledButton, { disabled, onClick, style: { ...style } }, children));
};

// src/design.system/float.box/float.box.tsx
import React6 from "react";
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
  return /* @__PURE__ */ React6.createElement(FloatBoxBorder, null, /* @__PURE__ */ React6.createElement(FloatBoxWrapper, { style: { ...style } }, children));
}

// src/design.system/card/card.tsx
import React7 from "react";

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
function Card({ children, focus = false }) {
  return /* @__PURE__ */ React7.createElement(CardContainer, { selected: focus || void 0 }, children);
}

// src/design.system/tag/tag.tsx
import React8 from "react";
import styled6 from "styled-components";
var TagWrapper = styled6.div`
  display: flex;
  padding: 4px 8px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 10px;
`;
function Tag({ title = "", color = "#033869" }) {
  return /* @__PURE__ */ React8.createElement(TagWrapper, { style: { backgroundColor: color } }, /* @__PURE__ */ React8.createElement(Text, { weight: 500, size: 13, color: "#CCD0D2" }, title));
}

// src/design.system/tap/tap.tsx
import React9 from "react";
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
function Tap({
  title = "",
  tapped,
  children,
  style,
  onClick
}) {
  return /* @__PURE__ */ React9.createElement(
    TapWrapper,
    {
      onClick,
      selected: tapped,
      style: { ...style, cursor: onClick ? "pointer" : "auto" }
    },
    children,
    /* @__PURE__ */ React9.createElement(
      Text,
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
import React14, { useEffect as useEffect2, useRef, useState as useState2 } from "react";

// src/assets/icons/expand-arrow.svg
import * as React10 from "react";
var SvgExpandArrow = (props) => /* @__PURE__ */ React10.createElement("svg", { width: 12, height: 13, viewBox: "0 0 12 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React10.createElement("path", { d: "M10.0155 5.26528L6.26552 9.01528C6.23069 9.05014 6.18934 9.0778 6.14381 9.09667C6.09829 9.11555 6.04949 9.12526 6.00021 9.12526C5.95093 9.12526 5.90213 9.11555 5.85661 9.09667C5.81108 9.0778 5.76972 9.05014 5.7349 9.01528L1.9849 5.26528C1.91453 5.19491 1.875 5.09948 1.875 4.99996C1.875 4.90045 1.91453 4.80502 1.9849 4.73465C2.05526 4.66429 2.1507 4.62476 2.25021 4.62476C2.34972 4.62476 2.44516 4.66429 2.51552 4.73465L6.00021 8.21981L9.4849 4.73465C9.51974 4.69981 9.5611 4.67217 9.60662 4.65332C9.65214 4.63446 9.70094 4.62476 9.75021 4.62476C9.79948 4.62476 9.84827 4.63446 9.8938 4.65332C9.93932 4.67217 9.98068 4.69981 10.0155 4.73465C10.0504 4.76949 10.078 4.81086 10.0969 4.85638C10.1157 4.9019 10.1254 4.95069 10.1254 4.99996C10.1254 5.04924 10.1157 5.09803 10.0969 5.14355C10.078 5.18907 10.0504 5.23044 10.0155 5.26528Z", fill: "#CCD0D2" }));
var expand_arrow_default = SvgExpandArrow;

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
import React13 from "react";

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
import * as React11 from "react";
var SvgGlass = (props) => /* @__PURE__ */ React11.createElement("svg", { width: 18, height: 18, viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React11.createElement("path", { d: "M16.1479 15.3519L12.6273 11.8321C13.6477 10.6071 14.1566 9.03577 14.048 7.44512C13.9394 5.85447 13.2217 4.36692 12.0443 3.29193C10.8668 2.21693 9.32029 1.63725 7.72635 1.67348C6.13241 1.7097 4.6138 2.35904 3.48642 3.48642C2.35904 4.6138 1.7097 6.13241 1.67348 7.72635C1.63725 9.32029 2.21693 10.8668 3.29193 12.0443C4.36692 13.2217 5.85447 13.9394 7.44512 14.048C9.03577 14.1566 10.6071 13.6477 11.8321 12.6273L15.3519 16.1479C15.4042 16.2001 15.4663 16.2416 15.5345 16.2699C15.6028 16.2982 15.676 16.3127 15.7499 16.3127C15.8238 16.3127 15.897 16.2982 15.9653 16.2699C16.0336 16.2416 16.0956 16.2001 16.1479 16.1479C16.2001 16.0956 16.2416 16.0336 16.2699 15.9653C16.2982 15.897 16.3127 15.8238 16.3127 15.7499C16.3127 15.676 16.2982 15.6028 16.2699 15.5345C16.2416 15.4663 16.2001 15.4042 16.1479 15.3519ZM2.81242 7.87492C2.81242 6.87365 3.10933 5.89487 3.6656 5.06234C4.22188 4.22982 5.01253 3.58094 5.93758 3.19778C6.86263 2.81461 7.88053 2.71435 8.86256 2.90969C9.84459 3.10503 10.7466 3.58718 11.4546 4.29519C12.1626 5.00319 12.6448 5.90524 12.8401 6.88727C13.0355 7.8693 12.9352 8.8872 12.5521 9.81225C12.1689 10.7373 11.52 11.528 10.6875 12.0842C9.85497 12.6405 8.87618 12.9374 7.87492 12.9374C6.53271 12.9359 5.24591 12.4021 4.29683 11.453C3.34775 10.5039 2.81391 9.21712 2.81242 7.87492Z", fill: "#8B92A5" }));
var glass_default = SvgGlass;

// src/assets/icons/X.svg
import * as React12 from "react";
var SvgX = (props) => /* @__PURE__ */ React12.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React12.createElement("path", { d: "M12.8535 12.146C12.9 12.1925 12.9368 12.2476 12.962 12.3083C12.9871 12.369 13.0001 12.4341 13.0001 12.4998C13.0001 12.5655 12.9871 12.6305 12.962 12.6912C12.9368 12.7519 12.9 12.8071 12.8535 12.8535C12.8071 12.9 12.7519 12.9368 12.6912 12.962C12.6305 12.9871 12.5655 13.0001 12.4998 13.0001C12.4341 13.0001 12.369 12.9871 12.3083 12.962C12.2476 12.9368 12.1925 12.9 12.146 12.8535L7.99979 8.70666L3.85354 12.8535C3.75972 12.9474 3.63247 13.0001 3.49979 13.0001C3.36711 13.0001 3.23986 12.9474 3.14604 12.8535C3.05222 12.7597 2.99951 12.6325 2.99951 12.4998C2.99951 12.3671 3.05222 12.2399 3.14604 12.146L7.29291 7.99979L3.14604 3.85354C3.05222 3.75972 2.99951 3.63247 2.99951 3.49979C2.99951 3.36711 3.05222 3.23986 3.14604 3.14604C3.23986 3.05222 3.36711 2.99951 3.49979 2.99951C3.63247 2.99951 3.75972 3.05222 3.85354 3.14604L7.99979 7.29291L12.146 3.14604C12.2399 3.05222 12.3671 2.99951 12.4998 2.99951C12.6325 2.99951 12.7597 3.05222 12.8535 3.14604C12.9474 3.23986 13.0001 3.36711 13.0001 3.49979C13.0001 3.63247 12.9474 3.75972 12.8535 3.85354L8.70666 7.99979L12.8535 12.146Z", fill: "white" }));
var X_default = SvgX;

// src/design.system/search.input/search.input.tsx
function SearchInput({
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
  return /* @__PURE__ */ React13.createElement(
    SearchInputWrapper,
    {
      active: !!value || void 0,
      style: { ...containerStyle }
    },
    /* @__PURE__ */ React13.createElement(glass_default, null),
    /* @__PURE__ */ React13.createElement(
      StyledSearchInput,
      {
        style: { ...inputStyle },
        value,
        active: !!value || void 0,
        placeholder,
        onChange
      }
    ),
    showClear && /* @__PURE__ */ React13.createElement(X_default, { onClick: clear, style: { cursor: "pointer" } })
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
function DropDown({
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
  return /* @__PURE__ */ React14.createElement("div", { style: { height: 37, width }, ref: containerRef }, /* @__PURE__ */ React14.createElement(
    DropdownWrapper,
    {
      selected: isHover,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      onClick: toggleDropdown
    },
    /* @__PURE__ */ React14.createElement(DropdownHeader, null, selectedItem ? selectedItem.label : SELECTED_ITEM, /* @__PURE__ */ React14.createElement(expand_arrow_default, { className: `dropdown-arrow ${isOpen && "open"}` }))
  ), isOpen && /* @__PURE__ */ React14.createElement(DropdownBody, null, /* @__PURE__ */ React14.createElement(
    SearchInput,
    {
      value: searchFilter,
      onChange: (e) => setSearchFilter(e.target.value),
      placeholder: "Search",
      containerStyle: CONTAINER_STYLE,
      inputStyle: SEARCH_INPUT_STYLE,
      showClear: false
    }
  ), /* @__PURE__ */ React14.createElement(DropdownListWrapper, null, getDropdownList().map((item) => /* @__PURE__ */ React14.createElement(
    DropdownItem,
    {
      key: item.id,
      onClick: (e) => handleItemClick(item)
    },
    /* @__PURE__ */ React14.createElement(Text, null, item.label),
    /* @__PURE__ */ React14.createElement("div", null, childComp)
  )))));
}

// src/design.system/switch/switch.tsx
import React15 from "react";

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
function Switch({
  toggle,
  handleToggleChange,
  style,
  label = "Select All"
}) {
  return /* @__PURE__ */ React15.createElement(SwitchInputWrapper, null, /* @__PURE__ */ React15.createElement(
    SwitchToggleWrapper,
    {
      active: toggle || void 0,
      onClick: handleToggleChange
    },
    /* @__PURE__ */ React15.createElement(SwitchButtonWrapper, { disabled: toggle || void 0 })
  ), label && /* @__PURE__ */ React15.createElement(Text, { size: 14 }, label));
}

// src/design.system/checkbox/checkbox.tsx
import React17 from "react";

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
var CheckboxItem = styled11.span`
  width: 16px;
  height: 16px;
  border: ${({ theme: theme2 }) => `solid 1px ${theme2.colors.light_grey}`};
  border-radius: 4px;
`;

// src/assets/icons/checkbox-rect.svg
import * as React16 from "react";
var SvgCheckboxRect = (props) => /* @__PURE__ */ React16.createElement("svg", { width: 18, height: 18, viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React16.createElement("rect", { x: 0.5, y: 0.5, width: 17, height: 17, rx: 3.5, fill: "#96F2FF", stroke: "#96F2FF" }), /* @__PURE__ */ React16.createElement("path", { d: "M13.7727 6L7.39773 12.375L4.5 9.47727", stroke: "#132330", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }));
var checkbox_rect_default = SvgCheckboxRect;

// src/design.system/checkbox/checkbox.tsx
function Checkbox({
  onChange,
  value,
  label = "",
  disabled = false
}) {
  return /* @__PURE__ */ React17.createElement(CheckboxWrapper, { disabled: disabled || void 0, onClick: onChange }, value ? /* @__PURE__ */ React17.createElement(checkbox_rect_default, null) : /* @__PURE__ */ React17.createElement(CheckboxItem, null), /* @__PURE__ */ React17.createElement(Text, { size: 14 }, label));
}

// src/design.system/selected.counter/selected.counter.tsx
import React19 from "react";

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
import * as React18 from "react";
var SvgCheck = (props) => /* @__PURE__ */ React18.createElement("svg", { width: 10, height: 10, viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React18.createElement("g", { clipPath: "url(#clip0_48_7283)" }, /* @__PURE__ */ React18.createElement("path", { d: "M1.5625 5.625L3.75 7.8125L8.75 2.8125", stroke: "#96F2FF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), /* @__PURE__ */ React18.createElement("defs", null, /* @__PURE__ */ React18.createElement("clipPath", { id: "clip0_48_7283" }, /* @__PURE__ */ React18.createElement("rect", { width: 10, height: 10, fill: "white" }))));
var check_default = SvgCheck;

// src/design.system/selected.counter/selected.counter.tsx
function SelectedCounter({ total, selected }) {
  return /* @__PURE__ */ React19.createElement(SelectedCounterWrapper, null, selected !== 0 && /* @__PURE__ */ React19.createElement(check_default, null), /* @__PURE__ */ React19.createElement(Text, { size: 13, weight: 500 }, `${selected} / ${total}`));
}

// src/design.system/link/link.tsx
import React20 from "react";
import { styled as styled13 } from "styled-components";
var LinkContainer = styled13.div`
  cursor: pointer;
  .p {
    cursor: pointer !important;
  }
`;
function Link({ value, onClick }) {
  return /* @__PURE__ */ React20.createElement(LinkContainer, { onClick }, /* @__PURE__ */ React20.createElement(Text, { color: "#0EE6F3" }, value));
}

// src/design.system/tooltip/tooltip.tsx
import React22, { useState as useState3 } from "react";

// src/assets/icons/question.svg
import * as React21 from "react";
var SvgQuestion = (props) => /* @__PURE__ */ React21.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React21.createElement("path", { d: "M7.65625 9.84375C7.65625 9.97354 7.61776 10.1004 7.54565 10.2083C7.47354 10.3163 7.37105 10.4004 7.25114 10.45C7.13122 10.4997 6.99927 10.5127 6.87197 10.4874C6.74467 10.4621 6.62774 10.3996 6.53596 10.3078C6.44419 10.216 6.38168 10.0991 6.35636 9.97178C6.33104 9.84448 6.34404 9.71253 6.39371 9.59261C6.44338 9.4727 6.52749 9.37021 6.63541 9.2981C6.74333 9.22599 6.87021 9.1875 7 9.1875C7.17405 9.1875 7.34097 9.25664 7.46404 9.37971C7.58711 9.50278 7.65625 9.6697 7.65625 9.84375ZM7 3.9375C5.7936 3.9375 4.8125 4.8207 4.8125 5.90625V6.125C4.8125 6.24103 4.8586 6.35231 4.94064 6.43436C5.02269 6.51641 5.13397 6.5625 5.25 6.5625C5.36603 6.5625 5.47731 6.51641 5.55936 6.43436C5.64141 6.35231 5.6875 6.24103 5.6875 6.125V5.90625C5.6875 5.30469 6.27649 4.8125 7 4.8125C7.72352 4.8125 8.3125 5.30469 8.3125 5.90625C8.3125 6.50781 7.72352 7 7 7C6.88397 7 6.77269 7.04609 6.69064 7.12814C6.6086 7.21019 6.5625 7.32147 6.5625 7.4375V7.875C6.5625 7.99103 6.6086 8.10231 6.69064 8.18436C6.77269 8.26641 6.88397 8.3125 7 8.3125C7.11603 8.3125 7.22731 8.26641 7.30936 8.18436C7.39141 8.10231 7.4375 7.99103 7.4375 7.875V7.83562C8.435 7.65242 9.1875 6.85672 9.1875 5.90625C9.1875 4.8207 8.20641 3.9375 7 3.9375ZM12.6875 7C12.6875 8.12488 12.3539 9.2245 11.729 10.1598C11.104 11.0951 10.2158 11.8241 9.17651 12.2546C8.13726 12.685 6.99369 12.7977 5.89043 12.5782C4.78716 12.3588 3.77374 11.8171 2.97833 11.0217C2.18292 10.2263 1.64124 9.21284 1.42179 8.10958C1.20233 7.00631 1.31496 5.86274 1.74544 4.82349C2.17591 3.78423 2.90489 2.89597 3.8402 2.27102C4.7755 1.64607 5.87512 1.3125 7 1.3125C8.50793 1.31409 9.95365 1.91382 11.0199 2.98009C12.0862 4.04636 12.6859 5.49207 12.6875 7ZM11.8125 7C11.8125 6.04818 11.5303 5.11773 11.0014 4.32632C10.4726 3.53491 9.72104 2.91808 8.84167 2.55383C7.9623 2.18958 6.99466 2.09428 6.06113 2.27997C5.1276 2.46566 4.27009 2.92401 3.59705 3.59705C2.92401 4.27009 2.46566 5.12759 2.27997 6.06113C2.09428 6.99466 2.18959 7.9623 2.55383 8.84166C2.91808 9.72103 3.53491 10.4726 4.32632 11.0014C5.11773 11.5303 6.04818 11.8125 7 11.8125C8.27591 11.8111 9.49915 11.3036 10.4014 10.4014C11.3036 9.49915 11.8111 8.27591 11.8125 7Z", fill: "#96F2FF" }));
var question_default = SvgQuestion;

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
function Tooltip(props) {
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
  return /* @__PURE__ */ React22.createElement(TooltipWrapper, { onMouseEnter: showTip, onMouseLeave: hideTip }, active && /* @__PURE__ */ React22.createElement(TooltipContentWrapper, null, /* @__PURE__ */ React22.createElement(Text, { size: 12, weight: 500 }, props.content)), /* @__PURE__ */ React22.createElement(question_default, null));
}

// src/design.system/image/image.tsx
import Image from "next/image";
import React23 from "react";
var IMAGE_STYLE = {
  borderRadius: 10
};
function ImageComponent({
  src,
  alt,
  width = 56,
  height = 56,
  style = {}
}) {
  return /* @__PURE__ */ React23.createElement(
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
import React26, { useState as useState4 } from "react";

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
import * as React24 from "react";
var SvgEyeOpen = (props) => /* @__PURE__ */ React24.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React24.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ React24.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React24.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ React24.createElement("path", { d: "M3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14M17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14Z", stroke: "#fff", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })));
var eye_open_default = SvgEyeOpen;

// src/assets/icons/eye-close.svg
import * as React25 from "react";
var SvgEyeClose = (props) => /* @__PURE__ */ React25.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React25.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ React25.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React25.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ React25.createElement("path", { d: "M9.60997 9.60714C8.05503 10.4549 7 12.1043 7 14C7 16.7614 9.23858 19 12 19C13.8966 19 15.5466 17.944 16.3941 16.3878M21 14C21 9.02944 16.9706 5 12 5C11.5582 5 11.1238 5.03184 10.699 5.09334M3 14C3 11.0069 4.46104 8.35513 6.70883 6.71886M3 3L21 21", stroke: "#fff", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })));
var eye_close_default = SvgEyeClose;

// src/design.system/input/input.tsx
function Input({
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
  return /* @__PURE__ */ React26.createElement(React26.Fragment, null, label && /* @__PURE__ */ React26.createElement(LabelWrapper, null, /* @__PURE__ */ React26.createElement(Text, { size: 14, weight: 600 }, label)), /* @__PURE__ */ React26.createElement(
    StyledInputContainer,
    {
      active: !!value || void 0,
      hasError: !!error,
      style: { ...style }
    },
    /* @__PURE__ */ React26.createElement(
      StyledInput,
      {
        type: showPassword ? "text" : type,
        value,
        onChange: handleChange,
        autoComplete: "off"
      }
    ),
    type === "password" && /* @__PURE__ */ React26.createElement(DisplayIconsWrapper, { onClick: () => setShowPassword(!showPassword) }, !showPassword ? /* @__PURE__ */ React26.createElement(eye_open_default, { width: 16, height: 16 }) : /* @__PURE__ */ React26.createElement(eye_close_default, { width: 16, height: 16 }))
  ), error && /* @__PURE__ */ React26.createElement(ErrorWrapper, null, /* @__PURE__ */ React26.createElement(Text, { size: 14, color: "#FD3F3F" }, error)));
}

// src/design.system/input/action.input.tsx
import React27 from "react";

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
function ActionInput({
  value,
  onChange,
  style = {},
  onAction
}) {
  function handleChange(event) {
    onChange(event.target.value);
  }
  return /* @__PURE__ */ React27.createElement(React27.Fragment, null, /* @__PURE__ */ React27.createElement(StyledActionInputContainer, { style: { ...style } }, /* @__PURE__ */ React27.createElement(
    StyledActionInput,
    {
      value,
      onChange: handleChange,
      autoComplete: "off"
    }
  ), /* @__PURE__ */ React27.createElement(Button, { onClick: onAction }, /* @__PURE__ */ React27.createElement(Text, { size: 14, weight: 500, color: palette_default.text.dark_button }, "Save"))));
}

// src/design.system/video/video.tsx
import React30, { useState as useState5 } from "react";

// src/assets/icons/close.svg
import * as React28 from "react";
var SvgClose = (props) => /* @__PURE__ */ React28.createElement("svg", { width: 26, height: 26, viewBox: "0 0 26 26", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React28.createElement("path", { d: "M17.7075 9.7075L14.4138 13L17.7075 16.2925C17.8004 16.3854 17.8741 16.4957 17.9244 16.6171C17.9747 16.7385 18.0006 16.8686 18.0006 17C18.0006 17.1314 17.9747 17.2615 17.9244 17.3829C17.8741 17.5043 17.8004 17.6146 17.7075 17.7075C17.6146 17.8004 17.5043 17.8741 17.3829 17.9244C17.2615 17.9747 17.1314 18.0006 17 18.0006C16.8686 18.0006 16.7385 17.9747 16.6171 17.9244C16.4957 17.8741 16.3854 17.8004 16.2925 17.7075L13 14.4137L9.70751 17.7075C9.6146 17.8004 9.5043 17.8741 9.3829 17.9244C9.26151 17.9747 9.1314 18.0006 9.00001 18.0006C8.86861 18.0006 8.7385 17.9747 8.61711 17.9244C8.49572 17.8741 8.38542 17.8004 8.29251 17.7075C8.1996 17.6146 8.12589 17.5043 8.07561 17.3829C8.02533 17.2615 7.99945 17.1314 7.99945 17C7.99945 16.8686 8.02533 16.7385 8.07561 16.6171C8.12589 16.4957 8.1996 16.3854 8.29251 16.2925L11.5863 13L8.29251 9.7075C8.10486 9.51986 7.99945 9.26536 7.99945 9C7.99945 8.73464 8.10486 8.48014 8.29251 8.2925C8.48015 8.10486 8.73464 7.99944 9.00001 7.99944C9.26537 7.99944 9.51987 8.10486 9.70751 8.2925L13 11.5863L16.2925 8.2925C16.3854 8.19959 16.4957 8.12589 16.6171 8.07561C16.7385 8.02532 16.8686 7.99944 17 7.99944C17.1314 7.99944 17.2615 8.02532 17.3829 8.07561C17.5043 8.12589 17.6146 8.19959 17.7075 8.2925C17.8004 8.38541 17.8741 8.49571 17.9244 8.6171C17.9747 8.7385 18.0006 8.8686 18.0006 9C18.0006 9.1314 17.9747 9.2615 17.9244 9.3829C17.8741 9.50429 17.8004 9.61459 17.7075 9.7075ZM26 13C26 15.5712 25.2376 18.0846 23.8091 20.2224C22.3807 22.3603 20.3503 24.0265 17.9749 25.0104C15.5995 25.9944 12.9856 26.2518 10.4638 25.7502C7.94208 25.2486 5.6257 24.0105 3.80762 22.1924C1.98953 20.3743 0.751405 18.0579 0.249797 15.5362C-0.251811 13.0144 0.0056327 10.4006 0.989572 8.02512C1.97351 5.64968 3.63975 3.61935 5.77759 2.1909C7.91543 0.762437 10.4288 0 13 0C16.4467 0.00363977 19.7512 1.37445 22.1884 3.81163C24.6256 6.24882 25.9964 9.5533 26 13ZM24 13C24 10.8244 23.3549 8.69767 22.1462 6.88873C20.9375 5.07979 19.2195 3.66989 17.2095 2.83733C15.1995 2.00476 12.9878 1.78692 10.854 2.21136C8.72022 2.6358 6.76021 3.68345 5.22183 5.22183C3.68345 6.7602 2.63581 8.72022 2.21137 10.854C1.78693 12.9878 2.00477 15.1995 2.83733 17.2095C3.66989 19.2195 5.07979 20.9375 6.88873 22.1462C8.69767 23.3549 10.8244 24 13 24C15.9164 23.9967 18.7123 22.8367 20.7745 20.7745C22.8367 18.7123 23.9967 15.9164 24 13Z", fill: "white" }));
var close_default = SvgClose;

// src/assets/icons/player.svg
import * as React29 from "react";
var SvgPlayer = (props) => /* @__PURE__ */ React29.createElement("svg", { width: 80, height: 80, viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React29.createElement("ellipse", { cx: 39.9999, cy: 40, rx: 40, ry: 40, fill: "white" }), /* @__PURE__ */ React29.createElement("path", { d: "M53.3383 39.9984C53.3392 40.3466 53.2468 40.6891 53.0703 40.9926C52.8937 41.2961 52.6389 41.5503 52.3307 41.7303L33.2292 53.0298C32.9071 53.2205 32.5383 53.3246 32.1607 53.3314C31.7832 53.3381 31.4106 53.2473 31.0815 53.0683C30.7555 52.892 30.4839 52.635 30.2947 52.3236C30.1055 52.0122 30.0055 51.6577 30.0049 51.2965V28.7002C30.0055 28.339 30.1055 27.9845 30.2947 27.6732C30.4839 27.3618 30.7555 27.1047 31.0815 26.9285C31.4106 26.7495 31.7832 26.6586 32.1607 26.6654C32.5383 26.6722 32.9071 26.7763 33.2292 26.9669L52.3307 38.2664C52.6389 38.4465 52.8937 38.7006 53.0703 39.0041C53.2468 39.3076 53.3392 39.6501 53.3383 39.9984Z", fill: "#132330" }));
var player_default = SvgPlayer;

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
function Video({ videoSrc, title, thumbnail }) {
  const [isLarge, setIsLarge] = useState5(false);
  const [pause, setPause] = useState5(true);
  const handleClick = () => {
    setIsLarge(true);
  };
  const handleClose = () => {
    setIsLarge(false);
    setPause(true);
  };
  const renderSmallView = () => /* @__PURE__ */ React30.createElement(React30.Fragment, null, /* @__PURE__ */ React30.createElement(Text, { size: 16, weight: 600 }, title), /* @__PURE__ */ React30.createElement(ImagePreviewWrapper, { onClick: handleClick, url: thumbnail }, /* @__PURE__ */ React30.createElement(PlayerIconWrapper, null, /* @__PURE__ */ React30.createElement(player_default, { width: 30 }))));
  const renderLargeView = () => /* @__PURE__ */ React30.createElement(LargeVideoContainer, null, /* @__PURE__ */ React30.createElement(LargeVideoHeader, null, /* @__PURE__ */ React30.createElement(Text, { size: 20, weight: 600 }, title), /* @__PURE__ */ React30.createElement(close_default, { onClick: handleClose, style: { cursor: "pointer" } })), !pause ? /* @__PURE__ */ React30.createElement(StyledLargeVideo, { src: videoSrc, autoPlay: true, controls: true }) : /* @__PURE__ */ React30.createElement(
    ImagePreviewWrapper,
    {
      url: thumbnail,
      style: { width: 980, height: 560 },
      onClick: () => setPause(false)
    },
    /* @__PURE__ */ React30.createElement(LargePlayerIconWrapper, null, /* @__PURE__ */ React30.createElement(player_default, { width: 80 }))
  ));
  return /* @__PURE__ */ React30.createElement("div", null, isLarge ? renderLargeView() : renderSmallView());
}

// src/design.system/loader/loader.tsx
import React31 from "react";

// src/design.system/loader/loader.styled.tsx
import styled17 from "styled-components";
var LoaderWrapper = styled17.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
var StyledLoader = styled17.div`
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
function Loader() {
  return /* @__PURE__ */ React31.createElement(LoaderWrapper, null, /* @__PURE__ */ React31.createElement(StyledLoader, null));
}

// src/design.system/notification/notification.tsx
import React35, { useEffect as useEffect3 } from "react";

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
import * as React32 from "react";
var SvgXBlue = (props) => /* @__PURE__ */ React32.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React32.createElement("path", { d: "M12.8535 12.146C12.9 12.1925 12.9368 12.2476 12.962 12.3083C12.9871 12.369 13.0001 12.4341 13.0001 12.4998C13.0001 12.5655 12.9871 12.6305 12.962 12.6912C12.9368 12.7519 12.9 12.8071 12.8535 12.8535C12.8071 12.9 12.7519 12.9368 12.6912 12.962C12.6305 12.9871 12.5655 13.0001 12.4998 13.0001C12.4341 13.0001 12.369 12.9871 12.3083 12.962C12.2476 12.9368 12.1925 12.9 12.146 12.8535L7.99979 8.70666L3.85354 12.8535C3.75972 12.9474 3.63247 13.0001 3.49979 13.0001C3.36711 13.0001 3.23986 12.9474 3.14604 12.8535C3.05222 12.7597 2.99951 12.6325 2.99951 12.4998C2.99951 12.3671 3.05222 12.2399 3.14604 12.146L7.29291 7.99979L3.14604 3.85354C3.05222 3.75972 2.99951 3.63247 2.99951 3.49979C2.99951 3.36711 3.05222 3.23986 3.14604 3.14604C3.23986 3.05222 3.36711 2.99951 3.49979 2.99951C3.63247 2.99951 3.75972 3.05222 3.85354 3.14604L7.99979 7.29291L12.146 3.14604C12.2399 3.05222 12.3671 2.99951 12.4998 2.99951C12.6325 2.99951 12.7597 3.05222 12.8535 3.14604C12.9474 3.23986 13.0001 3.36711 13.0001 3.49979C13.0001 3.63247 12.9474 3.75972 12.8535 3.85354L8.70666 7.99979L12.8535 12.146Z", fill: "#96F2FF" }));
var X_blue_default = SvgXBlue;

// src/assets/icons/success-notification.svg
import * as React33 from "react";
var SvgSuccessNotification = (props) => /* @__PURE__ */ React33.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React33.createElement("rect", { width: 24, height: 24, rx: 6, fill: "url(#paint0_linear_157_245)" }), /* @__PURE__ */ React33.createElement("rect", { width: 24, height: 24, rx: 6, fill: "url(#paint1_radial_157_245)", fillOpacity: 0.4 }), /* @__PURE__ */ React33.createElement("path", { d: "M18.3535 8.85354L10.3535 16.8535C10.3071 16.9 10.252 16.9369 10.1913 16.9621C10.1306 16.9872 10.0655 17.0002 9.99979 17.0002C9.93408 17.0002 9.86902 16.9872 9.80832 16.9621C9.74762 16.9369 9.69248 16.9 9.64604 16.8535L6.14604 13.3535C6.05222 13.2597 5.99951 13.1325 5.99951 12.9998C5.99951 12.8671 6.05222 12.7399 6.14604 12.646C6.23986 12.5522 6.36711 12.4995 6.49979 12.4995C6.63247 12.4995 6.75972 12.5522 6.85354 12.646L9.99979 15.7929L17.646 8.14604C17.7399 8.05222 17.8671 7.99951 17.9998 7.99951C18.1325 7.99951 18.2597 8.05222 18.3535 8.14604C18.4474 8.23986 18.5001 8.36711 18.5001 8.49979C18.5001 8.63247 18.4474 8.75972 18.3535 8.85354Z", fill: "#0EE6F3" }), /* @__PURE__ */ React33.createElement("defs", null, /* @__PURE__ */ React33.createElement("linearGradient", { id: "paint0_linear_157_245", x1: 12, y1: 0, x2: 12, y2: 24, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React33.createElement("stop", { stopColor: "#365963" }), /* @__PURE__ */ React33.createElement("stop", { offset: 1, stopColor: "#2B2F56" })), /* @__PURE__ */ React33.createElement("radialGradient", { id: "paint1_radial_157_245", cx: 0, cy: 0, r: 1, gradientUnits: "userSpaceOnUse", gradientTransform: "translate(24) rotate(120.009) scale(17.3221 18.6093)" }, /* @__PURE__ */ React33.createElement("stop", { stopColor: "#96F2FF" }), /* @__PURE__ */ React33.createElement("stop", { offset: 0.619146, stopColor: "#96F2FF", stopOpacity: 0 }))));
var success_notification_default = SvgSuccessNotification;

// src/assets/icons/error-notification.svg
import * as React34 from "react";
var SvgErrorNotification = (props) => /* @__PURE__ */ React34.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React34.createElement("rect", { width: 24, height: 24, rx: 6, fill: "url(#paint0_linear_157_648)" }), /* @__PURE__ */ React34.createElement("path", { d: "M12 5.5C10.7144 5.5 9.45772 5.88122 8.3888 6.59545C7.31988 7.30968 6.48676 8.32484 5.99479 9.51256C5.50282 10.7003 5.37409 12.0072 5.6249 13.2681C5.8757 14.529 6.49477 15.6872 7.40381 16.5962C8.31285 17.5052 9.47104 18.1243 10.7319 18.3751C11.9928 18.6259 13.2997 18.4972 14.4874 18.0052C15.6752 17.5132 16.6903 16.6801 17.4046 15.6112C18.1188 14.5423 18.5 13.2856 18.5 12C18.4982 10.2767 17.8128 8.62441 16.5942 7.40582C15.3756 6.18722 13.7234 5.50182 12 5.5ZM12 17.5C10.9122 17.5 9.84884 17.1774 8.94437 16.5731C8.0399 15.9687 7.33495 15.1098 6.91867 14.1048C6.50238 13.0998 6.39347 11.9939 6.60568 10.927C6.8179 9.86011 7.34173 8.8801 8.11092 8.11091C8.8801 7.34172 9.86011 6.8179 10.927 6.60568C11.9939 6.39346 13.0998 6.50238 14.1048 6.91866C15.1098 7.33494 15.9687 8.03989 16.5731 8.94436C17.1774 9.84883 17.5 10.9122 17.5 12C17.4983 13.4582 16.9184 14.8562 15.8873 15.8873C14.8562 16.9184 13.4582 17.4983 12 17.5ZM11.5 12.5V9C11.5 8.86739 11.5527 8.74021 11.6464 8.64645C11.7402 8.55268 11.8674 8.5 12 8.5C12.1326 8.5 12.2598 8.55268 12.3536 8.64645C12.4473 8.74021 12.5 8.86739 12.5 9V12.5C12.5 12.6326 12.4473 12.7598 12.3536 12.8536C12.2598 12.9473 12.1326 13 12 13C11.8674 13 11.7402 12.9473 11.6464 12.8536C11.5527 12.7598 11.5 12.6326 11.5 12.5ZM12.75 14.75C12.75 14.8983 12.706 15.0433 12.6236 15.1667C12.5412 15.29 12.4241 15.3861 12.287 15.4429C12.15 15.4997 11.9992 15.5145 11.8537 15.4856C11.7082 15.4566 11.5746 15.3852 11.4697 15.2803C11.3648 15.1754 11.2934 15.0418 11.2644 14.8963C11.2355 14.7508 11.2503 14.6 11.3071 14.463C11.3639 14.3259 11.46 14.2088 11.5833 14.1264C11.7067 14.044 11.8517 14 12 14C12.1989 14 12.3897 14.079 12.5303 14.2197C12.671 14.3603 12.75 14.5511 12.75 14.75Z", fill: "white" }), /* @__PURE__ */ React34.createElement("defs", null, /* @__PURE__ */ React34.createElement("linearGradient", { id: "paint0_linear_157_648", x1: 12, y1: 0, x2: 12, y2: 24, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React34.createElement("stop", { stopColor: "#FD3F3F" }), /* @__PURE__ */ React34.createElement("stop", { offset: 1, stopColor: "#2B2F56" }))));
var error_notification_default = SvgErrorNotification;

// src/design.system/notification/notification.tsx
function Notification({ type, message, onClose }) {
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
        return /* @__PURE__ */ React35.createElement(success_notification_default, null);
      case "error":
        return /* @__PURE__ */ React35.createElement(error_notification_default, null);
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
  return /* @__PURE__ */ React35.createElement(NotificationContainer, null, /* @__PURE__ */ React35.createElement(StyledNotification, { style: getNotificationStyle() }, getIcon(), /* @__PURE__ */ React35.createElement(Text, { weight: 500, size: 14 }, message), /* @__PURE__ */ React35.createElement(X_blue_default, { onClick: onClose })));
}

// src/design.system/data.flow/index.tsx
import React47, { useEffect as useEffect4 } from "react";
import ReactFlow, {
  Background,
  Controls,
  useReactFlow,
  ReactFlowProvider
} from "reactflow";

// src/design.system/data.flow/keyval.middleware.tsx
import React38 from "react";
import { Handle, Position } from "reactflow";

// src/assets/icons/overview/middleware.svg
import * as React36 from "react";
var SvgMiddleware = (props) => /* @__PURE__ */ React36.createElement("svg", { width: 80, height: 80, viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React36.createElement("circle", { cx: 40, cy: 40, r: 40, fill: "url(#paint0_linear_280_10690)" }), /* @__PURE__ */ React36.createElement("circle", { cx: 40, cy: 40, r: 40, fill: "url(#paint1_radial_280_10690)", fillOpacity: 0.4 }), /* @__PURE__ */ React36.createElement("circle", { cx: 40, cy: 40, r: 39.625, stroke: "url(#paint2_linear_280_10690)", strokeOpacity: 0.5, strokeWidth: 0.75 }), /* @__PURE__ */ React36.createElement("path", { opacity: 0.2, d: "M37.3925 36.35L40 40L37.3925 43.65C36.6523 44.6862 35.6755 45.5307 34.5432 46.1134C33.4109 46.6961 32.1559 47 30.8825 47H28V33H30.8825C32.1559 33 33.4109 33.3039 34.5432 33.8866C35.6755 34.4693 36.6523 35.3138 37.3925 36.35ZM49.1175 33C47.8441 33 46.5891 33.3039 45.4568 33.8866C44.3245 34.4693 43.3477 35.3138 42.6075 36.35L40 40L42.6075 43.65C43.3477 44.6862 44.3245 45.5307 45.4568 46.1134C46.5891 46.6961 47.8441 47 49.1175 47H53V33H49.1175Z", fill: "#96F2FF" }), /* @__PURE__ */ React36.createElement("path", { d: "M53.7075 46.2921C53.8005 46.385 53.8742 46.4952 53.9246 46.6166C53.9749 46.738 54.0008 46.8682 54.0008 46.9996C54.0008 47.131 53.9749 47.2611 53.9246 47.3825C53.8742 47.5039 53.8005 47.6142 53.7075 47.7071L50.7075 50.7071C50.5199 50.8947 50.2654 51.0001 50 51.0001C49.7346 51.0001 49.4801 50.8947 49.2925 50.7071C49.1049 50.5194 48.9994 50.2649 48.9994 49.9996C48.9994 49.7342 49.1049 49.4797 49.2925 49.2921L50.5863 47.9996H49.1175C47.6851 47.9984 46.2737 47.6559 45.0001 47.0005C43.7264 46.3451 42.6273 45.3957 41.7938 44.2308L36.5787 36.9308C35.9304 36.0249 35.0755 35.2865 34.0849 34.7767C33.0943 34.267 31.9965 34.0006 30.8825 33.9996H28C27.7348 33.9996 27.4804 33.8942 27.2929 33.7067C27.1054 33.5191 27 33.2648 27 32.9996C27 32.7344 27.1054 32.48 27.2929 32.2925C27.4804 32.1049 27.7348 31.9996 28 31.9996H30.8825C32.3149 32.0008 33.7263 32.3433 34.9999 32.9986C36.2736 33.654 37.3727 34.6035 38.2063 35.7683L43.4212 43.0683C44.0696 43.9743 44.9245 44.7127 45.9151 45.2224C46.9057 45.7322 48.0035 45.9986 49.1175 45.9996H50.5863L49.2925 44.7071C49.1049 44.5194 48.9994 44.2649 48.9994 43.9996C48.9994 43.7342 49.1049 43.4797 49.2925 43.2921C49.4801 43.1044 49.7346 42.999 50 42.999C50.2654 42.999 50.5199 43.1044 50.7075 43.2921L53.7075 46.2921ZM41.875 37.3746C41.9819 37.4509 42.1027 37.5055 42.2307 37.5351C42.3586 37.5647 42.4911 37.5688 42.6207 37.5473C42.7502 37.5257 42.8742 37.4788 42.9856 37.4092C43.097 37.3397 43.1937 37.2489 43.27 37.1421L43.42 36.9333C44.0682 36.0268 44.9232 35.2878 45.914 34.7776C46.9049 34.2674 48.003 34.0007 49.1175 33.9996H50.5863L49.2925 35.2921C49.1049 35.4797 48.9994 35.7342 48.9994 35.9996C48.9994 36.2649 49.1049 36.5194 49.2925 36.7071C49.4801 36.8947 49.7346 37.0001 50 37.0001C50.2654 37.0001 50.5199 36.8947 50.7075 36.7071L53.7075 33.7071C53.8005 33.6142 53.8742 33.5039 53.9246 33.3825C53.9749 33.2611 54.0008 33.131 54.0008 32.9996C54.0008 32.8682 53.9749 32.738 53.9246 32.6166C53.8742 32.4952 53.8005 32.385 53.7075 32.2921L50.7075 29.2921C50.5199 29.1044 50.2654 28.999 50 28.999C49.7346 28.999 49.4801 29.1044 49.2925 29.2921C49.1049 29.4797 48.9994 29.7342 48.9994 29.9996C48.9994 30.2649 49.1049 30.5194 49.2925 30.7071L50.5863 31.9996H49.1175C47.6851 32.0008 46.2737 32.3433 45.0001 32.9986C43.7264 33.654 42.6273 34.6035 41.7938 35.7683L41.6437 35.9771C41.567 36.0839 41.512 36.2049 41.4821 36.3331C41.4521 36.4612 41.4478 36.594 41.4693 36.7238C41.4908 36.8537 41.5377 36.978 41.6073 37.0896C41.6769 37.2013 41.7679 37.2981 41.875 37.3746ZM38.125 42.6246C38.0181 42.5482 37.8973 42.4937 37.7693 42.4641C37.6414 42.4345 37.5089 42.4303 37.3793 42.4519C37.2498 42.4735 37.1258 42.5204 37.0144 42.5899C36.903 42.6594 36.8063 42.7502 36.73 42.8571L36.58 43.0658C35.9318 43.9724 35.0768 44.7114 34.086 45.2216C33.0951 45.7318 31.997 45.9985 30.8825 45.9996H28C27.7348 45.9996 27.4804 46.1049 27.2929 46.2925C27.1054 46.48 27 46.7344 27 46.9996C27 47.2648 27.1054 47.5192 27.2929 47.7067C27.4804 47.8942 27.7348 47.9996 28 47.9996H30.8825C32.3149 47.9984 33.7263 47.6559 34.9999 47.0005C36.2736 46.3451 37.3727 45.3957 38.2063 44.2308L38.3562 44.0221C38.433 43.9152 38.488 43.7942 38.5179 43.6661C38.5479 43.5379 38.5522 43.4052 38.5307 43.2753C38.5092 43.1455 38.4623 43.0212 38.3927 42.9095C38.3231 42.7978 38.2321 42.701 38.125 42.6246Z", fill: "#96F2FF" }), /* @__PURE__ */ React36.createElement("defs", null, /* @__PURE__ */ React36.createElement("linearGradient", { id: "paint0_linear_280_10690", x1: 40, y1: 0, x2: 40, y2: 80, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React36.createElement("stop", { stopColor: "#2E4C55" }), /* @__PURE__ */ React36.createElement("stop", { offset: 1, stopColor: "#303355" })), /* @__PURE__ */ React36.createElement("radialGradient", { id: "paint1_radial_280_10690", cx: 0, cy: 0, r: 1, gradientUnits: "userSpaceOnUse", gradientTransform: "translate(80 -2.98023e-06) rotate(120.009) scale(57.7403 62.0308)" }, /* @__PURE__ */ React36.createElement("stop", { stopColor: "#96F2FF" }), /* @__PURE__ */ React36.createElement("stop", { offset: 0.619146, stopColor: "#96F2FF", stopOpacity: 0 })), /* @__PURE__ */ React36.createElement("linearGradient", { id: "paint2_linear_280_10690", x1: 40, y1: 0, x2: 40, y2: 80, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React36.createElement("stop", { stopColor: "#96F2FF" }), /* @__PURE__ */ React36.createElement("stop", { offset: 1, stopColor: "#96F2FF", stopOpacity: 0 }))));
var middleware_default = SvgMiddleware;

// src/assets/icons/overview/folder.svg
import * as React37 from "react";
var SvgFolder = (props) => /* @__PURE__ */ React37.createElement("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React37.createElement("rect", { width: 32, height: 32, rx: 4, fill: "url(#paint0_linear_280_5350)" }), /* @__PURE__ */ React37.createElement("rect", { width: 32, height: 32, rx: 4, fill: "url(#paint1_radial_280_5350)", fillOpacity: 0.4 }), /* @__PURE__ */ React37.createElement("path", { opacity: 0.2, d: "M25.75 11.5V19.8334C25.75 20.0102 25.6798 20.1798 25.5548 20.3048C25.4298 20.4298 25.2602 20.5 25.0834 20.5H22.75V14.5C22.75 14.3011 22.671 14.1103 22.5303 13.9697C22.3897 13.829 22.1989 13.75 22 13.75H15.5003C15.338 13.75 15.1801 13.6974 15.0503 13.6L12.4497 11.65C12.3199 11.5526 12.162 11.5 11.9997 11.5H10V9.25C10 9.05109 10.079 8.86032 10.2197 8.71967C10.3603 8.57902 10.5511 8.5 10.75 8.5H14.9997C15.162 8.5 15.3199 8.55263 15.4497 8.65L18.0503 10.6C18.1801 10.6974 18.338 10.75 18.5003 10.75H25C25.1989 10.75 25.3897 10.829 25.5303 10.9697C25.671 11.1103 25.75 11.3011 25.75 11.5Z", fill: "#96F2FF" }), /* @__PURE__ */ React37.createElement("path", { d: "M25 10H18.5003L15.8997 8.05C15.6397 7.85599 15.3241 7.7508 14.9997 7.75H10.75C10.3522 7.75 9.97064 7.90804 9.68934 8.18934C9.40804 8.47064 9.25 8.85218 9.25 9.25V10.75H7.75C7.35218 10.75 6.97064 10.908 6.68934 11.1893C6.40804 11.4706 6.25 11.8522 6.25 12.25V22.75C6.25 23.1478 6.40804 23.5294 6.68934 23.8107C6.97064 24.092 7.35218 24.25 7.75 24.25H22.0834C22.459 24.2495 22.819 24.1001 23.0846 23.8346C23.3501 23.569 23.4995 23.209 23.5 22.8334V21.25H25.0834C25.459 21.2495 25.819 21.1001 26.0846 20.8346C26.3501 20.569 26.4995 20.209 26.5 19.8334V11.5C26.5 11.1022 26.342 10.7206 26.0607 10.4393C25.7794 10.158 25.3978 10 25 10ZM22 22.75H7.75V12.25H11.9997L14.6003 14.2C14.8603 14.394 15.1759 14.4992 15.5003 14.5H22V22.75ZM25 19.75H23.5V14.5C23.5 14.1022 23.342 13.7206 23.0607 13.4393C22.7794 13.158 22.3978 13 22 13H15.5003L12.8997 11.05C12.6397 10.856 12.3241 10.7508 11.9997 10.75H10.75V9.25H14.9997L17.6003 11.2C17.8603 11.394 18.1759 11.4992 18.5003 11.5H25V19.75Z", fill: "#96F2FF" }), /* @__PURE__ */ React37.createElement("rect", { x: 0.375, y: 0.375, width: 31.25, height: 31.25, rx: 3.625, stroke: "url(#paint2_linear_280_5350)", strokeOpacity: 0.5, strokeWidth: 0.75 }), /* @__PURE__ */ React37.createElement("defs", null, /* @__PURE__ */ React37.createElement("linearGradient", { id: "paint0_linear_280_5350", x1: 16, y1: 0, x2: 16, y2: 32, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React37.createElement("stop", { stopColor: "#2E4C55" }), /* @__PURE__ */ React37.createElement("stop", { offset: 1, stopColor: "#303355" })), /* @__PURE__ */ React37.createElement("radialGradient", { id: "paint1_radial_280_5350", cx: 0, cy: 0, r: 1, gradientUnits: "userSpaceOnUse", gradientTransform: "translate(32 -1.19209e-06) rotate(120.009) scale(23.0961 24.8123)" }, /* @__PURE__ */ React37.createElement("stop", { stopColor: "#96F2FF" }), /* @__PURE__ */ React37.createElement("stop", { offset: 0.619146, stopColor: "#96F2FF", stopOpacity: 0 })), /* @__PURE__ */ React37.createElement("linearGradient", { id: "paint2_linear_280_5350", x1: 16, y1: 0, x2: 16, y2: 32, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React37.createElement("stop", { stopColor: "#96F2FF" }), /* @__PURE__ */ React37.createElement("stop", { offset: 1, stopColor: "#96F2FF", stopOpacity: 0 }))));
var folder_default = SvgFolder;

// src/design.system/data.flow/keyval.middleware.tsx
function NamespaceNode({ isConnectable }) {
  return /* @__PURE__ */ React38.createElement("div", null, /* @__PURE__ */ React38.createElement(
    Handle,
    {
      type: "target",
      position: Position.Left,
      style: { visibility: "hidden" }
    }
  ), /* @__PURE__ */ React38.createElement(middleware_default, null), /* @__PURE__ */ React38.createElement(
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
import React39, { memo as memo2 } from "react";
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
  return /* @__PURE__ */ React39.createElement(NamespaceContainer, null, /* @__PURE__ */ React39.createElement(folder_default, { width: 32 }), /* @__PURE__ */ React39.createElement(TextWrapper2, null, /* @__PURE__ */ React39.createElement(Text, { size: 14, weight: 600 }, data?.name), /* @__PURE__ */ React39.createElement(
    Text,
    {
      color: "#8b92a5"
    },
    `${data?.totalAppsInstrumented} Apps Instrumented`
  )), /* @__PURE__ */ React39.createElement(
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
import React46 from "react";
import { Handle as Handle3, Position as Position3 } from "reactflow";
import { styled as styled20 } from "styled-components";

// src/assets/icons/logs-grey.svg
import * as React40 from "react";
var SvgLogsGrey = (props) => /* @__PURE__ */ React40.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React40.createElement("path", { d: "M2 4C2 3.86739 2.05268 3.74021 2.14645 3.64645C2.24021 3.55268 2.36739 3.5 2.5 3.5H13.5C13.6326 3.5 13.7598 3.55268 13.8536 3.64645C13.9473 3.74021 14 3.86739 14 4C14 4.13261 13.9473 4.25979 13.8536 4.35355C13.7598 4.44732 13.6326 4.5 13.5 4.5H2.5C2.36739 4.5 2.24021 4.44732 2.14645 4.35355C2.05268 4.25979 2 4.13261 2 4ZM2.5 7H10.5C10.6326 7 10.7598 6.94732 10.8536 6.85355C10.9473 6.75979 11 6.63261 11 6.5C11 6.36739 10.9473 6.24021 10.8536 6.14645C10.7598 6.05268 10.6326 6 10.5 6H2.5C2.36739 6 2.24021 6.05268 2.14645 6.14645C2.05268 6.24021 2 6.36739 2 6.5C2 6.63261 2.05268 6.75979 2.14645 6.85355C2.24021 6.94732 2.36739 7 2.5 7ZM13.5 8.5H2.5C2.36739 8.5 2.24021 8.55268 2.14645 8.64645C2.05268 8.74021 2 8.86739 2 9C2 9.13261 2.05268 9.25979 2.14645 9.35355C2.24021 9.44732 2.36739 9.5 2.5 9.5H13.5C13.6326 9.5 13.7598 9.44732 13.8536 9.35355C13.9473 9.25979 14 9.13261 14 9C14 8.86739 13.9473 8.74021 13.8536 8.64645C13.7598 8.55268 13.6326 8.5 13.5 8.5ZM10.5 11H2.5C2.36739 11 2.24021 11.0527 2.14645 11.1464C2.05268 11.2402 2 11.3674 2 11.5C2 11.6326 2.05268 11.7598 2.14645 11.8536C2.24021 11.9473 2.36739 12 2.5 12H10.5C10.6326 12 10.7598 11.9473 10.8536 11.8536C10.9473 11.7598 11 11.6326 11 11.5C11 11.3674 10.9473 11.2402 10.8536 11.1464C10.7598 11.0527 10.6326 11 10.5 11Z", fill: "#8B92A5" }));
var logs_grey_default = SvgLogsGrey;

// src/assets/icons/logs-blue.svg
import * as React41 from "react";
var SvgLogsBlue = (props) => /* @__PURE__ */ React41.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React41.createElement("path", { d: "M2 4C2 3.86739 2.05268 3.74021 2.14645 3.64645C2.24021 3.55268 2.36739 3.5 2.5 3.5H13.5C13.6326 3.5 13.7598 3.55268 13.8536 3.64645C13.9473 3.74021 14 3.86739 14 4C14 4.13261 13.9473 4.25979 13.8536 4.35355C13.7598 4.44732 13.6326 4.5 13.5 4.5H2.5C2.36739 4.5 2.24021 4.44732 2.14645 4.35355C2.05268 4.25979 2 4.13261 2 4ZM2.5 7H10.5C10.6326 7 10.7598 6.94732 10.8536 6.85355C10.9473 6.75979 11 6.63261 11 6.5C11 6.36739 10.9473 6.24021 10.8536 6.14645C10.7598 6.05268 10.6326 6 10.5 6H2.5C2.36739 6 2.24021 6.05268 2.14645 6.14645C2.05268 6.24021 2 6.36739 2 6.5C2 6.63261 2.05268 6.75979 2.14645 6.85355C2.24021 6.94732 2.36739 7 2.5 7ZM13.5 8.5H2.5C2.36739 8.5 2.24021 8.55268 2.14645 8.64645C2.05268 8.74021 2 8.86739 2 9C2 9.13261 2.05268 9.25979 2.14645 9.35355C2.24021 9.44732 2.36739 9.5 2.5 9.5H13.5C13.6326 9.5 13.7598 9.44732 13.8536 9.35355C13.9473 9.25979 14 9.13261 14 9C14 8.86739 13.9473 8.74021 13.8536 8.64645C13.7598 8.55268 13.6326 8.5 13.5 8.5ZM10.5 11H2.5C2.36739 11 2.24021 11.0527 2.14645 11.1464C2.05268 11.2402 2 11.3674 2 11.5C2 11.6326 2.05268 11.7598 2.14645 11.8536C2.24021 11.9473 2.36739 12 2.5 12H10.5C10.6326 12 10.7598 11.9473 10.8536 11.8536C10.9473 11.7598 11 11.6326 11 11.5C11 11.3674 10.9473 11.2402 10.8536 11.1464C10.7598 11.0527 10.6326 11 10.5 11Z", fill: "#96F2FF" }));
var logs_blue_default = SvgLogsBlue;

// src/assets/icons/chart-line-grey.svg
import * as React42 from "react";
var SvgChartLineGrey = (props) => /* @__PURE__ */ React42.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React42.createElement("path", { d: "M14.5 13C14.5 13.1326 14.4473 13.2598 14.3536 13.3536C14.2598 13.4473 14.1326 13.5 14 13.5H2C1.86739 13.5 1.74021 13.4473 1.64645 13.3536C1.55268 13.2598 1.5 13.1326 1.5 13V3C1.5 2.86739 1.55268 2.74021 1.64645 2.64645C1.74021 2.55268 1.86739 2.5 2 2.5C2.13261 2.5 2.25979 2.55268 2.35355 2.64645C2.44732 2.74021 2.5 2.86739 2.5 3V8.89812L5.67063 6.125C5.7569 6.04947 5.86652 6.0059 5.9811 6.00157C6.09569 5.99725 6.20828 6.03244 6.3 6.10125L9.97563 8.85812L13.6706 5.625C13.7191 5.57704 13.7768 5.5395 13.8403 5.51467C13.9038 5.48985 13.9717 5.47827 14.0398 5.48065C14.1079 5.48303 14.1749 5.49931 14.2365 5.5285C14.2981 5.55769 14.3531 5.59917 14.398 5.65038C14.443 5.7016 14.4771 5.76148 14.4981 5.82633C14.5191 5.89119 14.5266 5.95965 14.5201 6.02752C14.5137 6.09538 14.4935 6.16122 14.4607 6.22097C14.4279 6.28073 14.3832 6.33314 14.3294 6.375L10.3294 9.875C10.2431 9.95053 10.1335 9.9941 10.0189 9.99843C9.90431 10.0028 9.79172 9.96756 9.7 9.89875L6.02437 7.14313L2.5 10.2269V12.5H14C14.1326 12.5 14.2598 12.5527 14.3536 12.6464C14.4473 12.7402 14.5 12.8674 14.5 13Z", fill: "#8B92A5" }));
var chart_line_grey_default = SvgChartLineGrey;

// src/assets/icons/chart-line-blue.svg
import * as React43 from "react";
var SvgChartLineBlue = (props) => /* @__PURE__ */ React43.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React43.createElement("path", { d: "M14.5 13C14.5 13.1326 14.4473 13.2598 14.3536 13.3536C14.2598 13.4473 14.1326 13.5 14 13.5H2C1.86739 13.5 1.74021 13.4473 1.64645 13.3536C1.55268 13.2598 1.5 13.1326 1.5 13V3C1.5 2.86739 1.55268 2.74021 1.64645 2.64645C1.74021 2.55268 1.86739 2.5 2 2.5C2.13261 2.5 2.25979 2.55268 2.35355 2.64645C2.44732 2.74021 2.5 2.86739 2.5 3V8.89812L5.67063 6.125C5.7569 6.04947 5.86652 6.0059 5.9811 6.00157C6.09569 5.99725 6.20828 6.03244 6.3 6.10125L9.97563 8.85812L13.6706 5.625C13.7191 5.57704 13.7768 5.5395 13.8403 5.51467C13.9038 5.48985 13.9717 5.47827 14.0398 5.48065C14.1079 5.48303 14.1749 5.49931 14.2365 5.5285C14.2981 5.55769 14.3531 5.59917 14.398 5.65038C14.443 5.7016 14.4771 5.76148 14.4981 5.82633C14.5191 5.89119 14.5266 5.95965 14.5201 6.02752C14.5137 6.09538 14.4935 6.16122 14.4607 6.22097C14.4279 6.28073 14.3832 6.33314 14.3294 6.375L10.3294 9.875C10.2431 9.95053 10.1335 9.9941 10.0189 9.99843C9.90431 10.0028 9.79172 9.96756 9.7 9.89875L6.02437 7.14313L2.5 10.2269V12.5H14C14.1326 12.5 14.2598 12.5527 14.3536 12.6464C14.4473 12.7402 14.5 12.8674 14.5 13Z", fill: "#96F2FF" }));
var chart_line_blue_default = SvgChartLineBlue;

// src/assets/icons/tree-structure-grey.svg
import * as React44 from "react";
var SvgTreeStructureGrey = (props) => /* @__PURE__ */ React44.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React44.createElement("path", { d: "M10.5 7H13.5C13.7652 7 14.0196 6.89464 14.2071 6.70711C14.3946 6.51957 14.5 6.26522 14.5 6V3C14.5 2.73478 14.3946 2.48043 14.2071 2.29289C14.0196 2.10536 13.7652 2 13.5 2H10.5C10.2348 2 9.98043 2.10536 9.79289 2.29289C9.60536 2.48043 9.5 2.73478 9.5 3V4H9C8.46957 4 7.96086 4.21071 7.58579 4.58579C7.21071 4.96086 7 5.46957 7 6V7.5H5V7C5 6.73478 4.89464 6.48043 4.70711 6.29289C4.51957 6.10536 4.26522 6 4 6H2C1.73478 6 1.48043 6.10536 1.29289 6.29289C1.10536 6.48043 1 6.73478 1 7V9C1 9.26522 1.10536 9.51957 1.29289 9.70711C1.48043 9.89464 1.73478 10 2 10H4C4.26522 10 4.51957 9.89464 4.70711 9.70711C4.89464 9.51957 5 9.26522 5 9V8.5H7V10C7 10.5304 7.21071 11.0391 7.58579 11.4142C7.96086 11.7893 8.46957 12 9 12H9.5V13C9.5 13.2652 9.60536 13.5196 9.79289 13.7071C9.98043 13.8946 10.2348 14 10.5 14H13.5C13.7652 14 14.0196 13.8946 14.2071 13.7071C14.3946 13.5196 14.5 13.2652 14.5 13V10C14.5 9.73478 14.3946 9.48043 14.2071 9.29289C14.0196 9.10536 13.7652 9 13.5 9H10.5C10.2348 9 9.98043 9.10536 9.79289 9.29289C9.60536 9.48043 9.5 9.73478 9.5 10V11H9C8.73478 11 8.48043 10.8946 8.29289 10.7071C8.10536 10.5196 8 10.2652 8 10V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H9.5V6C9.5 6.26522 9.60536 6.51957 9.79289 6.70711C9.98043 6.89464 10.2348 7 10.5 7ZM4 9H2V7H4V9ZM10.5 10H13.5V13H10.5V10ZM10.5 3H13.5V6H10.5V3Z", fill: "#8B92A5" }));
var tree_structure_grey_default = SvgTreeStructureGrey;

// src/assets/icons/tree-structure-blue.svg
import * as React45 from "react";
var SvgTreeStructureBlue = (props) => /* @__PURE__ */ React45.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React45.createElement("path", { d: "M10.5 7H13.5C13.7652 7 14.0196 6.89464 14.2071 6.70711C14.3946 6.51957 14.5 6.26522 14.5 6V3C14.5 2.73478 14.3946 2.48043 14.2071 2.29289C14.0196 2.10536 13.7652 2 13.5 2H10.5C10.2348 2 9.98043 2.10536 9.79289 2.29289C9.60536 2.48043 9.5 2.73478 9.5 3V4H9C8.46957 4 7.96086 4.21071 7.58579 4.58579C7.21071 4.96086 7 5.46957 7 6V7.5H5V7C5 6.73478 4.89464 6.48043 4.70711 6.29289C4.51957 6.10536 4.26522 6 4 6H2C1.73478 6 1.48043 6.10536 1.29289 6.29289C1.10536 6.48043 1 6.73478 1 7V9C1 9.26522 1.10536 9.51957 1.29289 9.70711C1.48043 9.89464 1.73478 10 2 10H4C4.26522 10 4.51957 9.89464 4.70711 9.70711C4.89464 9.51957 5 9.26522 5 9V8.5H7V10C7 10.5304 7.21071 11.0391 7.58579 11.4142C7.96086 11.7893 8.46957 12 9 12H9.5V13C9.5 13.2652 9.60536 13.5196 9.79289 13.7071C9.98043 13.8946 10.2348 14 10.5 14H13.5C13.7652 14 14.0196 13.8946 14.2071 13.7071C14.3946 13.5196 14.5 13.2652 14.5 13V10C14.5 9.73478 14.3946 9.48043 14.2071 9.29289C14.0196 9.10536 13.7652 9 13.5 9H10.5C10.2348 9 9.98043 9.10536 9.79289 9.29289C9.60536 9.48043 9.5 9.73478 9.5 10V11H9C8.73478 11 8.48043 10.8946 8.29289 10.7071C8.10536 10.5196 8 10.2652 8 10V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H9.5V6C9.5 6.26522 9.60536 6.51957 9.79289 6.70711C9.98043 6.89464 10.2348 7 10.5 7ZM4 9H2V7H4V9ZM10.5 10H13.5V13H10.5V10ZM10.5 3H13.5V6H10.5V3Z", fill: "#96F2FF" }));
var tree_structure_blue_default = SvgTreeStructureBlue;

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
    return MONITORING_OPTIONS.map((monitor) => /* @__PURE__ */ React46.createElement(
      IconWrapper,
      {
        key: monitor?.id,
        tapped: data?.signals[monitor?.type] || false
      },
      data?.signals[monitor?.type] ? monitor.icons.focus() : monitor.icons.notFocus()
    ));
  }
  return /* @__PURE__ */ React46.createElement(DestinationNodeContainer, null, /* @__PURE__ */ React46.createElement(NodeDataWrapper, null, /* @__PURE__ */ React46.createElement(
    ImageComponent,
    {
      src: data?.destination_type?.image_url,
      width: 40,
      height: 40,
      style: IMAGE_STYLE2
    }
  ), /* @__PURE__ */ React46.createElement(TextWrapper3, null, /* @__PURE__ */ React46.createElement(Text, { size: 14, weight: 600 }, data?.destination_type?.display_name), /* @__PURE__ */ React46.createElement(Text, { color: "#8b92a5" }, data?.name))), /* @__PURE__ */ React46.createElement(MonitorsListWrapper, null, renderMonitors()), /* @__PURE__ */ React46.createElement(
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
  return /* @__PURE__ */ React47.createElement(DataFlowContainer, null, /* @__PURE__ */ React47.createElement(
    ReactFlow,
    {
      nodes,
      edges,
      nodeTypes,
      nodesDraggable: false,
      nodeOrigin: [0.4, 0.4]
    },
    /* @__PURE__ */ React47.createElement(ControllerWrapper, null, /* @__PURE__ */ React47.createElement(Controls, { position: "top-left", showInteractive: false })),
    /* @__PURE__ */ React47.createElement(Background, { gap: 12, size: 1, style: { backgroundColor } })
  ));
}
function KeyvalDataFlow(props) {
  return /* @__PURE__ */ React47.createElement(ReactFlowProvider, null, /* @__PURE__ */ React47.createElement(DataFlow, { ...props }));
}

// src/design.system/danger.zone/danger.zone.tsx
import React48 from "react";
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
  return /* @__PURE__ */ React48.createElement(React48.Fragment, null, /* @__PURE__ */ React48.createElement(DangerZoneWrapper, null, /* @__PURE__ */ React48.createElement(Text, { size: 14, weight: 600 }, title), /* @__PURE__ */ React48.createElement(Text, { size: 12 }, subTitle), /* @__PURE__ */ React48.createElement(DangerButtonWrapper, null, /* @__PURE__ */ React48.createElement(DangerButton, { onClick }, /* @__PURE__ */ React48.createElement(Text, { weight: 500, size: 14, color: palette_default.colors.error }, btnText)))));
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
import * as React49 from "react";
var SvgCloseModal = (props) => /* @__PURE__ */ React49.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentColor", className: "bi bi-x", viewBox: "0 0 16 16", ...props }, /* @__PURE__ */ React49.createElement("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" }));
var close_modal_default = SvgCloseModal;

// src/design.system/modal/modal.tsx
function Modal({ children, closeModal, config }) {
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
    /* @__PURE__ */ React.createElement(ModalContainer, { padding: config.padding, ref: modalRef }, config.showHeader && /* @__PURE__ */ React.createElement(ModalHeader, null, /* @__PURE__ */ React.createElement(Text, { weight: 500, color: palette_default.text.dark_button }, config.title)), /* @__PURE__ */ React.createElement(Close, { onClick: closeModal }, /* @__PURE__ */ React.createElement(close_modal_default, null)), /* @__PURE__ */ React.createElement(Content, null, children), config?.footer && /* @__PURE__ */ React.createElement(ModalFooter, null, /* @__PURE__ */ React.createElement(PrimaryButton, { onClick: config.footer.primaryBtnAction }, /* @__PURE__ */ React.createElement(Text, { size: 14, weight: 500, color: "#5c5c5c" }, config.footer.primaryBtnText))))
  )));
}

// src/design.system/theme.provider/theme.provider.tsx
import React50 from "react";
import { ThemeProvider } from "styled-components";
var ThemeProviderWrapper = ({
  children
}) => {
  return /* @__PURE__ */ React50.createElement(ThemeProvider, { theme: palette_default }, children);
};
export {
  ActionInput,
  Button,
  Card,
  Checkbox,
  DangerZone,
  KeyvalDataFlow as DataFlow,
  DropDown,
  FloatBox,
  ImageComponent as Image,
  Input,
  Link,
  Loader,
  Modal,
  Notification,
  RadioButton,
  SearchInput,
  SelectedCounter,
  Switch,
  Tag,
  Tap,
  Text,
  ThemeProviderWrapper,
  Tooltip,
  Video
};
//# sourceMappingURL=index.mjs.map