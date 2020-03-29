
window.onload=function (){

  
  /*************** Nav Fixed ********************/

  window.onscroll = function() {myNavBar()};

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function myNavBar() {
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
  }//function myNavBar

  /*************** Select Countries********************/
  
  var objCountries= JSON.parse(Arrcountries);
  for ( var i=1 ; i< objCountries.countries.length ; i++){
      document.getElementById("selectCountry").innerHTML += '<option value="'+(i)+'">'+objCountries.countries[i].name+'</option>';
    }


}//function onload



