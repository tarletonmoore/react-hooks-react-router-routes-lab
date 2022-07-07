import React from "react";
import { directors } from "../data";

function Directors() {

  const directorsToDisplay = directors.map((director) => {
    return (<div key={director.name}>
      {director.name}
      <ul>
        {director.movies.map((m) => <li key={m}>{m}</li>)}
      </ul>
    </div>
    )
  })

  return <div>
    <h1>Directors Page</h1>

    {directorsToDisplay}

  </div>;
}

export default Directors;
