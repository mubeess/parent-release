import '@react-navigation/native';

// @Override the theme in react native navigation to accept the custom theme props.
declare module '@react-navigation/native' {
  export type ExtendedTheme = {
    dark: boolean;
    colors: {
      PrimaryColor: string;
      PrimaryGrey: string;
      PrimaryBackground: string;
      PrimaryGreen: string;
      PrimaryMint: string;
      PrimaryRed: string;
      PrimaryYellow: string;
      PrimaryOrange: string;
      PrimaryBlue: string;
      SecondaryColor: string;
      TetiaryColor: string;
      PrimaryFontSize: string;
      PrimaryFontColor: string;
      PrimaryRadius: string;
      SecondaryRadius: string;
      PrimaryBorderColor: string;
      PrimaryFade: string;
      PrimaryInputOutline: string;
      PrimaryFadedBlue: string;
      PrimaryWhite: string;
      SafsimsBlue: string;
    };
    fonts: {
      H1: string;
      H2: string;
      H3: string;
      H4: string;
      H5: string;
      H6: string;
      Paragraph: string;
      Small: string;
      Tiny: string;
    };
  };
  export function useTheme(): ExtendedTheme;
}
