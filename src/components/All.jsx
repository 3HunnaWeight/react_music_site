import React, { useState } from 'react'
import Detroit from '../pages/Detroit'
import Trap from '../pages/Trap'
import Memphis from '../pages/Memphis'
import Hyperpop from '../pages/Hyperpop'
import Plug from '../pages/Plug'
import Drill from '../pages/Drill'
import Main from '../components/Main'
import Header from './Header'
import Footer from './Footer'
import Player from './Player'
export default function All() {
    const getMain = (main)=>{
        setInfo(main)
      }
      const getInfo=(style)=>{
        setInfo(style)
      }
      const [style,setInfo]=useState("Main")
    
      const sendLinkAndName=(link,name)=>{
        setName(name)
        setLink(link)
       }

       const [link,setLink] = useState()
       const [name,setName] = useState()
       
      let page 
      
      switch (style) {
        case "Drill":
          page = <Drill
          sendLinkAndName={sendLinkAndName}
          />
        break;
    
        case "Trap":
          page = <Trap
          sendLinkAndName={sendLinkAndName}
          />
        break;
    
        case "Memphis":
          page = <Memphis
          sendLinkAndName={sendLinkAndName}
          />
        break;
    
        case "Plug":
          page = <Plug
          sendLinkAndName={sendLinkAndName}
          />
        break;
    
        case "Hyperpop":
          page = <Hyperpop
          sendLinkAndName={sendLinkAndName}
          />
        break;
    
        case "Detroit":
          page = <Detroit
          sendLinkAndName={sendLinkAndName}
          />
          break;
    
          case "Main":
          page = <Main
          sendLinkAndName={sendLinkAndName}
          />
        break;
      }
  return (
  <div>
    <Header
      getMainStyle={getMain}
      getStyle={getInfo}
    />
    {page}
   <Player
      link={link}
      name={name}
   />
    <Footer/>
  </div>
  )
}
