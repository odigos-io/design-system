// src/design.system/radio/radio.tsx
import React3 from "react";

// src/design.system/radio/radio.styled.tsx
import styled from "styled-components";
var RadioButtonContainer = styled.label`
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
import React from "react";

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
  return /* @__PURE__ */ React.createElement(
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
import * as React2 from "react";
var SvgCheckedRadio = (props) => /* @__PURE__ */ React2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 15, height: 15, viewBox: "0 0 18 18", fill: "none", ...props }, /* @__PURE__ */ React2.createElement("rect", { x: 0.5, y: 0.5, width: 17, height: 17, rx: 8.5, fill: "#96F2FF", stroke: "#96F2FF" }), /* @__PURE__ */ React2.createElement("path", { d: "M13.7727 6L7.39773 12.375L4.5 9.47727", stroke: "#132330", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }));
var checked_radio_default = SvgCheckedRadio;

// src/design.system/radio/radio.tsx
var RadioButton = ({
  label = "",
  onChange,
  value,
  size = 25,
  textStyles = {}
}) => {
  function handleChange() {
    onChange && onChange({});
  }
  return /* @__PURE__ */ React3.createElement(RadioButtonContainer, null, /* @__PURE__ */ React3.createElement(
    "div",
    {
      onClick: handleChange,
      style: { display: "flex", alignItems: "center" }
    },
    value ? /* @__PURE__ */ React3.createElement(checked_radio_default, { width: size, height: size }) : /* @__PURE__ */ React3.createElement(RadioButtonBorder, { style: { width: size, height: size } })
  ), /* @__PURE__ */ React3.createElement(Text, { ...textStyles }, label));
};

// src/design.system/button/button.tsx
import React4 from "react";

// src/design.system/button/button.styled.tsx
import styled3 from "styled-components";
var ButtonContainer = styled3.div`
  :hover {
    background: ${({ theme: theme2, disabled, variant }) => disabled ? theme2.colors.blue_grey : variant === "primary" ? theme2.colors.torquiz_light : "transparent"};
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
  border: 1px solid
    ${({ theme: theme2, variant }) => variant === "primary" ? "transparent" : theme2.colors.secondary};
  cursor: ${({ disabled }) => disabled ? "not-allowed !important" : "pointer !important"};
  background: ${({ theme: theme2, disabled, variant }) => disabled ? variant === "primary" ? theme2.colors.blue_grey : "transparent" : variant === "primary" ? theme2.colors.secondary : "transparent"};
  justify-content: center;
  align-items: center;
  opacity: ${({ disabled, variant }) => variant !== "primary" && disabled ? 0.5 : 1};
`;

// src/design.system/button/button.tsx
var Button = ({
  variant = "primary",
  children,
  style,
  disabled,
  type = "button",
  ...rest
}) => {
  return /* @__PURE__ */ React4.createElement(ButtonContainer, { variant, disabled }, /* @__PURE__ */ React4.createElement(
    StyledButton,
    {
      type,
      variant,
      disabled,
      style: { ...style },
      ...rest
    },
    children
  ));
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

// src/design.system/code.block/code.block.tsx
import React15, { useEffect as useEffect3, useState as useState3 } from "react";

// src/assets/icons/copy.svg
import * as React6 from "react";
var SvgCopy = (props) => /* @__PURE__ */ React6.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", stroke: "#ffffff", ...props }, /* @__PURE__ */ React6.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ React6.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React6.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ React6.createElement("path", { d: "M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z", stroke: "#8b92a6", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React6.createElement("path", { d: "M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z", stroke: "#8b92a6", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })));
var copy_default = SvgCopy;

// src/assets/icons/copied.svg
import * as React7 from "react";
var SvgCopied = (props) => /* @__PURE__ */ React7.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React7.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ React7.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React7.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ React7.createElement("path", { d: "M22 11.1V6.9C22 3.4 20.6 2 17.1 2H12.9C9.4 2 8 3.4 8 6.9V8H11.1C14.6 8 16 9.4 16 12.9V16H17.1C20.6 16 22 14.6 22 11.1Z", stroke: "#8b92a6", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React7.createElement("path", { d: "M16 17.1V12.9C16 9.4 14.6 8 11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1Z", stroke: "#8b92a6", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React7.createElement("path", { d: "M6.08008 15L8.03008 16.95L11.9201 13.05", stroke: "#8b92a6", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })));
var copied_default = SvgCopied;

// src/assets/icons/folders.svg
import * as React8 from "react";
var SvgFolders = (props) => /* @__PURE__ */ React8.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", ...props }, /* @__PURE__ */ React8.createElement("path", { opacity: 0.2, d: "M14.5 5V10.5556C14.5 10.6735 14.4532 10.7865 14.3698 10.8698C14.2865 10.9532 14.1735 11 14.0556 11H12.5V7C12.5 6.86739 12.4473 6.74021 12.3536 6.64645C12.2598 6.55268 12.1326 6.5 12 6.5H7.66687C7.55869 6.5 7.45342 6.46491 7.36688 6.4L5.63312 5.1C5.54658 5.03509 5.44131 5 5.33313 5H4V3.5C4 3.36739 4.05268 3.24021 4.14645 3.14645C4.24021 3.05268 4.36739 3 4.5 3H7.33313C7.44131 3 7.54658 3.03509 7.63312 3.1L9.36687 4.4C9.45342 4.46491 9.55869 4.5 9.66687 4.5H14C14.1326 4.5 14.2598 4.55268 14.3536 4.64645C14.4473 4.74021 14.5 4.86739 14.5 5Z", fill: "#96F2FF" }), /* @__PURE__ */ React8.createElement("path", { d: "M14 4H9.66687L7.93313 2.7C7.75978 2.57066 7.54941 2.50054 7.33313 2.5H4.5C4.23478 2.5 3.98043 2.60536 3.79289 2.79289C3.60536 2.98043 3.5 3.23478 3.5 3.5V4.5H2.5C2.23478 4.5 1.98043 4.60536 1.79289 4.79289C1.60536 4.98043 1.5 5.23478 1.5 5.5V12.5C1.5 12.7652 1.60536 13.0196 1.79289 13.2071C1.98043 13.3946 2.23478 13.5 2.5 13.5H12.0556C12.306 13.4997 12.546 13.4001 12.723 13.223C12.9001 13.046 12.9997 12.806 13 12.5556V11.5H14.0556C14.306 11.4997 14.546 11.4001 14.723 11.223C14.9001 11.046 14.9997 10.806 15 10.5556V5C15 4.73478 14.8946 4.48043 14.7071 4.29289C14.5196 4.10536 14.2652 4 14 4ZM12 12.5H2.5V5.5H5.33313L7.06687 6.8C7.24022 6.92934 7.45059 6.99946 7.66687 7H12V12.5ZM14 10.5H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6H7.66687L5.93313 4.7C5.75978 4.57066 5.54941 4.50054 5.33313 4.5H4.5V3.5H7.33313L9.06688 4.8C9.24022 4.92934 9.45059 4.99946 9.66687 5H14V10.5Z", fill: "#96F2FF" }));
var folders_default = SvgFolders;

// src/assets/icons/trash.svg
import * as React9 from "react";
var SvgTrash = (props) => /* @__PURE__ */ React9.createElement("svg", { width: "14px", height: "14px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React9.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ React9.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React9.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ React9.createElement("path", { d: "M20.5001 6H3.5", stroke: "#0EE6F3", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ React9.createElement("path", { d: "M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5", stroke: "#0EE6F3", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ React9.createElement("path", { d: "M9.5 11L10 16", stroke: "#0EE6F3", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ React9.createElement("path", { d: "M14.5 11L14 16", stroke: "#0EE6F3", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ React9.createElement("path", { d: "M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6", stroke: "#0EE6F3", strokeWidth: 1.5 })));
var trash_default = SvgTrash;

// src/assets/icons/check.svg
import * as React10 from "react";
var SvgCheck = (props) => /* @__PURE__ */ React10.createElement("svg", { width: 10, height: 10, viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React10.createElement("g", { clipPath: "url(#clip0_48_7283)" }, /* @__PURE__ */ React10.createElement("path", { d: "M1.5625 5.625L3.75 7.8125L8.75 2.8125", stroke: "#96F2FF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), /* @__PURE__ */ React10.createElement("defs", null, /* @__PURE__ */ React10.createElement("clipPath", { id: "clip0_48_7283" }, /* @__PURE__ */ React10.createElement("rect", { width: 10, height: 10, fill: "white" }))));
var check_default = SvgCheck;

// src/assets/icons/expand-arrow.svg
import * as React11 from "react";
var SvgExpandArrow = (props) => /* @__PURE__ */ React11.createElement("svg", { width: 12, height: 13, viewBox: "0 0 12 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React11.createElement("path", { d: "M10.0155 5.26528L6.26552 9.01528C6.23069 9.05014 6.18934 9.0778 6.14381 9.09667C6.09829 9.11555 6.04949 9.12526 6.00021 9.12526C5.95093 9.12526 5.90213 9.11555 5.85661 9.09667C5.81108 9.0778 5.76972 9.05014 5.7349 9.01528L1.9849 5.26528C1.91453 5.19491 1.875 5.09948 1.875 4.99996C1.875 4.90045 1.91453 4.80502 1.9849 4.73465C2.05526 4.66429 2.1507 4.62476 2.25021 4.62476C2.34972 4.62476 2.44516 4.66429 2.51552 4.73465L6.00021 8.21981L9.4849 4.73465C9.51974 4.69981 9.5611 4.67217 9.60662 4.65332C9.65214 4.63446 9.70094 4.62476 9.75021 4.62476C9.79948 4.62476 9.84827 4.63446 9.8938 4.65332C9.93932 4.67217 9.98068 4.69981 10.0155 4.73465C10.0504 4.76949 10.078 4.81086 10.0969 4.85638C10.1157 4.9019 10.1254 4.95069 10.1254 4.99996C10.1254 5.04924 10.1157 5.09803 10.0969 5.14355C10.078 5.18907 10.0504 5.23044 10.0155 5.26528Z", fill: "#CCD0D2" }));
var expand_arrow_default = SvgExpandArrow;

// src/assets/icons/actions/cluster-attr.svg
import * as React12 from "react";
var SvgClusterAttr = (props) => /* @__PURE__ */ React12.createElement("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React12.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ React12.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React12.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ React12.createElement("path", { d: "M4.97883 9.68508C2.99294 8.89073 2 8.49355 2 8C2 7.50645 2.99294 7.10927 4.97883 6.31492L7.7873 5.19153C9.77318 4.39718 10.7661 4 12 4C13.2339 4 14.2268 4.39718 16.2127 5.19153L19.0212 6.31492C21.0071 7.10927 22 7.50645 22 8C22 8.49355 21.0071 8.89073 19.0212 9.68508L16.2127 10.8085C14.2268 11.6028 13.2339 12 12 12C10.7661 12 9.77318 11.6028 7.7873 10.8085L4.97883 9.68508Z", stroke: "#8b92a6", strokeWidth: 1.5 }), /* @__PURE__ */ React12.createElement("path", { d: "M22 12C22 12 21.0071 12.8907 19.0212 13.6851L16.2127 14.8085C14.2268 15.6028 13.2339 16 12 16C10.7661 16 9.77318 15.6028 7.7873 14.8085L4.97883 13.6851C2.99294 12.8907 2 12 2 12", stroke: "#8b92a6", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ React12.createElement("path", { d: "M22 16C22 16 21.0071 16.8907 19.0212 17.6851L16.2127 18.8085C14.2268 19.6028 13.2339 20 12 20C10.7661 20 9.77318 19.6028 7.7873 18.8085L4.97883 17.6851C2.99294 16.8907 2 16 2 16", stroke: "#8b92a6", strokeWidth: 1.5, strokeLinecap: "round" })));
var cluster_attr_default = SvgClusterAttr;

// src/assets/icons/actions/delete-attr.svg
import * as React13 from "react";
var SvgDeleteAttr = (props) => /* @__PURE__ */ React13.createElement("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React13.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ React13.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React13.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ React13.createElement("path", { d: "M7 9.5L12 14.5M12 9.5L7 14.5M19.4922 13.9546L16.5608 17.7546C16.2082 18.2115 16.032 18.44 15.8107 18.6047C15.6146 18.7505 15.3935 18.8592 15.1583 18.9253C14.8928 19 14.6042 19 14.0271 19H6.2C5.07989 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.07989 5 6.2 5H14.0271C14.6042 5 14.8928 5 15.1583 5.07467C15.3935 5.14081 15.6146 5.2495 15.8107 5.39534C16.032 5.55998 16.2082 5.78846 16.5608 6.24543L19.4922 10.0454C20.0318 10.7449 20.3016 11.0947 20.4054 11.4804C20.4969 11.8207 20.4969 12.1793 20.4054 12.5196C20.3016 12.9053 20.0318 13.2551 19.4922 13.9546Z", stroke: "#8b92a7", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })));
var delete_attr_default = SvgDeleteAttr;

// src/assets/icons/actions/rename-attr.svg
import * as React14 from "react";
var SvgRenameAttr = (props) => /* @__PURE__ */ React14.createElement("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React14.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ React14.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React14.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ React14.createElement("path", { d: "M20 7H9.00001C6.23858 7 4 9.23857 4 12C4 14.7614 6.23858 17 9 17H16M20 7L17 4M20 7L17 10", stroke: "#8b92a7", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })));
var rename_attr_default = SvgRenameAttr;

// src/assets/icons/actions/index.ts
var ACTION_ICONS = {
  AddClusterInfo: cluster_attr_default,
  RenameAttribute: rename_attr_default,
  DeleteAttribute: delete_attr_default
};

// src/assets/icons/languages/index.ts
var BASE_URL = "https://d1n7d4xz7fr8b4.cloudfront.net/";
var LANGUAGES_LOGOS = {
  java: `${BASE_URL}java.png`,
  go: `${BASE_URL}go.png`,
  javascript: `${BASE_URL}nodejs.png`,
  python: `${BASE_URL}python.png`,
  dotnet: `${BASE_URL}dotnet.png`,
  default: `${BASE_URL}default.png`,
  mysql: `${BASE_URL}mysql.png`,
  unknown: `${BASE_URL}default.svg`,
  // TODO: good icon
  processing: `${BASE_URL}default.svg`,
  // TODO: good icon
  "no containers": `${BASE_URL}default.svg`
  // TODO: good icon
};

// src/design.system/code.block/code.block.tsx
import { styled as styled5 } from "styled-components";

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

// src/hooks/useCopyToClipboard.tsx
import { useState as useState2 } from "react";
function useCopyToClipboard() {
  const [clipboardState, setClipboardState] = useState2(false);
  async function copyToClipboard(text2) {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text2);
        setClipboardState(true);
      } catch (error) {
        setClipboardState(false);
      }
    } else {
      setClipboardState(false);
    }
  }
  return { clipboardState, copyToClipboard };
}

// src/styles/palette.tsx
var colors = {
  primary: "#07111A",
  secondary: "#0EE6F3",
  torquiz_light: "#96F2FF",
  dark: "#07111A",
  data_flow_bg: "#0E1C28",
  light_dark: "#132330",
  dark_blue: "#203548",
  light_grey: "#CCD0D2",
  blue_grey: "#374A5B",
  white: "#fff",
  error: "#FD3F3F",
  traces: "#4CAF50",
  logs: "#8B4513",
  metrics: "#FFD700"
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

// src/design.system/code.block/code.block.tsx
var CodeBlockContainer = styled5.div`
  border-radius: 12px;
  width: 100%;
  border: ${({ theme: theme2 }) => `1px solid ${theme2.colors.dark_blue}`};
  background: ${({ theme: theme2 }) => theme2.colors.dark};
  padding: 16px;
  text-align: start;
  gap: 10px;
  position: relative;
`;
var TextWrapper2 = styled5.p`
  font-family: 'IBM Plex Mono', monospace;
  width: 90%;
`;
var CopyIconWrapper = styled5.span`
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
`;
var ComponentWrapper = styled5.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 6px;
  width: 100%;
`;
function Code({ text: text2, highlightedWord, title, onCopy }) {
  const [primaryWords, setPrimaryWords] = useState3(
    /* @__PURE__ */ new Map()
  );
  const [secondaryWords, setSecondaryWords] = useState3(
    /* @__PURE__ */ new Map()
  );
  const { copyToClipboard, clipboardState } = useCopyToClipboard();
  useEffect3(onload, [highlightedWord]);
  function onload() {
    if (highlightedWord) {
      highlightedWord.primary && handleSetPrimaryWords();
      highlightedWord.secondary && handleSetSecondaryWords();
    }
  }
  function handleSetPrimaryWords() {
    const primaryWordsMap = /* @__PURE__ */ new Map();
    highlightedWord?.primary.words.forEach((word) => {
      primaryWordsMap.set(word, word);
    });
    setPrimaryWords(primaryWordsMap);
  }
  function handleSetSecondaryWords() {
    const secondaryWordsMap = /* @__PURE__ */ new Map();
    highlightedWord?.secondary?.words.forEach((word) => {
      secondaryWordsMap.set(word, word);
    });
    setSecondaryWords(secondaryWordsMap);
  }
  function getWordColor(word) {
    if (primaryWords.has(word)) {
      return highlightedWord?.primary.color;
    }
    if (secondaryWords.has(word)) {
      return highlightedWord?.secondary?.color;
    }
    return palette_default.colors.white;
  }
  function handleCopy() {
    copyToClipboard(text2);
    onCopy && onCopy();
  }
  return /* @__PURE__ */ React15.createElement(ComponentWrapper, null, title && /* @__PURE__ */ React15.createElement(Text, { size: 14 }, title), /* @__PURE__ */ React15.createElement(CodeBlockContainer, null, /* @__PURE__ */ React15.createElement(CopyIconWrapper, { onClick: handleCopy }, !clipboardState ? /* @__PURE__ */ React15.createElement(copy_default, { width: 24, height: 24 }) : /* @__PURE__ */ React15.createElement(copied_default, { width: 24, height: 24 })), /* @__PURE__ */ React15.createElement(TextWrapper2, null, text2.split(" ").map((part, index) => /* @__PURE__ */ React15.createElement("span", { key: index, style: { color: getWordColor(part) } }, `${part} `)))));
}

// src/design.system/card/card.tsx
import React16 from "react";

// src/design.system/card/card.styled.tsx
import styled6 from "styled-components";
var CardContainer = styled6.div`
  display: inline-flex;
  position: relative;
  height: fit-content;
  flex-direction: column;
  border-radius: 24px;
  height: 100%;
  border: ${({ selected, theme: theme2, type }) => `1px solid ${selected ? theme2.colors.secondary : type === "primary" ? theme2.colors.dark_blue : "#374a5b"}`};
  background: ${({ theme: theme2, type }) => type === "primary" ? theme2.colors.dark : "#0E1C28"};
  box-shadow: ${({ type }) => type === "primary" ? "none" : "0px -6px 16px 0px rgba(0, 0, 0, 0.25),4px 4px 16px 0px rgba(71, 231, 241, 0.05),-4px 4px 16px 0px rgba(71, 231, 241, 0.05)"};
`;
var CardHeader = styled6(CardContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  gap: 16px;
  padding: 24px 0px;
  box-shadow: none;
`;

// src/design.system/card/card.tsx
function Card({
  children,
  focus = false,
  type = "primary",
  header
}) {
  function renderHeader() {
    if (header?.body) {
      return header?.body();
    }
    return /* @__PURE__ */ React16.createElement(React16.Fragment, null, /* @__PURE__ */ React16.createElement(Text, { size: 20, weight: 600 }, header?.title), /* @__PURE__ */ React16.createElement(Text, { size: 14, color: "#CCD0D2" }, header?.subtitle));
  }
  return /* @__PURE__ */ React16.createElement(CardContainer, { selected: focus || void 0, type }, header && /* @__PURE__ */ React16.createElement(CardHeader, null, renderHeader()), children);
}

// src/design.system/tag/tag.tsx
import React17 from "react";
import styled7 from "styled-components";
var TagWrapper = styled7.div`
  display: flex;
  padding: 4px 8px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 10px;
  width: fit-content;
`;
function Tag({ title = "", color = "#033869" }) {
  return /* @__PURE__ */ React17.createElement(TagWrapper, { style: { backgroundColor: color } }, /* @__PURE__ */ React17.createElement(Text, { weight: 500, size: 13, color: "#CCD0D2" }, title));
}

// src/design.system/tap/tap.tsx
import React18 from "react";
import styled8 from "styled-components";
var TapWrapper = styled8.div`
  display: flex;
  padding: 8px 14px;
  align-items: flex-end;
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
  return /* @__PURE__ */ React18.createElement(
    TapWrapper,
    {
      onClick,
      selected: tapped,
      style: { ...style, cursor: onClick ? "pointer" : "auto" }
    },
    children,
    /* @__PURE__ */ React18.createElement(
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
import React24, { useEffect as useEffect4, useRef, useState as useState5 } from "react";

// src/design.system/drop.down/drop.down.styled.tsx
import styled9 from "styled-components";
var DropdownWrapper = styled9.div`
  position: relative;
  z-index: 999;
  width: 100%;
  padding: 11px 4px;
  border-radius: 8px;
  cursor: pointer;
  border: ${({ selected, theme: theme2 }) => `1px solid  ${selected ? theme2.colors.white : theme2.colors.blue_grey}`};
  /* background: ${({ theme: theme2 }) => theme2.colors.dark}; */

  .dropdown-arrow {
    transform: rotate(0deg);
    transition: all 0.2s ease-in-out;
  }

  .dropdown-arrow.open {
    transform: rotate(180deg);
  }
`;
var DropdownHeader = styled9.div`
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme: theme2 }) => theme2.text.white};
  font-size: 14px;
  font-family: ${({ theme: theme2 }) => theme2.font_family.primary}, sans-serif;
  font-weight: 400;
`;
var DropdownBody = styled9.div`
  position: relative;
  z-index: 1000;
  display: flex;
  width: 100%;
  padding: 11px 4px;
  flex-direction: column;
  border-radius: 8px;
  border: ${({ theme: theme2 }) => `1px solid ${theme2.colors.blue_grey}`};
  background: ${({ theme: theme2 }) => theme2.colors.dark};
  margin-top: 5px;
`;
var DropdownListWrapper = styled9.div`
  position: relative;

  z-index: 1000;
  width: 100%;
  max-height: 270px;
  overflow-y: scroll;
  scrollbar-width: none;
  :hover {
    background: ${({ theme: theme2 }) => theme2.colors.dark_blue};
  }
`;
var DropdownItem = styled9.div`
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
var LabelWrapper = styled9.div`
  margin-bottom: 8px;
  text-align: start;
`;

// src/design.system/search.input/search.input.tsx
import React21 from "react";

// src/design.system/search.input/search.input.styled.tsx
import styled10 from "styled-components";
var SearchInputWrapper = styled10.div`
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
var StyledSearchInput = styled10.input`
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
import * as React19 from "react";
var SvgGlass = (props) => /* @__PURE__ */ React19.createElement("svg", { width: 18, height: 18, viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React19.createElement("path", { d: "M16.1479 15.3519L12.6273 11.8321C13.6477 10.6071 14.1566 9.03577 14.048 7.44512C13.9394 5.85447 13.2217 4.36692 12.0443 3.29193C10.8668 2.21693 9.32029 1.63725 7.72635 1.67348C6.13241 1.7097 4.6138 2.35904 3.48642 3.48642C2.35904 4.6138 1.7097 6.13241 1.67348 7.72635C1.63725 9.32029 2.21693 10.8668 3.29193 12.0443C4.36692 13.2217 5.85447 13.9394 7.44512 14.048C9.03577 14.1566 10.6071 13.6477 11.8321 12.6273L15.3519 16.1479C15.4042 16.2001 15.4663 16.2416 15.5345 16.2699C15.6028 16.2982 15.676 16.3127 15.7499 16.3127C15.8238 16.3127 15.897 16.2982 15.9653 16.2699C16.0336 16.2416 16.0956 16.2001 16.1479 16.1479C16.2001 16.0956 16.2416 16.0336 16.2699 15.9653C16.2982 15.897 16.3127 15.8238 16.3127 15.7499C16.3127 15.676 16.2982 15.6028 16.2699 15.5345C16.2416 15.4663 16.2001 15.4042 16.1479 15.3519ZM2.81242 7.87492C2.81242 6.87365 3.10933 5.89487 3.6656 5.06234C4.22188 4.22982 5.01253 3.58094 5.93758 3.19778C6.86263 2.81461 7.88053 2.71435 8.86256 2.90969C9.84459 3.10503 10.7466 3.58718 11.4546 4.29519C12.1626 5.00319 12.6448 5.90524 12.8401 6.88727C13.0355 7.8693 12.9352 8.8872 12.5521 9.81225C12.1689 10.7373 11.52 11.528 10.6875 12.0842C9.85497 12.6405 8.87618 12.9374 7.87492 12.9374C6.53271 12.9359 5.24591 12.4021 4.29683 11.453C3.34775 10.5039 2.81391 9.21712 2.81242 7.87492Z", fill: "#8B92A5" }));
var glass_default = SvgGlass;

// src/assets/icons/X.svg
import * as React20 from "react";
var SvgX = (props) => /* @__PURE__ */ React20.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React20.createElement("path", { d: "M12.8535 12.146C12.9 12.1925 12.9368 12.2476 12.962 12.3083C12.9871 12.369 13.0001 12.4341 13.0001 12.4998C13.0001 12.5655 12.9871 12.6305 12.962 12.6912C12.9368 12.7519 12.9 12.8071 12.8535 12.8535C12.8071 12.9 12.7519 12.9368 12.6912 12.962C12.6305 12.9871 12.5655 13.0001 12.4998 13.0001C12.4341 13.0001 12.369 12.9871 12.3083 12.962C12.2476 12.9368 12.1925 12.9 12.146 12.8535L7.99979 8.70666L3.85354 12.8535C3.75972 12.9474 3.63247 13.0001 3.49979 13.0001C3.36711 13.0001 3.23986 12.9474 3.14604 12.8535C3.05222 12.7597 2.99951 12.6325 2.99951 12.4998C2.99951 12.3671 3.05222 12.2399 3.14604 12.146L7.29291 7.99979L3.14604 3.85354C3.05222 3.75972 2.99951 3.63247 2.99951 3.49979C2.99951 3.36711 3.05222 3.23986 3.14604 3.14604C3.23986 3.05222 3.36711 2.99951 3.49979 2.99951C3.63247 2.99951 3.75972 3.05222 3.85354 3.14604L7.99979 7.29291L12.146 3.14604C12.2399 3.05222 12.3671 2.99951 12.4998 2.99951C12.6325 2.99951 12.7597 3.05222 12.8535 3.14604C12.9474 3.23986 13.0001 3.36711 13.0001 3.49979C13.0001 3.63247 12.9474 3.75972 12.8535 3.85354L8.70666 7.99979L12.8535 12.146Z", fill: "white" }));
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
  }) : () => {
  };
  return /* @__PURE__ */ React21.createElement(
    SearchInputWrapper,
    {
      active: !!value || void 0,
      style: { ...containerStyle }
    },
    /* @__PURE__ */ React21.createElement(glass_default, null),
    /* @__PURE__ */ React21.createElement(
      StyledSearchInput,
      {
        style: { ...inputStyle },
        value,
        active: !!value || void 0,
        placeholder,
        onChange
      }
    ),
    showClear && /* @__PURE__ */ React21.createElement("div", { onClick: clear }, " ", /* @__PURE__ */ React21.createElement(X_default, { style: { cursor: "pointer" } }))
  );
}

// src/assets/icons/question.svg
import * as React22 from "react";
var SvgQuestion = (props) => /* @__PURE__ */ React22.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React22.createElement("path", { d: "M7.65625 9.84375C7.65625 9.97354 7.61776 10.1004 7.54565 10.2083C7.47354 10.3163 7.37105 10.4004 7.25114 10.45C7.13122 10.4997 6.99927 10.5127 6.87197 10.4874C6.74467 10.4621 6.62774 10.3996 6.53596 10.3078C6.44419 10.216 6.38168 10.0991 6.35636 9.97178C6.33104 9.84448 6.34404 9.71253 6.39371 9.59261C6.44338 9.4727 6.52749 9.37021 6.63541 9.2981C6.74333 9.22599 6.87021 9.1875 7 9.1875C7.17405 9.1875 7.34097 9.25664 7.46404 9.37971C7.58711 9.50278 7.65625 9.6697 7.65625 9.84375ZM7 3.9375C5.7936 3.9375 4.8125 4.8207 4.8125 5.90625V6.125C4.8125 6.24103 4.8586 6.35231 4.94064 6.43436C5.02269 6.51641 5.13397 6.5625 5.25 6.5625C5.36603 6.5625 5.47731 6.51641 5.55936 6.43436C5.64141 6.35231 5.6875 6.24103 5.6875 6.125V5.90625C5.6875 5.30469 6.27649 4.8125 7 4.8125C7.72352 4.8125 8.3125 5.30469 8.3125 5.90625C8.3125 6.50781 7.72352 7 7 7C6.88397 7 6.77269 7.04609 6.69064 7.12814C6.6086 7.21019 6.5625 7.32147 6.5625 7.4375V7.875C6.5625 7.99103 6.6086 8.10231 6.69064 8.18436C6.77269 8.26641 6.88397 8.3125 7 8.3125C7.11603 8.3125 7.22731 8.26641 7.30936 8.18436C7.39141 8.10231 7.4375 7.99103 7.4375 7.875V7.83562C8.435 7.65242 9.1875 6.85672 9.1875 5.90625C9.1875 4.8207 8.20641 3.9375 7 3.9375ZM12.6875 7C12.6875 8.12488 12.3539 9.2245 11.729 10.1598C11.104 11.0951 10.2158 11.8241 9.17651 12.2546C8.13726 12.685 6.99369 12.7977 5.89043 12.5782C4.78716 12.3588 3.77374 11.8171 2.97833 11.0217C2.18292 10.2263 1.64124 9.21284 1.42179 8.10958C1.20233 7.00631 1.31496 5.86274 1.74544 4.82349C2.17591 3.78423 2.90489 2.89597 3.8402 2.27102C4.7755 1.64607 5.87512 1.3125 7 1.3125C8.50793 1.31409 9.95365 1.91382 11.0199 2.98009C12.0862 4.04636 12.6859 5.49207 12.6875 7ZM11.8125 7C11.8125 6.04818 11.5303 5.11773 11.0014 4.32632C10.4726 3.53491 9.72104 2.91808 8.84167 2.55383C7.9623 2.18958 6.99466 2.09428 6.06113 2.27997C5.1276 2.46566 4.27009 2.92401 3.59705 3.59705C2.92401 4.27009 2.46566 5.12759 2.27997 6.06113C2.09428 6.99466 2.18959 7.9623 2.55383 8.84166C2.91808 9.72103 3.53491 10.4726 4.32632 11.0014C5.11773 11.5303 6.04818 11.8125 7 11.8125C8.27591 11.8111 9.49915 11.3036 10.4014 10.4014C11.3036 9.49915 11.8111 8.27591 11.8125 7Z", fill: "#96F2FF" }));
var question_default = SvgQuestion;

// src/design.system/tooltip/index.tsx
import React23, { useState as useState4 } from "react";
import styled11 from "styled-components";
var TooltipContainer = styled11.div`
  display: inline-flex;
  align-items: center; // Align children and icon vertically
  position: relative;
`;
var Icon = styled11.div`
  margin-left: 8px;
  display: flex;
  align-items: center;
`;
var TooltipText = styled11.div`
  visibility: ${({ isVisible }) => isVisible ? "visible" : "hidden"};
  background-color: black;
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 5px 10px;
  max-width: 300px;
  width: 100%;
  text-align: left;
  /* Position the tooltip above the icon */
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  transform: translateX(-0%);
  margin-bottom: 5px; // Space between the tooltip and the icon

  /* Fade in animation */
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  transition: opacity 0.3s;
`;
var Tooltip = ({
  children,
  text: text2,
  icon = "?",
  showIcon = true
}) => {
  const [isVisible, setIsVisible] = useState4(false);
  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);
  if (!text2)
    return /* @__PURE__ */ React23.createElement(React23.Fragment, null, children);
  return /* @__PURE__ */ React23.createElement(TooltipContainer, { onMouseEnter: showTooltip, onMouseLeave: hideTooltip }, children, /* @__PURE__ */ React23.createElement(TooltipText, { isVisible }, /* @__PURE__ */ React23.createElement(Text, { size: 12, weight: 600 }, text2)), showIcon && /* @__PURE__ */ React23.createElement(Icon, null, /* @__PURE__ */ React23.createElement(question_default, null)));
};

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
  width = 260,
  value,
  label,
  tooltip,
  required
}) {
  const [isOpen, setOpen] = useState5(false);
  const [selectedItem, setSelectedItem] = useState5(value || null);
  const [isHover, setHover] = useState5(false);
  const [searchFilter, setSearchFilter] = useState5("");
  const containerRef = useRef(null);
  useEffect4(() => {
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
  return /* @__PURE__ */ React24.createElement(React24.Fragment, null, label && /* @__PURE__ */ React24.createElement(LabelWrapper, null, /* @__PURE__ */ React24.createElement(Tooltip, { text: tooltip || "" }, /* @__PURE__ */ React24.createElement("div", { style: { display: "flex", gap: 4 } }, /* @__PURE__ */ React24.createElement(Text, { size: 14, weight: 600 }, label), required && /* @__PURE__ */ React24.createElement(Text, { size: 14, weight: 600 }, "*")))), /* @__PURE__ */ React24.createElement("div", { style: { height: 37, width }, ref: containerRef }, /* @__PURE__ */ React24.createElement(
    DropdownWrapper,
    {
      selected: isHover,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      onClick: toggleDropdown
    },
    /* @__PURE__ */ React24.createElement(DropdownHeader, null, selectedItem ? selectedItem.label : SELECTED_ITEM, /* @__PURE__ */ React24.createElement(expand_arrow_default, { className: `dropdown-arrow ${isOpen && "open"}` }))
  ), isOpen && /* @__PURE__ */ React24.createElement(DropdownBody, null, /* @__PURE__ */ React24.createElement(
    SearchInput,
    {
      value: searchFilter,
      onChange: (e) => setSearchFilter(e.target.value),
      placeholder: "Search",
      containerStyle: CONTAINER_STYLE,
      inputStyle: SEARCH_INPUT_STYLE,
      showClear: false
    }
  ), /* @__PURE__ */ React24.createElement(DropdownListWrapper, null, getDropdownList().map((item) => /* @__PURE__ */ React24.createElement(
    DropdownItem,
    {
      key: item.id,
      onClick: (e) => handleItemClick(item)
    },
    /* @__PURE__ */ React24.createElement(Text, null, item.label)
  ))))));
}

// src/design.system/switch/switch.tsx
import React25 from "react";

// src/design.system/switch/switch.styled.tsx
import styled12 from "styled-components";
var SwitchInputWrapper = styled12.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
var SwitchToggleWrapper = styled12.div`
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
var SwitchButtonWrapper = styled12.span`
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
  return /* @__PURE__ */ React25.createElement(SwitchInputWrapper, null, /* @__PURE__ */ React25.createElement(
    SwitchToggleWrapper,
    {
      active: toggle || void 0,
      onClick: handleToggleChange
    },
    /* @__PURE__ */ React25.createElement(SwitchButtonWrapper, { disabled: toggle || void 0 })
  ), label && /* @__PURE__ */ React25.createElement(Text, { size: 14 }, label));
}

// src/design.system/checkbox/checkbox.tsx
import React27 from "react";

// src/design.system/checkbox/checkbox.styled.tsx
import { styled as styled13 } from "styled-components";
var CheckboxWrapper = styled13.div`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: ${({ disabled }) => disabled ? "not-allowed" : "pointer"};
  pointer-events: ${({ disabled }) => disabled ? "none" : "auto"};
  opacity: ${({ disabled }) => disabled ? "0.5" : "1"};
`;
var CheckboxItem = styled13.span`
  width: 16px;
  height: 16px;
  border: ${({ theme: theme2 }) => `solid 1px ${theme2.colors.light_grey}`};
  border-radius: 4px;
`;

// src/assets/icons/checkbox-rect.svg
import * as React26 from "react";
var SvgCheckboxRect = (props) => /* @__PURE__ */ React26.createElement("svg", { width: 18, height: 18, viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React26.createElement("rect", { x: 0.5, y: 0.5, width: 17, height: 17, rx: 3.5, fill: "#96F2FF", stroke: "#96F2FF" }), /* @__PURE__ */ React26.createElement("path", { d: "M13.7727 6L7.39773 12.375L4.5 9.47727", stroke: "#132330", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }));
var checkbox_rect_default = SvgCheckboxRect;

// src/design.system/checkbox/checkbox.tsx
function Checkbox({
  onChange,
  value,
  label = "",
  disabled = false
}) {
  return /* @__PURE__ */ React27.createElement(CheckboxWrapper, { disabled: disabled || void 0, onClick: onChange }, value ? /* @__PURE__ */ React27.createElement(checkbox_rect_default, null) : /* @__PURE__ */ React27.createElement(CheckboxItem, null), /* @__PURE__ */ React27.createElement(Text, { size: 14 }, label));
}

// src/design.system/selected.counter/selected.counter.tsx
import React28 from "react";

// src/design.system/selected.counter/selected.counter.styled.tsx
import styled14 from "styled-components";
var SelectedCounterWrapper = styled14.div`
  display: flex;
  padding: 4px;
  align-items: center;
  gap: 4px;
  border-radius: 14px;
  background: ${({ theme: theme2 }) => theme2.colors.dark_blue};
`;

// src/design.system/selected.counter/selected.counter.tsx
function SelectedCounter({ total, selected }) {
  return /* @__PURE__ */ React28.createElement(SelectedCounterWrapper, null, selected !== 0 && /* @__PURE__ */ React28.createElement(check_default, null), /* @__PURE__ */ React28.createElement(Text, { size: 13, weight: 500 }, `${selected} / ${total}`));
}

// src/design.system/link/link.tsx
import React29 from "react";
import { styled as styled15 } from "styled-components";
var LinkContainer = styled15.div`
  cursor: pointer;
  .p {
    cursor: pointer !important;
  }
`;
function Link({
  value,
  onClick,
  fontSize = 16,
  color = palette_default.colors.secondary
}) {
  return /* @__PURE__ */ React29.createElement(LinkContainer, { onClick }, /* @__PURE__ */ React29.createElement(Text, { size: fontSize, color }, value));
}

// src/design.system/image/image.tsx
import Image from "next/image";
import React30 from "react";
var IMAGE_STYLE = {
  borderRadius: 10
};
function ImageComponent({
  src,
  alt = "",
  width = 56,
  height = 56,
  style = {}
}) {
  return /* @__PURE__ */ React30.createElement(
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
import React33, { useState as useState6 } from "react";

// src/design.system/input/input.styled.tsx
import { styled as styled16 } from "styled-components";
var StyledInputContainer = styled16.div`
  position: relative;
  display: flex;
  width: 100%;
  padding-left: 13px;
  height: 100%;
  min-height: 37px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  border: ${({ theme: theme2, error, active }) => `1px solid ${error ? theme2.colors.error : active ? theme2.text.grey : theme2.colors.blue_grey}`};
  background: ${({ theme: theme2 }) => theme2.colors.light_dark};

  &:hover {
    border: ${({ theme: theme2 }) => `solid 1px ${theme2.text.grey}`};
  }
`;
var StyledActionInputContainer = styled16.div`
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
var StyledInput = styled16.input`
  background: transparent;
  border: none;
  outline: none;
  width: 96%;
  color: ${({ theme: theme2 }) => theme2.text.white};
`;
var StyledActionInput = styled16(StyledInput)`
  color: var(--dark-mode-white, #fff);
  font-family: Inter, sans-serif;
  font-size: 24px;
`;
var LabelWrapper2 = styled16.div`
  margin-bottom: 8px;
  text-align: start;
`;
var ErrorWrapper = styled16.div`
  margin-top: 4px;
`;
var DisplayIconsWrapper = styled16.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
`;

// src/assets/icons/eye-open.svg
import * as React31 from "react";
var SvgEyeOpen = (props) => /* @__PURE__ */ React31.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React31.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ React31.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React31.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ React31.createElement("path", { d: "M3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14M17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14Z", stroke: "#fff", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })));
var eye_open_default = SvgEyeOpen;

// src/assets/icons/eye-close.svg
import * as React32 from "react";
var SvgEyeClose = (props) => /* @__PURE__ */ React32.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React32.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ React32.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React32.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ React32.createElement("path", { d: "M9.60997 9.60714C8.05503 10.4549 7 12.1043 7 14C7 16.7614 9.23858 19 12 19C13.8966 19 15.5466 17.944 16.3941 16.3878M21 14C21 9.02944 16.9706 5 12 5C11.5582 5 11.1238 5.03184 10.699 5.09334M3 14C3 11.0069 4.46104 8.35513 6.70883 6.71886M3 3L21 21", stroke: "#fff", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })));
var eye_close_default = SvgEyeClose;

// src/design.system/input/input.tsx
function Input({
  label,
  value,
  onChange,
  type = "text",
  error = "",
  style = {},
  onKeyDown,
  tooltip,
  required,
  autoComplete = "off",
  ...rest
}) {
  const [showPassword, setShowPassword] = useState6(false);
  function handleChange(event) {
    onChange(event.target.value);
  }
  return /* @__PURE__ */ React33.createElement("div", { style: { ...style } }, label && /* @__PURE__ */ React33.createElement(LabelWrapper2, null, /* @__PURE__ */ React33.createElement(Tooltip, { text: tooltip || "" }, /* @__PURE__ */ React33.createElement("div", { style: { display: "flex", gap: 4 } }, /* @__PURE__ */ React33.createElement(Text, { size: 14, weight: 600 }, label), required && /* @__PURE__ */ React33.createElement(Text, { size: 14, weight: 600 }, "*")))), /* @__PURE__ */ React33.createElement(
    StyledInputContainer,
    {
      active: !!value || void 0,
      error: error ? true : void 0
    },
    /* @__PURE__ */ React33.createElement(
      StyledInput,
      {
        type: showPassword ? "text" : type,
        value,
        onChange: handleChange,
        autoComplete,
        onKeyDown,
        ...rest
      }
    ),
    type === "password" && /* @__PURE__ */ React33.createElement(DisplayIconsWrapper, { onClick: () => setShowPassword(!showPassword) }, !showPassword ? /* @__PURE__ */ React33.createElement(eye_open_default, { width: 16, height: 16 }) : /* @__PURE__ */ React33.createElement(eye_close_default, { width: 16, height: 16 }))
  ), error && /* @__PURE__ */ React33.createElement(ErrorWrapper, null, /* @__PURE__ */ React33.createElement(Text, { size: 14, color: "#FD3F3F" }, error)));
}

// src/design.system/input/action.input.tsx
import React34 from "react";
function ActionInput({
  value,
  onChange,
  style = {},
  onAction
}) {
  function handleChange(event) {
    onChange(event.target.value);
  }
  return /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement(StyledActionInputContainer, { style: { ...style } }, /* @__PURE__ */ React34.createElement(
    StyledActionInput,
    {
      value,
      onChange: handleChange,
      autoComplete: "off"
    }
  ), /* @__PURE__ */ React34.createElement(Button, { onClick: onAction }, /* @__PURE__ */ React34.createElement(Text, { size: 14, weight: 500, color: palette_default.text.dark_button }, "Save"))));
}

// src/design.system/video/video.tsx
import React37, { useState as useState7 } from "react";

// src/assets/icons/close.svg
import * as React35 from "react";
var SvgClose = (props) => /* @__PURE__ */ React35.createElement("svg", { width: 26, height: 26, viewBox: "0 0 26 26", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React35.createElement("path", { d: "M17.7075 9.7075L14.4138 13L17.7075 16.2925C17.8004 16.3854 17.8741 16.4957 17.9244 16.6171C17.9747 16.7385 18.0006 16.8686 18.0006 17C18.0006 17.1314 17.9747 17.2615 17.9244 17.3829C17.8741 17.5043 17.8004 17.6146 17.7075 17.7075C17.6146 17.8004 17.5043 17.8741 17.3829 17.9244C17.2615 17.9747 17.1314 18.0006 17 18.0006C16.8686 18.0006 16.7385 17.9747 16.6171 17.9244C16.4957 17.8741 16.3854 17.8004 16.2925 17.7075L13 14.4137L9.70751 17.7075C9.6146 17.8004 9.5043 17.8741 9.3829 17.9244C9.26151 17.9747 9.1314 18.0006 9.00001 18.0006C8.86861 18.0006 8.7385 17.9747 8.61711 17.9244C8.49572 17.8741 8.38542 17.8004 8.29251 17.7075C8.1996 17.6146 8.12589 17.5043 8.07561 17.3829C8.02533 17.2615 7.99945 17.1314 7.99945 17C7.99945 16.8686 8.02533 16.7385 8.07561 16.6171C8.12589 16.4957 8.1996 16.3854 8.29251 16.2925L11.5863 13L8.29251 9.7075C8.10486 9.51986 7.99945 9.26536 7.99945 9C7.99945 8.73464 8.10486 8.48014 8.29251 8.2925C8.48015 8.10486 8.73464 7.99944 9.00001 7.99944C9.26537 7.99944 9.51987 8.10486 9.70751 8.2925L13 11.5863L16.2925 8.2925C16.3854 8.19959 16.4957 8.12589 16.6171 8.07561C16.7385 8.02532 16.8686 7.99944 17 7.99944C17.1314 7.99944 17.2615 8.02532 17.3829 8.07561C17.5043 8.12589 17.6146 8.19959 17.7075 8.2925C17.8004 8.38541 17.8741 8.49571 17.9244 8.6171C17.9747 8.7385 18.0006 8.8686 18.0006 9C18.0006 9.1314 17.9747 9.2615 17.9244 9.3829C17.8741 9.50429 17.8004 9.61459 17.7075 9.7075ZM26 13C26 15.5712 25.2376 18.0846 23.8091 20.2224C22.3807 22.3603 20.3503 24.0265 17.9749 25.0104C15.5995 25.9944 12.9856 26.2518 10.4638 25.7502C7.94208 25.2486 5.6257 24.0105 3.80762 22.1924C1.98953 20.3743 0.751405 18.0579 0.249797 15.5362C-0.251811 13.0144 0.0056327 10.4006 0.989572 8.02512C1.97351 5.64968 3.63975 3.61935 5.77759 2.1909C7.91543 0.762437 10.4288 0 13 0C16.4467 0.00363977 19.7512 1.37445 22.1884 3.81163C24.6256 6.24882 25.9964 9.5533 26 13ZM24 13C24 10.8244 23.3549 8.69767 22.1462 6.88873C20.9375 5.07979 19.2195 3.66989 17.2095 2.83733C15.1995 2.00476 12.9878 1.78692 10.854 2.21136C8.72022 2.6358 6.76021 3.68345 5.22183 5.22183C3.68345 6.7602 2.63581 8.72022 2.21137 10.854C1.78693 12.9878 2.00477 15.1995 2.83733 17.2095C3.66989 19.2195 5.07979 20.9375 6.88873 22.1462C8.69767 23.3549 10.8244 24 13 24C15.9164 23.9967 18.7123 22.8367 20.7745 20.7745C22.8367 18.7123 23.9967 15.9164 24 13Z", fill: "white" }));
var close_default = SvgClose;

// src/assets/icons/player.svg
import * as React36 from "react";
var SvgPlayer = (props) => /* @__PURE__ */ React36.createElement("svg", { width: 80, height: 80, viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React36.createElement("ellipse", { cx: 39.9999, cy: 40, rx: 40, ry: 40, fill: "white" }), /* @__PURE__ */ React36.createElement("path", { d: "M53.3383 39.9984C53.3392 40.3466 53.2468 40.6891 53.0703 40.9926C52.8937 41.2961 52.6389 41.5503 52.3307 41.7303L33.2292 53.0298C32.9071 53.2205 32.5383 53.3246 32.1607 53.3314C31.7832 53.3381 31.4106 53.2473 31.0815 53.0683C30.7555 52.892 30.4839 52.635 30.2947 52.3236C30.1055 52.0122 30.0055 51.6577 30.0049 51.2965V28.7002C30.0055 28.339 30.1055 27.9845 30.2947 27.6732C30.4839 27.3618 30.7555 27.1047 31.0815 26.9285C31.4106 26.7495 31.7832 26.6586 32.1607 26.6654C32.5383 26.6722 32.9071 26.7763 33.2292 26.9669L52.3307 38.2664C52.6389 38.4465 52.8937 38.7006 53.0703 39.0041C53.2468 39.3076 53.3392 39.6501 53.3383 39.9984Z", fill: "#132330" }));
var player_default = SvgPlayer;

// src/design.system/video/video.styled.tsx
import { styled as styled17 } from "styled-components";
var ImagePreviewWrapper = styled17.div`
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
var PlayerIconWrapper = styled17.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 30px;
  text-align: center;
`;
var LargePlayerIconWrapper = styled17(PlayerIconWrapper)`
  top: 40%;
`;
var StyledLargeVideo = styled17.video`
  width: 980px;
  border-radius: 8px;
`;
var LargeVideoHeader = styled17.div`
  width: 980px;

  display: flex;
  justify-content: space-between;
  margin-bottom: 21px;
`;
var LargeVideoContainer = styled17.div`
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
  const [isLarge, setIsLarge] = useState7(false);
  const [pause, setPause] = useState7(true);
  const handleClick = () => {
    setIsLarge(true);
  };
  const handleClose = () => {
    setIsLarge(false);
    setPause(true);
  };
  const renderSmallView = () => /* @__PURE__ */ React37.createElement(React37.Fragment, null, /* @__PURE__ */ React37.createElement(Text, { size: 16, weight: 600 }, title), /* @__PURE__ */ React37.createElement(ImagePreviewWrapper, { onClick: handleClick, url: thumbnail }, /* @__PURE__ */ React37.createElement(PlayerIconWrapper, null, /* @__PURE__ */ React37.createElement(player_default, { width: 30 }))));
  const renderLargeView = () => /* @__PURE__ */ React37.createElement(LargeVideoContainer, null, /* @__PURE__ */ React37.createElement(LargeVideoHeader, null, /* @__PURE__ */ React37.createElement(Text, { size: 20, weight: 600 }, title), /* @__PURE__ */ React37.createElement(close_default, { onClick: handleClose, style: { cursor: "pointer" } })), !pause ? /* @__PURE__ */ React37.createElement(StyledLargeVideo, { src: videoSrc, autoPlay: true, controls: true }) : /* @__PURE__ */ React37.createElement(
    ImagePreviewWrapper,
    {
      url: thumbnail,
      style: { width: 980, height: 560 },
      onClick: () => setPause(false)
    },
    /* @__PURE__ */ React37.createElement(LargePlayerIconWrapper, null, /* @__PURE__ */ React37.createElement(player_default, { width: 80 }))
  ));
  return /* @__PURE__ */ React37.createElement("div", null, isLarge ? renderLargeView() : renderSmallView());
}

// src/design.system/loader/loader.tsx
import React38 from "react";

// src/design.system/loader/loader.styled.tsx
import styled18 from "styled-components";
var LoaderWrapper = styled18.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
var StyledLoader = styled18.div`
  width: ${({ width }) => width || 48}px;
  height: ${({ height }) => height || 48}px;
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
function Loader({ width, height }) {
  return /* @__PURE__ */ React38.createElement(LoaderWrapper, null, /* @__PURE__ */ React38.createElement(StyledLoader, { width, height }));
}

// src/design.system/notification/notification.tsx
import React42, { useEffect as useEffect5 } from "react";

// src/design.system/notification/notification.styled.tsx
import styled19 from "styled-components";
var NotificationContainer = styled19.div`
  position: fixed;
  top: 3%;
  right: 3%;
`;
var StyledNotification = styled19.div`
  display: flex;
  padding: 6px 16px 6px 8px;
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
import * as React39 from "react";
var SvgXBlue = (props) => /* @__PURE__ */ React39.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React39.createElement("path", { d: "M12.8535 12.146C12.9 12.1925 12.9368 12.2476 12.962 12.3083C12.9871 12.369 13.0001 12.4341 13.0001 12.4998C13.0001 12.5655 12.9871 12.6305 12.962 12.6912C12.9368 12.7519 12.9 12.8071 12.8535 12.8535C12.8071 12.9 12.7519 12.9368 12.6912 12.962C12.6305 12.9871 12.5655 13.0001 12.4998 13.0001C12.4341 13.0001 12.369 12.9871 12.3083 12.962C12.2476 12.9368 12.1925 12.9 12.146 12.8535L7.99979 8.70666L3.85354 12.8535C3.75972 12.9474 3.63247 13.0001 3.49979 13.0001C3.36711 13.0001 3.23986 12.9474 3.14604 12.8535C3.05222 12.7597 2.99951 12.6325 2.99951 12.4998C2.99951 12.3671 3.05222 12.2399 3.14604 12.146L7.29291 7.99979L3.14604 3.85354C3.05222 3.75972 2.99951 3.63247 2.99951 3.49979C2.99951 3.36711 3.05222 3.23986 3.14604 3.14604C3.23986 3.05222 3.36711 2.99951 3.49979 2.99951C3.63247 2.99951 3.75972 3.05222 3.85354 3.14604L7.99979 7.29291L12.146 3.14604C12.2399 3.05222 12.3671 2.99951 12.4998 2.99951C12.6325 2.99951 12.7597 3.05222 12.8535 3.14604C12.9474 3.23986 13.0001 3.36711 13.0001 3.49979C13.0001 3.63247 12.9474 3.75972 12.8535 3.85354L8.70666 7.99979L12.8535 12.146Z", fill: "#96F2FF" }));
var X_blue_default = SvgXBlue;

// src/assets/icons/success-notification.svg
import * as React40 from "react";
var SvgSuccessNotification = (props) => /* @__PURE__ */ React40.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React40.createElement("rect", { width: 24, height: 24, rx: 6, fill: "url(#paint0_linear_157_245)" }), /* @__PURE__ */ React40.createElement("rect", { width: 24, height: 24, rx: 6, fill: "url(#paint1_radial_157_245)", fillOpacity: 0.4 }), /* @__PURE__ */ React40.createElement("path", { d: "M18.3535 8.85354L10.3535 16.8535C10.3071 16.9 10.252 16.9369 10.1913 16.9621C10.1306 16.9872 10.0655 17.0002 9.99979 17.0002C9.93408 17.0002 9.86902 16.9872 9.80832 16.9621C9.74762 16.9369 9.69248 16.9 9.64604 16.8535L6.14604 13.3535C6.05222 13.2597 5.99951 13.1325 5.99951 12.9998C5.99951 12.8671 6.05222 12.7399 6.14604 12.646C6.23986 12.5522 6.36711 12.4995 6.49979 12.4995C6.63247 12.4995 6.75972 12.5522 6.85354 12.646L9.99979 15.7929L17.646 8.14604C17.7399 8.05222 17.8671 7.99951 17.9998 7.99951C18.1325 7.99951 18.2597 8.05222 18.3535 8.14604C18.4474 8.23986 18.5001 8.36711 18.5001 8.49979C18.5001 8.63247 18.4474 8.75972 18.3535 8.85354Z", fill: "#0EE6F3" }), /* @__PURE__ */ React40.createElement("defs", null, /* @__PURE__ */ React40.createElement("linearGradient", { id: "paint0_linear_157_245", x1: 12, y1: 0, x2: 12, y2: 24, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React40.createElement("stop", { stopColor: "#365963" }), /* @__PURE__ */ React40.createElement("stop", { offset: 1, stopColor: "#2B2F56" })), /* @__PURE__ */ React40.createElement("radialGradient", { id: "paint1_radial_157_245", cx: 0, cy: 0, r: 1, gradientUnits: "userSpaceOnUse", gradientTransform: "translate(24) rotate(120.009) scale(17.3221 18.6093)" }, /* @__PURE__ */ React40.createElement("stop", { stopColor: "#96F2FF" }), /* @__PURE__ */ React40.createElement("stop", { offset: 0.619146, stopColor: "#96F2FF", stopOpacity: 0 }))));
var success_notification_default = SvgSuccessNotification;

// src/assets/icons/error-notification.svg
import * as React41 from "react";
var SvgErrorNotification = (props) => /* @__PURE__ */ React41.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React41.createElement("rect", { width: 24, height: 24, rx: 6, fill: "url(#paint0_linear_157_648)" }), /* @__PURE__ */ React41.createElement("path", { d: "M12 5.5C10.7144 5.5 9.45772 5.88122 8.3888 6.59545C7.31988 7.30968 6.48676 8.32484 5.99479 9.51256C5.50282 10.7003 5.37409 12.0072 5.6249 13.2681C5.8757 14.529 6.49477 15.6872 7.40381 16.5962C8.31285 17.5052 9.47104 18.1243 10.7319 18.3751C11.9928 18.6259 13.2997 18.4972 14.4874 18.0052C15.6752 17.5132 16.6903 16.6801 17.4046 15.6112C18.1188 14.5423 18.5 13.2856 18.5 12C18.4982 10.2767 17.8128 8.62441 16.5942 7.40582C15.3756 6.18722 13.7234 5.50182 12 5.5ZM12 17.5C10.9122 17.5 9.84884 17.1774 8.94437 16.5731C8.0399 15.9687 7.33495 15.1098 6.91867 14.1048C6.50238 13.0998 6.39347 11.9939 6.60568 10.927C6.8179 9.86011 7.34173 8.8801 8.11092 8.11091C8.8801 7.34172 9.86011 6.8179 10.927 6.60568C11.9939 6.39346 13.0998 6.50238 14.1048 6.91866C15.1098 7.33494 15.9687 8.03989 16.5731 8.94436C17.1774 9.84883 17.5 10.9122 17.5 12C17.4983 13.4582 16.9184 14.8562 15.8873 15.8873C14.8562 16.9184 13.4582 17.4983 12 17.5ZM11.5 12.5V9C11.5 8.86739 11.5527 8.74021 11.6464 8.64645C11.7402 8.55268 11.8674 8.5 12 8.5C12.1326 8.5 12.2598 8.55268 12.3536 8.64645C12.4473 8.74021 12.5 8.86739 12.5 9V12.5C12.5 12.6326 12.4473 12.7598 12.3536 12.8536C12.2598 12.9473 12.1326 13 12 13C11.8674 13 11.7402 12.9473 11.6464 12.8536C11.5527 12.7598 11.5 12.6326 11.5 12.5ZM12.75 14.75C12.75 14.8983 12.706 15.0433 12.6236 15.1667C12.5412 15.29 12.4241 15.3861 12.287 15.4429C12.15 15.4997 11.9992 15.5145 11.8537 15.4856C11.7082 15.4566 11.5746 15.3852 11.4697 15.2803C11.3648 15.1754 11.2934 15.0418 11.2644 14.8963C11.2355 14.7508 11.2503 14.6 11.3071 14.463C11.3639 14.3259 11.46 14.2088 11.5833 14.1264C11.7067 14.044 11.8517 14 12 14C12.1989 14 12.3897 14.079 12.5303 14.2197C12.671 14.3603 12.75 14.5511 12.75 14.75Z", fill: "white" }), /* @__PURE__ */ React41.createElement("defs", null, /* @__PURE__ */ React41.createElement("linearGradient", { id: "paint0_linear_157_648", x1: 12, y1: 0, x2: 12, y2: 24, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React41.createElement("stop", { stopColor: "#FD3F3F" }), /* @__PURE__ */ React41.createElement("stop", { offset: 1, stopColor: "#2B2F56" }))));
var error_notification_default = SvgErrorNotification;

// src/design.system/notification/notification.tsx
function Notification({ type, message, onClose }) {
  useEffect5(() => {
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
        return /* @__PURE__ */ React42.createElement(success_notification_default, null);
      case "error":
        return /* @__PURE__ */ React42.createElement(error_notification_default, null);
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
  return /* @__PURE__ */ React42.createElement(NotificationContainer, null, /* @__PURE__ */ React42.createElement(StyledNotification, { style: getNotificationStyle() }, getIcon(), /* @__PURE__ */ React42.createElement(Text, { weight: 500, size: 14 }, message), /* @__PURE__ */ React42.createElement(X_blue_default, { onClick: onClose })));
}

// src/design.system/data.flow/index.tsx
import React57, { useEffect as useEffect7 } from "react";
import ReactFlow, {
  Background,
  useReactFlow,
  ReactFlowProvider
} from "reactflow";

// src/design.system/data.flow/action.node.tsx
import React43, { memo } from "react";
import { Handle, Position } from "reactflow";
import styled20 from "styled-components";
var ActionContainer = styled20.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-radius: 12px;
  border: ${({ theme: theme2 }) => `solid 1px ${theme2.colors.blue_grey}`};
  background: ${({ theme: theme2 }) => theme2.colors.dark};
  align-items: center;
  gap: 4px;
  min-width: 80px;
`;
var TextWrapper3 = styled20.div`
  max-width: 72px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
var SignalIndicator = styled20.span`
  background-color: ${({ backgroundColor: backgroundColor2 }) => backgroundColor2};
  width: 8px;
  height: 8px;
  border-radius: 8px;
`;
var IconWrapper = styled20.div`
  width: 24px;
  height: 24px;
`;
var action_node_default = memo(({ data, isConnectable }) => {
  const ActionIcon = ACTION_ICONS[data.type] ? ACTION_ICONS[data.type] : null;
  return /* @__PURE__ */ React43.createElement(ActionContainer, null, /* @__PURE__ */ React43.createElement(
    Handle,
    {
      type: "target",
      position: Position.Left,
      id: "b",
      isConnectable,
      style: { visibility: "hidden" }
    }
  ), ActionIcon && /* @__PURE__ */ React43.createElement(IconWrapper, null, /* @__PURE__ */ React43.createElement(ActionIcon, null)), /* @__PURE__ */ React43.createElement(TextWrapper3, null, /* @__PURE__ */ React43.createElement(Text, { size: 14, weight: 600 }, data?.spec?.actionName || "Action")), /* @__PURE__ */ React43.createElement(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        width: "100%"
      }
    },
    data.spec?.signals.map((monitor) => /* @__PURE__ */ React43.createElement(
      SignalIndicator,
      {
        key: monitor,
        backgroundColor: palette_default.colors[monitor.toLowerCase()]
      }
    ))
  ), /* @__PURE__ */ React43.createElement(
    Handle,
    {
      type: "source",
      position: Position.Right,
      id: "a",
      isConnectable,
      style: { visibility: "hidden" }
    }
  ));
});

// src/design.system/data.flow/keyval.middleware.tsx
import React44 from "react";
import { Handle as Handle2, Position as Position2 } from "reactflow";
import styled21, { keyframes } from "styled-components";
var flickerAnimation = keyframes`
  0% {
    opacity: 1;

  }
  100% {
    opacity: 0.5;
  }
`;
var FlickerWrapper = styled21.div`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 60px;
  position: relative;
  z-index: 90;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 60px;
    background: #110c1f55;
    z-index: -1;
    animation: ${flickerAnimation} 1s infinite alternate;
  }
`;
var InnerWrapper = styled21.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: solid 1px #3a3a3a76;
  background: #110c1f7d;
`;
var LogoContainer = styled21.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  border: solid 1px #3a3a3aa9;
  background: #110c1f;
  position: relative;
  z-index: 99;
`;
var OdigosCenterNode = ({
  isConnectable
}) => {
  return /* @__PURE__ */ React44.createElement(FlickerWrapper, null, /* @__PURE__ */ React44.createElement(InnerWrapper, null, /* @__PURE__ */ React44.createElement(LogoContainer, null, /* @__PURE__ */ React44.createElement(
    "img",
    {
      src: "https://d1n7d4xz7fr8b4.cloudfront.net/logo.png",
      alt: "logo",
      style: { borderRadius: "50%", width: 64, height: 64 }
    }
  ))), /* @__PURE__ */ React44.createElement(
    Handle2,
    {
      type: "target",
      position: Position2.Left,
      style: { visibility: "hidden" }
    }
  ), /* @__PURE__ */ React44.createElement(
    Handle2,
    {
      type: "source",
      position: Position2.Right,
      id: "a",
      isConnectable,
      style: { visibility: "hidden" }
    }
  ));
};
var keyval_middleware_default = OdigosCenterNode;

// src/design.system/data.flow/namespace.node.tsx
import React47, { memo as memo2 } from "react";
import { Handle as Handle3, Position as Position3 } from "reactflow";
import { styled as styled22 } from "styled-components";

// src/assets/icons/overview/middleware.svg
import * as React45 from "react";

// src/assets/icons/overview/folder.svg
import * as React46 from "react";
var SvgFolder = (props) => /* @__PURE__ */ React46.createElement("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React46.createElement("rect", { width: 32, height: 32, rx: 4, fill: "url(#paint0_linear_280_5350)" }), /* @__PURE__ */ React46.createElement("rect", { width: 32, height: 32, rx: 4, fill: "url(#paint1_radial_280_5350)", fillOpacity: 0.4 }), /* @__PURE__ */ React46.createElement("path", { opacity: 0.2, d: "M25.75 11.5V19.8334C25.75 20.0102 25.6798 20.1798 25.5548 20.3048C25.4298 20.4298 25.2602 20.5 25.0834 20.5H22.75V14.5C22.75 14.3011 22.671 14.1103 22.5303 13.9697C22.3897 13.829 22.1989 13.75 22 13.75H15.5003C15.338 13.75 15.1801 13.6974 15.0503 13.6L12.4497 11.65C12.3199 11.5526 12.162 11.5 11.9997 11.5H10V9.25C10 9.05109 10.079 8.86032 10.2197 8.71967C10.3603 8.57902 10.5511 8.5 10.75 8.5H14.9997C15.162 8.5 15.3199 8.55263 15.4497 8.65L18.0503 10.6C18.1801 10.6974 18.338 10.75 18.5003 10.75H25C25.1989 10.75 25.3897 10.829 25.5303 10.9697C25.671 11.1103 25.75 11.3011 25.75 11.5Z", fill: "#96F2FF" }), /* @__PURE__ */ React46.createElement("path", { d: "M25 10H18.5003L15.8997 8.05C15.6397 7.85599 15.3241 7.7508 14.9997 7.75H10.75C10.3522 7.75 9.97064 7.90804 9.68934 8.18934C9.40804 8.47064 9.25 8.85218 9.25 9.25V10.75H7.75C7.35218 10.75 6.97064 10.908 6.68934 11.1893C6.40804 11.4706 6.25 11.8522 6.25 12.25V22.75C6.25 23.1478 6.40804 23.5294 6.68934 23.8107C6.97064 24.092 7.35218 24.25 7.75 24.25H22.0834C22.459 24.2495 22.819 24.1001 23.0846 23.8346C23.3501 23.569 23.4995 23.209 23.5 22.8334V21.25H25.0834C25.459 21.2495 25.819 21.1001 26.0846 20.8346C26.3501 20.569 26.4995 20.209 26.5 19.8334V11.5C26.5 11.1022 26.342 10.7206 26.0607 10.4393C25.7794 10.158 25.3978 10 25 10ZM22 22.75H7.75V12.25H11.9997L14.6003 14.2C14.8603 14.394 15.1759 14.4992 15.5003 14.5H22V22.75ZM25 19.75H23.5V14.5C23.5 14.1022 23.342 13.7206 23.0607 13.4393C22.7794 13.158 22.3978 13 22 13H15.5003L12.8997 11.05C12.6397 10.856 12.3241 10.7508 11.9997 10.75H10.75V9.25H14.9997L17.6003 11.2C17.8603 11.394 18.1759 11.4992 18.5003 11.5H25V19.75Z", fill: "#96F2FF" }), /* @__PURE__ */ React46.createElement("rect", { x: 0.375, y: 0.375, width: 31.25, height: 31.25, rx: 3.625, stroke: "url(#paint2_linear_280_5350)", strokeOpacity: 0.5, strokeWidth: 0.75 }), /* @__PURE__ */ React46.createElement("defs", null, /* @__PURE__ */ React46.createElement("linearGradient", { id: "paint0_linear_280_5350", x1: 16, y1: 0, x2: 16, y2: 32, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React46.createElement("stop", { stopColor: "#2E4C55" }), /* @__PURE__ */ React46.createElement("stop", { offset: 1, stopColor: "#303355" })), /* @__PURE__ */ React46.createElement("radialGradient", { id: "paint1_radial_280_5350", cx: 0, cy: 0, r: 1, gradientUnits: "userSpaceOnUse", gradientTransform: "translate(32 -1.19209e-06) rotate(120.009) scale(23.0961 24.8123)" }, /* @__PURE__ */ React46.createElement("stop", { stopColor: "#96F2FF" }), /* @__PURE__ */ React46.createElement("stop", { offset: 0.619146, stopColor: "#96F2FF", stopOpacity: 0 })), /* @__PURE__ */ React46.createElement("linearGradient", { id: "paint2_linear_280_5350", x1: 16, y1: 0, x2: 16, y2: 32, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React46.createElement("stop", { stopColor: "#96F2FF" }), /* @__PURE__ */ React46.createElement("stop", { offset: 1, stopColor: "#96F2FF", stopOpacity: 0 }))));
var folder_default = SvgFolder;

// src/design.system/data.flow/namespace.node.tsx
var NamespaceContainer = styled22.div`
  display: flex;
  padding: 16px;
  border-radius: 12px;
  border: ${({ theme: theme2 }) => `solid 1px ${theme2.colors.blue_grey}`};
  background: ${({ theme: theme2 }) => theme2.colors.dark};
  align-items: center;
  width: 272px;
  gap: 8px;
`;
var TextWrapper4 = styled22.div`
  gap: 10px;
`;
var namespace_node_default = memo2(({ data, isConnectable }) => {
  return /* @__PURE__ */ React47.createElement(NamespaceContainer, null, /* @__PURE__ */ React47.createElement(folder_default, { width: 32 }), /* @__PURE__ */ React47.createElement(TextWrapper4, null, /* @__PURE__ */ React47.createElement(Text, { size: 14, weight: 600 }, data?.name), data?.totalAppsInstrumented && /* @__PURE__ */ React47.createElement(
    Text,
    {
      color: "#8b92a5"
    },
    `${data.totalAppsInstrumented} Apps Instrumented`
  )), /* @__PURE__ */ React47.createElement(
    Handle3,
    {
      type: "source",
      position: Position3.Right,
      id: "a",
      isConnectable,
      style: { visibility: "hidden" }
    }
  ));
});

// src/design.system/data.flow/destination.node.tsx
import React54 from "react";
import { styled as styled23 } from "styled-components";
import { Handle as Handle4, Position as Position4 } from "reactflow";

// src/assets/icons/logs-grey.svg
import * as React48 from "react";
var SvgLogsGrey = (props) => /* @__PURE__ */ React48.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React48.createElement("path", { d: "M2 4C2 3.86739 2.05268 3.74021 2.14645 3.64645C2.24021 3.55268 2.36739 3.5 2.5 3.5H13.5C13.6326 3.5 13.7598 3.55268 13.8536 3.64645C13.9473 3.74021 14 3.86739 14 4C14 4.13261 13.9473 4.25979 13.8536 4.35355C13.7598 4.44732 13.6326 4.5 13.5 4.5H2.5C2.36739 4.5 2.24021 4.44732 2.14645 4.35355C2.05268 4.25979 2 4.13261 2 4ZM2.5 7H10.5C10.6326 7 10.7598 6.94732 10.8536 6.85355C10.9473 6.75979 11 6.63261 11 6.5C11 6.36739 10.9473 6.24021 10.8536 6.14645C10.7598 6.05268 10.6326 6 10.5 6H2.5C2.36739 6 2.24021 6.05268 2.14645 6.14645C2.05268 6.24021 2 6.36739 2 6.5C2 6.63261 2.05268 6.75979 2.14645 6.85355C2.24021 6.94732 2.36739 7 2.5 7ZM13.5 8.5H2.5C2.36739 8.5 2.24021 8.55268 2.14645 8.64645C2.05268 8.74021 2 8.86739 2 9C2 9.13261 2.05268 9.25979 2.14645 9.35355C2.24021 9.44732 2.36739 9.5 2.5 9.5H13.5C13.6326 9.5 13.7598 9.44732 13.8536 9.35355C13.9473 9.25979 14 9.13261 14 9C14 8.86739 13.9473 8.74021 13.8536 8.64645C13.7598 8.55268 13.6326 8.5 13.5 8.5ZM10.5 11H2.5C2.36739 11 2.24021 11.0527 2.14645 11.1464C2.05268 11.2402 2 11.3674 2 11.5C2 11.6326 2.05268 11.7598 2.14645 11.8536C2.24021 11.9473 2.36739 12 2.5 12H10.5C10.6326 12 10.7598 11.9473 10.8536 11.8536C10.9473 11.7598 11 11.6326 11 11.5C11 11.3674 10.9473 11.2402 10.8536 11.1464C10.7598 11.0527 10.6326 11 10.5 11Z", fill: "#8B92A5" }));
var logs_grey_default = SvgLogsGrey;

// src/assets/icons/logs-blue.svg
import * as React49 from "react";
var SvgLogsBlue = (props) => /* @__PURE__ */ React49.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React49.createElement("path", { d: "M2 4C2 3.86739 2.05268 3.74021 2.14645 3.64645C2.24021 3.55268 2.36739 3.5 2.5 3.5H13.5C13.6326 3.5 13.7598 3.55268 13.8536 3.64645C13.9473 3.74021 14 3.86739 14 4C14 4.13261 13.9473 4.25979 13.8536 4.35355C13.7598 4.44732 13.6326 4.5 13.5 4.5H2.5C2.36739 4.5 2.24021 4.44732 2.14645 4.35355C2.05268 4.25979 2 4.13261 2 4ZM2.5 7H10.5C10.6326 7 10.7598 6.94732 10.8536 6.85355C10.9473 6.75979 11 6.63261 11 6.5C11 6.36739 10.9473 6.24021 10.8536 6.14645C10.7598 6.05268 10.6326 6 10.5 6H2.5C2.36739 6 2.24021 6.05268 2.14645 6.14645C2.05268 6.24021 2 6.36739 2 6.5C2 6.63261 2.05268 6.75979 2.14645 6.85355C2.24021 6.94732 2.36739 7 2.5 7ZM13.5 8.5H2.5C2.36739 8.5 2.24021 8.55268 2.14645 8.64645C2.05268 8.74021 2 8.86739 2 9C2 9.13261 2.05268 9.25979 2.14645 9.35355C2.24021 9.44732 2.36739 9.5 2.5 9.5H13.5C13.6326 9.5 13.7598 9.44732 13.8536 9.35355C13.9473 9.25979 14 9.13261 14 9C14 8.86739 13.9473 8.74021 13.8536 8.64645C13.7598 8.55268 13.6326 8.5 13.5 8.5ZM10.5 11H2.5C2.36739 11 2.24021 11.0527 2.14645 11.1464C2.05268 11.2402 2 11.3674 2 11.5C2 11.6326 2.05268 11.7598 2.14645 11.8536C2.24021 11.9473 2.36739 12 2.5 12H10.5C10.6326 12 10.7598 11.9473 10.8536 11.8536C10.9473 11.7598 11 11.6326 11 11.5C11 11.3674 10.9473 11.2402 10.8536 11.1464C10.7598 11.0527 10.6326 11 10.5 11Z", fill: "#96F2FF" }));
var logs_blue_default = SvgLogsBlue;

// src/assets/icons/chart-line-grey.svg
import * as React50 from "react";
var SvgChartLineGrey = (props) => /* @__PURE__ */ React50.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React50.createElement("path", { d: "M14.5 13C14.5 13.1326 14.4473 13.2598 14.3536 13.3536C14.2598 13.4473 14.1326 13.5 14 13.5H2C1.86739 13.5 1.74021 13.4473 1.64645 13.3536C1.55268 13.2598 1.5 13.1326 1.5 13V3C1.5 2.86739 1.55268 2.74021 1.64645 2.64645C1.74021 2.55268 1.86739 2.5 2 2.5C2.13261 2.5 2.25979 2.55268 2.35355 2.64645C2.44732 2.74021 2.5 2.86739 2.5 3V8.89812L5.67063 6.125C5.7569 6.04947 5.86652 6.0059 5.9811 6.00157C6.09569 5.99725 6.20828 6.03244 6.3 6.10125L9.97563 8.85812L13.6706 5.625C13.7191 5.57704 13.7768 5.5395 13.8403 5.51467C13.9038 5.48985 13.9717 5.47827 14.0398 5.48065C14.1079 5.48303 14.1749 5.49931 14.2365 5.5285C14.2981 5.55769 14.3531 5.59917 14.398 5.65038C14.443 5.7016 14.4771 5.76148 14.4981 5.82633C14.5191 5.89119 14.5266 5.95965 14.5201 6.02752C14.5137 6.09538 14.4935 6.16122 14.4607 6.22097C14.4279 6.28073 14.3832 6.33314 14.3294 6.375L10.3294 9.875C10.2431 9.95053 10.1335 9.9941 10.0189 9.99843C9.90431 10.0028 9.79172 9.96756 9.7 9.89875L6.02437 7.14313L2.5 10.2269V12.5H14C14.1326 12.5 14.2598 12.5527 14.3536 12.6464C14.4473 12.7402 14.5 12.8674 14.5 13Z", fill: "#8B92A5" }));
var chart_line_grey_default = SvgChartLineGrey;

// src/assets/icons/chart-line-blue.svg
import * as React51 from "react";
var SvgChartLineBlue = (props) => /* @__PURE__ */ React51.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React51.createElement("path", { d: "M14.5 13C14.5 13.1326 14.4473 13.2598 14.3536 13.3536C14.2598 13.4473 14.1326 13.5 14 13.5H2C1.86739 13.5 1.74021 13.4473 1.64645 13.3536C1.55268 13.2598 1.5 13.1326 1.5 13V3C1.5 2.86739 1.55268 2.74021 1.64645 2.64645C1.74021 2.55268 1.86739 2.5 2 2.5C2.13261 2.5 2.25979 2.55268 2.35355 2.64645C2.44732 2.74021 2.5 2.86739 2.5 3V8.89812L5.67063 6.125C5.7569 6.04947 5.86652 6.0059 5.9811 6.00157C6.09569 5.99725 6.20828 6.03244 6.3 6.10125L9.97563 8.85812L13.6706 5.625C13.7191 5.57704 13.7768 5.5395 13.8403 5.51467C13.9038 5.48985 13.9717 5.47827 14.0398 5.48065C14.1079 5.48303 14.1749 5.49931 14.2365 5.5285C14.2981 5.55769 14.3531 5.59917 14.398 5.65038C14.443 5.7016 14.4771 5.76148 14.4981 5.82633C14.5191 5.89119 14.5266 5.95965 14.5201 6.02752C14.5137 6.09538 14.4935 6.16122 14.4607 6.22097C14.4279 6.28073 14.3832 6.33314 14.3294 6.375L10.3294 9.875C10.2431 9.95053 10.1335 9.9941 10.0189 9.99843C9.90431 10.0028 9.79172 9.96756 9.7 9.89875L6.02437 7.14313L2.5 10.2269V12.5H14C14.1326 12.5 14.2598 12.5527 14.3536 12.6464C14.4473 12.7402 14.5 12.8674 14.5 13Z", fill: "#96F2FF" }));
var chart_line_blue_default = SvgChartLineBlue;

