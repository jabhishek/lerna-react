import * as React from 'react';
import styled from "styled-components";
import {MouseEventHandler} from "react";

const StyledButton = styled.button`
  padding: 10px;
`;

interface ButtonProps {
    onClick: MouseEventHandler<HTMLInputElement>;
    text: string;
    isDisabled?: boolean;
}

export const Button = ({onClick, text, isDisabled = false}: ButtonProps) => {
    return <StyledButton
        onClick={onClick}
        disabled={isDisabled}
        aria-disabled={isDisabled}
    >{text}</StyledButton>;
}