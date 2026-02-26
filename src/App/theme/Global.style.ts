import { createGlobalStyle, keyframes } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";


export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const bounce = keyframes`
  0%, 60%, 100% {
    transform: initial;
  }
  30% {
    transform: translateY(-10px);
  }
`;

// 글로벌 스타일

export const GlobalStyle = createGlobalStyle<{theme : DefaultTheme}>`
  :root {
    --bg-color : ${({theme}) => theme.colors.background};
    --text-color : ${({theme}) => theme.colors.text};
  }  

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  ::-webkit-scrollbar {
    display:none;
  }
`;