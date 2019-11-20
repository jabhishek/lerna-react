"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const core_1 = require("@emotion/core");
const emotion_theming_1 = require("emotion-theming");
const react_1 = require("react");
const defaultTheme = {
    colors: {
        primary: 'red'
    }
};
exports.ThemeProvider = ({ theme = defaultTheme, children }) => {
    return React.createElement(emotion_theming_1.ThemeProvider, { theme: theme }, children);
};
exports.useTheme = () => {
    const theme = react_1.useContext(core_1.ThemeContext);
    if (typeof theme === 'undefined') {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return theme;
};
//# sourceMappingURL=index..js.map