// src/assets/icons/tree-structure-grey.svg
import * as React52 from "react";
var SvgTreeStructureGrey = (props) => /* @__PURE__ */ React52.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React52.createElement("path", { d: "M10.5 7H13.5C13.7652 7 14.0196 6.89464 14.2071 6.70711C14.3946 6.51957 14.5 6.26522 14.5 6V3C14.5 2.73478 14.3946 2.48043 14.2071 2.29289C14.0196 2.10536 13.7652 2 13.5 2H10.5C10.2348 2 9.98043 2.10536 9.79289 2.29289C9.60536 2.48043 9.5 2.73478 9.5 3V4H9C8.46957 4 7.96086 4.21071 7.58579 4.58579C7.21071 4.96086 7 5.46957 7 6V7.5H5V7C5 6.73478 4.89464 6.48043 4.70711 6.29289C4.51957 6.10536 4.26522 6 4 6H2C1.73478 6 1.48043 6.10536 1.29289 6.29289C1.10536 6.48043 1 6.73478 1 7V9C1 9.26522 1.10536 9.51957 1.29289 9.70711C1.48043 9.89464 1.73478 10 2 10H4C4.26522 10 4.51957 9.89464 4.70711 9.70711C4.89464 9.51957 5 9.26522 5 9V8.5H7V10C7 10.5304 7.21071 11.0391 7.58579 11.4142C7.96086 11.7893 8.46957 12 9 12H9.5V13C9.5 13.2652 9.60536 13.5196 9.79289 13.7071C9.98043 13.8946 10.2348 14 10.5 14H13.5C13.7652 14 14.0196 13.8946 14.2071 13.7071C14.3946 13.5196 14.5 13.2652 14.5 13V10C14.5 9.73478 14.3946 9.48043 14.2071 9.29289C14.0196 9.10536 13.7652 9 13.5 9H10.5C10.2348 9 9.98043 9.10536 9.79289 9.29289C9.60536 9.48043 9.5 9.73478 9.5 10V11H9C8.73478 11 8.48043 10.8946 8.29289 10.7071C8.10536 10.5196 8 10.2652 8 10V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H9.5V6C9.5 6.26522 9.60536 6.51957 9.79289 6.70711C9.98043 6.89464 10.2348 7 10.5 7ZM4 9H2V7H4V9ZM10.5 10H13.5V13H10.5V10ZM10.5 3H13.5V6H10.5V3Z", fill: "#8B92A5" }));
var tree_structure_grey_default = SvgTreeStructureGrey;

