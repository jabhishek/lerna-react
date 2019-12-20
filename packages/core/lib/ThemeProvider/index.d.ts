import * as React from 'react';
import { ITheme } from '..';
export declare const ThemeProvider: ({ theme, children }: {
    theme?: ITheme;
    children: string | number | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)> | React.ReactChildren;
}) => JSX.Element;
export declare const useTheme: () => ITheme;
