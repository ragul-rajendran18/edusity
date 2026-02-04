import React, { useRef } from 'react'
import './videoplayer.css'
import video from '../../assets/videoplayer.mp4'
const Videoplayer = ({Playstate, setPlaystate}) => {

       const player =useRef(null); 

       const closeplayer=(e)=>{
        if(e.target === player.current){
            setPlaystate(false);
        }
       }

  return (
    <div className={`videoplayer ${Playstate?'':'hide'}`}  ref={player} onClick={closeplayer}>
        <video src={video} autoplay controls></video>
    </div>
  )
}
export default Videoplayer
