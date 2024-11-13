// This code is based on the example from the TMDB API for fetching popular movies.
// It sends a GET request to the TMDB API and includes the required headers, such as the Authorization token. 
// The response is logged to the console or an error message is displayed if the request fails.
//
// Adjustments: 
// 1. The API key (Authorization token) is stored in an environment variable (`VITE_REACT_APP_MOVIE_API`)
// 2. The token is accessed via `import.meta.env` to retrieve the key from the environment configuration instead of hardcoded directly in the code.

import { useEffect, useState } from "react";

const ApiFetcher = () => {
  const [titles, setTitles] = useState([])

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_MOVIE_API}`
      }
    };

    // Fetch popular movies 
  
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(res => res.json())
      .then(data => {
        console.log('Popular movies:', data.results);
        const movieTitles = data.results.map(movie => movie.original_title);
        setTitles(movieTitles);
      })
      .catch(err => console.error('Fetch error:', err));
  }, []);
  
  // Return something

  return (
    <div>
      <p>Fetching popular movies...</p>
      <ul>
        {titles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  )
}

export default ApiFetcher;