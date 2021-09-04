import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";

const app = express();

function maxi(a, b) {
  if (a >= b) return a;
  else return b;
}

app.use(bodyParser.json());

const withDB = async (operations, res) => {
  try {
    const client = await MongoClient.connect(
      "mongodb://localhost:27017",
      { useNewUrlParser: true },
      { useUnifiedTopology: true }
    );
    const db = client.db("my-blog");

    await operations(db);

    client.close();
  } catch (error) {
    res.status(500).json({ message: "Error connecting to db", error });
  }
};

//connecting with local mongo database
app.get("/api/articles/:name", async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name;

    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    res.status(200).json(articleInfo);
  }, res);
});

//incrementing the upvote of the articlesname given by ':name' variable in URL accessed by req.params
//Each time a post request is made, upvote inc by 1
app.post("/api/articles/:name/upvote", async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name;

    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    //query for incrementing vote
    await db.collection("articles").updateOne(
      { name: articleName },
      {
        $set: {
          upvotes: articleInfo.upvotes + 1,
        },
      }
    );

    const updatedArticleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });

    res.status(200).json(updatedArticleInfo);
  }, res);
});

app.post("/api/articles/:name/downvote", async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name;
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });

    await db.collection("articles").updateOne(
      { name: articleName },
      {
        $set: {
          upvotes: articleInfo.upvotes - 1,
        },
      }
    );

    articleInfo.upvotes = maxi(0, articleInfo.upvotes);

    const updatedArticleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });

    res.status(200).json(updatedArticleInfo);
  }, res);
});

app.post("/api/articles/:name/add-comment", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;

  withDB(async (db) => {
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });

    //query for adding comment
    await db.collection("articles").updateOne(
      { name: articleName },
      {
        $set: {
          comments: articleInfo.comments.concat({ username, text }),
        },
      }
    );
    const updatedArticleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });

    res.status(200).json(updatedArticleInfo);
  }, res);
});

// app.put('/api/articles/:name/update-comment', (req,res)=> {

//     const {updateText} = req.body;
//     const articleName = req.params.name;

//     withDB(async (db) => {

//         const articleInfo = await db.collection('articles').findOne({name:articleName});

//         await db.collection('articles').updateOne({name:username}, {
//             '$set' : {
//
//             }
//         })
//     })
// })

app.delete("/api/articles/:name/delete-comment?index={id}", (req, res) => {
  // const articleName = req.params.name;
  // const commentIndex = req.query.index;
  // withDB(async(db) => {
  //     const articleInfo = await db.collection('articles').findOne({name:articleName});
  //     //yaha per index chahiye per kaise milega pta nhi?
  //     //articleInfo.comments = gives artcle commet
  // })
});

app.listen(8000, () => console.log("Listening to the port 8000"));