// src/assets/icons/tree-structure-blue.svg
import * as React53 from "react";
var SvgTreeStructureBlue = (props) => /* @__PURE__ */ React53.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React53.createElement("path", { d: "M10.5 7H13.5C13.7652 7 14.0196 6.89464 14.2071 6.70711C14.3946 6.51957 14.5 6.26522 14.5 6V3C14.5 2.73478 14.3946 2.48043 14.2071 2.29289C14.0196 2.10536 13.7652 2 13.5 2H10.5C10.2348 2 9.98043 2.10536 9.79289 2.29289C9.60536 2.48043 9.5 2.73478 9.5 3V4H9C8.46957 4 7.96086 4.21071 7.58579 4.58579C7.21071 4.96086 7 5.46957 7 6V7.5H5V7C5 6.73478 4.89464 6.48043 4.70711 6.29289C4.51957 6.10536 4.26522 6 4 6H2C1.73478 6 1.48043 6.10536 1.29289 6.29289C1.10536 6.48043 1 6.73478 1 7V9C1 9.26522 1.10536 9.51957 1.29289 9.70711C1.48043 9.89464 1.73478 10 2 10H4C4.26522 10 4.51957 9.89464 4.70711 9.70711C4.89464 9.51957 5 9.26522 5 9V8.5H7V10C7 10.5304 7.21071 11.0391 7.58579 11.4142C7.96086 11.7893 8.46957 12 9 12H9.5V13C9.5 13.2652 9.60536 13.5196 9.79289 13.7071C9.98043 13.8946 10.2348 14 10.5 14H13.5C13.7652 14 14.0196 13.8946 14.2071 13.7071C14.3946 13.5196 14.5 13.2652 14.5 13V10C14.5 9.73478 14.3946 9.48043 14.2071 9.29289C14.0196 9.10536 13.7652 9 13.5 9H10.5C10.2348 9 9.98043 9.10536 9.79289 9.29289C9.60536 9.48043 9.5 9.73478 9.5 10V11H9C8.73478 11 8.48043 10.8946 8.29289 10.7071C8.10536 10.5196 8 10.2652 8 10V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H9.5V6C9.5 6.26522 9.60536 6.51957 9.79289 6.70711C9.98043 6.89464 10.2348 7 10.5 7ZM4 9H2V7H4V9ZM10.5 10H13.5V13H10.5V10ZM10.5 3H13.5V6H10.5V3Z", fill: "#96F2FF" }));
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
var DestinationNodeContainer = styled23.div`
  padding: 16px 24px;
  display: flex;
  border-radius: 12px;
  gap: 8px;
  border: ${({ theme: theme2 }) => `solid 1px ${theme2.colors.blue_grey}`};
  background: ${({ theme: theme2 }) => theme2.colors.dark};
  align-items: center;
  justify-content: space-between;
  width: 430px;
`;
var NodeDataWrapper = styled23.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
var TextWrapper5 = styled23.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
var IMAGE_STYLE2 = {
  backgroundColor: "#fff",
  padding: 4,
  borderRadius: 10
};
var IconWrapper2 = styled23.div`
  padding: 4px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  opacity: ${({ tapped }) => tapped ? 1 : 0.4};
`;
var MonitorsListWrapper = styled23.div`
  display: flex;
  gap: 8px;
`;
function DestinationNode({ data, isConnectable }) {
  function renderMonitors() {
    return MONITORING_OPTIONS.map((monitor) => /* @__PURE__ */ React54.createElement(
      IconWrapper2,
      {
        key: monitor?.id,
        tapped: data?.signals?.[monitor?.type] ? "true" : void 0,
        style: {
          border: `solid 2px ${palette_default.colors[monitor.type.toLowerCase()]}`
        }
      },
      data?.signals?.[monitor?.type] ? monitor.icons.focus() : monitor.icons.notFocus()
    ));
  }
  return /* @__PURE__ */ React54.createElement(DestinationNodeContainer, null, /* @__PURE__ */ React54.createElement(NodeDataWrapper, null, /* @__PURE__ */ React54.createElement(
    "img",
    {
      src: data?.destination_type?.image_url,
      width: 40,
      height: 40,
      style: IMAGE_STYLE2,
      alt: ""
    }
  ), /* @__PURE__ */ React54.createElement(TextWrapper5, null, /* @__PURE__ */ React54.createElement(Text, { color: "#8b92a5" }, data?.name), /* @__PURE__ */ React54.createElement(Text, { size: 18, weight: 600 }, data?.destination_type?.display_name))), /* @__PURE__ */ React54.createElement(MonitorsListWrapper, null, renderMonitors()), /* @__PURE__ */ React54.createElement(
    Handle4,
    {
      type: "target",
      position: Position4.Left,
      id: "a",
      isConnectable,
      style: { visibility: "hidden" }
    }
  ));
}

