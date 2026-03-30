import React from "react";
import Article from "../Article/Article";
import { LayoutContainer } from "./Layout.style";
import Header from "../Header/Header";

interface Child {
    children : React.ReactNode;
}

const Layout : React.FC<Child> = ({children} : Child) => {
    return(
        <LayoutContainer>
            <Article>
                <Header />
                {children}
            </Article>
        </LayoutContainer>
    )

};


export default Layout;
