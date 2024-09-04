import React from 'react'
import { BrowserRouter as router, Link } from 'react-router-dom'
import classes from '../css/Card.module.css'

export default function Card({image,desc,price,produc,productName,size1,size2,size3,product}) {
  return (
    <div>
       <div className={classes.wrap2}>
      <div className={classes.card_container}>
        <div className={classes.card_images}>
          <img src={image}/>
        </div>
        <div className={classes.slideshow_buttons}>
          <div className={classes.one}></div>
          <div className={classes.two}></div>
          <div className={classes.three}></div>
          <div className={classes.four}></div>
        </div>
        <p className={classes.pick}>choose Model</p>
        <div className={classes.sizes}>
          <div className={classes.size}>{size1}</div>
          <div className={classes.size}>{size2}</div>
          <div className={classes.size}>{size3}</div>
        
        </div>
        <div className={classes.product}>
          <p className={classes.pro}>{classes.product}</p>
          <h1 classNameName={classes.card_h1}>{classes.productName}</h1>
          <h2 classNameName={classes.card_h2}>{classes.price}</h2>
          <p className={classes.desc}>{desc}</p>
          <div className={classes.card_buttons}>
            <Link to="/product2"> <button className={classes.add}>Book Now</button></Link>
            <button className={classes.like}><span></span></button>
          </div>
        </div></div>
      </div>
      
    </div>
  )
}
