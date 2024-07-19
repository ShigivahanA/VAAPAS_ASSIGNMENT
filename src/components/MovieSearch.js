import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';
import '../styles/MovieSearch.css'; // Import your CSS for styling

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [initialView, setInitialView] = useState(true);

  const searchMovies = async (query) => {
    if (!query.trim()) {
      toast.error("Don't leave the search bar empty!");
      return;
    }
    
    setLoading(true);
    setError(null);
    setInitialView(false);
    setMovies([]); // Clear previous movies

    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setMovies(data.docs);
      toast.success('Movies fetched successfully!', {
        icon: "🚀",
      });
    } catch (err) {
      setError('Uh-oh, unknown error occurred!');
      toast.error('Failed to fetch data');
    }
    setLoading(false);
  };

  return (
    <div className="movie-search">
      <SearchBar onSearch={searchMovies} />
      <ToastContainer theme='dark' />
      {initialView && (
        <p className="description-text">Welcome to VAAPAS! <br/>Explore Movies, Unleash Joy! <br/>Start by searching for your favorite movies.</p>
      )}
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <div className="movie-cards">
          {error && <p className="error-text">{error}</p>}
          {movies.length > 0 && !error && movies.map((movie) => (
            <MovieCard key={movie.key} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
