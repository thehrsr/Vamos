import React from 'react'
import acce from '../assets/acce.png'
import '../css/Bg2.css'

export default function Bg2() {
  return (
    <div>
      <div className="contabg2">
    <div className="imgbg2">
        <img src={acce}/>
    </div>
    <div className="textbg2">
        <h1>ACCESS<span style={{color:'#ffb037'}}>ORIES</span></h1>
        <br/><p> We also offer a range of accessories to enhance your riding experience. From helmets to GPS systems, we have everything you need to make your ride comfortable and safe.</p>
        <br/><button id="learn2">Learn More</button>
    </div>
</div>
    </div>
  )
}
