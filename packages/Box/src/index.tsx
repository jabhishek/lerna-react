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
import {ButtonHTMLAttributes} from "react";

type StyledSystemProps = LayoutProps &
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

interface ButtonHTMLProps extends React.DOMAttributes<any>, ButtonHTMLAttributes<any> {
    as: 'button';
}

interface AllHTMLProps extends React.DOMAttributes<any> {
    as: string;
}

type HTMLProps = AllHTMLProps | ButtonHTMLProps;

type BoxHTMLProps = React.RefAttributes<any> & HTMLProps;

type BoxProps = BoxHTMLProps &
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
