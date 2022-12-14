import {React, useState, useEffect} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import NavBar from '../../components/Navbar/Navbar';
import { getListings, createAListing } from '../../utils/listingService';
import userService from '../../utils/userService';
import './DetailsPage.css'
import { removeAListing } from '../../utils/listingService';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function DetailsPage(props) {
  let params = useParams();
  let navigate = useNavigate();
  const [Movie, setMovie] = useState(null);
  const [Tags, setTags] = useState(null)
  const [Listings, setListings] = useState(null) //all the listings
  const [Listing, setListing] = useState(false) //all the listings with the matching tt_url
  const [lowestListing, setLowestListing] = useState(false)
  let user = userService.getUser();
  useEffect(() => {
      getMovie();
      getTheListings();
    }, [])

    const [formListing, setFormListing] = useState({
      movie_id: params.tt_url, 
      price: 0.00, 
    })

    let priceIsValid = formListing.price !== "" && formListing.price > 0
    let formIsValid = priceIsValid;


    let handleChange = (e) => {
      setFormListing({...formListing, [e.target.name]: e.target.value})
    }
  
    let handleSubmit = (e) => {
      console.log(user);
      console.log(formListing);
      e.preventDefault()
      const formData = new FormData();
      Object.keys(formListing).forEach(key => {
        if (formListing[key].constructor === Array) {
          formListing[key].forEach(item => {
            formData.append(key, item)
            console.log(formData);
          })
        } else {
          formData.append(key, formListing[key])
          console.log(formData);
        }
      })

      createAListing(formData).then(res => {
        console.log(res)
      })
    }



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
      const specificListings = listingsData.filter(listing => listing.movie_id === params.tt_url); //gets the listings matching tt_url
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
            <h3>{lowestListing ? `??${lowestListing.price}` : 'None currently available to purchase!'}</h3> 
            {lowestListing ? <button className='button'> + Add to cart </button> : null}


          </div>
        </div>
        <div className='container-bar'>
          <p className='general-p'>{Movie.jsonnnob.description}</p>
        </div>
        <div>
          <p className='general-p'>Imdb rating: {Movie.jsonnnob.aggregateRating.ratingValue.toString()}</p>
          <p className='general-p'>Release date: {Movie.jsonnnob.datePublished}</p>
        </div>





        {user ? (
          <div className='sell-form'>
            <h3>Have one to sell?</h3>
            <form className='form' onSubmit={handleSubmit} encType="multipart/form-data">
              <label>Price</label>
              <input name='price' value={formListing.price} onChange={handleChange} type="number" min="1" step=".01"></input>
              <button type='Submit' disabled={!formIsValid}>Confirm listing</button>
            </form>
          </div>
        ) : (
          <div className='sell-form'>
            <h3>Have one to sell?</h3>
            <p><Link to={'/signup'}>Sign up</Link> or <Link to={'/login'}>login</Link> now</p>
          </div>
        )}




        <div className='offers-box'>
          <div className='offers-box-headers'>
            <h3>Offers</h3>
          </div>
          <div>
            {Listing.length > 0 ? Listing.map((post) => (
              <div className='offers-box-listings'>
                <Link to={`/profile/${post.author.username}`}><button>{post.author.username}</button></Link>
                <h4>??{post.price}</h4>
                <button>Add to cart</button>
                {post.author.id ? (
                  <div>
                  <IconButton aria-label="delete" size="large" className='icon-button'>
                    <DeleteIcon onClick={() => removeAListing(post.id)} />
                  </IconButton>
                  
                  <IconButton aria-label="edit" size="large" className='icon-button'>
                    <EditIcon />
                  </IconButton>
                  </div>
                ) : null}
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