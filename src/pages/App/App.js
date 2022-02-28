import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ActorListPage from "../ActorListPage/ActorListPage";
import LoginPage from "../LoginPage/LoginPage";
import MoviesDetailPage from "../MovieDetailPage/MovieDetailPage";
import MoviesListPage from "../MoviesListPage/MoviesListPage";
import Navbar from "../../components/Navbar/Navbar";

import "../../styles.css";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      {user ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/actors" element={<ActorListPage />} />
            <Route path="/movies/detail" element={<MoviesDetailPage />} />
            <Route path="/movies" element={<MoviesListPage />} />
          </Routes>
        </>
      ) : (
        <LoginPage user={user} setUser={setUser} />
      )}
    </main>
  );
}
