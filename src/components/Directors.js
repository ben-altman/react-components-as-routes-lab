import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {displayDirector()}
    </div>
  );
}

const displayDirector = () => {
  return directors.map(director => (
    <div key={director.name}>
      <h3>{director.name}</h3>
      <ul>
        {director.movies.map(movie => <li key={movie}>{movie}</li>)}
      </ul>
    </div>
  ))
}
export default Directors
