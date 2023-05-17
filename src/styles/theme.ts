import { DefaultTheme } from 'styled-components';
import { ITheme, ThemeEnum } from 'src/types/theme';
import { lightColors, darkColors } from './colors';
import { borderRadius, fontFace, shadow } from './scheme';

const baseTheme: ITheme = {
  colors: lightColors,
  globalAppContainerWidth: '1200px',
  borderRadius,
  fontFace,
  shadow,
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
