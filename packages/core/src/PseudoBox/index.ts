/** @jsx jsx */
import styled from "@emotion/styled";
import css from "@styled-system/css";
import {Box} from "../Box";
import { config } from "../Box/customProps";

/**
 * The selectors are based on [WAI-ARIA state properties](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties) and common CSS Selectors
 */
const disabled =
    "&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover";

// Transform the custom alias to a format that styled-system CSS supports
const transformAlias = (prop: string, propValue: string) => {
    const configKeys = Object.keys(config);
    let result: any = {};

    if (configKeys.includes(prop)) {
        if (config[prop] === true) {
            result[prop] = propValue;
        }
    } else {
        result[prop] = propValue;
    }
    return result;
};

export const transformAliasProps = (props: any) => {
    let result = {};
    for (let prop in props) {
        if (typeof props[prop] === "object") {
            result = { ...result, [prop]: transformAliasProps(props[prop]) };
        } else {
            result = { ...result, ...transformAlias(prop, props[prop]) };
        }
    }
    return result;
};

export const PseudoBox = styled(Box)(
    (props) => {
        const {_disabled} = props;
        return css({
            [disabled]: transformAliasProps(_disabled),
        });
    },
);

PseudoBox.displayName = "PseudoBox";
