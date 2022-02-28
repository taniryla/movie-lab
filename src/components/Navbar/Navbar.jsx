import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/actors">Actor List Page</Link>
      &nbsp; | &nbsp;
      <Link to="/movies/detail">Movies Detail Page</Link>
      &nbsp; | &nbsp;
      <Link to="/movies">All Movies</Link>
    </nav>
  );
};

export default Navbar;