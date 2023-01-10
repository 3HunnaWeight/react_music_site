import Header from "./components/Header";
import "./styles/all.css"
import "./styles/logo.css"
import "./styles/navbar.css"
import Main from "./components/Main";
import "./styles/music.css";
import "./styles/main.css"
import Footer from "./components/Footer"
import Drill from "./pages/Drill"
import Memphis from "./pages/Memphis"
import Trap from "./pages/Trap"
import Plug from "./pages/Plug"
import Hyperpop from "./pages/Hyperpop"
import Detroit from "./pages/Detroit"
import "./styles/footer.css"
import "./styles/cups.css"
import "./styles/player.css"
import { useState } from "react";
import Player from "./components/Player";
import Contact from "./links/Contact";
import "./styles/contact.css"
import Send from "./links/Send";
import { BrowserRouter, Route,Routes, } from "react-router-dom";
import All from "./components/All";
function App() {
  return (
    <div className="App"> 
    {/*     <BrowserRouter>
          <Routes>
            <Route path="/" element={<All/>}/>
            <Route path="/send" element={<Send/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </BrowserRouter> */}
        <All/>
    </div>
  
    
  );
}
export default App;
