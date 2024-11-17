/* eslint-disable */

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