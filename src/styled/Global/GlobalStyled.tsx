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
    max-width: 1060px;
    padding-right: 20px;
    padding-left: 20px;
    margin: 0 auto;
    background: #041F31;
    color: #BDEBEA;
  }
`