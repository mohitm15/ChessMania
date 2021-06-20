import React from 'react';
import articleContent from './article-content';
import {Link} from 'react-router-dom';

const ArticlesList = () => (
    <>
        <h1>Here's the Today's Articles !</h1>

        {articleContent.map((item,key) => (
            <Link key={key} to={`/article/${item.name}`} className="article-list-item">
                    <h3>{item.title}</h3>
                    <p>{item.content[0].substring(0, 150)}...</p>
            </Link>
        ))}
    </>
);

export default ArticlesList;