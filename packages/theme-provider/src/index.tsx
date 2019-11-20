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
    }
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
