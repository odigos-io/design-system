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
import React44, { useEffect as useEffect3, useState as useState3 } from "react";

// src/assets/icons/folders.svg
import * as React6 from "react";
var SvgFolders = (props) => /* @__PURE__ */ React6.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", ...props }, /* @__PURE__ */ React6.createElement("path", { opacity: 0.2, d: "M14.5 5V10.5556C14.5 10.6735 14.4532 10.7865 14.3698 10.8698C14.2865 10.9532 14.1735 11 14.0556 11H12.5V7C12.5 6.86739 12.4473 6.74021 12.3536 6.64645C12.2598 6.55268 12.1326 6.5 12 6.5H7.66687C7.55869 6.5 7.45342 6.46491 7.36688 6.4L5.63312 5.1C5.54658 5.03509 5.44131 5 5.33313 5H4V3.5C4 3.36739 4.05268 3.24021 4.14645 3.14645C4.24021 3.05268 4.36739 3 4.5 3H7.33313C7.44131 3 7.54658 3.03509 7.63312 3.1L9.36687 4.4C9.45342 4.46491 9.55869 4.5 9.66687 4.5H14C14.1326 4.5 14.2598 4.55268 14.3536 4.64645C14.4473 4.74021 14.5 4.86739 14.5 5Z", fill: "#96F2FF" }), /* @__PURE__ */ React6.createElement("path", { d: "M14 4H9.66687L7.93313 2.7C7.75978 2.57066 7.54941 2.50054 7.33313 2.5H4.5C4.23478 2.5 3.98043 2.60536 3.79289 2.79289C3.60536 2.98043 3.5 3.23478 3.5 3.5V4.5H2.5C2.23478 4.5 1.98043 4.60536 1.79289 4.79289C1.60536 4.98043 1.5 5.23478 1.5 5.5V12.5C1.5 12.7652 1.60536 13.0196 1.79289 13.2071C1.98043 13.3946 2.23478 13.5 2.5 13.5H12.0556C12.306 13.4997 12.546 13.4001 12.723 13.223C12.9001 13.046 12.9997 12.806 13 12.5556V11.5H14.0556C14.306 11.4997 14.546 11.4001 14.723 11.223C14.9001 11.046 14.9997 10.806 15 10.5556V5C15 4.73478 14.8946 4.48043 14.7071 4.29289C14.5196 4.10536 14.2652 4 14 4ZM12 12.5H2.5V5.5H5.33313L7.06687 6.8C7.24022 6.92934 7.45059 6.99946 7.66687 7H12V12.5ZM14 10.5H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6H7.66687L5.93313 4.7C5.75978 4.57066 5.54941 4.50054 5.33313 4.5H4.5V3.5H7.33313L9.06688 4.8C9.24022 4.92934 9.45059 4.99946 9.66687 5H14V10.5Z", fill: "#96F2FF" }));
var folders_default = SvgFolders;

