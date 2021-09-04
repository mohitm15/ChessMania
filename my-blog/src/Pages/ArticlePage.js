import React, { useState, useEffect } from "react";
import articleContent from "./article-content";
import NotFoundPage from "./NotFoundPage";

import ArticleList from "../components/ArticleList";
import CommentsList from "../components/CommentsList";
import UpvoteSection from "../components/UpvoteSection";
import AddCommentForm from "../components/AddCommentForm";

const ArticlePage = ({ match }) => {
  //Consuming value from the URL and displaying the relative article from the article-content file
  const name = match.params.name;
  const displayArticle = articleContent.find(
    (displayArticle) => displayArticle.name === name
  );

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  //fetching from data
  useEffect(() => {
    //fecting data from server
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      //console.log(body);
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  //if article does not exist
  if (!displayArticle) return <NotFoundPage />;

  //filter out the other articles to pass thorugh the props in articleList
  const otherArticles = articleContent.filter(
    (displayArticle) => displayArticle.name !== name
  );

  return (
    <>
      <h1>{displayArticle.title} </h1>
      <br />
      {displayArticle.content.map((item, key) => (
        <p key={key}>{item}</p>
      ))}
      <UpvoteSection
        articleName={name}
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}
      />
      <div>
        <CommentsList comments={articleInfo.comments} />
        <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      </div>
      <hr />
      <h3>Other Articles:</h3>
      <ArticleList articlesprops={otherArticles} />
    </>
  );
};

export default ArticlePage;
