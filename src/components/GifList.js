import React from 'react'

function GifList({gifs}) {
    // console.log(gifs)
    const gifList= gifs.map((gif)=>{
        return(
            <li key={gif.id}><img src={gif.images.original.url} alt='gifs'/></li>
        )
    })
  return (
    <div>
        <ul>
            {gifList}
        </ul>
    </div>
  )
}

export default GifList