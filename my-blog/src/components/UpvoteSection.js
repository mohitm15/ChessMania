import React from 'react';
import { Button } from 'react-bootstrap';

const UpvoteSection = ({articleName , upvotes, setArticleInfo}) => {

    const upvoteArticle = async () => {
        const result = await fetch(`/api/articles/${articleName}/upvote`,{
            method:'post',
        });
        const body = await result.json();
        setArticleInfo(body);
    }

    return (
    <div id="upvotes-section">
        <Button name="Add vote" onClick={()=> upvoteArticle()} variant="outline-danger">Like</Button>
        <p> {upvotes} Likes</p>
    </div>

    );
    
}
export default UpvoteSection;