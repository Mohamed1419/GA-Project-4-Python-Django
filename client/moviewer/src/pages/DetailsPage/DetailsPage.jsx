import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../../components/Navbar/Navbar';
import { getListings } from '../../utils/listingService';
import './DetailsPage.css'

function DetailsPage(props) {
  let params = useParams();
  const [Movie, setMovie] = useState(null);
  const [Tags, setTags] = useState(null)
  const [Listings, setListings] = useState(null) //all the listings
  const [Listing, setListing] = useState(false) //all the listings with the matching tt_url
  const [lowestListing, setLowestListing] = useState(false)
  useEffect(() => {
      getMovie();
      getTheListings();
    }, [])

    async function getMovie() {
      const response = await fetch(`https://i-m-d-b.herokuapp.com/?tt=${params.tt_url}`);
      //tt9114286
      const movieData = await response.json();
      setMovie(movieData)
      console.log(movieData.aggregateRating);
      console.log(movieData);
      setTags(movieData.jsonnnob.keywords.split(','))
    }

    async function getTheListings() {
      const listingsData = await getListings();
      console.log(listingsData); //all the listings in the database
      setListings(listingsData)
      const specificListings = listingsData.filter(listing => listing.movie_id === params.tt_url)
      setListing(specificListings)
      console.log(specificListings); //all the listings matching the tt_url
      if (specificListings) {
        const lowestListing = specificListings.reduce(
          (acc, loc) =>
            acc.price < loc.price
              ? acc
              : loc
        )
        setLowestListing(lowestListing)

      }
  
    }

    


  return (
    <>
    <NavBar />
    {Movie ? (

    <div className='flex'>


      <section className='left'>
        <img src={Movie.poster} alt={Movie.title} className='image' />
        <div className='container-bar'>
        {Tags ? (
          Tags.map((tag) => (
            <h3 className='tags'>{tag}</h3>
            )) ) : null
          }
        </div>
        <div className='container-bar'>
          {
            <h3>Directed by: {Movie.jsonnnob.director.map((dir) => (dir.name))}</h3>
          }
        </div>

        <div className='container-bar'>
          <h3>Starring: {Movie.jsonnnob.actor.map((act) => (
              `${act.name}, `
          ))}
          </h3>
        </div>
        
      </section>


      <section className='right'>
        <div className='container-bar'>
          <h3>{Movie.title}</h3>
          <div className='flex'>
            <h3>{lowestListing ? `£${lowestListing.price}` : 'None currently available to purchase!'}</h3> 
            {Listing ? <button className='button'> + Add to cart </button> : null}


          </div>
        </div>
        <div className='container-bar'>
          <p className='general-p'>{Movie.jsonnnob.description}</p>
        </div>
        <div>
          <p className='general-p'>Imdb rating: {Movie.jsonnnob.aggregateRating.ratingValue.toString()}</p>
          <p className='general-p'>Release date: {Movie.jsonnnob.datePublished}</p>
        </div>

        <div className='offers-box'>
          <div className='offers-box-headers'>
            <h3>Seller</h3>
            <h3>Offer</h3>
          </div>
          <div>
            {Listing ? Listing.map((post) => (
              <div className='offers-box-listings'>
                <h4>{post.author.username}</h4>
                <h4>£{post.price}</h4>
                <button>Add to cart</button>
              </div>
            )) : <h3>No listings currently available</h3>}
          </div>
        </div>
      </section>


    </div> ) : <h1>Loading...</h1>}
    </>
  )
}

export default DetailsPage