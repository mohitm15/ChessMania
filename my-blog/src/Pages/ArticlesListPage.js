import React from 'react';
import articleContent from './article-content';
import ArticleList from '../components/ArticleList';

const ArticlesListPage = () => (
    <>
        <h1>Here's the Today's Articles !</h1>
        <ArticleList articlesprops={articleContent}/>
        
    </>
);

export default ArticlesListPage;