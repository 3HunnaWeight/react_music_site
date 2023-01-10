import React from 'react'
import{Routes, Route, Link, BrowserRouter} from 'react-router-dom'
import App from '../App'
import Contact from '../links/Contact'
import Send from '../links/Send'

export default function footer() {
  return (
    <div>
         <footer className="footer">
      <ul>
        <li><Link to="/contact">Связаться с нами</Link></li>
        <li>
          <div className='socials'>
              <div className='social'>
                  <a href="#"><img src={require("../images/vk.png")} alt="" /></a>
              </div>
              <div className='social'>
                  <a href="#"><img src={require("../images/tg.png")} alt="" /></a>
              </div>
              <div className='social'>
                  <a href="#"><img src={require("../images/inst.png")} alt="" /></a>
              </div>
          </div>
        </li>
        <li><Link to="/send">Загрузить свой бит</Link></li>
      </ul>
    </footer>
    </div>
  )
}
