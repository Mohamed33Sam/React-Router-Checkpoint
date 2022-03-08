import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
const MoviesList = ({ Movies, title }) => {
  return (
    <div className="Movies-list">
      <h2>{title}</h2>
      {Movies.map((Movies) => (
        <Link to={`details/${Movies.id}`} key={Movies.id}>
          <div className="Movies-preview">
            <h2>{Movies.title}</h2>
            <img src={Movies.posterURL} width={500} />
            <p>directed by {Movies.director}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MoviesList;
