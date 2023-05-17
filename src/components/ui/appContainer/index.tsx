import React from 'react';
import { Layout, Container } from './styled';
import { AppHeader } from '../../../features/main/header';
import { Footer } from '../../../features/main/footer';

export const GlobalAppContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Layout>
      <AppHeader />
      <Container>{children}</Container>
      <Footer />
    </Layout>
  );
};