// src/design.system/data.flow/source.node.tsx
import React55, { memo as memo3 } from "react";
import styled24 from "styled-components";
import { Handle as Handle5, Position as Position5 } from "reactflow";
var NamespaceContainer2 = styled24.div`
  display: flex;
  padding: 16px;
  border-radius: 12px;
  border: ${({ theme: theme2 }) => `solid 1px ${theme2.colors.blue_grey}`};
  background: ${({ theme: theme2 }) => theme2.colors.dark};
  align-items: center;
  width: 272px;
  gap: 8px;
`;
var TextWrapper6 = styled24.div`
  gap: 4px;
  display: flex;
  flex-direction: column;
`;
var ImageWrapper = styled24.div`
  padding: 4px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
var source_node_default = memo3(({ data, isConnectable }) => {
  const languageKey = data?.languages?.[0]?.language || "default";
  const lan = LANGUAGES_LOGOS[languageKey];
  return /* @__PURE__ */ React55.createElement(NamespaceContainer2, null, /* @__PURE__ */ React55.createElement(ImageWrapper, null, /* @__PURE__ */ React55.createElement("img", { src: lan, alt: "", width: 32, height: 32 })), /* @__PURE__ */ React55.createElement(TextWrapper6, null, /* @__PURE__ */ React55.createElement(Text, { color: "#8b92a5" }, data.namespace), /* @__PURE__ */ React55.createElement(Text, { size: 18, weight: 600 }, data?.name)), /* @__PURE__ */ React55.createElement(
    Handle5,
    {
      type: "source",
      position: Position5.Right,
      id: "a",
      isConnectable,
      style: { visibility: "hidden" }
    }
  ));
});

// src/design.system/data.flow/data.flow.styled.tsx
import styled25 from "styled-components";
var DataFlowContainer = styled25.div`
  width: 100%;
  height: 100%;
