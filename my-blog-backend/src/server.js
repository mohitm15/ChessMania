import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';


const app = express();


app.use(bodyParser.json());

//connecting with local mongo database
app.get('/api/articles/:name', async (req,res)=> {
    try {
        const articleName = req.params.name;

        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
        const db = client.db('my-blog');
    
        const articleInfo = await db.collection('articles').findOne({ name:articleName});
        res.status(200).json(articleInfo);
    
        client.close();
    }
    catch(error) {
        res.status(500).json({ message:'Error connecting to db',error})
    }
})



//incrementing the upvote of the articlesname given by ':name' variable in URL
//each time a post request is made, upvote inc by 1

app.post('/api/articles/:name/upvote',(req,res)=> {
    const articleName = req.params.name;
    articleInfo[articleName].upvotes +=1;
    res.status(200).send(`${articleName} has now ${articleInfo[articleName].upvotes} upvotes!.`)

})

app.post('/api/articles/:name/add-comment', (req, res) => {
    
    const { username, text } = req.body;
    const articleName = req.params.name;
    
    articleInfo[articleName].comments.push({ username, text });

    res.status(200).send(articleInfo[articleName]);
});


app.listen(8000,()=>console.log("Listening to the port 8000"));