import * as React from "react";
import { Box } from "@avj/box";
import {

    ColorProps,
    WidthProps,
    PaddingProps,
    BorderRadiusProps,
    HeightProps

} from "styled-system";
import { MouseEventHandler } from "react";
import { getStyles } from "./getStyles";

interface ButtonProps
    extends ColorProps,
        WidthProps,
        PaddingProps,
        BorderRadiusProps,
        HeightProps {
    /** Click handler */
    onClick?: MouseEventHandler<HTMLInputElement>;
    /** Button text */
    children: React.ReactChild;
    /** disabled state */
    isDisabled?: boolean;
    /** full width */
    fullWidth?: boolean;
    /** type */
    type?: "button" | "submit" | "reset";
}

/**
 * Basic Button component
 */
export const Button = ({
                           onClick,
                           children,
                           isDisabled = false,
                           type = "button",
                           fullWidth = false,
                           width,
                           ...rest
                       }: ButtonProps) => {
    if (type === "submit" && !!onClick) {
        console.warn(
            "Click handler was specified for a submit Button. Are you sure?"
        );
    }

    const styleProps = getStyles({ width, fullWidth });

    return (
        <Box
            as="button"
            onClick={onClick}
            disabled={isDisabled}
            aria-disabled={isDisabled}
            type={type}
            {...styleProps}
            {...rest}
        >
            {children}
        </Box>
    );
};
