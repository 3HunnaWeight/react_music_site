import React, { useRef } from 'react'
import Music from '../components/Music'
import Player from '../components/Player'
import { useState } from 'react'
export default function Detroit({sendLinkAndName}) {
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
          link= {require('../music/detroit1.mp3')}
          name="first Detroit"
          getLinkAndName={getLinkAndName}
          />
        
        
        <Music
          link= {require('../music/detroit2.mp3')}
          name="second Detroit"
          getLinkAndName={getLinkAndName}
          />
         <Music
          link= {require('../music/detroit3.mp3')}
          name="third Detroit"
          getLinkAndName={getLinkAndName}
          />
        
        
        <Music
          link= {require('../music/detroit4.mp3')}
          name="fourth Detroit"
          getLinkAndName={getLinkAndName}
          />
           <Music
          link= {require('../music/detroit5.mp3')}
          name="fourth Detroit"
          getLinkAndName={getLinkAndName}
          />

          <div className="right"><img src={require('../images/стакан.jpg')} alt=""/></div>
          <div className="left"><img src={require('../images/стакан1.jpg')} alt=""/></div>
    </main>
  )
}
