/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import {Box, ButtonHTMLProps, StyledSystemProps} from "@avj/box";
import {FC, MouseEventHandler} from "react";
import {getStyles} from "./getStyles";

type ButtonProps = {
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
} & ButtonHTMLProps & StyledSystemProps;

/**
 * Basic Button component
 */
export const Button: FC<ButtonProps> = ({
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

    const styleProps = getStyles({width, fullWidth, isDisabled});

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
