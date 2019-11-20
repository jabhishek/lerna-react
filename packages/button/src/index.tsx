import * as React from 'react';
import styled from "@emotion/styled";
import * as StyledSystem from 'styled-system';
import {color} from 'styled-system';
import {MouseEventHandler} from "react";

const StyledButton = styled.button`
  padding: 10px;
  ${color}
`;
interface ButtonProps extends StyledSystem.ColorProps {
    /** Click handler */
    onClick: MouseEventHandler<HTMLInputElement>;
    /** button text */
    text: string;
    /** disabled state */
    isDisabled?: boolean;
}
/**
 * Basic button component
 */
export const Button = ({onClick, text, isDisabled = false, ...rest}: ButtonProps) => {
    return <StyledButton
        onClick={onClick}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        {...rest}
    >{text}</StyledButton>;
};
