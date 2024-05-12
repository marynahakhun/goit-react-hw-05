import { useState } from 'react'
import Navigation from './components/Navigation/Navigation'
import { Route, Routes } from 'react-router-dom'
import Cast from './components/MovieCast/MovieCast'
import Reviews from './components/MovieReviews/MovieReviews'
import './App.css'

import HomePage from "./pages/HomePage/HomePage"
import MoviesPage from './pages/MoviesPage/MoviesPage'
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage"
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

function App() {


  return (
    <div>
     <Navigation/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId/' element={<MovieDetailsPage />}>
          <Route path='cast' element={<Cast/> } />
          <Route path='reviews' element={<Reviews/>} />
         </Route>
        <Route path='*' element={ <NotFoundPage/>} />
      </Routes>


   </div>
  )
}

export default App
