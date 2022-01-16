import React from 'react';
import { move } from 'superagent';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {displayMovies()}
    </div>
  );
};

const displayMovies = () => {
  return movies.map((movie) => ( 
    <div key={movie.title} >
      <h3>{movie.title}</h3>
      <p>{movie.time} minutes</p>
      <ul>
        {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
      </ul>
    </div>
  ))
}

export default Movies;