`;
var ControllerWrapper = styled25.div`
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
import "reactflow/dist/style.css";

// src/design.system/data.flow/control.panel.tsx
import React56, { useEffect as useEffect6, useState as useState8 } from "react";
import "reactflow/dist/style.css";
import { Controls } from "reactflow";
import styled26 from "styled-components";
var ControllerPanelWrapper = styled26.div`
  position: absolute;
  z-index: 999;
  top: 15px;
  left: 60px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background-color: ${palette_default.colors.dark};
  padding: 10px;
  border-radius: 8px;
  border: 1px solid ${palette_default.colors.blue_grey};
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
var MonitorItem = styled26.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;
var MonitorIndicator = styled26.span`
  background-color: ${({ color }) => color};
  width: 10px;
  height: 10px;
  border-radius: 8px;
  margin-right: 6px;
`;
var TitleWrapper = styled26.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;
function DataFlowControlPanel() {
  const [isOpen, setOpen] = useState8(true);
  useEffect6(() => {
    setTimeout(() => {
      setOpen(false);
    }, 7e3);
  }, []);
  const MONITORS2 = [
    {
      name: "Traces",
      color: palette_default.colors.traces
    },
    {
      name: "Logs",
      color: palette_default.colors.logs
    },
    {
      name: "Metrics",
      color: palette_default.colors.metrics
    }
  ];
  return /* @__PURE__ */ React56.createElement(React56.Fragment, null, /* @__PURE__ */ React56.createElement(ControllerPanelWrapper, null, /* @__PURE__ */ React56.createElement(TitleWrapper, { onClick: () => setOpen(!isOpen) }, /* @__PURE__ */ React56.createElement(Text, { size: 14, weight: 600 }, "Supported Signals"), /* @__PURE__ */ React56.createElement(expand_arrow_default, null)), isOpen && /* @__PURE__ */ React56.createElement(MonitorItem, null, MONITORS2.map((monitor) => /* @__PURE__ */ React56.createElement(
    "div",
    {
      key: monitor.name,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    },
    /* @__PURE__ */ React56.createElement(MonitorIndicator, { color: monitor.color }),
    /* @__PURE__ */ React56.createElement(Text, { size: 12, weight: 500 }, monitor.name)
  )))), /* @__PURE__ */ React56.createElement(ControllerWrapper, null, /* @__PURE__ */ React56.createElement(Controls, { position: "top-left", showInteractive: false })));
}

// src/design.system/data.flow/index.tsx
var backgroundColor = palette_default.colors.data_flow_bg;
var nodeTypes = {
  custom: keyval_middleware_default,
  namespace: namespace_node_default,
  destination: DestinationNode,
  action: action_node_default,
  source: source_node_default
};
function DataFlow({ nodes: nodes2, edges: edges2, ...rest }) {
  const { fitView } = useReactFlow();
  useEffect7(() => {
    setTimeout(() => {
      fitView();
    }, 100);
  }, [fitView, nodes2, edges2]);
  return /* @__PURE__ */ React57.createElement(DataFlowContainer, null, /* @__PURE__ */ React57.createElement(
    ReactFlow,
    {
      nodes: nodes2,
      edges: edges2,
      nodeTypes,
      nodesDraggable: false,
      nodeOrigin: [0.4, 0.4],
      ...rest
    },
    /* @__PURE__ */ React57.createElement(DataFlowControlPanel, null),
    /* @__PURE__ */ React57.createElement(Background, { gap: 12, size: 1, style: { backgroundColor } })
  ));
}
function KeyvalDataFlow(props) {
  return /* @__PURE__ */ React57.createElement(ReactFlowProvider, null, /* @__PURE__ */ React57.createElement(DataFlow, { ...props }));
}

// src/design.system/danger.zone/danger.zone.tsx
import React58 from "react";
import { styled as styled27 } from "styled-components";
var DangerZoneWrapper = styled27.div`
  padding: 10px;
  border: ${({ theme: theme2 }) => `1px solid ${theme2.colors.blue_grey}`};
  border-radius: 8px;
  width: fit-content;
  width: 344px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
