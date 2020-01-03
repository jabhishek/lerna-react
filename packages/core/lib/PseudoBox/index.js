"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = require("@emotion/styled");
const css_1 = require("@styled-system/css");
const Box_1 = require("../Box");
const customProps_1 = require("../Box/customProps");
const disabled = "&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover";
const transformAlias = (prop, propValue) => {
    const configKeys = Object.keys(customProps_1.config);
    let result = {};
    if (configKeys.includes(prop)) {
        if (customProps_1.config[prop] === true) {
            result[prop] = propValue;
        }
    }
    else {
        result[prop] = propValue;
    }
    return result;
};
exports.transformAliasProps = (props) => {
    let result = {};
    for (let prop in props) {
        if (typeof props[prop] === "object") {
            result = Object.assign(Object.assign({}, result), { [prop]: exports.transformAliasProps(props[prop]) });
        }
        else {
            result = Object.assign(Object.assign({}, result), transformAlias(prop, props[prop]));
        }
    }
    return result;
};
exports.PseudoBox = styled_1.default(Box_1.Box)((props) => {
    const { _disabled } = props;
    return css_1.default({
        [disabled]: exports.transformAliasProps(_disabled),
    });
});
exports.PseudoBox.displayName = "PseudoBox";
