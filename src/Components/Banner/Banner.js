import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'
import "./Banner.css"


function Banner() {
   let rand = Math.floor(Math.random()*19)
  const [movie,setMovie] = useState('')
  
  useEffect(() => {
      axios.get(`trending/all/day?api_key=${API_KEY}`).then((res)=>{
       console.log(res.data.results[rand])
        setMovie(res.data.results[rand])
      }).catch((err)=>{
        //console.log(err)
      })
  
    
  }, [])
 // console.log(movie)
  
  
  return (
    <div style={{backgroundImage:`url(${imageUrl+movie.backdrop_path})`}}
     className='banner'>
      
        <div className='content'>
            <h1 className='title'>{movie.media_type==='movie' ? movie.title : movie.name}</h1>
            <div className="banner_buttons">
                <button className="button">Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie.overview}</h1>
        </div>
        <div className="fade-bottom">
            
        </div>
       
    </div>
  )
}

export default Banner