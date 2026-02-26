import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Article from "../Article/Article";
import { LayoutContainer } from "./Layout.style";
import Header from "../Header/Header";
import { useThemeStore } from "@/store/ThemeStore";

interface Child {
    children : React.ReactNode;
}

const Layout : React.FC<Child> = ({children} : Child) => {

    const {
        isDarkMode,
        toggleTheme
    } = useThemeStore();

    return(
        <LayoutContainer>
            <Sidebar></Sidebar>
            <Article>
                <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme}/>
                {children}
            </Article>
        </LayoutContainer>
    )

};


export default Layout;