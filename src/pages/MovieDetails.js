import React, { useState, useEffect }from 'react';
import { Link, useParams } from 'react-router-dom'
import './style.css';
import logo from '../assets/Logo.svg';
import Footer from '../components/Footer';

const MovieDetails = () => {

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
      const newMovie = data.find((item) => 
        item.id === id);
        setMovie(newMovie); 
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  // const getMovieDetails = () => {
  //   fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3d393b05661d08facd3dcea238d2e4ff`)
  //   .then(res => {
  //     if(res.ok) {
  //       return res.json();
  //     } else {
  //       console.log('res error');
  //     }
  //   })
  //   .then(data => {
  //     console.log(data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }

  return (
    <>
      <header className="colored-header">
        <a href="/">
          <img src={ logo } alt="movie app logo"/>
        </a>

        <Link to="/">
        <p>back to home</p>
        </Link>
      </header>
      <div className="content">
        <div className='image-container'>
          <img src={movie.poster_path} alt="movie poster" data-testid="movie-poster" />
        </div>
        <div className='text-container'>
          <h1 data-testid="movie-title" className='movie-title'>{movie.title}</h1>
          <p data-testid="movie-overview" className='movie-overview'>
            {movie.overview}
          </p>
          <p data-testid="movie-runtime" className='movie-time'>100 minutes</p>
          <p data-testid="movie-release-date" className='movie-date'>{movie.release_date}</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MovieDetails;