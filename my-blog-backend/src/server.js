import express from 'express';

const app = express();

const articleInfo = {
    'learn-react': {
        upvotes: 0,
        //comments:[],
    },
    'learn-node': {
        upvotes: 0,
        // comments:[],
    },
    'my-thoughts-on-resumes': {
        upvotes: 0,
        // comments:[],
    },
}

//incrementing the upvote of the articlesname given by ':name' variable in URL
//each time a post request is made, upvote inc by 1

app.post('/api/articles/:name/upvote',(req,res)=> {
    const articleName = req.params.name;
    articleInfo[articleName].upvotes +=1;
    res.status(200).send(`${articleName} has now ${articleInfo[articleName].upvotes} upvotes!.`)

})

// app.post('/api/articles/:name/add-comment', (req, res) => {
    
    
//     const articleName = req.params.name;
//     const { username, text } = req.body;
    
//     articlesInfo[articleName].comments.push({ username, text });

//     res.status(200).send(articlesInfo[articleName]);
// });


app.listen(8000,()=>console.log("Listening to the port 8000"));