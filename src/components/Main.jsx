import React, { useRef } from 'react'
import Music from './Music'
import { useState } from 'react'
export default function Main({sendLinkAndName}) {
  const getLinkAndName=(link,name)=>{
    setName(name)
    setLink(link)
   }
   
   const [link,setLink] = useState()
   const [name,setName] = useState()
  return (
    
  
    <main>
    <div className='whole__music'>
   
      {sendLinkAndName(link,name)}
        <Music
          link= {require('../music/mem1.mp3')}
          name="first"
          getLinkAndName={getLinkAndName}
          />
        
        
        <Music
          link= {require('../music/mem2.mp3')}
          name="second"
          getLinkAndName={getLinkAndName}
          />
         <Music
          link= {require('../music/mem3.mp3')}
          name="third"
          getLinkAndName={getLinkAndName}
          />
        
        
        <Music
          link= {require('../music/mem4.mp3')}
          name="fourth"
          getLinkAndName={getLinkAndName}
          />
          <Music
          link= {require('../music/trap1.mp3')}
          name="fifth"
          getLinkAndName={getLinkAndName}
          />
           <Music
          link= {require('../music/detroit2.mp3')}
          name="sixth"
          getLinkAndName={getLinkAndName}
          />
        
        
        <Music
          link= {require('../music/drill1.mp3')}
          name="seventh"
          getLinkAndName={getLinkAndName}
          />
         <Music
          link= {require('../music/drill2.mp3')}
          name="eighth"
          getLinkAndName={getLinkAndName}
          />
        
        
        <Music
          link= {require('../music/1plug.mp3')}
          name="ninth"
          getLinkAndName={getLinkAndName}
          />
          <Music
          link= {require('../music/3plug.mp3')}
          name="tenth"
          getLinkAndName={getLinkAndName}
          />
    </div>
          <div className="right"><img src={require('../images/стакан.jpg')} alt=""/></div>
          <div className="left"><img src={require('../images/стакан1.jpg')} alt=""/></div>
    </main>
  )
}
