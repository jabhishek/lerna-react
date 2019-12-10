"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseStyles = {
    p: ["med", "large"],
    width: ["100%", "auto"],
    borderRadius: "small",
    color: "primary"
};
const getWidth = (width, fullWidth) => {
    if (fullWidth) {
        return { width: ["100%"] };
    }
    return { width: width || baseStyles.width };
};
exports.getStyles = (props) => {
    const { width, fullWidth } = props;
    console.log("props", props);
    return Object.assign(Object.assign({}, baseStyles), getWidth(width, fullWidth));
};
//# sourceMappingURL=getStyles.js.map