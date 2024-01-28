const Project = require('../models/Thing')


exports.createThings = (req, res, next) => {
    const project = new Project({
        ...req.body

    });
  
    project.save()
    .then(() => { res.status(201).json({message: 'Objet enregistré !'})})
    .catch(error => { res.status(400).json( { error })})
 };