import {React, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'
import Poster from '../../components/Poster/Poster';
import './HomePage.css'
import { CircularProgress } from '@mui/material';
import '../../images/default-user.png'

function HomePage() {
//tt
// name
// image
// description
// aggregateRating.ratingValue
// genre
// datePublished
// actor
// director


  const featured = ['tt9114286', 'tt9764362', 'tt6443346', 'tt10731256', 'tt1596342', 'tt9411972', 'tt15474916', 'tt14715170', 'tt9288822']

  let [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      try {

        movies = await Promise.all(featured.map(tt => fetch(`https://i-m-d-b.herokuapp.com/?tt=${tt}`).then(res => res.json())));
        setMovies(movies);
        console.log(movies);
      } catch (error) {
        console.log(error);
      }
    };

  getMovies();

  }, []);

  return (
    <div>
    <Navbar />
    {movies.length ? (
      <div className='flex'>
        <div className='main'>
          {
            movies.map((movie) => (
              <Link to={`/details/${movie.tt_url.substring(27)}`} key={movie.tt_url.substring(27)}>
                <Poster tt={movie.tt_url.substring(27)} 
                name={movie.title} 
                image={movie.poster === null ? (<img src='../../images/default-user.png' alt='no image available' />) : movie.poster} 
                description={movie.short_imdb_description} 
                rating={movie.UserRating.rating} 
                genre={movie.jsonnnob.genre} 
                datePublished={movie.jsonnnob.datePublished} 
                actor={movie.jsonnnob.actor} 
                director={movie.jsonnnob.director} />
              </Link>
            ))
          }
        </div>
        <div className='side'></div>
      </div>
     ) : <CircularProgress /> }
     </div>
  )
}

export default HomePage