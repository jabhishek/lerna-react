import * as React from 'react';
import styled from "@emotion/styled";
import shouldForwardProp from '@styled-system/should-forward-prop';
import {
    color, ColorProps,
    padding, PaddingProps,
    width, WidthProps,
    borderRadius, BorderRadiusProps,
} from 'styled-system';
import {MouseEventHandler} from "react";

const StyledButton = styled('button', { shouldForwardProp })(
  color,
  padding,
  width,
  borderRadius
);

interface ButtonProps extends ColorProps, WidthProps, PaddingProps, BorderRadiusProps {
    /** Click handler */
    onClick: MouseEventHandler<HTMLInputElement>;
    /** button text */
    children: React.ReactChild;
    /** disabled state */
    isDisabled?: boolean;
}

const baseStyles = {
    p: ["med", "large"],
    width:['100%', 'auto'],
    borderRadius: '4px',
};

/**
 * Basic button component
 */
export const Button = ({onClick, children, isDisabled = false, ...rest}: ButtonProps) => {
    return <StyledButton
        onClick={onClick}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        {...baseStyles}
        {...rest}
    >{children}</StyledButton>;
};
