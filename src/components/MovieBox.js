import React, { useState } from 'react';
import './Style.css';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const API_IMG = "https://image.tmdb.org/t/p/w500/";
const MovieBox = ({title, poster_path, release_date }) => {

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  }

  return (
    <div data-testid="movie card" className="movie-card">
      <div>
        <img src={API_IMG + poster_path} alt="poster" data-testid="movie-poster" className="movie-poster"/>
        <span className="fav-icon" onClick={toggleFavorite}>
          {isFavorite ? (
            <AiFillHeart />
          ) : (
            <AiOutlineHeart />
          )}
        </span>
      </div>
      <h2 data-testid="movie-title" className='movie-title'>{title}</h2>
      <p data-testid="movie-release-date" className='movie-date'>{release_date}</p>
    </div>
  )
}

export default MovieBox;