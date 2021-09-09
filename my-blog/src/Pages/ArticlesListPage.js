import React, { useEffect } from "react";
import articleContent from "./article-content";
import ArticleList from "../components/ArticleList";

const ArticlesListPage = () => {
  useEffect(() => {
    document.title = "ChessMania - Articles";
  }, []);

  return (
    <>
      <h1 className='topheading'>Here's the Today's Articles !</h1>
      <br />
      <hr />
      <ArticleList articlesprops={articleContent} />
    </>
  );
};

export default ArticlesListPage;
