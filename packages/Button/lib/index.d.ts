import * as React from 'react';
import { ColorProps, PaddingProps, WidthProps, BorderRadiusProps } from 'styled-system';
import { MouseEventHandler } from "react";
interface ButtonProps extends ColorProps, WidthProps, PaddingProps, BorderRadiusProps {
    onClick: MouseEventHandler<HTMLInputElement>;
    children: React.ReactChild;
    isDisabled?: boolean;
}
export declare const Button: ({ onClick, children, isDisabled, ...rest }: ButtonProps) => JSX.Element;
export {};
