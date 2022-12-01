import { CircularProgress } from '@mui/material'
import {React, useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import NavBar from '../../components/Navbar/Navbar'
import Poster from '../../components/Poster/Poster'
import './ResultsPage.css'


function ResultsPage(props) {
  let params = useParams();
  const [results, setResults] = useState([])
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    // setResults([])
    // console.log(results);
    // console.log(movies);
    getResults(); //gets you an array of the tt_urls
     //gets you the actual array of movies

  }, [params.query])

  useEffect(() => {
    movies.slice(15)
  }, [movies])

  async function getResults() {
    try {
      const res = await fetch('https://i-m-d-b.herokuapp.com/?q=' + params.query + '&s=3&l=15');
      const resultsData = await res.json();
      let results1 = [];
      Object.keys(resultsData).forEach(function(key) {
        results1.push(resultsData[key])
    });
    console.log(results1);
    for (let i = 1; i < results1.length-3; i++) {
      results.push(results1[i].tt_url.substring(27))
    }

    const getMovies = async () => {
      try {
        // setMovies([])
        // setResults([])
        movies = await Promise.all(results.map(tt => fetch(`https://i-m-d-b.herokuapp.com/?tt=${tt}`).then(res => res.json())));
        setMovies(movies);
        // console.log(movies);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
      // setResults(results);
      // console.log(results);
      // console.log(params);
    } catch (err) {
      console.log(err);
    }
  }



  return (
    <div>
      <NavBar />
      {results.length > 0 ? (
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
     ) : <CircularProgress /> }
    </div>
  )
}

export default ResultsPage