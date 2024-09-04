<!DOCTYPE html> 
<html lang="en"> 
<head>
<meta charset="UTF-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<meta http-equiv="X-UA-Compatible" content= "IE=edge", <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<title>Vamos</title>
<link rel="stylesheet" href="style.css">
<link rel="stylesheet"
href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">

</head> 
<body>
        <header>
            <div class= "logo"><img src="logo.png" alt=""></div>
            <div class="bx bx-menu" id="menu-icon"></div>
            <ul class="navbar">
            <li><a href="#home">Home</a></li>
            <li><a href="#ride">Ride</a></1i>
            <li><a href="#services">Services</a></li>
            <li><a href="#reviews">About</a></li> 
            <li><a href="#reviews">Reviews</a></li>
            </ul>
            <div class="header-btn">
<a href="#" class="sign-up">Sign Up</a>
<a href="#" class="sign-in">Sign In</a>
</div> 
    </header>
    <div class="home" id="home">
        <div class="text">
            <h3><span>Save the earth</h3><h1>Rent an <span style="color: var(--main-color);">E-Bike</h1></span>
            <p>We have a wide range of geared, non-geared two wheelers and scooters for rent.We have become one of India's leading bike rentals. Rent wide range of bikes on hourly, daily, weekly or monthly basis.</p>
        </div>
        <br><div class="bookimg">
            <div class="bg2"><img src="a.png"><p>3+ Types</p></div>
            <div class="bg2"><img src="b.png"><p>9+ Location</p></div>
            <div class="bg2"><img src="c.png"><p>Flexible Date</p></div>
        </div>
        <div class="container">
            <button id="showFormButton">Book Now</button>
            <div class="form-container">
            <form id="myForm">
                <form action="">
                    <div class="input-box">
                    <span>Location</span>
                    <input type= "search" name="" id="" placeholder="Search Places"> </div> 
                    <div class="input-box">
                    <span>Pick-Up Date</span>
                    <input type="date" name="" id="">
                    </div>
                    <div class="input-box">
                        <span>Return Date</span>
                        <input type="date" name="" id="">
                        </div>
                        <input type="submit" name="" id="" class="btn"> 
                    </form>
            </form>
          </div>
          
    </div>
</div>


<div class="slick2">
    <p>Sanitised and Safe Bikes</p>
    <?php include("slicknew.php")?>
    </div>
    <div class="slick">
    <p>Featured</p>
    <?php include("slick.php")?>
    </div>
    <br>
    <div class="imgbg1">
    <?php include("imgbg.php")?>
    </div>
    <div class="latest">
    <?php include("latest.php")?>
    </div>
</div>
<div class="off">
<p>Why choose Vamos</p>
    <?php include("offer.php")?>
    </div>
    <div class="acce">
    <?php include("accesories.php")?>
    </div>






    <script>document.getElementById("showFormButton").addEventListener("click", function(event) {
  var button = this;
  var container = document.querySelector(".container");
  container.classList.add("open");
  button.style.display = "none";
  event.stopPropagation(); // Prevent the click event from propagating to the document
});

document.addEventListener("click", function(event) {
  var button = document.getElementById("showFormButton");
  var container = document.querySelector(".container");
  if (!container.contains(event.target)) {
    container.classList.remove("open");
    button.style.display = "block";
  }
});

      
      </script>

</body> </html>