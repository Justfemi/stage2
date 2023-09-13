import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import MovieBox from './components/MovieBox';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=3d393b05661d08facd3dcea238d2e4ff";
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=3d393b05661d08facd3dcea238d2e4ff&query";
function App() {

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

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
      const url = `https://api.themoviedb.org/3/search/movie?api_key=3d393b05661d08facd3dcea238d2e4ff&query`
    } catch(e) {

    }
  }

  return (
    <>
      <form onSubmit={searchMovie}>
        <input type="search" 
          className='search-input' 
          placeholder='what do you want to watch?'
        />
        {/* icon */}
      </form>
      <div className='Container'>
      {movies.map((movieReq) => 
      <MovieBox key={movieReq.id} {...movieReq}/>)}
      </div>
      <Footer />
    </>
  );
}

export default App;
