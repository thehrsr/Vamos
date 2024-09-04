import React from 'react'
import '../css/Home.css'
import a from '../assets/a.png'
import b from '../assets/b.png'
import c from '../assets/c.png'


export default function Home() {
    // document.getElementById("showFormButton").addEventListener("click", function(event) {
    //     var button = this;
    //     var container = document.querySelector(".container");
    //     container.classList.add("open");
    //     button.style.display = "none";
    //     event.stopPropagation(); // Prevent the click event from propagating to the document
    //   });
      
    //   document.addEventListener("click", function(event) {
    //     var button = document.getElementById("showFormButton");
    //     var container = document.querySelector(".container");
    //     if (!container.contains(event.target)) {
    //       container.classList.remove("open");
    //       button.style.display = "block";
    //     }
    //   });
  
  return (
    <div>
      <div className="home" id="home">
    <div className="text">
        <h3>Save the earth</h3><h1>Rent an <span style={{color:'#ffb037'}}>E-Bike</span></h1>
        <p>We have a wide range of geared, non-geared two wheelers and scooters for rent.We have become one of India's leading bike rentals. Rent wide range of bikes on hourly, daily, weekly or monthly basis.</p>
    </div>
    <br/><div className="bookimg">
        <div className="bg2"><img src={a}/><p>3+ Types</p></div>
        <div className="bg2"><img src={b}/><p>9+ Location</p></div>
        <div className="bg2"><img src={c}/><p>Flexible Date</p></div>
    </div>
    <div className="container">
        <button id="showFormButton">Book Now</button>
        <div className="form-container">
        <form id="myForm">
            <form action="">
                <div className="input-box">
                <span>Location</span>
                <input type= "search" name="" id="" placeholder="Search Places"/> 
                <select type="search" id="location" name="color" className="form-control" placeholder="Search Places">
									<option>Udaipur</option>
									<option>Jaipur</option>
									<option>Kota</option>
								</select></div> 
                <div className="input-box">
                <span>Pick-Up Date</span>
                <input type="date" name="" id=""/>
                </div>
                <div className="input-box">
                    <span>Return Date</span>
                    <input type="date" name="" id=""/>
                    </div>
                    <a routerLink="/ride"> <input type="submit" name="" id="" className="btn"/> </a>
                </form>
        </form>
      </div>
      
</div>
</div>

    </div>
  )
}
