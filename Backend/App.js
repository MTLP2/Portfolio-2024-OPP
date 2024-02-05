require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const nodemailer = require('nodemailer')
const compression = require('compression');
const cors = require('cors')

const Project = require('./models/Thing');
const Comment = require('./models/Comment');

const app = express();

app.use(compression());

app.use(helmet());

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(express.json())
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.get("/", (req, res)=>{
  res.json("hello")
})


app.get('/api/project', (req, res, next) => {
  Project.find().then(things => res.status(200).json(things)).catch(error => res.status(400).json({error}))
})


app.get('/api/comment', (req, res, next) => {
  Comment.find().then(things => res.status(200).json(things)).catch(error => res.status(400).json({error}))
})


const transporter = nodemailer.createTransport({
  host: 'mail.matheolopes.com', // Remplace par ton domaine
  port: 587, // Port SMTP standard pour la soumission de mails
  secure: false, // Pour le port 587, cette option doit être false
  auth: {
    user: 'matheo@matheolopes.com', // Ton adresse email complète
    pass: 'DCRvDbxfwc' // Ton mot de passe
  }
});

app.post('/api/send', (req, res) => {
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

app.listen(8800, ()=>{
  console.log("Backend server is running!");
})


module.exports = app;