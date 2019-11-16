import { MouseEventHandler } from "react";
interface ButtonProps {
    onClick: MouseEventHandler<HTMLInputElement>;
    text: string;
    isDisabled?: boolean;
}
export declare const Button: ({ onClick, text, isDisabled }: ButtonProps) => JSX.Element;
export {};
