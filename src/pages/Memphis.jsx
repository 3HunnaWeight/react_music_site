import React, { useRef } from 'react'
import Music from '../components/Music'
import Player from '../components/Player'
import { useState } from 'react'
import Cups from '../components/Cups'
export default function Memphis({sendLinkAndName}) {
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
          link= {require('../music/mem1.mp3')}
          name="first Memphis"
          getLinkAndName={getLinkAndName}
          />
        
        
        <Music
          link= {require('../music/mem2.mp3')}
          name="second Memphis"
          getLinkAndName={getLinkAndName}
          />
         <Music
          link= {require('../music/mem3.mp3')}
          name="third Memphis"
          getLinkAndName={getLinkAndName}
          />
        
        
        <Music
          link= {require('../music/mem4.mp3')}
          name="fourth Memphis"
          getLinkAndName={getLinkAndName}
          />
    </main>
  )
}
