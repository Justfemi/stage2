import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import MovieBox from './components/MovieBox';
import { AiOutlineRight } from 'react-icons/ai';
// import { BiSearch } from 'react-icons/bi';
import logo from './assets/Logo.svg';
import playButton from './assets/Button.png';
import imdb from './assets/imdb.svg';
import tomato from './assets/tomato.svg';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=3d393b05661d08facd3dcea238d2e4ff";

function App() {

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  // const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch (API_URL)
    .then((res) => res.json())
    .then(data => {
      console.log(data);
      const ans = data.results;
      setMovies(ans.slice(0, 10));
    })
  }, []);

  const searchMovie = async(e) => {
    e.preventDefault();
    try{
      const url = `https://api.themoviedb.org/3/search/movie?api_key=3d393b05661d08facd3dcea238d2e4ff&query=${query}`;
      const res = await fetch (url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch(e) {
      console.log(e);
    }
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  return (
    <>
      <div className='hero-section'>
        <header>
          <a href="/">
            <img src={ logo } alt="movie app logo"/>
          </a>

          <form onSubmit={searchMovie}>
            <input type="search" 
              className='search-input' 
              placeholder='What do you want to watch?'
              name='query'
              value={query} onChange={handleChange}
            />
            {/* <BiSearch className='search-icon'/> */}
          </form>
        </header>

        <div className='movie-details'>
          <h1>John Wick 3: <br/> Parabellum </h1>
          <div className='ratings'>
            <div className='imdb'>
              <img src={ imdb } alt="imdb logo"/>
              <p>8.80/10.0</p>
            </div>
            <div className='tomato'>
              <img src={ tomato } alt="tomato logo"/>
              <p>97%</p>
            </div>
          </div>
          <p className='overview'>
            John Wick is on the run after killing a member of the 
            international assassins' guild, and with a $14 million 
            price tag on his head, he is the target of hit men and women everywhere.
          </p>
          <img src={ playButton } alt="watch trailer icon" className='play-button'/>
        </div>
      </div>

      <div className='movie-container'>
        <div className='heading'>
          <h2>featured movie</h2>
          <div className='text'>
            <p>See more</p>
            <AiOutlineRight />
          </div>
        </div>
        {movies.length > 0 ? (
          <div className='container'>
            {movies.map((movieReq) => 
            <MovieBox key={movieReq.id} {...movieReq}/>)}
          </div>
        ) : (
          <h2>Sorry!, {query} not found.</h2>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
