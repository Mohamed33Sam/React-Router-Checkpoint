import "./App.css";
import { useState } from "react";
import MovieList from "./MovieList";
import { data } from "./Data";
const Home = () => {
  const [Movies, setMovies] = useState(data);

  return (
    <div className="home">
      <MovieList Movies={Movies} title="All Movies" />
    </div>
  );
};

export default Home;
