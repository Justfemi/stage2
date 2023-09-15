import React, { useState, useEffect }from 'react';
import { Link, useParams } from 'react-router-dom'
import './style.css';
import logo from '../assets/Logo.svg';

const MovieDetails = () => {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3d393b05661d08facd3dcea238d2e4ff`)
    .then(res => {
      if(res.ok) {
        return res.json();
      } else {
        console.log('res error');
      }
    })
    .then(data => {
      // console.log(data);
      setMovie(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [id]);

  return (
    <>
      <header className="colored-header">
        <Link to="/">
          <img src={ logo } alt="movie app logo"/>
        </Link>

        <Link to="/">
        <p>back to home</p>
        </Link>
      </header>
      <div className="content" 
        // style={{
        // backgroundImage: 'url(https://image.tmdb.org/t/p/original/5mzr6JZbrqnqD8rCEvPhuCE5Fw2.jpg)',
        // backgroundImage: 'url(${https://image.tmdb.org/t/p/original/ + movie.backdrop_path})',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat'
      //  }}
      >
        <div className='image-container'>
          <img src={API_IMG + movie.poster_path} alt="movie poster" data-testid="movie-poster" />
        </div>
        <div className='text-container'>
          <h1 data-testid="movie-title" className='movie-title'>{movie.title}</h1>
          <p data-testid="movie-overview" className='movie-overview'>
            {movie.overview}
          </p>
          <p data-testid="movie-runtime" className='movie-time'>{movie.runtime} minutes</p>
          <p data-testid="movie-release-date" className='movie-date'>{movie.release_date}</p>
        </div>
      </div>
    </>
  )
}

export default MovieDetails;