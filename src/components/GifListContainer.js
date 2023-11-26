import React from 'react'
import { useEffect, useState } from "react";
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() { 
const apiKey= "KYeZAYMCZYbVBOz0rrNmgKGoSGoTpoOH";
  const [gifs, setGifs]= useState([])
  const [loading, setLoading]= useState(true)
  const [error, setError]= useState(null)
  const [searchTerm, setSearchTerm]= useState("")
  const [filteredGifs, setFilteredGifs] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=${apiKey}&rating=g`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setGifs(data.data.slice(0,3));
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
    console.log(gifs)
  function handleSubmit(searchTerm){
    setSearchTerm(searchTerm)
    const filteredGif= gifs.filter(gif=> {
      return gif.title.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setFilteredGifs(filteredGif)
  }
  

  return (
    <div>
        <GifSearch formEvent= {handleSubmit}/>
        {searchTerm ? (
        <GifList gifs={filteredGifs} />
      ) : (
        <GifList gifs={gifs} />
      )}
    </div>
  )
}

export default GifListContainer