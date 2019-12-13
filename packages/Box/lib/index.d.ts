import { BackgroundProps, BorderProps, ColorProps, FlexboxProps, GridProps, LayoutProps, PositionProps, ShadowProps, SpaceProps, TypographyProps, OpacityProps, OverflowProps } from 'styled-system';
import * as React from "react";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
export declare type StyledSystemProps = LayoutProps & ColorProps & SpaceProps & BorderProps & BackgroundProps & PositionProps & FlexboxProps & ShadowProps & GridProps & OpacityProps & OverflowProps & TypographyProps;
export interface ButtonHTMLProps extends React.DOMAttributes<HTMLButtonElement>, ButtonHTMLAttributes<HTMLButtonElement> {
    as?: 'button';
}
interface AnchorHTMLProps extends React.DOMAttributes<HTMLAnchorElement>, AnchorHTMLAttributes<HTMLAnchorElement> {
    as?: 'a';
}
interface AllHTMLProps<T> extends React.DOMAttributes<T> {
    as?: Exclude<keyof JSX.IntrinsicElements, 'button' | 'a'>;
}
declare type HTMLProps = AllHTMLProps<any> | ButtonHTMLProps | AnchorHTMLProps;
declare type BoxHTMLProps = React.RefAttributes<any> & HTMLProps;
export declare type BoxProps = BoxHTMLProps & StyledSystemProps;
export declare const Box: React.FunctionComponent<BoxProps>;
export {};
