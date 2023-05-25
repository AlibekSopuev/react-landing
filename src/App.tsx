import React from 'react';
import { AppThemeProvider } from './context/themeContetxt';
import { GlobalAppContainer } from './components/ui/appContainer';
import { GlobalStyle } from './styles/global';
import Banner from './features/main/banner';
import Calculator from './features/main/calculator';
import ModalForm from './features/main/modalForm';
const ProductBenefits = React.lazy(() => import('src/features/main/productBenefits'));
const Advantages = React.lazy(() => import('src/features/main/advantages'));
const Purposes = React.lazy(() => import('src/features/main/purposes'));
const Instructions = React.lazy(() => import('src/features/main/instructions'));
const Application = React.lazy(() => import('src/features/main/application'));
const Questions = React.lazy(() => import('src/features/main/questions'));

function App() {
  return (
    <AppThemeProvider>
      <GlobalAppContainer>
        <GlobalStyle />
        <Banner />
        <Calculator />
        <ModalForm />
        <React.Suspense fallback=''>
          <ProductBenefits />
        </React.Suspense>
        <React.Suspense fallback=''>
          <Advantages />
        </React.Suspense>
        <React.Suspense fallback=''>
          <Purposes />
        </React.Suspense>
        <React.Suspense fallback=''>
          <Instructions />
        </React.Suspense>
        <React.Suspense fallback=''>
          <Application />
        </React.Suspense>
        <React.Suspense fallback=''>
          <Questions />
        </React.Suspense>
      </GlobalAppContainer>
    </AppThemeProvider>
  );
}

export default App;
