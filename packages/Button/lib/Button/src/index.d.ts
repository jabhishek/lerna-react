import * as React from "react";
import { ButtonHTMLProps, StyledSystemProps } from "../../Box/src";
import { FC, MouseEventHandler } from "react";
declare type ButtonProps = ButtonHTMLProps & StyledSystemProps & {
    onClick?: MouseEventHandler<HTMLInputElement>;
    children: React.ReactChild;
    isDisabled?: boolean;
    fullWidth?: boolean;
    type?: "button" | "submit" | "reset";
};
export declare const Button: FC<ButtonProps>;
export {};
