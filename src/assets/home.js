document.getElementById("showFormButton").addEventListener("click", function(event) {
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
