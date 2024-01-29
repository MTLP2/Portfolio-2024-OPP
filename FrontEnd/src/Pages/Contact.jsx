import React from 'react';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

const ContactForm = () => {
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
        axios.post('http://localhost:4000/send', values)
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
        <div className="contactInfo">
          <h2 className='titleSection'>Work with Me</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dicta consequuntur libero iure, veniam tenetur neque a, cum veritatis magnam minima molestiae at nobis est expedita officiis quis non error commodi quasi nulla odio laborum odit praesentium! Magni obcaecati voluptas commodi iusto a, ducimus ipsa veritatis, explicabo quae omnis nesciunt dignissimos quas porro architecto eius illo fuga! Ea ex nam expedita, fugit vel dolor deserunt ut harum! Laborum illum reiciendis earum eum facilis incidunt ad, quam harum! Maiores ipsa voluptas odio commodi asperiores dolorum unde sit deleniti, laudantium voluptatem accusamus alias. Nesciunt nihil natus amet voluptatem minus corrupti necessitatibus pariatur.</p>

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
                    <option value="mobile">Développement Mobile</option>
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
