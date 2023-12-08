import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
const geometry = {
  headerWidth: '50%',
  headerMinWidth: '300px',
  headerHeight: '70px',
  headerBorderWidth: '10px',
  headerAfterWidth: '30%',
};
const colors = {
  white: '#fff',
  quicksand: 'Quicksand, sans-serif',
  hoverColor: '#faa',
  insetShadowColor: 'rgba(0, 0, 0, 0.25)',
  borderColor: '#fffa',
};
const theme = {
  geometry,
  colors,
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
