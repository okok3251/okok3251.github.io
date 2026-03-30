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

export const heroPalettes = {
  forest: "linear-gradient(135deg, #132a28 0%, #1f4d49 50%, #4d8778 100%)",
  plum: "linear-gradient(135deg, #221f3f 0%, #3b2f66 48%, #6b4b84 100%)",
  berry: "linear-gradient(135deg, #2b1639 0%, #5a2557 50%, #a14f7c 100%)",
  ocean: "linear-gradient(135deg, #0f2235 0%, #1d4d68 48%, #4d88a8 100%)",
  ember: "linear-gradient(135deg, #2a1a1d 0%, #5a2d3f 46%, #c06b4f 100%)",
} as const;

export type HeroPaletteKey = keyof typeof heroPalettes;

const createTheme = (
  mode: "light" | "dark",
  heroPalette: HeroPaletteKey,
): DefaultTheme => ({
  colors: {
    background: mode === "dark" ? "#0d1117" : "#f8f9fa",
    text: mode === "dark" ? "#f0f6fc" : "#212529",
    border: mode === "dark" ? "#30363d" : "#e0e0e0",
    heroText: "#f6f3f7",
  },
  hero: {
    gradient: heroPalettes[heroPalette],
  },
  shadows: {
    small: mode === "dark" ? "0 1px 3px rgba(0, 0, 0, 0.5)" : "0 1px 3px rgba(0, 0, 0, 0.12)",
    medium: mode === "dark" ? "0 4px 6px rgba(0, 0, 0, 0.6)" : "0 4px 6px rgba(0, 0, 0, 0.15)",
    large: mode === "dark" ? "0 10px 25px rgba(0, 0, 0, 0.8)" : "0 10px 25px rgba(0, 0, 0, 0.2)",
  },
  borderRadius: {
    small: "8px",
    medium: "12px",
    large: "20px",
  },
  fontSizes,
  fontWeights,
});

export const lightTheme: DefaultTheme = createTheme("light", "plum");
export const darkTheme: DefaultTheme = createTheme("dark", "plum");
export const buildTheme = (isDarkMode: boolean, heroPalette: HeroPaletteKey): DefaultTheme =>
  createTheme(isDarkMode ? "dark" : "light", heroPalette);
