import React from "react";
import { actors } from "../data";

function Actors() {

  const actorsToDisplay = actors.map((actor) => {
    return (
      <div key={actor.name}>
        {actor.name}
        <ul>
          {actor.movies.map((mov) => <li key={mov}>{mov}</li>)}
        </ul>
      </div>
    )
  })

  return <div>
    <h1>Actors Page</h1>
    {actorsToDisplay}
  </div>;
}

export default Actors;
