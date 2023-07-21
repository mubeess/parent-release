import { DarkTheme, DefaultTheme, ExtendedTheme } from '@react-navigation/native';

const PrimaryTheme = '#0066F5';

export const setSiteTheme = (color) => {
  lightTheme.colors.PrimaryColor = color;
  darkTheme.colors.PrimaryColor = color;
};

export const lightTheme: ExtendedTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    PrimaryColor: PrimaryTheme,
    PrimaryGrey: '#9D9DB7',
    PrimaryBackground: '#FAF8F9',
    PrimaryGreen: '#2CDA9D',
    PrimaryMint: '#95fd35',
    PrimaryRed: '#D81E5B',
    PrimaryYellow: '#F2C02E',
    PrimaryOrange: '#EF7E23',
    PrimaryBlue: '#5BB1F2',
    SafsimsBlue: '#0066F5',
    SecondaryColor: '#be7efc',
    TetiaryColor: '#ecdbfe',
    PrimaryFontSize: '12px',
    PrimaryFontColor: '#383A3F',
    PrimaryRadius: '3px',
    SecondaryRadius: '5px',
    PrimaryBorderColor: '#D8D8E3',
    PrimaryFade: '#F5F5F7',
    PrimaryInputOutline: '#9D9DB7',
    PrimaryFadedBlue: '#dfe8f7',
    PrimaryWhite: '#FFF',
  },
  fonts: {
    H1: '48.83px',
    H2: '39.06px',
    H3: '31.25px',
    H4: '25.00px',
    H5: '20.00px',
    H6: '16.00px',
    Paragraph: '12.80px',
    Small: '10.24px',
    Tiny: '8.19px',
  },
};

export const darkTheme: ExtendedTheme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    PrimaryColor: PrimaryTheme,
    PrimaryGrey: '#9D9DB7',
    PrimaryBackground: '#FAF8F9',
    PrimaryGreen: '#2CDA9D',
    PrimaryMint: '#95fd35',
    PrimaryRed: '#D81E5B',
    PrimaryYellow: '#F2C02E',
    PrimaryOrange: '#EF7E23',
    PrimaryBlue: '#5BB1F2',
    SecondaryColor: '#be7efc',
    TetiaryColor: '#ecdbfe',
    PrimaryFontSize: '12px',
    PrimaryFontColor: '#383A3F',
    PrimaryRadius: '3px',
    SecondaryRadius: '5px',
    PrimaryBorderColor: '#D8D8E3',
    SafsimsBlue: '#0066F5',
    PrimaryFade: '#F5F5F7',
    PrimaryInputOutline: '#9D9DB7',
    PrimaryFadedBlue: '#dfe8f7',
    PrimaryWhite: '#FFF',
  },
  fonts: {
    H1: '48.83px',
    H2: '39.06px',
    H3: '31.25px',
    H4: '25.00px',
    H5: '20.00px',
    H6: '16.00px',
    Paragraph: '12.80px',
    Small: '10.24px',
    Tiny: '8.19px',
  },
};
