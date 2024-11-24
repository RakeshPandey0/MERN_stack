import { useState, useEffect } from "react";

function App() {
  const [pokemons, setPokemons] = useState();
  const [state, setState] = useState("loading");
  const [error, setError] = useState();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => {
        // throw new Error("Time limit exceeded")
        setState("success");
        setPokemons(data.results);
      })
      .catch((err) => {
        setState("error");
        setError(err.message);
      });
  }, []);

  return (
    <>
      <h1>Pokemon</h1>
      <form>
        <input type="text" name="Pokemon" />
        <button type="submit">Search</button>
      </form>
      {state === "loading" && <p>loading....</p>}
      {state === "success" && (
        <ul>
          {pokemons.map(({ name }) => {
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