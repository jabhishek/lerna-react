"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const StyledButton = styled_components_1.default.button `
  padding: 10px;
`;
exports.Button = ({ onClick, text, isDisabled = false }) => {
    return React.createElement(StyledButton, { onClick: onClick, value: text, disabled: isDisabled, "aria-disabled": isDisabled });
};
//# sourceMappingURL=index.js.map