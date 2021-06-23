import React from 'react';

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
        <button name="Add vote" onClick={()=> upvoteArticle()}>Add Vote</button>
        <p><em>This post has been upvoted {upvotes} times.</em></p>
    </div>

    );
    
}
export default UpvoteSection;