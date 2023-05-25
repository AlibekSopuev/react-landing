import React from 'react';
import { AppThemeProvider } from './context/themeContetxt';
import { GlobalAppContainer } from './components/ui/appContainer';
import Main from './features/main';

function App() {
  return (
    <AppThemeProvider>
      <GlobalAppContainer>
        <React.Suspense fallback='...загрузка'>
          <Main />
        </React.Suspense>
      </GlobalAppContainer>
    </AppThemeProvider>
  );
}

export default App;
