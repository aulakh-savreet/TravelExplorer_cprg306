'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';


export default function NewsList({ countryName }) {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (countryName) {
      const fetchNews = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            `https://gnews.io/api/v4/search`,
            {
              params: {
                q: countryName,
                token: process.env.NEXT_PUBLIC_GNEWS_API_KEY,
                lang: 'en',
                max: 5,
              },
            }
          );
          setArticles(response.data.articles);
          setError(null);
        } catch (err) {
          console.error('Error fetching news articles:', err);
          setError('Failed to fetch news articles.');
          setArticles([]);
        } finally {
          setLoading(false);
        }
      };

      fetchNews();
    }
  }, [countryName]);

  if (loading) return <p className="text-center">Loading news...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;
  if (articles.length === 0) return <p className="text-center">No news articles found.</p>;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Latest News in {countryName}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white shadow rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            {article.image && (
              <Image 
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <p className="text-sm text-gray-500">{new Date(article.publishedAt).toLocaleDateString()}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
