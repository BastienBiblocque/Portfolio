let case1 = document.getElementById("case");
let hover1 = document.getElementById("hover");
let case2 = document.getElementById("case2");
let hover2 = document.getElementById("hover2");
let case3 = document.getElementById("case3");
let hover3 = document.getElementById("hover3");
let case4 = document.getElementById("case4");
let hover4 = document.getElementById("hover4");
let case5 = document.getElementById("case5");
let hover5 = document.getElementById("hover5");
let case6 = document.getElementById("case6");
let hover6 = document.getElementById("hover6");


case1.addEventListener("mouseover", function( event ) {
  var largeur = window.innerWidth;
  if(largeur>=1000){
    hover1.style.display = "block";
  }
  }, false);

case1.addEventListener("mouseout", function( event ) {
    hover1.style.display = "none";
}, false);



case2.addEventListener("mouseover", function( event ) {
  var largeur = window.innerWidth;
  if(largeur>=1000){
    hover2.style.display = "block";
  }
  }, false);

case2.addEventListener("mouseout", function( event ) {
    hover2.style.display = "none";
}, false);


case3.addEventListener("mouseover", function( event ) {
  var largeur = window.innerWidth;
  if(largeur>=1000){
    hover3.style.display = "block";
  }
  }, false);

case3.addEventListener("mouseout", function( event ) {
    hover3.style.display = "none";
}, false);

case4.addEventListener("mouseover", function( event ) {
  var largeur = window.innerWidth;
  if(largeur>=1000){
    hover4.style.display = "block";
  }
  }, false);

case4.addEventListener("mouseout", function( event ) {
    hover4.style.display = "none";
}, false);

case5.addEventListener("mouseover", function( event ) {
  var largeur = window.innerWidth;
  if(largeur>=1000){
    hover5.style.display = "block";
  }
  }, false);

case5.addEventListener("mouseout", function( event ) {
    hover5.style.display = "none";
}, false);

case6.addEventListener("mouseover", function( event ) {
  var largeur = window.innerWidth;
  if(largeur>=1000){
    hover6.style.display = "block";
  }
  }, false);

case6.addEventListener("mouseout", function( event ) {
    hover6.style.display = "none";
}, false);