"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  height: 24px;\n  color: #303030;\n  font-size: 14px;\n  font-weight: 400;\n  margin-right: 7px;\n  -webkit-tap-highlight-color: transparent;\n  display: flex;\n  align-items: center;\n\n  gap: 10px;\n  cursor: pointer;\n"
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
        "\n  display: flex;\n  padding: 8px 16px;\n  align-items: center;\n  border-radius: 8px;\n  border: none;\n  width: 100%;\n  height: 100%;\n  border: 1px solid\n    ",
        ";\n  cursor: ",
        ";\n  background: ",
        ";\n  justify-content: center;\n  align-items: center;\n  opacity: ",
        ";\n"
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
        "\n  border-radius: 12px;\n  width: 100%;\n  border: ",
        ";\n  background: ",
        ";\n  padding: 16px;\n  text-align: start;\n  gap: 10px;\n  position: relative;\n"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        "\n  font-family: 'IBM Plex Mono', monospace;\n  width: 90%;\n"
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _tagged_template_literal([
        "\n  position: absolute;\n  right: 16px;\n  top: 16px;\n  cursor: pointer;\n"
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  flex-direction: column;\n  text-align: start;\n  gap: 6px;\n  width: 100%;\n"
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = _tagged_template_literal([
        "\n  display: inline-flex;\n  position: relative;\n  height: fit-content;\n  flex-direction: column;\n  border-radius: 24px;\n  height: 100%;\n  border: ",
        ";\n  background: ",
        ";\n  box-shadow: ",
        ";\n"
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: fit-content;\n  gap: 16px;\n  padding: 24px 0px;\n  box-shadow: none;\n"
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject13() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  padding: 4px 8px;\n  align-items: flex-start;\n  gap: 10px;\n  border-radius: 10px;\n  width: fit-content;\n"
    ]);
    _templateObject13 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject14() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  padding: 8px 14px;\n  align-items: flex-end;\n  gap: 10px;\n  border-radius: 16px;\n  border: ",
        ";\n  background: ",
        ";\n"
    ]);
    _templateObject14 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject15() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n  z-index: 999;\n  width: 100%;\n  padding: 11px 4px;\n  border-radius: 8px;\n  cursor: pointer;\n  border: ",
        ";\n  /* background: ",
        "; */\n\n  .dropdown-arrow {\n    transform: rotate(0deg);\n    transition: all 0.2s ease-in-out;\n  }\n\n  .dropdown-arrow.open {\n    transform: rotate(180deg);\n  }\n"
    ]);
    _templateObject15 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject16() {
    var data = _tagged_template_literal([
        "\n  padding: 0 12px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: ",
        ";\n  font-size: 14px;\n  font-family: ",
        ", sans-serif;\n  font-weight: 400;\n"
    ]);
    _templateObject16 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject17() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n  z-index: 1000;\n  display: flex;\n  width: 100%;\n  padding: 11px 4px;\n  flex-direction: column;\n  border-radius: 8px;\n  border: ",
        ";\n  background: ",
        ";\n  margin-top: 5px;\n"
    ]);
    _templateObject17 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject18() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n\n  z-index: 1000;\n  width: 100%;\n  max-height: 270px;\n  overflow-y: scroll;\n  scrollbar-width: none;\n  :hover {\n    background: ",
        ";\n  }\n"
    ]);
    _templateObject18 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject19() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  padding: 7px 12px;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 8px;\n  cursor: pointer;\n  p {\n    cursor: pointer !important;\n  }\n"
    ]);
    _templateObject19 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject20() {
    var data = _tagged_template_literal([
        "\n  margin-bottom: 8px;\n  text-align: start;\n"
    ]);
    _templateObject20 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject21() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n  display: flex;\n  width: 340px;\n  padding: 9px 13px;\n  gap: 10px;\n  border-radius: 8px;\n  border: ",
        ";\n  background: ",
        ";\n  &:hover {\n    border: ",
        ";\n  }\n"
    ]);
    _templateObject21 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject22() {
    var data = _tagged_template_literal([
        "\n  width: 85%;\n  background: ",
        ";\n  border: none;\n  outline: none;\n  color: ",
        ";\n  font-size: 14px;\n  font-family: ",
        ", sans-serif;\n  font-weight: 400;\n  &:focus {\n    color: ",
        ";\n  }\n"
    ]);
    _templateObject22 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject23() {
    var data = _tagged_template_literal([
        "\n  display: inline-flex;\n  align-items: center; // Align children and icon vertically\n  position: relative;\n"
    ]);
    _templateObject23 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject24() {
    var data = _tagged_template_literal([
        "\n  margin-left: 8px;\n  display: flex;\n  align-items: center;\n"
    ]);
    _templateObject24 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject25() {
    var data = _tagged_template_literal([
        "\n  visibility: ",
        ";\n  background-color: black;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 10px;\n  max-width: 300px;\n  width: 100%;\n  text-align: left;\n  /* Position the tooltip above the icon */\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-0%);\n  margin-bottom: 5px; // Space between the tooltip and the icon\n\n  /* Fade in animation */\n  opacity: ",
        ";\n  transition: opacity 0.3s;\n"
    ]);
    _templateObject25 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject26() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  align-items: center;\n  gap: 8px;\n"
    ]);
    _templateObject26 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject27() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n  width: 30px;\n  height: 16px;\n  background-color: ",
        ";\n  cursor: pointer;\n  user-select: none;\n  border-radius: 20px;\n  padding: 2px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"
    ]);
    _templateObject27 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject28() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  color: #fff;\n  background-color: ",
        ";\n  box-shadow: 0 2px 4px rgb(0, 0, 0, 0.25);\n  border-radius: 100%;\n  position: absolute;\n  transition: all 0.2s ease;\n  left: ",
        "px;\n"
    ]);
    _templateObject28 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject29() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  cursor: ",
        ";\n  pointer-events: ",
        ";\n  opacity: ",
        ";\n"
    ]);
    _templateObject29 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject30() {
    var data = _tagged_template_literal([
        "\n  width: 16px;\n  height: 16px;\n  border: ",
        ";\n  border-radius: 4px;\n"
    ]);
    _templateObject30 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject31() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  padding: 4px;\n  align-items: center;\n  gap: 4px;\n  border-radius: 14px;\n  background: ",
        ";\n"
    ]);
    _templateObject31 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject32() {
    var data = _tagged_template_literal([
        "\n  cursor: pointer;\n  .p {\n    cursor: pointer !important;\n  }\n"
    ]);
    _templateObject32 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject33() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n  display: flex;\n  width: 100%;\n  padding-left: 13px;\n  height: 100%;\n  min-height: 37px;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 10px;\n  border-radius: 8px;\n  border: ",
        ";\n  background: ",
        ";\n\n  &:hover {\n    border: ",
        ";\n  }\n"
    ]);
    _templateObject33 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject34() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n  display: flex;\n  width: 100%;\n  padding: 0px 12px;\n  height: 100%;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  border-radius: 4px;\n  border: ",
        ";\n"
    ]);
    _templateObject34 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject35() {
    var data = _tagged_template_literal([
        "\n  background: transparent;\n  border: none;\n  outline: none;\n  width: 96%;\n  color: ",
        ";\n"
    ]);
    _templateObject35 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject36() {
    var data = _tagged_template_literal([
        "\n  color: var(--dark-mode-white, #fff);\n  font-family: Inter, sans-serif;\n  font-size: 24px;\n"
    ]);
    _templateObject36 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject37() {
    var data = _tagged_template_literal([
        "\n  margin-bottom: 8px;\n  text-align: start;\n"
    ]);
    _templateObject37 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject38() {
    var data = _tagged_template_literal([
        "\n  margin-top: 4px;\n"
    ]);
    _templateObject38 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject39() {
    var data = _tagged_template_literal([
        "\n  position: absolute;\n  right: 10px;\n  cursor: pointer;\n"
    ]);
    _templateObject39 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject40() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n  margin-top: 8px;\n  border-radius: 8px;\n  width: 240px;\n  height: 140px;\n  cursor: pointer;\n  background: ",
        ";\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n"
    ]);
    _templateObject40 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject41() {
    var data = _tagged_template_literal([
        "\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  top: 30px;\n  text-align: center;\n"
    ]);
    _templateObject41 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject42() {
    var data = _tagged_template_literal([
        "\n  top: 40%;\n"
    ]);
    _templateObject42 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject43() {
    var data = _tagged_template_literal([
        "\n  width: 980px;\n  border-radius: 8px;\n"
    ]);
    _templateObject43 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject44() {
    var data = _tagged_template_literal([
        "\n  width: 980px;\n\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 21px;\n"
    ]);
    _templateObject44 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject45() {
    var data = _tagged_template_literal([
        "\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.65);\n  z-index: 9999;\n"
    ]);
    _templateObject45 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject46() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n"
    ]);
    _templateObject46 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject47() {
    var data = _tagged_template_literal([
        "\n  width: ",
        "px;\n  height: ",
        "px;\n  border: 4px solid;\n  border-color: ",
        ";\n  border-radius: 50%;\n  animation: spin-anim 1.2s linear infinite;\n\n  @keyframes spin-anim {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"
    ]);
    _templateObject47 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject48() {
    var data = _tagged_template_literal([
        "\n  position: fixed;\n  top: 3%;\n  right: 3%;\n"
    ]);
    _templateObject48 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject49() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  padding: 6px 16px 6px 8px;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  border-radius: 8px;\n  border: ",
        ";\n  background: ",
        ";\n  svg {\n    cursor: pointer;\n  }\n"
    ]);
    _templateObject49 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject50() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n  border-radius: 12px;\n  border: ",
        ";\n  background: ",
        ";\n  align-items: center;\n  gap: 4px;\n  min-width: 80px;\n"
    ]);
    _templateObject50 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject51() {
    var data = _tagged_template_literal([
        "\n  max-width: 72px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"
    ]);
    _templateObject51 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject52() {
    var data = _tagged_template_literal([
        "\n  background-color: ",
        ";\n  width: 8px;\n  height: 8px;\n  border-radius: 8px;\n"
    ]);
    _templateObject52 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject53() {
    var data = _tagged_template_literal([
        "\n  width: 24px;\n  height: 24px;\n"
    ]);
    _templateObject53 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject54() {
    var data = _tagged_template_literal([
        "\n  0% {\n    opacity: 1;\n\n  }\n  100% {\n    opacity: 0.5;\n  }\n"
    ]);
    _templateObject54 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject55() {
    var data = _tagged_template_literal([
        "\n  width: 120px;\n  height: 120px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 60px;\n  position: relative;\n  z-index: 90;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 60px;\n    background: #110c1f55;\n    z-index: -1;\n    animation: ",
        " 1s infinite alternate;\n  }\n"
    ]);
    _templateObject55 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject56() {
    var data = _tagged_template_literal([
        "\n  width: 100px;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50px;\n  border: solid 1px #3a3a3a76;\n  background: #110c1f7d;\n"
    ]);
    _templateObject56 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject57() {
    var data = _tagged_template_literal([
        "\n  width: 80px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 40px;\n  border: solid 1px #3a3a3aa9;\n  background: #110c1f;\n  position: relative;\n  z-index: 99;\n"
    ]);
    _templateObject57 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject58() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  padding: 16px;\n  border-radius: 12px;\n  border: ",
        ";\n  background: ",
        ";\n  align-items: center;\n  width: 272px;\n  gap: 8px;\n"
    ]);
    _templateObject58 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject59() {
    var data = _tagged_template_literal([
        "\n  gap: 10px;\n"
    ]);
    _templateObject59 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject60() {
    var data = _tagged_template_literal([
        "\n  padding: 16px 24px;\n  display: flex;\n  border-radius: 12px;\n  gap: 8px;\n  border: ",
        ";\n  background: ",
        ";\n  align-items: center;\n  justify-content: space-between;\n  width: 430px;\n"
    ]);
    _templateObject60 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject61() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  align-items: center;\n  gap: 8px;\n"
    ]);
    _templateObject61 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject62() {
    var data = _tagged_template_literal([
        "\n  gap: 8px;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"
    ]);
    _templateObject62 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject63() {
    var data = _tagged_template_literal([
        "\n  padding: 4px;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 100%;\n  opacity: ",
        ";\n"
    ]);
    _templateObject63 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject64() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  gap: 8px;\n"
    ]);
    _templateObject64 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject65() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  padding: 16px;\n  border-radius: 12px;\n  border: ",
        ";\n  background: ",
        ";\n  align-items: center;\n  width: 272px;\n  gap: 8px;\n"
    ]);
    _templateObject65 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject66() {
    var data = _tagged_template_literal([
        "\n  gap: 4px;\n  display: flex;\n  flex-direction: column;\n"
    ]);
    _templateObject66 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject67() {
    var data = _tagged_template_literal([
        "\n  padding: 4px;\n  background-color: #fff;\n  border-radius: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"
    ]);
    _templateObject67 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject68() {
    var data = _tagged_template_literal([
        "\n  width: 100%;\n  height: 100%;\n"
    ]);
    _templateObject68 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject69() {
    var data = _tagged_template_literal([
        "\n  button {\n    display: flex;\n    padding: 8px;\n    align-items: center;\n    gap: 10px;\n    border-radius: 8px;\n    border: ",
        ";\n    background: #0e1c28 !important;\n    margin-bottom: 8px;\n  }\n\n  .react-flow__controls button path {\n    fill: #fff;\n  }\n"
    ]);
    _templateObject69 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject70() {
    var data = _tagged_template_literal([
        "\n  position: absolute;\n  z-index: 999;\n  top: 15px;\n  left: 60px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  background-color: ",
        ";\n  padding: 10px;\n  border-radius: 8px;\n  border: 1px solid ",
        ";\n  button {\n    display: flex;\n    padding: 8px;\n    align-items: center;\n    gap: 10px;\n    border-radius: 8px;\n    border: ",
        ";\n    background: #0e1c28 !important;\n    margin-bottom: 8px;\n  }\n\n  .react-flow__controls button path {\n    fill: #fff;\n  }\n"
    ]);
    _templateObject70 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject71() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n"
    ]);
    _templateObject71 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject72() {
    var data = _tagged_template_literal([
        "\n  background-color: ",
        ";\n  width: 10px;\n  height: 10px;\n  border-radius: 8px;\n  margin-right: 6px;\n"
    ]);
    _templateObject72 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject73() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  gap: 10px;\n  cursor: pointer;\n"
    ]);
    _templateObject73 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject74() {
    var data = _tagged_template_literal([
        "\n  padding: 10px;\n  border: ",
        ";\n  border-radius: 8px;\n  width: fit-content;\n  width: 344px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"
    ]);
    _templateObject74 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject75() {
    var data = _tagged_template_literal([
        "\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  :hover {\n    background: ",
        ";\n    p {\n      color: #fff !important;\n    }\n  }\n"
    ]);
    _templateObject75 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject76() {
    var data = _tagged_template_literal([
        "\n  padding: 8px 12px;\n  border-radius: 4px;\n  background: transparent;\n  border: ",
        ";\n  cursor: pointer !important;\n"
    ]);
    _templateObject76 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject77() {
    var data = _tagged_template_literal([
        "\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"
    ]);
    _templateObject77 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject78() {
    var data = _tagged_template_literal([
        "\n  padding: 40px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n"
    ]);
    _templateObject78 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject79() {
    var data = _tagged_template_literal([
        "\n  display: block;\n  padding: 10px 30px;\n  border-radius: 3px;\n  color: ",
        ";\n  border: 1px solid ",
        ";\n  background-color: ",
        ";\n  font-family: 'Robot', sans-serif;\n  font-weight: 500;\n  transition: 0.3s ease all;\n\n  &:hover {\n    background-color: ",
        ";\n  }\n"
    ]);
    _templateObject79 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject80() {
    var data = _tagged_template_literal([
        "\n  display: block;\n  padding: 10px 30px;\n  border-radius: 3px;\n  color: ",
        ";\n  border: 1px solid ",
        ";\n  background-color: transparent;\n  font-family: 'Robot', sans-serif;\n  font-weight: 500;\n  transition: 0.3s ease all;\n\n  &:hover {\n    background-color: ",
        ";\n    color: ",
        ";\n  }\n"
    ]);
    _templateObject80 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject81() {
    var data = _tagged_template_literal([
        "\n  width: 100vw;\n  height: 100vh;\n  z-index: 9999;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: ",
        ";\n  display: flex;\n  align-items: center;\n  justify-content: ",
        ";\n  align-items: ",
        ";\n  padding: 40px;\n\n  @media (prefers-reduced-motion: no-preference) {\n    animation-name: ",
        ";\n    animation-fill-mode: backwards;\n  }\n"
    ]);
    _templateObject81 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject82() {
    var data = _tagged_template_literal([
        "\n  min-width: 500px;\n  min-height: 50px;\n  /* background-color: #ffffff; */\n  position: relative;\n  /* border-radius: 8px; */\n  border-radius: 12px;\n  border: 0.95px solid var(--dark-mode-dark-3, #203548);\n  background: var(--dark-mode-dark-2, #0e1c28);\n\n  padding: ",
        ";\n"
    ]);
    _templateObject82 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject83() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: 20px;\n"
    ]);
    _templateObject83 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject84() {
    var data = _tagged_template_literal([
        "\n  position: absolute;\n  top: 20px;\n  right: 15px;\n  border: none;\n  background-color: transparent;\n  transition: 0.3s ease all;\n  border-radius: 3px;\n  color: '#d1345b';\n  cursor: pointer;\n\n  svg {\n    width: 24px;\n    height: 24px;\n    fill: #fff;\n  }\n"
    ]);
    _templateObject84 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject85() {
    var data = _tagged_template_literal([
        "\n  background-color: #ededed8b;\n  border: 1px solid #d4d2d2;\n  width: 100%;\n  height: 36px;\n  border-radius: 8px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #ededed;\n  }\n"
    ]);
    _templateObject85 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject86() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  color: ",
        ";\n"
    ]);
    _templateObject86 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject87() {
    var data = _tagged_template_literal([
        "\n  width: 100%;\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  justify-content: flex-end;\n  margin-top: 20px;\n  padding-top: 20px;\n"
    ]);
    _templateObject87 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject88() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n"
    ]);
    _templateObject88 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject89() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  align-items: center;\n"
    ]);
    _templateObject89 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject90() {
    var data = _tagged_template_literal([
        "\n  opacity: ",
        ";\n"
    ]);
    _templateObject90 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject91() {
    var data = _tagged_template_literal([
        "\n  margin: 0 8px;\n"
    ]);
    _templateObject91 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject92() {
    var data = _tagged_template_literal([
        "\n  width: 54px;\n  height: 1px;\n  background-color: #8b92a5;\n  margin-top: 2px;\n  margin-right: 8px;\n"
    ]);
    _templateObject92 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject93() {
    var data = _tagged_template_literal([
        "\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 23px;\n  margin: ",
        ";\n"
    ]);
    _templateObject93 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject94() {
    var data = _tagged_template_literal([
        "\n  width: 100%;\n  border-top: 1px solid #8b92a5;\n"
    ]);
    _templateObject94 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject95() {
    var data = _tagged_template_literal([
        "\n  padding: 16px;\n  display: flex;\n  justify-content: flex-start !important;\n  border: 1px solid ",
        ";\n  border-radius: 12px;\n"
    ]);
    _templateObject95 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject96() {
    var data = _tagged_template_literal([
        "\n  line-height: 1.6;\n  code {\n    background-color: ",
        ";\n    padding: 2px 4px;\n    border-radius: 6px;\n  }\n"
    ]);
    _templateObject96 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject97() {
    var data = _tagged_template_literal([
        "\n  display: inline-flex;\n  justify-content: space-between;\n  border-radius: 10px;\n  margin: auto;\n  overflow: hidden;\n  position: relative;\n"
    ]);
    _templateObject97 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject98() {
    var data = _tagged_template_literal([
        "\n  color: ",
        ";\n  padding: 8px 12px;\n  position: relative;\n  text-align: center;\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n  border: ",
        ";\n  background-color: ",
        ";\n  filter: brightness(50%);\n  &.active {\n    filter: brightness(100%);\n  }\n  &:first-child {\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n    padding-left: 16px;\n  }\n  &:last-child {\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n    padding-right: 16px;\n  }\n  label {\n    font-family: ",
        ";\n  }\n"
    ]);
    _templateObject98 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject99() {
    var data = _tagged_template_literal([
        "\n  opacity: 0;\n  margin: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  cursor: pointer;\n  height: 100%;\n"
    ]);
    _templateObject99 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject100() {
    var data = _tagged_template_literal([
        "\n  width: 100%;\n"
    ]);
    _templateObject100 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject101() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  width: 110%;\n  flex-wrap: wrap;\n"
    ]);
    _templateObject101 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject102() {
    var data = _tagged_template_literal([
        "\n  cursor: pointer;\n  padding: 2px 8px;\n  margin: 3px;\n  border-radius: 5px;\n  background: ",
        ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 5px;\n  min-height: 30px;\n"
    ]);
    _templateObject102 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject103() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  gap: 10px;\n  width: 100%;\n  height: 37px;\n"
    ]);
    _templateObject103 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject104() {
    var data = _tagged_template_literal([
        "\n  width: 100%;\n"
    ]);
    _templateObject104 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject105() {
    var data = _tagged_template_literal([
        "\n  margin-left: 10px;\n"
    ]);
    _templateObject105 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject106() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n"
    ]);
    _templateObject106 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject107() {
    var data = _tagged_template_literal([
        "\n  width: 100%;\n"
    ]);
    _templateObject107 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject108() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n"
    ]);
    _templateObject108 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject109() {
    var data = _tagged_template_literal([
        "\n  border: solid 1px ",
        ";\n  text-align: center;\n  border-spacing: 0;\n  border-radius: 8px;\n  width: 100%;\n"
    ]);
    _templateObject109 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject110() {
    var data = _tagged_template_literal([
        "\n  padding: 4px;\n"
    ]);
    _templateObject110 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject111() {
    var data = _tagged_template_literal([
        "\n  padding: 8px 0;\n\n  border-top: solid 1px ",
        ";\n  border-right: ",
        ";\n  border-left: ",
        ";\n"
    ]);
    _templateObject111 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject112() {
    var data = _tagged_template_literal([
        "\n  background: transparent;\n  border: none;\n  width: 94%;\n\n  outline: none;\n  color: ",
        ";\n"
    ]);
    _templateObject112 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject113() {
    var data = _tagged_template_literal([
        "\n  text-align: center;\n  border-top: solid 1px ",
        ";\n  padding: 4px;\n  cursor: pointer;\n"
    ]);
    _templateObject113 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject114() {
    var data = _tagged_template_literal([
        "\n  width: 100%;\n  padding: 8px 12px;\n  border-radius: 8px;\n  box-sizing: border-box;\n  resize: vertical;\n\n  outline: none;\n  color: ",
        ";\n  font-family: ",
        ";\n  background-color: ",
        ";\n  border: ",
        ";\n  &:hover {\n    border: ",
        ";\n  }\n"
    ]);
    _templateObject114 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject115() {
    var data = _tagged_template_literal([
        "\n  margin-bottom: 8px;\n  text-align: start;\n"
    ]);
    _templateObject115 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject116() {
    var data = _tagged_template_literal([
        "\n  width: 100%;\n"
    ]);
    _templateObject116 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject117() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n"
    ]);
    _templateObject117 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject118() {
    var data = _tagged_template_literal([
        "\n  border: solid 1px ",
        ";\n  text-align: center;\n  border-spacing: 0;\n  border-radius: 8px;\n  width: 100%;\n"
    ]);
    _templateObject118 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject119() {
    var data = _tagged_template_literal([
        "\n  padding: 4px;\n"
    ]);
    _templateObject119 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject120() {
    var data = _tagged_template_literal([
        "\n  padding: 8px 0;\n\n  border-bottom: solid 1px ",
        ";\n  border-right: ",
        ";\n  border-left: ",
        ";\n"
    ]);
    _templateObject120 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject121() {
    var data = _tagged_template_literal([
        "\n  background: transparent;\n  border: none;\n  width: 94%;\n\n  outline: none;\n  color: ",
        ";\n"
    ]);
    _templateObject121 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject122() {
    var data = _tagged_template_literal([
        "\n  text-align: center;\n  padding: 4px;\n  cursor: pointer;\n"
    ]);
    _templateObject122 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject123() {
    var data = _tagged_template_literal([
        "\n  cursor: pointer;\n  display: flex;\n  gap: 4px;\n  p {\n    color: ",
        ";\n    &:hover {\n      color: ",
        ";\n    }\n  }\n"
    ]);
    _templateObject123 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject124() {
    var data = _tagged_template_literal([
        "\n  display: ",
        ";\n  position: absolute;\n  right: 0px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 9999;\n  flex-direction: column;\n  border-radius: 8px;\n  border: ",
        ";\n  background: ",
        ";\n  margin-top: 5px;\n"
    ]);
    _templateObject124 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject125() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  padding: 7px 12px;\n  gap: 4px;\n  border-top: ",
        ";\n  align-items: center;\n  opacity: ",
        ";\n  pointer-events: ",
        ";\n  cursor: pointer;\n  p {\n    cursor: pointer !important;\n  }\n\n  &:hover {\n    background: ",
        ";\n  }\n"
    ]);
    _templateObject125 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject126() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  gap: 2px;\n"
    ]);
    _templateObject126 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject127() {
    var data = _tagged_template_literal([
        "\n  background-color: ",
        ";\n  color: ",
        ";\n  border: none;\n  border-radius: 4px;\n  padding: 4px 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n\n  &:disabled {\n    cursor: default;\n  }\n\n  &:hover {\n    background-color: ",
        ";\n  }\n"
    ]);
    _templateObject127 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject128() {
    var data = _tagged_template_literal([
        "\n  width: 100%;\n  background-color: ",
        ";\n  border: 1px solid ",
        ";\n  border-radius: 6px;\n  border-collapse: separate;\n  border-spacing: 0;\n"
    ]);
    _templateObject128 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject129() {
    var data = _tagged_template_literal([
        ""
    ]);
    _templateObject129 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject130() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n  background-color: ",
        ";\n  border-radius: 8px;\n  padding: 4px;\n\n  div {\n    color: #f5b175;\n  }\n  .ͼb {\n    color: #64a8fd;\n  }\n  .ͼm {\n    color: ",
        ";\n  }\n  .ͼd {\n    color: #f5b175;\n  }\n  .ͼc {\n    color: #f5b175;\n  }\n  .cm-gutters {\n    display: none;\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n  }\n"
    ]);
    _templateObject130 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject131() {
    var data = _tagged_template_literal([
        "\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10; // Ensure this is higher than the editor's z-index\n"
    ]);
    _templateObject131 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject132() {
    var data = _tagged_template_literal([
        "\n  background-color: ",
        ";\n  z-index: 999;\n  border-radius: 4px;\n  padding: 4px;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: all;\n"
    ]);
    _templateObject132 = function _templateObject() {
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
    ActionInput: function() {
        return ActionInput;
    },
    ActionItem: function() {
        return ActionItem;
    },
    ActionsGroup: function() {
        return ActionsGroup;
    },
    Button: function() {
        return Button;
    },
    Card: function() {
        return Card;
    },
    Checkbox: function() {
        return Checkbox;
    },
    Code: function() {
        return Code;
    },
    DangerZone: function() {
        return DangerZone;
    },
    DataFlow: function() {
        return KeyvalDataFlow;
    },
    Divider: function() {
        return Divider;
    },
    DropDown: function() {
        return DropDown;
    },
    FloatBox: function() {
        return FloatBox;
    },
    Image: function() {
        return ImageComponent;
    },
    Input: function() {
        return Input;
    },
    KeyValueTable: function() {
        return KeyValueTable;
    },
    Link: function() {
        return Link;
    },
    Loader: function() {
        return Loader;
    },
    Modal: function() {
        return Modal;
    },
    MultiInput: function() {
        return MultiInput;
    },
    MultiInputTable: function() {
        return MultiInputTable;
    },
    Note: function() {
        return Note;
    },
    Notification: function() {
        return Notification;
    },
    Pagination: function() {
        return Pagination;
    },
    RadioButton: function() {
        return RadioButton;
    },
    SearchInput: function() {
        return SearchInput;
    },
    SegmentedControls: function() {
        return SegmentedControls;
    },
    SelectedCounter: function() {
        return SelectedCounter;
    },
    Steps: function() {
        return Steps;
    },
    Switch: function() {
        return Switch;
    },
    Table: function() {
        return Table3;
    },
    Tag: function() {
        return Tag;
    },
    Tap: function() {
        return Tap;
    },
    Text: function() {
        return Text;
    },
    TextArea: function() {
        return TextArea;
    },
    ThemeProviderWrapper: function() {
        return ThemeProviderWrapper;
    },
    Tooltip: function() {
        return Tooltip;
    },
    Video: function() {
        return Video;
    },
    YMLEditor: function() {
        return YMLEditor;
    },
    buildFlowNodesAndEdges: function() {
        return buildFlowNodesAndEdges;
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
function Text(param) {
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
var React2 = __toESM(require("react"));
var SvgCheckedRadio = function(props) {
    return /* @__PURE__ */ React2.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        viewBox: "0 0 18 18",
        fill: "none"
    }, props), /* @__PURE__ */ React2.createElement("rect", {
        x: 0.5,
        y: 0.5,
        width: 17,
        height: 17,
        rx: 8.5,
        fill: "#96F2FF",
        stroke: "#96F2FF"
    }), /* @__PURE__ */ React2.createElement("path", {
        d: "M13.7727 6L7.39773 12.375L4.5 9.47727",
        stroke: "#132330",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }));
};
var checked_radio_default = SvgCheckedRadio;
// src/design.system/radio/radio.tsx
var RadioButton = function(param) {
    var _param_label = param.label, label = _param_label === void 0 ? "" : _param_label, onChange = param.onChange, value = param.value, _param_size = param.size, size = _param_size === void 0 ? 25 : _param_size, _param_textStyles = param.textStyles, textStyles = _param_textStyles === void 0 ? {} : _param_textStyles;
    var handleChange = function handleChange() {
        onChange && onChange({});
    };
    return /* @__PURE__ */ import_react2.default.createElement(RadioButtonContainer, null, /* @__PURE__ */ import_react2.default.createElement("div", {
        onClick: handleChange,
        style: {
            display: "flex",
            alignItems: "center"
        }
    }, value ? /* @__PURE__ */ import_react2.default.createElement(checked_radio_default, {
        width: size,
        height: size
    }) : /* @__PURE__ */ import_react2.default.createElement(RadioButtonBorder, {
        style: {
            width: size,
            height: size
        }
    })), /* @__PURE__ */ import_react2.default.createElement(Text, _object_spread({}, textStyles), label));
};
// src/design.system/button/button.tsx
var import_react3 = __toESM(require("react"));
// src/design.system/button/button.styled.tsx
var import_styled_components3 = __toESM(require("styled-components"));
var ButtonContainer = import_styled_components3.default.div(_templateObject3(), function(param) {
    var theme2 = param.theme, disabled = param.disabled, variant = param.variant;
    return disabled ? theme2.colors.blue_grey : variant === "primary" ? theme2.colors.torquiz_light : "transparent";
}, function(param) {
    var disabled = param.disabled;
    return disabled ? "not-allowed !important" : "pointer !important";
});
var StyledButton = import_styled_components3.default.button(_templateObject4(), function(param) {
    var theme2 = param.theme, variant = param.variant;
    return variant === "primary" ? "transparent" : theme2.colors.secondary;
}, function(param) {
    var disabled = param.disabled;
    return disabled ? "not-allowed !important" : "pointer !important";
}, function(param) {
    var theme2 = param.theme, disabled = param.disabled, variant = param.variant;
    return disabled ? variant === "primary" ? theme2.colors.blue_grey : "transparent" : variant === "primary" ? theme2.colors.secondary : "transparent";
}, function(param) {
    var disabled = param.disabled, variant = param.variant;
    return variant !== "primary" && disabled ? 0.5 : 1;
});
// src/design.system/button/button.tsx
var Button = function(_param) {
    var _param_variant = _param.variant, variant = _param_variant === void 0 ? "primary" : _param_variant, children = _param.children, style = _param.style, disabled = _param.disabled, _param_type = _param.type, type = _param_type === void 0 ? "button" : _param_type, rest = _object_without_properties(_param, [
        "variant",
        "children",
        "style",
        "disabled",
        "type"
    ]);
    return /* @__PURE__ */ import_react3.default.createElement(ButtonContainer, {
        variant: variant,
        disabled: disabled
    }, /* @__PURE__ */ import_react3.default.createElement(StyledButton, _object_spread({
        type: type,
        variant: variant,
        disabled: disabled,
        style: _object_spread({}, style)
    }, rest), children));
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
// src/design.system/code.block/code.block.tsx
var import_react7 = __toESM(require("react"));
// src/assets/icons/copy.svg
var React6 = __toESM(require("react"));
var SvgCopy = function(props) {
    return /* @__PURE__ */ React6.createElement("svg", _object_spread({
        width: "800px",
        height: "800px",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "#ffffff"
    }, props), /* @__PURE__ */ React6.createElement("g", {
        id: "SVGRepo_bgCarrier",
        strokeWidth: 0
    }), /* @__PURE__ */ React6.createElement("g", {
        id: "SVGRepo_tracerCarrier",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /* @__PURE__ */ React6.createElement("g", {
        id: "SVGRepo_iconCarrier"
    }, /* @__PURE__ */ React6.createElement("path", {
        d: "M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z",
        stroke: "#8b92a6",
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /* @__PURE__ */ React6.createElement("path", {
        d: "M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z",
        stroke: "#8b92a6",
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })));
};
var copy_default = SvgCopy;
// src/assets/icons/copied.svg
var React7 = __toESM(require("react"));
var SvgCopied = function(props) {
    return /* @__PURE__ */ React7.createElement("svg", _object_spread({
        width: "800px",
        height: "800px",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React7.createElement("g", {
        id: "SVGRepo_bgCarrier",
        strokeWidth: 0
    }), /* @__PURE__ */ React7.createElement("g", {
        id: "SVGRepo_tracerCarrier",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /* @__PURE__ */ React7.createElement("g", {
        id: "SVGRepo_iconCarrier"
    }, /* @__PURE__ */ React7.createElement("path", {
        d: "M22 11.1V6.9C22 3.4 20.6 2 17.1 2H12.9C9.4 2 8 3.4 8 6.9V8H11.1C14.6 8 16 9.4 16 12.9V16H17.1C20.6 16 22 14.6 22 11.1Z",
        stroke: "#8b92a6",
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /* @__PURE__ */ React7.createElement("path", {
        d: "M16 17.1V12.9C16 9.4 14.6 8 11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1Z",
        stroke: "#8b92a6",
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /* @__PURE__ */ React7.createElement("path", {
        d: "M6.08008 15L8.03008 16.95L11.9201 13.05",
        stroke: "#8b92a6",
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })));
};
var copied_default = SvgCopied;
// src/assets/icons/folders.svg
var React8 = __toESM(require("react"));
var SvgFolders = function(props) {
    return /* @__PURE__ */ React8.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none"
    }, props), /* @__PURE__ */ React8.createElement("path", {
        opacity: 0.2,
        d: "M14.5 5V10.5556C14.5 10.6735 14.4532 10.7865 14.3698 10.8698C14.2865 10.9532 14.1735 11 14.0556 11H12.5V7C12.5 6.86739 12.4473 6.74021 12.3536 6.64645C12.2598 6.55268 12.1326 6.5 12 6.5H7.66687C7.55869 6.5 7.45342 6.46491 7.36688 6.4L5.63312 5.1C5.54658 5.03509 5.44131 5 5.33313 5H4V3.5C4 3.36739 4.05268 3.24021 4.14645 3.14645C4.24021 3.05268 4.36739 3 4.5 3H7.33313C7.44131 3 7.54658 3.03509 7.63312 3.1L9.36687 4.4C9.45342 4.46491 9.55869 4.5 9.66687 4.5H14C14.1326 4.5 14.2598 4.55268 14.3536 4.64645C14.4473 4.74021 14.5 4.86739 14.5 5Z",
        fill: "#96F2FF"
    }), /* @__PURE__ */ React8.createElement("path", {
        d: "M14 4H9.66687L7.93313 2.7C7.75978 2.57066 7.54941 2.50054 7.33313 2.5H4.5C4.23478 2.5 3.98043 2.60536 3.79289 2.79289C3.60536 2.98043 3.5 3.23478 3.5 3.5V4.5H2.5C2.23478 4.5 1.98043 4.60536 1.79289 4.79289C1.60536 4.98043 1.5 5.23478 1.5 5.5V12.5C1.5 12.7652 1.60536 13.0196 1.79289 13.2071C1.98043 13.3946 2.23478 13.5 2.5 13.5H12.0556C12.306 13.4997 12.546 13.4001 12.723 13.223C12.9001 13.046 12.9997 12.806 13 12.5556V11.5H14.0556C14.306 11.4997 14.546 11.4001 14.723 11.223C14.9001 11.046 14.9997 10.806 15 10.5556V5C15 4.73478 14.8946 4.48043 14.7071 4.29289C14.5196 4.10536 14.2652 4 14 4ZM12 12.5H2.5V5.5H5.33313L7.06687 6.8C7.24022 6.92934 7.45059 6.99946 7.66687 7H12V12.5ZM14 10.5H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6H7.66687L5.93313 4.7C5.75978 4.57066 5.54941 4.50054 5.33313 4.5H4.5V3.5H7.33313L9.06688 4.8C9.24022 4.92934 9.45059 4.99946 9.66687 5H14V10.5Z",
        fill: "#96F2FF"
    }));
};
var folders_default = SvgFolders;
// src/assets/icons/trash.svg
var React9 = __toESM(require("react"));
var SvgTrash = function(props) {
    return /* @__PURE__ */ React9.createElement("svg", _object_spread({
        width: "14px",
        height: "14px",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React9.createElement("g", {
        id: "SVGRepo_bgCarrier",
        strokeWidth: 0
    }), /* @__PURE__ */ React9.createElement("g", {
        id: "SVGRepo_tracerCarrier",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /* @__PURE__ */ React9.createElement("g", {
        id: "SVGRepo_iconCarrier"
    }, /* @__PURE__ */ React9.createElement("path", {
        d: "M20.5001 6H3.5",
        stroke: "#0EE6F3",
        strokeWidth: 1.5,
        strokeLinecap: "round"
    }), /* @__PURE__ */ React9.createElement("path", {
        d: "M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5",
        stroke: "#0EE6F3",
        strokeWidth: 1.5,
        strokeLinecap: "round"
    }), /* @__PURE__ */ React9.createElement("path", {
        d: "M9.5 11L10 16",
        stroke: "#0EE6F3",
        strokeWidth: 1.5,
        strokeLinecap: "round"
    }), /* @__PURE__ */ React9.createElement("path", {
        d: "M14.5 11L14 16",
        stroke: "#0EE6F3",
        strokeWidth: 1.5,
        strokeLinecap: "round"
    }), /* @__PURE__ */ React9.createElement("path", {
        d: "M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6",
        stroke: "#0EE6F3",
        strokeWidth: 1.5
    })));
};
var trash_default = SvgTrash;
// src/assets/icons/check.svg
var React10 = __toESM(require("react"));
var SvgCheck = function(props) {
    return /* @__PURE__ */ React10.createElement("svg", _object_spread({
        width: 10,
        height: 10,
        viewBox: "0 0 10 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React10.createElement("g", {
        clipPath: "url(#clip0_48_7283)"
    }, /* @__PURE__ */ React10.createElement("path", {
        d: "M1.5625 5.625L3.75 7.8125L8.75 2.8125",
        stroke: "#96F2FF",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })), /* @__PURE__ */ React10.createElement("defs", null, /* @__PURE__ */ React10.createElement("clipPath", {
        id: "clip0_48_7283"
    }, /* @__PURE__ */ React10.createElement("rect", {
        width: 10,
        height: 10,
        fill: "white"
    }))));
};
var check_default = SvgCheck;
// src/assets/icons/expand-arrow.svg
var React11 = __toESM(require("react"));
var SvgExpandArrow = function(props) {
    return /* @__PURE__ */ React11.createElement("svg", _object_spread({
        width: 12,
        height: 13,
        viewBox: "0 0 12 13",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React11.createElement("path", {
        d: "M10.0155 5.26528L6.26552 9.01528C6.23069 9.05014 6.18934 9.0778 6.14381 9.09667C6.09829 9.11555 6.04949 9.12526 6.00021 9.12526C5.95093 9.12526 5.90213 9.11555 5.85661 9.09667C5.81108 9.0778 5.76972 9.05014 5.7349 9.01528L1.9849 5.26528C1.91453 5.19491 1.875 5.09948 1.875 4.99996C1.875 4.90045 1.91453 4.80502 1.9849 4.73465C2.05526 4.66429 2.1507 4.62476 2.25021 4.62476C2.34972 4.62476 2.44516 4.66429 2.51552 4.73465L6.00021 8.21981L9.4849 4.73465C9.51974 4.69981 9.5611 4.67217 9.60662 4.65332C9.65214 4.63446 9.70094 4.62476 9.75021 4.62476C9.79948 4.62476 9.84827 4.63446 9.8938 4.65332C9.93932 4.67217 9.98068 4.69981 10.0155 4.73465C10.0504 4.76949 10.078 4.81086 10.0969 4.85638C10.1157 4.9019 10.1254 4.95069 10.1254 4.99996C10.1254 5.04924 10.1157 5.09803 10.0969 5.14355C10.078 5.18907 10.0504 5.23044 10.0155 5.26528Z",
        fill: "#CCD0D2"
    }));
};
var expand_arrow_default = SvgExpandArrow;
// src/assets/icons/actions/cluster-attr.svg
var React12 = __toESM(require("react"));
var SvgClusterAttr = function(props) {
    return /* @__PURE__ */ React12.createElement("svg", _object_spread({
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React12.createElement("g", {
        id: "SVGRepo_bgCarrier",
        strokeWidth: 0
    }), /* @__PURE__ */ React12.createElement("g", {
        id: "SVGRepo_tracerCarrier",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /* @__PURE__ */ React12.createElement("g", {
        id: "SVGRepo_iconCarrier"
    }, /* @__PURE__ */ React12.createElement("path", {
        d: "M4.97883 9.68508C2.99294 8.89073 2 8.49355 2 8C2 7.50645 2.99294 7.10927 4.97883 6.31492L7.7873 5.19153C9.77318 4.39718 10.7661 4 12 4C13.2339 4 14.2268 4.39718 16.2127 5.19153L19.0212 6.31492C21.0071 7.10927 22 7.50645 22 8C22 8.49355 21.0071 8.89073 19.0212 9.68508L16.2127 10.8085C14.2268 11.6028 13.2339 12 12 12C10.7661 12 9.77318 11.6028 7.7873 10.8085L4.97883 9.68508Z",
        stroke: "#8b92a6",
        strokeWidth: 1.5
    }), /* @__PURE__ */ React12.createElement("path", {
        d: "M22 12C22 12 21.0071 12.8907 19.0212 13.6851L16.2127 14.8085C14.2268 15.6028 13.2339 16 12 16C10.7661 16 9.77318 15.6028 7.7873 14.8085L4.97883 13.6851C2.99294 12.8907 2 12 2 12",
        stroke: "#8b92a6",
        strokeWidth: 1.5,
        strokeLinecap: "round"
    }), /* @__PURE__ */ React12.createElement("path", {
        d: "M22 16C22 16 21.0071 16.8907 19.0212 17.6851L16.2127 18.8085C14.2268 19.6028 13.2339 20 12 20C10.7661 20 9.77318 19.6028 7.7873 18.8085L4.97883 17.6851C2.99294 16.8907 2 16 2 16",
        stroke: "#8b92a6",
        strokeWidth: 1.5,
        strokeLinecap: "round"
    })));
};
var cluster_attr_default = SvgClusterAttr;
// src/assets/icons/actions/delete-attr.svg
var React13 = __toESM(require("react"));
var SvgDeleteAttr = function(props) {
    return /* @__PURE__ */ React13.createElement("svg", _object_spread({
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React13.createElement("g", {
        id: "SVGRepo_bgCarrier",
        strokeWidth: 0
    }), /* @__PURE__ */ React13.createElement("g", {
        id: "SVGRepo_tracerCarrier",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /* @__PURE__ */ React13.createElement("g", {
        id: "SVGRepo_iconCarrier"
    }, /* @__PURE__ */ React13.createElement("path", {
        d: "M7 9.5L12 14.5M12 9.5L7 14.5M19.4922 13.9546L16.5608 17.7546C16.2082 18.2115 16.032 18.44 15.8107 18.6047C15.6146 18.7505 15.3935 18.8592 15.1583 18.9253C14.8928 19 14.6042 19 14.0271 19H6.2C5.07989 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.07989 5 6.2 5H14.0271C14.6042 5 14.8928 5 15.1583 5.07467C15.3935 5.14081 15.6146 5.2495 15.8107 5.39534C16.032 5.55998 16.2082 5.78846 16.5608 6.24543L19.4922 10.0454C20.0318 10.7449 20.3016 11.0947 20.4054 11.4804C20.4969 11.8207 20.4969 12.1793 20.4054 12.5196C20.3016 12.9053 20.0318 13.2551 19.4922 13.9546Z",
        stroke: "#8b92a7",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })));
};
var delete_attr_default = SvgDeleteAttr;
// src/assets/icons/actions/rename-attr.svg
var React14 = __toESM(require("react"));
var SvgRenameAttr = function(props) {
    return /* @__PURE__ */ React14.createElement("svg", _object_spread({
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React14.createElement("g", {
        id: "SVGRepo_bgCarrier",
        strokeWidth: 0
    }), /* @__PURE__ */ React14.createElement("g", {
        id: "SVGRepo_tracerCarrier",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /* @__PURE__ */ React14.createElement("g", {
        id: "SVGRepo_iconCarrier"
    }, /* @__PURE__ */ React14.createElement("path", {
        d: "M20 7H9.00001C6.23858 7 4 9.23857 4 12C4 14.7614 6.23858 17 9 17H16M20 7L17 4M20 7L17 10",
        stroke: "#8b92a7",
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })));
};
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
    java: "".concat(BASE_URL, "java.png"),
    go: "".concat(BASE_URL, "go.png"),
    javascript: "".concat(BASE_URL, "nodejs.png"),
    python: "".concat(BASE_URL, "python.png"),
    dotnet: "".concat(BASE_URL, "dotnet.png"),
    default: "".concat(BASE_URL, "default.png"),
    mysql: "".concat(BASE_URL, "mysql.png"),
    unknown: "".concat(BASE_URL, "default.svg"),
    // TODO: good icon
    processing: "".concat(BASE_URL, "default.svg"),
    // TODO: good icon
    "no containers": "".concat(BASE_URL, "default.svg")
};
// src/design.system/code.block/code.block.tsx
var import_styled_components5 = require("styled-components");
// src/hooks/useOnClickOutside.tsx
var import_react5 = require("react");
function useOnClickOutside(ref, handler) {
    (0, import_react5.useEffect)(function() {
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
// src/hooks/useCopyToClipboard.tsx
var import_react6 = require("react");
function useCopyToClipboard() {
    var _ref = _sliced_to_array((0, import_react6.useState)(false), 2), clipboardState = _ref[0], setClipboardState = _ref[1];
    function copyToClipboard(text2) {
        return _copyToClipboard.apply(this, arguments);
    }
    function _copyToClipboard() {
        _copyToClipboard = _async_to_generator(function(text2) {
            var error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!navigator.clipboard) return [
                            3,
                            5
                        ];
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            navigator.clipboard.writeText(text2)
                        ];
                    case 2:
                        _state.sent();
                        setClipboardState(true);
                        return [
                            3,
                            4
                        ];
                    case 3:
                        error = _state.sent();
                        setClipboardState(false);
                        return [
                            3,
                            4
                        ];
                    case 4:
                        return [
                            3,
                            6
                        ];
                    case 5:
                        setClipboardState(false);
                        _state.label = 6;
                    case 6:
                        return [
                            2
                        ];
                }
            });
        });
        return _copyToClipboard.apply(this, arguments);
    }
    return {
        clipboardState: clipboardState,
        copyToClipboard: copyToClipboard
    };
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
    colors: colors,
    text: text,
    font_family: font_family
};
var palette_default = theme;
// src/design.system/code.block/code.block.tsx
var CodeBlockContainer = import_styled_components5.styled.div(_templateObject7(), function(param) {
    var theme2 = param.theme;
    return "1px solid ".concat(theme2.colors.dark_blue);
}, function(param) {
    var theme2 = param.theme;
    return theme2.colors.dark;
});
var TextWrapper2 = import_styled_components5.styled.p(_templateObject8());
var CopyIconWrapper = import_styled_components5.styled.span(_templateObject9());
var ComponentWrapper = import_styled_components5.styled.div(_templateObject10());
function Code(param) {
    var text2 = param.text, highlightedWord = param.highlightedWord, title = param.title, onCopy = param.onCopy;
    var onload = function onload() {
        if (highlightedWord) {
            highlightedWord.primary && handleSetPrimaryWords();
            highlightedWord.secondary && handleSetSecondaryWords();
        }
    };
    var handleSetPrimaryWords = function handleSetPrimaryWords() {
        var _highlightedWord;
        var primaryWordsMap = /* @__PURE__ */ new Map();
        (_highlightedWord = highlightedWord) === null || _highlightedWord === void 0 ? void 0 : _highlightedWord.primary.words.forEach(function(word) {
            primaryWordsMap.set(word, word);
        });
        setPrimaryWords(primaryWordsMap);
    };
    var handleSetSecondaryWords = function handleSetSecondaryWords() {
        var _highlightedWord_secondary, _highlightedWord;
        var secondaryWordsMap = /* @__PURE__ */ new Map();
        (_highlightedWord = highlightedWord) === null || _highlightedWord === void 0 ? void 0 : (_highlightedWord_secondary = _highlightedWord.secondary) === null || _highlightedWord_secondary === void 0 ? void 0 : _highlightedWord_secondary.words.forEach(function(word) {
            secondaryWordsMap.set(word, word);
        });
        setSecondaryWords(secondaryWordsMap);
    };
    var getWordColor = function getWordColor(word) {
        if (primaryWords.has(word)) {
            var _highlightedWord;
            return (_highlightedWord = highlightedWord) === null || _highlightedWord === void 0 ? void 0 : _highlightedWord.primary.color;
        }
        if (secondaryWords.has(word)) {
            var _highlightedWord_secondary, _highlightedWord1;
            return (_highlightedWord1 = highlightedWord) === null || _highlightedWord1 === void 0 ? void 0 : (_highlightedWord_secondary = _highlightedWord1.secondary) === null || _highlightedWord_secondary === void 0 ? void 0 : _highlightedWord_secondary.color;
        }
        return palette_default.colors.white;
    };
    var handleCopy = function handleCopy() {
        copyToClipboard(text2);
        onCopy && onCopy();
    };
    var _ref = _sliced_to_array((0, import_react7.useState)(/* @__PURE__ */ new Map()), 2), primaryWords = _ref[0], setPrimaryWords = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react7.useState)(/* @__PURE__ */ new Map()), 2), secondaryWords = _ref1[0], setSecondaryWords = _ref1[1];
    var _useCopyToClipboard = useCopyToClipboard(), copyToClipboard = _useCopyToClipboard.copyToClipboard, clipboardState = _useCopyToClipboard.clipboardState;
    (0, import_react7.useEffect)(onload, [
        highlightedWord
    ]);
    return /* @__PURE__ */ import_react7.default.createElement(ComponentWrapper, null, title && /* @__PURE__ */ import_react7.default.createElement(Text, {
        size: 14
    }, title), /* @__PURE__ */ import_react7.default.createElement(CodeBlockContainer, null, /* @__PURE__ */ import_react7.default.createElement(CopyIconWrapper, {
        onClick: handleCopy
    }, !clipboardState ? /* @__PURE__ */ import_react7.default.createElement(copy_default, {
        width: 24,
        height: 24
    }) : /* @__PURE__ */ import_react7.default.createElement(copied_default, {
        width: 24,
        height: 24
    })), /* @__PURE__ */ import_react7.default.createElement(TextWrapper2, null, text2.split(" ").map(function(part, index) {
        return /* @__PURE__ */ import_react7.default.createElement("span", {
            key: index,
            style: {
                color: getWordColor(part)
            }
        }, "".concat(part, " "));
    }))));
}
// src/design.system/card/card.tsx
var import_react8 = __toESM(require("react"));
// src/design.system/card/card.styled.tsx
var import_styled_components6 = __toESM(require("styled-components"));
var CardContainer = import_styled_components6.default.div(_templateObject11(), function(param) {
    var selected = param.selected, theme2 = param.theme, type = param.type;
    return "1px solid ".concat(selected ? theme2.colors.secondary : type === "primary" ? theme2.colors.dark_blue : "#374a5b");
}, function(param) {
    var theme2 = param.theme, type = param.type;
    return type === "primary" ? theme2.colors.dark : "#0E1C28";
}, function(param) {
    var type = param.type;
    return type === "primary" ? "none" : "0px -6px 16px 0px rgba(0, 0, 0, 0.25),4px 4px 16px 0px rgba(71, 231, 241, 0.05),-4px 4px 16px 0px rgba(71, 231, 241, 0.05)";
});
var CardHeader = (0, import_styled_components6.default)(CardContainer)(_templateObject12());
// src/design.system/card/card.tsx
function Card(param) {
    var children = param.children, _param_focus = param.focus, focus = _param_focus === void 0 ? false : _param_focus, _param_type = param.type, type = _param_type === void 0 ? "primary" : _param_type, header = param.header;
    var renderHeader = function renderHeader() {
        var _header, _header1, _header2;
        if ((_header = header) === null || _header === void 0 ? void 0 : _header.body) {
            var _header3;
            return (_header3 = header) === null || _header3 === void 0 ? void 0 : _header3.body();
        }
        return /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, /* @__PURE__ */ import_react8.default.createElement(Text, {
            size: 20,
            weight: 600
        }, (_header1 = header) === null || _header1 === void 0 ? void 0 : _header1.title), /* @__PURE__ */ import_react8.default.createElement(Text, {
            size: 14,
            color: "#CCD0D2"
        }, (_header2 = header) === null || _header2 === void 0 ? void 0 : _header2.subtitle));
    };
    return /* @__PURE__ */ import_react8.default.createElement(CardContainer, {
        selected: focus || void 0,
        type: type
    }, header && /* @__PURE__ */ import_react8.default.createElement(CardHeader, null, renderHeader()), children);
}
// src/design.system/tag/tag.tsx
var import_react9 = __toESM(require("react"));
var import_styled_components7 = __toESM(require("styled-components"));
var TagWrapper = import_styled_components7.default.div(_templateObject13());
function Tag(param) {
    var _param_title = param.title, title = _param_title === void 0 ? "" : _param_title, _param_color = param.color, color = _param_color === void 0 ? "#033869" : _param_color;
    return /* @__PURE__ */ import_react9.default.createElement(TagWrapper, {
        style: {
            backgroundColor: color
        }
    }, /* @__PURE__ */ import_react9.default.createElement(Text, {
        weight: 500,
        size: 13,
        color: "#CCD0D2"
    }, title));
}
// src/design.system/tap/tap.tsx
var import_react10 = __toESM(require("react"));
var import_styled_components8 = __toESM(require("styled-components"));
var TapWrapper = import_styled_components8.default.div(_templateObject14(), function(param) {
    var theme2 = param.theme, selected = param.selected;
    return "1px solid ".concat(selected ? "transparent" : theme2.colors.dark_blue);
}, function(param) {
    var theme2 = param.theme, selected = param.selected;
    return selected ? theme2.colors.dark_blue : "transparent";
});
function Tap(param) {
    var _param_title = param.title, title = _param_title === void 0 ? "" : _param_title, tapped = param.tapped, children = param.children, style = param.style, onClick = param.onClick;
    return /* @__PURE__ */ import_react10.default.createElement(TapWrapper, {
        onClick: onClick,
        selected: tapped,
        style: _object_spread_props(_object_spread({}, style), {
            cursor: onClick ? "pointer" : "auto"
        })
    }, children, /* @__PURE__ */ import_react10.default.createElement(Text, {
        weight: 400,
        size: 14,
        color: tapped ? "#CCD0D2" : "#8B92A5",
        style: {
            cursor: onClick ? "pointer" : "auto"
        }
    }, title));
}
// src/design.system/drop.down/drop.down.tsx
var import_react13 = __toESM(require("react"));
// src/design.system/drop.down/drop.down.styled.tsx
var import_styled_components9 = __toESM(require("styled-components"));
var DropdownWrapper = import_styled_components9.default.div(_templateObject15(), function(param) {
    var selected = param.selected, theme2 = param.theme;
    return "1px solid  ".concat(selected ? theme2.colors.white : theme2.colors.blue_grey);
}, function(param) {
    var theme2 = param.theme;
    return theme2.colors.dark;
});
var DropdownHeader = import_styled_components9.default.div(_templateObject16(), function(param) {
    var theme2 = param.theme;
    return theme2.text.white;
}, function(param) {
    var theme2 = param.theme;
    return theme2.font_family.primary;
});
var DropdownBody = import_styled_components9.default.div(_templateObject17(), function(param) {
    var theme2 = param.theme;
    return "1px solid ".concat(theme2.colors.blue_grey);
}, function(param) {
    var theme2 = param.theme;
    return theme2.colors.dark;
});
var DropdownListWrapper = import_styled_components9.default.div(_templateObject18(), function(param) {
    var theme2 = param.theme;
    return theme2.colors.dark_blue;
});
var DropdownItem = import_styled_components9.default.div(_templateObject19());
var LabelWrapper = import_styled_components9.default.div(_templateObject20());
// src/design.system/search.input/search.input.tsx
var import_react11 = __toESM(require("react"));
// src/design.system/search.input/search.input.styled.tsx
var import_styled_components10 = __toESM(require("styled-components"));
var SearchInputWrapper = import_styled_components10.default.div(_templateObject21(), function(param) {
    var active = param.active, theme2 = param.theme;
    return "1px solid ".concat(active ? theme2.colors.white : theme2.colors.blue_grey);
}, function(param) {
    var active = param.active, theme2 = param.theme;
    return "".concat(active ? theme2.colors.dark : theme2.colors.light_dark);
}, function(param) {
    var theme2 = param.theme;
    return "solid 1px ".concat(theme2.colors.white);
});
var StyledSearchInput = import_styled_components10.default.input(_templateObject22(), function(param) {
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
var React19 = __toESM(require("react"));
var SvgGlass = function(props) {
    return /* @__PURE__ */ React19.createElement("svg", _object_spread({
        width: 18,
        height: 18,
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React19.createElement("path", {
        d: "M16.1479 15.3519L12.6273 11.8321C13.6477 10.6071 14.1566 9.03577 14.048 7.44512C13.9394 5.85447 13.2217 4.36692 12.0443 3.29193C10.8668 2.21693 9.32029 1.63725 7.72635 1.67348C6.13241 1.7097 4.6138 2.35904 3.48642 3.48642C2.35904 4.6138 1.7097 6.13241 1.67348 7.72635C1.63725 9.32029 2.21693 10.8668 3.29193 12.0443C4.36692 13.2217 5.85447 13.9394 7.44512 14.048C9.03577 14.1566 10.6071 13.6477 11.8321 12.6273L15.3519 16.1479C15.4042 16.2001 15.4663 16.2416 15.5345 16.2699C15.6028 16.2982 15.676 16.3127 15.7499 16.3127C15.8238 16.3127 15.897 16.2982 15.9653 16.2699C16.0336 16.2416 16.0956 16.2001 16.1479 16.1479C16.2001 16.0956 16.2416 16.0336 16.2699 15.9653C16.2982 15.897 16.3127 15.8238 16.3127 15.7499C16.3127 15.676 16.2982 15.6028 16.2699 15.5345C16.2416 15.4663 16.2001 15.4042 16.1479 15.3519ZM2.81242 7.87492C2.81242 6.87365 3.10933 5.89487 3.6656 5.06234C4.22188 4.22982 5.01253 3.58094 5.93758 3.19778C6.86263 2.81461 7.88053 2.71435 8.86256 2.90969C9.84459 3.10503 10.7466 3.58718 11.4546 4.29519C12.1626 5.00319 12.6448 5.90524 12.8401 6.88727C13.0355 7.8693 12.9352 8.8872 12.5521 9.81225C12.1689 10.7373 11.52 11.528 10.6875 12.0842C9.85497 12.6405 8.87618 12.9374 7.87492 12.9374C6.53271 12.9359 5.24591 12.4021 4.29683 11.453C3.34775 10.5039 2.81391 9.21712 2.81242 7.87492Z",
        fill: "#8B92A5"
    }));
};
var glass_default = SvgGlass;
// src/assets/icons/X.svg
var React20 = __toESM(require("react"));
var SvgX = function(props) {
    return /* @__PURE__ */ React20.createElement("svg", _object_spread({
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React20.createElement("path", {
        d: "M12.8535 12.146C12.9 12.1925 12.9368 12.2476 12.962 12.3083C12.9871 12.369 13.0001 12.4341 13.0001 12.4998C13.0001 12.5655 12.9871 12.6305 12.962 12.6912C12.9368 12.7519 12.9 12.8071 12.8535 12.8535C12.8071 12.9 12.7519 12.9368 12.6912 12.962C12.6305 12.9871 12.5655 13.0001 12.4998 13.0001C12.4341 13.0001 12.369 12.9871 12.3083 12.962C12.2476 12.9368 12.1925 12.9 12.146 12.8535L7.99979 8.70666L3.85354 12.8535C3.75972 12.9474 3.63247 13.0001 3.49979 13.0001C3.36711 13.0001 3.23986 12.9474 3.14604 12.8535C3.05222 12.7597 2.99951 12.6325 2.99951 12.4998C2.99951 12.3671 3.05222 12.2399 3.14604 12.146L7.29291 7.99979L3.14604 3.85354C3.05222 3.75972 2.99951 3.63247 2.99951 3.49979C2.99951 3.36711 3.05222 3.23986 3.14604 3.14604C3.23986 3.05222 3.36711 2.99951 3.49979 2.99951C3.63247 2.99951 3.75972 3.05222 3.85354 3.14604L7.99979 7.29291L12.146 3.14604C12.2399 3.05222 12.3671 2.99951 12.4998 2.99951C12.6325 2.99951 12.7597 3.05222 12.8535 3.14604C12.9474 3.23986 13.0001 3.36711 13.0001 3.49979C13.0001 3.63247 12.9474 3.75972 12.8535 3.85354L8.70666 7.99979L12.8535 12.146Z",
        fill: "white"
    }));
};
var X_default = SvgX;
// src/design.system/search.input/search.input.tsx
function SearchInput(param) {
    var _param_placeholder = param.placeholder, placeholder = _param_placeholder === void 0 ? "Search" : _param_placeholder, _param_value = param.value, value = _param_value === void 0 ? "" : _param_value, _param_onChange = param.onChange, onChange = _param_onChange === void 0 ? function() {} : _param_onChange, _param_loading = param.loading, loading = _param_loading === void 0 ? false : _param_loading, _param_containerStyle = param.containerStyle, containerStyle = _param_containerStyle === void 0 ? {} : _param_containerStyle, _param_inputStyle = param.inputStyle, inputStyle = _param_inputStyle === void 0 ? {} : _param_inputStyle, _param_showClear = param.showClear, showClear = _param_showClear === void 0 ? true : _param_showClear;
    var clear = value ? function() {
        return onChange({
            target: {
                value: ""
            }
        });
    } : function() {};
    return /* @__PURE__ */ import_react11.default.createElement(SearchInputWrapper, {
        active: !!value || void 0,
        style: _object_spread({}, containerStyle)
    }, /* @__PURE__ */ import_react11.default.createElement(glass_default, null), /* @__PURE__ */ import_react11.default.createElement(StyledSearchInput, {
        style: _object_spread({}, inputStyle),
        value: value,
        active: !!value || void 0,
        placeholder: placeholder,
        onChange: onChange
    }), showClear && /* @__PURE__ */ import_react11.default.createElement("div", {
        onClick: clear
    }, " ", /* @__PURE__ */ import_react11.default.createElement(X_default, {
        style: {
            cursor: "pointer"
        }
    })));
}
// src/assets/icons/question.svg
var React22 = __toESM(require("react"));
var SvgQuestion = function(props) {
    return /* @__PURE__ */ React22.createElement("svg", _object_spread({
        width: 14,
        height: 14,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React22.createElement("path", {
        d: "M7.65625 9.84375C7.65625 9.97354 7.61776 10.1004 7.54565 10.2083C7.47354 10.3163 7.37105 10.4004 7.25114 10.45C7.13122 10.4997 6.99927 10.5127 6.87197 10.4874C6.74467 10.4621 6.62774 10.3996 6.53596 10.3078C6.44419 10.216 6.38168 10.0991 6.35636 9.97178C6.33104 9.84448 6.34404 9.71253 6.39371 9.59261C6.44338 9.4727 6.52749 9.37021 6.63541 9.2981C6.74333 9.22599 6.87021 9.1875 7 9.1875C7.17405 9.1875 7.34097 9.25664 7.46404 9.37971C7.58711 9.50278 7.65625 9.6697 7.65625 9.84375ZM7 3.9375C5.7936 3.9375 4.8125 4.8207 4.8125 5.90625V6.125C4.8125 6.24103 4.8586 6.35231 4.94064 6.43436C5.02269 6.51641 5.13397 6.5625 5.25 6.5625C5.36603 6.5625 5.47731 6.51641 5.55936 6.43436C5.64141 6.35231 5.6875 6.24103 5.6875 6.125V5.90625C5.6875 5.30469 6.27649 4.8125 7 4.8125C7.72352 4.8125 8.3125 5.30469 8.3125 5.90625C8.3125 6.50781 7.72352 7 7 7C6.88397 7 6.77269 7.04609 6.69064 7.12814C6.6086 7.21019 6.5625 7.32147 6.5625 7.4375V7.875C6.5625 7.99103 6.6086 8.10231 6.69064 8.18436C6.77269 8.26641 6.88397 8.3125 7 8.3125C7.11603 8.3125 7.22731 8.26641 7.30936 8.18436C7.39141 8.10231 7.4375 7.99103 7.4375 7.875V7.83562C8.435 7.65242 9.1875 6.85672 9.1875 5.90625C9.1875 4.8207 8.20641 3.9375 7 3.9375ZM12.6875 7C12.6875 8.12488 12.3539 9.2245 11.729 10.1598C11.104 11.0951 10.2158 11.8241 9.17651 12.2546C8.13726 12.685 6.99369 12.7977 5.89043 12.5782C4.78716 12.3588 3.77374 11.8171 2.97833 11.0217C2.18292 10.2263 1.64124 9.21284 1.42179 8.10958C1.20233 7.00631 1.31496 5.86274 1.74544 4.82349C2.17591 3.78423 2.90489 2.89597 3.8402 2.27102C4.7755 1.64607 5.87512 1.3125 7 1.3125C8.50793 1.31409 9.95365 1.91382 11.0199 2.98009C12.0862 4.04636 12.6859 5.49207 12.6875 7ZM11.8125 7C11.8125 6.04818 11.5303 5.11773 11.0014 4.32632C10.4726 3.53491 9.72104 2.91808 8.84167 2.55383C7.9623 2.18958 6.99466 2.09428 6.06113 2.27997C5.1276 2.46566 4.27009 2.92401 3.59705 3.59705C2.92401 4.27009 2.46566 5.12759 2.27997 6.06113C2.09428 6.99466 2.18959 7.9623 2.55383 8.84166C2.91808 9.72103 3.53491 10.4726 4.32632 11.0014C5.11773 11.5303 6.04818 11.8125 7 11.8125C8.27591 11.8111 9.49915 11.3036 10.4014 10.4014C11.3036 9.49915 11.8111 8.27591 11.8125 7Z",
        fill: "#96F2FF"
    }));
};
var question_default = SvgQuestion;
// src/design.system/tooltip/index.tsx
var import_react12 = __toESM(require("react"));
var import_styled_components11 = __toESM(require("styled-components"));
var TooltipContainer = import_styled_components11.default.div(_templateObject23());
var Icon = import_styled_components11.default.div(_templateObject24());
var TooltipText = import_styled_components11.default.div(_templateObject25(), function(param) {
    var isVisible = param.isVisible;
    return isVisible ? "visible" : "hidden";
}, function(param) {
    var isVisible = param.isVisible;
    return isVisible ? 1 : 0;
});
var Tooltip = function(param) {
    var children = param.children, text2 = param.text, _param_icon = param.icon, icon = _param_icon === void 0 ? "?" : _param_icon, _param_showIcon = param.showIcon, showIcon = _param_showIcon === void 0 ? true : _param_showIcon;
    var _ref = _sliced_to_array((0, import_react12.useState)(false), 2), isVisible = _ref[0], setIsVisible = _ref[1];
    var showTooltip = function() {
        return setIsVisible(true);
    };
    var hideTooltip = function() {
        return setIsVisible(false);
    };
    if (!text2) return /* @__PURE__ */ import_react12.default.createElement(import_react12.default.Fragment, null, children);
    return /* @__PURE__ */ import_react12.default.createElement(TooltipContainer, {
        onMouseEnter: showTooltip,
        onMouseLeave: hideTooltip
    }, children, /* @__PURE__ */ import_react12.default.createElement(TooltipText, {
        isVisible: isVisible
    }, /* @__PURE__ */ import_react12.default.createElement(Text, {
        size: 12,
        weight: 600
    }, text2)), showIcon && /* @__PURE__ */ import_react12.default.createElement(Icon, null, /* @__PURE__ */ import_react12.default.createElement(question_default, null)));
};
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
function DropDown(param) {
    var _param_data = param.data, data = _param_data === void 0 ? [] : _param_data, onChange = param.onChange, _param_width = param.width, width = _param_width === void 0 ? 260 : _param_width, value = param.value, label = param.label, tooltip = param.tooltip, required = param.required;
    var getDropdownList = function getDropdownList() {
        var _data;
        return searchFilter ? (_data = data) === null || _data === void 0 ? void 0 : _data.filter(function(item) {
            var _item;
            return (_item = item) === null || _item === void 0 ? void 0 : _item.label.toLowerCase().includes(searchFilter.toLowerCase());
        }) : data;
    };
    var _ref = _sliced_to_array((0, import_react13.useState)(false), 2), isOpen = _ref[0], setOpen = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react13.useState)(value || null), 2), selectedItem = _ref1[0], setSelectedItem = _ref1[1];
    var _ref2 = _sliced_to_array((0, import_react13.useState)(false), 2), isHover = _ref2[0], setHover = _ref2[1];
    var _ref3 = _sliced_to_array((0, import_react13.useState)(""), 2), searchFilter = _ref3[0], setSearchFilter = _ref3[1];
    var containerRef = (0, import_react13.useRef)(null);
    (0, import_react13.useEffect)(function() {
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
    return /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, label && /* @__PURE__ */ import_react13.default.createElement(LabelWrapper, null, /* @__PURE__ */ import_react13.default.createElement(Tooltip, {
        text: tooltip || ""
    }, /* @__PURE__ */ import_react13.default.createElement("div", {
        style: {
            display: "flex",
            gap: 4
        }
    }, /* @__PURE__ */ import_react13.default.createElement(Text, {
        size: 14,
        weight: 600
    }, label), required && /* @__PURE__ */ import_react13.default.createElement(Text, {
        size: 14,
        weight: 600
    }, "*")))), /* @__PURE__ */ import_react13.default.createElement("div", {
        style: {
            height: 37,
            width: width
        },
        ref: containerRef
    }, /* @__PURE__ */ import_react13.default.createElement(DropdownWrapper, {
        selected: isHover,
        onMouseEnter: function() {
            return setHover(true);
        },
        onMouseLeave: function() {
            return setHover(false);
        },
        onClick: toggleDropdown
    }, /* @__PURE__ */ import_react13.default.createElement(DropdownHeader, null, selectedItem ? selectedItem.label : SELECTED_ITEM, /* @__PURE__ */ import_react13.default.createElement(expand_arrow_default, {
        className: "dropdown-arrow ".concat(isOpen && "open")
    }))), isOpen && /* @__PURE__ */ import_react13.default.createElement(DropdownBody, null, /* @__PURE__ */ import_react13.default.createElement(SearchInput, {
        value: searchFilter,
        onChange: function(e) {
            return setSearchFilter(e.target.value);
        },
        placeholder: "Search",
        containerStyle: CONTAINER_STYLE,
        inputStyle: SEARCH_INPUT_STYLE,
        showClear: false
    }), /* @__PURE__ */ import_react13.default.createElement(DropdownListWrapper, null, getDropdownList().map(function(item) {
        return /* @__PURE__ */ import_react13.default.createElement(DropdownItem, {
            key: item.id,
            onClick: function(e) {
                return handleItemClick(item);
            }
        }, /* @__PURE__ */ import_react13.default.createElement(Text, null, item.label));
    })))));
}
// src/design.system/switch/switch.tsx
var import_react14 = __toESM(require("react"));
// src/design.system/switch/switch.styled.tsx
var import_styled_components12 = __toESM(require("styled-components"));
var SwitchInputWrapper = import_styled_components12.default.div(_templateObject26());
var SwitchToggleWrapper = import_styled_components12.default.div(_templateObject27(), function(param) {
    var active = param.active, theme2 = param.theme;
    return active ? theme2.colors.secondary : theme2.text.grey;
});
var SwitchButtonWrapper = import_styled_components12.default.span(_templateObject28(), function(param) {
    var disabled = param.disabled, theme2 = param.theme;
    return !disabled ? theme2.text.light_grey : theme2.text.white;
}, function(param) {
    var disabled = param.disabled;
    return !disabled ? 2 : 18;
});
// src/design.system/switch/switch.tsx
function Switch(param) {
    var toggle = param.toggle, handleToggleChange = param.handleToggleChange, style = param.style, _param_label = param.label, label = _param_label === void 0 ? "Select All" : _param_label;
    return /* @__PURE__ */ import_react14.default.createElement(SwitchInputWrapper, null, /* @__PURE__ */ import_react14.default.createElement(SwitchToggleWrapper, {
        active: toggle || void 0,
        onClick: handleToggleChange
    }, /* @__PURE__ */ import_react14.default.createElement(SwitchButtonWrapper, {
        disabled: toggle || void 0
    })), label && /* @__PURE__ */ import_react14.default.createElement(Text, {
        size: 14
    }, label));
}
// src/design.system/checkbox/checkbox.tsx
var import_react15 = __toESM(require("react"));
// src/design.system/checkbox/checkbox.styled.tsx
var import_styled_components13 = require("styled-components");
var CheckboxWrapper = import_styled_components13.styled.div(_templateObject29(), function(param) {
    var disabled = param.disabled;
    return disabled ? "not-allowed" : "pointer";
}, function(param) {
    var disabled = param.disabled;
    return disabled ? "none" : "auto";
}, function(param) {
    var disabled = param.disabled;
    return disabled ? "0.5" : "1";
});
var CheckboxItem = import_styled_components13.styled.span(_templateObject30(), function(param) {
    var theme2 = param.theme;
    return "solid 1px ".concat(theme2.colors.light_grey);
});
// src/assets/icons/checkbox-rect.svg
var React26 = __toESM(require("react"));
var SvgCheckboxRect = function(props) {
    return /* @__PURE__ */ React26.createElement("svg", _object_spread({
        width: 18,
        height: 18,
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React26.createElement("rect", {
        x: 0.5,
        y: 0.5,
        width: 17,
        height: 17,
        rx: 3.5,
        fill: "#96F2FF",
        stroke: "#96F2FF"
    }), /* @__PURE__ */ React26.createElement("path", {
        d: "M13.7727 6L7.39773 12.375L4.5 9.47727",
        stroke: "#132330",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }));
};
var checkbox_rect_default = SvgCheckboxRect;
// src/design.system/checkbox/checkbox.tsx
function Checkbox(param) {
    var onChange = param.onChange, value = param.value, _param_label = param.label, label = _param_label === void 0 ? "" : _param_label, _param_disabled = param.disabled, disabled = _param_disabled === void 0 ? false : _param_disabled;
    return /* @__PURE__ */ import_react15.default.createElement(CheckboxWrapper, {
        disabled: disabled || void 0,
        onClick: onChange
    }, value ? /* @__PURE__ */ import_react15.default.createElement(checkbox_rect_default, null) : /* @__PURE__ */ import_react15.default.createElement(CheckboxItem, null), /* @__PURE__ */ import_react15.default.createElement(Text, {
        size: 14
    }, label));
}
// src/design.system/selected.counter/selected.counter.tsx
var import_react16 = __toESM(require("react"));
// src/design.system/selected.counter/selected.counter.styled.tsx
var import_styled_components14 = __toESM(require("styled-components"));
var SelectedCounterWrapper = import_styled_components14.default.div(_templateObject31(), function(param) {
    var theme2 = param.theme;
    return theme2.colors.dark_blue;
});
// src/design.system/selected.counter/selected.counter.tsx
function SelectedCounter(param) {
    var total = param.total, selected = param.selected;
    return /* @__PURE__ */ import_react16.default.createElement(SelectedCounterWrapper, null, selected !== 0 && /* @__PURE__ */ import_react16.default.createElement(check_default, null), /* @__PURE__ */ import_react16.default.createElement(Text, {
        size: 13,
        weight: 500
    }, "".concat(selected, " / ").concat(total)));
}
// src/design.system/link/link.tsx
var import_react17 = __toESM(require("react"));
var import_styled_components15 = require("styled-components");
var LinkContainer = import_styled_components15.styled.div(_templateObject32());
function Link(param) {
    var value = param.value, onClick = param.onClick, _param_fontSize = param.fontSize, fontSize = _param_fontSize === void 0 ? 16 : _param_fontSize, _param_color = param.color, color = _param_color === void 0 ? palette_default.colors.secondary : _param_color;
    return /* @__PURE__ */ import_react17.default.createElement(LinkContainer, {
        onClick: onClick
    }, /* @__PURE__ */ import_react17.default.createElement(Text, {
        size: fontSize,
        color: color
    }, value));
}
// src/design.system/image/image.tsx
var import_image = __toESM(require("next/image"));
var import_react18 = __toESM(require("react"));
var IMAGE_STYLE = {
    borderRadius: 10
};
function ImageComponent(param) {
    var src = param.src, _param_alt = param.alt, alt = _param_alt === void 0 ? "" : _param_alt, _param_width = param.width, width = _param_width === void 0 ? 56 : _param_width, _param_height = param.height, height = _param_height === void 0 ? 56 : _param_height, _param_style = param.style, style = _param_style === void 0 ? {} : _param_style;
    return /* @__PURE__ */ import_react18.default.createElement(import_image.default, {
        src: src,
        alt: alt || "",
        width: width,
        height: height,
        style: _object_spread({}, IMAGE_STYLE, style)
    });
}
// src/design.system/input/input.tsx
var import_react19 = __toESM(require("react"));
// src/design.system/input/input.styled.tsx
var import_styled_components16 = require("styled-components");
var StyledInputContainer = import_styled_components16.styled.div(_templateObject33(), function(param) {
    var theme2 = param.theme, error = param.error, active = param.active;
    return "1px solid ".concat(error ? theme2.colors.error : active ? theme2.text.grey : theme2.colors.blue_grey);
}, function(param) {
    var theme2 = param.theme;
    return theme2.colors.light_dark;
}, function(param) {
    var theme2 = param.theme;
    return "solid 1px ".concat(theme2.text.grey);
});
var StyledActionInputContainer = import_styled_components16.styled.div(_templateObject34(), function(param) {
    var theme2 = param.theme;
    return "1px solid ".concat(theme2.colors.secondary);
});
var StyledInput = import_styled_components16.styled.input(_templateObject35(), function(param) {
    var theme2 = param.theme;
    return theme2.text.white;
});
var StyledActionInput = (0, import_styled_components16.styled)(StyledInput)(_templateObject36());
var LabelWrapper2 = import_styled_components16.styled.div(_templateObject37());
var ErrorWrapper = import_styled_components16.styled.div(_templateObject38());
var DisplayIconsWrapper = import_styled_components16.styled.div(_templateObject39());
// src/assets/icons/eye-open.svg
var React31 = __toESM(require("react"));
var SvgEyeOpen = function(props) {
    return /* @__PURE__ */ React31.createElement("svg", _object_spread({
        width: "800px",
        height: "800px",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React31.createElement("g", {
        id: "SVGRepo_bgCarrier",
        strokeWidth: 0
    }), /* @__PURE__ */ React31.createElement("g", {
        id: "SVGRepo_tracerCarrier",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /* @__PURE__ */ React31.createElement("g", {
        id: "SVGRepo_iconCarrier"
    }, /* @__PURE__ */ React31.createElement("path", {
        d: "M3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14M17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14Z",
        stroke: "#fff",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })));
};
var eye_open_default = SvgEyeOpen;
// src/assets/icons/eye-close.svg
var React32 = __toESM(require("react"));
var SvgEyeClose = function(props) {
    return /* @__PURE__ */ React32.createElement("svg", _object_spread({
        width: "800px",
        height: "800px",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React32.createElement("g", {
        id: "SVGRepo_bgCarrier",
        strokeWidth: 0
    }), /* @__PURE__ */ React32.createElement("g", {
        id: "SVGRepo_tracerCarrier",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /* @__PURE__ */ React32.createElement("g", {
        id: "SVGRepo_iconCarrier"
    }, /* @__PURE__ */ React32.createElement("path", {
        d: "M9.60997 9.60714C8.05503 10.4549 7 12.1043 7 14C7 16.7614 9.23858 19 12 19C13.8966 19 15.5466 17.944 16.3941 16.3878M21 14C21 9.02944 16.9706 5 12 5C11.5582 5 11.1238 5.03184 10.699 5.09334M3 14C3 11.0069 4.46104 8.35513 6.70883 6.71886M3 3L21 21",
        stroke: "#fff",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })));
};
var eye_close_default = SvgEyeClose;
// src/design.system/input/input.tsx
function Input(_param) {
    var handleChange = function handleChange(event) {
        onChange(event.target.value);
    };
    var label = _param.label, value = _param.value, onChange = _param.onChange, _param_type = _param.type, type = _param_type === void 0 ? "text" : _param_type, _param_error = _param.error, error = _param_error === void 0 ? "" : _param_error, _param_style = _param.style, style = _param_style === void 0 ? {} : _param_style, onKeyDown = _param.onKeyDown, tooltip = _param.tooltip, required = _param.required, _param_autoComplete = _param.autoComplete, autoComplete = _param_autoComplete === void 0 ? "off" : _param_autoComplete, rest = _object_without_properties(_param, [
        "label",
        "value",
        "onChange",
        "type",
        "error",
        "style",
        "onKeyDown",
        "tooltip",
        "required",
        "autoComplete"
    ]);
    var _ref = _sliced_to_array((0, import_react19.useState)(false), 2), showPassword = _ref[0], setShowPassword = _ref[1];
    return /* @__PURE__ */ import_react19.default.createElement("div", {
        style: _object_spread({}, style)
    }, label && /* @__PURE__ */ import_react19.default.createElement(LabelWrapper2, null, /* @__PURE__ */ import_react19.default.createElement(Tooltip, {
        text: tooltip || ""
    }, /* @__PURE__ */ import_react19.default.createElement("div", {
        style: {
            display: "flex",
            gap: 4
        }
    }, /* @__PURE__ */ import_react19.default.createElement(Text, {
        size: 14,
        weight: 600
    }, label), required && /* @__PURE__ */ import_react19.default.createElement(Text, {
        size: 14,
        weight: 600
    }, "*")))), /* @__PURE__ */ import_react19.default.createElement(StyledInputContainer, {
        active: !!value || void 0,
        error: error ? true : void 0
    }, /* @__PURE__ */ import_react19.default.createElement(StyledInput, _object_spread({
        type: showPassword ? "text" : type,
        value: value,
        onChange: handleChange,
        autoComplete: autoComplete,
        onKeyDown: onKeyDown
    }, rest)), type === "password" && /* @__PURE__ */ import_react19.default.createElement(DisplayIconsWrapper, {
        onClick: function() {
            return setShowPassword(!showPassword);
        }
    }, !showPassword ? /* @__PURE__ */ import_react19.default.createElement(eye_open_default, {
        width: 16,
        height: 16
    }) : /* @__PURE__ */ import_react19.default.createElement(eye_close_default, {
        width: 16,
        height: 16
    }))), error && /* @__PURE__ */ import_react19.default.createElement(ErrorWrapper, null, /* @__PURE__ */ import_react19.default.createElement(Text, {
        size: 14,
        color: "#FD3F3F"
    }, error)));
}
// src/design.system/input/action.input.tsx
var import_react20 = __toESM(require("react"));
function ActionInput(param) {
    var value = param.value, onChange = param.onChange, _param_style = param.style, style = _param_style === void 0 ? {} : _param_style, onAction = param.onAction;
    var handleChange = function handleChange(event) {
        onChange(event.target.value);
    };
    return /* @__PURE__ */ import_react20.default.createElement(import_react20.default.Fragment, null, /* @__PURE__ */ import_react20.default.createElement(StyledActionInputContainer, {
        style: _object_spread({}, style)
    }, /* @__PURE__ */ import_react20.default.createElement(StyledActionInput, {
        value: value,
        onChange: handleChange,
        autoComplete: "off"
    }), /* @__PURE__ */ import_react20.default.createElement(Button, {
        onClick: onAction
    }, /* @__PURE__ */ import_react20.default.createElement(Text, {
        size: 14,
        weight: 500,
        color: palette_default.text.dark_button
    }, "Save"))));
}
// src/design.system/video/video.tsx
var import_react21 = __toESM(require("react"));
// src/assets/icons/close.svg
var React35 = __toESM(require("react"));
var SvgClose = function(props) {
    return /* @__PURE__ */ React35.createElement("svg", _object_spread({
        width: 26,
        height: 26,
        viewBox: "0 0 26 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React35.createElement("path", {
        d: "M17.7075 9.7075L14.4138 13L17.7075 16.2925C17.8004 16.3854 17.8741 16.4957 17.9244 16.6171C17.9747 16.7385 18.0006 16.8686 18.0006 17C18.0006 17.1314 17.9747 17.2615 17.9244 17.3829C17.8741 17.5043 17.8004 17.6146 17.7075 17.7075C17.6146 17.8004 17.5043 17.8741 17.3829 17.9244C17.2615 17.9747 17.1314 18.0006 17 18.0006C16.8686 18.0006 16.7385 17.9747 16.6171 17.9244C16.4957 17.8741 16.3854 17.8004 16.2925 17.7075L13 14.4137L9.70751 17.7075C9.6146 17.8004 9.5043 17.8741 9.3829 17.9244C9.26151 17.9747 9.1314 18.0006 9.00001 18.0006C8.86861 18.0006 8.7385 17.9747 8.61711 17.9244C8.49572 17.8741 8.38542 17.8004 8.29251 17.7075C8.1996 17.6146 8.12589 17.5043 8.07561 17.3829C8.02533 17.2615 7.99945 17.1314 7.99945 17C7.99945 16.8686 8.02533 16.7385 8.07561 16.6171C8.12589 16.4957 8.1996 16.3854 8.29251 16.2925L11.5863 13L8.29251 9.7075C8.10486 9.51986 7.99945 9.26536 7.99945 9C7.99945 8.73464 8.10486 8.48014 8.29251 8.2925C8.48015 8.10486 8.73464 7.99944 9.00001 7.99944C9.26537 7.99944 9.51987 8.10486 9.70751 8.2925L13 11.5863L16.2925 8.2925C16.3854 8.19959 16.4957 8.12589 16.6171 8.07561C16.7385 8.02532 16.8686 7.99944 17 7.99944C17.1314 7.99944 17.2615 8.02532 17.3829 8.07561C17.5043 8.12589 17.6146 8.19959 17.7075 8.2925C17.8004 8.38541 17.8741 8.49571 17.9244 8.6171C17.9747 8.7385 18.0006 8.8686 18.0006 9C18.0006 9.1314 17.9747 9.2615 17.9244 9.3829C17.8741 9.50429 17.8004 9.61459 17.7075 9.7075ZM26 13C26 15.5712 25.2376 18.0846 23.8091 20.2224C22.3807 22.3603 20.3503 24.0265 17.9749 25.0104C15.5995 25.9944 12.9856 26.2518 10.4638 25.7502C7.94208 25.2486 5.6257 24.0105 3.80762 22.1924C1.98953 20.3743 0.751405 18.0579 0.249797 15.5362C-0.251811 13.0144 0.0056327 10.4006 0.989572 8.02512C1.97351 5.64968 3.63975 3.61935 5.77759 2.1909C7.91543 0.762437 10.4288 0 13 0C16.4467 0.00363977 19.7512 1.37445 22.1884 3.81163C24.6256 6.24882 25.9964 9.5533 26 13ZM24 13C24 10.8244 23.3549 8.69767 22.1462 6.88873C20.9375 5.07979 19.2195 3.66989 17.2095 2.83733C15.1995 2.00476 12.9878 1.78692 10.854 2.21136C8.72022 2.6358 6.76021 3.68345 5.22183 5.22183C3.68345 6.7602 2.63581 8.72022 2.21137 10.854C1.78693 12.9878 2.00477 15.1995 2.83733 17.2095C3.66989 19.2195 5.07979 20.9375 6.88873 22.1462C8.69767 23.3549 10.8244 24 13 24C15.9164 23.9967 18.7123 22.8367 20.7745 20.7745C22.8367 18.7123 23.9967 15.9164 24 13Z",
        fill: "white"
    }));
};
var close_default = SvgClose;
// src/assets/icons/player.svg
var React36 = __toESM(require("react"));
var SvgPlayer = function(props) {
    return /* @__PURE__ */ React36.createElement("svg", _object_spread({
        width: 80,
        height: 80,
        viewBox: "0 0 80 80",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React36.createElement("ellipse", {
        cx: 39.9999,
        cy: 40,
        rx: 40,
        ry: 40,
        fill: "white"
    }), /* @__PURE__ */ React36.createElement("path", {
        d: "M53.3383 39.9984C53.3392 40.3466 53.2468 40.6891 53.0703 40.9926C52.8937 41.2961 52.6389 41.5503 52.3307 41.7303L33.2292 53.0298C32.9071 53.2205 32.5383 53.3246 32.1607 53.3314C31.7832 53.3381 31.4106 53.2473 31.0815 53.0683C30.7555 52.892 30.4839 52.635 30.2947 52.3236C30.1055 52.0122 30.0055 51.6577 30.0049 51.2965V28.7002C30.0055 28.339 30.1055 27.9845 30.2947 27.6732C30.4839 27.3618 30.7555 27.1047 31.0815 26.9285C31.4106 26.7495 31.7832 26.6586 32.1607 26.6654C32.5383 26.6722 32.9071 26.7763 33.2292 26.9669L52.3307 38.2664C52.6389 38.4465 52.8937 38.7006 53.0703 39.0041C53.2468 39.3076 53.3392 39.6501 53.3383 39.9984Z",
        fill: "#132330"
    }));
};
var player_default = SvgPlayer;
// src/design.system/video/video.styled.tsx
var import_styled_components17 = require("styled-components");
var ImagePreviewWrapper = import_styled_components17.styled.div(_templateObject40(), function(param) {
    var url = param.url;
    return "linear-gradient(\n      0deg,\n      rgba(2, 20, 30, 0.2) 0%,\n      rgba(2, 20, 30, 0.2) 100%\n    ),\n    url(".concat(url, "),\n    lightgray 50%");
});
var PlayerIconWrapper = import_styled_components17.styled.div(_templateObject41());
var LargePlayerIconWrapper = (0, import_styled_components17.styled)(PlayerIconWrapper)(_templateObject42());
var StyledLargeVideo = import_styled_components17.styled.video(_templateObject43());
var LargeVideoHeader = import_styled_components17.styled.div(_templateObject44());
var LargeVideoContainer = import_styled_components17.styled.div(_templateObject45());
// src/design.system/video/video.tsx
function Video(param) {
    var videoSrc = param.videoSrc, title = param.title, thumbnail = param.thumbnail;
    var _ref = _sliced_to_array((0, import_react21.useState)(false), 2), isLarge = _ref[0], setIsLarge = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react21.useState)(true), 2), pause = _ref1[0], setPause = _ref1[1];
    var handleClick = function() {
        setIsLarge(true);
    };
    var handleClose = function() {
        setIsLarge(false);
        setPause(true);
    };
    var renderSmallView = function() {
        return /* @__PURE__ */ import_react21.default.createElement(import_react21.default.Fragment, null, /* @__PURE__ */ import_react21.default.createElement(Text, {
            size: 16,
            weight: 600
        }, title), /* @__PURE__ */ import_react21.default.createElement(ImagePreviewWrapper, {
            onClick: handleClick,
            url: thumbnail
        }, /* @__PURE__ */ import_react21.default.createElement(PlayerIconWrapper, null, /* @__PURE__ */ import_react21.default.createElement(player_default, {
            width: 30
        }))));
    };
    var renderLargeView = function() {
        return /* @__PURE__ */ import_react21.default.createElement(LargeVideoContainer, null, /* @__PURE__ */ import_react21.default.createElement(LargeVideoHeader, null, /* @__PURE__ */ import_react21.default.createElement(Text, {
            size: 20,
            weight: 600
        }, title), /* @__PURE__ */ import_react21.default.createElement(close_default, {
            onClick: handleClose,
            style: {
                cursor: "pointer"
            }
        })), !pause ? /* @__PURE__ */ import_react21.default.createElement(StyledLargeVideo, {
            src: videoSrc,
            autoPlay: true,
            controls: true
        }) : /* @__PURE__ */ import_react21.default.createElement(ImagePreviewWrapper, {
            url: thumbnail,
            style: {
                width: 980,
                height: 560
            },
            onClick: function() {
                return setPause(false);
            }
        }, /* @__PURE__ */ import_react21.default.createElement(LargePlayerIconWrapper, null, /* @__PURE__ */ import_react21.default.createElement(player_default, {
            width: 80
        }))));
    };
    return /* @__PURE__ */ import_react21.default.createElement("div", null, isLarge ? renderLargeView() : renderSmallView());
}
// src/design.system/loader/loader.tsx
var import_react22 = __toESM(require("react"));
// src/design.system/loader/loader.styled.tsx
var import_styled_components18 = __toESM(require("styled-components"));
var LoaderWrapper = import_styled_components18.default.div(_templateObject46());
var StyledLoader = import_styled_components18.default.div(_templateObject47(), function(param) {
    var width = param.width;
    return width || 48;
}, function(param) {
    var height = param.height;
    return height || 48;
}, function(param) {
    var theme2 = param.theme;
    return "".concat(theme2.colors.secondary, " ").concat(theme2.colors.secondary, " ").concat(theme2.colors.secondary, "  transparent");
});
// src/design.system/loader/loader.tsx
function Loader(param) {
    var width = param.width, height = param.height;
    return /* @__PURE__ */ import_react22.default.createElement(LoaderWrapper, null, /* @__PURE__ */ import_react22.default.createElement(StyledLoader, {
        width: width,
        height: height
    }));
}
// src/design.system/notification/notification.tsx
var import_react23 = __toESM(require("react"));
// src/design.system/notification/notification.styled.tsx
var import_styled_components19 = __toESM(require("styled-components"));
var NotificationContainer = import_styled_components19.default.div(_templateObject48());
var StyledNotification = import_styled_components19.default.div(_templateObject49(), function(param) {
    var theme2 = param.theme;
    return "1px solid ".concat(theme2.colors.secondary);
}, function(param) {
    var theme2 = param.theme;
    return theme2.colors.dark_blue;
});
// src/assets/icons/X-blue.svg
var React39 = __toESM(require("react"));
var SvgXBlue = function(props) {
    return /* @__PURE__ */ React39.createElement("svg", _object_spread({
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React39.createElement("path", {
        d: "M12.8535 12.146C12.9 12.1925 12.9368 12.2476 12.962 12.3083C12.9871 12.369 13.0001 12.4341 13.0001 12.4998C13.0001 12.5655 12.9871 12.6305 12.962 12.6912C12.9368 12.7519 12.9 12.8071 12.8535 12.8535C12.8071 12.9 12.7519 12.9368 12.6912 12.962C12.6305 12.9871 12.5655 13.0001 12.4998 13.0001C12.4341 13.0001 12.369 12.9871 12.3083 12.962C12.2476 12.9368 12.1925 12.9 12.146 12.8535L7.99979 8.70666L3.85354 12.8535C3.75972 12.9474 3.63247 13.0001 3.49979 13.0001C3.36711 13.0001 3.23986 12.9474 3.14604 12.8535C3.05222 12.7597 2.99951 12.6325 2.99951 12.4998C2.99951 12.3671 3.05222 12.2399 3.14604 12.146L7.29291 7.99979L3.14604 3.85354C3.05222 3.75972 2.99951 3.63247 2.99951 3.49979C2.99951 3.36711 3.05222 3.23986 3.14604 3.14604C3.23986 3.05222 3.36711 2.99951 3.49979 2.99951C3.63247 2.99951 3.75972 3.05222 3.85354 3.14604L7.99979 7.29291L12.146 3.14604C12.2399 3.05222 12.3671 2.99951 12.4998 2.99951C12.6325 2.99951 12.7597 3.05222 12.8535 3.14604C12.9474 3.23986 13.0001 3.36711 13.0001 3.49979C13.0001 3.63247 12.9474 3.75972 12.8535 3.85354L8.70666 7.99979L12.8535 12.146Z",
        fill: "#96F2FF"
    }));
};
var X_blue_default = SvgXBlue;
// src/assets/icons/success-notification.svg
var React40 = __toESM(require("react"));
var SvgSuccessNotification = function(props) {
    return /* @__PURE__ */ React40.createElement("svg", _object_spread({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React40.createElement("rect", {
        width: 24,
        height: 24,
        rx: 6,
        fill: "url(#paint0_linear_157_245)"
    }), /* @__PURE__ */ React40.createElement("rect", {
        width: 24,
        height: 24,
        rx: 6,
        fill: "url(#paint1_radial_157_245)",
        fillOpacity: 0.4
    }), /* @__PURE__ */ React40.createElement("path", {
        d: "M18.3535 8.85354L10.3535 16.8535C10.3071 16.9 10.252 16.9369 10.1913 16.9621C10.1306 16.9872 10.0655 17.0002 9.99979 17.0002C9.93408 17.0002 9.86902 16.9872 9.80832 16.9621C9.74762 16.9369 9.69248 16.9 9.64604 16.8535L6.14604 13.3535C6.05222 13.2597 5.99951 13.1325 5.99951 12.9998C5.99951 12.8671 6.05222 12.7399 6.14604 12.646C6.23986 12.5522 6.36711 12.4995 6.49979 12.4995C6.63247 12.4995 6.75972 12.5522 6.85354 12.646L9.99979 15.7929L17.646 8.14604C17.7399 8.05222 17.8671 7.99951 17.9998 7.99951C18.1325 7.99951 18.2597 8.05222 18.3535 8.14604C18.4474 8.23986 18.5001 8.36711 18.5001 8.49979C18.5001 8.63247 18.4474 8.75972 18.3535 8.85354Z",
        fill: "#0EE6F3"
    }), /* @__PURE__ */ React40.createElement("defs", null, /* @__PURE__ */ React40.createElement("linearGradient", {
        id: "paint0_linear_157_245",
        x1: 12,
        y1: 0,
        x2: 12,
        y2: 24,
        gradientUnits: "userSpaceOnUse"
    }, /* @__PURE__ */ React40.createElement("stop", {
        stopColor: "#365963"
    }), /* @__PURE__ */ React40.createElement("stop", {
        offset: 1,
        stopColor: "#2B2F56"
    })), /* @__PURE__ */ React40.createElement("radialGradient", {
        id: "paint1_radial_157_245",
        cx: 0,
        cy: 0,
        r: 1,
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(24) rotate(120.009) scale(17.3221 18.6093)"
    }, /* @__PURE__ */ React40.createElement("stop", {
        stopColor: "#96F2FF"
    }), /* @__PURE__ */ React40.createElement("stop", {
        offset: 0.619146,
        stopColor: "#96F2FF",
        stopOpacity: 0
    }))));
};
var success_notification_default = SvgSuccessNotification;
// src/assets/icons/error-notification.svg
var React41 = __toESM(require("react"));
var SvgErrorNotification = function(props) {
    return /* @__PURE__ */ React41.createElement("svg", _object_spread({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React41.createElement("rect", {
        width: 24,
        height: 24,
        rx: 6,
        fill: "url(#paint0_linear_157_648)"
    }), /* @__PURE__ */ React41.createElement("path", {
        d: "M12 5.5C10.7144 5.5 9.45772 5.88122 8.3888 6.59545C7.31988 7.30968 6.48676 8.32484 5.99479 9.51256C5.50282 10.7003 5.37409 12.0072 5.6249 13.2681C5.8757 14.529 6.49477 15.6872 7.40381 16.5962C8.31285 17.5052 9.47104 18.1243 10.7319 18.3751C11.9928 18.6259 13.2997 18.4972 14.4874 18.0052C15.6752 17.5132 16.6903 16.6801 17.4046 15.6112C18.1188 14.5423 18.5 13.2856 18.5 12C18.4982 10.2767 17.8128 8.62441 16.5942 7.40582C15.3756 6.18722 13.7234 5.50182 12 5.5ZM12 17.5C10.9122 17.5 9.84884 17.1774 8.94437 16.5731C8.0399 15.9687 7.33495 15.1098 6.91867 14.1048C6.50238 13.0998 6.39347 11.9939 6.60568 10.927C6.8179 9.86011 7.34173 8.8801 8.11092 8.11091C8.8801 7.34172 9.86011 6.8179 10.927 6.60568C11.9939 6.39346 13.0998 6.50238 14.1048 6.91866C15.1098 7.33494 15.9687 8.03989 16.5731 8.94436C17.1774 9.84883 17.5 10.9122 17.5 12C17.4983 13.4582 16.9184 14.8562 15.8873 15.8873C14.8562 16.9184 13.4582 17.4983 12 17.5ZM11.5 12.5V9C11.5 8.86739 11.5527 8.74021 11.6464 8.64645C11.7402 8.55268 11.8674 8.5 12 8.5C12.1326 8.5 12.2598 8.55268 12.3536 8.64645C12.4473 8.74021 12.5 8.86739 12.5 9V12.5C12.5 12.6326 12.4473 12.7598 12.3536 12.8536C12.2598 12.9473 12.1326 13 12 13C11.8674 13 11.7402 12.9473 11.6464 12.8536C11.5527 12.7598 11.5 12.6326 11.5 12.5ZM12.75 14.75C12.75 14.8983 12.706 15.0433 12.6236 15.1667C12.5412 15.29 12.4241 15.3861 12.287 15.4429C12.15 15.4997 11.9992 15.5145 11.8537 15.4856C11.7082 15.4566 11.5746 15.3852 11.4697 15.2803C11.3648 15.1754 11.2934 15.0418 11.2644 14.8963C11.2355 14.7508 11.2503 14.6 11.3071 14.463C11.3639 14.3259 11.46 14.2088 11.5833 14.1264C11.7067 14.044 11.8517 14 12 14C12.1989 14 12.3897 14.079 12.5303 14.2197C12.671 14.3603 12.75 14.5511 12.75 14.75Z",
        fill: "white"
    }), /* @__PURE__ */ React41.createElement("defs", null, /* @__PURE__ */ React41.createElement("linearGradient", {
        id: "paint0_linear_157_648",
        x1: 12,
        y1: 0,
        x2: 12,
        y2: 24,
        gradientUnits: "userSpaceOnUse"
    }, /* @__PURE__ */ React41.createElement("stop", {
        stopColor: "#FD3F3F"
    }), /* @__PURE__ */ React41.createElement("stop", {
        offset: 1,
        stopColor: "#2B2F56"
    }))));
};
var error_notification_default = SvgErrorNotification;
// src/design.system/notification/notification.tsx
function Notification(param) {
    var type = param.type, message = param.message, onClose = param.onClose;
    var getIcon = function getIcon() {
        switch(type){
            case "success":
                return /* @__PURE__ */ import_react23.default.createElement(success_notification_default, null);
            case "error":
                return /* @__PURE__ */ import_react23.default.createElement(error_notification_default, null);
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
    (0, import_react23.useEffect)(function() {
        var id = setTimeout(function() {
            onClose && onClose();
        }, 5e3);
        return function() {
            clearTimeout(id);
        };
    }, []);
    return /* @__PURE__ */ import_react23.default.createElement(NotificationContainer, null, /* @__PURE__ */ import_react23.default.createElement(StyledNotification, {
        style: getNotificationStyle()
    }, getIcon(), /* @__PURE__ */ import_react23.default.createElement(Text, {
        weight: 500,
        size: 14
    }, message), /* @__PURE__ */ import_react23.default.createElement(X_blue_default, {
        onClick: onClose
    })));
}
// src/design.system/data.flow/index.tsx
var import_react30 = __toESM(require("react"));
var import_reactflow7 = __toESM(require("reactflow"));
// src/design.system/data.flow/action.node.tsx
var import_react24 = __toESM(require("react"));
var import_reactflow = require("reactflow");
var import_styled_components20 = __toESM(require("styled-components"));
var ActionContainer = import_styled_components20.default.div(_templateObject50(), function(param) {
    var theme2 = param.theme;
    return "solid 1px ".concat(theme2.colors.blue_grey);
}, function(param) {
    var theme2 = param.theme;
    return theme2.colors.dark;
});
var TextWrapper3 = import_styled_components20.default.div(_templateObject51());
var SignalIndicator = import_styled_components20.default.span(_templateObject52(), function(param) {
    var backgroundColor2 = param.backgroundColor;
    return backgroundColor2;
});
var IconWrapper = import_styled_components20.default.div(_templateObject53());
var action_node_default = (0, import_react24.memo)(function(param) {
    var data = param.data, isConnectable = param.isConnectable;
    var _data_spec, _data, _data_spec1;
    var ActionIcon = ACTION_ICONS[data.type] ? ACTION_ICONS[data.type] : null;
    return /* @__PURE__ */ import_react24.default.createElement(ActionContainer, null, /* @__PURE__ */ import_react24.default.createElement(import_reactflow.Handle, {
        type: "target",
        position: import_reactflow.Position.Left,
        id: "b",
        isConnectable: isConnectable,
        style: {
            visibility: "hidden"
        }
    }), ActionIcon && /* @__PURE__ */ import_react24.default.createElement(IconWrapper, null, /* @__PURE__ */ import_react24.default.createElement(ActionIcon, null)), /* @__PURE__ */ import_react24.default.createElement(TextWrapper3, null, /* @__PURE__ */ import_react24.default.createElement(Text, {
        size: 14,
        weight: 600
    }, ((_data = data) === null || _data === void 0 ? void 0 : (_data_spec = _data.spec) === null || _data_spec === void 0 ? void 0 : _data_spec.actionName) || "Action")), /* @__PURE__ */ import_react24.default.createElement("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            width: "100%"
        }
    }, (_data_spec1 = data.spec) === null || _data_spec1 === void 0 ? void 0 : _data_spec1.signals.map(function(monitor) {
        return /* @__PURE__ */ import_react24.default.createElement(SignalIndicator, {
            key: monitor,
            backgroundColor: palette_default.colors[monitor.toLowerCase()]
        });
    })), /* @__PURE__ */ import_react24.default.createElement(import_reactflow.Handle, {
        type: "source",
        position: import_reactflow.Position.Right,
        id: "a",
        isConnectable: isConnectable,
        style: {
            visibility: "hidden"
        }
    }));
});
// src/design.system/data.flow/keyval.middleware.tsx
var import_react25 = __toESM(require("react"));
var import_reactflow2 = require("reactflow");
var import_styled_components21 = __toESM(require("styled-components"));
var flickerAnimation = import_styled_components21.keyframes(_templateObject54());
var FlickerWrapper = import_styled_components21.default.div(_templateObject55(), flickerAnimation);
var InnerWrapper = import_styled_components21.default.div(_templateObject56());
var LogoContainer = import_styled_components21.default.div(_templateObject57());
var OdigosCenterNode = function(param) {
    var isConnectable = param.isConnectable;
    return /* @__PURE__ */ import_react25.default.createElement(FlickerWrapper, null, /* @__PURE__ */ import_react25.default.createElement(InnerWrapper, null, /* @__PURE__ */ import_react25.default.createElement(LogoContainer, null, /* @__PURE__ */ import_react25.default.createElement("img", {
        src: "https://d1n7d4xz7fr8b4.cloudfront.net/logo.png",
        alt: "logo",
        style: {
            borderRadius: "50%",
            width: 64,
            height: 64
        }
    }))), /* @__PURE__ */ import_react25.default.createElement(import_reactflow2.Handle, {
        type: "target",
        position: import_reactflow2.Position.Left,
        style: {
            visibility: "hidden"
        }
    }), /* @__PURE__ */ import_react25.default.createElement(import_reactflow2.Handle, {
        type: "source",
        position: import_reactflow2.Position.Right,
        id: "a",
        isConnectable: isConnectable,
        style: {
            visibility: "hidden"
        }
    }));
};
var keyval_middleware_default = OdigosCenterNode;
// src/design.system/data.flow/namespace.node.tsx
var import_react26 = __toESM(require("react"));
var import_reactflow3 = require("reactflow");
var import_styled_components22 = require("styled-components");
// src/assets/icons/overview/middleware.svg
var React45 = __toESM(require("react"));
// src/assets/icons/overview/folder.svg
var React46 = __toESM(require("react"));
var SvgFolder = function(props) {
    return /* @__PURE__ */ React46.createElement("svg", _object_spread({
        width: 32,
        height: 32,
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React46.createElement("rect", {
        width: 32,
        height: 32,
        rx: 4,
        fill: "url(#paint0_linear_280_5350)"
    }), /* @__PURE__ */ React46.createElement("rect", {
        width: 32,
        height: 32,
        rx: 4,
        fill: "url(#paint1_radial_280_5350)",
        fillOpacity: 0.4
    }), /* @__PURE__ */ React46.createElement("path", {
        opacity: 0.2,
        d: "M25.75 11.5V19.8334C25.75 20.0102 25.6798 20.1798 25.5548 20.3048C25.4298 20.4298 25.2602 20.5 25.0834 20.5H22.75V14.5C22.75 14.3011 22.671 14.1103 22.5303 13.9697C22.3897 13.829 22.1989 13.75 22 13.75H15.5003C15.338 13.75 15.1801 13.6974 15.0503 13.6L12.4497 11.65C12.3199 11.5526 12.162 11.5 11.9997 11.5H10V9.25C10 9.05109 10.079 8.86032 10.2197 8.71967C10.3603 8.57902 10.5511 8.5 10.75 8.5H14.9997C15.162 8.5 15.3199 8.55263 15.4497 8.65L18.0503 10.6C18.1801 10.6974 18.338 10.75 18.5003 10.75H25C25.1989 10.75 25.3897 10.829 25.5303 10.9697C25.671 11.1103 25.75 11.3011 25.75 11.5Z",
        fill: "#96F2FF"
    }), /* @__PURE__ */ React46.createElement("path", {
        d: "M25 10H18.5003L15.8997 8.05C15.6397 7.85599 15.3241 7.7508 14.9997 7.75H10.75C10.3522 7.75 9.97064 7.90804 9.68934 8.18934C9.40804 8.47064 9.25 8.85218 9.25 9.25V10.75H7.75C7.35218 10.75 6.97064 10.908 6.68934 11.1893C6.40804 11.4706 6.25 11.8522 6.25 12.25V22.75C6.25 23.1478 6.40804 23.5294 6.68934 23.8107C6.97064 24.092 7.35218 24.25 7.75 24.25H22.0834C22.459 24.2495 22.819 24.1001 23.0846 23.8346C23.3501 23.569 23.4995 23.209 23.5 22.8334V21.25H25.0834C25.459 21.2495 25.819 21.1001 26.0846 20.8346C26.3501 20.569 26.4995 20.209 26.5 19.8334V11.5C26.5 11.1022 26.342 10.7206 26.0607 10.4393C25.7794 10.158 25.3978 10 25 10ZM22 22.75H7.75V12.25H11.9997L14.6003 14.2C14.8603 14.394 15.1759 14.4992 15.5003 14.5H22V22.75ZM25 19.75H23.5V14.5C23.5 14.1022 23.342 13.7206 23.0607 13.4393C22.7794 13.158 22.3978 13 22 13H15.5003L12.8997 11.05C12.6397 10.856 12.3241 10.7508 11.9997 10.75H10.75V9.25H14.9997L17.6003 11.2C17.8603 11.394 18.1759 11.4992 18.5003 11.5H25V19.75Z",
        fill: "#96F2FF"
    }), /* @__PURE__ */ React46.createElement("rect", {
        x: 0.375,
        y: 0.375,
        width: 31.25,
        height: 31.25,
        rx: 3.625,
        stroke: "url(#paint2_linear_280_5350)",
        strokeOpacity: 0.5,
        strokeWidth: 0.75
    }), /* @__PURE__ */ React46.createElement("defs", null, /* @__PURE__ */ React46.createElement("linearGradient", {
        id: "paint0_linear_280_5350",
        x1: 16,
        y1: 0,
        x2: 16,
        y2: 32,
        gradientUnits: "userSpaceOnUse"
    }, /* @__PURE__ */ React46.createElement("stop", {
        stopColor: "#2E4C55"
    }), /* @__PURE__ */ React46.createElement("stop", {
        offset: 1,
        stopColor: "#303355"
    })), /* @__PURE__ */ React46.createElement("radialGradient", {
        id: "paint1_radial_280_5350",
        cx: 0,
        cy: 0,
        r: 1,
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(32 -1.19209e-06) rotate(120.009) scale(23.0961 24.8123)"
    }, /* @__PURE__ */ React46.createElement("stop", {
        stopColor: "#96F2FF"
    }), /* @__PURE__ */ React46.createElement("stop", {
        offset: 0.619146,
        stopColor: "#96F2FF",
        stopOpacity: 0
    })), /* @__PURE__ */ React46.createElement("linearGradient", {
        id: "paint2_linear_280_5350",
        x1: 16,
        y1: 0,
        x2: 16,
        y2: 32,
        gradientUnits: "userSpaceOnUse"
    }, /* @__PURE__ */ React46.createElement("stop", {
        stopColor: "#96F2FF"
    }), /* @__PURE__ */ React46.createElement("stop", {
        offset: 1,
        stopColor: "#96F2FF",
        stopOpacity: 0
    }))));
};
var folder_default = SvgFolder;
// src/design.system/data.flow/namespace.node.tsx
var NamespaceContainer = import_styled_components22.styled.div(_templateObject58(), function(param) {
    var theme2 = param.theme;
    return "solid 1px ".concat(theme2.colors.blue_grey);
}, function(param) {
    var theme2 = param.theme;
    return theme2.colors.dark;
});
var TextWrapper4 = import_styled_components22.styled.div(_templateObject59());
var namespace_node_default = (0, import_react26.memo)(function(param) {
    var data = param.data, isConnectable = param.isConnectable;
    var _data, _data1;
    return /* @__PURE__ */ import_react26.default.createElement(NamespaceContainer, null, /* @__PURE__ */ import_react26.default.createElement(folder_default, {
        width: 32
    }), /* @__PURE__ */ import_react26.default.createElement(TextWrapper4, null, /* @__PURE__ */ import_react26.default.createElement(Text, {
        size: 14,
        weight: 600
    }, (_data = data) === null || _data === void 0 ? void 0 : _data.name), ((_data1 = data) === null || _data1 === void 0 ? void 0 : _data1.totalAppsInstrumented) && /* @__PURE__ */ import_react26.default.createElement(Text, {
        color: "#8b92a5"
    }, "".concat(data.totalAppsInstrumented, " Apps Instrumented"))), /* @__PURE__ */ import_react26.default.createElement(import_reactflow3.Handle, {
        type: "source",
        position: import_reactflow3.Position.Right,
        id: "a",
        isConnectable: isConnectable,
        style: {
            visibility: "hidden"
        }
    }));
});
// src/design.system/data.flow/destination.node.tsx
var import_react27 = __toESM(require("react"));
var import_styled_components23 = require("styled-components");
var import_reactflow4 = require("reactflow");
// src/assets/icons/logs-grey.svg
var React48 = __toESM(require("react"));
var SvgLogsGrey = function(props) {
    return /* @__PURE__ */ React48.createElement("svg", _object_spread({
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React48.createElement("path", {
        d: "M2 4C2 3.86739 2.05268 3.74021 2.14645 3.64645C2.24021 3.55268 2.36739 3.5 2.5 3.5H13.5C13.6326 3.5 13.7598 3.55268 13.8536 3.64645C13.9473 3.74021 14 3.86739 14 4C14 4.13261 13.9473 4.25979 13.8536 4.35355C13.7598 4.44732 13.6326 4.5 13.5 4.5H2.5C2.36739 4.5 2.24021 4.44732 2.14645 4.35355C2.05268 4.25979 2 4.13261 2 4ZM2.5 7H10.5C10.6326 7 10.7598 6.94732 10.8536 6.85355C10.9473 6.75979 11 6.63261 11 6.5C11 6.36739 10.9473 6.24021 10.8536 6.14645C10.7598 6.05268 10.6326 6 10.5 6H2.5C2.36739 6 2.24021 6.05268 2.14645 6.14645C2.05268 6.24021 2 6.36739 2 6.5C2 6.63261 2.05268 6.75979 2.14645 6.85355C2.24021 6.94732 2.36739 7 2.5 7ZM13.5 8.5H2.5C2.36739 8.5 2.24021 8.55268 2.14645 8.64645C2.05268 8.74021 2 8.86739 2 9C2 9.13261 2.05268 9.25979 2.14645 9.35355C2.24021 9.44732 2.36739 9.5 2.5 9.5H13.5C13.6326 9.5 13.7598 9.44732 13.8536 9.35355C13.9473 9.25979 14 9.13261 14 9C14 8.86739 13.9473 8.74021 13.8536 8.64645C13.7598 8.55268 13.6326 8.5 13.5 8.5ZM10.5 11H2.5C2.36739 11 2.24021 11.0527 2.14645 11.1464C2.05268 11.2402 2 11.3674 2 11.5C2 11.6326 2.05268 11.7598 2.14645 11.8536C2.24021 11.9473 2.36739 12 2.5 12H10.5C10.6326 12 10.7598 11.9473 10.8536 11.8536C10.9473 11.7598 11 11.6326 11 11.5C11 11.3674 10.9473 11.2402 10.8536 11.1464C10.7598 11.0527 10.6326 11 10.5 11Z",
        fill: "#8B92A5"
    }));
};
var logs_grey_default = SvgLogsGrey;
// src/assets/icons/logs-blue.svg
var React49 = __toESM(require("react"));
var SvgLogsBlue = function(props) {
    return /* @__PURE__ */ React49.createElement("svg", _object_spread({
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React49.createElement("path", {
        d: "M2 4C2 3.86739 2.05268 3.74021 2.14645 3.64645C2.24021 3.55268 2.36739 3.5 2.5 3.5H13.5C13.6326 3.5 13.7598 3.55268 13.8536 3.64645C13.9473 3.74021 14 3.86739 14 4C14 4.13261 13.9473 4.25979 13.8536 4.35355C13.7598 4.44732 13.6326 4.5 13.5 4.5H2.5C2.36739 4.5 2.24021 4.44732 2.14645 4.35355C2.05268 4.25979 2 4.13261 2 4ZM2.5 7H10.5C10.6326 7 10.7598 6.94732 10.8536 6.85355C10.9473 6.75979 11 6.63261 11 6.5C11 6.36739 10.9473 6.24021 10.8536 6.14645C10.7598 6.05268 10.6326 6 10.5 6H2.5C2.36739 6 2.24021 6.05268 2.14645 6.14645C2.05268 6.24021 2 6.36739 2 6.5C2 6.63261 2.05268 6.75979 2.14645 6.85355C2.24021 6.94732 2.36739 7 2.5 7ZM13.5 8.5H2.5C2.36739 8.5 2.24021 8.55268 2.14645 8.64645C2.05268 8.74021 2 8.86739 2 9C2 9.13261 2.05268 9.25979 2.14645 9.35355C2.24021 9.44732 2.36739 9.5 2.5 9.5H13.5C13.6326 9.5 13.7598 9.44732 13.8536 9.35355C13.9473 9.25979 14 9.13261 14 9C14 8.86739 13.9473 8.74021 13.8536 8.64645C13.7598 8.55268 13.6326 8.5 13.5 8.5ZM10.5 11H2.5C2.36739 11 2.24021 11.0527 2.14645 11.1464C2.05268 11.2402 2 11.3674 2 11.5C2 11.6326 2.05268 11.7598 2.14645 11.8536C2.24021 11.9473 2.36739 12 2.5 12H10.5C10.6326 12 10.7598 11.9473 10.8536 11.8536C10.9473 11.7598 11 11.6326 11 11.5C11 11.3674 10.9473 11.2402 10.8536 11.1464C10.7598 11.0527 10.6326 11 10.5 11Z",
        fill: "#96F2FF"
    }));
};
var logs_blue_default = SvgLogsBlue;
// src/assets/icons/chart-line-grey.svg
var React50 = __toESM(require("react"));
var SvgChartLineGrey = function(props) {
    return /* @__PURE__ */ React50.createElement("svg", _object_spread({
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React50.createElement("path", {
        d: "M14.5 13C14.5 13.1326 14.4473 13.2598 14.3536 13.3536C14.2598 13.4473 14.1326 13.5 14 13.5H2C1.86739 13.5 1.74021 13.4473 1.64645 13.3536C1.55268 13.2598 1.5 13.1326 1.5 13V3C1.5 2.86739 1.55268 2.74021 1.64645 2.64645C1.74021 2.55268 1.86739 2.5 2 2.5C2.13261 2.5 2.25979 2.55268 2.35355 2.64645C2.44732 2.74021 2.5 2.86739 2.5 3V8.89812L5.67063 6.125C5.7569 6.04947 5.86652 6.0059 5.9811 6.00157C6.09569 5.99725 6.20828 6.03244 6.3 6.10125L9.97563 8.85812L13.6706 5.625C13.7191 5.57704 13.7768 5.5395 13.8403 5.51467C13.9038 5.48985 13.9717 5.47827 14.0398 5.48065C14.1079 5.48303 14.1749 5.49931 14.2365 5.5285C14.2981 5.55769 14.3531 5.59917 14.398 5.65038C14.443 5.7016 14.4771 5.76148 14.4981 5.82633C14.5191 5.89119 14.5266 5.95965 14.5201 6.02752C14.5137 6.09538 14.4935 6.16122 14.4607 6.22097C14.4279 6.28073 14.3832 6.33314 14.3294 6.375L10.3294 9.875C10.2431 9.95053 10.1335 9.9941 10.0189 9.99843C9.90431 10.0028 9.79172 9.96756 9.7 9.89875L6.02437 7.14313L2.5 10.2269V12.5H14C14.1326 12.5 14.2598 12.5527 14.3536 12.6464C14.4473 12.7402 14.5 12.8674 14.5 13Z",
        fill: "#8B92A5"
    }));
};
var chart_line_grey_default = SvgChartLineGrey;
// src/assets/icons/chart-line-blue.svg
var React51 = __toESM(require("react"));
var SvgChartLineBlue = function(props) {
    return /* @__PURE__ */ React51.createElement("svg", _object_spread({
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React51.createElement("path", {
        d: "M14.5 13C14.5 13.1326 14.4473 13.2598 14.3536 13.3536C14.2598 13.4473 14.1326 13.5 14 13.5H2C1.86739 13.5 1.74021 13.4473 1.64645 13.3536C1.55268 13.2598 1.5 13.1326 1.5 13V3C1.5 2.86739 1.55268 2.74021 1.64645 2.64645C1.74021 2.55268 1.86739 2.5 2 2.5C2.13261 2.5 2.25979 2.55268 2.35355 2.64645C2.44732 2.74021 2.5 2.86739 2.5 3V8.89812L5.67063 6.125C5.7569 6.04947 5.86652 6.0059 5.9811 6.00157C6.09569 5.99725 6.20828 6.03244 6.3 6.10125L9.97563 8.85812L13.6706 5.625C13.7191 5.57704 13.7768 5.5395 13.8403 5.51467C13.9038 5.48985 13.9717 5.47827 14.0398 5.48065C14.1079 5.48303 14.1749 5.49931 14.2365 5.5285C14.2981 5.55769 14.3531 5.59917 14.398 5.65038C14.443 5.7016 14.4771 5.76148 14.4981 5.82633C14.5191 5.89119 14.5266 5.95965 14.5201 6.02752C14.5137 6.09538 14.4935 6.16122 14.4607 6.22097C14.4279 6.28073 14.3832 6.33314 14.3294 6.375L10.3294 9.875C10.2431 9.95053 10.1335 9.9941 10.0189 9.99843C9.90431 10.0028 9.79172 9.96756 9.7 9.89875L6.02437 7.14313L2.5 10.2269V12.5H14C14.1326 12.5 14.2598 12.5527 14.3536 12.6464C14.4473 12.7402 14.5 12.8674 14.5 13Z",
        fill: "#96F2FF"
    }));
};
var chart_line_blue_default = SvgChartLineBlue;
// src/assets/icons/tree-structure-grey.svg
var React52 = __toESM(require("react"));
var SvgTreeStructureGrey = function(props) {
    return /* @__PURE__ */ React52.createElement("svg", _object_spread({
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React52.createElement("path", {
        d: "M10.5 7H13.5C13.7652 7 14.0196 6.89464 14.2071 6.70711C14.3946 6.51957 14.5 6.26522 14.5 6V3C14.5 2.73478 14.3946 2.48043 14.2071 2.29289C14.0196 2.10536 13.7652 2 13.5 2H10.5C10.2348 2 9.98043 2.10536 9.79289 2.29289C9.60536 2.48043 9.5 2.73478 9.5 3V4H9C8.46957 4 7.96086 4.21071 7.58579 4.58579C7.21071 4.96086 7 5.46957 7 6V7.5H5V7C5 6.73478 4.89464 6.48043 4.70711 6.29289C4.51957 6.10536 4.26522 6 4 6H2C1.73478 6 1.48043 6.10536 1.29289 6.29289C1.10536 6.48043 1 6.73478 1 7V9C1 9.26522 1.10536 9.51957 1.29289 9.70711C1.48043 9.89464 1.73478 10 2 10H4C4.26522 10 4.51957 9.89464 4.70711 9.70711C4.89464 9.51957 5 9.26522 5 9V8.5H7V10C7 10.5304 7.21071 11.0391 7.58579 11.4142C7.96086 11.7893 8.46957 12 9 12H9.5V13C9.5 13.2652 9.60536 13.5196 9.79289 13.7071C9.98043 13.8946 10.2348 14 10.5 14H13.5C13.7652 14 14.0196 13.8946 14.2071 13.7071C14.3946 13.5196 14.5 13.2652 14.5 13V10C14.5 9.73478 14.3946 9.48043 14.2071 9.29289C14.0196 9.10536 13.7652 9 13.5 9H10.5C10.2348 9 9.98043 9.10536 9.79289 9.29289C9.60536 9.48043 9.5 9.73478 9.5 10V11H9C8.73478 11 8.48043 10.8946 8.29289 10.7071C8.10536 10.5196 8 10.2652 8 10V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H9.5V6C9.5 6.26522 9.60536 6.51957 9.79289 6.70711C9.98043 6.89464 10.2348 7 10.5 7ZM4 9H2V7H4V9ZM10.5 10H13.5V13H10.5V10ZM10.5 3H13.5V6H10.5V3Z",
        fill: "#8B92A5"
    }));
};
var tree_structure_grey_default = SvgTreeStructureGrey;
// src/assets/icons/tree-structure-blue.svg
var React53 = __toESM(require("react"));
var SvgTreeStructureBlue = function(props) {
    return /* @__PURE__ */ React53.createElement("svg", _object_spread({
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React53.createElement("path", {
        d: "M10.5 7H13.5C13.7652 7 14.0196 6.89464 14.2071 6.70711C14.3946 6.51957 14.5 6.26522 14.5 6V3C14.5 2.73478 14.3946 2.48043 14.2071 2.29289C14.0196 2.10536 13.7652 2 13.5 2H10.5C10.2348 2 9.98043 2.10536 9.79289 2.29289C9.60536 2.48043 9.5 2.73478 9.5 3V4H9C8.46957 4 7.96086 4.21071 7.58579 4.58579C7.21071 4.96086 7 5.46957 7 6V7.5H5V7C5 6.73478 4.89464 6.48043 4.70711 6.29289C4.51957 6.10536 4.26522 6 4 6H2C1.73478 6 1.48043 6.10536 1.29289 6.29289C1.10536 6.48043 1 6.73478 1 7V9C1 9.26522 1.10536 9.51957 1.29289 9.70711C1.48043 9.89464 1.73478 10 2 10H4C4.26522 10 4.51957 9.89464 4.70711 9.70711C4.89464 9.51957 5 9.26522 5 9V8.5H7V10C7 10.5304 7.21071 11.0391 7.58579 11.4142C7.96086 11.7893 8.46957 12 9 12H9.5V13C9.5 13.2652 9.60536 13.5196 9.79289 13.7071C9.98043 13.8946 10.2348 14 10.5 14H13.5C13.7652 14 14.0196 13.8946 14.2071 13.7071C14.3946 13.5196 14.5 13.2652 14.5 13V10C14.5 9.73478 14.3946 9.48043 14.2071 9.29289C14.0196 9.10536 13.7652 9 13.5 9H10.5C10.2348 9 9.98043 9.10536 9.79289 9.29289C9.60536 9.48043 9.5 9.73478 9.5 10V11H9C8.73478 11 8.48043 10.8946 8.29289 10.7071C8.10536 10.5196 8 10.2652 8 10V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H9.5V6C9.5 6.26522 9.60536 6.51957 9.79289 6.70711C9.98043 6.89464 10.2348 7 10.5 7ZM4 9H2V7H4V9ZM10.5 10H13.5V13H10.5V10ZM10.5 3H13.5V6H10.5V3Z",
        fill: "#96F2FF"
    }));
};
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
var DestinationNodeContainer = import_styled_components23.styled.div(_templateObject60(), function(param) {
    var theme2 = param.theme;
    return "solid 1px ".concat(theme2.colors.blue_grey);
}, function(param) {
    var theme2 = param.theme;
    return theme2.colors.dark;
});
var NodeDataWrapper = import_styled_components23.styled.div(_templateObject61());
var TextWrapper5 = import_styled_components23.styled.div(_templateObject62());
var IMAGE_STYLE2 = {
    backgroundColor: "#fff",
    padding: 4,
    borderRadius: 10
};
var IconWrapper2 = import_styled_components23.styled.div(_templateObject63(), function(param) {
    var tapped = param.tapped;
    return tapped ? 1 : 0.4;
});
var MonitorsListWrapper = import_styled_components23.styled.div(_templateObject64());
function DestinationNode(param) {
    var data = param.data, isConnectable = param.isConnectable;
    var renderMonitors = function renderMonitors() {
        return MONITORING_OPTIONS.map(function(monitor) {
            var _monitor, _monitor1, _data_signals, _data, _monitor2, _data_signals1, _data1;
            return /* @__PURE__ */ import_react27.default.createElement(IconWrapper2, {
                key: (_monitor = monitor) === null || _monitor === void 0 ? void 0 : _monitor.id,
                tapped: ((_data = data) === null || _data === void 0 ? void 0 : (_data_signals = _data.signals) === null || _data_signals === void 0 ? void 0 : _data_signals[(_monitor1 = monitor) === null || _monitor1 === void 0 ? void 0 : _monitor1.type]) ? "true" : void 0,
                style: {
                    border: "solid 2px ".concat(palette_default.colors[monitor.type.toLowerCase()])
                }
            }, ((_data1 = data) === null || _data1 === void 0 ? void 0 : (_data_signals1 = _data1.signals) === null || _data_signals1 === void 0 ? void 0 : _data_signals1[(_monitor2 = monitor) === null || _monitor2 === void 0 ? void 0 : _monitor2.type]) ? monitor.icons.focus() : monitor.icons.notFocus());
        });
    };
    var _data_destination_type, _data, _data1, _data_destination_type1, _data2;
    return /* @__PURE__ */ import_react27.default.createElement(DestinationNodeContainer, null, /* @__PURE__ */ import_react27.default.createElement(NodeDataWrapper, null, /* @__PURE__ */ import_react27.default.createElement("img", {
        src: (_data = data) === null || _data === void 0 ? void 0 : (_data_destination_type = _data.destination_type) === null || _data_destination_type === void 0 ? void 0 : _data_destination_type.image_url,
        width: 40,
        height: 40,
        style: IMAGE_STYLE2,
        alt: ""
    }), /* @__PURE__ */ import_react27.default.createElement(TextWrapper5, null, /* @__PURE__ */ import_react27.default.createElement(Text, {
        color: "#8b92a5"
    }, (_data1 = data) === null || _data1 === void 0 ? void 0 : _data1.name), /* @__PURE__ */ import_react27.default.createElement(Text, {
        size: 18,
        weight: 600
    }, (_data2 = data) === null || _data2 === void 0 ? void 0 : (_data_destination_type1 = _data2.destination_type) === null || _data_destination_type1 === void 0 ? void 0 : _data_destination_type1.display_name))), /* @__PURE__ */ import_react27.default.createElement(MonitorsListWrapper, null, renderMonitors()), /* @__PURE__ */ import_react27.default.createElement(import_reactflow4.Handle, {
        type: "target",
        position: import_reactflow4.Position.Left,
        id: "a",
        isConnectable: isConnectable,
        style: {
            visibility: "hidden"
        }
    }));
}
// src/design.system/data.flow/source.node.tsx
var import_react28 = __toESM(require("react"));
var import_styled_components24 = __toESM(require("styled-components"));
var import_reactflow5 = require("reactflow");
var NamespaceContainer2 = import_styled_components24.default.div(_templateObject65(), function(param) {
    var theme2 = param.theme;
    return "solid 1px ".concat(theme2.colors.blue_grey);
}, function(param) {
    var theme2 = param.theme;
    return theme2.colors.dark;
});
var TextWrapper6 = import_styled_components24.default.div(_templateObject66());
var ImageWrapper = import_styled_components24.default.div(_templateObject67());
var source_node_default = (0, import_react28.memo)(function(param) {
    var data = param.data, isConnectable = param.isConnectable;
    var _data_languages_, _data_languages, _data, _data1;
    var languageKey = ((_data = data) === null || _data === void 0 ? void 0 : (_data_languages = _data.languages) === null || _data_languages === void 0 ? void 0 : (_data_languages_ = _data_languages[0]) === null || _data_languages_ === void 0 ? void 0 : _data_languages_.language) || "default";
    var lan = LANGUAGES_LOGOS[languageKey];
    return /* @__PURE__ */ import_react28.default.createElement(NamespaceContainer2, null, /* @__PURE__ */ import_react28.default.createElement(ImageWrapper, null, /* @__PURE__ */ import_react28.default.createElement("img", {
        src: lan,
        alt: "",
        width: 32,
        height: 32
    })), /* @__PURE__ */ import_react28.default.createElement(TextWrapper6, null, /* @__PURE__ */ import_react28.default.createElement(Text, {
        color: "#8b92a5"
    }, data.namespace), /* @__PURE__ */ import_react28.default.createElement(Text, {
        size: 18,
        weight: 600
    }, (_data1 = data) === null || _data1 === void 0 ? void 0 : _data1.name)), /* @__PURE__ */ import_react28.default.createElement(import_reactflow5.Handle, {
        type: "source",
        position: import_reactflow5.Position.Right,
        id: "a",
        isConnectable: isConnectable,
        style: {
            visibility: "hidden"
        }
    }));
});
// src/design.system/data.flow/data.flow.styled.tsx
var import_styled_components25 = __toESM(require("styled-components"));
var DataFlowContainer = import_styled_components25.default.div(_templateObject68());
var ControllerWrapper = import_styled_components25.default.div(_templateObject69(), function(param) {
    var theme2 = param.theme;
    return "1px solid ".concat(theme2.colors.blue_grey);
});
// src/design.system/data.flow/index.tsx
var import_style2 = require("reactflow/dist/style.css");
// src/design.system/data.flow/control.panel.tsx
var import_react29 = __toESM(require("react"));
var import_style = require("reactflow/dist/style.css");
var import_reactflow6 = require("reactflow");
var import_styled_components26 = __toESM(require("styled-components"));
var ControllerPanelWrapper = import_styled_components26.default.div(_templateObject70(), palette_default.colors.dark, palette_default.colors.blue_grey, function(param) {
    var theme2 = param.theme;
    return "1px solid ".concat(theme2.colors.blue_grey);
});
var MonitorItem = import_styled_components26.default.div(_templateObject71());
var MonitorIndicator = import_styled_components26.default.span(_templateObject72(), function(param) {
    var color = param.color;
    return color;
});
var TitleWrapper = import_styled_components26.default.div(_templateObject73());
function DataFlowControlPanel() {
    var _ref = _sliced_to_array((0, import_react29.useState)(true), 2), isOpen = _ref[0], setOpen = _ref[1];
    (0, import_react29.useEffect)(function() {
        setTimeout(function() {
            setOpen(false);
        }, 7e3);
    }, []);
    var MONITORS2 = [
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
    return /* @__PURE__ */ import_react29.default.createElement(import_react29.default.Fragment, null, /* @__PURE__ */ import_react29.default.createElement(ControllerPanelWrapper, null, /* @__PURE__ */ import_react29.default.createElement(TitleWrapper, {
        onClick: function() {
            return setOpen(!isOpen);
        }
    }, /* @__PURE__ */ import_react29.default.createElement(Text, {
        size: 14,
        weight: 600
    }, "Supported Signals"), /* @__PURE__ */ import_react29.default.createElement(expand_arrow_default, null)), isOpen && /* @__PURE__ */ import_react29.default.createElement(MonitorItem, null, MONITORS2.map(function(monitor) {
        return /* @__PURE__ */ import_react29.default.createElement("div", {
            key: monitor.name,
            style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }
        }, /* @__PURE__ */ import_react29.default.createElement(MonitorIndicator, {
            color: monitor.color
        }), /* @__PURE__ */ import_react29.default.createElement(Text, {
            size: 12,
            weight: 500
        }, monitor.name));
    }))), /* @__PURE__ */ import_react29.default.createElement(ControllerWrapper, null, /* @__PURE__ */ import_react29.default.createElement(import_reactflow6.Controls, {
        position: "top-left",
        showInteractive: false
    })));
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
function DataFlow(_param) {
    var nodes2 = _param.nodes, edges2 = _param.edges, rest = _object_without_properties(_param, [
        "nodes",
        "edges"
    ]);
    var fitView = (0, import_reactflow7.useReactFlow)().fitView;
    (0, import_react30.useEffect)(function() {
        setTimeout(function() {
            fitView();
        }, 100);
    }, [
        fitView,
        nodes2,
        edges2
    ]);
    return /* @__PURE__ */ import_react30.default.createElement(DataFlowContainer, null, /* @__PURE__ */ import_react30.default.createElement(import_reactflow7.default, _object_spread({
        nodes: nodes2,
        edges: edges2,
        nodeTypes: nodeTypes,
        nodesDraggable: false,
        nodeOrigin: [
            0.4,
            0.4
        ]
    }, rest), /* @__PURE__ */ import_react30.default.createElement(DataFlowControlPanel, null), /* @__PURE__ */ import_react30.default.createElement(import_reactflow7.Background, {
        gap: 12,
        size: 1,
        style: {
            backgroundColor: backgroundColor
        }
    })));
}
function KeyvalDataFlow(props) {
    return /* @__PURE__ */ import_react30.default.createElement(import_reactflow7.ReactFlowProvider, null, /* @__PURE__ */ import_react30.default.createElement(DataFlow, _object_spread({}, props)));
}
// src/design.system/danger.zone/danger.zone.tsx
var import_react31 = __toESM(require("react"));
var import_styled_components27 = require("styled-components");
var DangerZoneWrapper = import_styled_components27.styled.div(_templateObject74(), function(param) {
    var theme2 = param.theme;
    return "1px solid ".concat(theme2.colors.blue_grey);
});
var DangerButtonWrapper = import_styled_components27.styled.div(_templateObject75(), function(param) {
    var theme2 = param.theme;
    return theme2.colors.error;
});
var DangerButton = import_styled_components27.styled.button(_templateObject76(), function(param) {
    var theme2 = param.theme;
    return "1px solid ".concat(theme2.colors.blue_grey);
});
function DangerZone(param) {
    var title = param.title, subTitle = param.subTitle, btnText = param.btnText, onClick = param.onClick;
    return /* @__PURE__ */ import_react31.default.createElement(import_react31.default.Fragment, null, /* @__PURE__ */ import_react31.default.createElement(DangerZoneWrapper, null, /* @__PURE__ */ import_react31.default.createElement(Text, {
        size: 14,
        weight: 600
    }, title), /* @__PURE__ */ import_react31.default.createElement(Text, {
        size: 12
    }, subTitle), /* @__PURE__ */ import_react31.default.createElement(DangerButtonWrapper, null, /* @__PURE__ */ import_react31.default.createElement(DangerButton, {
        onClick: onClick
    }, /* @__PURE__ */ import_react31.default.createElement(Text, {
        weight: 500,
        size: 14,
        color: palette_default.colors.error
    }, btnText)))));
}
// src/design.system/modal/modal.tsx
var import_react33 = __toESM(require("react"));
// src/design.system/modal/portal.modal.tsx
var import_react32 = require("react");
var import_react_dom = require("react-dom");
var PortalModal = function(param) {
    var children = param.children, wrapperId = param.wrapperId;
    var _ref = _sliced_to_array((0, import_react32.useState)(null), 2), portalElement = _ref[0], setPortalElement = _ref[1];
    (0, import_react32.useLayoutEffect)(function() {
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
var import_styled_components28 = __toESM(require("styled-components"));
var fadeIn = import_styled_components28.keyframes(_templateObject77());
var ModalButtonsContainer = import_styled_components28.default.div(_templateObject78());
var ModalButtonPrimary = import_styled_components28.default.button(_templateObject79(), function(param) {
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
var ModalButtonSecondary = import_styled_components28.default.button(_templateObject80(), function(param) {
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
var Overlay = import_styled_components28.default.div(_templateObject81(), function(props) {
    return props.showOverlay ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.1)";
}, function(props) {
    return props.positionX ? props.positionX : "center";
}, function(props) {
    return props.positionY ? props.positionY : "center";
}, fadeIn);
var ModalContainer = import_styled_components28.default.div(_templateObject82(), function(props) {
    return props.padding ? props.padding : "20px";
});
var ModalHeader = import_styled_components28.default.header(_templateObject83());
var Close = import_styled_components28.default.div(_templateObject84());
var PrimaryButton = import_styled_components28.default.button(_templateObject85());
var Content = import_styled_components28.default.div(_templateObject86(), function(param) {
    var theme2 = param.theme;
    return theme2.text;
});
var ModalFooter = import_styled_components28.default.footer(_templateObject87());
// src/assets/icons/close-modal.svg
var React59 = __toESM(require("react"));
var SvgCloseModal = function(props) {
    return /* @__PURE__ */ React59.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none"
    }, props), /* @__PURE__ */ React59.createElement("rect", {
        width: 16,
        height: 16,
        rx: 2,
        fill: "#0E1C28"
    }), /* @__PURE__ */ React59.createElement("path", {
        d: "M12.8538 12.146C12.9002 12.1925 12.9371 12.2476 12.9622 12.3083C12.9874 12.369 13.0003 12.4341 13.0003 12.4998C13.0003 12.5655 12.9874 12.6305 12.9622 12.6912C12.9371 12.7519 12.9002 12.8071 12.8538 12.8535C12.8073 12.9 12.7522 12.9368 12.6915 12.962C12.6308 12.9871 12.5657 13.0001 12.5 13.0001C12.4343 13.0001 12.3693 12.9871 12.3086 12.962C12.2479 12.9368 12.1927 12.9 12.1463 12.8535L8.00003 8.70666L3.85378 12.8535C3.75996 12.9474 3.63272 13.0001 3.50003 13.0001C3.36735 13.0001 3.2401 12.9474 3.14628 12.8535C3.05246 12.7597 2.99976 12.6325 2.99976 12.4998C2.99976 12.3671 3.05246 12.2399 3.14628 12.146L7.29316 7.99979L3.14628 3.85354C3.05246 3.75972 2.99976 3.63247 2.99976 3.49979C2.99976 3.36711 3.05246 3.23986 3.14628 3.14604C3.2401 3.05222 3.36735 2.99951 3.50003 2.99951C3.63272 2.99951 3.75996 3.05222 3.85378 3.14604L8.00003 7.29291L12.1463 3.14604C12.2401 3.05222 12.3674 2.99951 12.5 2.99951C12.6327 2.99951 12.76 3.05222 12.8538 3.14604C12.9476 3.23986 13.0003 3.36711 13.0003 3.49979C13.0003 3.63247 12.9476 3.75972 12.8538 3.85354L8.70691 7.99979L12.8538 12.146Z",
        fill: "white"
    }));
};
var close_modal_default = SvgCloseModal;
// src/design.system/modal/modal.tsx
function Modal(param) {
    var children = param.children, closeModal = param.closeModal, config = param.config;
    var _config;
    var modalRef = (0, import_react33.useRef)(null);
    var handleClickOutside = function() {
        return closeModal();
    };
    var handleKeyPress = (0, import_react33.useCallback)(function(event) {
        if (event.key === "Escape") closeModal();
    }, []);
    useOnClickOutside(modalRef, handleClickOutside);
    (0, import_react33.useEffect)(function() {
        document.addEventListener("keydown", handleKeyPress);
        return function() {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [
        handleKeyPress
    ]);
    return /* @__PURE__ */ import_react33.default.createElement(import_react33.default.Fragment, null, /* @__PURE__ */ import_react33.default.createElement(portal_modal_default, {
        wrapperId: "modal-portal"
    }, /* @__PURE__ */ import_react33.default.createElement(Overlay, {
        showOverlay: config.showOverlay,
        positionX: config.positionX,
        positionY: config.positionY,
        style: {
            animationDuration: "400ms",
            animationDelay: "0"
        }
    }, /* @__PURE__ */ import_react33.default.createElement(ModalContainer, {
        padding: config.padding,
        ref: modalRef
    }, config.showHeader && /* @__PURE__ */ import_react33.default.createElement(ModalHeader, null, /* @__PURE__ */ import_react33.default.createElement(Text, {
        size: 24,
        weight: 700
    }, config.title)), /* @__PURE__ */ import_react33.default.createElement(Close, {
        onClick: closeModal
    }, /* @__PURE__ */ import_react33.default.createElement(close_modal_default, null)), /* @__PURE__ */ import_react33.default.createElement(Content, null, children), ((_config = config) === null || _config === void 0 ? void 0 : _config.footer) && /* @__PURE__ */ import_react33.default.createElement(ModalFooter, {
        style: _object_spread({}, config.footer.style)
    }, config.footer.link && /* @__PURE__ */ import_react33.default.createElement(Link, {
        onClick: config.footer.link.onClick,
        value: config.footer.link.text
    }), config.footer.secondaryBtnText && /* @__PURE__ */ import_react33.default.createElement(Button, {
        variant: "secondary",
        onClick: config.footer.secondaryBtnAction
    }, /* @__PURE__ */ import_react33.default.createElement(Text, {
        size: 16,
        weight: 700
    }, config.footer.secondaryBtnText)), /* @__PURE__ */ import_react33.default.createElement(Button, {
        disabled: config.footer.isDisabled,
        onClick: config.footer.primaryBtnAction
    }, /* @__PURE__ */ import_react33.default.createElement(Text, {
        size: 16,
        weight: 700,
        color: palette_default.text.dark_button
    }, config.footer.primaryBtnText)))))));
}
// src/design.system/theme.provider/theme.provider.tsx
var import_react35 = __toESM(require("react"));
// src/design.system/theme.provider/registry.tsx
var import_react34 = __toESM(require("react"));
var import_navigation = require("next/navigation");
var import_styled_components29 = require("styled-components");
function StyledComponentsRegistry(param) {
    var children = param.children;
    var _ref = _sliced_to_array((0, import_react34.useState)(function() {
        return new import_styled_components29.ServerStyleSheet();
    }), 1), styledComponentsStyleSheet = _ref[0];
    (0, import_navigation.useServerInsertedHTML)(function() {
        var styles = styledComponentsStyleSheet.getStyleElement();
        styledComponentsStyleSheet.instance.clearTag();
        return /* @__PURE__ */ import_react34.default.createElement(import_react34.default.Fragment, null, styles);
    });
    if (typeof window !== "undefined") return /* @__PURE__ */ import_react34.default.createElement(import_react34.default.Fragment, null, children);
    return /* @__PURE__ */ import_react34.default.createElement(import_styled_components29.StyleSheetManager, {
        sheet: styledComponentsStyleSheet.instance
    }, children);
}
// src/design.system/theme.provider/theme.provider.tsx
var import_styled_components30 = require("styled-components");
var ThemeProviderWrapper = function(param) {
    var children = param.children;
    return /* @__PURE__ */ import_react35.default.createElement(import_styled_components30.ThemeProvider, {
        theme: palette_default
    }, /* @__PURE__ */ import_react35.default.createElement(StyledComponentsRegistry, null, children));
};
// src/design.system/steps/steps.tsx
var import_react37 = __toESM(require("react"));
// src/design.system/steps/step.item.tsx
var import_react36 = __toESM(require("react"));
// src/design.system/steps/steps.styled.tsx
var import_styled_components31 = __toESM(require("styled-components"));
var StepsContainer = import_styled_components31.default.div(_templateObject88());
var StepItemWrapper = import_styled_components31.default.div(_templateObject89());
var FloatingBoxTextWrapper = import_styled_components31.default.div(_templateObject90(), function(param) {
    var disabled = param.disabled;
    return disabled ? "0.4" : "1";
});
var StepItemTextWrapper = (0, import_styled_components31.default)(FloatingBoxTextWrapper)(_templateObject91());
var StepItemBorder = import_styled_components31.default.div(_templateObject92());
// src/assets/icons/checked.svg
var React63 = __toESM(require("react"));
var SvgChecked = function(props) {
    return /* @__PURE__ */ React63.createElement("svg", _object_spread({
        width: 20,
        height: 14,
        viewBox: "0 0 20 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React63.createElement("path", {
        d: "M19.1767 1.88786L7.48781 13.675C7.386 13.778 7.26503 13.8597 7.13183 13.9155C6.99863 13.9713 6.85583 14 6.7116 14C6.56737 14 6.42456 13.9713 6.29136 13.9155C6.15816 13.8597 6.03719 13.778 5.93539 13.675L0.821518 8.51812C0.719584 8.41532 0.638726 8.29329 0.58356 8.15899C0.528394 8.02469 0.5 7.88074 0.5 7.73538C0.5 7.59001 0.528394 7.44606 0.58356 7.31176C0.638726 7.17746 0.719584 7.05543 0.821518 6.95264C0.923451 6.84985 1.04446 6.76831 1.17765 6.71268C1.31083 6.65705 1.45357 6.62842 1.59773 6.62842C1.74189 6.62842 1.88463 6.65705 2.01781 6.71268C2.151 6.76831 2.27201 6.84985 2.37394 6.95264L6.71251 11.3277L17.6261 0.324221C17.8319 0.116626 18.1111 0 18.4023 0C18.6934 0 18.9726 0.116626 19.1785 0.324221C19.3843 0.531816 19.5 0.813376 19.5 1.10696C19.5 1.40054 19.3843 1.6821 19.1785 1.8897L19.1767 1.88786Z",
        fill: "white"
    }));
};
var checked_default = SvgChecked;
// src/design.system/steps/step.item.tsx
function StepItem(param) {
    var title = param.title, index = param.index, status = param.status, isLast = param.isLast;
    return /* @__PURE__ */ import_react36.default.createElement(StepItemWrapper, null, /* @__PURE__ */ import_react36.default.createElement(FloatBox, null, status === "done" /* Done */  ? /* @__PURE__ */ import_react36.default.createElement(checked_default, null) : /* @__PURE__ */ import_react36.default.createElement(FloatingBoxTextWrapper, {
        disabled: status !== "active" /* Active */ 
    }, /* @__PURE__ */ import_react36.default.createElement(Text, {
        weight: 700
    }, index))), /* @__PURE__ */ import_react36.default.createElement(StepItemTextWrapper, {
        disabled: status !== "active" /* Active */ 
    }, /* @__PURE__ */ import_react36.default.createElement(Text, {
        weight: 600
    }, title)), !isLast && /* @__PURE__ */ import_react36.default.createElement(StepItemBorder, null));
}
// src/design.system/steps/steps.tsx
function Steps(param) {
    var data = param.data;
    var renderSteps = function renderSteps() {
        var _data;
        return (_data = data) === null || _data === void 0 ? void 0 : _data.map(function(param, index) {
            var title = param.title, status = param.status;
            return /* @__PURE__ */ import_react37.default.createElement(StepItem, {
                key: "".concat(index, "_").concat(title),
                title: title,
                status: status,
                index: index + 1,
                isLast: index + 1 === data.length
            });
        });
    };
    return /* @__PURE__ */ import_react37.default.createElement(StepsContainer, null, renderSteps());
}
// src/design.system/divider/divider.tsx
var import_react38 = __toESM(require("react"));
var import_styled_components32 = __toESM(require("styled-components"));
var DividerContainer = import_styled_components32.default.div(_templateObject93(), function(param) {
    var margin = param.margin;
    return margin;
});
var DividerLine = import_styled_components32.default.div(_templateObject94());
function Divider(param) {
    var _param_margin = param.margin, margin = _param_margin === void 0 ? "32px 0" : _param_margin, _param_label = param.label, label = _param_label === void 0 ? "or" : _param_label;
    return /* @__PURE__ */ import_react38.default.createElement(DividerContainer, {
        margin: margin
    }, /* @__PURE__ */ import_react38.default.createElement(DividerLine, null), /* @__PURE__ */ import_react38.default.createElement(Text, {
        size: 14
    }, label), /* @__PURE__ */ import_react38.default.createElement(DividerLine, null));
}
// src/design.system/note/note.tsx
var import_react39 = __toESM(require("react"));
var import_styled_components33 = __toESM(require("styled-components"));
var NoteContainer = import_styled_components33.default.div(_templateObject95(), function(param) {
    var theme2 = param.theme;
    return theme2.colors.dark_blue;
});
var TextContainer = import_styled_components33.default.div(_templateObject96(), function(param) {
    var theme2 = param.theme;
    return theme2.colors.dark_blue;
});
function Note(param) {
    var text2 = param.text, code = param.code;
    var buildNote = function buildNote() {
        var value = text2;
        if (code) {
            code.forEach(function(c, index) {
                value = value.replace("$code".concat(index), "<code>".concat(c, "</code>"));
            });
        }
        return /* @__PURE__ */ import_react39.default.createElement(TextContainer, {
            dangerouslySetInnerHTML: {
                __html: "<p><strong>Note: </strong>".concat(value, "</p>")
            }
        });
    };
    (0, import_react39.useEffect)(function() {
        buildNote();
    }, []);
    return /* @__PURE__ */ import_react39.default.createElement(NoteContainer, null, /* @__PURE__ */ import_react39.default.createElement(Text, {
        size: 14
    }, buildNote()));
}
// src/design.system/segmented-controls/index.tsx
var import_react40 = __toESM(require("react"));
var import_styled_components34 = __toESM(require("styled-components"));
var SegmentedControlsWrapper = import_styled_components34.default.div(_templateObject97());
var SegmentedControlsOption = import_styled_components34.default.div(_templateObject98(), function(param) {
    var theme2 = param.theme;
    return theme2.colors.white;
}, function(param) {
    var theme2 = param.theme;
    return "1px solid  ".concat(theme2.colors.secondary);
}, function(param) {
    var theme2 = param.theme;
    return theme2.colors.dark;
}, function(param) {
    var theme2 = param.theme;
    return theme2.font_family.primary;
});
var SegmentedControlsInput = import_styled_components34.default.input(_templateObject99());
function SegmentedControls(param) {
    var options = param.options, selected = param.selected, onChange = param.onChange, title = param.title;
    var _options;
    return /* @__PURE__ */ import_react40.default.createElement("div", null, title && /* @__PURE__ */ import_react40.default.createElement(Text, {
        size: 14,
        style: {
            marginBottom: 10
        }
    }, title), /* @__PURE__ */ import_react40.default.createElement(SegmentedControlsWrapper, null, (_options = options) === null || _options === void 0 ? void 0 : _options.map(function(option) {
        return /* @__PURE__ */ import_react40.default.createElement(SegmentedControlsOption, {
            key: option.id,
            className: "".concat(option.id === selected ? "active" : "")
        }, /* @__PURE__ */ import_react40.default.createElement(folders_default, null), /* @__PURE__ */ import_react40.default.createElement(SegmentedControlsInput, {
            type: "radio",
            value: option.id,
            name: option.label,
            onChange: function() {
                return onChange(option.id);
            },
            checked: option.id === selected
        }), /* @__PURE__ */ import_react40.default.createElement(Text, null, option.label));
    })));
}
// src/design.system/multi-input/index.tsx
var import_react41 = __toESM(require("react"));
var import_styled_components35 = __toESM(require("styled-components"));
var MultiInput = function(param) {
    var _param_initialList = param.initialList, initialList = _param_initialList === void 0 ? [] : _param_initialList, onListChange = param.onListChange, _param_placeholder = param.placeholder, placeholder = _param_placeholder === void 0 ? "Add item to list" : _param_placeholder, title = param.title, tooltip = param.tooltip;
    var _ref = _sliced_to_array((0, import_react41.useState)(""), 2), inputValue = _ref[0], setInputValue = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react41.useState)(initialList), 2), list = _ref1[0], setList = _ref1[1];
    var handleInputChange = function(e) {
        setInputValue(e);
    };
    var handleAddToList = function() {
        if (inputValue.trim() !== "") {
            var newList = _to_consumable_array(list).concat([
                inputValue
            ]);
            setList(newList);
            setInputValue("");
            onListChange && onListChange(newList);
        }
    };
    var handleRemoveFromList = function(indexToRemove) {
        var newList = list.filter(function(_, index) {
            return index !== indexToRemove;
        });
        setList(newList);
        onListChange && onListChange(newList);
    };
    return /* @__PURE__ */ import_react41.default.createElement(import_react41.default.Fragment, null, title && /* @__PURE__ */ import_react41.default.createElement(TitleWrapper2, null, /* @__PURE__ */ import_react41.default.createElement(Tooltip, {
        text: tooltip || ""
    }, /* @__PURE__ */ import_react41.default.createElement(Text, {
        size: 14,
        weight: 600
    }, title))), /* @__PURE__ */ import_react41.default.createElement(Container, null, /* @__PURE__ */ import_react41.default.createElement(ListContainer, null, list.map(function(item, index) {
        return /* @__PURE__ */ import_react41.default.createElement(ListItem, {
            key: index,
            onClick: function() {
                return handleRemoveFromList(index);
            }
        }, /* @__PURE__ */ import_react41.default.createElement(Text, {
            size: 12,
            color: palette_default.text.dark_button
        }, item), /* @__PURE__ */ import_react41.default.createElement("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 16 16",
            fill: "#0e1c28",
            xmlns: "http://www.w3.org/2000/svg"
        }, /* @__PURE__ */ import_react41.default.createElement("path", {
            d: "M12.8535 12.146C12.9 12.1925 12.9368 12.2476 12.962 12.3083C12.9871 12.369 13.0001 12.4341 13.0001 12.4998C13.0001 12.5655 12.9871 12.6305 12.962 12.6912C12.9368 12.7519 12.9 12.8071 12.8535 12.8535C12.8071 12.9 12.7519 12.9368 12.6912 12.962C12.6305 12.9871 12.5655 13.0001 12.4998 13.0001C12.4341 13.0001 12.369 12.9871 12.3083 12.962C12.2476 12.9368 12.1925 12.9 12.146 12.8535L7.99979 8.70666L3.85354 12.8535C3.75972 12.9474 3.63247 13.0001 3.49979 13.0001C3.36711 13.0001 3.23986 12.9474 3.14604 12.8535C3.05222 12.7597 2.99951 12.6325 2.99951 12.4998C2.99951 12.3671 3.05222 12.2399 3.14604 12.146L7.29291 7.99979L3.14604 3.85354C3.05222 3.75972 2.99951 3.63247 2.99951 3.49979C2.99951 3.36711 3.05222 3.23986 3.14604 3.14604C3.23986 3.05222 3.36711 2.99951 3.49979 2.99951C3.63247 2.99951 3.75972 3.05222 3.85354 3.14604L7.99979 7.29291L12.146 3.14604C12.2399 3.05222 12.3671 2.99951 12.4998 2.99951C12.6325 2.99951 12.7597 3.05222 12.8535 3.14604C12.9474 3.23986 13.0001 3.36711 13.0001 3.49979C13.0001 3.63247 12.9474 3.75972 12.8535 3.85354L8.70666 7.99979L12.8535 12.146Z",
            fill: "#0e1c28"
        })));
    })), /* @__PURE__ */ import_react41.default.createElement(InputContainer, null, /* @__PURE__ */ import_react41.default.createElement(Input2, {
        style: {
            width: "100%"
        },
        value: inputValue,
        placeholder: placeholder,
        onChange: function(e) {
            return handleInputChange(e);
        }
    }), /* @__PURE__ */ import_react41.default.createElement(Button2, {
        onClick: handleAddToList,
        style: {
            marginLeft: 10
        }
    }, /* @__PURE__ */ import_react41.default.createElement(Text, {
        size: 14,
        weight: 600,
        color: palette_default.text.dark_button
    }, "Add")))));
};
var Container = import_styled_components35.default.div(_templateObject100());
var ListContainer = import_styled_components35.default.div(_templateObject101());
var ListItem = import_styled_components35.default.div(_templateObject102(), palette_default.colors.light_grey);
var InputContainer = import_styled_components35.default.div(_templateObject103());
var Input2 = (0, import_styled_components35.default)(Input)(_templateObject104());
var Button2 = (0, import_styled_components35.default)(Button)(_templateObject105());
var TitleWrapper2 = import_styled_components35.default.div(_templateObject106());
// src/design.system/key-value-input/index.tsx
var import_react42 = __toESM(require("react"));
var import_styled_components36 = __toESM(require("styled-components"));
var Container2 = import_styled_components36.default.div(_templateObject107());
var TitleWrapper3 = import_styled_components36.default.div(_templateObject108());
var Table = import_styled_components36.default.table(_templateObject109(), palette_default.text.grey);
var Th = import_styled_components36.default.th(_templateObject110());
var Td = import_styled_components36.default.td(_templateObject111(), palette_default.text.grey, function(param) {
    var right = param.right;
    return right ? "solid 1px ".concat(palette_default.text.grey) : "none";
}, function(param) {
    var left = param.left;
    return left ? "solid 1px ".concat(palette_default.text.grey) : "none";
});
var Input3 = import_styled_components36.default.input(_templateObject112(), palette_default.text.white);
var AddRowButton = import_styled_components36.default.td(_templateObject113(), palette_default.text.grey);
var KeyValueTable = function(param) {
    var keyValues = param.keyValues, setKeyValues = param.setKeyValues, title = param.title, titleKey = param.titleKey, titleValue = param.titleValue, titleButton = param.titleButton, tooltip = param.tooltip, required = param.required;
    var _ref = _sliced_to_array((0, import_react42.useState)(1), 2), nextId = _ref[0], setNextId = _ref[1];
    var addRow = function() {
        var newKeyValue = {
            id: nextId,
            key: "",
            value: ""
        };
        setKeyValues(_to_consumable_array(keyValues).concat([
            newKeyValue
        ]));
        setNextId(nextId + 1);
    };
    var deleteRow = function(id) {
        var value = keyValues.filter(function(kv) {
            return kv.id !== id;
        });
        setKeyValues(value);
    };
    var updateKey = function(id, newKey) {
        var updatedKeyValues = keyValues.map(function(kv) {
            return kv.id === id ? _object_spread_props(_object_spread({}, kv), {
                key: newKey
            }) : kv;
        });
        setKeyValues(updatedKeyValues);
    };
    var updateValue = function(id, newValue) {
        var updatedKeyValues = keyValues.map(function(kv) {
            return kv.id === id ? _object_spread_props(_object_spread({}, kv), {
                value: newValue
            }) : kv;
        });
        setKeyValues(updatedKeyValues);
    };
    return /* @__PURE__ */ import_react42.default.createElement(Container2, null, title && /* @__PURE__ */ import_react42.default.createElement(TitleWrapper3, null, /* @__PURE__ */ import_react42.default.createElement(Tooltip, {
        text: tooltip || ""
    }, /* @__PURE__ */ import_react42.default.createElement("div", {
        style: {
            display: "flex",
            gap: 4
        }
    }, /* @__PURE__ */ import_react42.default.createElement(Text, {
        size: 14,
        weight: 600
    }, title), required && /* @__PURE__ */ import_react42.default.createElement(Text, {
        size: 14,
        weight: 600
    }, "*")))), /* @__PURE__ */ import_react42.default.createElement(Table, null, /* @__PURE__ */ import_react42.default.createElement("thead", null, /* @__PURE__ */ import_react42.default.createElement("tr", null, /* @__PURE__ */ import_react42.default.createElement(Th, null, /* @__PURE__ */ import_react42.default.createElement(Text, {
        color: palette_default.text.grey,
        size: 14,
        style: {
            display: "flex"
        },
        weight: 300
    }, titleKey || "Key")), /* @__PURE__ */ import_react42.default.createElement(Th, null, /* @__PURE__ */ import_react42.default.createElement(Text, {
        color: palette_default.text.grey,
        size: 14,
        style: {
            display: "flex"
        },
        weight: 300
    }, titleValue || "Value")))), /* @__PURE__ */ import_react42.default.createElement("tbody", null, keyValues.map(function(kv) {
        return /* @__PURE__ */ import_react42.default.createElement("tr", {
            key: kv.id
        }, /* @__PURE__ */ import_react42.default.createElement(Td, {
            right: true
        }, /* @__PURE__ */ import_react42.default.createElement(Input3, {
            type: "text",
            value: kv.key,
            onChange: function(e) {
                return updateKey(kv.id, e.target.value);
            }
        })), /* @__PURE__ */ import_react42.default.createElement(Td, null, /* @__PURE__ */ import_react42.default.createElement(Input3, {
            type: "text",
            value: kv.value,
            onChange: function(e) {
                return updateValue(kv.id, e.target.value);
            }
        })), /* @__PURE__ */ import_react42.default.createElement(Td, {
            style: {
                cursor: "pointer"
            },
            left: true,
            onClick: function() {
                return deleteRow(kv.id);
            }
        }, /* @__PURE__ */ import_react42.default.createElement(trash_default, null)));
    })), /* @__PURE__ */ import_react42.default.createElement("tfoot", null, /* @__PURE__ */ import_react42.default.createElement("tr", null, /* @__PURE__ */ import_react42.default.createElement(AddRowButton, {
        onClick: addRow,
        colSpan: 3
    }, /* @__PURE__ */ import_react42.default.createElement(Text, {
        weight: 400,
        size: 14,
        color: palette_default.colors.torquiz_light
    }, titleButton || "Add Row"))))));
};
// src/design.system/text.area/index.tsx
var import_react43 = __toESM(require("react"));
var import_styled_components37 = __toESM(require("styled-components"));
var StyledTextArea = import_styled_components37.default.textarea(_templateObject114(), function(param) {
    var theme2 = param.theme;
    return theme2.text.white;
}, palette_default.font_family.primary, function(param) {
    var theme2 = param.theme;
    return theme2.colors.light_dark;
}, function(param) {
    var theme2 = param.theme, active = param.active;
    return "1px solid ".concat(active ? theme2.text.grey : theme2.colors.blue_grey);
}, function(param) {
    var theme2 = param.theme;
    return "solid 1px ".concat(theme2.text.grey);
});
var LabelWrapper3 = import_styled_components37.default.div(_templateObject115());
var TextArea = function(param) {
    var placeholder = param.placeholder, value = param.value, onChange = param.onChange, _param_rows = param.rows, rows = _param_rows === void 0 ? 4 : _param_rows, _param_cols = param.cols, cols = _param_cols === void 0 ? 50 : _param_cols, tooltip = param.tooltip, label = param.label, required = param.required;
    return /* @__PURE__ */ import_react43.default.createElement(import_react43.default.Fragment, null, label && /* @__PURE__ */ import_react43.default.createElement(LabelWrapper3, null, /* @__PURE__ */ import_react43.default.createElement(Tooltip, {
        text: tooltip || ""
    }, /* @__PURE__ */ import_react43.default.createElement("div", {
        style: {
            display: "flex",
            gap: 4
        }
    }, /* @__PURE__ */ import_react43.default.createElement(Text, {
        size: 14,
        weight: 600
    }, label), required && /* @__PURE__ */ import_react43.default.createElement(Text, {
        size: 14,
        weight: 600
    }, "*")))), /* @__PURE__ */ import_react43.default.createElement(StyledTextArea, {
        placeholder: placeholder,
        value: value,
        onChange: onChange,
        rows: rows,
        cols: cols,
        active: !!value
    }));
};
// src/design.system/multi-input/multi.input.table.tsx
var import_react44 = __toESM(require("react"));
var import_styled_components38 = __toESM(require("styled-components"));
var Container3 = import_styled_components38.default.div(_templateObject116());
var TitleWrapper4 = import_styled_components38.default.div(_templateObject117());
var Table2 = import_styled_components38.default.table(_templateObject118(), palette_default.text.grey);
var Th2 = import_styled_components38.default.th(_templateObject119());
var Td2 = import_styled_components38.default.td(_templateObject120(), palette_default.text.grey, function(param) {
    var right = param.right;
    return right ? "solid 1px ".concat(palette_default.text.grey) : "none";
}, function(param) {
    var left = param.left;
    return left ? "solid 1px ".concat(palette_default.text.grey) : "none";
});
var Input4 = import_styled_components38.default.input(_templateObject121(), palette_default.text.white);
var AddRowButton2 = import_styled_components38.default.td(_templateObject122());
var MultiInputTable = function(param) {
    var values = param.values, title = param.title, tooltip = param.tooltip, onValuesChange = param.onValuesChange, required = param.required, placeholder = param.placeholder;
    var addRow = function() {
        onValuesChange(_to_consumable_array(values).concat([
            ""
        ]));
    };
    var deleteRow = function(index) {
        var updatedValues = values.filter(function(_, i) {
            return i !== index;
        });
        onValuesChange(updatedValues);
    };
    var updateValue = function(index, newValue) {
        var updatedValues = values.map(function(value, i) {
            return i === index ? newValue : value;
        });
        onValuesChange(updatedValues);
    };
    return /* @__PURE__ */ import_react44.default.createElement(Container3, null, title && /* @__PURE__ */ import_react44.default.createElement(TitleWrapper4, null, /* @__PURE__ */ import_react44.default.createElement(Tooltip, {
        text: tooltip || ""
    }, /* @__PURE__ */ import_react44.default.createElement("div", {
        style: {
            display: "flex",
            gap: 4
        }
    }, /* @__PURE__ */ import_react44.default.createElement(Text, {
        size: 14,
        weight: 600
    }, title), required && /* @__PURE__ */ import_react44.default.createElement(Text, {
        size: 14,
        weight: 600
    }, "*")))), /* @__PURE__ */ import_react44.default.createElement(Table2, null, /* @__PURE__ */ import_react44.default.createElement("tbody", null, values.map(function(value, index) {
        return /* @__PURE__ */ import_react44.default.createElement("tr", {
            key: index
        }, /* @__PURE__ */ import_react44.default.createElement(Td2, {
            right: true
        }, /* @__PURE__ */ import_react44.default.createElement(Input4, {
            type: "text",
            value: value,
            onChange: function(e) {
                return updateValue(index, e.target.value);
            },
            placeholder: index === 0 ? placeholder : ""
        })), /* @__PURE__ */ import_react44.default.createElement(Td2, {
            onClick: function() {
                return deleteRow(index);
            },
            style: {
                cursor: "pointer"
            }
        }, /* @__PURE__ */ import_react44.default.createElement(trash_default, null)));
    })), /* @__PURE__ */ import_react44.default.createElement("tfoot", null, /* @__PURE__ */ import_react44.default.createElement("tr", null, /* @__PURE__ */ import_react44.default.createElement(AddRowButton2, {
        onClick: addRow,
        colSpan: 2
    }, /* @__PURE__ */ import_react44.default.createElement(Text, {
        weight: 400,
        size: 14,
        color: palette_default.colors.torquiz_light
    }, "Add Row"))))));
};
// src/design.system/action.group/index.tsx
var import_react46 = __toESM(require("react"));
// src/design.system/action.item/index.tsx
var import_react45 = __toESM(require("react"));
var import_styled_components39 = __toESM(require("styled-components"));
var Label = import_styled_components39.default.label(_templateObject123(), function(param) {
    var theme2 = param.theme;
    return theme2.colors.light_grey;
}, function(param) {
    var theme2 = param.theme;
    return theme2.colors.white;
});
var Popup = import_styled_components39.default.div(_templateObject124(), function(props) {
    return props.isOpen ? "block" : "none";
}, function(param) {
    var theme2 = param.theme;
    return "1px solid ".concat(theme2.colors.blue_grey);
}, function(param) {
    var theme2 = param.theme;
    return theme2.colors.dark;
});
var PopupItem = import_styled_components39.default.div(_templateObject125(), function(param) {
    var theme2 = param.theme;
    return "1px solid ".concat(theme2.colors.blue_grey);
}, function(param) {
    var disabled = param.disabled;
    return disabled ? 0.5 : 1;
}, function(param) {
    var disabled = param.disabled;
    return disabled ? "none" : "auto";
}, function(param) {
    var theme2 = param.theme;
    return theme2.colors.light_dark;
});
var ActionItem = function(param) {
    var label = param.label, items = param.items, subTitle = param.subTitle;
    var _ref = _sliced_to_array((0, import_react45.useState)(false), 2), isOpen = _ref[0], setIsOpen = _ref[1];
    var ref = (0, import_react45.useRef)(null);
    useOnClickOutside(ref, function() {
        return setIsOpen(false);
    });
    return /* @__PURE__ */ import_react45.default.createElement("div", {
        ref: ref,
        style: {
            position: "relative"
        }
    }, /* @__PURE__ */ import_react45.default.createElement(Label, {
        onClick: function() {
            return setIsOpen(!isOpen);
        }
    }, /* @__PURE__ */ import_react45.default.createElement(Text, {
        size: 12,
        weight: 600
    }, label), /* @__PURE__ */ import_react45.default.createElement(expand_arrow_default, null)), /* @__PURE__ */ import_react45.default.createElement(Popup, {
        isOpen: isOpen
    }, /* @__PURE__ */ import_react45.default.createElement("div", {
        style: {
            padding: 12,
            width: 120
        }
    }, /* @__PURE__ */ import_react45.default.createElement(Text, {
        size: 12,
        weight: 600
    }, subTitle)), items.map(function(item, index) {
        return /* @__PURE__ */ import_react45.default.createElement(PopupItem, {
            key: index,
            onClick: item.onClick,
            disabled: !!item.disabled
        }, item.selected ? /* @__PURE__ */ import_react45.default.createElement(check_default, null) : /* @__PURE__ */ import_react45.default.createElement("div", {
            style: {
                width: 10
            }
        }), /* @__PURE__ */ import_react45.default.createElement(Text, {
            size: 12,
            weight: 600
        }, item.label));
    })));
};
// src/design.system/action.group/index.tsx
var ActionsGroup = function(param) {
    var actionGroups = param.actionGroups;
    return /* @__PURE__ */ import_react46.default.createElement(import_react46.default.Fragment, null, actionGroups.map(function(group, index) {
        return group.condition && /* @__PURE__ */ import_react46.default.createElement(ActionItem, _object_spread({
            key: index
        }, group));
    }));
};
// src/design.system/pagination/index.tsx
var import_react47 = __toESM(require("react"));
var import_styled_components40 = __toESM(require("styled-components"));
var PaginationContainer = import_styled_components40.default.div(_templateObject126());
var PageButton = import_styled_components40.default.button(_templateObject127(), function(props) {
    return props.isCurrentPage ? palette_default.colors.blue_grey : "transparent";
}, function(props) {
    return props.isDisabled ? palette_default.text.grey : palette_default.text.white;
}, palette_default.colors.blue_grey);
var Pagination = function(param) {
    var total = param.total, itemsPerPage = param.itemsPerPage, currentPage = param.currentPage, onPageChange = param.onPageChange;
    var pageCount = Math.ceil(total / itemsPerPage);
    return /* @__PURE__ */ import_react47.default.createElement(PaginationContainer, null, /* @__PURE__ */ import_react47.default.createElement(PageButton, {
        onClick: function() {
            return onPageChange(currentPage - 1);
        },
        disabled: currentPage === 1,
        isDisabled: currentPage === 1
    }, /* @__PURE__ */ import_react47.default.createElement(expand_arrow_default, {
        style: {
            transform: "rotate(90deg)"
        }
    }), "Previous"), new Array(pageCount).fill(0).map(function(_, index) {
        return /* @__PURE__ */ import_react47.default.createElement(PageButton, {
            key: index,
            onClick: function() {
                return onPageChange(index + 1);
            },
            isCurrentPage: currentPage === index + 1
        }, index + 1);
    }), /* @__PURE__ */ import_react47.default.createElement(PageButton, {
        onClick: function() {
            return onPageChange(currentPage + 1);
        },
        disabled: currentPage === pageCount,
        isDisabled: currentPage === pageCount
    }, "Next", /* @__PURE__ */ import_react47.default.createElement(expand_arrow_default, {
        style: {
            transform: "rotate(-90deg)"
        }
    })));
};
// src/design.system/table/index.tsx
var import_styled_components41 = __toESM(require("styled-components"));
var import_react48 = __toESM(require("react"));
var StyledTable = import_styled_components41.default.table(_templateObject128(), palette_default.colors.dark, palette_default.colors.blue_grey);
var StyledTbody = import_styled_components41.default.tbody(_templateObject129());
var Table3 = function(param) {
    var data = param.data, onPaginate = param.onPaginate, renderTableRows = param.renderTableRows, renderTableHeader = param.renderTableHeader, renderEmptyResult = param.renderEmptyResult;
    var _ref = _sliced_to_array((0, import_react48.useState)(1), 2), currentPage = _ref[0], setCurrentPage = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react48.useState)(10), 2), itemsPerPage = _ref1[0], setItemsPerPage = _ref1[1];
    var indexOfLastItem = currentPage * itemsPerPage;
    var indexOfFirstItem = indexOfLastItem - itemsPerPage;
    var currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    var handlePageChange = function(pageNumber) {
        setCurrentPage(pageNumber);
        if (onPaginate) {
            onPaginate(pageNumber);
        }
    };
    return /* @__PURE__ */ import_react48.default.createElement(import_react48.default.Fragment, null, /* @__PURE__ */ import_react48.default.createElement(StyledTable, null, renderTableHeader(), /* @__PURE__ */ import_react48.default.createElement(StyledTbody, null, currentItems.map(function(item, index) {
        return renderTableRows(item, index);
    }))), data.length === 0 ? renderEmptyResult() : data.length > 10 ? /* @__PURE__ */ import_react48.default.createElement(Pagination, {
        total: data.length,
        itemsPerPage: itemsPerPage,
        currentPage: currentPage,
        onPageChange: handlePageChange
    }) : null);
};
// src/design.system/yml.editor/index.tsx
var import_react49 = __toESM(require("react"));
var import_react_yaml = __toESM(require("@focus-reactive/react-yaml"));
var import_styled_components42 = __toESM(require("styled-components"));
var Container4 = import_styled_components42.default.div(_templateObject130(), palette_default.colors.blue_grey, palette_default.colors.white);
var EditorOverlay = import_styled_components42.default.div(_templateObject131());
var CopyIconWrapper2 = import_styled_components42.default.div(_templateObject132(), palette_default.colors.dark);
var YMLEditor = function(param) {
    var data = param.data;
    var _ref = _sliced_to_array((0, import_react49.useState)(false), 2), isCopied = _ref[0], setIsCopied = _ref[1];
    var handleChange = function() {};
    var handleCopy = function() {
        navigator.clipboard.writeText(JSON.stringify(data, null, 2)).then(function() {
            setIsCopied(true);
            setTimeout(function() {
                setIsCopied(false);
            }, 3e3);
        }).catch(function(err) {
            return console.error("Error copying YAML to clipboard: ", err);
        });
    };
    return /* @__PURE__ */ import_react49.default.createElement(import_react49.default.Fragment, null, /* @__PURE__ */ import_react49.default.createElement(Container4, null, /* @__PURE__ */ import_react49.default.createElement(CopyIconWrapper2, {
        onClick: handleCopy
    }, isCopied ? /* @__PURE__ */ import_react49.default.createElement(copied_default, {
        style: {
            width: 18,
            height: 18
        }
    }) : /* @__PURE__ */ import_react49.default.createElement(copy_default, {
        style: {
            width: 18,
            height: 18
        }
    })), /* @__PURE__ */ import_react49.default.createElement("div", {
        style: {
            position: "relative"
        }
    }, /* @__PURE__ */ import_react49.default.createElement(import_react_yaml.default, {
        key: JSON.stringify(data),
        json: data,
        onChange: handleChange
    }), /* @__PURE__ */ import_react49.default.createElement(EditorOverlay, null))));
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
            signals: [
                "METRICS",
                "TRACES"
            ],
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
            signals: [
                "LOGS",
                "METRICS",
                "TRACES"
            ],
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
            signals: [
                "LOGS",
                "METRICS",
                "TRACES"
            ],
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
var buildFlowNodesAndEdges = function(sources2, destinations2, actions) {
    var _actions, _actions1;
    var nodes2 = [], edges2 = [];
    var centerNodeId = "center-1";
    var xOffsetNamespace = 100;
    var destinations_length = destinations2.length;
    var middle_index;
    if (destinations_length % 2 == 1) {
        middle_index = Math.floor(destinations_length / 2);
    } else {
        middle_index = destinations_length / 2 - 1;
    }
    var desired_y_position = 248;
    var destinationyOffset = desired_y_position - middle_index * 100;
    var sources_length = sources2.length;
    var middle_index_sources;
    if (sources_length % 2 == 1) {
        middle_index_sources = Math.floor(sources_length / 2);
    } else {
        middle_index_sources = sources_length / 2 - 1;
    }
    var sourceyOffset = desired_y_position - middle_index_sources * 100;
    var centerXPossition = ((_actions = actions) === null || _actions === void 0 ? void 0 : _actions.length) > 0 ? ((_actions1 = actions) === null || _actions1 === void 0 ? void 0 : _actions1.length) * 150 + 400 : 450;
    nodes2.push({
        id: centerNodeId,
        type: "custom",
        position: {
            x: centerXPossition,
            y: 248
        },
        data: {
            label: "Center Node"
        }
    });
    sources2.forEach(function(source, index) {
        var _source, _actions;
        var hasError = false;
        if ((_source = source) === null || _source === void 0 ? void 0 : _source.conditions) {
            hasError = source.conditions.some(function(condition) {
                return condition.status === "False";
            });
        }
        var namespaceNodeId = "namespace-".concat(index);
        nodes2.push({
            id: namespaceNodeId,
            type: "source",
            position: {
                x: xOffsetNamespace,
                y: sourceyOffset + index * 100
            },
            data: source
        });
        edges2.push({
            id: "e".concat(namespaceNodeId, "-").concat(centerNodeId),
            source: namespaceNodeId,
            target: ((_actions = actions) === null || _actions === void 0 ? void 0 : _actions.length) > 0 ? "action-0" : centerNodeId,
            animated: true,
            style: {
                stroke: hasError ? "#ff0000" : "#96f3ff8e"
            },
            data: null
        });
    });
    destinations2.forEach(function(destination, index) {
        var _destination;
        var isErrored = false;
        if ((_destination = destination) === null || _destination === void 0 ? void 0 : _destination.conditions) {
            isErrored = destination.conditions.some(function(condition) {
                return condition.status === "False";
            });
        }
        var destinationNodeId = "destination-".concat(index);
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
            id: "e".concat(centerNodeId, "-").concat(destinationNodeId),
            source: centerNodeId,
            target: destinationNodeId,
            animated: true,
            style: {
                stroke: isErrored ? "#ff0000" : "#96f3ff8e"
            },
            data: null
        });
    });
    actions.forEach(function(action2, index) {
        var actionNodeId = "action-".concat(index);
        var nextActionNodeId = "action-".concat(index + 1);
        nodes2.push({
            id: actionNodeId,
            type: "action",
            position: {
                x: 420 + index * 125,
                y: 250
            },
            data: action2
        });
        edges2.push({
            id: "e".concat(centerNodeId, "-").concat(actionNodeId),
            source: actionNodeId,
            target: index + 1 === actions.length ? centerNodeId : nextActionNodeId,
            animated: true,
            style: {
                stroke: "#96f3ff8e"
            },
            data: null
        });
    });
    return {
        nodes: nodes2,
        edges: edges2
    };
};
var _buildFlowNodesAndEdges = buildFlowNodesAndEdges(sources, destinations, action), nodes = _buildFlowNodesAndEdges.nodes, edges = _buildFlowNodesAndEdges.edges;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    ActionInput: ActionInput,
    ActionItem: ActionItem,
    ActionsGroup: ActionsGroup,
    Button: Button,
    Card: Card,
    Checkbox: Checkbox,
    Code: Code,
    DangerZone: DangerZone,
    DataFlow: DataFlow,
    Divider: Divider,
    DropDown: DropDown,
    FloatBox: FloatBox,
    Image: Image,
    Input: Input,
    KeyValueTable: KeyValueTable,
    Link: Link,
    Loader: Loader,
    Modal: Modal,
    MultiInput: MultiInput,
    MultiInputTable: MultiInputTable,
    Note: Note,
    Notification: Notification,
    Pagination: Pagination,
    RadioButton: RadioButton,
    SearchInput: SearchInput,
    SegmentedControls: SegmentedControls,
    SelectedCounter: SelectedCounter,
    Steps: Steps,
    Switch: Switch,
    Table: Table,
    Tag: Tag,
    Tap: Tap,
    Text: Text,
    TextArea: TextArea,
    ThemeProviderWrapper: ThemeProviderWrapper,
    Tooltip: Tooltip,
    Video: Video,
    YMLEditor: YMLEditor,
    buildFlowNodesAndEdges: buildFlowNodesAndEdges
});
//# sourceMappingURL=index.js.map