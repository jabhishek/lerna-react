import * as React from "react";
import { ButtonHTMLProps, StyledSystemProps } from "@avj/box";
import { FC, MouseEventHandler } from "react";
declare type ButtonProps = {
    onClick?: MouseEventHandler<HTMLInputElement>;
    children: React.ReactChild;
    isDisabled?: boolean;
    fullWidth?: boolean;
    type?: "button" | "submit" | "reset";
} & ButtonHTMLProps & StyledSystemProps;
export declare const Button: FC<ButtonProps>;
export {};
