import React from 'react'
import Logo from './Logo'
import { useState } from 'react'
export default function Header({getMainStyle,getStyle,...props}) {
let style 
let mainStyle 
 const getMain=(main)=>{
mainStyle=main
 }
  return (
    <header className='header'>
  
        <div className='mainPageWrapper'>
          <div className='mainPage'onClick={()=>{getMainStyle(mainStyle)}}>
            <Logo
               getStyleMain={getMain}
            />
          </div>
        </div>

        <nav>
        <div className='nav__bar'>
            <div className='link' onClick={()=>getStyle(style="Drill")} >Drill</div>
            <div className='link' onClick={()=>getStyle(style="Trap")} >Trap</div>
            <div className='link' onClick={()=>getStyle(style="Detroit")} >Detroit</div>
            <div className='link' onClick={()=>getStyle(style="Plug")} >Plug</div>
            <div className='link' onClick={()=>getStyle(style="Memphis")} >Memphis</div>
            <div className='link' onClick={()=>getStyle(style="Hyperpop")} >Hyperpop</div>
        </div>
   </nav>
    </header>
  )
}
