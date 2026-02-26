import React from "react";
import Router from '../routes';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/Global.style";
import { useThemeStore } from "@/store/ThemeStore";

const App: React.FC = () => {
    const theme = useThemeStore(state => state.theme)    
    return(
    <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme}/>
        <Router/>
    </ThemeProvider>
    )
}

export default App;
