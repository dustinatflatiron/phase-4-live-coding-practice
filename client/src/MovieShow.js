import { useParams } from "react-router-dom";

const MovieShow = ({ movies }) => {
  const { id } = useParams();
  console.log(id);
  const movie = movies.find((movie) => movie.id === parseInt(id, 10));

  if (!movie) return <div>Loading</div>;

  return (
    <>
      <h1>
        {movie.title} made: {movie.box_office_earnings}
      </h1>
      <div>
        <ul>
          {movie.characters.map((char) => {
            return (
              <>
                <li key={char.id} style={{ textDecoration: "none" }}>
                  Character: {char.name} - Played by: {char.actor.name}
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MovieShow;
