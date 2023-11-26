import React, { useEffect, useState } from "react";

import NavBar from "./NavBar";
import GifListContainer from "./GifListContainer";

// the App component should render out the GifListContainer component

function App() {

  const apiKey= "KYeZAYMCZYbVBOz0rrNmgKGoSGoTpoOH";
  const [gifs, setGifs]= useState([])
  const [loading, setLoading]= useState(true)
  const [error, setError]= useState(null)


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=${apiKey}&rating=g`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setGifs(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer gifs= {gifs}/>
    </div>
  );
}

export default App;
