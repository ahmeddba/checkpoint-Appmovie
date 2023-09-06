import React from 'react'
import MovieCard from './MovieCard';
import ReactStars from 'react-stars';



const moviesList = ({movies,inputSearch , rateSearch , show , setShow , setRateSearch}) => {
    const styleContainer = {display :'flex' , flexWrap : 'wrap' , justifycontent : 'space-around'};
console.log(inputSearch)
    console.log(movies)
    console.log(show);
  return (
    <>
    <h3 style={{color : 'white' , textAlign : 'left'}}> Filter by rate</h3>
<ReactStars count={5} onChange={(e) => setRateSearch(e)}  value={rateSearch} size={35} half={false}/>
    <div style={styleContainer}>

    {
        rateSearch===0 ?
        movies
 .filter((movie) => movie.title.toLowerCase().includes(inputSearch.toLowerCase().trim()))
 .map((movie) => <MovieCard movie={movie}  key={movie.id}  show={show} setShow={setShow} />)
 :
movies
 .filter((movie) => movie.title.toLowerCase().includes(inputSearch.toLowerCase().trim()) && movie.rate===rateSearch )
 .map((movie) => <MovieCard movie={movie}  key={movie.id}  show={show} setShow={setShow} />)

    }
    </div>
    </>

  )
}

export default moviesList
