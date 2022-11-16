import React from "react";
import Navigation from "../components/Navigation";
import ArticleHeader from "../components/ArticleItem/ArticleHeader";
import ArticleMain from "../components/ArticleItem/ArticleMain";
import Footer from '../components/Footer'

function ArticlePage () {
    return (
        <div className="article-page">
            <Navigation />
            <ArticleHeader />
            <ArticleMain />
            <Footer />
        </div>
    )
}

export default ArticlePage