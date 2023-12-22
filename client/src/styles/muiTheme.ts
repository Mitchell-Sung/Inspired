import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4C2DB7',
    },
    background: {
      default: '#fafafa',
    },
    text: {
      primary: '#616161',
    },
  },
  typography: {
    fontFamily: `'Montserrat', sans-serif`,
  },
});

export default theme;
