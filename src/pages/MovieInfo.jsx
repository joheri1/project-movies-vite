/* eslint-disable */

/* 
This is the MovieInfo component, which displays detailed information about a specific movie.
*
* It uses the `useParams` hook from React Router to extract the `movieId` parameter from the URL, allowing the component to dynamically display details for the selected movie.
*/

import { useParams } from "react-router-dom";

const MovieInfo = () => {
  const { movieId } = useParams();

  return (
    <div>
      <h1>Movie Details</h1>
      <p>{`You are viewing details for movie ID: ${movieId}`}</p>
    </div>
  );
};

export default MovieInfo;
