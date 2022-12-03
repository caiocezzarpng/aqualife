import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        font-family: 'poppins', sans-serif;
    }

    body {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        background: linear-gradient(68.15deg, #33507d 16.62%, #294cc1 85.61%);

    }
`;

export default Global;
