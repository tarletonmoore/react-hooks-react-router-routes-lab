import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesToDisplay = movies.map((movie) => (
    <div key={movie.title}>
      <p>{movie.title}</p>
      <p> {movie.time}</p>
      <ul>
        {movie.genres.map((genre) => <li key={genre}>{genre}</li>)}
      </ul>
    </div>
  ))
  // const moviesToDisplay = movies.map((movie) => {
  //   return (<div key={movie.id}>
  //     <p>{movie.title}</p>
  //     <p> {movie.time}</p>
  //     <ul>
  //       {movie.genres.map((genre) => <li key={genre}>{genre}</li>)}
  //     </ul>
  //   </div>)
  // })
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesToDisplay}
    </div>
  )
}

export default Movies;