var DangerButtonWrapper = styled27.div`
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
var DangerButton = styled27.button`
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
  return /* @__PURE__ */ React58.createElement(React58.Fragment, null, /* @__PURE__ */ React58.createElement(DangerZoneWrapper, null, /* @__PURE__ */ React58.createElement(Text, { size: 14, weight: 600 }, title), /* @__PURE__ */ React58.createElement(Text, { size: 12 }, subTitle), /* @__PURE__ */ React58.createElement(DangerButtonWrapper, null, /* @__PURE__ */ React58.createElement(DangerButton, { onClick }, /* @__PURE__ */ React58.createElement(Text, { weight: 500, size: 14, color: palette_default.colors.error }, btnText)))));
}

// src/design.system/modal/modal.tsx
import React60, { useCallback, useEffect as useEffect8, useRef as useRef2 } from "react";

// src/design.system/modal/portal.modal.tsx
import { useState as useState9, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
var PortalModal = ({ children, wrapperId }) => {
  const [portalElement, setPortalElement] = useState9(null);
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
import styled28, { keyframes as keyframes2 } from "styled-components";
var fadeIn = keyframes2`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
var ModalButtonsContainer = styled28.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
var ModalButtonPrimary = styled28.button`
  display: block;
  padding: 10px 30px;
  border-radius: 3px;
  color: ${({ theme: theme2 }) => theme2.colors.btnText};
  border: 1px solid ${({ theme: theme2 }) => theme2.colors.main};
  background-color: ${({ theme: theme2 }) => theme2.colors.main};
  font-family: 'Robot', sans-serif;
  font-weight: 500;
  transition: 0.3s ease all;

  &:hover {
    background-color: ${({ theme: theme2 }) => theme2.colors.shadowMain};
  }
`;
var ModalButtonSecondary = styled28.button`
  display: block;
  padding: 10px 30px;
  border-radius: 3px;
  color: ${({ theme: theme2 }) => theme2.colors.main};
  border: 1px solid ${({ theme: theme2 }) => theme2.colors.main};
  background-color: transparent;
  font-family: 'Robot', sans-serif;
  font-weight: 500;
  transition: 0.3s ease all;

  &:hover {
    background-color: ${({ theme: theme2 }) => theme2.colors.shadowMain};
    color: ${({ theme: theme2 }) => theme2.colors.btnText};
  }
`;
var Overlay = styled28.div`
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.showOverlay ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.1)"};
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
var ModalContainer = styled28.div`
  min-width: 500px;
  min-height: 50px;
  /* background-color: #ffffff; */
  position: relative;
  /* border-radius: 8px; */
  border-radius: 12px;
  border: 0.95px solid var(--dark-mode-dark-3, #203548);
  background: var(--dark-mode-dark-2, #0e1c28);

  padding: ${(props) => props.padding ? props.padding : "20px"};
`;
var ModalHeader = styled28.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
`;
var Close = styled28.div`
  position: absolute;
  top: 20px;
  right: 15px;
  border: none;
  background-color: transparent;
  transition: 0.3s ease all;
  border-radius: 3px;
  color: '#d1345b';
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    fill: #fff;
  }
`;
var PrimaryButton = styled28.button`
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
var Content = styled28.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  color: ${({ theme: theme2 }) => theme2.text};
`;
var ModalFooter = styled28.footer`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
  padding-top: 20px;
`;

// src/assets/icons/close-modal.svg
import * as React59 from "react";
var SvgCloseModal = (props) => /* @__PURE__ */ React59.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", ...props }, /* @__PURE__ */ React59.createElement("rect", { width: 16, height: 16, rx: 2, fill: "#0E1C28" }), /* @__PURE__ */ React59.createElement("path", { d: "M12.8538 12.146C12.9002 12.1925 12.9371 12.2476 12.9622 12.3083C12.9874 12.369 13.0003 12.4341 13.0003 12.4998C13.0003 12.5655 12.9874 12.6305 12.9622 12.6912C12.9371 12.7519 12.9002 12.8071 12.8538 12.8535C12.8073 12.9 12.7522 12.9368 12.6915 12.962C12.6308 12.9871 12.5657 13.0001 12.5 13.0001C12.4343 13.0001 12.3693 12.9871 12.3086 12.962C12.2479 12.9368 12.1927 12.9 12.1463 12.8535L8.00003 8.70666L3.85378 12.8535C3.75996 12.9474 3.63272 13.0001 3.50003 13.0001C3.36735 13.0001 3.2401 12.9474 3.14628 12.8535C3.05246 12.7597 2.99976 12.6325 2.99976 12.4998C2.99976 12.3671 3.05246 12.2399 3.14628 12.146L7.29316 7.99979L3.14628 3.85354C3.05246 3.75972 2.99976 3.63247 2.99976 3.49979C2.99976 3.36711 3.05246 3.23986 3.14628 3.14604C3.2401 3.05222 3.36735 2.99951 3.50003 2.99951C3.63272 2.99951 3.75996 3.05222 3.85378 3.14604L8.00003 7.29291L12.1463 3.14604C12.2401 3.05222 12.3674 2.99951 12.5 2.99951C12.6327 2.99951 12.76 3.05222 12.8538 3.14604C12.9476 3.23986 13.0003 3.36711 13.0003 3.49979C13.0003 3.63247 12.9476 3.75972 12.8538 3.85354L8.70691 7.99979L12.8538 12.146Z", fill: "white" }));
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
  useEffect8(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
  return /* @__PURE__ */ React60.createElement(React60.Fragment, null, /* @__PURE__ */ React60.createElement(portal_modal_default, { wrapperId: "modal-portal" }, /* @__PURE__ */ React60.createElement(
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
    /* @__PURE__ */ React60.createElement(ModalContainer, { padding: config.padding, ref: modalRef }, config.showHeader && /* @__PURE__ */ React60.createElement(ModalHeader, null, /* @__PURE__ */ React60.createElement(Text, { size: 24, weight: 700 }, config.title)), /* @__PURE__ */ React60.createElement(Close, { onClick: closeModal }, /* @__PURE__ */ React60.createElement(close_modal_default, null)), /* @__PURE__ */ React60.createElement(Content, null, children), config?.footer && /* @__PURE__ */ React60.createElement(ModalFooter, { style: { ...config.footer.style } }, config.footer.link && /* @__PURE__ */ React60.createElement(
      Link,
      {
        onClick: config.footer.link.onClick,
        value: config.footer.link.text
      }
    ), config.footer.secondaryBtnText && /* @__PURE__ */ React60.createElement(
      Button,
      {
        variant: "secondary",
        onClick: config.footer.secondaryBtnAction
      },
      /* @__PURE__ */ React60.createElement(Text, { size: 16, weight: 700 }, config.footer.secondaryBtnText)
    ), /* @__PURE__ */ React60.createElement(
      Button,
      {
        disabled: config.footer.isDisabled,
        onClick: config.footer.primaryBtnAction
      },
      /* @__PURE__ */ React60.createElement(Text, { size: 16, weight: 700, color: palette_default.text.dark_button }, config.footer.primaryBtnText)
    )))
  )));
}

// src/design.system/theme.provider/theme.provider.tsx
import React62 from "react";

// src/design.system/theme.provider/registry.tsx
import React61, { useState as useState10 } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
function StyledComponentsRegistry({
  children
}) {
  const [styledComponentsStyleSheet] = useState10(() => new ServerStyleSheet());
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return /* @__PURE__ */ React61.createElement(React61.Fragment, null, styles);
  });
  if (typeof window !== "undefined")
    return /* @__PURE__ */ React61.createElement(React61.Fragment, null, children);
  return /* @__PURE__ */ React61.createElement(StyleSheetManager, { sheet: styledComponentsStyleSheet.instance }, children);
}

// src/design.system/theme.provider/theme.provider.tsx
import { ThemeProvider } from "styled-components";
var ThemeProviderWrapper = ({
  children
}) => {
  return /* @__PURE__ */ React62.createElement(ThemeProvider, { theme: palette_default }, /* @__PURE__ */ React62.createElement(StyledComponentsRegistry, null, children));
};

// src/design.system/steps/steps.tsx
import React65 from "react";

// src/design.system/steps/step.item.tsx
import React64 from "react";

// src/design.system/steps/steps.styled.tsx
import styled29 from "styled-components";
var StepsContainer = styled29.div`
  display: flex;
`;
var StepItemWrapper = styled29.div`
  display: flex;
  align-items: center;
`;
var FloatingBoxTextWrapper = styled29.div`
  opacity: ${({ disabled }) => disabled ? "0.4" : "1"};
`;
var StepItemTextWrapper = styled29(FloatingBoxTextWrapper)`
  margin: 0 8px;
`;
var StepItemBorder = styled29.div`
  width: 54px;
  height: 1px;
  background-color: #8b92a5;
  margin-top: 2px;
  margin-right: 8px;
`;

// src/assets/icons/checked.svg
import * as React63 from "react";
var SvgChecked = (props) => /* @__PURE__ */ React63.createElement("svg", { width: 20, height: 14, viewBox: "0 0 20 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React63.createElement("path", { d: "M19.1767 1.88786L7.48781 13.675C7.386 13.778 7.26503 13.8597 7.13183 13.9155C6.99863 13.9713 6.85583 14 6.7116 14C6.56737 14 6.42456 13.9713 6.29136 13.9155C6.15816 13.8597 6.03719 13.778 5.93539 13.675L0.821518 8.51812C0.719584 8.41532 0.638726 8.29329 0.58356 8.15899C0.528394 8.02469 0.5 7.88074 0.5 7.73538C0.5 7.59001 0.528394 7.44606 0.58356 7.31176C0.638726 7.17746 0.719584 7.05543 0.821518 6.95264C0.923451 6.84985 1.04446 6.76831 1.17765 6.71268C1.31083 6.65705 1.45357 6.62842 1.59773 6.62842C1.74189 6.62842 1.88463 6.65705 2.01781 6.71268C2.151 6.76831 2.27201 6.84985 2.37394 6.95264L6.71251 11.3277L17.6261 0.324221C17.8319 0.116626 18.1111 0 18.4023 0C18.6934 0 18.9726 0.116626 19.1785 0.324221C19.3843 0.531816 19.5 0.813376 19.5 1.10696C19.5 1.40054 19.3843 1.6821 19.1785 1.8897L19.1767 1.88786Z", fill: "white" }));
var checked_default = SvgChecked;

// src/design.system/steps/step.item.tsx
function StepItem({
  title,
  index,
  status,
  isLast
}) {
  return /* @__PURE__ */ React64.createElement(StepItemWrapper, null, /* @__PURE__ */ React64.createElement(FloatBox, null, status === "done" /* Done */ ? /* @__PURE__ */ React64.createElement(checked_default, null) : /* @__PURE__ */ React64.createElement(FloatingBoxTextWrapper, { disabled: status !== "active" /* Active */ }, /* @__PURE__ */ React64.createElement(Text, { weight: 700 }, index))), /* @__PURE__ */ React64.createElement(StepItemTextWrapper, { disabled: status !== "active" /* Active */ }, /* @__PURE__ */ React64.createElement(Text, { weight: 600 }, title)), !isLast && /* @__PURE__ */ React64.createElement(StepItemBorder, null));
}

// src/design.system/steps/steps.tsx
function Steps({ data }) {
  function renderSteps() {
    return data?.map(({ title, status }, index) => /* @__PURE__ */ React65.createElement(
      StepItem,
      {
        key: `${index}_${title}`,
        title,
        status,
        index: index + 1,
        isLast: index + 1 === data.length
      }
    ));
  }
  return /* @__PURE__ */ React65.createElement(StepsContainer, null, renderSteps());
}

// src/design.system/divider/divider.tsx
import React66 from "react";
import styled30 from "styled-components";
var DividerContainer = styled30.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 23px;
  margin: ${({ margin }) => margin};
`;
var DividerLine = styled30.div`
  width: 100%;
  border-top: 1px solid #8b92a5;
`;
function Divider({
  margin = "32px 0",
  label = "or"
}) {
  return /* @__PURE__ */ React66.createElement(DividerContainer, { margin }, /* @__PURE__ */ React66.createElement(DividerLine, null), /* @__PURE__ */ React66.createElement(Text, { size: 14 }, label), /* @__PURE__ */ React66.createElement(DividerLine, null));
}

// src/design.system/note/note.tsx
import React67, { useEffect as useEffect9 } from "react";
import styled31 from "styled-components";
var NoteContainer = styled31.div`
  padding: 16px;
  display: flex;
  justify-content: flex-start !important;
  border: 1px solid ${({ theme: theme2 }) => theme2.colors.dark_blue};
  border-radius: 12px;
`;
var TextContainer = styled31.div`
  line-height: 1.6;
  code {
    background-color: ${({ theme: theme2 }) => theme2.colors.dark_blue};
    padding: 2px 4px;
    border-radius: 6px;
  }
`;
function Note({ text: text2, code }) {
  useEffect9(() => {
    buildNote();
  }, []);
  function buildNote() {
    let value = text2;
    if (code) {
      code.forEach((c, index) => {
        value = value.replace(`$code${index}`, `<code>${c}</code>`);
      });
    }
    return /* @__PURE__ */ React67.createElement(
      TextContainer,
      {
        dangerouslySetInnerHTML: {
          __html: `<p><strong>Note: </strong>${value}</p>`
        }
      }
    );
  }
  return /* @__PURE__ */ React67.createElement(NoteContainer, null, /* @__PURE__ */ React67.createElement(Text, { size: 14 }, buildNote()));
}

