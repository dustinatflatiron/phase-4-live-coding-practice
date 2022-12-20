import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <>
      <h1>Movies List</h1>
      <ul>
        {movies.map((movie) => {
          return (
            <li
              key={movie.id}
              style={{ listStyle: "none", marginBottom: "1rem" }}
            >
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieList;
