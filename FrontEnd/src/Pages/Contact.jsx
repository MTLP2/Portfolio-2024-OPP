import React from 'react';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import {Helmet} from "react-helmet";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ContactForm = () => {

    useEffect(() => {
        document.documentElement.scrollTo(0, 0);
      }, [location.pathname]);

    const [isSubmitted, setIsSubmitted] = useState(false); // État pour gérer la confirmation

    // États initiaux étendus pour inclure les menus déroulants
    const initialValues = {
        name: '',
        email: '',
        message: '',
        projectType: '', // Nouveau champ pour le type de projet
        projectUrgency: '' // Nouveau champ pour l'urgence du projet
    };

    // Étendre la fonction de validation pour inclure les nouveaux champs
    const validate = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Email requis';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Adresse email invalide';
        }
        if (!values.projectType) {
            errors.projectType = 'Type de projet requis';
        }
        if (!values.projectUrgency) {
            errors.projectUrgency = 'Urgence du projet requise';
        }
        return errors;
    };
    
    // Fonction appelée lors de la soumission du formulaire
    const onSubmit = (values, { setSubmitting }) => {
        
        // Envoi des données du formulaire via Axios
        axios.post('https://matheolopes.com/api/send', values)
        .then(response => {
            console.log('Message envoyé', response); // Traitement en cas de succès
            setSubmitting(false); // Mise à jour de l'état de soumission
            setIsSubmitted(true)
        })
        .catch(error => {
            console.error('Erreur d\'envoi', error); // Traitement en cas d'erreur
            setSubmitting(false); // Mise à jour de l'état de soumission
            setIsSubmitted(false)
        });
    };

    return (
      <div className='principalContainer contactSection'>
        <Helmet>
        <title>Contactez Matheo Lopes | Developer Web</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
        <div className="contactInfo">
          <h2 className='titleSection'>Work with Me</h2>
          <p>Êtes-vous prêt à propulser votre présence en ligne avec un développement web sur mesure qui dynamisera votre entreprise et rehaussera votre image de marque ? <br /> <br />
          Profitez d'un rendez-vous initial et d'un devis gratuits pour discuter de vos idées et voir comment nous pouvons les réaliser ensemble. <br /> <br />
          Pour planifier votre consultation sans engagement, remplissez ce formulaire ou, si vous préférez une approche directe, envoyez-moi un email à matheo@matheolopes.com.</p>

        </div>
        <div className="formInfo">
          <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
            <Form>
                <label htmlFor="name">Nom</label>
                <Field className="Field" type="text" name="name" placeholder="Full name" />
                <ErrorMessage name="name" component="div" />

                <label htmlFor="email">Email</label>
                <Field className="Field" type="email" name="email" placeholder="you@xyz.com" />
                <ErrorMessage name="email" component="div" />

                <label htmlFor="message">Message</label>
                <Field className="Field Field-message" as="textarea" name="message" placeholder="Enter here..." />
                <ErrorMessage name="message" component="div" />

                {/* Menu déroulant pour le type de projet */}
                <label htmlFor="projectType">Type de Projet</label>
                <Field className="Field" as="select" name="projectType">
                    <option value="">Sélectionnez le type de projet</option>
                    <option value="web">Développement Web</option>
                    <option value="web">Integration web</option>
                    <option value="mobile">3D Web Développement</option>
                    <option value="mobile">WordPress/Prestashop</option>
                    <option value="autre">Autre</option>
                </Field>
                <ErrorMessage name="projectType" component="div" />

                {/* Menu déroulant pour l'urgence du projet */}
                <label htmlFor="projectUrgency">Urgence du Projet</label>
                <Field className="Field" as="select" name="projectUrgency">
                    <option value="">Sélectionnez l'urgence</option>
                    <option value="basse">Basse</option>
                    <option value="moyenne">Moyenne</option>
                    <option value="haute">Haute</option>
                </Field>
                <ErrorMessage name="projectUrgency" component="div" />

                <button className='defaultButton' type="submit">Envoyer</button>
                {/* Message de confirmation */}
                {isSubmitted && <p className='validatetext'>Votre message a été envoyé avec succès !</p>}
            </Form>
          </Formik>
        </div>
      </div>
    )
}

export default ContactForm;
