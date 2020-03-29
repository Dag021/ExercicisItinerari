
window.onload=function(){

/***************Nav********************/

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    document.getElementById("logo").style.visibility="visible";
    document.getElementById("logo").style.opacity="1";
    document.getElementById("logo").style.transition = "visibility 0.5s linear,opacity 0.5s linear";
    document.getElementById("logo").style.webkitTransition = "visibility 0.5s linear,opacity 0.5s linear";
    document.getElementById("logo").style.MozTransition = "visibility 0.5s linear,opacity 0.5s linear";
    document.getElementById("logo").style.OTransition = "visibility 0.5s linear,opacity 0.5s linear";
  } else {
    navbar.classList.remove("sticky");
    document.getElementById("logo").style.visibility="hidden";
    document.getElementById("logo").style.opacity="0";
  }
}

}//function onload




