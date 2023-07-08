import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        font-size: 16px;
        box-sizing: border-box;
    }

    body{
        margin: 0;
        padding: 0;
        background-color: #dfdfdf;
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
    }

`

export default GlobalStyle