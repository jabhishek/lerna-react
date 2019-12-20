/** @jsx jsx */
import styled from "@emotion/styled";
import {customProps, ICustomProps} from './customProps';
import {
    background,
    BackgroundProps,
    border,
    BorderProps,
    color,
    ColorProps,
    flexbox,
    FlexboxProps,
    grid,
    GridProps,
    layout,
    LayoutProps,
    opacity,
    OpacityProps,
    overflow,
    OverflowProps,
    position,
    PositionProps,
    shadow,
    ShadowProps,
    space,
    SpaceProps,
    typography,
    TypographyProps,
} from 'styled-system';
import * as React from "react";
import {AnchorHTMLAttributes, ButtonHTMLAttributes} from "react";
import {shouldForwardProp} from "./shouldForwardProp";

export type StyledSystemProps = LayoutProps &
    ColorProps &
    SpaceProps &
    BorderProps &
    BackgroundProps &
    PositionProps &
    FlexboxProps &
    ShadowProps &
    GridProps &
    OpacityProps &
    OverflowProps &
    TypographyProps;

// abhi-todo add types for other tags, in addition to button and anchor
export interface ButtonHTMLProps extends React.DOMAttributes<HTMLButtonElement>, ButtonHTMLAttributes<HTMLButtonElement> {
    as?: 'button';
}

export interface AnchorHTMLProps extends React.DOMAttributes<HTMLAnchorElement>, AnchorHTMLAttributes<HTMLAnchorElement> {
    as?: 'a';
}

export interface AllHTMLProps<T> extends React.DOMAttributes<T> {
    as?: Exclude<keyof JSX.IntrinsicElements, 'button' | 'a'>;
}

type HTMLProps =  ButtonHTMLProps | AnchorHTMLProps | AllHTMLProps<any>;

type BoxHTMLProps = HTMLProps & React.RefAttributes<any>;

export type BoxProps = BoxHTMLProps &
    StyledSystemProps &
    ICustomProps;

export const Box: React.FunctionComponent<BoxProps> = styled('div', {shouldForwardProp})(
    background,
    border,
    color,
    flexbox,
    grid,
    layout,
    position,
    shadow,
    space,
    typography,
    opacity,
    overflow,
    customProps,
);
