import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./Home";
import Navbar from "./Navbar";
import MovieList from "./MovieList";
import MovieShow from "./MovieShow";
import MovieNew from "./MovieNew";

function App() {
  const [movies, setMovies] = useState([]);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get("/movies");
      setMovies(res.data);
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const fetchActors = async () => {
      const res = await axios.get("/actors");
      setActors(res.data);
    };

    fetchActors();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies">
          <Route index element={<MovieList movies={movies} />} />
          <Route path="new" element={<MovieNew />} />
          <Route path=":id" element={<MovieShow movies={movies} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
