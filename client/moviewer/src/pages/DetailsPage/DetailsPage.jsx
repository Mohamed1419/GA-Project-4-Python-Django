import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './DetailsPage.css'

function DetailsPage(props) {
  let params = useParams();
  const [Movie, setMovie] = useState(null);
  useEffect(() => {
      async function getMovie() {
          const response = await fetch('https://i-m-d-b.herokuapp.com/?tt=' + params.tt);
          const movieData = await response.json();
          setMovie(movieData)
      }
      getMovie();
      console.log(Movie);
  }, [])


  return (
    <div>DetailsPage</div>
  )
}

export default DetailsPage