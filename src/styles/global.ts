import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html, body {
    font-family: 'PT Root UI Regular', Roboto, sans-serif;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }
`;
