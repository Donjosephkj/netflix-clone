import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../constants/constants'
import "./RowPost.css"
import Youtube from 'react-youtube'
function RowPost(props) {
  const [UrlId, setUrlId] = useState([])
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(props.url).then((res)=>{
      //console.log(res.data)
      setMovies(res.data.results)
      
      
    }).catch((err)=>{
      //alert('network error')
    })
  
  }, [])
  const handleMovies=(id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
      if(res.data.result.length!==0){
      setUrlId(res.data.results[0])
      }else{
        console.log('Array Empty')
      }
    })
  }
  const opts = {
    height: '300',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>{
            return(
              <div>
            <img onClick={()=>handleMovies(obj.id)} className={props.isSmall ? 'smallposter':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
            <h5>&emsp;{obj.media_type=='movie' ? obj.title:obj.name}</h5>
            </div>
            )})}
            
            
        </div>
    {   UrlId &&    <Youtube opts={opts}   videoId={UrlId.key } /> }
    </div>
  )
}

export default RowPost