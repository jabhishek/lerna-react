import { BackgroundProps, BorderProps, ColorProps, FlexboxProps, GridProps, LayoutProps, PositionProps, ShadowProps, SpaceProps, TypographyProps, OpacityProps, OverflowProps } from 'styled-system';
import * as React from "react";
import { ButtonHTMLAttributes } from "react";
declare type StyledSystemProps = LayoutProps & ColorProps & SpaceProps & BorderProps & BackgroundProps & PositionProps & FlexboxProps & ShadowProps & GridProps & OpacityProps & OverflowProps & TypographyProps;
interface ButtonHTMLProps extends React.DOMAttributes<any>, ButtonHTMLAttributes<any> {
    as: 'button';
}
interface AllHTMLProps extends React.DOMAttributes<any> {
    as: string;
}
declare type HTMLProps = AllHTMLProps | ButtonHTMLProps;
declare type BoxHTMLProps = React.RefAttributes<any> & HTMLProps;
declare type BoxProps = BoxHTMLProps & StyledSystemProps;
export declare const Box: React.FunctionComponent<BoxProps>;
export {};
