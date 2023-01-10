import React, { useEffect, useRef, useState } from 'react'
import Music from './Music'
export default function Player(props) {
  function play(song) {
    song.current.play()
    console.log(song.current)
  }
  const[volume,setVolume] = useState(0.5)
const song = useRef()
if(typeof song.current!=="undefined"){
  song.current.autoplay=true
  song.current.volume = volume
}
let bar = useRef()
let containerBar = useRef()

function progress(e){
  const{duration,currentTime}=e.srcElement
  const progressPercent = (currentTime/duration)*100
  bar.current.style.width=`${progressPercent}%`
  }

  function timeUpdate(song) {
    song.current.addEventListener('timeupdate',progress)
  }

  function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = song.current.duration
  song.current.currentTime = (clickX/width)*duration
  }

  function setTime(bar){
    bar.current.addEventListener('click',setProgress)
  }

  const [currentName,setCurrentName] = useState()

  const changeName =()=>{
    setCurrentName(props.name)
  }
  const [isPlay,setIsPlay] = useState(true)
  const conditionFalse=()=>{
      setIsPlay(false)
  }
  const conditionTrue=()=>{
    setIsPlay(true)
}
const volumeControlPlus=()=>{
  if(volume<=0.9)
  {setVolume(volume+0.1)}
  else{
    setVolume(volume+0)
  }
  
}
const volumeControlMinus=()=>{
  if(volume>=0.1)
  {setVolume(volume-0.1)}
  else{
    setVolume(volume+0)
  }
}

return (
    
    <div className='musicPlayer'>
        <audio ref={song} onPlay={()=>{timeUpdate(song);setTime(containerBar);changeName();conditionFalse()}}  className="audio"src={props.link}></audio>
        {isPlay
          ?<div className="play" onClick={()=>{play(song);}}>Play</div>
          :<div className="stop" onClick={()=>{song.current.pause();conditionTrue()}}>Stop</div>
        }
          <div className="control">
               <div className="nameOfSong">
                   {props.name||currentName}
               </div>
               <div className="barcont" ref={containerBar}>
                   <div className="bar" ref={bar}>
                   
                   </div>
               </div>
               
          </div>
          <div className='volume'>
            <div className='plus' onClick={()=>{volumeControlPlus()}}>+</div>
            <div className='minus' onClick={()=>{volumeControlMinus()}}>—</div>
          </div>
     </div>
    
  )
}
