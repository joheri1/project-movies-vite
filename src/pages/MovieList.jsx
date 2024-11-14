/* eslint-disable */

/** 
 * This component shows a list of movie titles. 
 * 
 * It gets an array of movie objects as a prop from the ApiFetcherToken and/or ApiFetcherKey, and goes through each movie (using map), and displays its original title in a list.
 * 
 * Each item in the list has a unique key based on the movie's ID.
 * 
 * */

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.original_title}</li>
      ))}
    </ul>
  );
};

export default MovieList;