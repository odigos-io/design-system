"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  width: 24px;\n  height: 24px;\n  color: #303030;\n  font-size: 14px;\n  font-weight: 400;\n  margin-right: 7px;\n  -webkit-tap-highlight-color: transparent;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n  cursor: pointer;\n  width: 23px;\n  height: 23px;\n  border: ",
        ";\n  border-radius: 50%;\n  display: inline-block;\n  position: relative;\n"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n  color: ",
        ";\n  margin: 0;\n  font-family: ",
        ", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "\n  :hover {\n    background: ",
        ";\n  }\n  p {\n    cursor: ",
        ";\n  }\n"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  padding: 8px 16px;\n  align-items: center;\n  border-radius: 8px;\n  border: none;\n  width: 100%;\n  height: 100%;\n  cursor: ",
        ";\n  background: ",
        ";\n  justify-content: center;\n  align-items: center;\n"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "\n  background: radial-gradient(\n        circle at 100% 100%,\n        #ffffff 0,\n        #ffffff 3px,\n        transparent 3px\n      )\n      0% 0%/8px 8px no-repeat,\n    radial-gradient(circle at 0 100%, #ffffff 0, #ffffff 3px, transparent 3px)\n      100% 0%/8px 8px no-repeat,\n    radial-gradient(circle at 100% 0, #ffffff 0, #ffffff 3px, transparent 3px)\n      0% 100%/8px 8px no-repeat,\n    radial-gradient(circle at 0 0, #ffffff 0, #ffffff 3px, transparent 3px) 100%\n      100%/8px 8px no-repeat,\n    linear-gradient(#ffffff, #ffffff) 50% 50% / calc(100% - 10px)\n      calc(100% - 16px) no-repeat,\n    linear-gradient(#ffffff, #ffffff) 50% 50% / calc(100% - 16px)\n      calc(100% - 10px) no-repeat,\n    linear-gradient(0deg, transparent 0%, #0ee6f3 100%),\n    radial-gradient(\n      78.09% 72.18% at 100% -0%,\n      rgba(150, 242, 255, 0.4) 0%,\n      rgba(150, 242, 255, 0) 61.91%\n    ),\n    linear-gradient(180deg, #2e4c55 0%, #303355 100%);\n  border-radius: 8px;\n  padding: 1px;\n  width: 32px;\n  height: 32px;\n"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: radial-gradient(\n      78.09% 72.18% at 100% -0%,\n      rgba(150, 242, 255, 0.4) 0%,\n      rgba(150, 242, 255, 0) 61.91%\n    ),\n    linear-gradient(180deg, #2e4c55 0%, #303355 100%);\n"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        "\n  display: inline-flex;\n  position: relative;\n  width: 272px;\n  height: 204px;\n  flex-direction: column;\n  border-radius: 24px;\n  border: ",
        ";\n  background: ",
        ";\n"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  padding: 4px 8px;\n  align-items: flex-start;\n  gap: 10px;\n  border-radius: 10px;\n"
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  padding: 8px 14px;\n  align-items: flex-start;\n  gap: 10px;\n  border-radius: 16px;\n  border: ",
        ";\n  background: ",
        ";\n"
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n  z-index: 9999;\n  width: 100%;\n  padding: 11px 4px;\n  border-radius: 8px;\n  cursor: pointer;\n  border: ",
        ";\n  background: ",
        ";\n\n  .dropdown-arrow {\n    transform: rotate(0deg);\n    transition: all 0.2s ease-in-out;\n  }\n\n  .dropdown-arrow.open {\n    transform: rotate(180deg);\n  }\n"
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = _tagged_template_literal([
        "\n  padding: 0 12px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: ",
        ";\n  font-size: 14px;\n  font-family: ",
        ", sans-serif;\n  font-weight: 400;\n"
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n  z-index: 9999;\n  display: flex;\n  width: 100%;\n  padding: 11px 4px;\n  flex-direction: column;\n  border-radius: 8px;\n  border: ",
        ";\n  background: ",
        ";\n  margin-top: 5px;\n"
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject13() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n  z-index: 100;\n  width: 100%;\n  max-height: 270px;\n  overflow-y: scroll;\n  scrollbar-width: none;\n  :hover {\n    background: ",
        ";\n  }\n"
    ]);
    _templateObject13 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject14() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  padding: 7px 12px;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 8px;\n  cursor: pointer;\n  p {\n    cursor: pointer !important;\n  }\n"
    ]);
    _templateObject14 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject15() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n  display: flex;\n  width: 340px;\n  padding: 9px 13px;\n  gap: 10px;\n  border-radius: 8px;\n  border: ",
        ";\n  background: ",
        ";\n  &:hover {\n    border: ",
        ";\n  }\n"
    ]);
    _templateObject15 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject16() {
    var data = _tagged_template_literal([
        "\n  width: 85%;\n  background: ",
        ";\n  border: none;\n  outline: none;\n  color: ",
        ";\n  font-size: 14px;\n  font-family: ",
        ", sans-serif;\n  font-weight: 400;\n  &:focus {\n    color: ",
        ";\n  }\n"
    ]);
    _templateObject16 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject17() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  align-items: center;\n  gap: 8px;\n"
    ]);
    _templateObject17 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject18() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n  width: 30px;\n  height: 16px;\n  background-color: ",
        ";\n  cursor: pointer;\n  user-select: none;\n  border-radius: 20px;\n  padding: 2px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"
    ]);
    _templateObject18 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject19() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  color: #fff;\n  background-color: ",
        ";\n  box-shadow: 0 2px 4px rgb(0, 0, 0, 0.25);\n  border-radius: 100%;\n  position: absolute;\n  transition: all 0.2s ease;\n  left: ",
        "px;\n"
    ]);
    _templateObject19 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject20() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  cursor: ",
        ";\n  pointer-events: ",
        ";\n  opacity: ",
        ";\n"
    ]);
    _templateObject20 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject21() {
    var data = _tagged_template_literal([
        "\n  width: 16px;\n  height: 16px;\n  border: ",
        ";\n  border-radius: 4px;\n"
    ]);
    _templateObject21 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject22() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  padding: 4px;\n  align-items: center;\n  gap: 4px;\n  border-radius: 14px;\n  background: ",
        ";\n"
    ]);
    _templateObject22 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject23() {
    var data = _tagged_template_literal([
        "\n  cursor: pointer;\n  .p {\n    cursor: pointer !important;\n  }\n"
    ]);
    _templateObject23 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject24() {
    var data = _tagged_template_literal([
        "\n  display: inline-block;\n  position: relative;\n  display: flex;\n"
    ]);
    _templateObject24 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject25() {
    var data = _tagged_template_literal([
        "\n  position: absolute;\n  max-width: 150px;\n  width: min(100px, 250px);\n  bottom: 24px;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  background: ",
        ";\n  box-shadow: 0px 6px 13px 0px rgba(0, 0, 0, 0.3);\n"
    ]);
    _templateObject25 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject26() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n  display: flex;\n  width: 100%;\n  padding-left: 13px;\n  height: 100%;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 10px;\n  border-radius: 8px;\n  border: ",
        ";\n  background: ",
        ";\n\n  &:hover {\n    border: ",
        ";\n  }\n"
    ]);
    _templateObject26 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject27() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n  display: flex;\n  width: 100%;\n  padding: 0px 12px;\n  height: 100%;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  border-radius: 4px;\n  border: ",
        ";\n"
    ]);
    _templateObject27 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject28() {
    var data = _tagged_template_literal([
        "\n  background: transparent;\n  border: none;\n  outline: none;\n  width: 100%;\n  color: ",
        ";\n"
    ]);
    _templateObject28 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject29() {
    var data = _tagged_template_literal([
        "\n  color: var(--dark-mode-white, #fff);\n  font-family: Inter, sans-serif;\n  font-size: 24px;\n"
    ]);
    _templateObject29 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject30() {
    var data = _tagged_template_literal([
        "\n  margin-bottom: 8px;\n"
    ]);
    _templateObject30 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject31() {
    var data = _tagged_template_literal([
        "\n  margin-top: 4px;\n"
    ]);
    _templateObject31 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject32() {
    var data = _tagged_template_literal([
        "\n  position: absolute;\n  right: 10px;\n  cursor: pointer;\n"
    ]);
    _templateObject32 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject33() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n  margin-top: 8px;\n  border-radius: 8px;\n  width: 240px;\n  height: 140px;\n  cursor: pointer;\n  background: ",
        ";\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n"
    ]);
    _templateObject33 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject34() {
    var data = _tagged_template_literal([
        "\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  top: 30px;\n  text-align: center;\n"
    ]);
    _templateObject34 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject35() {
    var data = _tagged_template_literal([
        "\n  top: 40%;\n"
    ]);
    _templateObject35 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject36() {
    var data = _tagged_template_literal([
        "\n  width: 980px;\n  border-radius: 8px;\n"
    ]);
    _templateObject36 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject37() {
    var data = _tagged_template_literal([
        "\n  width: 980px;\n\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 21px;\n"
    ]);
    _templateObject37 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject38() {
    var data = _tagged_template_literal([
        "\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.65);\n  z-index: 9999;\n"
    ]);
    _templateObject38 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject39() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n"
    ]);
    _templateObject39 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject40() {
    var data = _tagged_template_literal([
        "\n  width: 48px;\n  height: 48px;\n  border: 4px solid;\n  border-color: ",
        ";\n  border-radius: 50%;\n  animation: spin-anim 1.2s linear infinite;\n\n  @keyframes spin-anim {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"
    ]);
    _templateObject40 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject41() {
    var data = _tagged_template_literal([
        "\n  position: fixed;\n  top: 3%;\n  right: 3%;\n"
    ]);
    _templateObject41 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject42() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  height: 24px;\n  padding: 6px 16px 6px 8px;\n  /* width: 100%; */\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  border-radius: 8px;\n  border: ",
        ";\n  background: ",
        ";\n  svg {\n    cursor: pointer;\n  }\n"
    ]);
    _templateObject42 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject43() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  padding: 16px;\n  border-radius: 12px;\n  border: ",
        ";\n  background: ",
        ";\n  align-items: center;\n  width: 272px;\n  gap: 8px;\n"
    ]);
    _templateObject43 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject44() {
    var data = _tagged_template_literal([
        "\n  gap: 10px;\n"
    ]);
    _templateObject44 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject45() {
    var data = _tagged_template_literal([
        "\n  padding: 16px 24px;\n  display: flex;\n  border-radius: 12px;\n  border: ",
        ";\n  background: ",
        ";\n  align-items: center;\n  justify-content: space-between;\n  width: 368px;\n"
    ]);
    _templateObject45 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject46() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  align-items: center;\n  gap: 8px;\n"
    ]);
    _templateObject46 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject47() {
    var data = _tagged_template_literal([
        "\n  gap: 8px;\n  display: flex;\n  flex-direction: column;\n"
    ]);
    _templateObject47 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject48() {
    var data = _tagged_template_literal([
        "\n  padding: 4px;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 16px;\n  background: ",
        ";\n"
    ]);
    _templateObject48 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject49() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  gap: 8px;\n"
    ]);
    _templateObject49 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject50() {
    var data = _tagged_template_literal([
        "\n  width: 100%;\n  height: 100%;\n"
    ]);
    _templateObject50 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject51() {
    var data = _tagged_template_literal([
        "\n  button {\n    display: flex;\n    padding: 8px;\n    align-items: center;\n    gap: 10px;\n    border-radius: 8px;\n    border: ",
        ";\n    background: #0e1c28 !important;\n    margin-bottom: 8px;\n  }\n\n  .react-flow__controls button path {\n    fill: #fff;\n  }\n"
    ]);
    _templateObject51 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject52() {
    var data = _tagged_template_literal([
        "\n  padding: 10px;\n  border: ",
        ";\n  border-radius: 8px;\n  width: fit-content;\n  width: 344px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"
    ]);
    _templateObject52 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject53() {
    var data = _tagged_template_literal([
        "\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  :hover {\n    background: ",
        ";\n    p {\n      color: #fff !important;\n    }\n  }\n"
    ]);
    _templateObject53 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject54() {
    var data = _tagged_template_literal([
        "\n  padding: 8px 12px;\n  border-radius: 4px;\n  background: transparent;\n  border: ",
        ";\n  cursor: pointer !important;\n"
    ]);
    _templateObject54 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject55() {
    var data = _tagged_template_literal([
        "\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"
    ]);
    _templateObject55 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject56() {
    var data = _tagged_template_literal([
        "\n  padding: 40px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n"
    ]);
    _templateObject56 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject57() {
    var data = _tagged_template_literal([
        "\n  display: block;\n  padding: 10px 30px;\n  border-radius: 3px;\n  color: ",
        ";\n  border: 1px solid ",
        ";\n  background-color: ",
        ';\n  font-family: "Robot", sans-serif;\n  font-weight: 500;\n  transition: 0.3s ease all;\n\n  &:hover {\n    background-color: ',
        ";\n  }\n"
    ]);
    _templateObject57 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject58() {
    var data = _tagged_template_literal([
        "\n  display: block;\n  padding: 10px 30px;\n  border-radius: 3px;\n  color: ",
        ";\n  border: 1px solid ",
        ';\n  background-color: transparent;\n  font-family: "Robot", sans-serif;\n  font-weight: 500;\n  transition: 0.3s ease all;\n\n  &:hover {\n    background-color: ',
        ";\n    color: ",
        ";\n  }\n"
    ]);
    _templateObject58 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject59() {
    var data = _tagged_template_literal([
        "\n  width: 100vw;\n  height: 100vh;\n  z-index: 9999;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: ",
        ";\n  display: flex;\n  align-items: center;\n  justify-content: ",
        ";\n  align-items: ",
        ";\n  padding: 40px;\n\n  @media (prefers-reduced-motion: no-preference) {\n    animation-name: ",
        ";\n    animation-fill-mode: backwards;\n  }\n"
    ]);
    _templateObject59 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject60() {
    var data = _tagged_template_literal([
        "\n  width: 500px;\n  min-height: 50px;\n  background-color: #ffffff;\n  position: relative;\n  border-radius: 8px;\n  padding: ",
        ";\n"
    ]);
    _templateObject60 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject61() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #ededed;\n"
    ]);
    _templateObject61 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject62() {
    var data = _tagged_template_literal([
        '\n  position: absolute;\n  top: 10px;\n  right: 20px;\n  width: 40px;\n  height: 40px;\n  border: none;\n  background-color: transparent;\n  transition: 0.3s ease all;\n  border-radius: 3px;\n  color: "#d1345b";\n  cursor: pointer;\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n'
    ]);
    _templateObject62 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject63() {
    var data = _tagged_template_literal([
        "\n  background-color: #ededed8b;\n  border: 1px solid #d4d2d2;\n  width: 100%;\n  height: 36px;\n  border-radius: 8px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #ededed;\n  }\n"
    ]);
    _templateObject63 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject64() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: ",
        ";\n"
    ]);
    _templateObject64 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject65() {
    var data = _tagged_template_literal([
        "\n  width: 100%;\n  display: flex;\n  gap: 2rem;\n  align-items: center;\n  justify-content: center;\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid #ededed;\n"
    ]);
    _templateObject65 = function _templateObject() {
        return data;
    };
    return data;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/index.tsx
var src_exports = {};
__export(src_exports, {
    DangerZone: function() {
        return DangerZone;
    },
    FloatBox: function() {
        return FloatBox;
    },
    KeyvalActionInput: function() {
        return KeyvalActionInput;
    },
    KeyvalButton: function() {
        return KeyvalButton;
    },
    KeyvalCard: function() {
        return KeyvalCard;
    },
    KeyvalCheckbox: function() {
        return KeyvalCheckbox;
    },
    KeyvalDataFlow: function() {
        return KeyvalDataFlow;
    },
    KeyvalDropDown: function() {
        return KeyvalDropDown;
    },
    KeyvalImage: function() {
        return KeyvalImage;
    },
    KeyvalInput: function() {
        return KeyvalInput;
    },
    KeyvalLink: function() {
        return KeyvalLink;
    },
    KeyvalLoader: function() {
        return KeyvalLoader;
    },
    KeyvalModal: function() {
        return KeyvalModal;
    },
    KeyvalNotification: function() {
        return KeyvalNotification;
    },
    KeyvalRadioButton: function() {
        return KeyvalRadioButton;
    },
    KeyvalSearchInput: function() {
        return KeyvalSearchInput;
    },
    KeyvalSelectedCounter: function() {
        return KeyvalSelectedCounter;
    },
    KeyvalSwitch: function() {
        return KeyvalSwitch;
    },
    KeyvalTag: function() {
        return KeyvalTag;
    },
    KeyvalTap: function() {
        return KeyvalTap;
    },
    KeyvalText: function() {
        return KeyvalText;
    },
    KeyvalTooltip: function() {
        return KeyvalTooltip;
    },
    KeyvalVideo: function() {
        return KeyvalVideo;
    },
    ThemeProviderWrapper: function() {
        return ThemeProviderWrapper;
    }
});
module.exports = __toCommonJS(src_exports);
// src/design.system/radio/radio.tsx
var import_react2 = __toESM(require("react"));
// src/design.system/radio/radio.styled.tsx
var import_styled_components = __toESM(require("styled-components"));
var RadioButtonContainer = import_styled_components.default.label(_templateObject());
var RadioButtonBorder = import_styled_components.default.span(_templateObject1(), function(param) {
    var theme2 = param.theme;
    return "solid 2px ".concat(theme2.colors.light_grey);
});
// src/design.system/text/text.tsx
var import_react = __toESM(require("react"));
// src/design.system/text/text.styled.tsx
var import_styled_components2 = __toESM(require("styled-components"));
var TextWrapper = import_styled_components2.default.p(_templateObject2(), function(param) {
    var theme2 = param.theme;
    return theme2.text.white;
}, function(param) {
    var theme2 = param.theme;
    return theme2.font_family.primary;
});
// src/design.system/text/text.tsx
function KeyvalText(param) {
    var children = param.children, color = param.color, style = param.style, weight = param.weight, size = param.size;
    return /* @__PURE__ */ import_react.default.createElement(TextWrapper, {
        style: _object_spread({
            fontWeight: weight,
            color: color,
            fontSize: size
        }, style)
    }, children);
}
// src/assets/icons/checked-radio.svg
var checked_radio_default = "./checked-radio-QJNJNSOQ.svg";
// src/design.system/radio/radio.tsx
var KeyvalRadioButton = function(param) {
    var _param_label = param.label, label = _param_label === void 0 ? "" : _param_label, onChange = param.onChange, value = param.value;
    var handleChange = function handleChange() {
        onChange && onChange({});
    };
    return /* @__PURE__ */ import_react2.default.createElement(RadioButtonContainer, null, /* @__PURE__ */ import_react2.default.createElement("div", {
        onClick: handleChange
    }, value ? /* @__PURE__ */ import_react2.default.createElement(checked_radio_default, {
        width: 25,
        height: 25
    }) : /* @__PURE__ */ import_react2.default.createElement(RadioButtonBorder, null)), /* @__PURE__ */ import_react2.default.createElement(KeyvalText, null, label));
};
// src/design.system/button/button.tsx
var import_react3 = __toESM(require("react"));
// src/design.system/button/button.styled.tsx
var import_styled_components3 = __toESM(require("styled-components"));
var ButtonContainer = import_styled_components3.default.div(_templateObject3(), function(param) {
    var theme2 = param.theme, disabled = param.disabled;
    return disabled ? theme2.colors.blue_grey : theme2.colors.torquiz_light;
}, function(param) {
    var disabled = param.disabled;
    return disabled ? "not-allowed !important" : "pointer !important";
});
var StyledButton = import_styled_components3.default.button(_templateObject4(), function(param) {
    var disabled = param.disabled;
    return disabled ? "not-allowed !important" : "pointer !important";
}, function(param) {
    var theme2 = param.theme, disabled = param.disabled;
    return disabled ? theme2.colors.blue_grey : theme2.colors.secondary;
});
// src/design.system/button/button.tsx
var KeyvalButton = function(param) {
    var _param_variant = param.variant, variant = _param_variant === void 0 ? "primary" : _param_variant, children = param.children, style = param.style, onClick = param.onClick, disabled = param.disabled;
    return /* @__PURE__ */ import_react3.default.createElement(ButtonContainer, {
        disabled: disabled
    }, /* @__PURE__ */ import_react3.default.createElement(StyledButton, {
        disabled: disabled,
        onClick: onClick,
        style: _object_spread({}, style)
    }, children));
};
// src/design.system/float.box/float.box.tsx
var import_react4 = __toESM(require("react"));
var import_styled_components4 = __toESM(require("styled-components"));
var FloatBoxBorder = import_styled_components4.default.div(_templateObject5());
var FloatBoxWrapper = import_styled_components4.default.div(_templateObject6());
function FloatBox(param) {
    var children = param.children, _param_style = param.style, style = _param_style === void 0 ? {} : _param_style;
    return /* @__PURE__ */ import_react4.default.createElement(FloatBoxBorder, null, /* @__PURE__ */ import_react4.default.createElement(FloatBoxWrapper, {
        style: _object_spread({}, style)
    }, children));
}
// src/design.system/card/card.tsx
var import_react5 = __toESM(require("react"));
// src/design.system/card/card.styled.tsx
var import_styled_components5 = __toESM(require("styled-components"));
var CardContainer = import_styled_components5.default.div(_templateObject7(), function(param) {
    var selected = param.selected, theme2 = param.theme;
    return "1px solid ".concat(selected ? theme2.colors.secondary : theme2.colors.dark_blue);
}, function(param) {
    var theme2 = param.theme;
    return theme2.colors.dark;
});
// src/design.system/card/card.tsx
function KeyvalCard(param) {
    var children = param.children, _param_focus = param.focus, focus = _param_focus === void 0 ? false : _param_focus;
    return /* @__PURE__ */ import_react5.default.createElement(CardContainer, {
        selected: focus || void 0
    }, children);
}
// src/design.system/tag/tag.tsx
var import_react6 = __toESM(require("react"));
var import_styled_components6 = __toESM(require("styled-components"));
var TagWrapper = import_styled_components6.default.div(_templateObject8());
function KeyvalTag(param) {
    var _param_title = param.title, title = _param_title === void 0 ? "" : _param_title, _param_color = param.color, color = _param_color === void 0 ? "#033869" : _param_color;
    return /* @__PURE__ */ import_react6.default.createElement(TagWrapper, {
        style: {
            backgroundColor: color
        }
    }, /* @__PURE__ */ import_react6.default.createElement(KeyvalText, {
        weight: 500,
        size: 13,
        color: "#CCD0D2"
    }, title));
}
// src/design.system/tap/tap.tsx
var import_react7 = __toESM(require("react"));
var import_styled_components7 = __toESM(require("styled-components"));
var TapWrapper = import_styled_components7.default.div(_templateObject9(), function(param) {
    var theme2 = param.theme, selected = param.selected;
    return "1px solid ".concat(selected ? "transparent" : theme2.colors.dark_blue);
}, function(param) {
    var theme2 = param.theme, selected = param.selected;
    return selected ? theme2.colors.dark_blue : "transparent";
});
function KeyvalTap(param) {
    var _param_title = param.title, title = _param_title === void 0 ? "" : _param_title, tapped = param.tapped, children = param.children, style = param.style, onClick = param.onClick;
    return /* @__PURE__ */ import_react7.default.createElement(TapWrapper, {
        onClick: onClick,
        selected: tapped,
        style: _object_spread_props(_object_spread({}, style), {
            cursor: onClick ? "pointer" : "auto"
        })
    }, children, /* @__PURE__ */ import_react7.default.createElement(KeyvalText, {
        weight: 400,
        size: 14,
        color: tapped ? "#CCD0D2" : "#8B92A5",
        style: {
            cursor: onClick ? "pointer" : "auto"
        }
    }, title));
}
// src/design.system/drop.down/drop.down.tsx
var import_react10 = __toESM(require("react"));
// src/assets/icons/expand-arrow.svg
var expand_arrow_default = "./expand-arrow-EVPYUWXL.svg";
// src/design.system/drop.down/drop.down.styled.tsx
var import_styled_components8 = __toESM(require("styled-components"));
var DropdownWrapper = import_styled_components8.default.div(_templateObject10(), function(param) {
    var selected = param.selected, theme2 = param.theme;
    return "1px solid  ".concat(selected ? theme2.colors.white : theme2.colors.blue_grey);
}, function(param) {
    var theme2 = param.theme;
    return theme2.colors.dark;
});
var DropdownHeader = import_styled_components8.default.div(_templateObject11(), function(param) {
    var theme2 = param.theme;
    return theme2.text.white;
}, function(param) {
    var theme2 = param.theme;
    return theme2.font_family.primary;
});
var DropdownBody = import_styled_components8.default.div(_templateObject12(), function(param) {
    var theme2 = param.theme;
    return "1px solid ".concat(theme2.colors.blue_grey);
}, function(param) {
    var theme2 = param.theme;
    return theme2.colors.dark;
});
var DropdownListWrapper = import_styled_components8.default.div(_templateObject13(), function(param) {
    var theme2 = param.theme;
    return theme2.colors.dark_blue;
});
var DropdownItem = import_styled_components8.default.div(_templateObject14());
// src/design.system/search.input/search.input.tsx
var import_react8 = __toESM(require("react"));
// src/design.system/search.input/search.input.styled.tsx
var import_styled_components9 = __toESM(require("styled-components"));
var SearchInputWrapper = import_styled_components9.default.div(_templateObject15(), function(param) {
    var active = param.active, theme2 = param.theme;
    return "1px solid ".concat(active ? theme2.colors.white : theme2.colors.blue_grey);
}, function(param) {
    var active = param.active, theme2 = param.theme;
    return "".concat(active ? theme2.colors.dark : theme2.colors.light_dark);
}, function(param) {
    var theme2 = param.theme;
    return "solid 1px ".concat(theme2.colors.white);
});
var StyledSearchInput = import_styled_components9.default.input(_templateObject16(), function(param) {
    var active = param.active, theme2 = param.theme;
    return "".concat(active ? theme2.colors.dark : "transparent");
}, function(param) {
    var active = param.active, theme2 = param.theme;
    return "".concat(active ? theme2.colors.white : theme2.text.grey);
}, function(param) {
    var theme2 = param.theme;
    return theme2.font_family.primary;
}, function(param) {
    var theme2 = param.theme;
    return "solid 1px ".concat(theme2.colors.white);
});
// src/assets/icons/glass.svg
var glass_default = "./glass-BCM6GGHZ.svg";
// src/assets/icons/X.svg
var X_default = "./X-H3IN6ZOP.svg";
// src/design.system/search.input/search.input.tsx
function KeyvalSearchInput(param) {
    var _param_placeholder = param.placeholder, placeholder = _param_placeholder === void 0 ? "Search" : _param_placeholder, _param_value = param.value, value = _param_value === void 0 ? "" : _param_value, _param_onChange = param.onChange, onChange = _param_onChange === void 0 ? function() {} : _param_onChange, _param_loading = param.loading, loading = _param_loading === void 0 ? false : _param_loading, _param_containerStyle = param.containerStyle, containerStyle = _param_containerStyle === void 0 ? {} : _param_containerStyle, _param_inputStyle = param.inputStyle, inputStyle = _param_inputStyle === void 0 ? {} : _param_inputStyle, _param_showClear = param.showClear, showClear = _param_showClear === void 0 ? true : _param_showClear;
    var clear = value ? function() {
        return onChange({
            target: {
                value: ""
            }
        });
    } : null;
    return /* @__PURE__ */ import_react8.default.createElement(SearchInputWrapper, {
        active: !!value || void 0,
        style: _object_spread({}, containerStyle)
    }, /* @__PURE__ */ import_react8.default.createElement(glass_default, null), /* @__PURE__ */ import_react8.default.createElement(StyledSearchInput, {
        style: _object_spread({}, inputStyle),
        value: value,
        active: !!value || void 0,
        placeholder: placeholder,
        onChange: onChange
    }), showClear && /* @__PURE__ */ import_react8.default.createElement(X_default, {
        onClick: clear,
        style: {
            cursor: "pointer"
        }
    }));
}
// src/hooks/useOnClickOutside.tsx
var import_react9 = require("react");
function useOnClickOutside(ref, handler) {
    (0, import_react9.useEffect)(function() {
        var listener = function(event) {
            var _ref, _event, _el;
            var el = (_ref = ref) === null || _ref === void 0 ? void 0 : _ref.current;
            if ((_el = el) === null || _el === void 0 ? void 0 : _el.contains((_event = event) === null || _event === void 0 ? void 0 : _event.target)) return null;
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return function() {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [
        ref,
        handler
    ]);
}
// src/design.system/drop.down/drop.down.tsx
var SELECTED_ITEM = "Select item";
var CONTAINER_STYLE = {
    width: "90%",
    border: "none",
    background: "transparent"
};
var SEARCH_INPUT_STYLE = {
    background: "transparent"
};
function KeyvalDropDown(param) {
    var _param_data = param.data, data = _param_data === void 0 ? [] : _param_data, onChange = param.onChange, childComp = param.childComp, _param_width = param.width, width = _param_width === void 0 ? 260 : _param_width, value = param.value;
    var getDropdownList = function getDropdownList() {
        var _data;
        return searchFilter ? (_data = data) === null || _data === void 0 ? void 0 : _data.filter(function(item) {
            var _item;
            return (_item = item) === null || _item === void 0 ? void 0 : _item.label.toLowerCase().includes(searchFilter.toLowerCase());
        }) : data;
    };
    var _ref = _sliced_to_array((0, import_react10.useState)(false), 2), isOpen = _ref[0], setOpen = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react10.useState)(value || null), 2), selectedItem = _ref1[0], setSelectedItem = _ref1[1];
    var _ref2 = _sliced_to_array((0, import_react10.useState)(false), 2), isHover = _ref2[0], setHover = _ref2[1];
    var _ref3 = _sliced_to_array((0, import_react10.useState)(""), 2), searchFilter = _ref3[0], setSearchFilter = _ref3[1];
    var containerRef = (0, import_react10.useRef)(null);
    (0, import_react10.useEffect)(function() {
        value && setSelectedItem(value);
    }, [
        value
    ]);
    useOnClickOutside(containerRef, function() {
        return setOpen(false);
    });
    var toggleDropdown = function() {
        return setOpen(!isOpen);
    };
    var handleItemClick = function(item) {
        onChange(item);
        setSelectedItem(item);
        setSearchFilter("");
        setOpen(false);
    };
    return /* @__PURE__ */ import_react10.default.createElement("div", {
        style: {
            height: 37,
            width: width
        },
        ref: containerRef
    }, /* @__PURE__ */ import_react10.default.createElement(DropdownWrapper, {
        selected: isHover,
        onMouseEnter: function() {
            return setHover(true);
        },
        onMouseLeave: function() {
            return setHover(false);
        },
        onClick: toggleDropdown
    }, /* @__PURE__ */ import_react10.default.createElement(DropdownHeader, null, selectedItem ? selectedItem.label : SELECTED_ITEM, /* @__PURE__ */ import_react10.default.createElement(expand_arrow_default, {
        className: "dropdown-arrow ".concat(isOpen && "open")
    }))), isOpen && /* @__PURE__ */ import_react10.default.createElement(DropdownBody, null, /* @__PURE__ */ import_react10.default.createElement(KeyvalSearchInput, {
        value: searchFilter,
        onChange: function(e) {
            return setSearchFilter(e.target.value);
        },
        placeholder: "Search",
        containerStyle: CONTAINER_STYLE,
        inputStyle: SEARCH_INPUT_STYLE,
        showClear: false
    }), /* @__PURE__ */ import_react10.default.createElement(DropdownListWrapper, null, getDropdownList().map(function(item) {
        return /* @__PURE__ */ import_react10.default.createElement(DropdownItem, {
            key: item.id,
            onClick: function(e) {
                return handleItemClick(item);
            }
        }, /* @__PURE__ */ import_react10.default.createElement(KeyvalText, null, item.label), /* @__PURE__ */ import_react10.default.createElement("div", null, childComp));
    }))));
}
// src/design.system/switch/switch.tsx
var import_react11 = __toESM(require("react"));
// src/design.system/switch/switch.styled.tsx
var import_styled_components10 = __toESM(require("styled-components"));
var SwitchInputWrapper = import_styled_components10.default.div(_templateObject17());
var SwitchToggleWrapper = import_styled_components10.default.div(_templateObject18(), function(param) {
    var active = param.active, theme2 = param.theme;
    return active ? theme2.colors.secondary : theme2.text.grey;
});
var SwitchButtonWrapper = import_styled_components10.default.span(_templateObject19(), function(param) {
    var disabled = param.disabled, theme2 = param.theme;
    return !disabled ? theme2.text.light_grey : theme2.text.white;
}, function(param) {
    var disabled = param.disabled;
    return !disabled ? 2 : 18;
});
// src/design.system/switch/switch.tsx
function KeyvalSwitch(param) {
    var toggle = param.toggle, handleToggleChange = param.handleToggleChange, style = param.style, _param_label = param.label, label = _param_label === void 0 ? "Select All" : _param_label;
    return /* @__PURE__ */ import_react11.default.createElement(SwitchInputWrapper, null, /* @__PURE__ */ import_react11.default.createElement(SwitchToggleWrapper, {
        active: toggle || void 0,
        onClick: handleToggleChange
    }, /* @__PURE__ */ import_react11.default.createElement(SwitchButtonWrapper, {
        disabled: toggle || void 0
    })), label && /* @__PURE__ */ import_react11.default.createElement(KeyvalText, {
        size: 14
    }, label));
}
// src/design.system/checkbox/checkbox.tsx
var import_react12 = __toESM(require("react"));
// src/design.system/checkbox/checkbox.styled.tsx
var import_styled_components11 = require("styled-components");
var CheckboxWrapper = import_styled_components11.styled.div(_templateObject20(), function(param) {
    var disabled = param.disabled;
    return disabled ? "not-allowed" : "pointer";
}, function(param) {
    var disabled = param.disabled;
    return disabled ? "none" : "auto";
}, function(param) {
    var disabled = param.disabled;
    return disabled ? "0.5" : "1";
});
var Checkbox = import_styled_components11.styled.span(_templateObject21(), function(param) {
    var theme2 = param.theme;
    return "solid 1px ".concat(theme2.colors.light_grey);
});
// src/assets/icons/checkbox-rect.svg
var checkbox_rect_default = "./checkbox-rect-MLG44VTN.svg";
// src/design.system/checkbox/checkbox.tsx
function KeyvalCheckbox(param) {
    var onChange = param.onChange, value = param.value, _param_label = param.label, label = _param_label === void 0 ? "" : _param_label, _param_disabled = param.disabled, disabled = _param_disabled === void 0 ? false : _param_disabled;
    return /* @__PURE__ */ import_react12.default.createElement(CheckboxWrapper, {
        disabled: disabled || void 0,
        onClick: onChange
    }, value ? /* @__PURE__ */ import_react12.default.createElement(checkbox_rect_default, null) : /* @__PURE__ */ import_react12.default.createElement(Checkbox, null), /* @__PURE__ */ import_react12.default.createElement(KeyvalText, {
        size: 14
    }, label));
}
// src/design.system/selected.counter/selected.counter.tsx
var import_react13 = __toESM(require("react"));
// src/design.system/selected.counter/selected.counter.styled.tsx
var import_styled_components12 = __toESM(require("styled-components"));
var SelectedCounterWrapper = import_styled_components12.default.div(_templateObject22(), function(param) {
    var theme2 = param.theme;
    return theme2.colors.dark_blue;
});
// src/assets/icons/check.svg
var check_default = "./check-RBBYOT2T.svg";
// src/design.system/selected.counter/selected.counter.tsx
function KeyvalSelectedCounter(param) {
    var total = param.total, selected = param.selected;
    return /* @__PURE__ */ import_react13.default.createElement(SelectedCounterWrapper, null, selected !== 0 && /* @__PURE__ */ import_react13.default.createElement(check_default, null), /* @__PURE__ */ import_react13.default.createElement(KeyvalText, {
        size: 13,
        weight: 500
    }, "".concat(selected, " / ").concat(total)));
}
// src/design.system/link/link.tsx
var import_react14 = __toESM(require("react"));
var import_styled_components13 = require("styled-components");
var LinkContainer = import_styled_components13.styled.div(_templateObject23());
function KeyvalLink(param) {
    var value = param.value, onClick = param.onClick;
    return /* @__PURE__ */ import_react14.default.createElement(LinkContainer, {
        onClick: onClick
    }, /* @__PURE__ */ import_react14.default.createElement(KeyvalText, {
        color: "#0EE6F3"
    }, value));
}
// src/design.system/tooltip/tooltip.tsx
var import_react15 = __toESM(require("react"));
// src/assets/icons/question.svg
var question_default = "./question-LLN6JRUE.svg";
// src/design.system/tooltip/tooltip.styled.tsx
var import_styled_components14 = __toESM(require("styled-components"));
var TooltipWrapper = import_styled_components14.default.div(_templateObject24());
var TooltipContentWrapper = import_styled_components14.default.div(_templateObject25(), function(param) {
    var theme2 = param.theme;
    return theme2.colors.dark;
});
// src/design.system/tooltip/tooltip.tsx
function KeyvalTooltip(props) {
    var timeout;
    var _ref = _sliced_to_array((0, import_react15.useState)(false), 2), active = _ref[0], setActive = _ref[1];
    var showTip = function() {
        timeout = setTimeout(function() {
            setActive(true);
        }, props.delay || 400);
    };
    var hideTip = function() {
        clearInterval(timeout);
        setActive(false);
    };
    return /* @__PURE__ */ import_react15.default.createElement(TooltipWrapper, {
        onMouseEnter: showTip,
        onMouseLeave: hideTip
    }, active && /* @__PURE__ */ import_react15.default.createElement(TooltipContentWrapper, null, /* @__PURE__ */ import_react15.default.createElement(KeyvalText, {
        size: 12,
        weight: 500
    }, props.content)), /* @__PURE__ */ import_react15.default.createElement(question_default, null));
}
// src/design.system/image/image.tsx
var import_image = __toESM(require("next/image"));
var import_react16 = __toESM(require("react"));
var IMAGE_STYLE = {
    borderRadius: 10
};
function KeyvalImage(param) {
    var src = param.src, alt = param.alt, _param_width = param.width, width = _param_width === void 0 ? 56 : _param_width, _param_height = param.height, height = _param_height === void 0 ? 56 : _param_height, _param_style = param.style, style = _param_style === void 0 ? {} : _param_style;
    return /* @__PURE__ */ import_react16.default.createElement(import_image.default, {
        src: src,
        alt: alt || "",
        width: width,
        height: height,
        style: _object_spread({}, IMAGE_STYLE, style)
    });
}
// src/design.system/input/input.tsx
var import_react17 = __toESM(require("react"));
// src/design.system/input/input.styled.tsx
var import_styled_components15 = require("styled-components");
var StyledInputContainer = import_styled_components15.styled.div(_templateObject26(), function(param) {
    var theme2 = param.theme, hasError = param.hasError, active = param.active;
    return "1px solid ".concat(hasError ? theme2.colors.error : active ? theme2.text.grey : theme2.colors.blue_grey);
}, function(param) {
    var theme2 = param.theme;
    return theme2.colors.light_dark;
}, function(param) {
    var theme2 = param.theme;
    return "solid 1px ".concat(theme2.text.grey);
});
var StyledActionInputContainer = import_styled_components15.styled.div(_templateObject27(), function(param) {
    var theme2 = param.theme;
    return "1px solid ".concat(theme2.colors.secondary);
});
var StyledInput = import_styled_components15.styled.input(_templateObject28(), function(param) {
    var theme2 = param.theme;
    return theme2.text.white;
});
var StyledActionInput = (0, import_styled_components15.styled)(StyledInput)(_templateObject29());
var LabelWrapper = import_styled_components15.styled.div(_templateObject30());
var ErrorWrapper = import_styled_components15.styled.div(_templateObject31());
var DisplayIconsWrapper = import_styled_components15.styled.div(_templateObject32());
// src/assets/icons/eye-open.svg
var eye_open_default = "./eye-open-ECPQFKVQ.svg";
// src/assets/icons/eye-close.svg
var eye_close_default = "./eye-close-SRDYBMNB.svg";
// src/design.system/input/input.tsx
function KeyvalInput(param) {
    var label = param.label, value = param.value, onChange = param.onChange, _param_type = param.type, type = _param_type === void 0 ? "text" : _param_type, error = param.error, _param_style = param.style, style = _param_style === void 0 ? {} : _param_style;
    var handleChange = function handleChange(event) {
        onChange(event.target.value);
    };
    var _ref = _sliced_to_array((0, import_react17.useState)(false), 2), showPassword = _ref[0], setShowPassword = _ref[1];
    return /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null, label && /* @__PURE__ */ import_react17.default.createElement(LabelWrapper, null, /* @__PURE__ */ import_react17.default.createElement(KeyvalText, {
        size: 14,
        weight: 600
    }, label)), /* @__PURE__ */ import_react17.default.createElement(StyledInputContainer, {
        active: !!value || void 0,
        hasError: !!error,
        style: _object_spread({}, style)
    }, /* @__PURE__ */ import_react17.default.createElement(StyledInput, {
        type: showPassword ? "text" : type,
        value: value,
        onChange: handleChange,
        autoComplete: "off"
    }), type === "password" && /* @__PURE__ */ import_react17.default.createElement(DisplayIconsWrapper, {
        onClick: function() {
            return setShowPassword(!showPassword);
        }
    }, !showPassword ? /* @__PURE__ */ import_react17.default.createElement(eye_open_default, {
        width: 16,
        height: 16
    }) : /* @__PURE__ */ import_react17.default.createElement(eye_close_default, {
        width: 16,
        height: 16
    }))), error && /* @__PURE__ */ import_react17.default.createElement(ErrorWrapper, null, /* @__PURE__ */ import_react17.default.createElement(KeyvalText, {
        size: 14,
        color: "#FD3F3F"
    }, error)));
}
// src/design.system/input/action.input.tsx
var import_react18 = __toESM(require("react"));
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
    colors: colors,
    text: text,
    font_family: font_family
};
var palette_default = theme;
// src/design.system/input/action.input.tsx
function KeyvalActionInput(param) {
    var value = param.value, onChange = param.onChange, _param_style = param.style, style = _param_style === void 0 ? {} : _param_style, onAction = param.onAction;
    var handleChange = function handleChange(event) {
        onChange(event.target.value);
    };
    return /* @__PURE__ */ import_react18.default.createElement(import_react18.default.Fragment, null, /* @__PURE__ */ import_react18.default.createElement(StyledActionInputContainer, {
        style: _object_spread({}, style)
    }, /* @__PURE__ */ import_react18.default.createElement(StyledActionInput, {
        value: value,
        onChange: handleChange,
        autoComplete: "off"
    }), /* @__PURE__ */ import_react18.default.createElement(KeyvalButton, {
        onClick: onAction
    }, /* @__PURE__ */ import_react18.default.createElement(KeyvalText, {
        size: 14,
        weight: 500,
        color: palette_default.text.dark_button
    }, "Save"))));
}
// src/design.system/video/video.tsx
var import_react19 = __toESM(require("react"));
// src/assets/icons/close.svg
var close_default = "./close-VUVDQRMG.svg";
// src/assets/icons/player.svg
var player_default = "./player-YXZCGNAK.svg";
// src/design.system/video/video.styled.tsx
var import_styled_components16 = require("styled-components");
var ImagePreviewWrapper = import_styled_components16.styled.div(_templateObject33(), function(param) {
    var url = param.url;
    return "linear-gradient(\n      0deg,\n      rgba(2, 20, 30, 0.2) 0%,\n      rgba(2, 20, 30, 0.2) 100%\n    ),\n    url(".concat(url, "),\n    lightgray 50%");
});
var PlayerIconWrapper = import_styled_components16.styled.div(_templateObject34());
var LargePlayerIconWrapper = (0, import_styled_components16.styled)(PlayerIconWrapper)(_templateObject35());
var StyledLargeVideo = import_styled_components16.styled.video(_templateObject36());
var LargeVideoHeader = import_styled_components16.styled.div(_templateObject37());
var LargeVideoContainer = import_styled_components16.styled.div(_templateObject38());
// src/design.system/video/video.tsx
function KeyvalVideo(param) {
    var videoSrc = param.videoSrc, title = param.title, thumbnail = param.thumbnail;
    var _ref = _sliced_to_array((0, import_react19.useState)(false), 2), isLarge = _ref[0], setIsLarge = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react19.useState)(true), 2), pause = _ref1[0], setPause = _ref1[1];
    var handleClick = function() {
        setIsLarge(true);
    };
    var handleClose = function() {
        setIsLarge(false);
        setPause(true);
    };
    var renderSmallView = function() {
        return /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, null, /* @__PURE__ */ import_react19.default.createElement(KeyvalText, {
            size: 16,
            weight: 600
        }, title), /* @__PURE__ */ import_react19.default.createElement(ImagePreviewWrapper, {
            onClick: handleClick,
            url: thumbnail
        }, /* @__PURE__ */ import_react19.default.createElement(PlayerIconWrapper, null, /* @__PURE__ */ import_react19.default.createElement(player_default, {
            width: 30
        }))));
    };
    var renderLargeView = function() {
        return /* @__PURE__ */ import_react19.default.createElement(LargeVideoContainer, null, /* @__PURE__ */ import_react19.default.createElement(LargeVideoHeader, null, /* @__PURE__ */ import_react19.default.createElement(KeyvalText, {
            size: 20,
            weight: 600
        }, title), /* @__PURE__ */ import_react19.default.createElement(close_default, {
            onClick: handleClose,
            style: {
                cursor: "pointer"
            }
        })), !pause ? /* @__PURE__ */ import_react19.default.createElement(StyledLargeVideo, {
            src: videoSrc,
            autoPlay: true,
            controls: true
        }) : /* @__PURE__ */ import_react19.default.createElement(ImagePreviewWrapper, {
            url: thumbnail,
            style: {
                width: 980,
                height: 560
            },
            onClick: function() {
                return setPause(false);
            }
        }, /* @__PURE__ */ import_react19.default.createElement(LargePlayerIconWrapper, null, /* @__PURE__ */ import_react19.default.createElement(player_default, {
            width: 80
        }))));
    };
    return /* @__PURE__ */ import_react19.default.createElement("div", null, isLarge ? renderLargeView() : renderSmallView());
}
// src/design.system/loader/loader.tsx
var import_react20 = __toESM(require("react"));
// src/design.system/loader/loader.styled.tsx
var import_styled_components17 = __toESM(require("styled-components"));
var LoaderWrapper = import_styled_components17.default.div(_templateObject39());
var Loader = import_styled_components17.default.div(_templateObject40(), function(param) {
    var theme2 = param.theme;
    return "".concat(theme2.colors.secondary, " ").concat(theme2.colors.secondary, " ").concat(theme2.colors.secondary, "  transparent");
});
// src/design.system/loader/loader.tsx
function KeyvalLoader() {
    return /* @__PURE__ */ import_react20.default.createElement(LoaderWrapper, null, /* @__PURE__ */ import_react20.default.createElement(Loader, null));
}
// src/design.system/notification/notification.tsx
var import_react21 = __toESM(require("react"));
// src/design.system/notification/notification.styled.tsx
var import_styled_components18 = __toESM(require("styled-components"));
var NotificationContainer = import_styled_components18.default.div(_templateObject41());
var StyledNotification = import_styled_components18.default.div(_templateObject42(), function(param) {
    var theme2 = param.theme;
    return "1px solid ".concat(theme2.colors.secondary);
}, function(param) {
    var theme2 = param.theme;
    return theme2.colors.dark_blue;
});
// src/assets/icons/X-blue.svg
var X_blue_default = "./X-blue-G4IKHVO5.svg";
// src/assets/icons/success-notification.svg
var success_notification_default = "./success-notification-MZSTWMDU.svg";
// src/assets/icons/error-notification.svg
var error_notification_default = "./error-notification-6T6JZGKS.svg";
// src/design.system/notification/notification.tsx
function KeyvalNotification(param) {
    var type = param.type, message = param.message, onClose = param.onClose;
    var getIcon = function getIcon() {
        switch(type){
            case "success":
                return /* @__PURE__ */ import_react21.default.createElement(success_notification_default, null);
            case "error":
                return /* @__PURE__ */ import_react21.default.createElement(error_notification_default, null);
        }
    };
    var getNotificationStyle = function getNotificationStyle() {
        switch(type){
            case "error":
                return {
                    border: "1px solid #FD3F3F"
                };
            default:
                return {};
        }
    };
    (0, import_react21.useEffect)(function() {
        var id = setTimeout(function() {
            onClose && onClose();
        }, 5e3);
        return function() {
            clearTimeout(id);
        };
    }, []);
    return /* @__PURE__ */ import_react21.default.createElement(NotificationContainer, null, /* @__PURE__ */ import_react21.default.createElement(StyledNotification, {
        style: getNotificationStyle()
    }, getIcon(), /* @__PURE__ */ import_react21.default.createElement(KeyvalText, {
        weight: 500,
        size: 14
    }, message), /* @__PURE__ */ import_react21.default.createElement(X_blue_default, {
        onClick: onClose
    })));
}
// src/design.system/data.flow/index.tsx
var import_react25 = __toESM(require("react"));
var import_reactflow4 = __toESM(require("reactflow"));
// src/design.system/data.flow/keyval.middleware.tsx
var import_react22 = __toESM(require("react"));
var import_reactflow = require("reactflow");
// src/assets/icons/overview/middleware.svg
var middleware_default = "./middleware-JCI7LAYG.svg";
// src/assets/icons/overview/folder.svg
var folder_default = "./folder-BQDLSFZB.svg";
// src/design.system/data.flow/keyval.middleware.tsx
function NamespaceNode(param) {
    var isConnectable = param.isConnectable;
    return /* @__PURE__ */ import_react22.default.createElement("div", null, /* @__PURE__ */ import_react22.default.createElement(import_reactflow.Handle, {
        type: "target",
        position: import_reactflow.Position.Left,
        style: {
            visibility: "hidden"
        }
    }), /* @__PURE__ */ import_react22.default.createElement(middleware_default, null), /* @__PURE__ */ import_react22.default.createElement(import_reactflow.Handle, {
        type: "source",
        position: import_reactflow.Position.Right,
        id: "a",
        isConnectable: isConnectable,
        style: {
            visibility: "hidden"
        }
    }));
}
// src/design.system/data.flow/namespace.node.tsx
var import_react23 = __toESM(require("react"));
var import_reactflow2 = require("reactflow");
var import_styled_components19 = require("styled-components");
var NamespaceContainer = import_styled_components19.styled.div(_templateObject43(), function(param) {
    var theme2 = param.theme;
    return "solid 1px ".concat(theme2.colors.blue_grey);
}, function(param) {
    var theme2 = param.theme;
    return theme2.colors.light_dark;
});
var TextWrapper2 = import_styled_components19.styled.div(_templateObject44());
var namespace_node_default = (0, import_react23.memo)(function(param) {
    var data = param.data, isConnectable = param.isConnectable;
    var _data, _data1;
    return /* @__PURE__ */ import_react23.default.createElement(NamespaceContainer, null, /* @__PURE__ */ import_react23.default.createElement(folder_default, {
        width: 32
    }), /* @__PURE__ */ import_react23.default.createElement(TextWrapper2, null, /* @__PURE__ */ import_react23.default.createElement(KeyvalText, {
        size: 14,
        weight: 600
    }, (_data = data) === null || _data === void 0 ? void 0 : _data.name), /* @__PURE__ */ import_react23.default.createElement(KeyvalText, {
        color: "#8b92a5"
    }, "".concat((_data1 = data) === null || _data1 === void 0 ? void 0 : _data1.totalAppsInstrumented, " Apps Instrumented"))), /* @__PURE__ */ import_react23.default.createElement(import_reactflow2.Handle, {
        type: "source",
        position: import_reactflow2.Position.Right,
        id: "a",
        isConnectable: isConnectable,
        style: {
            visibility: "hidden"
        }
    }));
});
// src/design.system/data.flow/destination.node.tsx
var import_react24 = __toESM(require("react"));
var import_reactflow3 = require("reactflow");
var import_styled_components20 = require("styled-components");
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
            notFocus: function() {
                return logs_grey_default();
            },
            focus: function() {
                return logs_blue_default();
            }
        },
        title: MONITORS.LOGS,
        type: "logs",
        tapped: true
    },
    {
        id: 2,
        icons: {
            notFocus: function() {
                return chart_line_grey_default();
            },
            focus: function() {
                return chart_line_blue_default();
            }
        },
        title: MONITORS.METRICS,
        type: "metrics",
        tapped: true
    },
    {
        id: 3,
        icons: {
            notFocus: function() {
                return tree_structure_grey_default();
            },
            focus: function() {
                return tree_structure_blue_default();
            }
        },
        title: MONITORS.TRACES,
        type: "traces",
        tapped: true
    }
];
// src/design.system/data.flow/destination.node.tsx
var DestinationNodeContainer = import_styled_components20.styled.div(_templateObject45(), function(param) {
    var theme2 = param.theme;
    return "solid 1px ".concat(theme2.colors.blue_grey);
}, function(param) {
    var theme2 = param.theme;
    return theme2.colors.light_dark;
});
var NodeDataWrapper = import_styled_components20.styled.div(_templateObject46());
var TextWrapper3 = import_styled_components20.styled.div(_templateObject47());
var IMAGE_STYLE2 = {
    backgroundColor: "#fff",
    padding: 4
};
var IconWrapper = import_styled_components20.styled.div(_templateObject48(), function(param) {
    var theme2 = param.theme, tapped = param.tapped;
    return tapped ? theme2.colors.dark_blue : "#0e1c28";
});
var MonitorsListWrapper = import_styled_components20.styled.div(_templateObject49());
function DestinationNode(param) {
    var data = param.data, isConnectable = param.isConnectable;
    var renderMonitors = function renderMonitors() {
        return MONITORING_OPTIONS.map(function(monitor) {
            var _monitor, _monitor1, _data, _monitor2, _data1;
            return /* @__PURE__ */ import_react24.default.createElement(IconWrapper, {
                key: (_monitor = monitor) === null || _monitor === void 0 ? void 0 : _monitor.id,
                tapped: ((_data = data) === null || _data === void 0 ? void 0 : _data.signals[(_monitor1 = monitor) === null || _monitor1 === void 0 ? void 0 : _monitor1.type]) || false
            }, ((_data1 = data) === null || _data1 === void 0 ? void 0 : _data1.signals[(_monitor2 = monitor) === null || _monitor2 === void 0 ? void 0 : _monitor2.type]) ? monitor.icons.focus() : monitor.icons.notFocus());
        });
    };
    var _data_destination_type, _data, _data_destination_type1, _data1, _data2;
    return /* @__PURE__ */ import_react24.default.createElement(DestinationNodeContainer, null, /* @__PURE__ */ import_react24.default.createElement(NodeDataWrapper, null, /* @__PURE__ */ import_react24.default.createElement(KeyvalImage, {
        src: (_data = data) === null || _data === void 0 ? void 0 : (_data_destination_type = _data.destination_type) === null || _data_destination_type === void 0 ? void 0 : _data_destination_type.image_url,
        width: 40,
        height: 40,
        style: IMAGE_STYLE2
    }), /* @__PURE__ */ import_react24.default.createElement(TextWrapper3, null, /* @__PURE__ */ import_react24.default.createElement(KeyvalText, {
        size: 14,
        weight: 600
    }, (_data1 = data) === null || _data1 === void 0 ? void 0 : (_data_destination_type1 = _data1.destination_type) === null || _data_destination_type1 === void 0 ? void 0 : _data_destination_type1.display_name), /* @__PURE__ */ import_react24.default.createElement(KeyvalText, {
        color: "#8b92a5"
    }, (_data2 = data) === null || _data2 === void 0 ? void 0 : _data2.name))), /* @__PURE__ */ import_react24.default.createElement(MonitorsListWrapper, null, renderMonitors()), /* @__PURE__ */ import_react24.default.createElement(import_reactflow3.Handle, {
        type: "target",
        position: import_reactflow3.Position.Left,
        id: "a",
        isConnectable: isConnectable,
        style: {
            visibility: "hidden"
        }
    }));
}
// src/design.system/data.flow/index.tsx
var import_style = require("reactflow/dist/style.css");
// src/design.system/data.flow/data.flow.styled.tsx
var import_styled_components21 = __toESM(require("styled-components"));
var DataFlowContainer = import_styled_components21.default.div(_templateObject50());
var ControllerWrapper = import_styled_components21.default.div(_templateObject51(), function(param) {
    var theme2 = param.theme;
    return "1px solid ".concat(theme2.colors.blue_grey);
});
// src/design.system/data.flow/index.tsx
var backgroundColor = palette_default.colors.light_dark;
var nodeTypes = {
    custom: NamespaceNode,
    namespace: namespace_node_default,
    destination: DestinationNode
};
function DataFlow(param) {
    var nodes = param.nodes, edges = param.edges;
    var fitView = (0, import_reactflow4.useReactFlow)().fitView;
    (0, import_react25.useEffect)(function() {
        setTimeout(function() {
            fitView();
        }, 100);
    }, [
        fitView,
        nodes,
        edges
    ]);
    return /* @__PURE__ */ import_react25.default.createElement(DataFlowContainer, null, /* @__PURE__ */ import_react25.default.createElement(import_reactflow4.default, {
        nodes: nodes,
        edges: edges,
        nodeTypes: nodeTypes,
        nodesDraggable: false,
        nodeOrigin: [
            0.4,
            0.4
        ]
    }, /* @__PURE__ */ import_react25.default.createElement(ControllerWrapper, null, /* @__PURE__ */ import_react25.default.createElement(import_reactflow4.Controls, {
        position: "top-left",
        showInteractive: false
    })), /* @__PURE__ */ import_react25.default.createElement(import_reactflow4.Background, {
        gap: 12,
        size: 1,
        style: {
            backgroundColor: backgroundColor
        }
    })));
}
function KeyvalDataFlow(props) {
    return /* @__PURE__ */ import_react25.default.createElement(import_reactflow4.ReactFlowProvider, null, /* @__PURE__ */ import_react25.default.createElement(DataFlow, _object_spread({}, props)));
}
// src/design.system/danger.zone/danger.zone.tsx
var import_react26 = __toESM(require("react"));
var import_styled_components22 = require("styled-components");
var DangerZoneWrapper = import_styled_components22.styled.div(_templateObject52(), function(param) {
    var theme2 = param.theme;
    return "1px solid ".concat(theme2.colors.blue_grey);
});
var DangerButtonWrapper = import_styled_components22.styled.div(_templateObject53(), function(param) {
    var theme2 = param.theme;
    return theme2.colors.error;
});
var DangerButton = import_styled_components22.styled.button(_templateObject54(), function(param) {
    var theme2 = param.theme;
    return "1px solid ".concat(theme2.colors.blue_grey);
});
function DangerZone(param) {
    var title = param.title, subTitle = param.subTitle, btnText = param.btnText, onClick = param.onClick;
    return /* @__PURE__ */ import_react26.default.createElement(import_react26.default.Fragment, null, /* @__PURE__ */ import_react26.default.createElement(DangerZoneWrapper, null, /* @__PURE__ */ import_react26.default.createElement(KeyvalText, {
        size: 14,
        weight: 600
    }, title), /* @__PURE__ */ import_react26.default.createElement(KeyvalText, {
        size: 12
    }, subTitle), /* @__PURE__ */ import_react26.default.createElement(DangerButtonWrapper, null, /* @__PURE__ */ import_react26.default.createElement(DangerButton, {
        onClick: onClick
    }, /* @__PURE__ */ import_react26.default.createElement(KeyvalText, {
        weight: 500,
        size: 14,
        color: palette_default.colors.error
    }, btnText)))));
}
// src/design.system/modal/modal.tsx
var import_react28 = require("react");
// src/design.system/modal/portal.modal.tsx
var import_react27 = require("react");
var import_react_dom = require("react-dom");
var PortalModal = function(param) {
    var children = param.children, wrapperId = param.wrapperId;
    var _ref = _sliced_to_array((0, import_react27.useState)(null), 2), portalElement = _ref[0], setPortalElement = _ref[1];
    (0, import_react27.useLayoutEffect)(function() {
        var element = document.getElementById(wrapperId);
        var portalCreated = false;
        if (!element) {
            element = createWrapperAndAppendToBody(wrapperId);
            portalCreated = true;
        }
        setPortalElement(element);
        return function() {
            if (portalCreated && element.parentNode) {
                element.parentNode.removeChild(element);
            }
        };
    }, [
        wrapperId
    ]);
    var createWrapperAndAppendToBody = function(elementId) {
        var element = document.createElement("div");
        element.setAttribute("id", elementId);
        document.body.appendChild(element);
        return element;
    };
    if (!portalElement) return null;
    return (0, import_react_dom.createPortal)(children, portalElement);
};
var portal_modal_default = PortalModal;
// src/design.system/modal/modal.styled.tsx
var import_styled_components23 = __toESM(require("styled-components"));
var fadeIn = import_styled_components23.keyframes(_templateObject55());
var ModalButtonsContainer = import_styled_components23.default.div(_templateObject56());
var ModalButtonPrimary = import_styled_components23.default.button(_templateObject57(), function(param) {
    var theme2 = param.theme;
    return theme2.colors.btnText;
}, function(param) {
    var theme2 = param.theme;
    return theme2.colors.main;
}, function(param) {
    var theme2 = param.theme;
    return theme2.colors.main;
}, function(param) {
    var theme2 = param.theme;
    return theme2.colors.shadowMain;
});
var ModalButtonSecondary = import_styled_components23.default.button(_templateObject58(), function(param) {
    var theme2 = param.theme;
    return theme2.colors.main;
}, function(param) {
    var theme2 = param.theme;
    return theme2.colors.main;
}, function(param) {
    var theme2 = param.theme;
    return theme2.colors.shadowMain;
}, function(param) {
    var theme2 = param.theme;
    return theme2.colors.btnText;
});
var Overlay = import_styled_components23.default.div(_templateObject59(), function(props) {
    return props.showOverlay ? "rgba(23, 23, 23, 0.8)" : "rgba(0, 0, 0, 0)";
}, function(props) {
    return props.positionX ? props.positionX : "center";
}, function(props) {
    return props.positionY ? props.positionY : "center";
}, fadeIn);
var ModalContainer = import_styled_components23.default.div(_templateObject60(), function(props) {
    return props.padding ? props.padding : "20px";
});
var ModalHeader = import_styled_components23.default.header(_templateObject61());
var Close = import_styled_components23.default.button(_templateObject62());
var PrimaryButton = import_styled_components23.default.button(_templateObject63());
var Content = import_styled_components23.default.div(_templateObject64(), function(param) {
    var theme2 = param.theme;
    return theme2.text;
});
var ModalFooter = import_styled_components23.default.footer(_templateObject65());
// src/assets/icons/close-modal.svg
var close_modal_default = "./close-modal-BFP7HTRU.svg";
// src/design.system/modal/modal.tsx
function KeyvalModal(param) {
    var children = param.children, closeModal = param.closeModal, config = param.config;
    var _config;
    var modalRef = (0, import_react28.useRef)(null);
    var handleClickOutside = function() {
        return closeModal();
    };
    var handleKeyPress = (0, import_react28.useCallback)(function(event) {
        if (event.key === "Escape") closeModal();
    }, []);
    useOnClickOutside(modalRef, handleClickOutside);
    (0, import_react28.useEffect)(function() {
        document.addEventListener("keydown", handleKeyPress);
        return function() {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [
        handleKeyPress
    ]);
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(portal_modal_default, {
        wrapperId: "modal-portal"
    }, /* @__PURE__ */ React.createElement(Overlay, {
        showOverlay: config.showOverlay,
        positionX: config.positionX,
        positionY: config.positionY,
        style: {
            animationDuration: "400ms",
            animationDelay: "0"
        }
    }, /* @__PURE__ */ React.createElement(ModalContainer, {
        padding: config.padding,
        ref: modalRef
    }, config.showHeader && /* @__PURE__ */ React.createElement(ModalHeader, null, /* @__PURE__ */ React.createElement(KeyvalText, {
        weight: 500,
        color: palette_default.text.dark_button
    }, config.title)), /* @__PURE__ */ React.createElement(Close, {
        onClick: closeModal
    }, /* @__PURE__ */ React.createElement(close_modal_default, null)), /* @__PURE__ */ React.createElement(Content, null, children), ((_config = config) === null || _config === void 0 ? void 0 : _config.footer) && /* @__PURE__ */ React.createElement(ModalFooter, null, /* @__PURE__ */ React.createElement(PrimaryButton, {
        onClick: config.footer.primaryBtnAction
    }, /* @__PURE__ */ React.createElement(KeyvalText, {
        size: 14,
        weight: 500,
        color: "#5c5c5c"
    }, config.footer.primaryBtnText)))))));
}
// src/design.system/theme.provider/theme.provider.tsx
var import_react29 = __toESM(require("react"));
var import_styled_components24 = require("styled-components");
var ThemeProviderWrapper = function(param) {
    var children = param.children;
    return /* @__PURE__ */ import_react29.default.createElement(import_styled_components24.ThemeProvider, {
        theme: palette_default
    }, children);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    DangerZone: DangerZone,
    FloatBox: FloatBox,
    KeyvalActionInput: KeyvalActionInput,
    KeyvalButton: KeyvalButton,
    KeyvalCard: KeyvalCard,
    KeyvalCheckbox: KeyvalCheckbox,
    KeyvalDataFlow: KeyvalDataFlow,
    KeyvalDropDown: KeyvalDropDown,
    KeyvalImage: KeyvalImage,
    KeyvalInput: KeyvalInput,
    KeyvalLink: KeyvalLink,
    KeyvalLoader: KeyvalLoader,
    KeyvalModal: KeyvalModal,
    KeyvalNotification: KeyvalNotification,
    KeyvalRadioButton: KeyvalRadioButton,
    KeyvalSearchInput: KeyvalSearchInput,
    KeyvalSelectedCounter: KeyvalSelectedCounter,
    KeyvalSwitch: KeyvalSwitch,
    KeyvalTag: KeyvalTag,
    KeyvalTap: KeyvalTap,
    KeyvalText: KeyvalText,
    KeyvalTooltip: KeyvalTooltip,
    KeyvalVideo: KeyvalVideo,
    ThemeProviderWrapper: ThemeProviderWrapper
});
//# sourceMappingURL=index.js.map