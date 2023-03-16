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
        box-sizing: border-box;
        min-height: 100vh;
        min-width: 100vw;
        max-height: 100vh;
        max-width: 100vw;
        font-family: 'Mulish', sans-serif;
        font-size: 10px;
        font-size: 1.6rem;
        margin: 0;
        background-image: linear-gradient(
            180deg,
            hsl(130deg 11% 11%) 0%,
            hsl(129deg 14% 15%) 50%,
            hsl(128deg 15% 19%) 100%
        );
        color:#E2E8E2;
       
    }


`;

export default GlobalStyle;
