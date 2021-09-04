import React from "react";
import { Link } from "react-router-dom";

//this display the articles with input: datafile pass as props in the ArticleListPage file

const ArticleList = ({ articlesprops }) => (
  <>
    {articlesprops.map((item, key) => (
      <Link
        key={key}
        to={`/article/${item.name}`}
        className="article-list-item"
      >
        <h3>{item.title}</h3>
        <p>{item.content[0].substring(0, 150)}...</p>
      </Link>
    ))}
    <div></div>
  </>
);

export default ArticleList;