// src/design.system/segmented-controls/index.tsx
import React68 from "react";
import styled32 from "styled-components";
var SegmentedControlsWrapper = styled32.div`
  display: inline-flex;
  justify-content: space-between;
  border-radius: 10px;
  margin: auto;
  overflow: hidden;
  position: relative;
`;
var SegmentedControlsOption = styled32.div`
  color: ${({ theme: theme2 }) => theme2.colors.white};
  padding: 8px 12px;
  position: relative;
  text-align: center;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  z-index: 1;
  border: ${({ theme: theme2 }) => `1px solid  ${theme2.colors.secondary}`};
  background-color: ${({ theme: theme2 }) => theme2.colors.dark};
  filter: brightness(50%);
  &.active {
    filter: brightness(100%);
  }
  &:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-left: 16px;
  }
  &:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-right: 16px;
  }
  label {
    font-family: ${({ theme: theme2 }) => theme2.font_family.primary};
  }
`;
var SegmentedControlsInput = styled32.input`
  opacity: 0;
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
  cursor: pointer;
  height: 100%;
`;
function SegmentedControls({
  options,
  selected,
  onChange,
  title
}) {
  return /* @__PURE__ */ React68.createElement("div", null, title && /* @__PURE__ */ React68.createElement(Text, { size: 14, style: { marginBottom: 10 } }, title), /* @__PURE__ */ React68.createElement(SegmentedControlsWrapper, null, options?.map((option) => /* @__PURE__ */ React68.createElement(
    SegmentedControlsOption,
    {
      key: option.id,
      className: `${option.id === selected ? "active" : ""}`
    },
    /* @__PURE__ */ React68.createElement(folders_default, null),
    /* @__PURE__ */ React68.createElement(
      SegmentedControlsInput,
      {
        type: "radio",
        value: option.id,
        name: option.label,
        onChange: () => onChange(option.id),
        checked: option.id === selected
      }
    ),
    /* @__PURE__ */ React68.createElement(Text, null, option.label)
  ))));
}

// src/design.system/multi-input/index.tsx
import React69, { useState as useState11 } from "react";
import styled33 from "styled-components";
var MultiInput = ({
  initialList = [],
  onListChange,
  placeholder = "Add item to list",
  title,
  tooltip
}) => {
  const [inputValue, setInputValue] = useState11("");
  const [list, setList] = useState11(initialList);
  const handleInputChange = (e) => {
    setInputValue(e);
  };
  const handleAddToList = () => {
    if (inputValue.trim() !== "") {
      const newList = [...list, inputValue];
      setList(newList);
      setInputValue("");
      onListChange && onListChange(newList);
    }
  };
  const handleRemoveFromList = (indexToRemove) => {
    const newList = list.filter((_, index) => index !== indexToRemove);
    setList(newList);
    onListChange && onListChange(newList);
  };
  return /* @__PURE__ */ React69.createElement(React69.Fragment, null, title && /* @__PURE__ */ React69.createElement(TitleWrapper2, null, /* @__PURE__ */ React69.createElement(Tooltip, { text: tooltip || "" }, /* @__PURE__ */ React69.createElement(Text, { size: 14, weight: 600 }, title))), /* @__PURE__ */ React69.createElement(Container, null, /* @__PURE__ */ React69.createElement(ListContainer, null, list.map((item, index) => /* @__PURE__ */ React69.createElement(ListItem, { key: index, onClick: () => handleRemoveFromList(index) }, /* @__PURE__ */ React69.createElement(Text, { size: 12, color: palette_default.text.dark_button }, item), /* @__PURE__ */ React69.createElement(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 16 16",
      fill: "#0e1c28",
      xmlns: "http://www.w3.org/2000/svg"
    },
    /* @__PURE__ */ React69.createElement(
      "path",
      {
        d: "M12.8535 12.146C12.9 12.1925 12.9368 12.2476 12.962 12.3083C12.9871 12.369 13.0001 12.4341 13.0001 12.4998C13.0001 12.5655 12.9871 12.6305 12.962 12.6912C12.9368 12.7519 12.9 12.8071 12.8535 12.8535C12.8071 12.9 12.7519 12.9368 12.6912 12.962C12.6305 12.9871 12.5655 13.0001 12.4998 13.0001C12.4341 13.0001 12.369 12.9871 12.3083 12.962C12.2476 12.9368 12.1925 12.9 12.146 12.8535L7.99979 8.70666L3.85354 12.8535C3.75972 12.9474 3.63247 13.0001 3.49979 13.0001C3.36711 13.0001 3.23986 12.9474 3.14604 12.8535C3.05222 12.7597 2.99951 12.6325 2.99951 12.4998C2.99951 12.3671 3.05222 12.2399 3.14604 12.146L7.29291 7.99979L3.14604 3.85354C3.05222 3.75972 2.99951 3.63247 2.99951 3.49979C2.99951 3.36711 3.05222 3.23986 3.14604 3.14604C3.23986 3.05222 3.36711 2.99951 3.49979 2.99951C3.63247 2.99951 3.75972 3.05222 3.85354 3.14604L7.99979 7.29291L12.146 3.14604C12.2399 3.05222 12.3671 2.99951 12.4998 2.99951C12.6325 2.99951 12.7597 3.05222 12.8535 3.14604C12.9474 3.23986 13.0001 3.36711 13.0001 3.49979C13.0001 3.63247 12.9474 3.75972 12.8535 3.85354L8.70666 7.99979L12.8535 12.146Z",
        fill: "#0e1c28"
      }
    )
  )))), /* @__PURE__ */ React69.createElement(InputContainer, null, /* @__PURE__ */ React69.createElement(
    Input2,
    {
      style: { width: "100%" },
      value: inputValue,
      placeholder,
      onChange: (e) => handleInputChange(e)
    }
  ), /* @__PURE__ */ React69.createElement(Button2, { onClick: handleAddToList, style: { marginLeft: 10 } }, /* @__PURE__ */ React69.createElement(Text, { size: 14, weight: 600, color: palette_default.text.dark_button }, "Add")))));
};
var Container = styled33.div`
  width: 100%;
`;
var ListContainer = styled33.div`
  display: flex;
  width: 110%;
  flex-wrap: wrap;
`;
var ListItem = styled33.div`
  cursor: pointer;
  padding: 2px 8px;
  margin: 3px;
  border-radius: 5px;
  background: ${palette_default.colors.light_grey};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  min-height: 30px;
`;
var InputContainer = styled33.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 37px;
`;
var Input2 = styled33(Input)`
  width: 100%;
`;
var Button2 = styled33(Button)`
  margin-left: 10px;
`;
var TitleWrapper2 = styled33.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

// src/design.system/key-value-input/index.tsx
import React70, { useState as useState12 } from "react";
import styled34 from "styled-components";
var Container2 = styled34.div`
  width: 100%;
`;
var TitleWrapper3 = styled34.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;
var Table = styled34.table`
  border: solid 1px ${palette_default.text.grey};
  text-align: center;
  border-spacing: 0;
  border-radius: 8px;
  width: 100%;
`;
var Th = styled34.th`
  padding: 4px;
`;
var Td = styled34.td`
  padding: 8px 0;

  border-top: solid 1px ${palette_default.text.grey};
  border-right: ${({ right }) => right ? `solid 1px ${palette_default.text.grey}` : "none"};
  border-left: ${({ left }) => left ? `solid 1px ${palette_default.text.grey}` : "none"};
`;
var Input3 = styled34.input`
  background: transparent;
  border: none;
  width: 94%;

  outline: none;
  color: ${palette_default.text.white};
`;
var AddRowButton = styled34.td`
  text-align: center;
  border-top: solid 1px ${palette_default.text.grey};
  padding: 4px;
  cursor: pointer;
`;
var KeyValueTable = ({
  keyValues,
  setKeyValues,
  title,
  titleKey,
  titleValue,
  titleButton,
  tooltip,
  required
}) => {
  const [nextId, setNextId] = useState12(1);
  const addRow = () => {
    const newKeyValue = {
      id: nextId,
      key: "",
      value: ""
    };
    setKeyValues([...keyValues, newKeyValue]);
    setNextId(nextId + 1);
  };
  const deleteRow = (id) => {
    const value = keyValues.filter((kv) => kv.id !== id);
    setKeyValues(value);
  };
  const updateKey = (id, newKey) => {
    const updatedKeyValues = keyValues.map(
      (kv) => kv.id === id ? { ...kv, key: newKey } : kv
    );
    setKeyValues(updatedKeyValues);
  };
  const updateValue = (id, newValue) => {
    const updatedKeyValues = keyValues.map(
      (kv) => kv.id === id ? { ...kv, value: newValue } : kv
    );
    setKeyValues(updatedKeyValues);
  };
  return /* @__PURE__ */ React70.createElement(Container2, null, title && /* @__PURE__ */ React70.createElement(TitleWrapper3, null, /* @__PURE__ */ React70.createElement(Tooltip, { text: tooltip || "" }, /* @__PURE__ */ React70.createElement("div", { style: { display: "flex", gap: 4 } }, /* @__PURE__ */ React70.createElement(Text, { size: 14, weight: 600 }, title), required && /* @__PURE__ */ React70.createElement(Text, { size: 14, weight: 600 }, "*")))), /* @__PURE__ */ React70.createElement(Table, null, /* @__PURE__ */ React70.createElement("thead", null, /* @__PURE__ */ React70.createElement("tr", null, /* @__PURE__ */ React70.createElement(Th, null, /* @__PURE__ */ React70.createElement(
    Text,
    {
      color: palette_default.text.grey,
      size: 14,
      style: { display: "flex" },
      weight: 300
    },
    titleKey || "Key"
  )), /* @__PURE__ */ React70.createElement(Th, null, /* @__PURE__ */ React70.createElement(
    Text,
    {
      color: palette_default.text.grey,
      size: 14,
      style: { display: "flex" },
      weight: 300
    },
    titleValue || "Value"
  )))), /* @__PURE__ */ React70.createElement("tbody", null, keyValues.map((kv) => /* @__PURE__ */ React70.createElement("tr", { key: kv.id }, /* @__PURE__ */ React70.createElement(Td, { right: true }, /* @__PURE__ */ React70.createElement(
    Input3,
    {
      type: "text",
      value: kv.key,
      onChange: (e) => updateKey(kv.id, e.target.value)
    }
  )), /* @__PURE__ */ React70.createElement(Td, null, /* @__PURE__ */ React70.createElement(
    Input3,
    {
      type: "text",
      value: kv.value,
      onChange: (e) => updateValue(kv.id, e.target.value)
    }
  )), /* @__PURE__ */ React70.createElement(
    Td,
    {
      style: { cursor: "pointer" },
      left: true,
      onClick: () => deleteRow(kv.id)
    },
    /* @__PURE__ */ React70.createElement(trash_default, null)
  )))), /* @__PURE__ */ React70.createElement("tfoot", null, /* @__PURE__ */ React70.createElement("tr", null, /* @__PURE__ */ React70.createElement(AddRowButton, { onClick: addRow, colSpan: 3 }, /* @__PURE__ */ React70.createElement(Text, { weight: 400, size: 14, color: palette_default.colors.torquiz_light }, titleButton || "Add Row"))))));
};

// src/design.system/text.area/index.tsx
import React71 from "react";
import styled35 from "styled-components";
var StyledTextArea = styled35.textarea`
  width: 100%;
  padding: 8px 12px;
  border-radius: 8px;
  box-sizing: border-box;
  resize: vertical;

  outline: none;
  color: ${({ theme: theme2 }) => theme2.text.white};
  font-family: ${palette_default.font_family.primary};
  background-color: ${({ theme: theme2 }) => theme2.colors.light_dark};
  border: ${({ theme: theme2, active }) => `1px solid ${active ? theme2.text.grey : theme2.colors.blue_grey}`};
  &:hover {
    border: ${({ theme: theme2 }) => `solid 1px ${theme2.text.grey}`};
  }
`;
var LabelWrapper3 = styled35.div`
  margin-bottom: 8px;
  text-align: start;
`;
var TextArea = ({
  placeholder,
  value,
  onChange,
  rows = 4,
  cols = 50,
  tooltip,
  label,
  required
}) => {
  return /* @__PURE__ */ React71.createElement(React71.Fragment, null, label && /* @__PURE__ */ React71.createElement(LabelWrapper3, null, /* @__PURE__ */ React71.createElement(Tooltip, { text: tooltip || "" }, /* @__PURE__ */ React71.createElement("div", { style: { display: "flex", gap: 4 } }, /* @__PURE__ */ React71.createElement(Text, { size: 14, weight: 600 }, label), required && /* @__PURE__ */ React71.createElement(Text, { size: 14, weight: 600 }, "*")))), /* @__PURE__ */ React71.createElement(
    StyledTextArea,
    {
      placeholder,
      value,
      onChange,
      rows,
      cols,
      active: !!value
    }
  ));
};

// src/design.system/multi-input/multi.input.table.tsx
import React72 from "react";
import styled36 from "styled-components";
var Container3 = styled36.div`
  width: 100%;
`;
var TitleWrapper4 = styled36.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;
var Table2 = styled36.table`
  border: solid 1px ${palette_default.text.grey};
  text-align: center;
  border-spacing: 0;
  border-radius: 8px;
  width: 100%;
`;
var Th2 = styled36.th`
  padding: 4px;
`;
var Td2 = styled36.td`
  padding: 8px 0;

  border-bottom: solid 1px ${palette_default.text.grey};
  border-right: ${({ right }) => right ? `solid 1px ${palette_default.text.grey}` : "none"};
  border-left: ${({ left }) => left ? `solid 1px ${palette_default.text.grey}` : "none"};
`;
var Input4 = styled36.input`
  background: transparent;
  border: none;
  width: 94%;

  outline: none;
  color: ${palette_default.text.white};
`;
var AddRowButton2 = styled36.td`
  text-align: center;
  padding: 4px;
  cursor: pointer;
`;
var MultiInputTable = ({
  values,
  title,
  tooltip,
  onValuesChange,
  required,
  placeholder
}) => {
  const addRow = () => {
    onValuesChange([...values, ""]);
  };
  const deleteRow = (index) => {
    const updatedValues = values.filter((_, i) => i !== index);
    onValuesChange(updatedValues);
  };
  const updateValue = (index, newValue) => {
    const updatedValues = values.map(
      (value, i) => i === index ? newValue : value
    );
    onValuesChange(updatedValues);
  };
  return /* @__PURE__ */ React72.createElement(Container3, null, title && /* @__PURE__ */ React72.createElement(TitleWrapper4, null, /* @__PURE__ */ React72.createElement(Tooltip, { text: tooltip || "" }, /* @__PURE__ */ React72.createElement("div", { style: { display: "flex", gap: 4 } }, /* @__PURE__ */ React72.createElement(Text, { size: 14, weight: 600 }, title), required && /* @__PURE__ */ React72.createElement(Text, { size: 14, weight: 600 }, "*")))), /* @__PURE__ */ React72.createElement(Table2, null, /* @__PURE__ */ React72.createElement("tbody", null, values.map((value, index) => /* @__PURE__ */ React72.createElement("tr", { key: index }, /* @__PURE__ */ React72.createElement(Td2, { right: true }, /* @__PURE__ */ React72.createElement(
    Input4,
    {
      type: "text",
      value,
      onChange: (e) => updateValue(index, e.target.value),
      placeholder: index === 0 ? placeholder : ""
    }
  )), /* @__PURE__ */ React72.createElement(
    Td2,
    {
      onClick: () => deleteRow(index),
      style: { cursor: "pointer" }
    },
    /* @__PURE__ */ React72.createElement(trash_default, null)
  )))), /* @__PURE__ */ React72.createElement("tfoot", null, /* @__PURE__ */ React72.createElement("tr", null, /* @__PURE__ */ React72.createElement(AddRowButton2, { onClick: addRow, colSpan: 2 }, /* @__PURE__ */ React72.createElement(Text, { weight: 400, size: 14, color: palette_default.colors.torquiz_light }, "Add Row"))))));
};

// src/design.system/action.group/index.tsx
import React74 from "react";

// src/design.system/action.item/index.tsx
import React73, { useRef as useRef4, useState as useState14 } from "react";
import styled37 from "styled-components";
var Label = styled37.label`
  cursor: pointer;
  display: flex;
  gap: 4px;
  p {
    color: ${({ theme: theme2 }) => theme2.colors.light_grey};
    &:hover {
      color: ${({ theme: theme2 }) => theme2.colors.white};
    }
  }
`;
var Popup = styled37.div`
  display: ${(props) => props.isOpen ? "block" : "none"};
  position: absolute;
  right: 0px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  flex-direction: column;
  border-radius: 8px;
  border: ${({ theme: theme2 }) => `1px solid ${theme2.colors.blue_grey}`};
  background: ${({ theme: theme2 }) => theme2.colors.dark};
  margin-top: 5px;
`;
var PopupItem = styled37.div`
  display: flex;
  padding: 7px 12px;
  gap: 4px;
  border-top: ${({ theme: theme2 }) => `1px solid ${theme2.colors.blue_grey}`};
  align-items: center;
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  pointer-events: ${({ disabled }) => disabled ? "none" : "auto"};
  cursor: pointer;
  p {
    cursor: pointer !important;
  }

  &:hover {
    background: ${({ theme: theme2 }) => theme2.colors.light_dark};
  }
