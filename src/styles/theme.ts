import { DefaultTheme } from 'styled-components';
import { ITheme, ThemeEnum } from 'src/types/theme';
import { lightColors, darkColors } from './colors';
import { borderRadius, fontFace, shadow } from './scheme';
import { BREAKPOINTS } from './breakpoints';

const baseTheme: ITheme = {
  colors: lightColors,
  globalAppContainerWidth: '1200px',
  borderRadius,
  fontFace,
  shadow,
  media: {
    extraLarge: `${BREAKPOINTS.xl}px`,
    large: `${BREAKPOINTS.lg}px`,
    medium: `${BREAKPOINTS.md}px`,
    small: `${BREAKPOINTS.sm}px`,
  },
};

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.light,
  colors: lightColors,
};

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.dark,
  colors: darkColors,
};
