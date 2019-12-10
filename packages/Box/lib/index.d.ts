import { BackgroundProps, BorderProps, ColorProps, FlexboxProps, GridProps, LayoutProps, PositionProps, ShadowProps, SpaceProps, TypographyProps, OpacityProps, OverflowProps } from 'styled-system';
import * as React from "react";
declare type StyledSystemProps = LayoutProps & ColorProps & SpaceProps & BorderProps & BackgroundProps & PositionProps & FlexboxProps & ShadowProps & GridProps & OpacityProps & OverflowProps & TypographyProps;
interface As {
    as?: React.ElementType;
}
declare type BoxHTMLProps = React.RefAttributes<any> & React.HTMLProps<any>;
declare type BoxProps = BoxHTMLProps & StyledSystemProps & As;
export declare const Box: React.FunctionComponent<BoxProps>;
export {};
