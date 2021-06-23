import React from'react';

const CommentsList=({comments})=> (
   <>
   <h3>Comments:</h3>
    {comments.map((item,key)=>(
        <div className="comment" key={key}>
            <h4>{item.username}</h4>
            <p>{item.text}</p>
        </div>
    ))}
    </>
);

export default CommentsList;