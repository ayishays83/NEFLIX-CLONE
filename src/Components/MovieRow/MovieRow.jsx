import React from 'react'
import YouTube from 'react-youtube'
import { useEffect, useState } from 'react'
import { imgUrl, API_KEY } from '../../Constants/Constants'
import axios from '../../axios'
import './MovieRow.css'
function MovieRow(props) {
  const [row, SetRow] = useState([])
  const [urlId, SeturlID] = useState("")
  useEffect(() => {
    axios.get(props.url).then((res) => {
      SetRow(res.data.results)
    })
  })
  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      fs:0,
      autohide:1,
      wmode:'opaque',
      origin:'http://localhost:3000',
      controls:0,
      showinfo:0,
      rel:0,
      iv_load_policy: 3,

      
      
      
    }
  };
  const VedioClick = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((resp)=> {
      if (resp.data.results.length !== 0) {
        SeturlID(resp.data.results[0])
      } else {
        console.log('no vedio is available!!')
      }
    })

  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="row_posters">
        {
          row.map((obj) =>
            <img onClick={() => VedioClick(obj.id)} className={props.isLargeRow ? 'row_posterLarge' : 'row_poster'} alt='movie_poster' src={`${imgUrl + obj.backdrop_path}`} />

          )
        }

      </div>
      { urlId &&
       <YouTube videoId={urlId.key} opts={opts} className='vedio'/>
      }    
      </div>
  )
}

export default MovieRow