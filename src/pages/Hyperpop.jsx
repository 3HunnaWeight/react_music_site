import React, { useRef } from 'react'
import Music from '../components/Music'
import Player from '../components/Player'
import { useState } from 'react'
import Cups from '../components/Cups'
export default function Hyperpop({sendLinkAndName}) {
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
          link= {require('../music/hyperpop1.mp3')}
          name="first Hyperpop"
          getLinkAndName={getLinkAndName}
          />
        
        
        <Music
          link= {require('../music/hyperpop2.mp3')}
          name="second Hyperpop"
          getLinkAndName={getLinkAndName}
          />
         <Music
          link= {require('../music/hyperpop3.mp3')}
          name="third Hyperpop"
          getLinkAndName={getLinkAndName}
          />
        
        
        <Music
          link= {require('../music/hyperpop4.mp3')}
          name="fourth Hyperpop"
          getLinkAndName={getLinkAndName}
          />     
           <Music
          link= {require('../music/hyperpop5.mp3')}
          name="fourth Hyperpop"
          getLinkAndName={getLinkAndName}
          />  
    </main>
  )
}
