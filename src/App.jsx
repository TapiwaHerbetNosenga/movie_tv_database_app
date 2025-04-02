import { useState, useEffect } from 'react';
import "./index.css"
import "./App.css";
import Layout from './components/Structure/Layout';
import FavoriteList from './pages/FavoritesPage';
import GenresList from './pages/GenresPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MovieDetailPage from './pages/MovieDetailPage';
import ShowDetails from './pages/ShowDetails';
import SignUpPage from './pages/SignUpPage';
import Watchlist from './pages/WatchlistPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="Favorites" element={<FavoriteList />} />
      <Route path="Genres" element={< GenresList/>} />
      <Route path="Login" element={<LoginPage />} />
      <Route path="Movie-Details" element={<MovieDetailPage />} />
      <Route path="Show-Details" element={< ShowDetails/>} />
      <Route path="Sign-Up" element={<SignUpPage />} />
      <Route path="Watch-List" element={< Watchlist/>} />
      </Route>
    </Routes>
    
    </BrowserRouter>
     
    </>
  )
}

export default App
