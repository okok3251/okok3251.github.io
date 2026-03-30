import React from "react";
import Router from '../routes';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/Global.style";
import { useThemeStore } from "@/store/ThemeStore";
import { buildTheme } from "./theme/theme";

const App: React.FC = () => {
    const isDarkMode = useThemeStore(state => state.isDarkMode)
    const heroPalette = useThemeStore(state => state.heroPalette)
    const theme = buildTheme(isDarkMode, heroPalette)
    return(
    <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme}/>
        <Router/>
    </ThemeProvider>
    )
}

export default App;
