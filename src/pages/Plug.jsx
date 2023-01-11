import React, { useRef } from 'react'
import Music from '../components/Music'
import Player from '../components/Player'
import { useState } from 'react'
import Cups from '../components/Cups'
export default function Plug({sendLinkAndName}) {
  const getLinkAndName=(link,name)=>{
    setName(name)
    setLink(link)
   }
   
   const [link,setLink] = useState()
   const [name,setName] = useState()
  return (
    
  
    <main className='whole__music'>
   {sendLinkAndName(link,name)}
        <Music
          link= {require('../music/1plug.mp3')}
          name="first Plug"
          getLinkAndName={getLinkAndName}
          />
        
        
        <Music
          link= {require('../music/2plug.mp3')}
          name="second Plug"
          getLinkAndName={getLinkAndName}
          />
         <Music
          link= {require('../music/3plug.mp3')}
          name="third Plug"
          getLinkAndName={getLinkAndName}
          />
        
        
        <Music
          link= {require('../music/4plug.mp3')}
          name="fourth Plug"
          getLinkAndName={getLinkAndName}
          />
          <Music
          link= {require('../music/5plug.mp3')}
          name="fourth Plug"
          getLinkAndName={getLinkAndName}
          />
    </main>
  )
}
