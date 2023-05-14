import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.grey.primary_inverted.grey50};
`;

export const Container = styled.div`
  width: 100%;
  padding: 12px 16px;
`;
