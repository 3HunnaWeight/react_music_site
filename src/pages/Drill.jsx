import React, { useRef } from 'react'
import Music from '../components/Music'
import Player from '../components/Player'
import { useState } from 'react'
export default function Drill({sendLinkAndName}) {
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
          link= {require('../music/drill1.mp3')}
          name="first Drill"
          getLinkAndName={getLinkAndName}
          />
        
        
        <Music
          link= {require('../music/drill2.mp3')}
          name="second Drill"
          getLinkAndName={getLinkAndName}
          />
         <Music
          link= {require('../music/drill3.mp3')}
          name="third Drill"
          getLinkAndName={getLinkAndName}
          />
        
        
        <Music
          link= {require('../music/drill4.mp3')}
          name="fourth Drill"
          getLinkAndName={getLinkAndName}
          />   
           <Music
          link= {require('../music/drill5.mp3')}
          name="fourth Detroit"
          getLinkAndName={getLinkAndName}
          />
          <div className="right"><img src={require('../images/стакан.jpg')} alt=""/></div>
          <div className="left"><img src={require('../images/стакан1.jpg')} alt=""/></div>
    </main>
  )
}
