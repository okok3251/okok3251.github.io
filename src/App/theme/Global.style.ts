import { createGlobalStyle, keyframes } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

// 애니메이션
export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const bounce = keyframes`
  0%, 60%, 100% { transform: initial; }
  30% { transform: translateY(-10px); }
`;

// 글로벌 스타일
export const GlobalStyle = createGlobalStyle<{theme : DefaultTheme}>`
  @font-face {
    font-family: 'GMarketSans';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
    font-weight: 300;
    font-display: swap;
}

@font-face {
    font-family: 'GMarketSans';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: 500;
    font-display: swap;
}

@font-face {
    font-family: 'GMarketSans';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
    font-weight: 700;
    font-display: swap;
}
    @font-face {
    font-family: 'HealthsetGothic';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.0/HealthsetGothicLight.woff') format('woff');
    font-weight: normal;
    font-display: swap;
}

  :root {
    --bg-color : ${({theme}) => theme.colors.background};
    --text-color : ${({theme}) => theme.colors.text};
    --border-color : ${({theme}) => theme.colors.border};
  }  

  html {
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: 'GMarketSans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    transition: background-color 0.2s ease, color 0.2s ease;
    min-height: 100dvh;
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  ::-webkit-scrollbar {
    display:none;
  }
`;
