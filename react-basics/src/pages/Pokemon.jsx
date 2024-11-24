import { useState, useEffect } from "react";
import useQuery from "../hooks/useQuery"

function App() {
  const {state, error, data} = useQuery("https://pokeapi.co/api/v2/pokemon")

  return (
    <>
      <h1>Pokemon</h1>
      {state === "loading" && <p>loading....</p>}
      {state === "success" && (
        <ul>
          {data.results.map(({ name }) => {
            return <li key={name}>{name}</li>;
          })}
        </ul>
      )}
      {state === "error" && <p>{error}</p>}
    </>
  );
}

export default App;


//https://jsonplaceholder.typicode.com/posts