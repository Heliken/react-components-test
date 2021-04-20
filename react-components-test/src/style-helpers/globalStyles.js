import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap");
  body {
    font-size: 14px;
    line-height: 17px;
    font-family: 'Inter', sans-serif;
  }
  *,*:before,*:after{
    box-sizing:border-box;
  }
`

export default GlobalStyle;