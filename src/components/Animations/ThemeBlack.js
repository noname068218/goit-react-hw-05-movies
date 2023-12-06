// UseThemeBG.js
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import Button from '@mui/material';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const UseThemeBG = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div>
        <Button onClick={toggleTheme}>
          Переключити тему: {isDarkMode ? 'Світла' : 'Темна'}
        </Button>
      </div>
    </ThemeProvider>
  );
};
