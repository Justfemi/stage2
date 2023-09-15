import React, {useState, useEffect} from 'react';
import MovieBox from './MovieBox';
import { AiOutlineRight } from 'react-icons/ai';

const MovieContainer = () => {
  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=3d393b05661d08facd3dcea238d2e4ff";
  const [movies, setMovies] = useState([]);

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
          console.log(data);
          const ans = data.results;
          setMovies(ans.slice(0, 10));
        });
  }, []);

// .then((res) => {
//   if(res.ok) {
//     res.json()
//   } else {
//     console.log('res error');
//   }
// }
// .then(data => {
//   console.log(data);
//   const ans = data.results;
//   setMovies(ans.slice(0, 10));
// })

  return (
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
        <h2>Result not found!</h2>
      )}
    </div>
  )
}

export default MovieContainer