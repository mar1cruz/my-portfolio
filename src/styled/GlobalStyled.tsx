import {createGlobalStyle} from "styled-components";

export const GlobalStyled = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background: #041F31;
    color: #BDEBEA;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {

  }
`