"use client"
import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../../components/Card.js'
import Navbar from '../../components/Navbar.jsx'

import Link from 'next/link'

export default function SearchResults({params}) {
  const { id } = React.use(params)
  const [animeResults, setAnimeResults] = useState([]);

  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchAnime = async () => {
        try {
          const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${id}`);
          setAnime(response.data.data); // Store anime details in state
        } catch (error) {
          console.error('Error fetching anime details:', error);
        }
      };
      fetchAnime();
    }
  }, [id]);

  if (!anime) return (
    <div className="loading-overlay">
        <div className="spinner"></div>
        <style jsx>{`
          .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
          }
          .spinner {
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top: 4px solid #fff;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
  );





  return (
   
<div className="container mx-auto p-4">
	  <Navbar/>
      <h1 className="text-2xl font-bold mb-4">{id}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {anime.map((anime) => (
          <div key={anime.mal_id} className="border rounded shadow p-2">
		<Link href={`/animeInfo/${anime.mal_id}`}>
            		<Card imageUrl= {anime.images.jpg.large_image_url} description = {anime.title} episodes = {anime.episodes}/>
          	</Link>
		</div>
        ))}
      </div>
    </div>
  );
}