// src/assets/icons/trash.svg
import * as React7 from "react";
var SvgTrash = (props) => /* @__PURE__ */ React7.createElement("svg", { width: "14px", height: "14px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React7.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ React7.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React7.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ React7.createElement("path", { d: "M20.5001 6H3.5", stroke: "#0EE6F3", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ React7.createElement("path", { d: "M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5", stroke: "#0EE6F3", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ React7.createElement("path", { d: "M9.5 11L10 16", stroke: "#0EE6F3", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ React7.createElement("path", { d: "M14.5 11L14 16", stroke: "#0EE6F3", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ React7.createElement("path", { d: "M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6", stroke: "#0EE6F3", strokeWidth: 1.5 })));
var trash_default = SvgTrash;

// src/assets/icons/check.svg
import * as React8 from "react";
var SvgCheck = (props) => /* @__PURE__ */ React8.createElement("svg", { width: 10, height: 10, viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React8.createElement("g", { clipPath: "url(#clip0_48_7283)" }, /* @__PURE__ */ React8.createElement("path", { d: "M1.5625 5.625L3.75 7.8125L8.75 2.8125", stroke: "#96F2FF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), /* @__PURE__ */ React8.createElement("defs", null, /* @__PURE__ */ React8.createElement("clipPath", { id: "clip0_48_7283" }, /* @__PURE__ */ React8.createElement("rect", { width: 10, height: 10, fill: "white" }))));
var check_default = SvgCheck;

// src/assets/icons/expand-arrow.svg
import * as React9 from "react";
var SvgExpandArrow = (props) => /* @__PURE__ */ React9.createElement("svg", { width: 12, height: 13, viewBox: "0 0 12 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React9.createElement("path", { d: "M10.0155 5.26528L6.26552 9.01528C6.23069 9.05014 6.18934 9.0778 6.14381 9.09667C6.09829 9.11555 6.04949 9.12526 6.00021 9.12526C5.95093 9.12526 5.90213 9.11555 5.85661 9.09667C5.81108 9.0778 5.76972 9.05014 5.7349 9.01528L1.9849 5.26528C1.91453 5.19491 1.875 5.09948 1.875 4.99996C1.875 4.90045 1.91453 4.80502 1.9849 4.73465C2.05526 4.66429 2.1507 4.62476 2.25021 4.62476C2.34972 4.62476 2.44516 4.66429 2.51552 4.73465L6.00021 8.21981L9.4849 4.73465C9.51974 4.69981 9.5611 4.67217 9.60662 4.65332C9.65214 4.63446 9.70094 4.62476 9.75021 4.62476C9.79948 4.62476 9.84827 4.63446 9.8938 4.65332C9.93932 4.67217 9.98068 4.69981 10.0155 4.73465C10.0504 4.76949 10.078 4.81086 10.0969 4.85638C10.1157 4.9019 10.1254 4.95069 10.1254 4.99996C10.1254 5.04924 10.1157 5.09803 10.0969 5.14355C10.078 5.18907 10.0504 5.23044 10.0155 5.26528Z", fill: "#CCD0D2" }));
var expand_arrow_default = SvgExpandArrow;

// src/assets/icons/actions/cluster-attr.svg
import * as React10 from "react";
var SvgClusterAttr = (props) => /* @__PURE__ */ React10.createElement("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React10.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ React10.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React10.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ React10.createElement("path", { d: "M4.97883 9.68508C2.99294 8.89073 2 8.49355 2 8C2 7.50645 2.99294 7.10927 4.97883 6.31492L7.7873 5.19153C9.77318 4.39718 10.7661 4 12 4C13.2339 4 14.2268 4.39718 16.2127 5.19153L19.0212 6.31492C21.0071 7.10927 22 7.50645 22 8C22 8.49355 21.0071 8.89073 19.0212 9.68508L16.2127 10.8085C14.2268 11.6028 13.2339 12 12 12C10.7661 12 9.77318 11.6028 7.7873 10.8085L4.97883 9.68508Z", stroke: "#8b92a6", strokeWidth: 1.5 }), /* @__PURE__ */ React10.createElement("path", { d: "M22 12C22 12 21.0071 12.8907 19.0212 13.6851L16.2127 14.8085C14.2268 15.6028 13.2339 16 12 16C10.7661 16 9.77318 15.6028 7.7873 14.8085L4.97883 13.6851C2.99294 12.8907 2 12 2 12", stroke: "#8b92a6", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ React10.createElement("path", { d: "M22 16C22 16 21.0071 16.8907 19.0212 17.6851L16.2127 18.8085C14.2268 19.6028 13.2339 20 12 20C10.7661 20 9.77318 19.6028 7.7873 18.8085L4.97883 17.6851C2.99294 16.8907 2 16 2 16", stroke: "#8b92a6", strokeWidth: 1.5, strokeLinecap: "round" })));
var cluster_attr_default = SvgClusterAttr;

// src/assets/icons/actions/delete-attr.svg
import * as React11 from "react";
var SvgDeleteAttr = (props) => /* @__PURE__ */ React11.createElement("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React11.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ React11.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React11.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ React11.createElement("path", { d: "M7 9.5L12 14.5M12 9.5L7 14.5M19.4922 13.9546L16.5608 17.7546C16.2082 18.2115 16.032 18.44 15.8107 18.6047C15.6146 18.7505 15.3935 18.8592 15.1583 18.9253C14.8928 19 14.6042 19 14.0271 19H6.2C5.07989 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.07989 5 6.2 5H14.0271C14.6042 5 14.8928 5 15.1583 5.07467C15.3935 5.14081 15.6146 5.2495 15.8107 5.39534C16.032 5.55998 16.2082 5.78846 16.5608 6.24543L19.4922 10.0454C20.0318 10.7449 20.3016 11.0947 20.4054 11.4804C20.4969 11.8207 20.4969 12.1793 20.4054 12.5196C20.3016 12.9053 20.0318 13.2551 19.4922 13.9546Z", stroke: "#8b92a7", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })));
var delete_attr_default = SvgDeleteAttr;

// src/assets/icons/actions/rename-attr.svg
import * as React12 from "react";
var SvgRenameAttr = (props) => /* @__PURE__ */ React12.createElement("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React12.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ React12.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React12.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ React12.createElement("path", { d: "M20 7H9.00001C6.23858 7 4 9.23857 4 12C4 14.7614 6.23858 17 9 17H16M20 7L17 4M20 7L17 10", stroke: "#8b92a7", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })));
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

// src/assets/icons/monitors/logs-grey.svg
import * as React13 from "react";
var SvgLogsGrey = (props) => /* @__PURE__ */ React13.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React13.createElement("path", { d: "M2 4C2 3.86739 2.05268 3.74021 2.14645 3.64645C2.24021 3.55268 2.36739 3.5 2.5 3.5H13.5C13.6326 3.5 13.7598 3.55268 13.8536 3.64645C13.9473 3.74021 14 3.86739 14 4C14 4.13261 13.9473 4.25979 13.8536 4.35355C13.7598 4.44732 13.6326 4.5 13.5 4.5H2.5C2.36739 4.5 2.24021 4.44732 2.14645 4.35355C2.05268 4.25979 2 4.13261 2 4ZM2.5 7H10.5C10.6326 7 10.7598 6.94732 10.8536 6.85355C10.9473 6.75979 11 6.63261 11 6.5C11 6.36739 10.9473 6.24021 10.8536 6.14645C10.7598 6.05268 10.6326 6 10.5 6H2.5C2.36739 6 2.24021 6.05268 2.14645 6.14645C2.05268 6.24021 2 6.36739 2 6.5C2 6.63261 2.05268 6.75979 2.14645 6.85355C2.24021 6.94732 2.36739 7 2.5 7ZM13.5 8.5H2.5C2.36739 8.5 2.24021 8.55268 2.14645 8.64645C2.05268 8.74021 2 8.86739 2 9C2 9.13261 2.05268 9.25979 2.14645 9.35355C2.24021 9.44732 2.36739 9.5 2.5 9.5H13.5C13.6326 9.5 13.7598 9.44732 13.8536 9.35355C13.9473 9.25979 14 9.13261 14 9C14 8.86739 13.9473 8.74021 13.8536 8.64645C13.7598 8.55268 13.6326 8.5 13.5 8.5ZM10.5 11H2.5C2.36739 11 2.24021 11.0527 2.14645 11.1464C2.05268 11.2402 2 11.3674 2 11.5C2 11.6326 2.05268 11.7598 2.14645 11.8536C2.24021 11.9473 2.36739 12 2.5 12H10.5C10.6326 12 10.7598 11.9473 10.8536 11.8536C10.9473 11.7598 11 11.6326 11 11.5C11 11.3674 10.9473 11.2402 10.8536 11.1464C10.7598 11.0527 10.6326 11 10.5 11Z", fill: "#8B92A5" }));
var logs_grey_default = SvgLogsGrey;

// src/assets/icons/monitors/logs-blue.svg
import * as React14 from "react";
var SvgLogsBlue = (props) => /* @__PURE__ */ React14.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React14.createElement("path", { d: "M2 4C2 3.86739 2.05268 3.74021 2.14645 3.64645C2.24021 3.55268 2.36739 3.5 2.5 3.5H13.5C13.6326 3.5 13.7598 3.55268 13.8536 3.64645C13.9473 3.74021 14 3.86739 14 4C14 4.13261 13.9473 4.25979 13.8536 4.35355C13.7598 4.44732 13.6326 4.5 13.5 4.5H2.5C2.36739 4.5 2.24021 4.44732 2.14645 4.35355C2.05268 4.25979 2 4.13261 2 4ZM2.5 7H10.5C10.6326 7 10.7598 6.94732 10.8536 6.85355C10.9473 6.75979 11 6.63261 11 6.5C11 6.36739 10.9473 6.24021 10.8536 6.14645C10.7598 6.05268 10.6326 6 10.5 6H2.5C2.36739 6 2.24021 6.05268 2.14645 6.14645C2.05268 6.24021 2 6.36739 2 6.5C2 6.63261 2.05268 6.75979 2.14645 6.85355C2.24021 6.94732 2.36739 7 2.5 7ZM13.5 8.5H2.5C2.36739 8.5 2.24021 8.55268 2.14645 8.64645C2.05268 8.74021 2 8.86739 2 9C2 9.13261 2.05268 9.25979 2.14645 9.35355C2.24021 9.44732 2.36739 9.5 2.5 9.5H13.5C13.6326 9.5 13.7598 9.44732 13.8536 9.35355C13.9473 9.25979 14 9.13261 14 9C14 8.86739 13.9473 8.74021 13.8536 8.64645C13.7598 8.55268 13.6326 8.5 13.5 8.5ZM10.5 11H2.5C2.36739 11 2.24021 11.0527 2.14645 11.1464C2.05268 11.2402 2 11.3674 2 11.5C2 11.6326 2.05268 11.7598 2.14645 11.8536C2.24021 11.9473 2.36739 12 2.5 12H10.5C10.6326 12 10.7598 11.9473 10.8536 11.8536C10.9473 11.7598 11 11.6326 11 11.5C11 11.3674 10.9473 11.2402 10.8536 11.1464C10.7598 11.0527 10.6326 11 10.5 11Z", fill: "#96F2FF" }));
var logs_blue_default = SvgLogsBlue;

// src/assets/icons/monitors/chart-line-grey.svg
import * as React15 from "react";
var SvgChartLineGrey = (props) => /* @__PURE__ */ React15.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React15.createElement("path", { d: "M14.5 13C14.5 13.1326 14.4473 13.2598 14.3536 13.3536C14.2598 13.4473 14.1326 13.5 14 13.5H2C1.86739 13.5 1.74021 13.4473 1.64645 13.3536C1.55268 13.2598 1.5 13.1326 1.5 13V3C1.5 2.86739 1.55268 2.74021 1.64645 2.64645C1.74021 2.55268 1.86739 2.5 2 2.5C2.13261 2.5 2.25979 2.55268 2.35355 2.64645C2.44732 2.74021 2.5 2.86739 2.5 3V8.89812L5.67063 6.125C5.7569 6.04947 5.86652 6.0059 5.9811 6.00157C6.09569 5.99725 6.20828 6.03244 6.3 6.10125L9.97563 8.85812L13.6706 5.625C13.7191 5.57704 13.7768 5.5395 13.8403 5.51467C13.9038 5.48985 13.9717 5.47827 14.0398 5.48065C14.1079 5.48303 14.1749 5.49931 14.2365 5.5285C14.2981 5.55769 14.3531 5.59917 14.398 5.65038C14.443 5.7016 14.4771 5.76148 14.4981 5.82633C14.5191 5.89119 14.5266 5.95965 14.5201 6.02752C14.5137 6.09538 14.4935 6.16122 14.4607 6.22097C14.4279 6.28073 14.3832 6.33314 14.3294 6.375L10.3294 9.875C10.2431 9.95053 10.1335 9.9941 10.0189 9.99843C9.90431 10.0028 9.79172 9.96756 9.7 9.89875L6.02437 7.14313L2.5 10.2269V12.5H14C14.1326 12.5 14.2598 12.5527 14.3536 12.6464C14.4473 12.7402 14.5 12.8674 14.5 13Z", fill: "#8B92A5" }));
var chart_line_grey_default = SvgChartLineGrey;

// src/assets/icons/monitors/chart-line-blue.svg
import * as React16 from "react";
var SvgChartLineBlue = (props) => /* @__PURE__ */ React16.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React16.createElement("path", { d: "M14.5 13C14.5 13.1326 14.4473 13.2598 14.3536 13.3536C14.2598 13.4473 14.1326 13.5 14 13.5H2C1.86739 13.5 1.74021 13.4473 1.64645 13.3536C1.55268 13.2598 1.5 13.1326 1.5 13V3C1.5 2.86739 1.55268 2.74021 1.64645 2.64645C1.74021 2.55268 1.86739 2.5 2 2.5C2.13261 2.5 2.25979 2.55268 2.35355 2.64645C2.44732 2.74021 2.5 2.86739 2.5 3V8.89812L5.67063 6.125C5.7569 6.04947 5.86652 6.0059 5.9811 6.00157C6.09569 5.99725 6.20828 6.03244 6.3 6.10125L9.97563 8.85812L13.6706 5.625C13.7191 5.57704 13.7768 5.5395 13.8403 5.51467C13.9038 5.48985 13.9717 5.47827 14.0398 5.48065C14.1079 5.48303 14.1749 5.49931 14.2365 5.5285C14.2981 5.55769 14.3531 5.59917 14.398 5.65038C14.443 5.7016 14.4771 5.76148 14.4981 5.82633C14.5191 5.89119 14.5266 5.95965 14.5201 6.02752C14.5137 6.09538 14.4935 6.16122 14.4607 6.22097C14.4279 6.28073 14.3832 6.33314 14.3294 6.375L10.3294 9.875C10.2431 9.95053 10.1335 9.9941 10.0189 9.99843C9.90431 10.0028 9.79172 9.96756 9.7 9.89875L6.02437 7.14313L2.5 10.2269V12.5H14C14.1326 12.5 14.2598 12.5527 14.3536 12.6464C14.4473 12.7402 14.5 12.8674 14.5 13Z", fill: "#96F2FF" }));
var chart_line_blue_default = SvgChartLineBlue;

// src/assets/icons/monitors/tree-structure-grey.svg
import * as React17 from "react";
var SvgTreeStructureGrey = (props) => /* @__PURE__ */ React17.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React17.createElement("path", { d: "M10.5 7H13.5C13.7652 7 14.0196 6.89464 14.2071 6.70711C14.3946 6.51957 14.5 6.26522 14.5 6V3C14.5 2.73478 14.3946 2.48043 14.2071 2.29289C14.0196 2.10536 13.7652 2 13.5 2H10.5C10.2348 2 9.98043 2.10536 9.79289 2.29289C9.60536 2.48043 9.5 2.73478 9.5 3V4H9C8.46957 4 7.96086 4.21071 7.58579 4.58579C7.21071 4.96086 7 5.46957 7 6V7.5H5V7C5 6.73478 4.89464 6.48043 4.70711 6.29289C4.51957 6.10536 4.26522 6 4 6H2C1.73478 6 1.48043 6.10536 1.29289 6.29289C1.10536 6.48043 1 6.73478 1 7V9C1 9.26522 1.10536 9.51957 1.29289 9.70711C1.48043 9.89464 1.73478 10 2 10H4C4.26522 10 4.51957 9.89464 4.70711 9.70711C4.89464 9.51957 5 9.26522 5 9V8.5H7V10C7 10.5304 7.21071 11.0391 7.58579 11.4142C7.96086 11.7893 8.46957 12 9 12H9.5V13C9.5 13.2652 9.60536 13.5196 9.79289 13.7071C9.98043 13.8946 10.2348 14 10.5 14H13.5C13.7652 14 14.0196 13.8946 14.2071 13.7071C14.3946 13.5196 14.5 13.2652 14.5 13V10C14.5 9.73478 14.3946 9.48043 14.2071 9.29289C14.0196 9.10536 13.7652 9 13.5 9H10.5C10.2348 9 9.98043 9.10536 9.79289 9.29289C9.60536 9.48043 9.5 9.73478 9.5 10V11H9C8.73478 11 8.48043 10.8946 8.29289 10.7071C8.10536 10.5196 8 10.2652 8 10V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H9.5V6C9.5 6.26522 9.60536 6.51957 9.79289 6.70711C9.98043 6.89464 10.2348 7 10.5 7ZM4 9H2V7H4V9ZM10.5 10H13.5V13H10.5V10ZM10.5 3H13.5V6H10.5V3Z", fill: "#8B92A5" }));
var tree_structure_grey_default = SvgTreeStructureGrey;

// src/assets/icons/monitors/tree-structure-blue.svg
import * as React18 from "react";
var SvgTreeStructureBlue = (props) => /* @__PURE__ */ React18.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React18.createElement("path", { d: "M10.5 7H13.5C13.7652 7 14.0196 6.89464 14.2071 6.70711C14.3946 6.51957 14.5 6.26522 14.5 6V3C14.5 2.73478 14.3946 2.48043 14.2071 2.29289C14.0196 2.10536 13.7652 2 13.5 2H10.5C10.2348 2 9.98043 2.10536 9.79289 2.29289C9.60536 2.48043 9.5 2.73478 9.5 3V4H9C8.46957 4 7.96086 4.21071 7.58579 4.58579C7.21071 4.96086 7 5.46957 7 6V7.5H5V7C5 6.73478 4.89464 6.48043 4.70711 6.29289C4.51957 6.10536 4.26522 6 4 6H2C1.73478 6 1.48043 6.10536 1.29289 6.29289C1.10536 6.48043 1 6.73478 1 7V9C1 9.26522 1.10536 9.51957 1.29289 9.70711C1.48043 9.89464 1.73478 10 2 10H4C4.26522 10 4.51957 9.89464 4.70711 9.70711C4.89464 9.51957 5 9.26522 5 9V8.5H7V10C7 10.5304 7.21071 11.0391 7.58579 11.4142C7.96086 11.7893 8.46957 12 9 12H9.5V13C9.5 13.2652 9.60536 13.5196 9.79289 13.7071C9.98043 13.8946 10.2348 14 10.5 14H13.5C13.7652 14 14.0196 13.8946 14.2071 13.7071C14.3946 13.5196 14.5 13.2652 14.5 13V10C14.5 9.73478 14.3946 9.48043 14.2071 9.29289C14.0196 9.10536 13.7652 9 13.5 9H10.5C10.2348 9 9.98043 9.10536 9.79289 9.29289C9.60536 9.48043 9.5 9.73478 9.5 10V11H9C8.73478 11 8.48043 10.8946 8.29289 10.7071C8.10536 10.5196 8 10.2652 8 10V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H9.5V6C9.5 6.26522 9.60536 6.51957 9.79289 6.70711C9.98043 6.89464 10.2348 7 10.5 7ZM4 9H2V7H4V9ZM10.5 10H13.5V13H10.5V10ZM10.5 3H13.5V6H10.5V3Z", fill: "#96F2FF" }));
var tree_structure_blue_default = SvgTreeStructureBlue;

// src/assets/icons/app/arrow-right.svg
import * as React19 from "react";
var SvgArrowRight = (props) => /* @__PURE__ */ React19.createElement("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React19.createElement("path", { d: "M27.7075 16.7076L18.7075 25.7076C18.5199 25.8952 18.2654 26.0006 18 26.0006C17.7346 26.0006 17.4801 25.8952 17.2925 25.7076C17.1049 25.5199 16.9994 25.2654 16.9994 25.0001C16.9994 24.7347 17.1049 24.4802 17.2925 24.2926L24.5863 17.0001H5C4.73478 17.0001 4.48043 16.8947 4.29289 16.7072C4.10536 16.5196 4 16.2653 4 16.0001C4 15.7349 4.10536 15.4805 4.29289 15.293C4.48043 15.1054 4.73478 15.0001 5 15.0001H24.5863L17.2925 7.70757C17.1049 7.51993 16.9994 7.26543 16.9994 7.00007C16.9994 6.7347 17.1049 6.48021 17.2925 6.29257C17.4801 6.10493 17.7346 5.99951 18 5.99951C18.2654 5.99951 18.5199 6.10493 18.7075 6.29257L27.7075 15.2926C27.8005 15.3854 27.8742 15.4957 27.9246 15.6171C27.9749 15.7385 28.0008 15.8687 28.0008 16.0001C28.0008 16.1315 27.9749 16.2616 27.9246 16.383C27.8742 16.5044 27.8005 16.6147 27.7075 16.7076Z", fill: "#0A1824" }));
var arrow_right_default = SvgArrowRight;

// src/assets/icons/app/charge-rect.svg
import * as React20 from "react";
var SvgChargeRect = (props) => /* @__PURE__ */ React20.createElement("svg", { width: 48, height: 48, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React20.createElement("rect", { width: 48, height: 48, rx: 7.5, fill: "url(#paint0_linear_48_4503)" }), /* @__PURE__ */ React20.createElement("rect", { width: 48, height: 48, rx: 7.5, fill: "url(#paint1_radial_48_4503)", fillOpacity: 0.4 }), /* @__PURE__ */ React20.createElement("rect", { x: 0.375, y: 0.375, width: 47.25, height: 47.25, rx: 7.125, stroke: "url(#paint2_linear_48_4503)", strokeOpacity: 0.5, strokeWidth: 0.75 }), /* @__PURE__ */ React20.createElement("path", { d: "M34.6033 19.3484L31.1561 22.7946L33.8004 25.4379C33.875 25.5125 33.9342 25.6011 33.9746 25.6985C34.0149 25.796 34.0357 25.9005 34.0357 26.006C34.0357 26.1114 34.0149 26.2159 33.9746 26.3134C33.9342 26.4108 33.875 26.4994 33.8004 26.574C33.7259 26.6486 33.6373 26.7077 33.5398 26.7481C33.4424 26.7885 33.3379 26.8092 33.2324 26.8092C33.1269 26.8092 33.0225 26.7885 32.925 26.7481C32.8276 26.7077 32.739 26.6486 32.6644 26.574L32.0282 25.9367L26.7094 31.2555C26.3367 31.6283 25.8941 31.924 25.4071 32.1257C24.9201 32.3274 24.3981 32.4313 23.8709 32.4313C23.3437 32.4313 22.8217 32.3274 22.3347 32.1257C21.8476 31.924 21.4051 31.6283 21.0324 31.2555L19.4588 29.6759L14.5324 34.6023C14.4578 34.6769 14.3693 34.7361 14.2718 34.7764C14.1744 34.8168 14.0699 34.8376 13.9644 34.8376C13.8589 34.8376 13.7545 34.8168 13.657 34.7764C13.5596 34.7361 13.471 34.6769 13.3964 34.6023C13.3218 34.5277 13.2626 34.4392 13.2223 34.3417C13.1819 34.2442 13.1611 34.1398 13.1611 34.0343C13.1611 33.9288 13.1819 33.8244 13.2223 33.7269C13.2626 33.6294 13.3218 33.5409 13.3964 33.4663L18.3228 28.5399L16.7462 26.9633C16.3735 26.5906 16.0778 26.1481 15.876 25.661C15.6743 25.174 15.5704 24.652 15.5704 24.1248C15.5704 23.5976 15.6743 23.0756 15.876 22.5886C16.0778 22.1016 16.3735 21.659 16.7462 21.2863L22.065 15.9675L21.4278 15.3313C21.2771 15.1806 21.1925 14.9763 21.1925 14.7633C21.1925 14.5502 21.2771 14.3459 21.4278 14.1953C21.5784 14.0446 21.7827 13.96 21.9958 13.96C22.2088 13.96 22.4131 14.0446 22.5638 14.1953L25.2041 16.8426L28.6503 13.3954C28.8009 13.2448 29.0052 13.1602 29.2183 13.1602C29.4313 13.1602 29.6356 13.2448 29.7863 13.3954C29.9369 13.5461 30.0215 13.7504 30.0215 13.9634C30.0215 14.1765 29.9369 14.3808 29.7863 14.5314L26.3391 17.9776L30.0211 21.6596L33.4673 18.2124C33.6179 18.0618 33.8222 17.9772 34.0353 17.9772C34.2483 17.9772 34.4526 18.0618 34.6033 18.2124C34.7539 18.3631 34.8386 18.5674 34.8386 18.7804C34.8386 18.9935 34.7539 19.1978 34.6033 19.3484Z", fill: "#96F2FF" }), /* @__PURE__ */ React20.createElement("defs", null, /* @__PURE__ */ React20.createElement("linearGradient", { id: "paint0_linear_48_4503", x1: 24, y1: 0, x2: 24, y2: 48, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React20.createElement("stop", { stopColor: "#2E4C55" }), /* @__PURE__ */ React20.createElement("stop", { offset: 1, stopColor: "#303355" })), /* @__PURE__ */ React20.createElement("radialGradient", { id: "paint1_radial_48_4503", cx: 0, cy: 0, r: 1, gradientUnits: "userSpaceOnUse", gradientTransform: "translate(48 -1.78814e-06) rotate(120.009) scale(34.6442 37.2185)" }, /* @__PURE__ */ React20.createElement("stop", { stopColor: "#96F2FF" }), /* @__PURE__ */ React20.createElement("stop", { offset: 0.619146, stopColor: "#96F2FF", stopOpacity: 0 })), /* @__PURE__ */ React20.createElement("linearGradient", { id: "paint2_linear_48_4503", x1: 24, y1: 0, x2: 24, y2: 48, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React20.createElement("stop", { stopColor: "#96F2FF" }), /* @__PURE__ */ React20.createElement("stop", { offset: 1, stopColor: "#96F2FF", stopOpacity: 0 }))));
var charge_rect_default = SvgChargeRect;

// src/assets/icons/app/connect.svg
import * as React21 from "react";
var SvgConnect = (props) => /* @__PURE__ */ React21.createElement("svg", { width: 48, height: 48, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React21.createElement("rect", { width: 48, height: 48, rx: 7.5, fill: "url(#paint0_linear_48_6367)" }), /* @__PURE__ */ React21.createElement("rect", { width: 48, height: 48, rx: 7.5, fill: "url(#paint1_radial_48_6367)", fillOpacity: 0.4 }), /* @__PURE__ */ React21.createElement("rect", { x: 0.375, y: 0.375, width: 47.25, height: 47.25, rx: 7.125, stroke: "url(#paint2_linear_48_6367)", strokeOpacity: 0.5, strokeWidth: 0.75 }), /* @__PURE__ */ React21.createElement("path", { d: "M35.5352 22.3778L25.6222 12.4648C25.4748 12.3175 25.2999 12.2006 25.1073 12.1208C24.9148 12.0411 24.7084 12 24.5 12C24.2916 12 24.0852 12.0411 23.8927 12.1208C23.7001 12.2006 23.5252 12.3175 23.3778 12.4648L13.4648 22.3778C13.3175 22.5252 13.2006 22.7001 13.1208 22.8927C13.0411 23.0852 13 23.2916 13 23.5C13 23.7084 13.0411 23.9148 13.1208 24.1073C13.2006 24.2999 13.3175 24.4748 13.4648 24.6222L23.3778 34.5352C23.5252 34.6825 23.7001 34.7994 23.8927 34.8792C24.0852 34.9589 24.2916 35 24.5 35C24.7084 35 24.9148 34.9589 25.1073 34.8792C25.2999 34.7994 25.4748 34.6825 25.6222 34.5352L35.5352 24.6222C35.6825 24.4748 35.7994 24.2999 35.8792 24.1073C35.9589 23.9148 36 23.7084 36 23.5C36 23.2916 35.9589 23.0852 35.8792 22.8927C35.7994 22.7001 35.6825 22.5252 35.5352 22.3778ZM28.8757 23.2758L26.5757 25.5757C26.4319 25.7196 26.2368 25.8004 26.0333 25.8004C25.8299 25.8004 25.6348 25.7196 25.4909 25.5757C25.3471 25.4319 25.2662 25.2368 25.2662 25.0333C25.2662 24.8299 25.3471 24.6348 25.4909 24.4909L26.4828 23.5H22.9667C22.56 23.5 22.17 23.6615 21.8825 23.9491C21.5949 24.2367 21.4333 24.6267 21.4333 25.0333V25.8C21.4333 26.0033 21.3526 26.1983 21.2088 26.3421C21.065 26.4859 20.87 26.5667 20.6667 26.5667C20.4634 26.5667 20.2684 26.4859 20.1246 26.3421C19.9808 26.1983 19.9 26.0033 19.9 25.8V25.0333C19.9 24.22 20.2231 23.44 20.7982 22.8649C21.3733 22.2898 22.1533 21.9667 22.9667 21.9667H26.4828L25.4909 20.9758C25.3471 20.8319 25.2662 20.6368 25.2662 20.4333C25.2662 20.2299 25.3471 20.0348 25.4909 19.8909C25.6348 19.7471 25.8299 19.6663 26.0333 19.6663C26.2368 19.6663 26.4319 19.7471 26.5757 19.8909L28.8757 22.1909C28.947 22.2621 29.0036 22.3467 29.0421 22.4398C29.0807 22.5328 29.1006 22.6326 29.1006 22.7333C29.1006 22.8341 29.0807 22.9339 29.0421 23.0269C29.0036 23.12 28.947 23.2045 28.8757 23.2758Z", fill: "#96F2FF" }), /* @__PURE__ */ React21.createElement("defs", null, /* @__PURE__ */ React21.createElement("linearGradient", { id: "paint0_linear_48_6367", x1: 24, y1: 0, x2: 24, y2: 48, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React21.createElement("stop", { stopColor: "#2E4C55" }), /* @__PURE__ */ React21.createElement("stop", { offset: 1, stopColor: "#303355" })), /* @__PURE__ */ React21.createElement("radialGradient", { id: "paint1_radial_48_6367", cx: 0, cy: 0, r: 1, gradientUnits: "userSpaceOnUse", gradientTransform: "translate(48 -1.78814e-06) rotate(120.009) scale(34.6442 37.2185)" }, /* @__PURE__ */ React21.createElement("stop", { stopColor: "#96F2FF" }), /* @__PURE__ */ React21.createElement("stop", { offset: 0.619146, stopColor: "#96F2FF", stopOpacity: 0 })), /* @__PURE__ */ React21.createElement("linearGradient", { id: "paint2_linear_48_6367", x1: 24, y1: 0, x2: 24, y2: 48, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React21.createElement("stop", { stopColor: "#96F2FF" }), /* @__PURE__ */ React21.createElement("stop", { offset: 1, stopColor: "#96F2FF", stopOpacity: 0 }))));
var connect_default = SvgConnect;

// src/assets/icons/app/note.svg
import * as React22 from "react";
var SvgNote = (props) => /* @__PURE__ */ React22.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React22.createElement("path", { d: "M8.25 9C8.25 8.80109 8.32902 8.61032 8.46967 8.46967C8.61032 8.32902 8.80109 8.25 9 8.25H15C15.1989 8.25 15.3897 8.32902 15.5303 8.46967C15.671 8.61032 15.75 8.80109 15.75 9C15.75 9.19891 15.671 9.38968 15.5303 9.53033C15.3897 9.67098 15.1989 9.75 15 9.75H9C8.80109 9.75 8.61032 9.67098 8.46967 9.53033C8.32902 9.38968 8.25 9.19891 8.25 9ZM9 12.75H15C15.1989 12.75 15.3897 12.671 15.5303 12.5303C15.671 12.3897 15.75 12.1989 15.75 12C15.75 11.8011 15.671 11.6103 15.5303 11.4697C15.3897 11.329 15.1989 11.25 15 11.25H9C8.80109 11.25 8.61032 11.329 8.46967 11.4697C8.32902 11.6103 8.25 11.8011 8.25 12C8.25 12.1989 8.32902 12.3897 8.46967 12.5303C8.61032 12.671 8.80109 12.75 9 12.75ZM12 14.25H9C8.80109 14.25 8.61032 14.329 8.46967 14.4697C8.32902 14.6103 8.25 14.8011 8.25 15C8.25 15.1989 8.32902 15.3897 8.46967 15.5303C8.61032 15.671 8.80109 15.75 9 15.75H12C12.1989 15.75 12.3897 15.671 12.5303 15.5303C12.671 15.3897 12.75 15.1989 12.75 15C12.75 14.8011 12.671 14.6103 12.5303 14.4697C12.3897 14.329 12.1989 14.25 12 14.25ZM21 4.5V14.6897C21.0006 14.8867 20.9621 15.082 20.8866 15.264C20.8111 15.446 20.7002 15.6112 20.5603 15.75L15.75 20.5603C15.6112 20.7002 15.446 20.8111 15.264 20.8866C15.082 20.9621 14.8867 21.0006 14.6897 21H4.5C4.10218 21 3.72064 20.842 3.43934 20.5607C3.15804 20.2794 3 19.8978 3 19.5V4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3H19.5C19.8978 3 20.2794 3.15804 20.5607 3.43934C20.842 3.72064 21 4.10218 21 4.5ZM4.5 19.5H14.25V15C14.25 14.8011 14.329 14.6103 14.4697 14.4697C14.6103 14.329 14.8011 14.25 15 14.25H19.5V4.5H4.5V19.5ZM15.75 15.75V18.4406L18.4397 15.75H15.75Z", fill: "white" }));
var note_default = SvgNote;

// src/assets/icons/app/white-arrow-right.svg
import * as React23 from "react";
var SvgWhiteArrowRight = (props) => /* @__PURE__ */ React23.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React23.createElement("path", { d: "M3.21986 11.4694L9.96986 4.71944C10.1106 4.57871 10.3015 4.49965 10.5005 4.49965C10.6995 4.49965 10.8904 4.57871 11.0311 4.71944C11.1718 4.86017 11.2509 5.05105 11.2509 5.25007C11.2509 5.44909 11.1718 5.63996 11.0311 5.7807L5.5608 11.2501L20.2505 11.2501C20.4494 11.2501 20.6402 11.3291 20.7808 11.4697C20.9215 11.6104 21.0005 11.8012 21.0005 12.0001C21.0005 12.199 20.9215 12.3897 20.7808 12.5304C20.6402 12.6711 20.4494 12.7501 20.2505 12.7501L5.5608 12.7501L11.0311 18.2194C11.1718 18.3602 11.2509 18.551 11.2509 18.7501C11.2509 18.9491 11.1718 19.14 11.0311 19.2807C10.8904 19.4214 10.6995 19.5005 10.5005 19.5005C10.3015 19.5005 10.1106 19.4214 9.96986 19.2807L3.21986 12.5307C3.15013 12.461 3.09481 12.3783 3.05707 12.2873C3.01933 12.1962 2.9999 12.0986 2.9999 12.0001C2.9999 11.9015 3.01933 11.8039 3.05707 11.7129C3.09481 11.6218 3.15013 11.5391 3.21986 11.4694Z", fill: "white" }));
var white_arrow_right_default = SvgWhiteArrowRight;

// src/assets/icons/app/link.svg
import * as React24 from "react";
var SvgLink = (props) => /* @__PURE__ */ React24.createElement("svg", { width: 24, height: 25, viewBox: "0 0 24 25", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React24.createElement("g", { filter: "url(#filter0_d_48_6611)" }, /* @__PURE__ */ React24.createElement("path", { d: "M18 6.92102C18 7.05363 17.9473 7.18081 17.8536 7.27457C17.7598 7.36834 17.6326 7.42102 17.5 7.42102C17.3674 7.42102 17.2402 7.36834 17.1464 7.27457C17.0527 7.18081 17 7.05363 17 6.92102V4.12852L12.8544 8.27477C12.7606 8.36859 12.6333 8.4213 12.5006 8.4213C12.3679 8.4213 12.2407 8.36859 12.1469 8.27477C12.0531 8.18095 12.0003 8.0537 12.0003 7.92102C12.0003 7.78834 12.0531 7.66109 12.1469 7.56727L16.2925 3.42102H13.5C13.3674 3.42102 13.2402 3.36834 13.1464 3.27457C13.0527 3.18081 13 3.05363 13 2.92102C13 2.78841 13.0527 2.66124 13.1464 2.56747C13.2402 2.4737 13.3674 2.42102 13.5 2.42102H17.5C17.6326 2.42102 17.7598 2.4737 17.8536 2.56747C17.9473 2.66124 18 2.78841 18 2.92102V6.92102ZM15.5 8.42102C15.3674 8.42102 15.2402 8.4737 15.1464 8.56747C15.0527 8.66123 15 8.78841 15 8.92102V13.421H7V5.42102H11.5C11.6326 5.42102 11.7598 5.36834 11.8536 5.27457C11.9473 5.18081 12 5.05363 12 4.92102C12 4.78841 11.9473 4.66124 11.8536 4.56747C11.7598 4.4737 11.6326 4.42102 11.5 4.42102H7C6.73478 4.42102 6.48043 4.52638 6.29289 4.71391C6.10536 4.90145 6 5.1558 6 5.42102V13.421C6 13.6862 6.10536 13.9406 6.29289 14.1281C6.48043 14.3157 6.73478 14.421 7 14.421H15C15.2652 14.421 15.5196 14.3157 15.7071 14.1281C15.8946 13.9406 16 13.6862 16 13.421V8.92102C16 8.78841 15.9473 8.66123 15.8536 8.56747C15.7598 8.4737 15.6326 8.42102 15.5 8.42102Z", fill: "#96F2FF" })), /* @__PURE__ */ React24.createElement("defs", null, /* @__PURE__ */ React24.createElement("filter", { id: "filter0_d_48_6611", x: 0, y: 0.421021, width: 24, height: 24, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" }, /* @__PURE__ */ React24.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React24.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }), /* @__PURE__ */ React24.createElement("feOffset", { dy: 4 }), /* @__PURE__ */ React24.createElement("feGaussianBlur", { stdDeviation: 2 }), /* @__PURE__ */ React24.createElement("feComposite", { in2: "hardAlpha", operator: "out" }), /* @__PURE__ */ React24.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }), /* @__PURE__ */ React24.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_48_6611" }), /* @__PURE__ */ React24.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_48_6611", result: "shape" }))));
var link_default = SvgLink;

// src/assets/icons/app/expand-arrow.svg
import * as React25 from "react";

// src/assets/icons/app/check.svg
import * as React26 from "react";

// src/assets/icons/app/copy.svg
import * as React27 from "react";
var SvgCopy = (props) => /* @__PURE__ */ React27.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", stroke: "#ffffff", ...props }, /* @__PURE__ */ React27.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ React27.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React27.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ React27.createElement("path", { d: "M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z", stroke: "#8b92a6", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React27.createElement("path", { d: "M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z", stroke: "#8b92a6", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })));
var copy_default = SvgCopy;

// src/assets/icons/app/copied.svg
import * as React28 from "react";
var SvgCopied = (props) => /* @__PURE__ */ React28.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React28.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ React28.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React28.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ React28.createElement("path", { d: "M22 11.1V6.9C22 3.4 20.6 2 17.1 2H12.9C9.4 2 8 3.4 8 6.9V8H11.1C14.6 8 16 9.4 16 12.9V16H17.1C20.6 16 22 14.6 22 11.1Z", stroke: "#8b92a6", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React28.createElement("path", { d: "M16 17.1V12.9C16 9.4 14.6 8 11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1Z", stroke: "#8b92a6", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React28.createElement("path", { d: "M6.08008 15L8.03008 16.95L11.9201 13.05", stroke: "#8b92a6", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })));
var copied_default = SvgCopied;

// src/assets/icons/app/yaml.svg
import * as React29 from "react";
var SvgYaml = (props) => /* @__PURE__ */ React29.createElement("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React29.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ React29.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React29.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ React29.createElement("path", { d: "M13 2.5V5C13 7.35702 13 8.53553 13.7322 9.26777C14.4645 10 15.643 10 18 10H22", stroke: "#8b92a6", strokeWidth: 1.5 }), /* @__PURE__ */ React29.createElement("path", { d: "M7 14L6 15L7 16M11.5 16L12.5 17L11.5 18M10 14L8.5 18", stroke: "#8b92a6", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React29.createElement("path", { d: "M2.75 10C2.75 9.58579 2.41421 9.25 2 9.25C1.58579 9.25 1.25 9.58579 1.25 10H2.75ZM21.25 14C21.25 14.4142 21.5858 14.75 22 14.75C22.4142 14.75 22.75 14.4142 22.75 14H21.25ZM15.3929 4.05365L14.8912 4.61112L15.3929 4.05365ZM19.3517 7.61654L18.85 8.17402L19.3517 7.61654ZM21.654 10.1541L20.9689 10.4592V10.4592L21.654 10.1541ZM3.17157 20.8284L3.7019 20.2981H3.7019L3.17157 20.8284ZM20.8284 20.8284L20.2981 20.2981L20.2981 20.2981L20.8284 20.8284ZM1.35509 5.92658C1.31455 6.33881 1.61585 6.70585 2.02807 6.7464C2.4403 6.78695 2.80734 6.48564 2.84789 6.07342L1.35509 5.92658ZM22.6449 18.0734C22.6855 17.6612 22.3841 17.2941 21.9719 17.2536C21.5597 17.2131 21.1927 17.5144 21.1521 17.9266L22.6449 18.0734ZM14 21.25H10V22.75H14V21.25ZM2.75 14V10H1.25V14H2.75ZM21.25 13.5629V14H22.75V13.5629H21.25ZM14.8912 4.61112L18.85 8.17402L19.8534 7.05907L15.8947 3.49618L14.8912 4.61112ZM22.75 13.5629C22.75 11.8745 22.7651 10.8055 22.3391 9.84897L20.9689 10.4592C21.2349 11.0565 21.25 11.742 21.25 13.5629H22.75ZM18.85 8.17402C20.2034 9.3921 20.7029 9.86199 20.9689 10.4592L22.3391 9.84897C21.9131 8.89241 21.1084 8.18853 19.8534 7.05907L18.85 8.17402ZM10.0298 2.75C11.6116 2.75 12.2085 2.76158 12.7405 2.96573L13.2779 1.5653C12.4261 1.23842 11.498 1.25 10.0298 1.25V2.75ZM15.8947 3.49618C14.8087 2.51878 14.1297 1.89214 13.2779 1.5653L12.7405 2.96573C13.2727 3.16993 13.7215 3.55836 14.8912 4.61112L15.8947 3.49618ZM10 21.25C8.09318 21.25 6.73851 21.2484 5.71085 21.1102C4.70476 20.975 4.12511 20.7213 3.7019 20.2981L2.64124 21.3588C3.38961 22.1071 4.33855 22.4392 5.51098 22.5969C6.66182 22.7516 8.13558 22.75 10 22.75V21.25ZM1.25 14C1.25 15.8644 1.24841 17.3382 1.40313 18.489C1.56076 19.6614 1.89288 20.6104 2.64124 21.3588L3.7019 20.2981C3.27869 19.8749 3.02502 19.2952 2.88976 18.2892C2.75159 17.2615 2.75 15.9068 2.75 14H1.25ZM14 22.75C15.8644 22.75 17.3382 22.7516 18.489 22.5969C19.6614 22.4392 20.6104 22.1071 21.3588 21.3588L20.2981 20.2981C19.8749 20.7213 19.2952 20.975 18.2892 21.1102C17.2615 21.2484 15.9068 21.25 14 21.25V22.75ZM10.0298 1.25C8.15538 1.25 6.67442 1.24842 5.51887 1.40307C4.34232 1.56054 3.39019 1.8923 2.64124 2.64124L3.7019 3.7019C4.12453 3.27928 4.70596 3.02525 5.71785 2.88982C6.75075 2.75158 8.11311 2.75 10.0298 2.75V1.25ZM2.84789 6.07342C2.96931 4.83905 3.23045 4.17335 3.7019 3.7019L2.64124 2.64124C1.80633 3.47616 1.48944 4.56072 1.35509 5.92658L2.84789 6.07342ZM21.1521 17.9266C21.0307 19.1609 20.7695 19.8266 20.2981 20.2981L21.3588 21.3588C22.1937 20.5238 22.5106 19.4393 22.6449 18.0734L21.1521 17.9266Z", fill: "#8b92a6" })));
var yaml_default = SvgYaml;

// src/assets/icons/app/green-check.svg
import * as React30 from "react";
var SvgGreenCheck = (props) => /* @__PURE__ */ React30.createElement("svg", { height: 16, viewBox: "0 0 16 16", width: 16, className: "octicon octicon-check v-align-middle", ...props }, /* @__PURE__ */ React30.createElement("path", { fill: "green", d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" }));
var green_check_default = SvgGreenCheck;

// src/assets/icons/app/red-error.svg
import * as React31 from "react";
var SvgRedError = (props) => /* @__PURE__ */ React31.createElement("svg", { fill: "#f85249", height: 16, viewBox: "0 0 16 16", width: 16, className: "octicon octicon-check v-align-middle", ...props }, /* @__PURE__ */ React31.createElement("path", { className: "icon-path", d: "M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" }));
var red_error_default = SvgRedError;

// src/assets/icons/app/blue-info.svg
import * as React32 from "react";
var SvgBlueInfo = (props) => /* @__PURE__ */ React32.createElement("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React32.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ React32.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React32.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ React32.createElement("path", { d: "M12 7.01002L12 7.00003M12 17L12 10", stroke: "#2196F3", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })));
var blue_info_default = SvgBlueInfo;

// src/assets/icons/app/bell.svg
import * as React33 from "react";
var SvgBell = (props) => /* @__PURE__ */ React33.createElement("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React33.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ React33.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React33.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ React33.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 1.25C7.71983 1.25 4.25004 4.71979 4.25004 9V9.7041C4.25004 10.401 4.04375 11.0824 3.65717 11.6622L2.50856 13.3851C1.17547 15.3848 2.19318 18.1028 4.51177 18.7351C5.26738 18.9412 6.02937 19.1155 6.79578 19.2581L6.79768 19.2632C7.56667 21.3151 9.62198 22.75 12 22.75C14.378 22.75 16.4333 21.3151 17.2023 19.2632L17.2042 19.2581C17.9706 19.1155 18.7327 18.9412 19.4883 18.7351C21.8069 18.1028 22.8246 15.3848 21.4915 13.3851L20.3429 11.6622C19.9563 11.0824 19.75 10.401 19.75 9.7041V9C19.75 4.71979 16.2802 1.25 12 1.25ZM15.3764 19.537C13.1335 19.805 10.8664 19.8049 8.62349 19.5369C9.33444 20.5585 10.571 21.25 12 21.25C13.4289 21.25 14.6655 20.5585 15.3764 19.537ZM5.75004 9C5.75004 5.54822 8.54826 2.75 12 2.75C15.4518 2.75 18.25 5.54822 18.25 9V9.7041C18.25 10.6972 18.544 11.668 19.0948 12.4943L20.2434 14.2172C21.0086 15.3649 20.4245 16.925 19.0936 17.288C14.4494 18.5546 9.5507 18.5546 4.90644 17.288C3.57561 16.925 2.99147 15.3649 3.75664 14.2172L4.90524 12.4943C5.45609 11.668 5.75004 10.6972 5.75004 9.7041V9Z", fill: "#ffffff" })));
var bell_default = SvgBell;

// src/assets/icons/app/plus.svg
import * as React34 from "react";
var SvgPlus = (props) => /* @__PURE__ */ React34.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React34.createElement("path", { d: "M14 8C14 8.13261 13.9473 8.25979 13.8536 8.35355C13.7598 8.44732 13.6326 8.5 13.5 8.5H8.5V13.5C8.5 13.6326 8.44732 13.7598 8.35355 13.8536C8.25979 13.9473 8.13261 14 8 14C7.86739 14 7.74021 13.9473 7.64645 13.8536C7.55268 13.7598 7.5 13.6326 7.5 13.5V8.5H2.5C2.36739 8.5 2.24021 8.44732 2.14645 8.35355C2.05268 8.25979 2 8.13261 2 8C2 7.86739 2.05268 7.74021 2.14645 7.64645C2.24021 7.55268 2.36739 7.5 2.5 7.5H7.5V2.5C7.5 2.36739 7.55268 2.24021 7.64645 2.14645C7.74021 2.05268 7.86739 2 8 2C8.13261 2 8.25979 2.05268 8.35355 2.14645C8.44732 2.24021 8.5 2.36739 8.5 2.5V7.5H13.5C13.6326 7.5 13.7598 7.55268 13.8536 7.64645C13.9473 7.74021 14 7.86739 14 8Z", fill: "#203548" }));
var plus_default = SvgPlus;

// src/assets/icons/app/back.svg
import * as React35 from "react";
var SvgBack = (props) => /* @__PURE__ */ React35.createElement("svg", { width: 16, height: 17, viewBox: "0 0 16 17", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React35.createElement("g", { clipPath: "url(#clip0_106_437)" }, /* @__PURE__ */ React35.createElement("path", { d: "M10 13.5L5 8.5L10 3.5", stroke: "white", strokeLinecap: "round", strokeLinejoin: "round" })), /* @__PURE__ */ React35.createElement("defs", null, /* @__PURE__ */ React35.createElement("clipPath", { id: "clip0_106_437" }, /* @__PURE__ */ React35.createElement("rect", { width: 16, height: 16, fill: "white", transform: "translate(0 0.5)" }))));
var back_default = SvgBack;

// src/assets/icons/side.menu/focus-overview.svg
import * as React36 from "react";
var SvgFocusOverview = (props) => /* @__PURE__ */ React36.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React36.createElement("path", { d: "M22.3725 7.37097C22.0941 7.65023 21.7633 7.87169 21.399 8.0226C21.0348 8.17352 20.6443 8.25092 20.25 8.25034C20.0086 8.25021 19.7682 8.22126 19.5337 8.16409L17.0371 12.801C17.0653 12.8272 17.0934 12.8535 17.1206 12.8807C17.5173 13.2774 17.7947 13.7775 17.9215 14.324C18.0482 14.8706 18.0192 15.4417 17.8376 15.9726C17.656 16.5034 17.3292 16.9728 16.8943 17.3272C16.4594 17.6817 15.9338 17.9071 15.3773 17.9778C14.8207 18.0485 14.2554 17.9618 13.7457 17.7274C13.2359 17.493 12.8021 17.1203 12.4936 16.6518C12.185 16.1832 12.014 15.6375 12 15.0766C11.986 14.5157 12.1295 13.9622 12.4143 13.4788L10.5225 11.5869C10.0609 11.8581 9.53526 12.0008 8.99996 12.0003C8.75836 12.0005 8.51759 11.9719 8.28277 11.915L5.78621 16.55C5.81434 16.5763 5.8434 16.6025 5.87059 16.6297C6.29008 17.0493 6.57573 17.5839 6.69143 18.1658C6.80713 18.7477 6.74768 19.3509 6.5206 19.899C6.29351 20.4471 5.909 20.9156 5.41566 21.2453C4.92233 21.5749 4.34234 21.7508 3.74902 21.7508C3.15571 21.7508 2.57572 21.5749 2.08239 21.2453C1.58905 20.9156 1.20453 20.4471 0.977452 19.899C0.750369 19.3509 0.690919 18.7477 0.806619 18.1658C0.922319 17.5839 1.20797 17.0493 1.62746 16.6297C1.99247 16.2649 2.44543 16.0004 2.94255 15.8618C3.43967 15.7231 3.96415 15.7151 4.46527 15.8385L6.96184 11.2016C6.93371 11.1753 6.90559 11.1491 6.8784 11.1219C6.59975 10.8433 6.37871 10.5126 6.2279 10.1486C6.0771 9.78453 5.99948 9.39437 5.99948 9.00034C5.99948 8.60632 6.0771 8.21616 6.2279 7.85213C6.37871 7.48811 6.59975 7.15736 6.8784 6.87878C7.39453 6.3612 8.08186 6.04985 8.81131 6.00321C9.54077 5.95658 10.2622 6.17787 10.84 6.62551C11.4178 7.07316 11.8123 7.71637 11.9495 8.43434C12.0866 9.15231 11.9569 9.89563 11.5847 10.5247L13.4765 12.4166C14.1525 12.0205 14.956 11.9029 15.7171 12.0885L18.2137 7.45159C18.1856 7.42534 18.1565 7.39909 18.1293 7.3719C17.8507 7.09332 17.6297 6.76257 17.4788 6.39855C17.328 6.03453 17.2504 5.64437 17.2504 5.25034C17.2504 4.85632 17.328 4.46616 17.4788 4.10213C17.6297 3.73811 17.8507 3.40736 18.1293 3.12878C18.692 2.56611 19.4552 2.25 20.2509 2.25C21.0466 2.25 21.8098 2.56611 22.3725 3.12878C22.9351 3.69145 23.2512 4.4546 23.2512 5.25034C23.2512 6.04608 22.9351 6.80923 22.3725 7.3719V7.37097Z", fill: "#0EE6F3" }));
var focus_overview_default = SvgFocusOverview;

// src/assets/icons/side.menu/unfocus-overview.svg
import * as React37 from "react";
var SvgUnfocusOverview = (props) => /* @__PURE__ */ React37.createElement("svg", { width: 24, height: 20, viewBox: "0 0 24 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React37.createElement("path", { d: "M22.3725 5.37048C22.0941 5.64974 21.7633 5.8712 21.399 6.02211C21.0348 6.17303 20.6443 6.25043 20.25 6.24985C20.0086 6.24972 19.7682 6.22077 19.5337 6.1636L17.0371 10.8005C17.0653 10.8267 17.0934 10.853 17.1206 10.8802C17.5173 11.2769 17.7947 11.777 17.9215 12.3235C18.0482 12.8701 18.0192 13.4412 17.8376 13.9721C17.656 14.503 17.3292 14.9723 16.8943 15.3267C16.4594 15.6812 15.9338 15.9066 15.3773 15.9773C14.8207 16.048 14.2554 15.9613 13.7457 15.7269C13.2359 15.4925 12.8021 15.1198 12.4936 14.6513C12.185 14.1827 12.014 13.637 12 13.0761C11.986 12.5152 12.1295 11.9617 12.4143 11.4783L10.5225 9.58642C10.0609 9.85759 9.53526 10.0003 8.99996 9.99985C8.75836 10 8.51759 9.9714 8.28277 9.91454L5.78621 14.5495C5.81434 14.5758 5.8434 14.602 5.87059 14.6292C6.29008 15.0488 6.57573 15.5834 6.69143 16.1653C6.80713 16.7472 6.74768 17.3504 6.5206 17.8985C6.29351 18.4467 5.909 18.9151 5.41566 19.2448C4.92233 19.5744 4.34234 19.7503 3.74902 19.7503C3.15571 19.7503 2.57572 19.5744 2.08239 19.2448C1.58905 18.9151 1.20453 18.4467 0.977452 17.8985C0.750369 17.3504 0.690919 16.7472 0.806619 16.1653C0.922319 15.5834 1.20797 15.0488 1.62746 14.6292C1.99247 14.2644 2.44543 13.9999 2.94255 13.8613C3.43967 13.7227 3.96415 13.7146 4.46527 13.838L6.96184 9.20111C6.93371 9.17485 6.90559 9.1486 6.8784 9.12142C6.59975 8.84283 6.37871 8.51208 6.2279 8.14806C6.0771 7.78404 5.99948 7.39388 5.99948 6.99985C5.99948 6.60583 6.0771 6.21567 6.2279 5.85165C6.37871 5.48762 6.59975 5.15688 6.8784 4.87829C7.39453 4.36071 8.08186 4.04936 8.81131 4.00273C9.54077 3.95609 10.2622 4.17738 10.84 4.62503C11.4178 5.07267 11.8123 5.71588 11.9495 6.43385C12.0866 7.15182 11.9569 7.89515 11.5847 8.52423L13.4765 10.4161C14.1525 10.02 14.956 9.90236 15.7171 10.088L18.2137 5.4511C18.1856 5.42485 18.1565 5.3986 18.1293 5.37142C17.8507 5.09283 17.6297 4.76208 17.4788 4.39806C17.328 4.03404 17.2504 3.64388 17.2504 3.24985C17.2504 2.85583 17.328 2.46567 17.4788 2.10165C17.6297 1.73762 17.8507 1.40688 18.1293 1.12829C18.692 0.565618 19.4552 0.249512 20.2509 0.249512C21.0466 0.249512 21.8098 0.565618 22.3725 1.12829C22.9351 1.69096 23.2512 2.45411 23.2512 3.24985C23.2512 4.04559 22.9351 4.80874 22.3725 5.37142V5.37048Z", fill: "#8B92A5" }));
var unfocus_overview_default = SvgUnfocusOverview;

// src/assets/icons/side.menu/sources-focus.svg
import * as React38 from "react";
var SvgSourcesFocus = (props) => /* @__PURE__ */ React38.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React38.createElement("path", { d: "M22.0302 7.7808L18.81 11L21.2802 13.4693C21.3499 13.539 21.4052 13.6217 21.4429 13.7128C21.4806 13.8038 21.5 13.9014 21.5 13.9999C21.5 14.0985 21.4806 14.196 21.4429 14.2871C21.4052 14.3781 21.3499 14.4608 21.2802 14.5305C21.2106 14.6002 21.1278 14.6555 21.0368 14.6932C20.9458 14.7309 20.8482 14.7503 20.7496 14.7503C20.6511 14.7503 20.5535 14.7309 20.4625 14.6932C20.3714 14.6555 20.2887 14.6002 20.219 14.5305L19.6247 13.9352L14.6561 18.9038C14.3079 19.252 13.8945 19.5282 13.4396 19.7167C12.9846 19.9052 12.497 20.0022 12.0045 20.0022C11.5121 20.0022 11.0245 19.9052 10.5695 19.7167C10.1145 19.5282 9.70113 19.252 9.35293 18.9038L7.88299 17.4282L3.28099 22.0302C3.21131 22.0999 3.12859 22.1552 3.03755 22.1929C2.94651 22.2306 2.84893 22.25 2.75039 22.25C2.65184 22.25 2.55427 22.2306 2.46323 22.1929C2.37218 22.1552 2.28946 22.0999 2.21978 22.0302C2.1501 21.9605 2.09483 21.8778 2.05712 21.7868C2.01941 21.6957 2 21.5982 2 21.4996C2 21.4011 2.01941 21.3035 2.05712 21.2125C2.09483 21.1214 2.1501 21.0387 2.21978 20.969L6.82178 16.367L5.34903 14.8943C5.0008 14.5461 4.72457 14.1327 4.53611 13.6777C4.34766 13.2227 4.25066 12.7351 4.25066 12.2427C4.25066 11.7502 4.34766 11.2626 4.53611 10.8076C4.72457 10.3526 5.0008 9.93925 5.34903 9.59104L10.3176 4.6225L9.72229 4.02815C9.58156 3.88742 9.5025 3.69656 9.5025 3.49754C9.5025 3.29853 9.58156 3.10766 9.72229 2.96694C9.86301 2.82621 10.0539 2.74716 10.2529 2.74716C10.4519 2.74716 10.6428 2.82621 10.7835 2.96694L13.25 5.43996L16.4692 2.21978C16.6099 2.07906 16.8008 2 16.9998 2C17.1988 2 17.3897 2.07906 17.5304 2.21978C17.6711 2.36051 17.7502 2.55137 17.7502 2.75039C17.7502 2.9494 17.6711 3.14026 17.5304 3.28099L14.3102 6.50023L17.7498 9.93978L20.969 6.7196C21.1097 6.57887 21.3006 6.49981 21.4996 6.49981C21.6986 6.49981 21.8895 6.57887 22.0302 6.7196C22.1709 6.86032 22.25 7.05119 22.25 7.2502C22.25 7.44922 22.1709 7.64008 22.0302 7.7808Z", fill: "#96F2FF" }));
var sources_focus_default = SvgSourcesFocus;

// src/assets/icons/side.menu/sources-unfocus.svg
import * as React39 from "react";
var SvgSourcesUnfocus = (props) => /* @__PURE__ */ React39.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React39.createElement("path", { d: "M22.0302 7.7808L18.81 11L21.2802 13.4693C21.3499 13.539 21.4052 13.6217 21.4429 13.7128C21.4806 13.8038 21.5 13.9014 21.5 13.9999C21.5 14.0985 21.4806 14.196 21.4429 14.2871C21.4052 14.3781 21.3499 14.4608 21.2802 14.5305C21.2106 14.6002 21.1278 14.6555 21.0368 14.6932C20.9458 14.7309 20.8482 14.7503 20.7496 14.7503C20.6511 14.7503 20.5535 14.7309 20.4625 14.6932C20.3714 14.6555 20.2887 14.6002 20.219 14.5305L19.6247 13.9352L14.6561 18.9038C14.3079 19.252 13.8945 19.5282 13.4396 19.7167C12.9846 19.9052 12.497 20.0022 12.0045 20.0022C11.5121 20.0022 11.0245 19.9052 10.5695 19.7167C10.1145 19.5282 9.70113 19.252 9.35293 18.9038L7.88299 17.4282L3.28099 22.0302C3.21131 22.0999 3.12859 22.1552 3.03755 22.1929C2.94651 22.2306 2.84893 22.25 2.75039 22.25C2.65184 22.25 2.55427 22.2306 2.46323 22.1929C2.37218 22.1552 2.28946 22.0999 2.21978 22.0302C2.1501 21.9605 2.09483 21.8778 2.05712 21.7868C2.01941 21.6957 2 21.5982 2 21.4996C2 21.4011 2.01941 21.3035 2.05712 21.2125C2.09483 21.1214 2.1501 21.0387 2.21978 20.969L6.82178 16.367L5.34903 14.8943C5.0008 14.5461 4.72457 14.1327 4.53611 13.6777C4.34766 13.2227 4.25066 12.7351 4.25066 12.2427C4.25066 11.7502 4.34766 11.2626 4.53611 10.8076C4.72457 10.3526 5.0008 9.93925 5.34903 9.59104L10.3176 4.6225L9.72229 4.02815C9.58156 3.88742 9.5025 3.69656 9.5025 3.49754C9.5025 3.29853 9.58156 3.10766 9.72229 2.96694C9.86301 2.82621 10.0539 2.74716 10.2529 2.74716C10.4519 2.74716 10.6428 2.82621 10.7835 2.96694L13.25 5.43996L16.4692 2.21978C16.6099 2.07906 16.8008 2 16.9998 2C17.1988 2 17.3897 2.07906 17.5304 2.21978C17.6711 2.36051 17.7502 2.55137 17.7502 2.75039C17.7502 2.9494 17.6711 3.14026 17.5304 3.28099L14.3102 6.50023L17.7498 9.93978L20.969 6.7196C21.1097 6.57887 21.3006 6.49981 21.4996 6.49981C21.6986 6.49981 21.8895 6.57887 22.0302 6.7196C22.1709 6.86032 22.25 7.05119 22.25 7.2502C22.25 7.44922 22.1709 7.64008 22.0302 7.7808Z", fill: "#8B92A5" }));
var sources_unfocus_default = SvgSourcesUnfocus;

// src/assets/icons/side.menu/destinations-focus.svg
import * as React40 from "react";
var SvgDestinationsFocus = (props) => /* @__PURE__ */ React40.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React40.createElement("path", { d: "M23.0453 11.1522L13.3478 1.45474C13.2036 1.31057 13.0325 1.19621 12.8441 1.11818C12.6558 1.04016 12.4539 1 12.25 1C12.0461 1 11.8442 1.04016 11.6559 1.11818C11.4675 1.19621 11.2964 1.31057 11.1522 1.45474L1.45474 11.1522C1.31057 11.2964 1.19621 11.4675 1.11818 11.6559C1.04016 11.8442 1 12.0461 1 12.25C1 12.4539 1.04016 12.6558 1.11818 12.8441C1.19621 13.0325 1.31057 13.2036 1.45474 13.3478L11.1522 23.0453C11.2964 23.1894 11.4675 23.3038 11.6559 23.3818C11.8442 23.4598 12.0461 23.5 12.25 23.5C12.4539 23.5 12.6558 23.4598 12.8441 23.3818C13.0325 23.3038 13.2036 23.1894 13.3478 23.0453L23.0453 13.3478C23.1894 13.2036 23.3038 13.0325 23.3818 12.8441C23.4598 12.6558 23.5 12.4539 23.5 12.25C23.5 12.0461 23.4598 11.8442 23.3818 11.6559C23.3038 11.4675 23.1894 11.2964 23.0453 11.1522ZM16.5306 12.0306L14.2806 14.2806C14.1399 14.4213 13.949 14.5004 13.75 14.5004C13.551 14.5004 13.3601 14.4213 13.2194 14.2806C13.0786 14.1399 12.9996 13.949 12.9996 13.75C12.9996 13.551 13.0786 13.3601 13.2194 13.2194L14.1897 12.25H10.75C10.3522 12.25 9.97066 12.408 9.68935 12.6893C9.40805 12.9706 9.25002 13.3522 9.25002 13.75V14.5C9.25002 14.6989 9.171 14.8897 9.03035 15.0303C8.8897 15.171 8.69893 15.25 8.50002 15.25C8.30111 15.25 8.11034 15.171 7.96969 15.0303C7.82904 14.8897 7.75002 14.6989 7.75002 14.5V13.75C7.75002 12.9543 8.06609 12.1913 8.6287 11.6287C9.1913 11.0661 9.95436 10.75 10.75 10.75H14.1897L13.2194 9.78064C13.0786 9.63991 12.9996 9.44904 12.9996 9.25002C12.9996 9.05099 13.0786 8.86012 13.2194 8.71939C13.3601 8.57866 13.551 8.4996 13.75 8.4996C13.949 8.4996 14.1399 8.57866 14.2806 8.71939L16.5306 10.9694C16.6003 11.039 16.6557 11.1218 16.6934 11.2128C16.7311 11.3038 16.7506 11.4014 16.7506 11.5C16.7506 11.5986 16.7311 11.6962 16.6934 11.7872C16.6557 11.8783 16.6003 11.961 16.5306 12.0306Z", fill: "#0EE6F3" }));
var destinations_focus_default = SvgDestinationsFocus;

// src/assets/icons/side.menu/destinations-unfocus.svg
import * as React41 from "react";
var SvgDestinationsUnfocus = (props) => /* @__PURE__ */ React41.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React41.createElement("path", { d: "M23.0453 11.1522L13.3478 1.45474C13.2036 1.31057 13.0325 1.19621 12.8441 1.11818C12.6558 1.04016 12.4539 1 12.25 1C12.0461 1 11.8442 1.04016 11.6559 1.11818C11.4675 1.19621 11.2964 1.31057 11.1522 1.45474L1.45474 11.1522C1.31057 11.2964 1.19621 11.4675 1.11818 11.6559C1.04016 11.8442 1 12.0461 1 12.25C1 12.4539 1.04016 12.6558 1.11818 12.8441C1.19621 13.0325 1.31057 13.2036 1.45474 13.3478L11.1522 23.0453C11.2964 23.1894 11.4675 23.3038 11.6559 23.3818C11.8442 23.4598 12.0461 23.5 12.25 23.5C12.4539 23.5 12.6558 23.4598 12.8441 23.3818C13.0325 23.3038 13.2036 23.1894 13.3478 23.0453L23.0453 13.3478C23.1894 13.2036 23.3038 13.0325 23.3818 12.8441C23.4598 12.6558 23.5 12.4539 23.5 12.25C23.5 12.0461 23.4598 11.8442 23.3818 11.6559C23.3038 11.4675 23.1894 11.2964 23.0453 11.1522ZM16.5306 12.0306L14.2806 14.2806C14.1399 14.4213 13.949 14.5004 13.75 14.5004C13.551 14.5004 13.3601 14.4213 13.2194 14.2806C13.0786 14.1399 12.9996 13.949 12.9996 13.75C12.9996 13.551 13.0786 13.3601 13.2194 13.2194L14.1897 12.25H10.75C10.3522 12.25 9.97066 12.408 9.68935 12.6893C9.40805 12.9706 9.25002 13.3522 9.25002 13.75V14.5C9.25002 14.6989 9.171 14.8897 9.03035 15.0303C8.8897 15.171 8.69893 15.25 8.50002 15.25C8.30111 15.25 8.11034 15.171 7.96969 15.0303C7.82904 14.8897 7.75002 14.6989 7.75002 14.5V13.75C7.75002 12.9543 8.06609 12.1913 8.6287 11.6287C9.1913 11.0661 9.95436 10.75 10.75 10.75H14.1897L13.2194 9.78064C13.0786 9.63991 12.9996 9.44904 12.9996 9.25002C12.9996 9.05099 13.0786 8.86012 13.2194 8.71939C13.3601 8.57866 13.551 8.4996 13.75 8.4996C13.949 8.4996 14.1399 8.57866 14.2806 8.71939L16.5306 10.9694C16.6003 11.039 16.6557 11.1218 16.6934 11.2128C16.7311 11.3038 16.7506 11.4014 16.7506 11.5C16.7506 11.5986 16.7311 11.6962 16.6934 11.7872C16.6557 11.8783 16.6003 11.961 16.5306 12.0306Z", fill: "#8B92A5" }));
var destinations_unfocus_default = SvgDestinationsUnfocus;

// src/assets/icons/side.menu/transform-focus.svg
import * as React42 from "react";
var SvgTransformFocus = (props) => /* @__PURE__ */ React42.createElement("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React42.createElement("path", { d: "M10.25 4.00003C10.25 3.69074 10.0602 3.41317 9.77191 3.30105C9.48366 3.18892 9.15614 3.26524 8.94715 3.49324L3.44715 9.49324C3.24617 9.71248 3.19374 10.0298 3.3135 10.302C3.43327 10.5743 3.70259 10.75 4.00002 10.75H20C20.4142 10.75 20.75 10.4142 20.75 10C20.75 9.58582 20.4142 9.25003 20 9.25003L10.25 9.25003V4.00003Z", fill: "#0ce6f3" }), /* @__PURE__ */ React42.createElement("path", { d: "M13.75 20L13.75 14.75H4.00002C3.5858 14.75 3.25002 14.4142 3.25002 14C3.25002 13.5858 3.5858 13.25 4.00002 13.25L20 13.25C20.2974 13.25 20.5668 13.4258 20.6865 13.698C20.8063 13.9703 20.7539 14.2876 20.5529 14.5068L15.0529 20.5068C14.8439 20.7348 14.5164 20.8111 14.2281 20.699C13.9399 20.5869 13.75 20.3093 13.75 20Z", fill: "#0ce6f3" }));
var transform_focus_default = SvgTransformFocus;

// src/assets/icons/side.menu/transform-unfocus.svg
import * as React43 from "react";
var SvgTransformUnfocus = (props) => /* @__PURE__ */ React43.createElement("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React43.createElement("path", { d: "M10.25 4.00003C10.25 3.69074 10.0602 3.41317 9.77191 3.30105C9.48366 3.18892 9.15614 3.26524 8.94715 3.49324L3.44715 9.49324C3.24617 9.71248 3.19374 10.0298 3.3135 10.302C3.43327 10.5743 3.70259 10.75 4.00002 10.75H20C20.4142 10.75 20.75 10.4142 20.75 10C20.75 9.58582 20.4142 9.25003 20 9.25003L10.25 9.25003V4.00003Z", fill: "#8b92a6" }), /* @__PURE__ */ React43.createElement("path", { d: "M13.75 20L13.75 14.75H4.00002C3.5858 14.75 3.25002 14.4142 3.25002 14C3.25002 13.5858 3.5858 13.25 4.00002 13.25L20 13.25C20.2974 13.25 20.5668 13.4258 20.6865 13.698C20.8063 13.9703 20.7539 14.2876 20.5529 14.5068L15.0529 20.5068C14.8439 20.7348 14.5164 20.8111 14.2281 20.699C13.9399 20.5869 13.75 20.3093 13.75 20Z", fill: "#8b92a6" }));
var transform_unfocus_default = SvgTransformUnfocus;

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
  return /* @__PURE__ */ React44.createElement(ComponentWrapper, null, title && /* @__PURE__ */ React44.createElement(Text, { size: 14 }, title), /* @__PURE__ */ React44.createElement(CodeBlockContainer, null, /* @__PURE__ */ React44.createElement(CopyIconWrapper, { onClick: handleCopy }, !clipboardState ? /* @__PURE__ */ React44.createElement(copy_default, { width: 24, height: 24 }) : /* @__PURE__ */ React44.createElement(copied_default, { width: 24, height: 24 })), /* @__PURE__ */ React44.createElement(TextWrapper2, null, text2.split(" ").map((part, index) => /* @__PURE__ */ React44.createElement("span", { key: index, style: { color: getWordColor(part) } }, `${part} `)))));
}

// src/design.system/card/card.tsx
import React45 from "react";

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
    return /* @__PURE__ */ React45.createElement(React45.Fragment, null, /* @__PURE__ */ React45.createElement(Text, { size: 20, weight: 600 }, header?.title), /* @__PURE__ */ React45.createElement(Text, { size: 14, color: "#CCD0D2" }, header?.subtitle));
  }
  return /* @__PURE__ */ React45.createElement(CardContainer, { selected: focus || void 0, type }, header && /* @__PURE__ */ React45.createElement(CardHeader, null, renderHeader()), children);
}

// src/design.system/tag/tag.tsx
import React46 from "react";
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
  return /* @__PURE__ */ React46.createElement(TagWrapper, { style: { backgroundColor: color } }, /* @__PURE__ */ React46.createElement(Text, { weight: 500, size: 13, color: "#CCD0D2" }, title));
}

// src/design.system/tap/tap.tsx
import React47 from "react";
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
  return /* @__PURE__ */ React47.createElement(
    TapWrapper,
    {
      onClick,
      selected: tapped,
      style: { ...style, cursor: onClick ? "pointer" : "auto" }
    },
    children,
    /* @__PURE__ */ React47.createElement(
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
import React53, { useEffect as useEffect4, useRef, useState as useState5 } from "react";

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
import React50 from "react";

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
import * as React48 from "react";
var SvgGlass = (props) => /* @__PURE__ */ React48.createElement("svg", { width: 18, height: 18, viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React48.createElement("path", { d: "M16.1479 15.3519L12.6273 11.8321C13.6477 10.6071 14.1566 9.03577 14.048 7.44512C13.9394 5.85447 13.2217 4.36692 12.0443 3.29193C10.8668 2.21693 9.32029 1.63725 7.72635 1.67348C6.13241 1.7097 4.6138 2.35904 3.48642 3.48642C2.35904 4.6138 1.7097 6.13241 1.67348 7.72635C1.63725 9.32029 2.21693 10.8668 3.29193 12.0443C4.36692 13.2217 5.85447 13.9394 7.44512 14.048C9.03577 14.1566 10.6071 13.6477 11.8321 12.6273L15.3519 16.1479C15.4042 16.2001 15.4663 16.2416 15.5345 16.2699C15.6028 16.2982 15.676 16.3127 15.7499 16.3127C15.8238 16.3127 15.897 16.2982 15.9653 16.2699C16.0336 16.2416 16.0956 16.2001 16.1479 16.1479C16.2001 16.0956 16.2416 16.0336 16.2699 15.9653C16.2982 15.897 16.3127 15.8238 16.3127 15.7499C16.3127 15.676 16.2982 15.6028 16.2699 15.5345C16.2416 15.4663 16.2001 15.4042 16.1479 15.3519ZM2.81242 7.87492C2.81242 6.87365 3.10933 5.89487 3.6656 5.06234C4.22188 4.22982 5.01253 3.58094 5.93758 3.19778C6.86263 2.81461 7.88053 2.71435 8.86256 2.90969C9.84459 3.10503 10.7466 3.58718 11.4546 4.29519C12.1626 5.00319 12.6448 5.90524 12.8401 6.88727C13.0355 7.8693 12.9352 8.8872 12.5521 9.81225C12.1689 10.7373 11.52 11.528 10.6875 12.0842C9.85497 12.6405 8.87618 12.9374 7.87492 12.9374C6.53271 12.9359 5.24591 12.4021 4.29683 11.453C3.34775 10.5039 2.81391 9.21712 2.81242 7.87492Z", fill: "#8B92A5" }));
var glass_default = SvgGlass;

// src/assets/icons/X.svg
import * as React49 from "react";
var SvgX = (props) => /* @__PURE__ */ React49.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React49.createElement("path", { d: "M12.8535 12.146C12.9 12.1925 12.9368 12.2476 12.962 12.3083C12.9871 12.369 13.0001 12.4341 13.0001 12.4998C13.0001 12.5655 12.9871 12.6305 12.962 12.6912C12.9368 12.7519 12.9 12.8071 12.8535 12.8535C12.8071 12.9 12.7519 12.9368 12.6912 12.962C12.6305 12.9871 12.5655 13.0001 12.4998 13.0001C12.4341 13.0001 12.369 12.9871 12.3083 12.962C12.2476 12.9368 12.1925 12.9 12.146 12.8535L7.99979 8.70666L3.85354 12.8535C3.75972 12.9474 3.63247 13.0001 3.49979 13.0001C3.36711 13.0001 3.23986 12.9474 3.14604 12.8535C3.05222 12.7597 2.99951 12.6325 2.99951 12.4998C2.99951 12.3671 3.05222 12.2399 3.14604 12.146L7.29291 7.99979L3.14604 3.85354C3.05222 3.75972 2.99951 3.63247 2.99951 3.49979C2.99951 3.36711 3.05222 3.23986 3.14604 3.14604C3.23986 3.05222 3.36711 2.99951 3.49979 2.99951C3.63247 2.99951 3.75972 3.05222 3.85354 3.14604L7.99979 7.29291L12.146 3.14604C12.2399 3.05222 12.3671 2.99951 12.4998 2.99951C12.6325 2.99951 12.7597 3.05222 12.8535 3.14604C12.9474 3.23986 13.0001 3.36711 13.0001 3.49979C13.0001 3.63247 12.9474 3.75972 12.8535 3.85354L8.70666 7.99979L12.8535 12.146Z", fill: "white" }));
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
  return /* @__PURE__ */ React50.createElement(
    SearchInputWrapper,
    {
      active: !!value || void 0,
      style: { ...containerStyle }
    },
    /* @__PURE__ */ React50.createElement(glass_default, null),
    /* @__PURE__ */ React50.createElement(
      StyledSearchInput,
      {
        style: { ...inputStyle },
        value,
        active: !!value || void 0,
        placeholder,
        onChange
      }
    ),
    showClear && /* @__PURE__ */ React50.createElement("div", { onClick: clear }, " ", /* @__PURE__ */ React50.createElement(X_default, { style: { cursor: "pointer" } }))
  );
}

// src/assets/icons/question.svg
import * as React51 from "react";
var SvgQuestion = (props) => /* @__PURE__ */ React51.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React51.createElement("path", { d: "M7.65625 9.84375C7.65625 9.97354 7.61776 10.1004 7.54565 10.2083C7.47354 10.3163 7.37105 10.4004 7.25114 10.45C7.13122 10.4997 6.99927 10.5127 6.87197 10.4874C6.74467 10.4621 6.62774 10.3996 6.53596 10.3078C6.44419 10.216 6.38168 10.0991 6.35636 9.97178C6.33104 9.84448 6.34404 9.71253 6.39371 9.59261C6.44338 9.4727 6.52749 9.37021 6.63541 9.2981C6.74333 9.22599 6.87021 9.1875 7 9.1875C7.17405 9.1875 7.34097 9.25664 7.46404 9.37971C7.58711 9.50278 7.65625 9.6697 7.65625 9.84375ZM7 3.9375C5.7936 3.9375 4.8125 4.8207 4.8125 5.90625V6.125C4.8125 6.24103 4.8586 6.35231 4.94064 6.43436C5.02269 6.51641 5.13397 6.5625 5.25 6.5625C5.36603 6.5625 5.47731 6.51641 5.55936 6.43436C5.64141 6.35231 5.6875 6.24103 5.6875 6.125V5.90625C5.6875 5.30469 6.27649 4.8125 7 4.8125C7.72352 4.8125 8.3125 5.30469 8.3125 5.90625C8.3125 6.50781 7.72352 7 7 7C6.88397 7 6.77269 7.04609 6.69064 7.12814C6.6086 7.21019 6.5625 7.32147 6.5625 7.4375V7.875C6.5625 7.99103 6.6086 8.10231 6.69064 8.18436C6.77269 8.26641 6.88397 8.3125 7 8.3125C7.11603 8.3125 7.22731 8.26641 7.30936 8.18436C7.39141 8.10231 7.4375 7.99103 7.4375 7.875V7.83562C8.435 7.65242 9.1875 6.85672 9.1875 5.90625C9.1875 4.8207 8.20641 3.9375 7 3.9375ZM12.6875 7C12.6875 8.12488 12.3539 9.2245 11.729 10.1598C11.104 11.0951 10.2158 11.8241 9.17651 12.2546C8.13726 12.685 6.99369 12.7977 5.89043 12.5782C4.78716 12.3588 3.77374 11.8171 2.97833 11.0217C2.18292 10.2263 1.64124 9.21284 1.42179 8.10958C1.20233 7.00631 1.31496 5.86274 1.74544 4.82349C2.17591 3.78423 2.90489 2.89597 3.8402 2.27102C4.7755 1.64607 5.87512 1.3125 7 1.3125C8.50793 1.31409 9.95365 1.91382 11.0199 2.98009C12.0862 4.04636 12.6859 5.49207 12.6875 7ZM11.8125 7C11.8125 6.04818 11.5303 5.11773 11.0014 4.32632C10.4726 3.53491 9.72104 2.91808 8.84167 2.55383C7.9623 2.18958 6.99466 2.09428 6.06113 2.27997C5.1276 2.46566 4.27009 2.92401 3.59705 3.59705C2.92401 4.27009 2.46566 5.12759 2.27997 6.06113C2.09428 6.99466 2.18959 7.9623 2.55383 8.84166C2.91808 9.72103 3.53491 10.4726 4.32632 11.0014C5.11773 11.5303 6.04818 11.8125 7 11.8125C8.27591 11.8111 9.49915 11.3036 10.4014 10.4014C11.3036 9.49915 11.8111 8.27591 11.8125 7Z", fill: "#96F2FF" }));
var question_default = SvgQuestion;

// src/design.system/tooltip/index.tsx
import React52, { useState as useState4 } from "react";
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
    return /* @__PURE__ */ React52.createElement(React52.Fragment, null, children);
  return /* @__PURE__ */ React52.createElement(TooltipContainer, { onMouseEnter: showTooltip, onMouseLeave: hideTooltip }, children, /* @__PURE__ */ React52.createElement(TooltipText, { isVisible }, /* @__PURE__ */ React52.createElement(Text, { size: 12, weight: 600 }, text2)), showIcon && /* @__PURE__ */ React52.createElement(Icon, null, /* @__PURE__ */ React52.createElement(question_default, null)));
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
  return /* @__PURE__ */ React53.createElement(React53.Fragment, null, label && /* @__PURE__ */ React53.createElement(LabelWrapper, null, /* @__PURE__ */ React53.createElement(Tooltip, { text: tooltip || "" }, /* @__PURE__ */ React53.createElement("div", { style: { display: "flex", gap: 4 } }, /* @__PURE__ */ React53.createElement(Text, { size: 14, weight: 600 }, label), required && /* @__PURE__ */ React53.createElement(Text, { size: 14, weight: 600 }, "*")))), /* @__PURE__ */ React53.createElement("div", { style: { height: 37, width }, ref: containerRef }, /* @__PURE__ */ React53.createElement(
    DropdownWrapper,
    {
      selected: isHover,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      onClick: toggleDropdown
    },
    /* @__PURE__ */ React53.createElement(DropdownHeader, null, selectedItem ? selectedItem.label : SELECTED_ITEM, /* @__PURE__ */ React53.createElement(expand_arrow_default, { className: `dropdown-arrow ${isOpen && "open"}` }))
  ), isOpen && /* @__PURE__ */ React53.createElement(DropdownBody, null, /* @__PURE__ */ React53.createElement(
    SearchInput,
    {
      value: searchFilter,
      onChange: (e) => setSearchFilter(e.target.value),
      placeholder: "Search",
      containerStyle: CONTAINER_STYLE,
      inputStyle: SEARCH_INPUT_STYLE,
      showClear: false
    }
  ), /* @__PURE__ */ React53.createElement(DropdownListWrapper, null, getDropdownList().map((item) => /* @__PURE__ */ React53.createElement(
    DropdownItem,
    {
      key: item.id,
      onClick: (e) => handleItemClick(item)
    },
    /* @__PURE__ */ React53.createElement(Text, null, item.label)
  ))))));
}

// src/design.system/switch/switch.tsx
import React54 from "react";

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
  return /* @__PURE__ */ React54.createElement(SwitchInputWrapper, null, /* @__PURE__ */ React54.createElement(
    SwitchToggleWrapper,
    {
      active: toggle || void 0,
      onClick: handleToggleChange
    },
    /* @__PURE__ */ React54.createElement(SwitchButtonWrapper, { disabled: toggle || void 0 })
  ), label && /* @__PURE__ */ React54.createElement(Text, { size: 14 }, label));
}

// src/design.system/checkbox/checkbox.tsx
import React56 from "react";

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
import * as React55 from "react";
var SvgCheckboxRect = (props) => /* @__PURE__ */ React55.createElement("svg", { width: 18, height: 18, viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React55.createElement("rect", { x: 0.5, y: 0.5, width: 17, height: 17, rx: 3.5, fill: "#96F2FF", stroke: "#96F2FF" }), /* @__PURE__ */ React55.createElement("path", { d: "M13.7727 6L7.39773 12.375L4.5 9.47727", stroke: "#132330", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }));
var checkbox_rect_default = SvgCheckboxRect;

// src/design.system/checkbox/checkbox.tsx
function Checkbox({
  onChange,
  value,
  label = "",
  disabled = false
}) {
  return /* @__PURE__ */ React56.createElement(CheckboxWrapper, { disabled: disabled || void 0, onClick: onChange }, value ? /* @__PURE__ */ React56.createElement(checkbox_rect_default, null) : /* @__PURE__ */ React56.createElement(CheckboxItem, null), /* @__PURE__ */ React56.createElement(Text, { size: 14 }, label));
}

// src/design.system/selected.counter/selected.counter.tsx
import React57 from "react";

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
  return /* @__PURE__ */ React57.createElement(SelectedCounterWrapper, null, selected !== 0 && /* @__PURE__ */ React57.createElement(check_default, null), /* @__PURE__ */ React57.createElement(Text, { size: 13, weight: 500 }, `${selected} / ${total}`));
}

// src/design.system/link/link.tsx
import React58 from "react";
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
  return /* @__PURE__ */ React58.createElement(LinkContainer, { onClick }, /* @__PURE__ */ React58.createElement(Text, { size: fontSize, color }, value));
}

// src/design.system/image/image.tsx
import Image from "next/image";
import React59 from "react";
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
  return /* @__PURE__ */ React59.createElement(
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
import React62, { useState as useState6 } from "react";

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
import * as React60 from "react";
var SvgEyeOpen = (props) => /* @__PURE__ */ React60.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React60.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ React60.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React60.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ React60.createElement("path", { d: "M3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14M17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14Z", stroke: "#fff", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })));
var eye_open_default = SvgEyeOpen;

// src/assets/icons/eye-close.svg
import * as React61 from "react";
var SvgEyeClose = (props) => /* @__PURE__ */ React61.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React61.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ React61.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React61.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ React61.createElement("path", { d: "M9.60997 9.60714C8.05503 10.4549 7 12.1043 7 14C7 16.7614 9.23858 19 12 19C13.8966 19 15.5466 17.944 16.3941 16.3878M21 14C21 9.02944 16.9706 5 12 5C11.5582 5 11.1238 5.03184 10.699 5.09334M3 14C3 11.0069 4.46104 8.35513 6.70883 6.71886M3 3L21 21", stroke: "#fff", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })));
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
  return /* @__PURE__ */ React62.createElement("div", { style: { ...style } }, label && /* @__PURE__ */ React62.createElement(LabelWrapper2, null, /* @__PURE__ */ React62.createElement(Tooltip, { text: tooltip || "" }, /* @__PURE__ */ React62.createElement("div", { style: { display: "flex", gap: 4 } }, /* @__PURE__ */ React62.createElement(Text, { size: 14, weight: 600 }, label), required && /* @__PURE__ */ React62.createElement(Text, { size: 14, weight: 600 }, "*")))), /* @__PURE__ */ React62.createElement(
    StyledInputContainer,
    {
      active: !!value || void 0,
      error: error ? true : void 0
    },
    /* @__PURE__ */ React62.createElement(
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
    type === "password" && /* @__PURE__ */ React62.createElement(DisplayIconsWrapper, { onClick: () => setShowPassword(!showPassword) }, !showPassword ? /* @__PURE__ */ React62.createElement(eye_open_default, { width: 16, height: 16 }) : /* @__PURE__ */ React62.createElement(eye_close_default, { width: 16, height: 16 }))
  ), error && /* @__PURE__ */ React62.createElement(ErrorWrapper, null, /* @__PURE__ */ React62.createElement(Text, { size: 14, color: "#FD3F3F" }, error)));
}

// src/design.system/input/action.input.tsx
import React63 from "react";
function ActionInput({
  value,
  onChange,
  style = {},
  onAction
}) {
  function handleChange(event) {
    onChange(event.target.value);
  }
  return /* @__PURE__ */ React63.createElement(React63.Fragment, null, /* @__PURE__ */ React63.createElement(StyledActionInputContainer, { style: { ...style } }, /* @__PURE__ */ React63.createElement(
    StyledActionInput,
    {
      value,
      onChange: handleChange,
      autoComplete: "off"
    }
  ), /* @__PURE__ */ React63.createElement(Button, { onClick: onAction }, /* @__PURE__ */ React63.createElement(Text, { size: 14, weight: 500, color: palette_default.text.dark_button }, "Save"))));
}

// src/design.system/video/video.tsx
import React66, { useState as useState7 } from "react";

// src/assets/icons/close.svg
import * as React64 from "react";
var SvgClose = (props) => /* @__PURE__ */ React64.createElement("svg", { width: 26, height: 26, viewBox: "0 0 26 26", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React64.createElement("path", { d: "M17.7075 9.7075L14.4138 13L17.7075 16.2925C17.8004 16.3854 17.8741 16.4957 17.9244 16.6171C17.9747 16.7385 18.0006 16.8686 18.0006 17C18.0006 17.1314 17.9747 17.2615 17.9244 17.3829C17.8741 17.5043 17.8004 17.6146 17.7075 17.7075C17.6146 17.8004 17.5043 17.8741 17.3829 17.9244C17.2615 17.9747 17.1314 18.0006 17 18.0006C16.8686 18.0006 16.7385 17.9747 16.6171 17.9244C16.4957 17.8741 16.3854 17.8004 16.2925 17.7075L13 14.4137L9.70751 17.7075C9.6146 17.8004 9.5043 17.8741 9.3829 17.9244C9.26151 17.9747 9.1314 18.0006 9.00001 18.0006C8.86861 18.0006 8.7385 17.9747 8.61711 17.9244C8.49572 17.8741 8.38542 17.8004 8.29251 17.7075C8.1996 17.6146 8.12589 17.5043 8.07561 17.3829C8.02533 17.2615 7.99945 17.1314 7.99945 17C7.99945 16.8686 8.02533 16.7385 8.07561 16.6171C8.12589 16.4957 8.1996 16.3854 8.29251 16.2925L11.5863 13L8.29251 9.7075C8.10486 9.51986 7.99945 9.26536 7.99945 9C7.99945 8.73464 8.10486 8.48014 8.29251 8.2925C8.48015 8.10486 8.73464 7.99944 9.00001 7.99944C9.26537 7.99944 9.51987 8.10486 9.70751 8.2925L13 11.5863L16.2925 8.2925C16.3854 8.19959 16.4957 8.12589 16.6171 8.07561C16.7385 8.02532 16.8686 7.99944 17 7.99944C17.1314 7.99944 17.2615 8.02532 17.3829 8.07561C17.5043 8.12589 17.6146 8.19959 17.7075 8.2925C17.8004 8.38541 17.8741 8.49571 17.9244 8.6171C17.9747 8.7385 18.0006 8.8686 18.0006 9C18.0006 9.1314 17.9747 9.2615 17.9244 9.3829C17.8741 9.50429 17.8004 9.61459 17.7075 9.7075ZM26 13C26 15.5712 25.2376 18.0846 23.8091 20.2224C22.3807 22.3603 20.3503 24.0265 17.9749 25.0104C15.5995 25.9944 12.9856 26.2518 10.4638 25.7502C7.94208 25.2486 5.6257 24.0105 3.80762 22.1924C1.98953 20.3743 0.751405 18.0579 0.249797 15.5362C-0.251811 13.0144 0.0056327 10.4006 0.989572 8.02512C1.97351 5.64968 3.63975 3.61935 5.77759 2.1909C7.91543 0.762437 10.4288 0 13 0C16.4467 0.00363977 19.7512 1.37445 22.1884 3.81163C24.6256 6.24882 25.9964 9.5533 26 13ZM24 13C24 10.8244 23.3549 8.69767 22.1462 6.88873C20.9375 5.07979 19.2195 3.66989 17.2095 2.83733C15.1995 2.00476 12.9878 1.78692 10.854 2.21136C8.72022 2.6358 6.76021 3.68345 5.22183 5.22183C3.68345 6.7602 2.63581 8.72022 2.21137 10.854C1.78693 12.9878 2.00477 15.1995 2.83733 17.2095C3.66989 19.2195 5.07979 20.9375 6.88873 22.1462C8.69767 23.3549 10.8244 24 13 24C15.9164 23.9967 18.7123 22.8367 20.7745 20.7745C22.8367 18.7123 23.9967 15.9164 24 13Z", fill: "white" }));
var close_default = SvgClose;

// src/assets/icons/player.svg
import * as React65 from "react";
var SvgPlayer = (props) => /* @__PURE__ */ React65.createElement("svg", { width: 80, height: 80, viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React65.createElement("ellipse", { cx: 39.9999, cy: 40, rx: 40, ry: 40, fill: "white" }), /* @__PURE__ */ React65.createElement("path", { d: "M53.3383 39.9984C53.3392 40.3466 53.2468 40.6891 53.0703 40.9926C52.8937 41.2961 52.6389 41.5503 52.3307 41.7303L33.2292 53.0298C32.9071 53.2205 32.5383 53.3246 32.1607 53.3314C31.7832 53.3381 31.4106 53.2473 31.0815 53.0683C30.7555 52.892 30.4839 52.635 30.2947 52.3236C30.1055 52.0122 30.0055 51.6577 30.0049 51.2965V28.7002C30.0055 28.339 30.1055 27.9845 30.2947 27.6732C30.4839 27.3618 30.7555 27.1047 31.0815 26.9285C31.4106 26.7495 31.7832 26.6586 32.1607 26.6654C32.5383 26.6722 32.9071 26.7763 33.2292 26.9669L52.3307 38.2664C52.6389 38.4465 52.8937 38.7006 53.0703 39.0041C53.2468 39.3076 53.3392 39.6501 53.3383 39.9984Z", fill: "#132330" }));
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
  const renderSmallView = () => /* @__PURE__ */ React66.createElement(React66.Fragment, null, /* @__PURE__ */ React66.createElement(Text, { size: 16, weight: 600 }, title), /* @__PURE__ */ React66.createElement(ImagePreviewWrapper, { onClick: handleClick, url: thumbnail }, /* @__PURE__ */ React66.createElement(PlayerIconWrapper, null, /* @__PURE__ */ React66.createElement(player_default, { width: 30 }))));
  const renderLargeView = () => /* @__PURE__ */ React66.createElement(LargeVideoContainer, null, /* @__PURE__ */ React66.createElement(LargeVideoHeader, null, /* @__PURE__ */ React66.createElement(Text, { size: 20, weight: 600 }, title), /* @__PURE__ */ React66.createElement(close_default, { onClick: handleClose, style: { cursor: "pointer" } })), !pause ? /* @__PURE__ */ React66.createElement(StyledLargeVideo, { src: videoSrc, autoPlay: true, controls: true }) : /* @__PURE__ */ React66.createElement(
    ImagePreviewWrapper,
    {
      url: thumbnail,
      style: { width: 980, height: 560 },
      onClick: () => setPause(false)
    },
    /* @__PURE__ */ React66.createElement(LargePlayerIconWrapper, null, /* @__PURE__ */ React66.createElement(player_default, { width: 80 }))
  ));
  return /* @__PURE__ */ React66.createElement("div", null, isLarge ? renderLargeView() : renderSmallView());
}

// src/design.system/loader/loader.tsx
import React67 from "react";

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
  return /* @__PURE__ */ React67.createElement(LoaderWrapper, null, /* @__PURE__ */ React67.createElement(StyledLoader, { width, height }));
}

// src/design.system/notification/notification.tsx
import React71, { useEffect as useEffect5 } from "react";

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
import * as React68 from "react";
var SvgXBlue = (props) => /* @__PURE__ */ React68.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React68.createElement("path", { d: "M12.8535 12.146C12.9 12.1925 12.9368 12.2476 12.962 12.3083C12.9871 12.369 13.0001 12.4341 13.0001 12.4998C13.0001 12.5655 12.9871 12.6305 12.962 12.6912C12.9368 12.7519 12.9 12.8071 12.8535 12.8535C12.8071 12.9 12.7519 12.9368 12.6912 12.962C12.6305 12.9871 12.5655 13.0001 12.4998 13.0001C12.4341 13.0001 12.369 12.9871 12.3083 12.962C12.2476 12.9368 12.1925 12.9 12.146 12.8535L7.99979 8.70666L3.85354 12.8535C3.75972 12.9474 3.63247 13.0001 3.49979 13.0001C3.36711 13.0001 3.23986 12.9474 3.14604 12.8535C3.05222 12.7597 2.99951 12.6325 2.99951 12.4998C2.99951 12.3671 3.05222 12.2399 3.14604 12.146L7.29291 7.99979L3.14604 3.85354C3.05222 3.75972 2.99951 3.63247 2.99951 3.49979C2.99951 3.36711 3.05222 3.23986 3.14604 3.14604C3.23986 3.05222 3.36711 2.99951 3.49979 2.99951C3.63247 2.99951 3.75972 3.05222 3.85354 3.14604L7.99979 7.29291L12.146 3.14604C12.2399 3.05222 12.3671 2.99951 12.4998 2.99951C12.6325 2.99951 12.7597 3.05222 12.8535 3.14604C12.9474 3.23986 13.0001 3.36711 13.0001 3.49979C13.0001 3.63247 12.9474 3.75972 12.8535 3.85354L8.70666 7.99979L12.8535 12.146Z", fill: "#96F2FF" }));
var X_blue_default = SvgXBlue;

// src/assets/icons/success-notification.svg
import * as React69 from "react";
var SvgSuccessNotification = (props) => /* @__PURE__ */ React69.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React69.createElement("rect", { width: 24, height: 24, rx: 6, fill: "url(#paint0_linear_157_245)" }), /* @__PURE__ */ React69.createElement("rect", { width: 24, height: 24, rx: 6, fill: "url(#paint1_radial_157_245)", fillOpacity: 0.4 }), /* @__PURE__ */ React69.createElement("path", { d: "M18.3535 8.85354L10.3535 16.8535C10.3071 16.9 10.252 16.9369 10.1913 16.9621C10.1306 16.9872 10.0655 17.0002 9.99979 17.0002C9.93408 17.0002 9.86902 16.9872 9.80832 16.9621C9.74762 16.9369 9.69248 16.9 9.64604 16.8535L6.14604 13.3535C6.05222 13.2597 5.99951 13.1325 5.99951 12.9998C5.99951 12.8671 6.05222 12.7399 6.14604 12.646C6.23986 12.5522 6.36711 12.4995 6.49979 12.4995C6.63247 12.4995 6.75972 12.5522 6.85354 12.646L9.99979 15.7929L17.646 8.14604C17.7399 8.05222 17.8671 7.99951 17.9998 7.99951C18.1325 7.99951 18.2597 8.05222 18.3535 8.14604C18.4474 8.23986 18.5001 8.36711 18.5001 8.49979C18.5001 8.63247 18.4474 8.75972 18.3535 8.85354Z", fill: "#0EE6F3" }), /* @__PURE__ */ React69.createElement("defs", null, /* @__PURE__ */ React69.createElement("linearGradient", { id: "paint0_linear_157_245", x1: 12, y1: 0, x2: 12, y2: 24, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React69.createElement("stop", { stopColor: "#365963" }), /* @__PURE__ */ React69.createElement("stop", { offset: 1, stopColor: "#2B2F56" })), /* @__PURE__ */ React69.createElement("radialGradient", { id: "paint1_radial_157_245", cx: 0, cy: 0, r: 1, gradientUnits: "userSpaceOnUse", gradientTransform: "translate(24) rotate(120.009) scale(17.3221 18.6093)" }, /* @__PURE__ */ React69.createElement("stop", { stopColor: "#96F2FF" }), /* @__PURE__ */ React69.createElement("stop", { offset: 0.619146, stopColor: "#96F2FF", stopOpacity: 0 }))));
var success_notification_default = SvgSuccessNotification;

// src/assets/icons/error-notification.svg
import * as React70 from "react";
var SvgErrorNotification = (props) => /* @__PURE__ */ React70.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React70.createElement("rect", { width: 24, height: 24, rx: 6, fill: "url(#paint0_linear_157_648)" }), /* @__PURE__ */ React70.createElement("path", { d: "M12 5.5C10.7144 5.5 9.45772 5.88122 8.3888 6.59545C7.31988 7.30968 6.48676 8.32484 5.99479 9.51256C5.50282 10.7003 5.37409 12.0072 5.6249 13.2681C5.8757 14.529 6.49477 15.6872 7.40381 16.5962C8.31285 17.5052 9.47104 18.1243 10.7319 18.3751C11.9928 18.6259 13.2997 18.4972 14.4874 18.0052C15.6752 17.5132 16.6903 16.6801 17.4046 15.6112C18.1188 14.5423 18.5 13.2856 18.5 12C18.4982 10.2767 17.8128 8.62441 16.5942 7.40582C15.3756 6.18722 13.7234 5.50182 12 5.5ZM12 17.5C10.9122 17.5 9.84884 17.1774 8.94437 16.5731C8.0399 15.9687 7.33495 15.1098 6.91867 14.1048C6.50238 13.0998 6.39347 11.9939 6.60568 10.927C6.8179 9.86011 7.34173 8.8801 8.11092 8.11091C8.8801 7.34172 9.86011 6.8179 10.927 6.60568C11.9939 6.39346 13.0998 6.50238 14.1048 6.91866C15.1098 7.33494 15.9687 8.03989 16.5731 8.94436C17.1774 9.84883 17.5 10.9122 17.5 12C17.4983 13.4582 16.9184 14.8562 15.8873 15.8873C14.8562 16.9184 13.4582 17.4983 12 17.5ZM11.5 12.5V9C11.5 8.86739 11.5527 8.74021 11.6464 8.64645C11.7402 8.55268 11.8674 8.5 12 8.5C12.1326 8.5 12.2598 8.55268 12.3536 8.64645C12.4473 8.74021 12.5 8.86739 12.5 9V12.5C12.5 12.6326 12.4473 12.7598 12.3536 12.8536C12.2598 12.9473 12.1326 13 12 13C11.8674 13 11.7402 12.9473 11.6464 12.8536C11.5527 12.7598 11.5 12.6326 11.5 12.5ZM12.75 14.75C12.75 14.8983 12.706 15.0433 12.6236 15.1667C12.5412 15.29 12.4241 15.3861 12.287 15.4429C12.15 15.4997 11.9992 15.5145 11.8537 15.4856C11.7082 15.4566 11.5746 15.3852 11.4697 15.2803C11.3648 15.1754 11.2934 15.0418 11.2644 14.8963C11.2355 14.7508 11.2503 14.6 11.3071 14.463C11.3639 14.3259 11.46 14.2088 11.5833 14.1264C11.7067 14.044 11.8517 14 12 14C12.1989 14 12.3897 14.079 12.5303 14.2197C12.671 14.3603 12.75 14.5511 12.75 14.75Z", fill: "white" }), /* @__PURE__ */ React70.createElement("defs", null, /* @__PURE__ */ React70.createElement("linearGradient", { id: "paint0_linear_157_648", x1: 12, y1: 0, x2: 12, y2: 24, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React70.createElement("stop", { stopColor: "#FD3F3F" }), /* @__PURE__ */ React70.createElement("stop", { offset: 1, stopColor: "#2B2F56" }))));
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
        return /* @__PURE__ */ React71.createElement(success_notification_default, null);
      case "error":
        return /* @__PURE__ */ React71.createElement(error_notification_default, null);
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
  return /* @__PURE__ */ React71.createElement(NotificationContainer, null, /* @__PURE__ */ React71.createElement(StyledNotification, { style: getNotificationStyle() }, getIcon(), /* @__PURE__ */ React71.createElement(Text, { weight: 500, size: 14 }, message), /* @__PURE__ */ React71.createElement(X_blue_default, { onClick: onClose })));
}

// src/design.system/data.flow/index.tsx
import React86, { useEffect as useEffect7 } from "react";
import ReactFlow, {
  Background,
  useReactFlow,
  ReactFlowProvider
} from "reactflow";

// src/design.system/data.flow/action.node.tsx
import React72, { memo } from "react";
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
  return /* @__PURE__ */ React72.createElement(ActionContainer, null, /* @__PURE__ */ React72.createElement(
    Handle,
    {
      type: "target",
      position: Position.Left,
      id: "b",
      isConnectable,
      style: { visibility: "hidden" }
    }
  ), ActionIcon && /* @__PURE__ */ React72.createElement(IconWrapper, null, /* @__PURE__ */ React72.createElement(ActionIcon, null)), /* @__PURE__ */ React72.createElement(TextWrapper3, null, /* @__PURE__ */ React72.createElement(Text, { size: 14, weight: 600 }, data?.spec?.actionName || "Action")), /* @__PURE__ */ React72.createElement(
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
    data.spec?.signals.map((monitor) => /* @__PURE__ */ React72.createElement(
      SignalIndicator,
      {
        key: monitor,
        backgroundColor: palette_default.colors[monitor.toLowerCase()]
      }
    ))
  ), /* @__PURE__ */ React72.createElement(
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
import React73 from "react";
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
  return /* @__PURE__ */ React73.createElement(FlickerWrapper, null, /* @__PURE__ */ React73.createElement(InnerWrapper, null, /* @__PURE__ */ React73.createElement(LogoContainer, null, /* @__PURE__ */ React73.createElement(
    "img",
    {
      src: "https://d1n7d4xz7fr8b4.cloudfront.net/logo.png",
      alt: "logo",
      style: { borderRadius: "50%", width: 64, height: 64 }
    }
  ))), /* @__PURE__ */ React73.createElement(
    Handle2,
    {
      type: "target",
      position: Position2.Left,
      style: { visibility: "hidden" }
    }
  ), /* @__PURE__ */ React73.createElement(
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
import React76, { memo as memo2 } from "react";
import { Handle as Handle3, Position as Position3 } from "reactflow";
import { styled as styled22 } from "styled-components";

// src/assets/icons/overview/middleware.svg
import * as React74 from "react";

// src/assets/icons/overview/folder.svg
import * as React75 from "react";
var SvgFolder = (props) => /* @__PURE__ */ React75.createElement("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React75.createElement("rect", { width: 32, height: 32, rx: 4, fill: "url(#paint0_linear_280_5350)" }), /* @__PURE__ */ React75.createElement("rect", { width: 32, height: 32, rx: 4, fill: "url(#paint1_radial_280_5350)", fillOpacity: 0.4 }), /* @__PURE__ */ React75.createElement("path", { opacity: 0.2, d: "M25.75 11.5V19.8334C25.75 20.0102 25.6798 20.1798 25.5548 20.3048C25.4298 20.4298 25.2602 20.5 25.0834 20.5H22.75V14.5C22.75 14.3011 22.671 14.1103 22.5303 13.9697C22.3897 13.829 22.1989 13.75 22 13.75H15.5003C15.338 13.75 15.1801 13.6974 15.0503 13.6L12.4497 11.65C12.3199 11.5526 12.162 11.5 11.9997 11.5H10V9.25C10 9.05109 10.079 8.86032 10.2197 8.71967C10.3603 8.57902 10.5511 8.5 10.75 8.5H14.9997C15.162 8.5 15.3199 8.55263 15.4497 8.65L18.0503 10.6C18.1801 10.6974 18.338 10.75 18.5003 10.75H25C25.1989 10.75 25.3897 10.829 25.5303 10.9697C25.671 11.1103 25.75 11.3011 25.75 11.5Z", fill: "#96F2FF" }), /* @__PURE__ */ React75.createElement("path", { d: "M25 10H18.5003L15.8997 8.05C15.6397 7.85599 15.3241 7.7508 14.9997 7.75H10.75C10.3522 7.75 9.97064 7.90804 9.68934 8.18934C9.40804 8.47064 9.25 8.85218 9.25 9.25V10.75H7.75C7.35218 10.75 6.97064 10.908 6.68934 11.1893C6.40804 11.4706 6.25 11.8522 6.25 12.25V22.75C6.25 23.1478 6.40804 23.5294 6.68934 23.8107C6.97064 24.092 7.35218 24.25 7.75 24.25H22.0834C22.459 24.2495 22.819 24.1001 23.0846 23.8346C23.3501 23.569 23.4995 23.209 23.5 22.8334V21.25H25.0834C25.459 21.2495 25.819 21.1001 26.0846 20.8346C26.3501 20.569 26.4995 20.209 26.5 19.8334V11.5C26.5 11.1022 26.342 10.7206 26.0607 10.4393C25.7794 10.158 25.3978 10 25 10ZM22 22.75H7.75V12.25H11.9997L14.6003 14.2C14.8603 14.394 15.1759 14.4992 15.5003 14.5H22V22.75ZM25 19.75H23.5V14.5C23.5 14.1022 23.342 13.7206 23.0607 13.4393C22.7794 13.158 22.3978 13 22 13H15.5003L12.8997 11.05C12.6397 10.856 12.3241 10.7508 11.9997 10.75H10.75V9.25H14.9997L17.6003 11.2C17.8603 11.394 18.1759 11.4992 18.5003 11.5H25V19.75Z", fill: "#96F2FF" }), /* @__PURE__ */ React75.createElement("rect", { x: 0.375, y: 0.375, width: 31.25, height: 31.25, rx: 3.625, stroke: "url(#paint2_linear_280_5350)", strokeOpacity: 0.5, strokeWidth: 0.75 }), /* @__PURE__ */ React75.createElement("defs", null, /* @__PURE__ */ React75.createElement("linearGradient", { id: "paint0_linear_280_5350", x1: 16, y1: 0, x2: 16, y2: 32, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React75.createElement("stop", { stopColor: "#2E4C55" }), /* @__PURE__ */ React75.createElement("stop", { offset: 1, stopColor: "#303355" })), /* @__PURE__ */ React75.createElement("radialGradient", { id: "paint1_radial_280_5350", cx: 0, cy: 0, r: 1, gradientUnits: "userSpaceOnUse", gradientTransform: "translate(32 -1.19209e-06) rotate(120.009) scale(23.0961 24.8123)" }, /* @__PURE__ */ React75.createElement("stop", { stopColor: "#96F2FF" }), /* @__PURE__ */ React75.createElement("stop", { offset: 0.619146, stopColor: "#96F2FF", stopOpacity: 0 })), /* @__PURE__ */ React75.createElement("linearGradient", { id: "paint2_linear_280_5350", x1: 16, y1: 0, x2: 16, y2: 32, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React75.createElement("stop", { stopColor: "#96F2FF" }), /* @__PURE__ */ React75.createElement("stop", { offset: 1, stopColor: "#96F2FF", stopOpacity: 0 }))));
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
  return /* @__PURE__ */ React76.createElement(NamespaceContainer, null, /* @__PURE__ */ React76.createElement(folder_default, { width: 32 }), /* @__PURE__ */ React76.createElement(TextWrapper4, null, /* @__PURE__ */ React76.createElement(Text, { size: 14, weight: 600 }, data?.name), data?.totalAppsInstrumented && /* @__PURE__ */ React76.createElement(
    Text,
    {
      color: "#8b92a5"
    },
    `${data.totalAppsInstrumented} Apps Instrumented`
  )), /* @__PURE__ */ React76.createElement(
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
import React83 from "react";
import { styled as styled23 } from "styled-components";
import { Handle as Handle4, Position as Position4 } from "reactflow";

// src/assets/icons/logs-grey.svg
import * as React77 from "react";
var SvgLogsGrey2 = (props) => /* @__PURE__ */ React77.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React77.createElement("path", { d: "M2 4C2 3.86739 2.05268 3.74021 2.14645 3.64645C2.24021 3.55268 2.36739 3.5 2.5 3.5H13.5C13.6326 3.5 13.7598 3.55268 13.8536 3.64645C13.9473 3.74021 14 3.86739 14 4C14 4.13261 13.9473 4.25979 13.8536 4.35355C13.7598 4.44732 13.6326 4.5 13.5 4.5H2.5C2.36739 4.5 2.24021 4.44732 2.14645 4.35355C2.05268 4.25979 2 4.13261 2 4ZM2.5 7H10.5C10.6326 7 10.7598 6.94732 10.8536 6.85355C10.9473 6.75979 11 6.63261 11 6.5C11 6.36739 10.9473 6.24021 10.8536 6.14645C10.7598 6.05268 10.6326 6 10.5 6H2.5C2.36739 6 2.24021 6.05268 2.14645 6.14645C2.05268 6.24021 2 6.36739 2 6.5C2 6.63261 2.05268 6.75979 2.14645 6.85355C2.24021 6.94732 2.36739 7 2.5 7ZM13.5 8.5H2.5C2.36739 8.5 2.24021 8.55268 2.14645 8.64645C2.05268 8.74021 2 8.86739 2 9C2 9.13261 2.05268 9.25979 2.14645 9.35355C2.24021 9.44732 2.36739 9.5 2.5 9.5H13.5C13.6326 9.5 13.7598 9.44732 13.8536 9.35355C13.9473 9.25979 14 9.13261 14 9C14 8.86739 13.9473 8.74021 13.8536 8.64645C13.7598 8.55268 13.6326 8.5 13.5 8.5ZM10.5 11H2.5C2.36739 11 2.24021 11.0527 2.14645 11.1464C2.05268 11.2402 2 11.3674 2 11.5C2 11.6326 2.05268 11.7598 2.14645 11.8536C2.24021 11.9473 2.36739 12 2.5 12H10.5C10.6326 12 10.7598 11.9473 10.8536 11.8536C10.9473 11.7598 11 11.6326 11 11.5C11 11.3674 10.9473 11.2402 10.8536 11.1464C10.7598 11.0527 10.6326 11 10.5 11Z", fill: "#8B92A5" }));
var logs_grey_default2 = SvgLogsGrey2;

// src/assets/icons/logs-blue.svg
import * as React78 from "react";
var SvgLogsBlue2 = (props) => /* @__PURE__ */ React78.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React78.createElement("path", { d: "M2 4C2 3.86739 2.05268 3.74021 2.14645 3.64645C2.24021 3.55268 2.36739 3.5 2.5 3.5H13.5C13.6326 3.5 13.7598 3.55268 13.8536 3.64645C13.9473 3.74021 14 3.86739 14 4C14 4.13261 13.9473 4.25979 13.8536 4.35355C13.7598 4.44732 13.6326 4.5 13.5 4.5H2.5C2.36739 4.5 2.24021 4.44732 2.14645 4.35355C2.05268 4.25979 2 4.13261 2 4ZM2.5 7H10.5C10.6326 7 10.7598 6.94732 10.8536 6.85355C10.9473 6.75979 11 6.63261 11 6.5C11 6.36739 10.9473 6.24021 10.8536 6.14645C10.7598 6.05268 10.6326 6 10.5 6H2.5C2.36739 6 2.24021 6.05268 2.14645 6.14645C2.05268 6.24021 2 6.36739 2 6.5C2 6.63261 2.05268 6.75979 2.14645 6.85355C2.24021 6.94732 2.36739 7 2.5 7ZM13.5 8.5H2.5C2.36739 8.5 2.24021 8.55268 2.14645 8.64645C2.05268 8.74021 2 8.86739 2 9C2 9.13261 2.05268 9.25979 2.14645 9.35355C2.24021 9.44732 2.36739 9.5 2.5 9.5H13.5C13.6326 9.5 13.7598 9.44732 13.8536 9.35355C13.9473 9.25979 14 9.13261 14 9C14 8.86739 13.9473 8.74021 13.8536 8.64645C13.7598 8.55268 13.6326 8.5 13.5 8.5ZM10.5 11H2.5C2.36739 11 2.24021 11.0527 2.14645 11.1464C2.05268 11.2402 2 11.3674 2 11.5C2 11.6326 2.05268 11.7598 2.14645 11.8536C2.24021 11.9473 2.36739 12 2.5 12H10.5C10.6326 12 10.7598 11.9473 10.8536 11.8536C10.9473 11.7598 11 11.6326 11 11.5C11 11.3674 10.9473 11.2402 10.8536 11.1464C10.7598 11.0527 10.6326 11 10.5 11Z", fill: "#96F2FF" }));
var logs_blue_default2 = SvgLogsBlue2;

// src/assets/icons/chart-line-grey.svg
import * as React79 from "react";
var SvgChartLineGrey2 = (props) => /* @__PURE__ */ React79.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React79.createElement("path", { d: "M14.5 13C14.5 13.1326 14.4473 13.2598 14.3536 13.3536C14.2598 13.4473 14.1326 13.5 14 13.5H2C1.86739 13.5 1.74021 13.4473 1.64645 13.3536C1.55268 13.2598 1.5 13.1326 1.5 13V3C1.5 2.86739 1.55268 2.74021 1.64645 2.64645C1.74021 2.55268 1.86739 2.5 2 2.5C2.13261 2.5 2.25979 2.55268 2.35355 2.64645C2.44732 2.74021 2.5 2.86739 2.5 3V8.89812L5.67063 6.125C5.7569 6.04947 5.86652 6.0059 5.9811 6.00157C6.09569 5.99725 6.20828 6.03244 6.3 6.10125L9.97563 8.85812L13.6706 5.625C13.7191 5.57704 13.7768 5.5395 13.8403 5.51467C13.9038 5.48985 13.9717 5.47827 14.0398 5.48065C14.1079 5.48303 14.1749 5.49931 14.2365 5.5285C14.2981 5.55769 14.3531 5.59917 14.398 5.65038C14.443 5.7016 14.4771 5.76148 14.4981 5.82633C14.5191 5.89119 14.5266 5.95965 14.5201 6.02752C14.5137 6.09538 14.4935 6.16122 14.4607 6.22097C14.4279 6.28073 14.3832 6.33314 14.3294 6.375L10.3294 9.875C10.2431 9.95053 10.1335 9.9941 10.0189 9.99843C9.90431 10.0028 9.79172 9.96756 9.7 9.89875L6.02437 7.14313L2.5 10.2269V12.5H14C14.1326 12.5 14.2598 12.5527 14.3536 12.6464C14.4473 12.7402 14.5 12.8674 14.5 13Z", fill: "#8B92A5" }));
var chart_line_grey_default2 = SvgChartLineGrey2;

// src/assets/icons/chart-line-blue.svg
import * as React80 from "react";
var SvgChartLineBlue2 = (props) => /* @__PURE__ */ React80.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React80.createElement("path", { d: "M14.5 13C14.5 13.1326 14.4473 13.2598 14.3536 13.3536C14.2598 13.4473 14.1326 13.5 14 13.5H2C1.86739 13.5 1.74021 13.4473 1.64645 13.3536C1.55268 13.2598 1.5 13.1326 1.5 13V3C1.5 2.86739 1.55268 2.74021 1.64645 2.64645C1.74021 2.55268 1.86739 2.5 2 2.5C2.13261 2.5 2.25979 2.55268 2.35355 2.64645C2.44732 2.74021 2.5 2.86739 2.5 3V8.89812L5.67063 6.125C5.7569 6.04947 5.86652 6.0059 5.9811 6.00157C6.09569 5.99725 6.20828 6.03244 6.3 6.10125L9.97563 8.85812L13.6706 5.625C13.7191 5.57704 13.7768 5.5395 13.8403 5.51467C13.9038 5.48985 13.9717 5.47827 14.0398 5.48065C14.1079 5.48303 14.1749 5.49931 14.2365 5.5285C14.2981 5.55769 14.3531 5.59917 14.398 5.65038C14.443 5.7016 14.4771 5.76148 14.4981 5.82633C14.5191 5.89119 14.5266 5.95965 14.5201 6.02752C14.5137 6.09538 14.4935 6.16122 14.4607 6.22097C14.4279 6.28073 14.3832 6.33314 14.3294 6.375L10.3294 9.875C10.2431 9.95053 10.1335 9.9941 10.0189 9.99843C9.90431 10.0028 9.79172 9.96756 9.7 9.89875L6.02437 7.14313L2.5 10.2269V12.5H14C14.1326 12.5 14.2598 12.5527 14.3536 12.6464C14.4473 12.7402 14.5 12.8674 14.5 13Z", fill: "#96F2FF" }));
var chart_line_blue_default2 = SvgChartLineBlue2;

// src/assets/icons/tree-structure-grey.svg
import * as React81 from "react";
var SvgTreeStructureGrey2 = (props) => /* @__PURE__ */ React81.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React81.createElement("path", { d: "M10.5 7H13.5C13.7652 7 14.0196 6.89464 14.2071 6.70711C14.3946 6.51957 14.5 6.26522 14.5 6V3C14.5 2.73478 14.3946 2.48043 14.2071 2.29289C14.0196 2.10536 13.7652 2 13.5 2H10.5C10.2348 2 9.98043 2.10536 9.79289 2.29289C9.60536 2.48043 9.5 2.73478 9.5 3V4H9C8.46957 4 7.96086 4.21071 7.58579 4.58579C7.21071 4.96086 7 5.46957 7 6V7.5H5V7C5 6.73478 4.89464 6.48043 4.70711 6.29289C4.51957 6.10536 4.26522 6 4 6H2C1.73478 6 1.48043 6.10536 1.29289 6.29289C1.10536 6.48043 1 6.73478 1 7V9C1 9.26522 1.10536 9.51957 1.29289 9.70711C1.48043 9.89464 1.73478 10 2 10H4C4.26522 10 4.51957 9.89464 4.70711 9.70711C4.89464 9.51957 5 9.26522 5 9V8.5H7V10C7 10.5304 7.21071 11.0391 7.58579 11.4142C7.96086 11.7893 8.46957 12 9 12H9.5V13C9.5 13.2652 9.60536 13.5196 9.79289 13.7071C9.98043 13.8946 10.2348 14 10.5 14H13.5C13.7652 14 14.0196 13.8946 14.2071 13.7071C14.3946 13.5196 14.5 13.2652 14.5 13V10C14.5 9.73478 14.3946 9.48043 14.2071 9.29289C14.0196 9.10536 13.7652 9 13.5 9H10.5C10.2348 9 9.98043 9.10536 9.79289 9.29289C9.60536 9.48043 9.5 9.73478 9.5 10V11H9C8.73478 11 8.48043 10.8946 8.29289 10.7071C8.10536 10.5196 8 10.2652 8 10V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H9.5V6C9.5 6.26522 9.60536 6.51957 9.79289 6.70711C9.98043 6.89464 10.2348 7 10.5 7ZM4 9H2V7H4V9ZM10.5 10H13.5V13H10.5V10ZM10.5 3H13.5V6H10.5V3Z", fill: "#8B92A5" }));
var tree_structure_grey_default2 = SvgTreeStructureGrey2;

// src/assets/icons/tree-structure-blue.svg
import * as React82 from "react";
var SvgTreeStructureBlue2 = (props) => /* @__PURE__ */ React82.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React82.createElement("path", { d: "M10.5 7H13.5C13.7652 7 14.0196 6.89464 14.2071 6.70711C14.3946 6.51957 14.5 6.26522 14.5 6V3C14.5 2.73478 14.3946 2.48043 14.2071 2.29289C14.0196 2.10536 13.7652 2 13.5 2H10.5C10.2348 2 9.98043 2.10536 9.79289 2.29289C9.60536 2.48043 9.5 2.73478 9.5 3V4H9C8.46957 4 7.96086 4.21071 7.58579 4.58579C7.21071 4.96086 7 5.46957 7 6V7.5H5V7C5 6.73478 4.89464 6.48043 4.70711 6.29289C4.51957 6.10536 4.26522 6 4 6H2C1.73478 6 1.48043 6.10536 1.29289 6.29289C1.10536 6.48043 1 6.73478 1 7V9C1 9.26522 1.10536 9.51957 1.29289 9.70711C1.48043 9.89464 1.73478 10 2 10H4C4.26522 10 4.51957 9.89464 4.70711 9.70711C4.89464 9.51957 5 9.26522 5 9V8.5H7V10C7 10.5304 7.21071 11.0391 7.58579 11.4142C7.96086 11.7893 8.46957 12 9 12H9.5V13C9.5 13.2652 9.60536 13.5196 9.79289 13.7071C9.98043 13.8946 10.2348 14 10.5 14H13.5C13.7652 14 14.0196 13.8946 14.2071 13.7071C14.3946 13.5196 14.5 13.2652 14.5 13V10C14.5 9.73478 14.3946 9.48043 14.2071 9.29289C14.0196 9.10536 13.7652 9 13.5 9H10.5C10.2348 9 9.98043 9.10536 9.79289 9.29289C9.60536 9.48043 9.5 9.73478 9.5 10V11H9C8.73478 11 8.48043 10.8946 8.29289 10.7071C8.10536 10.5196 8 10.2652 8 10V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H9.5V6C9.5 6.26522 9.60536 6.51957 9.79289 6.70711C9.98043 6.89464 10.2348 7 10.5 7ZM4 9H2V7H4V9ZM10.5 10H13.5V13H10.5V10ZM10.5 3H13.5V6H10.5V3Z", fill: "#96F2FF" }));
var tree_structure_blue_default2 = SvgTreeStructureBlue2;

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
      notFocus: () => logs_grey_default2(),
      focus: () => logs_blue_default2()
    },
    title: MONITORS.LOGS,
    type: "logs",
    tapped: true
  },
  {
    id: 2,
    icons: {
      notFocus: () => chart_line_grey_default2(),
      focus: () => chart_line_blue_default2()
    },
    title: MONITORS.METRICS,
    type: "metrics",
    tapped: true
  },
  {
    id: 3,
    icons: {
      notFocus: () => tree_structure_grey_default2(),
      focus: () => tree_structure_blue_default2()
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
    return MONITORING_OPTIONS.map((monitor) => /* @__PURE__ */ React83.createElement(
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
  return /* @__PURE__ */ React83.createElement(DestinationNodeContainer, null, /* @__PURE__ */ React83.createElement(NodeDataWrapper, null, /* @__PURE__ */ React83.createElement(
    "img",
    {
      src: data?.destination_type?.image_url,
      width: 40,
      height: 40,
      style: IMAGE_STYLE2,
      alt: ""
    }
  ), /* @__PURE__ */ React83.createElement(TextWrapper5, null, /* @__PURE__ */ React83.createElement(Text, { color: "#8b92a5" }, data?.name), /* @__PURE__ */ React83.createElement(Text, { size: 18, weight: 600 }, data?.destination_type?.display_name))), /* @__PURE__ */ React83.createElement(MonitorsListWrapper, null, renderMonitors()), /* @__PURE__ */ React83.createElement(
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
import React84, { memo as memo3 } from "react";
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
  return /* @__PURE__ */ React84.createElement(NamespaceContainer2, null, /* @__PURE__ */ React84.createElement(ImageWrapper, null, /* @__PURE__ */ React84.createElement("img", { src: lan, alt: "", width: 32, height: 32 })), /* @__PURE__ */ React84.createElement(TextWrapper6, null, /* @__PURE__ */ React84.createElement(Text, { color: "#8b92a5" }, data.namespace), /* @__PURE__ */ React84.createElement(Text, { size: 18, weight: 600 }, data?.name)), /* @__PURE__ */ React84.createElement(
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
import React85, { useEffect as useEffect6, useState as useState8 } from "react";
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
  return /* @__PURE__ */ React85.createElement(React85.Fragment, null, /* @__PURE__ */ React85.createElement(ControllerPanelWrapper, null, /* @__PURE__ */ React85.createElement(TitleWrapper, { onClick: () => setOpen(!isOpen) }, /* @__PURE__ */ React85.createElement(Text, { size: 14, weight: 600 }, "Supported Signals"), /* @__PURE__ */ React85.createElement(expand_arrow_default, null)), isOpen && /* @__PURE__ */ React85.createElement(MonitorItem, null, MONITORS2.map((monitor) => /* @__PURE__ */ React85.createElement(
    "div",
    {
      key: monitor.name,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    },
    /* @__PURE__ */ React85.createElement(MonitorIndicator, { color: monitor.color }),
    /* @__PURE__ */ React85.createElement(Text, { size: 12, weight: 500 }, monitor.name)
  )))), /* @__PURE__ */ React85.createElement(ControllerWrapper, null, /* @__PURE__ */ React85.createElement(Controls, { position: "top-left", showInteractive: false })));
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
  return /* @__PURE__ */ React86.createElement(DataFlowContainer, null, /* @__PURE__ */ React86.createElement(
    ReactFlow,
    {
      nodes: nodes2,
      edges: edges2,
      nodeTypes,
      nodesDraggable: false,
      nodeOrigin: [0.4, 0.4],
      ...rest
    },
    /* @__PURE__ */ React86.createElement(DataFlowControlPanel, null),
    /* @__PURE__ */ React86.createElement(Background, { gap: 12, size: 1, style: { backgroundColor } })
  ));
}
function KeyvalDataFlow(props) {
  return /* @__PURE__ */ React86.createElement(ReactFlowProvider, null, /* @__PURE__ */ React86.createElement(DataFlow, { ...props }));
}

// src/design.system/danger.zone/danger.zone.tsx
import React87 from "react";
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
  return /* @__PURE__ */ React87.createElement(React87.Fragment, null, /* @__PURE__ */ React87.createElement(DangerZoneWrapper, null, /* @__PURE__ */ React87.createElement(Text, { size: 14, weight: 600 }, title), /* @__PURE__ */ React87.createElement(Text, { size: 12 }, subTitle), /* @__PURE__ */ React87.createElement(DangerButtonWrapper, null, /* @__PURE__ */ React87.createElement(DangerButton, { onClick }, /* @__PURE__ */ React87.createElement(Text, { weight: 500, size: 14, color: palette_default.colors.error }, btnText)))));
}

// src/design.system/modal/modal.tsx
import React89, { useCallback, useEffect as useEffect8, useRef as useRef2 } from "react";

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
import * as React88 from "react";
var SvgCloseModal = (props) => /* @__PURE__ */ React88.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", ...props }, /* @__PURE__ */ React88.createElement("rect", { width: 16, height: 16, rx: 2, fill: "#0E1C28" }), /* @__PURE__ */ React88.createElement("path", { d: "M12.8538 12.146C12.9002 12.1925 12.9371 12.2476 12.9622 12.3083C12.9874 12.369 13.0003 12.4341 13.0003 12.4998C13.0003 12.5655 12.9874 12.6305 12.9622 12.6912C12.9371 12.7519 12.9002 12.8071 12.8538 12.8535C12.8073 12.9 12.7522 12.9368 12.6915 12.962C12.6308 12.9871 12.5657 13.0001 12.5 13.0001C12.4343 13.0001 12.3693 12.9871 12.3086 12.962C12.2479 12.9368 12.1927 12.9 12.1463 12.8535L8.00003 8.70666L3.85378 12.8535C3.75996 12.9474 3.63272 13.0001 3.50003 13.0001C3.36735 13.0001 3.2401 12.9474 3.14628 12.8535C3.05246 12.7597 2.99976 12.6325 2.99976 12.4998C2.99976 12.3671 3.05246 12.2399 3.14628 12.146L7.29316 7.99979L3.14628 3.85354C3.05246 3.75972 2.99976 3.63247 2.99976 3.49979C2.99976 3.36711 3.05246 3.23986 3.14628 3.14604C3.2401 3.05222 3.36735 2.99951 3.50003 2.99951C3.63272 2.99951 3.75996 3.05222 3.85378 3.14604L8.00003 7.29291L12.1463 3.14604C12.2401 3.05222 12.3674 2.99951 12.5 2.99951C12.6327 2.99951 12.76 3.05222 12.8538 3.14604C12.9476 3.23986 13.0003 3.36711 13.0003 3.49979C13.0003 3.63247 12.9476 3.75972 12.8538 3.85354L8.70691 7.99979L12.8538 12.146Z", fill: "white" }));
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
  return /* @__PURE__ */ React89.createElement(React89.Fragment, null, /* @__PURE__ */ React89.createElement(portal_modal_default, { wrapperId: "modal-portal" }, /* @__PURE__ */ React89.createElement(
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
    /* @__PURE__ */ React89.createElement(ModalContainer, { padding: config.padding, ref: modalRef }, config.showHeader && /* @__PURE__ */ React89.createElement(ModalHeader, null, /* @__PURE__ */ React89.createElement(Text, { size: 24, weight: 700 }, config.title)), /* @__PURE__ */ React89.createElement(Close, { onClick: closeModal }, /* @__PURE__ */ React89.createElement(close_modal_default, null)), /* @__PURE__ */ React89.createElement(Content, null, children), config?.footer && /* @__PURE__ */ React89.createElement(ModalFooter, { style: { ...config.footer.style } }, config.footer.link && /* @__PURE__ */ React89.createElement(
      Link,
      {
        onClick: config.footer.link.onClick,
        value: config.footer.link.text
      }
    ), config.footer.secondaryBtnText && /* @__PURE__ */ React89.createElement(
      Button,
      {
        variant: "secondary",
        onClick: config.footer.secondaryBtnAction
      },
      /* @__PURE__ */ React89.createElement(Text, { size: 16, weight: 700 }, config.footer.secondaryBtnText)
    ), /* @__PURE__ */ React89.createElement(
      Button,
      {
        disabled: config.footer.isDisabled,
        onClick: config.footer.primaryBtnAction
      },
      /* @__PURE__ */ React89.createElement(Text, { size: 16, weight: 700, color: palette_default.text.dark_button }, config.footer.primaryBtnText)
    )))
  )));
}

// src/design.system/theme.provider/theme.provider.tsx
import React91 from "react";

// src/design.system/theme.provider/registry.tsx
import React90, { useState as useState10 } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
function StyledComponentsRegistry({
  children
}) {
  const [styledComponentsStyleSheet] = useState10(() => new ServerStyleSheet());
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return /* @__PURE__ */ React90.createElement(React90.Fragment, null, styles);
  });
  if (typeof window !== "undefined")
    return /* @__PURE__ */ React90.createElement(React90.Fragment, null, children);
  return /* @__PURE__ */ React90.createElement(StyleSheetManager, { sheet: styledComponentsStyleSheet.instance }, children);
}

// src/design.system/theme.provider/theme.provider.tsx
import { ThemeProvider } from "styled-components";
var ThemeProviderWrapper = ({
  children
}) => {
  return /* @__PURE__ */ React91.createElement(ThemeProvider, { theme: palette_default }, /* @__PURE__ */ React91.createElement(StyledComponentsRegistry, null, children));
};

// src/design.system/steps/steps.tsx
import React94 from "react";

// src/design.system/steps/step.item.tsx
import React93 from "react";

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
import * as React92 from "react";
var SvgChecked = (props) => /* @__PURE__ */ React92.createElement("svg", { width: 20, height: 14, viewBox: "0 0 20 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React92.createElement("path", { d: "M19.1767 1.88786L7.48781 13.675C7.386 13.778 7.26503 13.8597 7.13183 13.9155C6.99863 13.9713 6.85583 14 6.7116 14C6.56737 14 6.42456 13.9713 6.29136 13.9155C6.15816 13.8597 6.03719 13.778 5.93539 13.675L0.821518 8.51812C0.719584 8.41532 0.638726 8.29329 0.58356 8.15899C0.528394 8.02469 0.5 7.88074 0.5 7.73538C0.5 7.59001 0.528394 7.44606 0.58356 7.31176C0.638726 7.17746 0.719584 7.05543 0.821518 6.95264C0.923451 6.84985 1.04446 6.76831 1.17765 6.71268C1.31083 6.65705 1.45357 6.62842 1.59773 6.62842C1.74189 6.62842 1.88463 6.65705 2.01781 6.71268C2.151 6.76831 2.27201 6.84985 2.37394 6.95264L6.71251 11.3277L17.6261 0.324221C17.8319 0.116626 18.1111 0 18.4023 0C18.6934 0 18.9726 0.116626 19.1785 0.324221C19.3843 0.531816 19.5 0.813376 19.5 1.10696C19.5 1.40054 19.3843 1.6821 19.1785 1.8897L19.1767 1.88786Z", fill: "white" }));
var checked_default = SvgChecked;

// src/design.system/steps/step.item.tsx
function StepItem({
  title,
  index,
  status,
  isLast
}) {
  return /* @__PURE__ */ React93.createElement(StepItemWrapper, null, /* @__PURE__ */ React93.createElement(FloatBox, null, status === "done" /* Done */ ? /* @__PURE__ */ React93.createElement(checked_default, null) : /* @__PURE__ */ React93.createElement(FloatingBoxTextWrapper, { disabled: status !== "active" /* Active */ }, /* @__PURE__ */ React93.createElement(Text, { weight: 700 }, index))), /* @__PURE__ */ React93.createElement(StepItemTextWrapper, { disabled: status !== "active" /* Active */ }, /* @__PURE__ */ React93.createElement(Text, { weight: 600 }, title)), !isLast && /* @__PURE__ */ React93.createElement(StepItemBorder, null));
}

// src/design.system/steps/steps.tsx
function Steps({ data }) {
  function renderSteps() {
    return data?.map(({ title, status }, index) => /* @__PURE__ */ React94.createElement(
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
  return /* @__PURE__ */ React94.createElement(StepsContainer, null, renderSteps());
}

// src/design.system/divider/divider.tsx
import React95 from "react";
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
  return /* @__PURE__ */ React95.createElement(DividerContainer, { margin }, /* @__PURE__ */ React95.createElement(DividerLine, null), /* @__PURE__ */ React95.createElement(Text, { size: 14 }, label), /* @__PURE__ */ React95.createElement(DividerLine, null));
}

// src/design.system/note/note.tsx
import React96, { useEffect as useEffect9 } from "react";
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
    return /* @__PURE__ */ React96.createElement(
      TextContainer,
      {
        dangerouslySetInnerHTML: {
          __html: `<p><strong>Note: </strong>${value}</p>`
        }
      }
    );
  }
  return /* @__PURE__ */ React96.createElement(NoteContainer, null, /* @__PURE__ */ React96.createElement(Text, { size: 14 }, buildNote()));
}

// src/design.system/segmented-controls/index.tsx
import React97 from "react";
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
  return /* @__PURE__ */ React97.createElement("div", null, title && /* @__PURE__ */ React97.createElement(Text, { size: 14, style: { marginBottom: 10 } }, title), /* @__PURE__ */ React97.createElement(SegmentedControlsWrapper, null, options?.map((option) => /* @__PURE__ */ React97.createElement(
    SegmentedControlsOption,
    {
      key: option.id,
      className: `${option.id === selected ? "active" : ""}`
    },
    /* @__PURE__ */ React97.createElement(folders_default, null),
    /* @__PURE__ */ React97.createElement(
      SegmentedControlsInput,
      {
        type: "radio",
        value: option.id,
        name: option.label,
        onChange: () => onChange(option.id),
        checked: option.id === selected
      }
    ),
    /* @__PURE__ */ React97.createElement(Text, null, option.label)
  ))));
}

// src/design.system/multi-input/index.tsx
import React98, { useState as useState11 } from "react";
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
  return /* @__PURE__ */ React98.createElement(React98.Fragment, null, title && /* @__PURE__ */ React98.createElement(TitleWrapper2, null, /* @__PURE__ */ React98.createElement(Tooltip, { text: tooltip || "" }, /* @__PURE__ */ React98.createElement(Text, { size: 14, weight: 600 }, title))), /* @__PURE__ */ React98.createElement(Container, null, /* @__PURE__ */ React98.createElement(ListContainer, null, list.map((item, index) => /* @__PURE__ */ React98.createElement(ListItem, { key: index, onClick: () => handleRemoveFromList(index) }, /* @__PURE__ */ React98.createElement(Text, { size: 12, color: palette_default.text.dark_button }, item), /* @__PURE__ */ React98.createElement(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 16 16",
      fill: "#0e1c28",
      xmlns: "http://www.w3.org/2000/svg"
    },
    /* @__PURE__ */ React98.createElement(
      "path",
      {
        d: "M12.8535 12.146C12.9 12.1925 12.9368 12.2476 12.962 12.3083C12.9871 12.369 13.0001 12.4341 13.0001 12.4998C13.0001 12.5655 12.9871 12.6305 12.962 12.6912C12.9368 12.7519 12.9 12.8071 12.8535 12.8535C12.8071 12.9 12.7519 12.9368 12.6912 12.962C12.6305 12.9871 12.5655 13.0001 12.4998 13.0001C12.4341 13.0001 12.369 12.9871 12.3083 12.962C12.2476 12.9368 12.1925 12.9 12.146 12.8535L7.99979 8.70666L3.85354 12.8535C3.75972 12.9474 3.63247 13.0001 3.49979 13.0001C3.36711 13.0001 3.23986 12.9474 3.14604 12.8535C3.05222 12.7597 2.99951 12.6325 2.99951 12.4998C2.99951 12.3671 3.05222 12.2399 3.14604 12.146L7.29291 7.99979L3.14604 3.85354C3.05222 3.75972 2.99951 3.63247 2.99951 3.49979C2.99951 3.36711 3.05222 3.23986 3.14604 3.14604C3.23986 3.05222 3.36711 2.99951 3.49979 2.99951C3.63247 2.99951 3.75972 3.05222 3.85354 3.14604L7.99979 7.29291L12.146 3.14604C12.2399 3.05222 12.3671 2.99951 12.4998 2.99951C12.6325 2.99951 12.7597 3.05222 12.8535 3.14604C12.9474 3.23986 13.0001 3.36711 13.0001 3.49979C13.0001 3.63247 12.9474 3.75972 12.8535 3.85354L8.70666 7.99979L12.8535 12.146Z",
        fill: "#0e1c28"
      }
    )
  )))), /* @__PURE__ */ React98.createElement(InputContainer, null, /* @__PURE__ */ React98.createElement(
    Input2,
    {
      style: { width: "100%" },
      value: inputValue,
      placeholder,
      onChange: (e) => handleInputChange(e)
    }
  ), /* @__PURE__ */ React98.createElement(Button2, { onClick: handleAddToList, style: { marginLeft: 10 } }, /* @__PURE__ */ React98.createElement(Text, { size: 14, weight: 600, color: palette_default.text.dark_button }, "Add")))));
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
import React99, { useState as useState12 } from "react";
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
  return /* @__PURE__ */ React99.createElement(Container2, null, title && /* @__PURE__ */ React99.createElement(TitleWrapper3, null, /* @__PURE__ */ React99.createElement(Tooltip, { text: tooltip || "" }, /* @__PURE__ */ React99.createElement("div", { style: { display: "flex", gap: 4 } }, /* @__PURE__ */ React99.createElement(Text, { size: 14, weight: 600 }, title), required && /* @__PURE__ */ React99.createElement(Text, { size: 14, weight: 600 }, "*")))), /* @__PURE__ */ React99.createElement(Table, null, /* @__PURE__ */ React99.createElement("thead", null, /* @__PURE__ */ React99.createElement("tr", null, /* @__PURE__ */ React99.createElement(Th, null, /* @__PURE__ */ React99.createElement(
    Text,
    {
      color: palette_default.text.grey,
      size: 14,
      style: { display: "flex" },
      weight: 300
    },
    titleKey || "Key"
  )), /* @__PURE__ */ React99.createElement(Th, null, /* @__PURE__ */ React99.createElement(
    Text,
    {
      color: palette_default.text.grey,
      size: 14,
      style: { display: "flex" },
      weight: 300
    },
    titleValue || "Value"
  )))), /* @__PURE__ */ React99.createElement("tbody", null, keyValues.map((kv) => /* @__PURE__ */ React99.createElement("tr", { key: kv.id }, /* @__PURE__ */ React99.createElement(Td, { right: true }, /* @__PURE__ */ React99.createElement(
    Input3,
    {
      type: "text",
      value: kv.key,
      onChange: (e) => updateKey(kv.id, e.target.value)
    }
  )), /* @__PURE__ */ React99.createElement(Td, null, /* @__PURE__ */ React99.createElement(
    Input3,
    {
      type: "text",
      value: kv.value,
      onChange: (e) => updateValue(kv.id, e.target.value)
    }
  )), /* @__PURE__ */ React99.createElement(
    Td,
    {
      style: { cursor: "pointer" },
      left: true,
      onClick: () => deleteRow(kv.id)
    },
    /* @__PURE__ */ React99.createElement(trash_default, null)
  )))), /* @__PURE__ */ React99.createElement("tfoot", null, /* @__PURE__ */ React99.createElement("tr", null, /* @__PURE__ */ React99.createElement(AddRowButton, { onClick: addRow, colSpan: 3 }, /* @__PURE__ */ React99.createElement(Text, { weight: 400, size: 14, color: palette_default.colors.torquiz_light }, titleButton || "Add Row"))))));
};

// src/design.system/text.area/index.tsx
import React100 from "react";
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
  return /* @__PURE__ */ React100.createElement(React100.Fragment, null, label && /* @__PURE__ */ React100.createElement(LabelWrapper3, null, /* @__PURE__ */ React100.createElement(Tooltip, { text: tooltip || "" }, /* @__PURE__ */ React100.createElement("div", { style: { display: "flex", gap: 4 } }, /* @__PURE__ */ React100.createElement(Text, { size: 14, weight: 600 }, label), required && /* @__PURE__ */ React100.createElement(Text, { size: 14, weight: 600 }, "*")))), /* @__PURE__ */ React100.createElement(
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
import React101 from "react";
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
  return /* @__PURE__ */ React101.createElement(Container3, null, title && /* @__PURE__ */ React101.createElement(TitleWrapper4, null, /* @__PURE__ */ React101.createElement(Tooltip, { text: tooltip || "" }, /* @__PURE__ */ React101.createElement("div", { style: { display: "flex", gap: 4 } }, /* @__PURE__ */ React101.createElement(Text, { size: 14, weight: 600 }, title), required && /* @__PURE__ */ React101.createElement(Text, { size: 14, weight: 600 }, "*")))), /* @__PURE__ */ React101.createElement(Table2, null, /* @__PURE__ */ React101.createElement("tbody", null, values.map((value, index) => /* @__PURE__ */ React101.createElement("tr", { key: index }, /* @__PURE__ */ React101.createElement(Td2, { right: true }, /* @__PURE__ */ React101.createElement(
    Input4,
    {
      type: "text",
      value,
      onChange: (e) => updateValue(index, e.target.value),
      placeholder: index === 0 ? placeholder : ""
    }
  )), /* @__PURE__ */ React101.createElement(
    Td2,
    {
      onClick: () => deleteRow(index),
      style: { cursor: "pointer" }
    },
    /* @__PURE__ */ React101.createElement(trash_default, null)
  )))), /* @__PURE__ */ React101.createElement("tfoot", null, /* @__PURE__ */ React101.createElement("tr", null, /* @__PURE__ */ React101.createElement(AddRowButton2, { onClick: addRow, colSpan: 2 }, /* @__PURE__ */ React101.createElement(Text, { weight: 400, size: 14, color: palette_default.colors.torquiz_light }, "Add Row"))))));
};

// src/design.system/action.group/index.tsx
import React103 from "react";

// src/design.system/action.item/index.tsx
import React102, { useRef as useRef4, useState as useState14 } from "react";
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
  return /* @__PURE__ */ React102.createElement("div", { ref, style: { position: "relative" } }, /* @__PURE__ */ React102.createElement(Label, { onClick: () => setIsOpen(!isOpen) }, /* @__PURE__ */ React102.createElement(Text, { size: 12, weight: 600 }, label), /* @__PURE__ */ React102.createElement(expand_arrow_default, null)), /* @__PURE__ */ React102.createElement(Popup, { isOpen }, /* @__PURE__ */ React102.createElement("div", { style: { padding: 12, width: 120 } }, /* @__PURE__ */ React102.createElement(Text, { size: 12, weight: 600 }, subTitle)), items.map((item, index) => /* @__PURE__ */ React102.createElement(
    PopupItem,
    {
      key: index,
      onClick: item.onClick,
      disabled: !!item.disabled
    },
    item.selected ? /* @__PURE__ */ React102.createElement(check_default, null) : /* @__PURE__ */ React102.createElement("div", { style: { width: 10 } }),
    /* @__PURE__ */ React102.createElement(Text, { size: 12, weight: 600 }, item.label)
  ))));
};

// src/design.system/action.group/index.tsx
var ActionsGroup = ({ actionGroups }) => {
  return /* @__PURE__ */ React103.createElement(React103.Fragment, null, actionGroups.map(
    (group, index) => group.condition && /* @__PURE__ */ React103.createElement(ActionItem, { key: index, ...group })
  ));
};

// src/design.system/pagination/index.tsx
import React104 from "react";
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
  return /* @__PURE__ */ React104.createElement(PaginationContainer, null, /* @__PURE__ */ React104.createElement(
    PageButton,
    {
      onClick: () => onPageChange(currentPage - 1),
      disabled: currentPage === 1,
      isDisabled: currentPage === 1
    },
    /* @__PURE__ */ React104.createElement(expand_arrow_default, { style: { transform: "rotate(90deg)" } }),
    "Previous"
  ), new Array(pageCount).fill(0).map((_, index) => /* @__PURE__ */ React104.createElement(
    PageButton,
    {
      key: index,
      onClick: () => onPageChange(index + 1),
      isCurrentPage: currentPage === index + 1
    },
    index + 1
  )), /* @__PURE__ */ React104.createElement(
    PageButton,
    {
      onClick: () => onPageChange(currentPage + 1),
      disabled: currentPage === pageCount,
      isDisabled: currentPage === pageCount
    },
    "Next",
    /* @__PURE__ */ React104.createElement(expand_arrow_default, { style: { transform: "rotate(-90deg)" } })
  ));
};

// src/design.system/table/index.tsx
import styled39 from "styled-components";
import React105, { useState as useState15 } from "react";
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
  return /* @__PURE__ */ React105.createElement(React105.Fragment, null, /* @__PURE__ */ React105.createElement(StyledTable, null, renderTableHeader(), /* @__PURE__ */ React105.createElement(StyledTbody, null, currentItems.map((item, index) => renderTableRows(item, index)))), data.length === 0 ? renderEmptyResult() : data.length > 10 ? /* @__PURE__ */ React105.createElement(
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
import React106, { useState as useState16 } from "react";
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
  return /* @__PURE__ */ React106.createElement(React106.Fragment, null, /* @__PURE__ */ React106.createElement(Container4, null, /* @__PURE__ */ React106.createElement(CopyIconWrapper2, { onClick: handleCopy }, isCopied ? /* @__PURE__ */ React106.createElement(copied_default, { style: { width: 18, height: 18 } }) : /* @__PURE__ */ React106.createElement(copy_default, { style: { width: 18, height: 18 } })), /* @__PURE__ */ React106.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React106.createElement(
    YamlEditor,
    {
      key: JSON.stringify(data),
      json: data,
      onChange: handleChange
    }
  ), /* @__PURE__ */ React106.createElement(EditorOverlay, null))));
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

// src/icons-components/monitors/index.tsx
import React107 from "react";

// src/icons-components/styled.ts
import styled41 from "styled-components";
var IconWrapper3 = styled41.div`
  width: ${({ size }) => size || 24}px;
  height: ${({ size }) => size || 24}px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

// src/icons-components/monitors/index.tsx
var LogsIcon = ({ ...props }) => /* @__PURE__ */ React107.createElement(IconWrapper3, { ...props }, /* @__PURE__ */ React107.createElement(logs_grey_default, null));
var LogsFocusIcon = ({ ...props }) => /* @__PURE__ */ React107.createElement(IconWrapper3, { ...props }, /* @__PURE__ */ React107.createElement(logs_blue_default, null));
var TraceIcon = ({ ...props }) => /* @__PURE__ */ React107.createElement(IconWrapper3, { ...props }, /* @__PURE__ */ React107.createElement(tree_structure_grey_default, null));
var TraceFocusIcon = ({ ...props }) => /* @__PURE__ */ React107.createElement(IconWrapper3, { ...props }, /* @__PURE__ */ React107.createElement(tree_structure_blue_default, null));
var MetricsIcon = ({ ...props }) => /* @__PURE__ */ React107.createElement(IconWrapper3, { ...props }, /* @__PURE__ */ React107.createElement(chart_line_grey_default, null));
var MetricsFocusIcon = ({ ...props }) => /* @__PURE__ */ React107.createElement(IconWrapper3, { ...props }, /* @__PURE__ */ React107.createElement(chart_line_blue_default, null));

// src/icons-components/actions/index.tsx
import React108 from "react";
var AddClusterInfoIcon = ({ ...props }) => /* @__PURE__ */ React108.createElement(IconWrapper3, { ...props }, /* @__PURE__ */ React108.createElement(cluster_attr_default, null));
var DeleteAttributeIcon = ({ ...props }) => /* @__PURE__ */ React108.createElement(IconWrapper3, { ...props }, /* @__PURE__ */ React108.createElement(delete_attr_default, null));
var RenameAttributeIcon = ({ ...props }) => /* @__PURE__ */ React108.createElement(IconWrapper3, { ...props }, /* @__PURE__ */ React108.createElement(rename_attr_default, null));

// src/icons-components/app/index.tsx
import React109 from "react";
var PlusIcon = ({ ...props }) => /* @__PURE__ */ React109.createElement(IconWrapper3, { ...props }, /* @__PURE__ */ React109.createElement(plus_default, null));
var BackIcon = ({ ...props }) => /* @__PURE__ */ React109.createElement(IconWrapper3, { ...props }, /* @__PURE__ */ React109.createElement(back_default, null));
var RightArrowIcon = ({ size, color, ...props }) => /* @__PURE__ */ React109.createElement(IconWrapper3, { size, color, ...props }, /* @__PURE__ */ React109.createElement(arrow_right_default, null));
var ChargeIcon = ({ size, color, ...props }) => /* @__PURE__ */ React109.createElement(IconWrapper3, { size, color, ...props }, /* @__PURE__ */ React109.createElement(charge_rect_default, null));
var ConnectIcon = ({ size, color, ...props }) => /* @__PURE__ */ React109.createElement(IconWrapper3, { size, color, ...props }, /* @__PURE__ */ React109.createElement(connect_default, null));
var NoteIcon = ({ size, color, ...props }) => /* @__PURE__ */ React109.createElement(IconWrapper3, { size, color, ...props }, /* @__PURE__ */ React109.createElement(note_default, null));
var WhiteArrowIcon = ({ size, color, ...props }) => /* @__PURE__ */ React109.createElement(IconWrapper3, { size, color, ...props }, /* @__PURE__ */ React109.createElement(white_arrow_right_default, null));
var LinkIcon = ({ size, color, ...props }) => /* @__PURE__ */ React109.createElement(IconWrapper3, { size, color, ...props }, /* @__PURE__ */ React109.createElement(link_default, null));
var ExpandIcon = ({ size, color, ...props }) => /* @__PURE__ */ React109.createElement(IconWrapper3, { size, color, ...props }, /* @__PURE__ */ React109.createElement(expand_arrow_default, null));
var CheckIcon = ({ size, color, ...props }) => /* @__PURE__ */ React109.createElement(IconWrapper3, { size, color, ...props }, /* @__PURE__ */ React109.createElement(check_default, null));
var CopyIcon = ({ size, color, ...props }) => /* @__PURE__ */ React109.createElement(IconWrapper3, { size, color, ...props }, /* @__PURE__ */ React109.createElement(copy_default, null));
var CopiedIcon = ({ size, color, ...props }) => /* @__PURE__ */ React109.createElement(IconWrapper3, { size, color, ...props }, /* @__PURE__ */ React109.createElement(copied_default, null));
var YamlIconIcon = ({ size, color, ...props }) => /* @__PURE__ */ React109.createElement(IconWrapper3, { size, color, ...props }, /* @__PURE__ */ React109.createElement(yaml_default, null));
var GreenCheckIcon = ({ size, color, ...props }) => /* @__PURE__ */ React109.createElement(IconWrapper3, { size, color, ...props }, /* @__PURE__ */ React109.createElement(green_check_default, null));
var RedErrorIcon = ({ size, color, ...props }) => /* @__PURE__ */ React109.createElement(IconWrapper3, { size, color, ...props }, /* @__PURE__ */ React109.createElement(red_error_default, null));
var BlueInfoIcon = ({ size, color, ...props }) => /* @__PURE__ */ React109.createElement(IconWrapper3, { size, color, ...props }, /* @__PURE__ */ React109.createElement(blue_info_default, null));
var BellIcon = ({ size, color, ...props }) => /* @__PURE__ */ React109.createElement(IconWrapper3, { size, color, ...props }, /* @__PURE__ */ React109.createElement(bell_default, null));

// src/icons-components/side.menu/index.tsx
import React110 from "react";
var FocusOverviewIcon = ({ ...props }) => /* @__PURE__ */ React110.createElement(IconWrapper3, { ...props }, /* @__PURE__ */ React110.createElement(focus_overview_default, null));
var UnFocusOverviewIcon = ({ ...props }) => /* @__PURE__ */ React110.createElement(IconWrapper3, { ...props }, /* @__PURE__ */ React110.createElement(unfocus_overview_default, null));
var FocusSourcesIcon = ({ ...props }) => /* @__PURE__ */ React110.createElement(IconWrapper3, { ...props }, /* @__PURE__ */ React110.createElement(sources_focus_default, null));
var UnFocusSourcesIcon = ({ ...props }) => /* @__PURE__ */ React110.createElement(IconWrapper3, { ...props }, /* @__PURE__ */ React110.createElement(sources_unfocus_default, null));
var FocusDestinationsIcon = ({ ...props }) => /* @__PURE__ */ React110.createElement(IconWrapper3, { ...props }, /* @__PURE__ */ React110.createElement(destinations_focus_default, null));
var UnFocusDestinationsIcon = ({ ...props }) => /* @__PURE__ */ React110.createElement(IconWrapper3, { ...props }, /* @__PURE__ */ React110.createElement(destinations_unfocus_default, null));
var FocusActionIcon = ({ ...props }) => /* @__PURE__ */ React110.createElement(IconWrapper3, { ...props }, /* @__PURE__ */ React110.createElement(transform_focus_default, null));
var UnFocusActionIcon = ({ ...props }) => /* @__PURE__ */ React110.createElement(IconWrapper3, { ...props }, /* @__PURE__ */ React110.createElement(transform_unfocus_default, null));
export {
  ActionInput,
  ActionItem,
  ActionsGroup,
  AddClusterInfoIcon,
  BackIcon,
  BellIcon,
  BlueInfoIcon,
  Button,
  Card,
  ChargeIcon,
  CheckIcon,
  Checkbox,
  Code,
  ConnectIcon,
  CopiedIcon,
  CopyIcon,
  DangerZone,
  KeyvalDataFlow as DataFlow,
  DeleteAttributeIcon,
  Divider,
  DropDown,
  ExpandIcon,
  FloatBox,
  FocusActionIcon,
  FocusDestinationsIcon,
  FocusOverviewIcon,
  FocusSourcesIcon,
  GreenCheckIcon,
  ImageComponent as Image,
  Input,
  KeyValueTable,
  Link,
  LinkIcon,
  Loader,
  LogsFocusIcon,
  LogsIcon,
  MetricsFocusIcon,
  MetricsIcon,
  Modal,
  MultiInput,
  MultiInputTable,
  Note,
  NoteIcon,
  Notification,
  Pagination,
  PlusIcon,
  RadioButton,
  RedErrorIcon,
  RenameAttributeIcon,
  RightArrowIcon,
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
  TraceFocusIcon,
  TraceIcon,
  UnFocusActionIcon,
  UnFocusDestinationsIcon,
  UnFocusOverviewIcon,
  UnFocusSourcesIcon,
  Video,
  WhiteArrowIcon,
  YMLEditor,
  YamlIconIcon,
  buildFlowNodesAndEdges
};
//# sourceMappingURL=index.mjs.map