import { lazy, Suspense } from 'react'

import { Route, Routes } from 'react-router-dom'





const HomePage = lazy(()=> import("./pages/HomePage/HomePage"))
const MoviesPage = lazy(()=> import("./pages/MoviesPage/MoviesPage"))
const MovieDetailsPage = lazy(()=> import("./pages/MovieDetailsPage/MovieDetailsPage"))
const NotFoundPage = lazy(()=> import("./pages/NotFoundPage/NotFoundPage"))
const Reviews = lazy(() => import("./MovieReviews"));
const Navigation = lazy(() => import("./components/Navigation/Navigation"))
const Cast = lazy(() => import("MovieCast"));
function App() {


  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Please. wait...</div>}>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/movies' element={<MoviesPage />} />
     
          <Route path='/movies/:movieId/' element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path='*' element={ <NotFoundPage/>} />
        </Routes>
        </Suspense>


   </div>
  )
}

export default App
