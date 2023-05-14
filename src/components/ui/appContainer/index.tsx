import React from 'react';
import { Layout, Container } from './styled';

export const GlobalAppContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Layout>
      <Container>{children}</Container>
    </Layout>
  );
};
