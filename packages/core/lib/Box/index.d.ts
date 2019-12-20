import { ICustomProps } from './customProps';
import { BackgroundProps, BorderProps, ColorProps, FlexboxProps, GridProps, LayoutProps, OpacityProps, OverflowProps, PositionProps, ShadowProps, SpaceProps, TypographyProps } from 'styled-system';
import * as React from "react";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
export declare type StyledSystemProps = LayoutProps & ColorProps & SpaceProps & BorderProps & BackgroundProps & PositionProps & FlexboxProps & ShadowProps & GridProps & OpacityProps & OverflowProps & TypographyProps;
export interface ButtonHTMLProps extends React.DOMAttributes<HTMLButtonElement>, ButtonHTMLAttributes<HTMLButtonElement> {
    as?: 'button';
}
export interface AnchorHTMLProps extends React.DOMAttributes<HTMLAnchorElement>, AnchorHTMLAttributes<HTMLAnchorElement> {
    as?: 'a';
}
export interface AllHTMLProps<T> extends React.DOMAttributes<T> {
    as?: Exclude<keyof JSX.IntrinsicElements, 'button' | 'a'>;
}
declare type HTMLProps = ButtonHTMLProps | AnchorHTMLProps | AllHTMLProps<any>;
declare type BoxHTMLProps = HTMLProps & React.RefAttributes<any>;
export declare type BoxProps = BoxHTMLProps & StyledSystemProps & ICustomProps;
export declare const Box: React.FunctionComponent<BoxProps>;
export {};
