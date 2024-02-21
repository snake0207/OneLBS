export const tokens = {
    grey: {
        100: '#f0f0f3',
        200: '#EFEFEF',
        300: '#D1D1D1',
        400: '#BFBFBF',
        500: '#b3b6c2',
        600: '#8f929b',
        700: '#6b6d74',
        800: '#48494e',
        900: '#242427',
    },
    primary: {
        // light blue
        100: '#E3F0FF',
        200: '#9fc9ff',
        300: '#6faeff',
        400: '#3f92ff',
        500: '#0f77ff',
        600: '#0d64e6',
        700: '#0b51cc',
        800: '#00418d',
        900: '#002C5F',
    },
    secondary: {
        // yellow
        100: '#fcf0dd',
        200: '#fae1bb',
        300: '#f7d299',
        400: '#f5c377',
        500: '#f2b455',
        600: '#c29044',
        700: '#916c33',
        800: '#614822',
        900: '#302411',
    },
    tertiary: {
        // purple
        500: '#8884d8',
    },
    background: {
        light: '#2d2d34',
        main: '#05141f',
        100: '#ffffff',
        200: '#EFEFEF',
        300: '#D1D1D1',
        800: '#142532',
        900: '#05141f',
    },
    button: {
        400: '#00418D',
        500: '#080945',
        600: '#888888',
        700: '#EFEFEF',
    },
    text: {
        400: '#fff',
        500: '#888',
        600: '#444',
        700: '#05141f',
    },
    lnb: {
        100: '#fff',
        200: '#002C5F',
        300: '#00418d',
        400: '#007fa8',
        500: '#05141f',
        600: '#f5f5f5',
    },
    border: {
        100: '#fff',
        200: '#f1f1f1',
        300: '#1e3343',
        400: '#00418d',
    },
}

// mui theme settings
export const getThemeSettings = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                  primary: {
                      ...tokens.primary,
                      main: tokens.primary[500],
                      light: tokens.primary[400],
                      lightBlue: tokens.primary[100],
                      darkBlue: tokens.primary[800],
                      dark: tokens.primary[900],
                  },
                  secondary: {
                      ...tokens.secondary,
                      main: tokens.secondary[500],
                  },
                  tertiary: {
                      ...tokens.tertiary,
                  },
                  grey: {
                      ...tokens.grey,
                      main: tokens.grey[500],
                      contrastText: tokens.grey[400],
                      light: tokens.grey[300],
                      lightgray: tokens.grey[200],
                      darkgray: tokens.grey[700],
                  },
                  button: {
                      ...tokens.button,
                      main: tokens.button[500],
                      light: tokens.button[400],
                      lightgray: tokens.button[700],
                      gray: tokens.button[600],
                  },
                  text: {
                      ...tokens.text,
                      main: tokens.text[500],
                      light: tokens.text[400],
                      gray: tokens.text[600],
                      darkgray: tokens.text[700],
                  },
                  background: {
                      default: tokens.background[100],
                      light: tokens.background.light,
                      contents: tokens.background[100],
                      gray: tokens.background[200],
                      mobile: tokens.background[100],
                      web: tokens.background[300],
                  },
                  lnb: {
                      mobilelnb: tokens.lnb[100],
                      mobilelnbdeps: tokens.lnb[300],
                      weblnb: tokens.lnb[500],
                      weblnbdeps: tokens.lnb[400],
                  },
                  border: {
                      main: tokens.border[200],
                      lnb: tokens.border[200],
                  },
              }
            : {
                  primary: {
                      ...tokens.primary,
                      main: tokens.primary[900],
                      light: tokens.primary[400],
                  },
                  secondary: {
                      ...tokens.secondary,
                      main: tokens.secondary[500],
                  },
                  tertiary: {
                      ...tokens.tertiary,
                  },
                  grey: {
                      ...tokens.grey,
                      main: tokens.grey[500],
                      light: tokens.grey[600],
                      lightgray: tokens.grey[600],
                      contrastText: tokens.grey[400],
                      darkgray: tokens.grey[300],
                  },
                  button: {
                      ...tokens.button,
                      main: tokens.button[500],
                      light: tokens.button[400],
                      gray: tokens.button[600],
                      lightgray: tokens.button[700],
                  },
                  text: {
                      ...tokens.text,
                      main: tokens.text[400],
                      light: tokens.text[500],
                      gray: tokens.text[400],
                      darkgray: tokens.text[400],
                      lnb: tokens.text[400],
                  },
                  background: {
                      default: tokens.background.main,
                      light: tokens.background.light,
                      contents: tokens.background[800],
                      gray: tokens.background[900],
                      mobile: tokens.background[900],
                      web: tokens.background[900],
                  },
                  lnb: {
                      mobilelnb: tokens.lnb[200],
                      mobilelnbdeps: tokens.lnb[300],
                      weblnb: tokens.lnb[500],
                      weblnbdeps: tokens.lnb[400],
                  },
                  border: {
                      main: tokens.border[300],
                      lnb: tokens.border[400],
                  },
              }),
    },
    typography: {
        fontFamily: ['Noto Sans KR', 'sans-serif'].join(','),
        fontSize: 14,
        color: tokens.grey[700],
    },
})
