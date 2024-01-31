require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const nodemailer = require('nodemailer')
const compression = require('compression');


const Project = require('./models/Thing');
const Comment = require('./models/Comment');

const app = express();

app.use(compression());

app.use(helmet());

mongoose.connect(`mongodb+srv://mathlp:123@cluster0.f5cinxt.mongodb.net/?retryWrites=true&w=majority`)
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


app.get("/", (req, res)=>{
  res.json("hello")
})


app.get('/project', (req, res, next) => {
  Project.find().then(things => res.status(200).json(things)).catch(error => res.status(400).json({error}))
})


app.get('/comment', (req, res, next) => {
  Comment.find().then(things => res.status(200).json(things)).catch(error => res.status(400).json({error}))
})


const transporter = nodemailer.createTransport({
  service: 'gmail', // Utilisez votre service de messagerie
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

app.post('/send', (req, res) => {
  const { name, email, message, projectType, projectUrgency } = req.body;

  const mailOptions = {
      from: email,
      to: process.env.MAIL_USER, // L'email destinataire (peut être le même que l'expéditeur)
      subject: `Nouveau message de ${name}`,
      text: `Message: ${message}\nType de Projet: ${projectType}\nUrgence: ${projectUrgency}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.error('Erreur d\'envoi de mail:', error);
          res.status(500).send('Erreur lors de l\'envoi du mail');
      } else {
          console.log('Email envoyé:', info.response);
          res.status(200).send('Email envoyé avec succès');
      }
  });
});




module.exports = app;