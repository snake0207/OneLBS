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
        900: '#05141f',
        101: '#142532',
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
        1000: '#05141f',
        1001: '#459BFF',
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

    color: {
        100: '#ffffff',
        200: '#f5f5f5',
        300: '#efefef',
        400: '#e6e7e9',
        500: '#e2e2e2',
        600: '#d1d1d1',
        700: '#bfbfbf',
        800: '#a9a9a9',
        900: '#888888',
        1000: '#444444',

        101: '#CFE5FF',
        201: '#536877',
        301: '#385264',
        401: '#2B4D66',
        501: '#1e3343',
        601: '#253846',
        701: '#142532',
        801: '#132736',
        901: '#071c2c',
        1001: '#05141f',

        2001: '#007fa8',
        3001: '#205279',
        4001: '#00418d',
        5001: '#002C5F',
        6001: '#080945',
        7001: '#727b83',
        8001: '#306a7d',
        9001: '#C7F1FF',
        10001: '#73B4FF',
        20001: '#e3f0ff',
    },

    background: {
        light: '#2d2d34',
        main: '#05141f',
        100: '#ffffff',
        200: '#EFEFEF',
        300: '#D1D1D1',
        400: '#f5f5f5',
        500: '#071c2c',
        800: '#142532',
        900: '#05141f',
        1000: '#132736',
    },
    button: {
        100: '#fff',
        200: '#205279',
        300: '#002C5F',
        400: '#00418D',
        500: '#080945',
        600: '#888888',
        700: '#EFEFEF',
        800: '#05141f',
        900: '#CFE5FF',
        1000: '#536877',
    },
    text: {
        100: '#fff',
        400: '#a9a9a9',
        500: '#888',
        600: '#444',
        700: '#05141f',
        800: '#1E3343',
        900: '#2B4D66',
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
        500: '#05141f',
        600: '#e6e7e9',
        700: '#EFEFEF',
        800: '#071c2c',
        900: '#d1d1d1',
        1000: '#888',
    },
    table: {
        100: '#fff',
        200: '#d1d1d1',
        300: '#e6e7e9',
        400: '#142532',
        500: '#05141f',
        600: '#253846',
        700: '#e2e2e2',
        800: '#385264',
    },
    dialog: {
        100: '#fff',
        200: '#E3F0FF',
        300: '#73B4FF',
        400: '#05141F',
    },
    form: {
        100: '#ffffff',
        200: '#071c2c',
    },
    paging: {
        100: '#ffffff',
        200: '#d1d1d1',
        300: '#a9a9a9',
        400: '#444444',
        500: '#2B4D66',
        600: '#05141f',
        700: '#142532',
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
                      blue: tokens.primary[800],
                      lightBlue: tokens.primary[100],
                      darkBlue: tokens.primary[1000],
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
                      search: tokens.grey[200],
                  },
                  color: {
                      ...tokens.color,
                      grayBox: tokens.color[200],
                      grayBorder: tokens.color[600],
                      header: tokens.color[1000],
                      alert: tokens.color[1000],
                      alertBtn: tokens.color[5001],
                      dashboard: tokens.color[701],
                      germanyBox: tokens.color[8001],
                      germany: tokens.color[9001],
                      dashboardCnt: tokens.color[300],
                      banner: tokens.color[5001],
                  },
                  button: {
                      ...tokens.button,
                      main: tokens.button[500],
                      light: tokens.button[400],
                      lightblue: tokens.button[900],
                      lightgray: tokens.button[700],
                      gray: tokens.button[600],
                      white: tokens.button[100],
                  },
                  text: {
                      ...tokens.text,
                      main: tokens.text[600],
                      light: tokens.text[400],
                      gray: tokens.text[500],
                      darkgray: tokens.text[700],
                      lightblue: tokens.text[500],
                      taps: tokens.text[400],
                      tapSelected: tokens.text[700],
                      mapTaps: tokens.text[900],
                      dashboard: tokens.text[600],
                  },
                  background: {
                      default: tokens.background[100],
                      main: tokens.background[100],
                      light: tokens.background.light,
                      contents: tokens.background[100],
                      gray: tokens.background[200],
                      mobile: tokens.background[100],
                      web: tokens.background[300],
                      close: tokens.background[900],
                      titleBar: tokens.background[400],
                      taps: tokens.background[200],
                      tapSelected: tokens.background[100],
                      mapTaps: tokens.background[200],
                  },
                  lnb: {
                      mobilelnb: tokens.lnb[100],
                      mobilelnbdeps: tokens.lnb[100],
                      mobilelnbText: tokens.lnb[400],
                      weblnb: tokens.lnb[500],
                      weblnbdeps: tokens.lnb[400],
                  },
                  border: {
                      main: tokens.border[200],
                      gray: tokens.border[900],
                      light: tokens.border[900],
                      darkgray: tokens.border[1000],
                      lnb: tokens.border[200],
                      dropdown: tokens.border[200],
                      tabs: tokens.border[700],
                      tabSelected: tokens.border[500],
                  },
                  table: {
                      td: tokens.table[100],
                      border: tokens.table[200],
                      borderTh: tokens.table[200],
                      hover: tokens.table[300],
                      color: tokens.table[500],
                      viewTh: tokens.table[700],
                      viewDatileTh: tokens.table[100],
                      viewBorderTh: tokens.table[200],
                      viewBorder: tokens.table[500],
                      viewTopBorder: tokens.table[200],
                      borderlight: tokens.table[200],
                  },
                  dialog: {
                      main: tokens.dialog[100],
                      title: tokens.dialog[200],
                  },
                  form: {
                      main: tokens.form[100],
                  },
                  paging: {
                      main: tokens.paging[300],
                      border: tokens.paging[300],
                      borderSelected: tokens.paging[300],
                      selected: tokens.paging[400],
                      text: tokens.paging[300],
                      textSelected: tokens.paging[100],
                  },
              }
            : {
                  primary: {
                      ...tokens.primary,
                      main: tokens.primary[900],
                      blue: tokens.primary[1001],
                      lightBlue: tokens.primary[900],
                      darkBlue: tokens.primary[900],
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
                      search: tokens.grey[101],
                  },
                  color: {
                      ...tokens.color,
                      grayBox: tokens.color[901],
                      grayBorder: tokens.color[501],
                      header: tokens.color[601],
                      alert: tokens.color[7001],
                      alertBtn: tokens.color[100],
                      dashboard: tokens.color[100],
                      germanyBox: tokens.color[1001],
                      germany: tokens.color[901],
                      dashboardCnt: tokens.color[701],
                      banner: tokens.color[10001],
                  },
                  button: {
                      ...tokens.button,
                      main: tokens.button[300],
                      light: tokens.button[400],
                      lightblue: tokens.button[900],
                      gray: tokens.button[200],
                      lightgray: tokens.button[800],
                      white: tokens.button[100],
                  },
                  text: {
                      ...tokens.text,
                      main: tokens.text[100],
                      light: tokens.text[500],
                      gray: tokens.text[100],
                      darkgray: tokens.text[100],
                      lightblue: tokens.text[900],
                      taps: tokens.text[800],
                      tapSelected: tokens.background[400],
                      mapTaps: tokens.text[400],
                      dashboard: tokens.text[700],
                  },
                  background: {
                      default: tokens.background.main,
                      main: tokens.background[900],
                      light: tokens.background.light,
                      contents: tokens.background[800],
                      gray: tokens.background[900],
                      mobile: tokens.background[900],
                      web: tokens.background[900],
                      close: tokens.background[800],
                      titleBar: tokens.background[900],
                      taps: tokens.background[500],
                      tapSelected: tokens.background[900],
                      mapTaps: tokens.background[1000],
                  },
                  lnb: {
                      mobilelnb: tokens.lnb[200],
                      mobilelnbdeps: tokens.lnb[300],
                      mobilelnbText: tokens.lnb[100],
                      weblnb: tokens.lnb[500],
                      weblnbdeps: tokens.lnb[400],
                  },
                  border: {
                      main: tokens.border[300],
                      gray: tokens.border[200],
                      light: tokens.border[300],
                      darkgray: tokens.border[300],
                      lnb: tokens.border[400],
                      dropdown: tokens.border[300],
                      tabs: tokens.border[800],
                      tabSelected: tokens.border[600],
                  },
                  table: {
                      td: tokens.table[500],
                      border: tokens.table[400],
                      hover: tokens.table[400],
                      color: tokens.table[100],
                      borderTh: tokens.table[500],
                      viewTh: tokens.table[400],
                      viewDatileTh: tokens.table[500],
                      viewBorderTh: tokens.table[600],
                      viewBorder: tokens.table[800],
                      viewTopBorder: tokens.table[600],
                      borderlight: tokens.table[300],
                  },
                  dialog: {
                      main: tokens.dialog[400],
                      title: tokens.dialog[300],
                  },
                  form: {
                      main: tokens.form[200],
                  },
                  paging: {
                      main: tokens.paging[700],
                      border: tokens.paging[500],
                      selected: tokens.paging[300],
                      text: tokens.paging[500],
                      textSelected: tokens.paging[600],
                  },
              }),
    },
    typography: {
        fontFamily: ['Noto Sans KR', 'sans-serif'].join(','),
        fontSize: 14,
        color: tokens.grey[700],
    },
})
