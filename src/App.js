import React , {useState}from 'react';
import './App.css';
import Navigate from './Components/Navigate/Navigate';
import MovieCard from './Components/Movies/MovieCard';
import MoviesList from './Components/Movies/moviesList';
import  { moviesData } from './Data'
import Reactstars from 'react-stars'
import { Route, Routes } from 'react-router-dom';
import MovieDescription from './Components/Movies/MovieDescription';

function App() {
const [moviesList , setMoviesList] = useState(moviesData);
const [inputSearch , setInputSearch] = useState('');
const [rateSearch , setRateSearch] = useState(0);

const add = (movie) => {
  setMoviesList([...moviesList , movie]);
}
console.log(moviesList);
console.log(inputSearch)
  return (
    <div className="App">
<Navigate setInputSearch={setInputSearch} setRateSearch={setRateSearch} movieList={moviesList} setMoviesList={setMoviesList} add={add} />

<Routes>
  <Route path='/' element={<MoviesList movies={moviesList} inputSearch={inputSearch} rateSearch={rateSearch}  setRateSearch={setRateSearch }/>} />
  <Route path='/description/:id' element={<MovieDescription movies={moviesData}/>} />
</Routes>

    </div>
  );
}

export default App;
