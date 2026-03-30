import React from "react";
import * as H from "@/components/Header/Header.style"

const Header : React.FC = () => {
    return(
        <H.HeaderContainer>
            <H.Inner>
                <H.Brand to="/">
                    <H.BrandText></H.BrandText>
                </H.Brand>

                <H.Nav>
                    <H.NavLink to="/">HOME</H.NavLink>
                    <H.NavLink to="/about">ABOUT</H.NavLink>
                    <H.NavLink to="/blog">BLOG</H.NavLink>
                    <H.NavLink to="/portfolio">PORTFOLIO</H.NavLink>
                </H.Nav>
            </H.Inner>
        </H.HeaderContainer>
    );
}


export default Header; 
