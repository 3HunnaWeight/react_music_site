import React, { useRef } from 'react'
import Music from '../components/Music'
import Player from '../components/Player'
import { useState } from 'react'
export default function Trap({sendLinkAndName}) {
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
          link= {require('../music/trap1.mp3')}
          name="first Trap"
          getLinkAndName={getLinkAndName}
          />
        
        
        <Music
          link= {require('../music/trap2.mp3')}
          name="second Trap"
          getLinkAndName={getLinkAndName}
          />
         <Music
          link= {require('../music/trap3.mp3')}
          name="third Trap"
          getLinkAndName={getLinkAndName}
          />
        
        
        <Music
          link= {require('../music/trap4.mp3')}
          name="fourth Trap"
          getLinkAndName={getLinkAndName}
          />
           <Music
          link= {require('../music/trap5.mp3')}
          name="fourth Trap"
          getLinkAndName={getLinkAndName}
          />
          <div className="right"><img src={require('../images/стакан.jpg')} alt=""/></div>
          <div className="left"><img src={require('../images/стакан1.jpg')} alt=""/></div>
    </main>
  )
}
