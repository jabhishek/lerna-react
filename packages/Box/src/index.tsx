import styled from "@emotion/styled";
import shouldForwardProp from '@styled-system/should-forward-prop';
import {
    background, BackgroundProps,
    border, BorderProps,
    color, ColorProps,
    flexbox, FlexboxProps,
    grid, GridProps,
    layout, LayoutProps,
    position, PositionProps,
    shadow, ShadowProps,
    space, SpaceProps,
    typography, TypographyProps,
    opacity, OpacityProps,
    overflow, OverflowProps,
} from 'styled-system';
import * as React from "react";
import {AnchorHTMLAttributes, ButtonHTMLAttributes} from "react";

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

interface AnchorHTMLProps extends React.DOMAttributes<HTMLAnchorElement>, AnchorHTMLAttributes<HTMLAnchorElement> {
    as?: 'a';
}

interface AllHTMLProps<T> extends React.DOMAttributes<T> {
    as?: Exclude<keyof JSX.IntrinsicElements, 'button' | 'a'>;
}

type HTMLProps = AllHTMLProps<any> | ButtonHTMLProps | AnchorHTMLProps;

type BoxHTMLProps = React.RefAttributes<any> & HTMLProps;

export type BoxProps = BoxHTMLProps &
    StyledSystemProps;

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
);
