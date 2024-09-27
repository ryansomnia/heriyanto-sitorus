import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    scroll-behavior: smooth;
  }

  h1, h2, h3 {
    margin: 0;
  }
`;

export default GlobalStyle;
