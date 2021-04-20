import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 14px;
    line-height: 17px;
    font-family: 'Inter', sans-serif;
  }
  *,*:before,*:after{
    box-sizing:border-box;
  }
  a{
    text-decoration:none;
    color:inherit;
  }
`

export default GlobalStyle;