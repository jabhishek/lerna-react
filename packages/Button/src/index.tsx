import * as React from 'react';
import styled from "@emotion/styled";
import shouldForwardProp from '@styled-system/should-forward-prop';
import {
    color, ColorProps,
    padding, PaddingProps,
    width, WidthProps,
    height, HeightProps,
    borderRadius, BorderRadiusProps,
} from 'styled-system';
import {MouseEventHandler} from "react";

const StyledButton = styled('button', {shouldForwardProp})(
    color,
    padding,
    width,
    height,
    borderRadius,
    {
        cursor: 'pointer'
    }
);

interface ButtonProps extends ColorProps, WidthProps, PaddingProps, BorderRadiusProps, HeightProps {
    /** Click handler */
    onClick?: MouseEventHandler<HTMLInputElement>;
    /** button text */
    children: React.ReactChild;
    /** disabled state */
    isDisabled?: boolean;
    /** full width */
    fullWidth?: boolean;
    /** type */
    type?: 'button' | 'submit' | 'reset';
}

const baseStyles = {
    p: ["med", "large"],
    width: ['100%', 'auto'],
    borderRadius: '4px',
};

const getWidth = (width: any, fullWidth: boolean) => {
    if (fullWidth) {
        return ['100%'];
    }

    return width || baseStyles.width;
};

/**
 * Basic button component
 */
export const Button = ({onClick, children, isDisabled = false, type = "button", fullWidth, width, ...rest}: ButtonProps) => {
    if (type === 'submit' && !!onClick) {
        console.warn('Click handler was specified for a submit button. Are you sure?');
    }

    return <StyledButton
        onClick={onClick}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        type={type}
        {...baseStyles}
        {...rest}
        width={getWidth(width, fullWidth)}
    >{children}</StyledButton>;
};
