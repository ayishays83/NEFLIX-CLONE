import React, { useEffect ,useState} from 'react'
import {API_KEY,imgUrl} from '../../Constants/Constants'
import './Banner.css'
import axios from '../../axios'
function Banner() {
    const [movie,Setmovie] = useState()
    useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US'`).then((res)=>{
        const results = res.data.results
        const newIndex = Math.floor(Math.random() * results.length)
        Setmovie(results[newIndex])
      })
    }, [])
    
  return (
        <div className='banner'
        style={{backgroundImage:`url(${movie ? imgUrl+movie.backdrop_path:''})`}}>
            <div className="content">
                <h1 className="banner_title">{movie ? movie.title :""}</h1>
                <div className="banner_buttons">
                    <button  className='buttons'> play</button>
                    <button className='buttons'>My List</button>
                </div>
                <h1 className="banner_desc">{movie ? movie.overview :""}</h1>
            </div>
            <div className="banner--fadeBottom"/>
        </div>
    
  )
}

export default Banner