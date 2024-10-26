"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from "./components/Card.js"
import Navbar from "./components/Navbar.jsx"
import Link from 'next/link'
export default function Home() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await axios.get('https://api.jikan.moe/v4/top/anime');
        setAnimeList(response.data.data); // Stores the list of anime in state
      } catch (error) {
        console.error('Failed to fetch anime:', error);
      }
    };
    fetchAnime();
  }, []);

  return (
    <div className="container mx-auto p-4">
	  <Navbar/>
      <h1 className="text-2xl font-bold mb-4">Top Anime</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {animeList.map((anime) => (
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
