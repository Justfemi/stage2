import React from 'react';
import './Style.css';

const API_IMG = "https://image.tmdb.org/t/p/w500/";
const MovieBox = ({title, poster_path, release_date }) => {
  return (
    <div data-testid="movie card" className="movie-card">
      <div>
        <img src={API_IMG + poster_path} alt="poster" data-testid="movie-poster" className="movie-poster"/>
      </div>
      <h1 data-testid="movie-title" className='movie-title'>{title}</h1>
      <p data-testid="movie-release-date" className='movie-date'>{release_date}</p>
    </div>
  )
}

export default MovieBox;