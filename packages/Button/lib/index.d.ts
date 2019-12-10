import * as React from "react";
import { ColorProps, WidthProps, PaddingProps, BorderRadiusProps, HeightProps } from "styled-system";
import { MouseEventHandler } from "react";
interface ButtonProps extends ColorProps, WidthProps, PaddingProps, BorderRadiusProps, HeightProps {
    onClick?: MouseEventHandler<HTMLInputElement>;
    children: React.ReactChild;
    isDisabled?: boolean;
    fullWidth?: boolean;
    type?: "button" | "submit" | "reset";
}
export declare const Button: ({ onClick, children, isDisabled, type, fullWidth, width, ...rest }: ButtonProps) => JSX.Element;
export {};
