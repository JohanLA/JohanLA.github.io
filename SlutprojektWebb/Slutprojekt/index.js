$(document).ready(function() {
  
  $( "#responsive-menu-icon" ).click(function() {
  
  
var nav = $(".nav-wrapper");
var navHeight = nav.height();
    
    if (navHeight < 150) {

TweenMax.to(nav, 1, {"height":150});
    } else {
      TweenMax.to(nav, 1, {"height":50});
    };
    
  });
  
  
  
  // menu icon jquery
  
  
  // when whole menu div is clicked
  
  
  $("#responsive-menu-icon").click( function() {
    // if the menu height is not full, transform icon
    var nav = $(".nav-wrapper");
var navHeight = nav.height();
if (navHeight < 150) {
      $("#a").addClass("rotate-down");
    $("#responsive-menu-icon").addClass("menu-up");
     $("#b").addClass("disappear");   
     $("#c").addClass("rotate-up");
    } else {     
      // if it's not less than full height, remove animation classes
      $("#a").removeClass("rotate-down");
    $("#responsive-menu-icon").removeClass("menu-up");
     $("#b").removeClass("disappear");
   
     $("#c").removeClass("rotate-up"); 
    };
  });
});


var slideIndex = 1;
showSlides(slideIndex);
 
function plusSlides(n) {
  showSlides(slideIndex += n);
}
 
function currentSlide(n) {
  showSlides(slideIndex = n);
}
 
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
