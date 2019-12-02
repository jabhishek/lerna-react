"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const core_1 = require("@emotion/core");
const emotion_theming_1 = require("emotion-theming");
const react_1 = require("react");
const defaultTheme = {
    colors: {
        primary: 'red',
        secondary: 'blue'
    },
    space: {
        none: 0,
        small: 4,
        med: 8,
        large: 12,
        xl: 16,
    },
    radii: {
        none: 0,
        small: 4,
        med: 8,
        large: 12,
        round: '100%',
    },
    breakpoints: [
        "320px",
        "768px",
        "1224px",
        "1824px",
    ]
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
//# sourceMappingURL=index.js.map