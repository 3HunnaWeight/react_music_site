import React, { useEffect, useRef, useState } from 'react'
export default function Music({getLinkAndName,...props}) {
  const ref = useRef()
  return (
  <div className='muisic__wrapper'>
      <div className='music'>
        <audio ref={ref} className="audio"src={props.link}></audio>
          <div className="play" onClick={()=>{getLinkAndName(props.link,props.name)}}>
              Play
          </div>
          <div className='containterSong'>
               <div className='nameOfsing'>
                   {props.name}
               </div>
          </div>
     </div>
  </div>

  )
  }