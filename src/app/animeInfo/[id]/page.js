"use client"// pages/anime/[id].js
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';

const AnimeDetails = ( {params} ) => {
	const { id } = React.use(params)
  const [anime, setAnime] = useState(null);
	console.log(id);

  useEffect(() => {
    if (id) {
      const fetchAnime = async () => {
        try {
          const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
          setAnime(response.data.data); // Store anime details in state
        } catch (error) {
          console.error('Error fetching anime details:', error);
        }
      };
      fetchAnime();
    }
  }, [id]);

  if (!anime) return <p>Loading = {id}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{anime.title}</h1>
      <img src={anime.images.jpg.large_image_url} alt={anime.title} className="w-full max-w-md rounded" />
      <p className="text-gray-700 mt-4">{anime.synopsis}</p>
      <p className="text-sm text-gray-500 mt-2">Score: {anime.score}</p>
      <p className="text-sm text-gray-500">Episodes: {anime.episodes}</p>
      <p className="text-sm text-gray-500">Status: {anime.status}</p>
    </div>
  );
};

export default AnimeDetails;

