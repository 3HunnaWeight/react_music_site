import React from 'react'
import { Link } from 'react-router-dom'
export default function Logo({getStyleMain,send}) {
  let main 
  return (
    <div className='logoWrapper'>
      <div className='logo' onClick={()=>{getStyleMain(main="Main")}}>
          <Link to="/react_music_site">Beat st&#129398;re</Link>
      </div>
    </div>
  )
}
