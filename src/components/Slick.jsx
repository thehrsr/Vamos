import React from 'react'
import r1 from '../assets/r1.jpg'
import r2 from '../assets/r2.jpg'
import r5 from '../assets/r5.png'
import r3 from '../assets/r3.jpg'
import '../css/Slick.css'

export default function Slick() {
    $(document).ready(function() {
        $('.multiple-card-slider').slick({
          slidesToShow: 3, // Number of cards to show at a time
          slidesToScroll: 1, // Number of cards to scroll per slide change
          dots: true, // Show navigation dots
          autoplay: true, // Enable autoplay
          autoplaySpeed: 3000, // Set autoplay speed in milliseconds
          prevArrow: '<button type="button" class="slick-prev"><i class="bx bx-chevron-left"></i></button>', // Add custom arrow icons (using Boxicons)
          nextArrow: '<button type="button" class="slick-next"><i class="bx bx-chevron-right"></i></button>', // Add custom arrow icons (using Boxicons)
         
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2 // Adjust the number of cards shown on smaller screens
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1 // Adjust the number of cards shown on even smaller screens
              }
            }
          ]
        });
      });
  return (
    <div>
      <div class="slider-container">
  <div class="multiple-card-slider">
    <div><img src={r1}/></div>
    <div><img src={r2}/></div>
    <div><img src={r5}/></div>
    <div><img src={r3}/></div>
    <div><img src={r5}/></div>
  </div>
    </div>
    </div>
  )
}
