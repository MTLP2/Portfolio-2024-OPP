import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedAndLatestArticles() {
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [latestArticles, setLatestArticles] = useState([]);

  useEffect(() => {
    // Fonction pour récupérer les articles
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://admindash.matheolopes.com/api/article/previews');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des articles');
        }
        const data = await response.json();

        // Trouver l'article "À l'affiche" (avec le tag "Populaire")
        const popularArticle = data.find(article => article.tags.includes('Populaire'));
        setFeaturedArticle(popularArticle);

        // Trier les articles pour obtenir les trois derniers
        const sortedArticles = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setLatestArticles(sortedArticles.slice(0, 3));
      } catch (error) {
        console.error('Erreur:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className='flex flex-col w-full h-full gap-5'>
      {featuredArticle && (
        <>
          <h2 className='text-4xl font-[Rubik] text-gray-400'>À l’affiche</h2>
          <Link to={`/Le-Blog/article/${featuredArticle.slugNavigation}`} className='flex flex-col gap-4'>
            <img className='w-full h-[200px] object-cover rounded-2xl shadow-md' src={featuredArticle.mainImageUrl} alt={featuredArticle.mainTitle} />
            <h4 className='w-[80%] font-[RubikBold] text-[#f8496cc0]'>{featuredArticle.mainTitle}</h4>
          </Link>
        </>
      )}

      <div className='flex flex-col gap-4 mt-10'>
        <h2 className='text-2xl font-[Rubik] text-gray-400'>Derniers articles</h2>
        <div className='flex flex-col gap-10'>
          {latestArticles.map((article, i) => (
            <Link to={`/Le-Blog/article/${article.slugNavigation}`} className='flex gap-6 items-center' key={i}>
              <img className='w-[20%] h-[20%] object-cover rounded-lg shadow-md' src={article.mainImageUrl} alt={article.mainTitle} />
              <div className='flex flex-col'>
                <h4 className='w-[80%] font-[Rubik] text-[#f8496cc0]'>{article.mainTitle}</h4>
                <p className='text-[14px] font-bold uppercase'>
                  {new Date(article.updatedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
