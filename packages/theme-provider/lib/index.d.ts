import * as React from 'react';
import { Theme as StyledSystemTheme } from 'styled-system';
export interface ITheme extends StyledSystemTheme {
}
export declare const ThemeProvider: ({ theme, children }: {
    theme: ITheme;
    children: React.ReactChildren;
}) => JSX.Element;
export declare const useTheme: () => ITheme;
