import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 10px;
        padding: 0;
        margin: 0;
    }
    html,
    body {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        min-height: 100svh;
        min-width: 100vw;
        height: 100vh;
        max-height: 100vh;
        max-height: 100svh;
        height: -webkit-fill-available;

        font-family: 'Mulish', sans-serif;
        font-size: 10px;
        font-size: 1.6rem;
        margin: 0;
        background-color: rgb(4, 24, 2);
        
        color: rgb(230, 248, 250);
        padding: 2rem;
        position: relative;
       
    }

    button {
        border: none;
        background-color: rgba(0, 0, 0, 0);
        color: rgb(230, 248, 250);
        cursor: pointer;
    }


`;

export default GlobalStyle;
