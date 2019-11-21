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
const should_forward_prop_1 = require("@styled-system/should-forward-prop");
const styled_system_1 = require("styled-system");
const StyledButton = styled_1.default('button', { shouldForwardProp: should_forward_prop_1.default })(styled_system_1.color, styled_system_1.padding, styled_system_1.width, styled_system_1.borderRadius);
const baseStyles = {
    p: ["med", "large"],
    width: ['100%', 'auto'],
    borderRadius: '4px',
};
exports.Button = (_a) => {
    var { onClick, children, isDisabled = false } = _a, rest = __rest(_a, ["onClick", "children", "isDisabled"]);
    return React.createElement(StyledButton, Object.assign({ onClick: onClick, disabled: isDisabled, "aria-disabled": isDisabled }, baseStyles, rest), children);
};
//# sourceMappingURL=index.js.map