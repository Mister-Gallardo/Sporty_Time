import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: 'Raleway',
    fontSize: 14.75,
    h2: {
      fontWeight: 600,
      fontSize: 14,
      padding: '1.75rem 0 .75rem 0',
    },
    body1: {
      fontSize: 14,
      fontWeight: 500,
    },
    body2: {
      fontSize: 12,
      fontWeight: 400,
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
      },
    },
  },
});
