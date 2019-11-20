import * as StyledSystem from 'styled-system';
import { MouseEventHandler } from "react";
interface ButtonProps extends StyledSystem.ColorProps {
    onClick: MouseEventHandler<HTMLInputElement>;
    text: string;
    isDisabled?: boolean;
}
export declare const Button: ({ onClick, text, isDisabled, ...rest }: ButtonProps) => JSX.Element;
export {};
