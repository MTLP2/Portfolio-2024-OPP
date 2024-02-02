import React, { useRef, useEffect } from 'react';


export default function ThreeBox() {


  return (
    <div className='skillBox'>
      <div className='skillBoxUnique'>
        <h3>JavaScript</h3>
        <p>JavaScript est un langage de programmation couramment utilisé pour ajouter des fonctionnalités interactives aux sites web. J'ai utilisé JavaScript pour créer un formulaire de contact interactif sur un site web d'entreprise.</p>
      </div>
      <div className='skillBoxUnique'>
        <h3>React</h3>
        <p>React est une bibliothèque JavaScript populaire pour la création d'interfaces utilisateur interactives. J'ai développé un site web de location de vacances en utilisant React, offrant une expérience de navigation fluide.</p>
      </div>
      <div className='skillBoxUnique'>
        <h3>NodeJS</h3>
        <p>Node.js est une plateforme de développement JavaScript côté serveur. J'ai créé une application de gestion de notation de livres en utilisant Node.js, permettant aux utilisateurs de noter et de commenter des livres. </p>
      </div>
      <div className='skillBoxUnique'>
        <h3>ThreeJS</h3>
        <p>Three.js est une bibliothèque JavaScript qui facilite la création d'animations 3D interactives dans les navigateurs web. J'ai utilisé Three.js pour importer des modèles 3Ds et crées des expériences uniques pour les utilisateurs</p>
      </div>
      <div className='skillBoxUnique'>
        <h3>WordPress</h3>
        <p>WordPress est un système de gestion de contenu (CMS) populaire pour la création de sites web. Possibilité de crée des sites vitrine ou d'e-commerce</p>
      </div>
    </div>
  );
}