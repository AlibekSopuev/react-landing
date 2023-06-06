import React from 'react';
import { ToastContainer } from 'react-toastify';
import { AppThemeProvider } from './context/themeContetxt';
import { GlobalAppContainer } from './components/ui/appContainer';
import { GlobalStyle } from './styles/global';
import Banner from './features/main/banner';
import Calculator from './features/main/calculator';
import ModalForm from './features/main/modalForm';
import ProductBenefits from './features/main/productBenefits';
import Advantages from './features/main/advantages';
import Purposes from './features/main/purposes';
import Instructions from './features/main/instructions';
import Application from './features/main/application';
import Questions from './features/main/questions';

function App() {
  return (
    <AppThemeProvider>
      <GlobalAppContainer>
        <GlobalStyle />
        <Banner />
        <Calculator />
        <ModalForm />
        <ProductBenefits />
        <Advantages />
        <Purposes />
        <Instructions />
        <Application />
        <Questions />
        <ToastContainer position='top-center' />
      </GlobalAppContainer>
    </AppThemeProvider>
  );
}

export default App;
