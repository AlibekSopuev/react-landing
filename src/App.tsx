import React from 'react';
import { GlobalStyle } from './styles/global';
import { AppThemeProvider } from './context/themeContetxt';
import { AppLayoutProvider } from './context/layoutContext';
import { GlobalAppContainer } from './components/ui/appContainer';
import Main from './features/main';

function App() {
  return (
    <AppLayoutProvider>
      <AppThemeProvider>
        <GlobalAppContainer>
          <GlobalStyle />
          <React.Suspense fallback='...загрузка'>
            <Main />
          </React.Suspense>
        </GlobalAppContainer>
      </AppThemeProvider>
    </AppLayoutProvider>
  );
}

export default App;
