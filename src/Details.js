import React from "react";
import { data } from "./Data";
import { useParams } from "react-router-dom";
const Details = () => {
  const { movieId } = useParams();
  const movie = data.find((el) => el.id === +movieId);
  return (
    <div className="Movies-Details">
      <h2>{movie.title}</h2>
      <img src={movie.posterURL} width={500} />
      <p>About {movie.description}</p>
      <p>rating {movie.rating}</p>
      <p>year{movie.year}</p>
      <p>stars {movie.stars}</p>
      <p>directed by {movie.director}</p>
      {movie.trailer}
    </div>
  );
};

export default Details;
