// This code is based on the example from the TMDB API for fetching popular movies.
// It sends a GET request to the TMDB API and includes the required headers, such as the Authorization token. 
// The response is logged to the console or an error message is displayed if the request fails.
//
// Adjustments: 
// 1. The API token (Authorization token) is stored in an environment variable (`VITE_REACT_APP_MOVIE_API`)
// 2. The token is accessed via `import.meta.env` to retrieve the key from the environment configuration instead of hardcoded directly in the code.
//3. The hooks useState to store the list of movies fetched from the API, and useEffect is used to perform the API call only once, when the component first loads.
//4. Changed then chatch to async/await.

import { useEffect, useState } from "react";
import MovieList from "../pages/MovieList";

const ApiFetcherToken = () => {
  //useState to store all movies
  const [movies, setMovies] = useState([]);

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
    .then(data => setMovies(data.results)) //Store the result in state
      .catch(err => console.error('Fetch error:', err));
  }, []); //Empty dependency array ( [] ) to ensure the fetch only runs once.
  
  // Return popular movies 

  return (
    <div>
      <p>Fetching popular movies...</p>
      <MovieList movies={movies} />
    </div>
  );
};

export default ApiFetcherToken;