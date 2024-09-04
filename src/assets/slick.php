<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css">
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css">
  <style>
    /* Customize card styles */
    .slick-slide {
      margin: 0 10px;
      min-height: 200px;
      padding-right: 50px;
      padding-left: 30px;
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
    <div><img src="1.png"></div>
    <div><img src="2.png"></div>
    <div><img src="3.png"></div>
    <div><img src="4.png"></div>
    <div><img src="5.png"></div>
    <div><img src="6.png"></div>
    <div><img src="7.png"></div>
    <!-- Add more cards here -->
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
