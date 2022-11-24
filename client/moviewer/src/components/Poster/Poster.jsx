import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getListing } from '../../utils/listingService'
import './Poster.css'

function Poster({tt, name, image, description, rating, genre, datePublished, actor, director}) {
//   let [movie, setMovie] = useState([]);
//   let [tags, setTags] = useState([]);
//   useEffect(() => {
//     getBlogs();
//     getTags();
//   }, []);
//     useEffect()
//     getListing(movie.tt_url.substring(31))

//     const {isInStock , setStock } = useState(
//         for (let i = 0; i < )
//         movie.tt_url.substring(31)
//         )

//     let stock = isInStock ? (
//         <div className='flex'>
//             <div>{movie.jsonnnob.price}</div>
//             <button>Add to basket</button>
//         </div>
//     ) : (<div>Not in stock!</div>)
console.log(tt);

    

  return (
    <div className='poster'>
        <img src={image} alt={name}/>
        <p>{description}</p>
        {/* {stock} */}
    </div>
  )
}

export default Poster