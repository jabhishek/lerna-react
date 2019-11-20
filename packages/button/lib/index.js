"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_1 = require("@emotion/styled");
const StyledButton = styled_1.default.button `
  padding: 10px;
`;
exports.Button = ({ onClick, text, isDisabled = false }) => {
    return React.createElement(StyledButton, { onClick: onClick, disabled: isDisabled, "aria-disabled": isDisabled }, text);
};
//# sourceMappingURL=index.js.map