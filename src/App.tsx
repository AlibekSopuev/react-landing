import React from 'react';
import { RouterProvider } from 'react-router';
import AppRouter from './router/router';
import { GlobalStyle } from './styles/global';
import { AppThemeProvider } from './context/themeContetxt';
import { AppLayoutProvider } from './context/layoutContext';
import { GlobalAppContainer } from './components/ui/appContainer';

function App() {
  return (
    <AppLayoutProvider>
      <AppThemeProvider>
        <GlobalAppContainer>
          <GlobalStyle />
          <React.Suspense fallback='...загрузка'>
            <RouterProvider router={AppRouter} />
          </React.Suspense>
        </GlobalAppContainer>
      </AppThemeProvider>
    </AppLayoutProvider>
  );
}

export default App;
