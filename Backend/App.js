const express = require('express');
const auth = require('./middlewares/auth');
const mongoose = require('mongoose');
const Project = require('./models/Thing');
const Comment = require('./models/Comment');

const app = express();


mongoose.connect('mongodb+srv://mathlp:123@cluster0.f5cinxt.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(express.json())

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.get('/project', (req, res, next) => {
  Project.find().then(things => res.status(200).json(things)).catch(error => res.status(400).json({error}))
})


app.get('/comment', (req, res, next) => {
  Comment.find().then(things => res.status(200).json(things)).catch(error => res.status(400).json({error}))
})



app.post('/contact', (req,res,next)=>{
    res.end('oui')
})



module.exports = app;