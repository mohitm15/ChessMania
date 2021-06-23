import React,{useState, useEffect } from 'react';
import articleContent from './article-content';
import ArticleList from '../components/ArticleList';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({match}) => {

    //Consuming value from the URL and displaying the relative article from the article-content file
    const name = match.params.name;
    const displayArticle = articleContent.find(displayArticle => displayArticle.name === name);
    
    const [articleInfo,setArticleInfo] = useState({ upvotes:0, comments:[] });

    //fetching from data
    useEffect(()=>{
        //setArticleInfo({upvotes:Math.ceil(Math.random()*10)});
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            //console.log(body);
            setArticleInfo(body);
        }
        fetchData();

    },[name]);


    //if article does not exist
    if(!displayArticle) return <NotFoundPage/>

    //filter out the other articles to pass thorugh the props in articleList
    const otherArticles = articleContent.filter(displayArticle => displayArticle.name !== name);


    return (
        <>
            <h1>{displayArticle.title} </h1>
            <p><em>This post has been upvoted {articleInfo.upvotes} times.</em></p>
                {displayArticle.content.map((item,key)=>(<p key={key}>{item}</p> ))}
            <hr/>
            <ArticleList articlesprops={otherArticles} />
        </>
    )
};

export default ArticlePage;