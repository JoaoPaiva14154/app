const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});


app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added",
  });
});

app.get('/api/posts', (req, res, next) => {
    const posts = [
         { id: '23hr23r8', title: 'First server-side post', author: 'catzilla', content: 'This is coming from the server'},
         { id: 'fd7yfdyf', title: 'Second server-side post', author: 'dogge', content: 'This is also coming from the server'}
    ];
    res.status(200).json({
        message: 'Post sent with success!',
        posts: posts
    });
});

module.exports = app;