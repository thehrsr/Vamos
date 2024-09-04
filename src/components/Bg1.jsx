import React from 'react'
import speed from '../assets/speed.png'
import '../css/Bg1.css'

export default function Bg1() {
  return (
    <div>
      
<div className="contabg">
    <div className="imgbg">
        <img src={speed}/>
    </div>
    <div className="textbg">
        <h1>SAFETY <span style={{color:'#ffb037'}}>FEATURES</span></h1>
        <br/><p> We understand that safety is a top priority for our riders, which is why all of our motorcycles are equipped with the latest safety features. From anti-lock brakes to traction control, our motorcycles have everything you need to ride with confidence.</p>
        <br/><button id="learn">Learn More</button>
    </div>
</div>
    </div>
  )
}
