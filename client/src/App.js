
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import generalTheme from './styles/general-theme';

import store from './store';
import Router from './routing/router'

const App = () => (
  <ThemeProvider theme={generalTheme}>
    <CssBaseline>
    <ReduxProvider store={store}>
      <Router />
      </ReduxProvider>
  </CssBaseline>
  </ThemeProvider>
  
)
export default App;