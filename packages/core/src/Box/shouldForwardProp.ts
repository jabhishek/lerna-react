import {createShouldForwardProp} from "@styled-system/should-forward-prop";
import {
    background,
    border,
    buttonStyle,
    color,
    colorStyle,
    compose,
    flexbox,
    grid,
    layout,
    position,
    shadow,
    space,
    textStyle,
    typography
} from "styled-system";

const all = compose(
    space,
    typography,
    color,
    layout,
    flexbox,
    border,
    background,
    position,
    grid,
    shadow,
    buttonStyle,
    textStyle,
    colorStyle
);
const styledProps = all.propNames;
export const shouldForwardProp = createShouldForwardProp([...styledProps, 'cursor']);
