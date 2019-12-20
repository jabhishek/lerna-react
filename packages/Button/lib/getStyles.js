"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseStyles = {
    p: ["med", "large"],
    width: ["100%", "auto"],
    borderRadius: "small",
    color: "primary",
    cursor: "pointer",
};
const getWidth = (width, fullWidth) => {
    if (fullWidth) {
        return { width: ["100%"] };
    }
    return { width: width || baseStyles.width };
};
const getDisabledStyles = () => {
    return {
        cursor: 'not-allowed'
    };
};
exports.getStyles = (props) => {
    const { width, fullWidth, isDisabled } = props;
    console.log("props", props);
    return Object.assign(Object.assign(Object.assign({}, baseStyles), getWidth(width, fullWidth)), (!!isDisabled && getDisabledStyles()));
};
