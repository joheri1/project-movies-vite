import { useEffect, useState } from "react";
import MovieList from "../pages/MovieList";

/**
 * This code is based on the example from the TMDB API for fetching Christmas movies.
 * It sends a GET request to the TMDB API and includes the required headers, such as the Authorization token. 
 * The response is logged to the console or an error message is displayed if the request fails.
 * 
 * Adjustments: 
 * 1. The API token (Authorization token) is stored in an environment variable (`VITE_REACT_APP_MOVIE_API`)
 * 2. The token is accessed via `import.meta.env` to retrieve the key from the environment configuration instead of hardcoded directly in the code.
 * 3. The hooks useState to store the list of movies fetched from the API, and useEffect is used to perform the API call only once, when the component first loads.
*/

const ApiFetcherToken = () => {
  // useState to store all movies
  const [movies, setMovies] = useState([]);

  // useEffect hook to fetch christmas movies when component mounts
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        /*Authorization: `Bearer ${VITE_REACT_APP_MOVIE_API}`*/
      }
    };

    // Fetch movies with "Christmas" in title or description
    fetch(`https://api.themoviedb.org/3/search/movie?query=Christmas&language=en-US`, options)
      .then(res => res.json())
      .then(data => {
        console.log("Before sorting:", data.results);
        // Create a new array and sort by popularity in descending order
        const sortedMovies = [...data.results].sort((a, b) => b.popularity - a.popularity);
        setMovies(sortedMovies); // Store the sorted result in state
        console.log("After sorting by popularity:", sortedMovies);
      })
      .catch(err => console.error('Fetch error:', err)); // Log any errors during fetching
  }, []); // Empty dependency array ( [] ) to ensure the fetch only runs once.

  // Return Christmas movies
  return (
    <div>
      <p>Fetching Christmas movies...</p>
      <MovieList movies={movies} />
    </div>
  );
};

export default ApiFetcherToken;

