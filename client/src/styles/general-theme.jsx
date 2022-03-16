import { blueGrey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const themeBase = createTheme({
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1280,
    },
  },
  palette: {
    primary: {
      main: '#068cf9',
      dark: '#2788d7',
      light: '#6cb7f4',
    },
    lightBlue: {
      main: '#39aaf8',
      contrastText: '#fff',
    },
    black: {
      main: blueGrey[900],
      light: blueGrey[50],
    },
    neutral: {
      main: '#e3e3e3',
      contrastText: '#00000042',
      dark: '#828287',
    },
  },
});

const generalTheme = createTheme(themeBase, {
  mixins: {
    toolbar: {
      [themeBase.breakpoints.up('sm')]: {
        minHeight: 80,
      },
    },
  },
  typography: {
    fontSize: 16,
    fontSizeLg: 16,
    h1: {
      [themeBase.breakpoints.down('sm')]: {
        fontSize: '4.5rem',
      },
    },
    h2: {
      [themeBase.breakpoints.down('sm')]: {
        fontSize: '3rem',
      },
    },
    h3: {
      [themeBase.breakpoints.down('sm')]: {
        fontSize: '2.5rem',
      },
    },
    h4: {
      [themeBase.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
      },
    },
    h5: {
      [themeBase.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
      },
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.5,
    },
    subtitle: {
      [themeBase.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
      },
    },

    subtitle2: {
      fontFamily: ['Caveat', 'cursive'].join(','),
      fontSize: '10rem',
      lineHeight: 1,
      [themeBase.breakpoints.down('sm')]: {
        fontSize: '5.5rem',
      },
    },
  },
});

export default generalTheme;
