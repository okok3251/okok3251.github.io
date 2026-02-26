import React from "react";
import * as A from "./Article.style";

interface ArticleProps {
    children : React.ReactNode;
}

const Article = ({
    children
} : ArticleProps) => {
    return (
        <A.ArticleContainer>
            {children}
        </A.ArticleContainer>
    )
}

export default Article;