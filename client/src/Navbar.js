import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <li style={{ display: "inline-block", marginRight: ".5rem" }}>
        <Link to="/">Home</Link>
      </li>
      <li style={{ display: "inline-block", marginRight: ".5rem" }}>
        <Link to="/movies">Movie List</Link>
      </li>
      <li style={{ display: "inline-block", marginRight: ".5rem" }}>
        <Link to="/movies/new">Add Movie</Link>
      </li>
    </ul>
  );
};

export default Navbar;
