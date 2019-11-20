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
const styled_1 = require("@emotion/styled");
const styled_system_1 = require("styled-system");
const StyledButton = styled_1.default.button `
  padding: 10px;
  ${styled_system_1.color}
`;
exports.Button = (_a) => {
    var { onClick, text, isDisabled = false } = _a, rest = __rest(_a, ["onClick", "text", "isDisabled"]);
    return React.createElement(StyledButton, Object.assign({ onClick: onClick, disabled: isDisabled, "aria-disabled": isDisabled }, rest), text);
};
//# sourceMappingURL=index.js.map