import express from 'express';

const app = express();

const articleInfo = {
    'learn-react': {
        upvotes: 0,
    },
    'learn-node': {
        upvotes: 0,
    },
    'my-thoughts-on-resumes': {
        upvotes: 0,
    },
}

//incrementing the upvote of the articlesname given by ':name' variable in URL
//each time a post request is made, upvote inc by 1

app.post('/api/articles/:name/upvote',(req,res)=> {
    const articleName = req.params.name;
    articleInfo[articleName].upvotes +=1;
    res.status(200).send(`${articleName} has now ${articleInfo[articleName].upvotes} upvotes.`)

})

app.listen(8000,()=>console.log("Listening to the port 8000"));