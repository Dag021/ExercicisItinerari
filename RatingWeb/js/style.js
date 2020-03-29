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

/***************Valoracions Beers*******************/

/************* Icono ***************/
function openIcons(){
  document.getElementById("iconBeer").style.display = "block";
  document.getElementById("iconStar").style.display = "block";
  document.getElementById("iconHeart").style.display = "block";
}
function closedIcons(){
  if(document.getElementById("cinc").className == "fas fa-beer"){
    document.getElementById("iconBeer").style.display = "block";
    document.getElementById("iconStar").style.display = "none";
    document.getElementById("iconHeart").style.display = "none";
  } else if (document.getElementById("cinc").className == "fas fa-star"){
      document.getElementById("iconBeer").style.display = "none";
      document.getElementById("iconStar").style.display = "block";
      document.getElementById("iconHeart").style.display = "none";
    } else {
      document.getElementById("iconBeer").style.display = "none";
    document.getElementById("iconStar").style.display = "none";
    document.getElementById("iconHeart").style.display = "block";
    }
}
function changeIconBeer(){
  document.getElementById("cinc").className = "fas fa-beer";
  document.getElementById("quatre").className = "fas fa-beer";
  document.getElementById("tres").className = "fas fa-beer";
  document.getElementById("dues").className = "fas fa-beer";
  document.getElementById("una").className = "fas fa-beer";
}
function changeIconStar(){
  document.getElementById("cinc").className = "fas fa-star";
  document.getElementById("quatre").className = "fas fa-star";
  document.getElementById("tres").className = "fas fa-star";
  document.getElementById("dues").className = "fas fa-star";
  document.getElementById("una").className = "fas fa-star";
}
function changeIconHeart(){
  document.getElementById("cinc").className = "fas fa-heart";
  document.getElementById("quatre").className = "fas fa-heart";
  document.getElementById("tres").className = "fas fa-heart";
  document.getElementById("dues").className = "fas fa-heart";
  document.getElementById("una").className = "fas fa-heart";
}
/*************** Clasificación ******************/
var ignoreClickOnMeElement = document.getElementById('beerClasificacion');

document.addEventListener('click', function(event) {
    var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
    if (!isClickInsideElement) {
        reset();
    }
});

function reset() {
  var ele = document.getElementsByName("estrellas");
   for(var i=0;i<ele.length;i++){
     ele[i].checked = false;
   }
}//function reset

/************************ Resultado ****************************/
function enviarValoracion(){
  var ele = document.getElementsByName("estrellas");
  for(var i=0;i<ele.length;i++){
    if(ele[i].checked == true){
      document.getElementById("resultValoracion").innerHTML = ele[i].value + " x ";
      document.getElementById("blockThanks").style.display = "block";

      if(document.getElementById("cinc").className == "fas fa-beer"){
          document.getElementById("iconValoracion").className = "fas fa-beer";

      } else if (document.getElementById("cinc").className == "fas fa-star"){
            document.getElementById("iconValoracion").className = "fas fa-star";
         } else {
              document.getElementById("iconValoracion").className = "fas fa-heart";
            }
    }
  }
}//function enviarValoracion

