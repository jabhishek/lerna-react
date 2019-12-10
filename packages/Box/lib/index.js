"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = require("@emotion/styled");
const should_forward_prop_1 = require("@styled-system/should-forward-prop");
const styled_system_1 = require("styled-system");
exports.Box = styled_1.default('div', { shouldForwardProp: should_forward_prop_1.default })(styled_system_1.background, styled_system_1.border, styled_system_1.color, styled_system_1.flexbox, styled_system_1.grid, styled_system_1.layout, styled_system_1.position, styled_system_1.shadow, styled_system_1.space, styled_system_1.typography, styled_system_1.opacity, styled_system_1.overflow);
//# sourceMappingURL=index.js.map