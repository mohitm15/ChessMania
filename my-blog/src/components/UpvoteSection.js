import React from "react";
import { Button } from "react-bootstrap";
import { HandThumbsUp, HandThumbsDown } from "react-bootstrap-icons";

const UpvoteSection = ({ articleName, upvotes, setArticleInfo }) => {
  const upvoteArticle = async () => {
    const result = await fetch(`/api/articles/${articleName}/upvote`, {
      method: "post",
    });
    const body = await result.json();
    setArticleInfo(body);
  };

  const downvoteArticle = async () => {
    const result = await fetch(`/api/articles/${articleName}/downvote`, {
      method: "post",
    });
    const body = await result.json();
    setArticleInfo(body);
  };
  return (
    <div id="upvotes-section">
      <Button
        name="Add vote"
        onClick={() => upvoteArticle()}
        variant="outline-success"
      >
        <HandThumbsUp size={24} onClick={() => upvoteArticle} />
      </Button>
      <Button
        name="Remove vote"
        onClick={() => downvoteArticle()}
        variant="outline-danger"
      >
        <HandThumbsDown size={24} />
      </Button>
      <p>{upvotes} Likes</p>
    </div>
  );
};
export default UpvoteSection;
