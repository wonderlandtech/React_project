import React, { useEffect, useState } from "react";
import './App.css'
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg'

// cbaec5

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=cbaec5';

// const movies = {
//   "Title": 'Superman, Spiderman or Batman', 
//   "Year": '2011', 
//   imdbID: 'tt2084949', 
//   "Type": 'movie', 
//   "Poster": 'https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg'
// }

const App = () => {
  const [movies, setMovies] = useState([]); 
  const [searchTerm, setsearchTerm] = useState([]);
  
  
      const searchmovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
      }
      useEffect(() => {
        searchmovies('Spiderman');
      }, []);
  return (
    <div className="app">
      <h1>movieLand</h1>
      <div className="search">
        <input placeholder="searh for movies" value={searchTerm} onChange={(e) => setsearchTerm(e.target.value)}/>
        <img src ={SearchIcon} alt="search" onClick={()=>searchmovies(searchTerm)}/>
      </div>

      {
        movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie= {movie}/>
              ))
            }
          </div>
        ): (
          <div className="empty">
            <h2>No Movie Found</h2>
          </div>
        )
      }
      
    </div>
  );
}

export default App
