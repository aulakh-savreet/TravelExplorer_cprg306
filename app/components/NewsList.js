'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

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

  if (loading) return <p>Loading news...</p>;
  if (error) return <p>{error}</p>;
  if (articles.length === 0) return <p>No news articles found.</p>;

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-2">Latest News in {countryName}</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index} className="mb-4">
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              <h3 className="text-xl font-semibold">{article.title}</h3>
            </a>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
