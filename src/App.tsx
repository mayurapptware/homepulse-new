import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePulseLanding from './components/HomePulseLanding';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4A90E2',
    },
    secondary: {
      main: '#F5A623',
    },
    background: {
      default: '#1A1A1A',
      paper: '#1A1A1A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#CCCCCC',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '12px 24px',
          fontSize: '1rem',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePulseLanding />
    </ThemeProvider>
  );
}

export default App;