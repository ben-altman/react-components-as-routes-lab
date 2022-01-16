import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {displayActor()}
    </div>
  );
};

const displayActor = () => {
  return actors.map(actor => (
    <div key={actor.name}>
      <h3>{actor.name}</h3>
      <ul>
        {actor.movies.map(movie => <li key={movie}>{movie}</li>)}
      </ul>
    </div>
  ))
}

export default Actors;
