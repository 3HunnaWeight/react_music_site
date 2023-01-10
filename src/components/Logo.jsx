import React from 'react'
import { Link } from 'react-router-dom'
export default function Logo({getStyleMain,send}) {
  let main 
  return (
    <div className='logo'>
         <Link to="/react_music_site" onClick={()=>{getStyleMain(main="Main")}}>Beat st🥶re</Link>
    </div>
  )
}
