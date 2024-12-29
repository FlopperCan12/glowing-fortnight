const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost/social-network', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a Post model
const Post = mongoose.model('Post', new mongoose.Schema({
    content: String,
    likes: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
}));

// Endpoint to create a new post
app.post('/posts', async (req, res) => {
    const newPost = new Post({ content: req.body.content });
    await newPost.save();
    res.status(201).send(newPost);
});

// Endpoint to get all posts
app.get('/posts', async (req, res) => {
    const posts = await Post.find();
    res.status(200).send(posts);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
