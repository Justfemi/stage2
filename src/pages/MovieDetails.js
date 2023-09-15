import React, { useState, useEffect }from 'react';
import { Link, useParams } from 'react-router-dom'
import './style.css';
import logo from '../assets/Logo.svg';
import Footer from '../components/Footer';

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
      console.log(data);
      // const newMovie = data.find((item) => 
      //   item.id === id);
      //   setMovie(newMovie); 
      setMovie(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

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
      <div className="content" style={{
        backgroundImage: `url(API_IMG + ${movie.backdrop_path})`
      }}>
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
      <Footer />
    </>
  )
}

export default MovieDetails;