import * as React from 'react';
import {ThemeContext} from '@emotion/core';
import {Theme as StyledSystemTheme} from 'styled-system';
import {ThemeProvider as EmotionThemeProvider} from 'emotion-theming';
import {Context, useContext} from "react";

export interface ITheme extends StyledSystemTheme { }

const defaultTheme:ITheme = {
    colors: {
        primary: 'red',
        secondary: 'blue'
    },
    space: {
        none: 0,
        small: 4,
        med: 8,
        large: 12,
        xl: 16,
    },
    radii: {
      none: 0,
      small: 4,
      med: 8,
      large: 12,
      round: '100%',
    },
    breakpoints: [
        "320px",
        "768px",
        "1224px",
        "1824px",
    ]
};

export const ThemeProvider = ({ theme = defaultTheme, children }: { theme?: ITheme, children: React.ReactChildren | React.ReactChild }) => {
    return <EmotionThemeProvider theme={theme}>
        { children }
    </EmotionThemeProvider>
};

export const useTheme = (): ITheme => {
  const theme = useContext<ITheme>(ThemeContext as Context<ITheme>);

    if (typeof theme === 'undefined') {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return theme;
};
