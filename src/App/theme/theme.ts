import { DefaultTheme } from "styled-components/dist/types";


const fontSizes = {
  xsm: "0.75rem",
  sm: "0.88rem",
  md: "1rem",    
  lg: "1.25rem", 
  xl: "1.5rem",  
  xxl: "2rem",   
} as const;



const fontWeights = {
    extraBold: 800,
    bold: 700,
    semiBold: 600,
    regular: 400,
} as const


export const lightTheme: DefaultTheme = {
  colors: {
    background: '#f8f9fa',
    text: '#212529',
    border: '#e0e0e0',
  },
  shadows: {
    small: '0 1px 3px rgba(0, 0, 0, 0.12)',
    medium: '0 4px 6px rgba(0, 0, 0, 0.15)',
    large: '0 10px 25px rgba(0, 0, 0, 0.2)',
  },
  borderRadius: {
    small: '8px',
    medium: '12px',
    large: '20px',
  },
  fontSizes,
  fontWeights
};

export const darkTheme: DefaultTheme = {
  colors: {
    background: '#0d1117',
    text: '#f0f6fc',
    border: '#30363d',
  },
  shadows: {
    small: '0 1px 3px rgba(0, 0, 0, 0.5)',
    medium: '0 4px 6px rgba(0, 0, 0, 0.6)',
    large: '0 10px 25px rgba(0, 0, 0, 0.8)',
  },
  borderRadius: {
    small: '8px',
    medium: '12px',
    large: '20px',
  },
  fontSizes,
  fontWeights
};


