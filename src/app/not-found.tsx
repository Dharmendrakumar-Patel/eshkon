"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

interface MemeData {
  id: string;
  url: string;
}

const NotFound: React.FC = () => {
  const [meme, setMeme] = useState<MemeData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRandomMeme = async () => {
      try {
        const response = await axios.get('https://api.imgflip.com/get_memes');
        if (response.data.success) {
          const memes: MemeData[] = response.data.data.memes;
          const randomMeme = memes[Math.floor(Math.random() * memes.length)];
          setMeme(randomMeme);
        } else {
          throw new Error('Failed to fetch meme');
        }
      } catch (error) {
        console.error('Error fetching meme:', error);
        setError('Failed to load meme.');
      } finally {
        setLoading(false);
      }
    };

    fetchRandomMeme();
  }, []);

  return (
    <div className='w-screen h-nav flex flex-col items-center justify-center min-w-[300px] p-5'>
      <h2 className="text-2xl mb-4 font-sans font-semibold">404 - Not Found</h2>
      {loading && <p>Loading meme...</p>}
      {error && <p>{error}</p>}
      {meme && (
        <div>
          <Image src={meme.url} alt="Random Meme" width={500} height={500} className="rounded-lg" loading="lazy" />
        </div>
      )}
    </div>
  );
};

export default NotFound;
