import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayout from './layout/AppLayout';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import NotFoundPage from './pages/NotFoundpage/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path='movies'>
          <Route index element={<MoviePage />} />
          <Route path=':id' element={<MovieDetailPage />} />
        </Route>
        {/* <Route path='/movies' element={<MoviePage />} />
        <Route path='/movies/:id' element={<MovieDetailPage />} /> */}
      </Route>

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
