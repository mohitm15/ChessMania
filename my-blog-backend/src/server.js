import express from 'express';

const app = express();

app.get('/hello',(req,res)=>res.send("Hello Everyone !"));

app.listen(8000,()=>console.log("Listening to the port 8000"));