import * as React from 'react';
import styled from "styled-components";
import {MouseEventHandler} from "react";

const StyledButton = styled.button`
  padding: 10px;
`;
interface ButtonProps {
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
export const Button = ({onClick, text, isDisabled = false}: ButtonProps) => {
    return <StyledButton
        onClick={onClick}
        disabled={isDisabled}
        aria-disabled={isDisabled}
    >{text}</StyledButton>;
};
