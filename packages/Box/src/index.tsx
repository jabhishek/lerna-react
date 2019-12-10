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

interface As {
    as?: React.ElementType
}

type BoxHTMLProps = React.RefAttributes<any> & React.HTMLProps<any>;

type BoxProps = BoxHTMLProps &
    StyledSystemProps &
    As;

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
