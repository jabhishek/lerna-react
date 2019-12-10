"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const box_1 = require("@avj/box");
const getStyles_1 = require("./getStyles");
exports.Button = (_a) => {
    var { onClick, children, isDisabled = false, type = "button", fullWidth = false, width } = _a, rest = __rest(_a, ["onClick", "children", "isDisabled", "type", "fullWidth", "width"]);
    if (type === "submit" && !!onClick) {
        console.warn("Click handler was specified for a submit Button. Are you sure?");
    }
    const styleProps = getStyles_1.getStyles({ width, fullWidth });
    return (React.createElement(box_1.Box, Object.assign({ as: "button", onClick: onClick, disabled: isDisabled, "aria-disabled": isDisabled, type: type }, styleProps, rest), children));
};
//# sourceMappingURL=index.js.map