<!DOCTYPE html>
<html lang="en">
<head>
  
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css">
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css">
  <style>
    /* Customize card styles */
    .slick-slide {
      margin: 0 10px;
      min-height: 200px;
      padding-right: 25px;
      padding-left: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
   
      border-radius: 8px;
    }
    .multiple-card-slider img{
      width:392px;
      height: 208px;
    
      border-radius: 8px;
    }
    .multiple-card-slider 
    {
      /* height:500px;
      width:100%; */
    }
  
    .slick-prev,
    .slick-next {
     
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
      cursor: pointer;
      background: rgba(203, 203, 203, 0.874);
      border-radius: 50%;  
    }

    .slick-prev {
      left: 20px;
    }

    .slick-next {
      right: 20px;
    }
  </style>
</head>
<body>
  
  <div class="multiple-card-slider">
    <div><img src="r1.jpg"></div>
    <div><img src="r2.jpg"></div>
    <div><img src="r5.png"></div>
    <div><img src="r3.jpg"></div>
    <div><img src="r5.png"></div>
  </div>

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
  <script>
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
  </script>
</body>
</html>
