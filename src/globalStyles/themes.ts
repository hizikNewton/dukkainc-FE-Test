import baseStyled, { ThemedStyledInterface } from "styled-components";

import * as C from "./constants";

export const defaultTheme = {
  breakpoints: {
    largeScreen: "992px",
    mediumScreen: "720px",
    smallScreen: "540px",
    xLargeScreen: "1280px",
    xxLargeScreen: "1600px",
    xxxLargeScreen: "1920px",
  },
  content: {
    padding: "25px",
  },
  colors: {
    ...C.theme,
  },
  container: {
    width: 1140,
  },
  message: {
    width: "95%",
    padding: "0px",
    backgroundColor: "red",
    color: "white",
  },
  grid: {
    containerWidth: 1140,
  },
  spacing: {
    /**
     * 30px in default theme
     */
    fieldSpacer: C.fieldSpacer,
    /**
     * 30px in default theme
     */
    gutter: "1.875rem",
    /**
     * 16px in default theme
     */
    spacer: `${C.spacer}rem`,
  },
  typography: {
    baseFontFamily: C.baseFontFamily,
    /**
     * 16px in default theme
     */
    baseFontSize: C.baseFontSize,
    /**
     * 20px in default theme
     */
    baseLineHeight: C.baseLineHeight,
    boldFontWeight: C.boldFontWeight,
    extraBoldFontWeight: C.extraBoldFontWeight,
    /**
     * 64px in default theme
     */
    h1FontSize: C.h1FontSize,
    h1LineHeight: C.h1LineHeight,
    /**
     * 48px in default theme
     */
    h2FontSize: C.h2FontSize,
    /**
     * 24px in default theme
     */
    h3FontSize: C.h3FontSize,
    /**
     * 18px in default theme
     */
    h4FontSize: C.h4FontSize,
    /**
     * 14px in default theme
     */
    smallFontSize: C.smallFontSize,
    /**
     * 96px in default theme
     */
    ultraBigFontSize: C.ultraBigFont,
  },
};

export type DefaultTheme = typeof defaultTheme;
export const styled = baseStyled as ThemedStyledInterface<DefaultTheme>;
