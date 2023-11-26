import { useState } from "react";
import React from 'react'

function GifSearch({formEvent}) {
    const [searchTerm, setSearchTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Call the formEvent function passed from the parent with the search term
    formEvent(searchTerm);
  };
  return (
    <div>
    <form onSubmit={handleFormSubmit}>
      <label>
        Search:
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default GifSearch