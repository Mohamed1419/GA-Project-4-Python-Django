import {React, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'
import Poster from '../../components/Poster/Poster';
import './HomePage.css'

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
        // console.log(movies);
        // console.log(movies[0].tt_url.substring(27));
        // console.log(movies[0].title);
        // console.log(movies[0].poster);
        // console.log(movies[0].short_imdb_description);
        // console.log(movies[0].UserRating.rating);
        // console.log(movies[0].jsonnnob.genre);
        // console.log(movies[0].jsonnnob.datePublished);
        // console.log(movies[0].jsonnnob.actor);
        // console.log(movies[0].jsonnnob.director);

        // let movieData = res.json();
        // setMovies(movies.push(movieData));
        // featured.splice(i, 1);

        // console.log(movieData);
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
                image={movie.poster} 
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
     ) : <h1>Loading!</h1> }
     </div>
  )
}

export default HomePage