window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (window.innerWidth>'1000'){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("menu").style.height = "70px";
    } else {
      document.getElementById("menu").style.height = "100px";
    }
  }
  changeColorMenu();
  changeHeight();
}