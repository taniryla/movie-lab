import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ActorListPage from "../ActorListPage/ActorListPage";
import LoginPage from "../LoginPage/LoginPage";
import MoviesDetailPage from "../MovieDetailPage/MovieDetailPage";
import MoviesListPage from "../MoviesListPage/MoviesListPage";
import Navbar from "../../components/Navbar/Navbar";
import { movies } from "../../data.js";

import "../../styles.css";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      {user ? (
        <>
          <Navbar user={user} />
          <Routes>
            <Route path="/actors" element={<ActorListPage />} />
            <Route
              path="/movies/:movieName"
              element={<MoviesDetailPage movies={movies} />}
            />
            <Route path="/" element={<MoviesListPage movies={movies} />} />
          </Routes>
        </>
      ) : (
        <LoginPage setUser={setUser} />
      )}
    </main>
  );
}
