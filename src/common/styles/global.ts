import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  html {
    height: 100%;
    width: 100%;
  }

  body {
    height: 100%;
    width: 100%;
    background: #fafafa;
    font-size: 14px;
    overflow-x: hidden;
    overflow-y: hidden;
    border: 0;
    margin: 0;
  }

  p,
  b,
  strong,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
  a,
  label,
  input,
  textarea,
  option,
  select,
  div {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
`;

export default GlobalStyle;
