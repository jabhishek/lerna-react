import * as React from 'react';
import { ColorProps, PaddingProps, WidthProps, HeightProps, BorderRadiusProps } from 'styled-system';
import { MouseEventHandler } from "react";
export declare const StyledButton: import("@emotion/styled-base").StyledComponent<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, any, object>;
interface ButtonProps extends ColorProps, WidthProps, PaddingProps, BorderRadiusProps, HeightProps {
    onClick?: MouseEventHandler<HTMLInputElement>;
    children: React.ReactChild;
    isDisabled?: boolean;
    fullWidth?: boolean;
    type?: 'button' | 'submit' | 'reset';
}
export declare const Button: ({ onClick, children, isDisabled, type, fullWidth, width, ...rest }: ButtonProps) => JSX.Element;
export {};
