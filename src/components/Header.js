import React, { useState, useEffect } from 'react'
import './Style.css';
import logo from '../assets/Logo.svg';
import playButton from '../assets/Button.png';
import imdb from '../assets/imdb.svg';
import tomato from '../assets/tomato.svg';
import MovieBox from './MovieBox';
import { AiOutlineRight } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';

const API_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=3d393b05661d08facd3dcea238d2e4ff";

const Header = () => {

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch (API_URL)
      .then((res) => {
        if(res.ok){
          return res.json();
        } else {
          console.log('res error');
        }
      })
      .then(data => {
          // console.log(data);
          const ans = data.results;
          setMovies(ans.slice(0, 10));
        });
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
      {movies ? (
          <>
            <div className='hero-section'>
              <header>
                <a href="/">
                  <img src={ logo } alt="movie app logo"/>
                </a>
      
                <form onSubmit={searchMovie}>
                  <div>
                    <input type="search" 
                      className='search-input' 
                      placeholder='What do you want to watch?'
                      name='query'
                      value={query} onChange={handleChange}
                    />
                    <BiSearch className='search-icon'/>
                  </div>
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

            <div>
              {movies.length > 0 ? (
                <div className='movie-container'>
                  <div className='heading'>
                    <h2>featured movie</h2>
                    <div className='text'>
                      <p>See more</p>
                      <AiOutlineRight />
                    </div>
                  </div>
                  <div className='container'>
                    {movies.map((movieReq) => 
                    <MovieBox key={movieReq.id} {...movieReq}/>)}
                  </div>
                </div>
              ) : (
                <h2>....</h2>
              )}
            </div>
          </>
      ) : (
          <h1>Loading...</h1>
      )}
    </>
  )
}

export default Header;