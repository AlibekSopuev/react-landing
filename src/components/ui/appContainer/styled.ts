import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.grey.primary_inverted.grey50};
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.globalAppContainerWidth};
  width: 100%;
  margin: 0 auto;
  flex-grow: 1;
`;
