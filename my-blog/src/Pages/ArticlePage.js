import React from 'react';
import articleContent from './article-content';

const ArticlePage = ({match}) => {

    const name = match.params.name;
    const displayArticle = articleContent.find(displayArticle => displayArticle.name === name);
    
    //if article does not exist
    if(!displayArticle) return<h1>Article does not exist !</h1>

    return (
        <>
            <h1>{displayArticle.title} </h1>

                {displayArticle.content.map(item=>(<p key={item.name}>{item}</p> ))}
            
        </>
    )
};

export default ArticlePage;