import React from 'react'
import { Link } from 'react-router-dom'
export default function Logo({getStyleMain}) {
  let main 
  return (
    <div className='logo'onClick={()=>{getStyleMain(main="Main")}}>
         <div><Link to="/" >Beat st🥶re</Link></div>
    </div>
  )
}
