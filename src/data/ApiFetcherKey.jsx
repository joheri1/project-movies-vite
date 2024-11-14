

import { useEffect, useState } from "react";
import MovieList from "../pages/MovieList";

export const ApiFetcherKey = () => {
  //State to store the list of fetched movies
  const [movies, setMovies] = useState([]);

  //useEffect hook to fetch popular movies when component mounts

  useEffect(() => {
    const apiKey = import.meta.env.VITE_REACT_APP_MOVIE_API_KEY;

    // Function to fetch movies

    const fetchMovies = async () => {
      try {
        // API Call to fetch popular movies data
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );

        // Check if response is successful; throw an error if not
        if (!response.ok) {
          throw new Error("Response not ok!");
        }

        // Fetch JSON data and set it to the movies state
        const json = await response.json();

        setMovies(json.results);
      } catch (error) {

        // Log any errors during fetching
        console.log("Error fetching data", error);
      }
    };

    fetchMovies();
  // Only run fetchMovies once when the component mounts
  }, []); 

  return (
    <div>
      <p>Fetching popular movies...</p>
      <MovieList movies={movies} />
    </div>
  );
};

export default ApiFetcherKey;