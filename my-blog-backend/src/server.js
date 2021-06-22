import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';


const app = express();


app.use(bodyParser.json());

const withDB = async (operations,res) => {
    try {
        
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
        const db = client.db('my-blog');
    
        await operations(db);
    
        client.close();
    }
    catch(error) {
        res.status(500).json({ message:'Error connecting to db',error})
    }
}

//connecting with local mongo database
app.get('/api/articles/:name', async (req,res)=> {

        withDB(async (db) => {
            
            const articleName = req.params.name;

            const articleInfo = await db.collection('articles').findOne({ name:articleName});
            res.status(200).json(articleInfo);
        },res);

    
})



//incrementing the upvote of the articlesname given by ':name' variable in URL
//each time a post request is made, upvote inc by 1

app.post('/api/articles/:name/upvote', async (req,res)=> {

        withDB(async (db) => {
    
            const articleName = req.params.name;
    
            const articleInfo = await db.collection('articles').findOne({name:articleName});
            //query for incrementing vote
            await db.collection('articles').updateOne({name:articleName}, {
                '$set': {
                    upvotes:articleInfo.upvotes + 1,
                }
            });
        
            const updatedArticleInfo = await db.collection('articles').findOne({name:articleName});
        
            res.status(200).json(updatedArticleInfo);
        },res);

})

app.post('/api/articles/:name/add-comment', (req, res) => {
    
    const { username, text } = req.body;
    const articleName = req.params.name;
    
    articleInfo[articleName].comments.push({ username, text });

    res.status(200).send(articleInfo[articleName]);
});


app.listen(8000,()=>console.log("Listening to the port 8000"));