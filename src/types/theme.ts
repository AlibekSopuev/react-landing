import { borderRadius, shadow } from 'src/styles/scheme';
import { lightColors } from 'src/styles/colors';

type ColorsType = typeof lightColors;
type BorderRadiusType = typeof borderRadius;
type Fonts = 'fira_sans' | 'pt_root_ui_regular' | 'pt_root_ui_medium' | 'pt_root_ui_bold';
type Shadow = typeof shadow;

export interface ITheme {
  colors: ColorsType;
  shadow: Shadow;
  borderRadius: BorderRadiusType;
  globalAppContainerWidth: string;
  fontFace: {
    [key in Fonts]: string;
  };
  media: {
    extraLarge: string;
    large: string;
    medium: string;
    small: string;
  };
}

export enum ThemeEnum {
  light = 'light',
  dark = 'dark',
}
