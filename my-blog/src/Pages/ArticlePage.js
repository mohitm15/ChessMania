import React from 'react';
import articleContent from './article-content';
import ArticleList from '../components/ArticleList';

const ArticlePage = ({match}) => {

    //Consuming value from the URL and displaying the relative article from the article-content file
    const name = match.params.name;
    const displayArticle = articleContent.find(displayArticle => displayArticle.name === name);
    
    //if article does not exist
    if(!displayArticle) return<h1>Article does not exist !</h1>

    //filter out the other articles to pass thorugh the props in articleList
    const otherArticles = articleContent.filter(displayArticle => displayArticle.name !== name);


    return (
        <>
            <h1>{displayArticle.title} </h1>

                {displayArticle.content.map(item=>(<p key={item.name}>{item}</p> ))}
            <hr/>
            <ArticleList articlesprops={otherArticles} />
        </>
    )
};

export default ArticlePage;