`;
var ActionItem = ({
  label,
  items,
  subTitle
}) => {
  const [isOpen, setIsOpen] = useState14(false);
  const ref = useRef4(null);
  useOnClickOutside(ref, () => setIsOpen(false));
  return /* @__PURE__ */ React73.createElement("div", { ref, style: { position: "relative" } }, /* @__PURE__ */ React73.createElement(Label, { onClick: () => setIsOpen(!isOpen) }, /* @__PURE__ */ React73.createElement(Text, { size: 12, weight: 600 }, label), /* @__PURE__ */ React73.createElement(expand_arrow_default, null)), /* @__PURE__ */ React73.createElement(Popup, { isOpen }, /* @__PURE__ */ React73.createElement("div", { style: { padding: 12, width: 120 } }, /* @__PURE__ */ React73.createElement(Text, { size: 12, weight: 600 }, subTitle)), items.map((item, index) => /* @__PURE__ */ React73.createElement(
    PopupItem,
    {
      key: index,
      onClick: item.onClick,
      disabled: !!item.disabled
    },
    item.selected ? /* @__PURE__ */ React73.createElement(check_default, null) : /* @__PURE__ */ React73.createElement("div", { style: { width: 10 } }),
    /* @__PURE__ */ React73.createElement(Text, { size: 12, weight: 600 }, item.label)
  ))));
};

// src/design.system/action.group/index.tsx
var ActionsGroup = ({ actionGroups }) => {
  return /* @__PURE__ */ React74.createElement(React74.Fragment, null, actionGroups.map(
    (group, index) => group.condition && /* @__PURE__ */ React74.createElement(ActionItem, { key: index, ...group })
  ));
};

// src/design.system/pagination/index.tsx
import React75 from "react";
import styled38 from "styled-components";
var PaginationContainer = styled38.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  gap: 2px;
`;
var PageButton = styled38.button`
  background-color: ${(props) => props.isCurrentPage ? palette_default.colors.blue_grey : "transparent"};
  color: ${(props) => props.isDisabled ? palette_default.text.grey : palette_default.text.white};
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;

  &:disabled {
    cursor: default;
  }

  &:hover {
    background-color: ${palette_default.colors.blue_grey};
  }
`;
var Pagination = ({
  total,
  itemsPerPage,
  currentPage,
  onPageChange
}) => {
  const pageCount = Math.ceil(total / itemsPerPage);
  return /* @__PURE__ */ React75.createElement(PaginationContainer, null, /* @__PURE__ */ React75.createElement(
    PageButton,
    {
      onClick: () => onPageChange(currentPage - 1),
      disabled: currentPage === 1,
      isDisabled: currentPage === 1
    },
    /* @__PURE__ */ React75.createElement(expand_arrow_default, { style: { transform: "rotate(90deg)" } }),
    "Previous"
  ), new Array(pageCount).fill(0).map((_, index) => /* @__PURE__ */ React75.createElement(
    PageButton,
    {
      key: index,
      onClick: () => onPageChange(index + 1),
      isCurrentPage: currentPage === index + 1
    },
    index + 1
  )), /* @__PURE__ */ React75.createElement(
    PageButton,
    {
      onClick: () => onPageChange(currentPage + 1),
      disabled: currentPage === pageCount,
      isDisabled: currentPage === pageCount
    },
    "Next",
    /* @__PURE__ */ React75.createElement(expand_arrow_default, { style: { transform: "rotate(-90deg)" } })
  ));
};

// src/design.system/table/index.tsx
import styled39 from "styled-components";
import React76, { useState as useState15 } from "react";
var StyledTable = styled39.table`
  width: 100%;
  background-color: ${palette_default.colors.dark};
  border: 1px solid ${palette_default.colors.blue_grey};
  border-radius: 6px;
  border-collapse: separate;
  border-spacing: 0;
`;
var StyledTbody = styled39.tbody``;
var Table3 = ({
  data,
  onPaginate,
  renderTableRows,
  renderTableHeader,
  renderEmptyResult
}) => {
  const [currentPage, setCurrentPage] = useState15(1);
  const [itemsPerPage, setItemsPerPage] = useState15(10);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (onPaginate) {
      onPaginate(pageNumber);
    }
  };
  return /* @__PURE__ */ React76.createElement(React76.Fragment, null, /* @__PURE__ */ React76.createElement(StyledTable, null, renderTableHeader(), /* @__PURE__ */ React76.createElement(StyledTbody, null, currentItems.map((item, index) => renderTableRows(item, index)))), data.length === 0 ? renderEmptyResult() : data.length > 10 ? /* @__PURE__ */ React76.createElement(
    Pagination,
    {
      total: data.length,
      itemsPerPage,
      currentPage,
      onPageChange: handlePageChange
    }
  ) : null);
};

// src/design.system/yml.editor/index.tsx
import React77, { useState as useState16 } from "react";
import YamlEditor from "@focus-reactive/react-yaml";
import styled40 from "styled-components";
var Container4 = styled40.div`
  position: relative;
  background-color: ${palette_default.colors.blue_grey};
  border-radius: 8px;
  padding: 4px;

  div {
    color: #f5b175;
  }
  .ͼb {
    color: #64a8fd;
  }
  .ͼm {
    color: ${palette_default.colors.white};
  }
  .ͼd {
    color: #f5b175;
  }
  .ͼc {
    color: #f5b175;
  }
  .cm-gutters {
    display: none;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`;
var EditorOverlay = styled40.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10; // Ensure this is higher than the editor's z-index
`;
var CopyIconWrapper2 = styled40.div`
  background-color: ${palette_default.colors.dark};
  z-index: 999;
  border-radius: 4px;
  padding: 4px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: all;
`;
var YMLEditor = ({ data }) => {
  const [isCopied, setIsCopied] = useState16(false);
  const handleChange = () => {
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2)).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3e3);
    }).catch((err) => console.error("Error copying YAML to clipboard: ", err));
  };
  return /* @__PURE__ */ React77.createElement(React77.Fragment, null, /* @__PURE__ */ React77.createElement(Container4, null, /* @__PURE__ */ React77.createElement(CopyIconWrapper2, { onClick: handleCopy }, isCopied ? /* @__PURE__ */ React77.createElement(copied_default, { style: { width: 18, height: 18 } }) : /* @__PURE__ */ React77.createElement(copy_default, { style: { width: 18, height: 18 } })), /* @__PURE__ */ React77.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React77.createElement(
    YamlEditor,
    {
      key: JSON.stringify(data),
      json: data,
      onChange: handleChange
    }
  ), /* @__PURE__ */ React77.createElement(EditorOverlay, null))));
};

// src/design.system/data.flow/builder.ts
var sources = [
  {
    name: "adservice",
    kind: "Deployment",
    namespace: "default",
    languages: [
      {
        container_name: "server",
        language: "java"
      }
    ]
  },
  {
    name: "cartservice",
    kind: "Deployment",
    namespace: "default",
    languages: [
      {
        container_name: "server",
        language: "dotnet"
      }
    ]
  },
  {
    name: "checkoutservice",
    kind: "Deployment",
    namespace: "default",
    languages: [
      {
        container_name: "server",
        language: "go"
      }
    ]
  },
  {
    name: "coupon",
    kind: "Deployment",
    namespace: "default",
    languages: [
      {
        container_name: "coupon",
        language: "javascript"
      }
    ]
  }
];
var destinations = [
  {
    id: "odigos.io.dest.elasticsearch-6qklw",
    name: "Elasticsearch",
    type: "elasticsearch",
    signals: {
      traces: true,
      metrics: false,
      logs: true
    },
    fields: {
      ELASTICSEARCH_CA_PEM: "-----BEGIN CERTIFICATE-----\nMIIDIjCCAgqgAwIBAgIRANR/chGx5YexmqgwbVphZR8wDQYJKoZIhvcNAQELBQAw\nGzEZMBcGA1UEAxMQZWxhc3RpY3NlYXJjaC1jYTAeFw0yNDAzMDYxMjUwNTFaFw0y\nNTAzMDYxMjUwNTFaMBsxGTAXBgNVBAMTEGVsYXN0aWNzZWFyY2gtY2EwggEiMA0G\nCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQClNK8WB2C2aRC1xPkT9Vx3t2I8D8vE\nz4/XKi5djhqZx56VclUmnTGwwJSB6t+9eODVGM8HUBeZTw5r5VU3wz5KO34LfX/X\nDgeZf7jRE4JvNti+ufhYeXhX6yWt2y1lisTy89BMZA1/4r6UBamhDZ9zjC7++hNy\n21S+mgul4zrjC1fBfjz8O42jjkamNcq3SoQHn9puWPhsOBOc4SowJMFN6YIRf3Vy\nPvOuG8wP5uCU14dICW7X5M1JqHpcOTW0W7S5JLcVkozrqEQhQ3lc5f4OE0/GYQ5S\np5sesAUyv9Koiipx3gGvip2+E2Rf2nlLNNMYeFDKyRVmbxkOmIy6PVQdAgMBAAGj\nYTBfMA4GA1UdDwEB/wQEAwICpDAdBgNVHSUEFjAUBggrBgEFBQcDAQYIKwYBBQUH\nAwIwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUUh7RgBmgPOCGeP3hFqoVC689\nm4kwDQYJKoZIhvcNAQELBQADggEBAJCpewxuRV0s6EftuHI7Q1PJDYImDv54D1GI\n57nJwdhCZbvJ69m5hjtOAb7ZCerzJQKvN4sEcvcWPMJs15nBNXW+9fF0zN5RjBqU\nV8HA22bw8h+00lGUiozgG4DmFkd0GG35qjhPe9PyirOumiaSi2aGMUiWtkOgAFE2\nDKGLleYFdjDbfQjva/ViUJTo6I7b283foWEqkbaa58ju5QOtjpo09GOmyBXeXHoU\nbLnUqBAALo7FDSdKyMjWRLKSo2rc7jRn98jXzPqRaVuYhEGn+77GnkA5d3ea3fHP\nIrj44yKh8na1xqPEHEvryj9LnKL+yCpQILj5L+jIHVopTmQWyLQ=\n-----END CERTIFICATE-----",
      ELASTICSEARCH_PASSWORD: "Elasticsearch",
      ELASTICSEARCH_URL: "Elasticsearch",
      ELASTICSEARCH_USERNAME: "Elasticsearch",
      ES_LOGS_INDEX: "Elasticsearch",
      ES_TRACES_INDEX: "Elasticsearch"
    },
    destination_type: {
      type: "elasticsearch",
      display_name: "Elasticsearch",
      image_url: "https:/d15jtxgb40qetw.cloudfront.net/elasticsearch.svg",
      supported_signals: {
        traces: {
          supported: true
        },
        metrics: {
          supported: false
        },
        logs: {
          supported: true
        }
      }
    }
  },
  {
    id: "odigos.io.dest.grafanacloudprometheus-2mcbr",
    name: "Prometheus",
    type: "grafanacloudprometheus",
    signals: {
      traces: false,
      metrics: true,
      logs: false
    },
    fields: {
      GRAFANA_CLOUD_PROMETHEUS_PASSWORD: "Prometheus",
      GRAFANA_CLOUD_PROMETHEUS_RW_ENDPOINT: "Prometheus",
      GRAFANA_CLOUD_PROMETHEUS_USERNAME: "Prometheus",
      PROMETHEUS_RESOURCE_ATTRIBUTES_LABELS: '["k8s.container.name","k8s.pod.name","k8s.namespace.name","Prometheus"]',
      PROMETHEUS_RESOURCE_EXTERNAL_LABELS: '{"dsfd":"fdsfs"}'
    },
    destination_type: {
      type: "grafanacloudprometheus",
      display_name: "Grafana Cloud Prometheus",
      image_url: "https:/d15jtxgb40qetw.cloudfront.net/grafana.svg",
      supported_signals: {
        traces: {
          supported: false
        },
        metrics: {
          supported: true
        },
        logs: {
          supported: false
        }
      }
    }
  },
  {
    id: "odigos.io.dest.s3-gk7bn",
    name: "aws",
    type: "s3",
    signals: {
      traces: true,
      metrics: true,
      logs: true
    },
    fields: {
      S3_BUCKET: "aws",
      S3_MARSHALER: "otlp_proto",
      S3_PARTITION: "minute",
      S3_REGION: "aws"
    },
    destination_type: {
      type: "s3",
      display_name: "AWS S3",
      image_url: "https:/d15jtxgb40qetw.cloudfront.net/s3.svg",
      supported_signals: {
        traces: {
          supported: true
        },
        metrics: {
          supported: true
        },
        logs: {
          supported: true
        }
      }
    }
  }
];
var action = [
  {
    id: "aci-f6c9f",
    type: "AddClusterInfo",
    spec: {
      actionName: "This is tetst test Cluster Attributes",
      notes: "Actions are a way to modify the OpenTelemetry data recorded by Odigos Sources, before it is exported to your Odigos Destinations.",
      signals: ["METRICS", "TRACES"],
      clusterAttributes: [
        {
          attributeName: "Attributes",
          attributeStringValue: "Attributes"
        }
      ]
    }
  },
  {
    id: "aci-hfgcb",
    type: "DeleteAttribute",
    spec: {
      actionName: "Link",
      notes: "Link to docs",
      signals: ["LOGS", "METRICS", "TRACES"],
      clusterAttributes: [
        {
          attributeName: "sadsad",
          attributeStringValue: "sadsa"
        },
        {
          attributeName: "asdsa",
          attributeStringValue: "asdasd"
        }
      ]
    }
  },
  {
    id: "aci-r67mp",
    type: "RenameAttribute",
    spec: {
      actionName: "Initialize Initialize",
      notes: "This is the initialization phase of the cluster.",
      signals: ["LOGS", "METRICS", "TRACES"],
      clusterAttributes: [
        {
          attributeName: "region",
          attributeStringValue: "us-east-1"
        },
        {
          attributeName: "instanceType",
          attributeStringValue: "t2.micro"
        },
        {
          attributeName: "availabilityZones",
          attributeStringValue: "3"
        }
      ]
    }
  }
];
var buildFlowNodesAndEdges = (sources2, destinations2, actions) => {
  let nodes2 = [], edges2 = [];
  const centerNodeId = "center-1";
  const xOffsetNamespace = 100;
  const destinations_length = destinations2.length;
  let middle_index;
  if (destinations_length % 2 == 1) {
    middle_index = Math.floor(destinations_length / 2);
  } else {
    middle_index = destinations_length / 2 - 1;
  }
  const desired_y_position = 248;
  const destinationyOffset = desired_y_position - middle_index * 100;
  const sources_length = sources2.length;
  let middle_index_sources;
  if (sources_length % 2 == 1) {
    middle_index_sources = Math.floor(sources_length / 2);
  } else {
    middle_index_sources = sources_length / 2 - 1;
  }
  const sourceyOffset = desired_y_position - middle_index_sources * 100;
  const centerXPossition = actions?.length > 0 ? actions?.length * 150 + 400 : 450;
  nodes2.push({
    id: centerNodeId,
    type: "custom",
    position: { x: centerXPossition, y: 248 },
    data: { label: "Center Node" }
  });
  sources2.forEach((source, index) => {
    let hasError = false;
    if (source?.conditions) {
      hasError = source.conditions.some(
        (condition) => condition.status === "False"
      );
    }
    const namespaceNodeId = `namespace-${index}`;
    nodes2.push({
      id: namespaceNodeId,
      type: "source",
      position: { x: xOffsetNamespace, y: sourceyOffset + index * 100 },
      data: source
    });
    edges2.push({
      id: `e${namespaceNodeId}-${centerNodeId}`,
      source: namespaceNodeId,
      target: actions?.length > 0 ? `action-0` : centerNodeId,
      animated: true,
      style: { stroke: hasError ? "#ff0000" : "#96f3ff8e" },
      data: null
    });
  });
  destinations2.forEach((destination, index) => {
    let isErrored = false;
    if (destination?.conditions) {
      isErrored = destination.conditions.some(
        (condition) => condition.status === "False"
      );
    }
    const destinationNodeId = `destination-${index}`;
    nodes2.push({
      id: destinationNodeId,
      type: "destination",
      position: {
        x: centerXPossition + 400,
        y: destinationyOffset + index * 100
      },
      data: destination
    });
    edges2.push({
      id: `e${centerNodeId}-${destinationNodeId}`,
      source: centerNodeId,
      target: destinationNodeId,
      animated: true,
      style: { stroke: isErrored ? "#ff0000" : "#96f3ff8e" },
      data: null
    });
  });
  actions.forEach((action2, index) => {
    const actionNodeId = `action-${index}`;
    const nextActionNodeId = `action-${index + 1}`;
    nodes2.push({
      id: actionNodeId,
      type: "action",
      position: { x: 420 + index * 125, y: 250 },
      data: action2
    });
    edges2.push({
      id: `e${centerNodeId}-${actionNodeId}`,
      source: actionNodeId,
      target: index + 1 === actions.length ? centerNodeId : nextActionNodeId,
      animated: true,
      style: { stroke: "#96f3ff8e" },
      data: null
    });
  });
  return { nodes: nodes2, edges: edges2 };
};
var { nodes, edges } = buildFlowNodesAndEdges(
  sources,
  destinations,
  action
);
export {
  ActionInput,
  ActionItem,
  ActionsGroup,
  Button,
  Card,
  Checkbox,
  Code,
  DangerZone,
  KeyvalDataFlow as DataFlow,
  Divider,
  DropDown,
  FloatBox,
  ImageComponent as Image,
  Input,
  KeyValueTable,
  Link,
  Loader,
  Modal,
  MultiInput,
  MultiInputTable,
  Note,
  Notification,
  Pagination,
  RadioButton,
  SearchInput,
  SegmentedControls,
  SelectedCounter,
  Steps,
  Switch,
  Table3 as Table,
  Tag,
  Tap,
  Text,
  TextArea,
  ThemeProviderWrapper,
  Tooltip,
  Video,
  YMLEditor,
  buildFlowNodesAndEdges
};
//# sourceMappingURL=index.mjs.map