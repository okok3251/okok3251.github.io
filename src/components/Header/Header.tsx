import React from "react";
import * as H from "@/components/Header/Header.style"
import Switch from "./Switch";

interface HeaderProps {
        isDarkMode : boolean;
        onToggleTheme : () => void;
    }


const Header : React.FC<HeaderProps> = ({
    isDarkMode,
    onToggleTheme,
} : HeaderProps) => {

    
    return(
        <H.HeaderContainer>
            <H.HeaderInfo>
            <H.BotInfo>
            </H.BotInfo>
        </H.HeaderInfo>
        <H.HeaderActions>
            <Switch checked={isDarkMode} onChange={onToggleTheme}></Switch>
        </H.HeaderActions>
        </H.HeaderContainer>
    );
}


export default Header; 