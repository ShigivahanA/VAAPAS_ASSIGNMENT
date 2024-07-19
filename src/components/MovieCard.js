import React, { useState, useEffect } from 'react';
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => {
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    const fetchDogImage = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImage(data.message);
    };

    fetchDogImage();
  }, []);

  return (
    <div className="card">
      <img src={dogImage} alt="Random Pic" />
      <div className='description'>
        <h3>{movie.title}</h3>
        <p>{movie.author_name ? movie.author_name.join(', ') : 'Unknown Author'}</p>
        <p>{movie.first_publish_year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
