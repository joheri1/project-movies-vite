/* eslint-disable */

/** 
 * This component shows a list of movie titles. 
 * 
 * It gets an array of movie objects as a prop from the ApiFetcherToken and/or ApiFetcherKey, and goes through each movie (using map), and displays its original title in a list.
 * 
 * Each item in the list has a unique key based on the movie's ID.
 * 
 * */

import Image from "../components/Image";

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.original_title}</h3>
          <p>{`Release date: ${movie.release_date}`}</p>
          <Image path={movie.backdrop_path} size="w780" alt={`Cover for ${movie.title}`} />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;