
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

  /*************** Select Countries ********************/
  
  var objCountries= JSON.parse(Arrcountries);
  for ( var i=1 ; i< objCountries.countries.length ; i++){
      document.getElementById("selectCountry").innerHTML += '<option value="' + (i) + '">' + objCountries.countries[i].name + '</option>';
    }

  document.getElementById("selectCountry").onchange = function(){
      for ( var i=1 ; i< objCountries.countries.length ; i++){
        if(document.getElementById("selectCountry").value == i){
          document.getElementById("flagCountry").innerHTML = '<img src="img/flags/' + objCountries.countries[i].flag + '" class="rounded-circle" alt="' + objCountries.countries[i].name + '" height="50" width="50">'
        }
      }
      if(document.getElementById("selectCountry").value != "0"){
        document.getElementById('errorCountry').className = "correctInput";
        document.getElementById("selectCountry").className = "form-control";
      }
    }
  
  /*************** Select Beers Styles (nested input) ********************/

  var objBeer= JSON.parse(Arrbeerstyles);
  
  for ( var i=0 ; i< objBeer.beerStyles.length ; i++){
        document.getElementById("tipoCerveza").innerHTML += '<option value="'+(i)+'">'+objBeer.beerStyles[i].tipo+'</option>';
    }

  document.getElementById("tipoCerveza").onchange = functionTipoCerveza;

    function functionTipoCerveza() {
        document.getElementById("categoriaCerveza").style.display = "inline";
        document.getElementById("categoriaCerveza").innerHTML = "";
        document.getElementById("estiloCerveza").innerHTML = "";
        document.getElementById("estiloCerveza").style.display = "none";
        document.getElementById("infoType").style.display = "none";
        document.getElementById("infoCategory").style.display = "block";

        if(document.getElementById("tipoCerveza").value == ""){
            document.getElementById("categoriaCerveza").style.display="none";
            document.getElementById("estiloCerveza").style.display="none";
            document.getElementById("infoType").style.display = "block";
        document.getElementById("infoCategory").style.display = "none";
        } else {
              for ( var j=0 ; j< objBeer.beerStyles[this.value].categories.length ; j++){
                  document.getElementById("categoriaCerveza").innerHTML += '<option value="'+(j)+'">'+objBeer.beerStyles[this.value].categories[j].category+'</option>';
              } 
              document.getElementById("categoriaCerveza").onchange = functionCategoriaCerveza; 
            }     
    } //End functionTipoCerveza

    function functionCategoriaCerveza() {
        document.getElementById("estiloCerveza").style.display="inline";
        document.getElementById("estiloCerveza").innerHTML="";
        document.getElementById("infoCategory").style.display = "none";
        document.getElementById("infoStyle").style.display = "block";
      
        if(objBeer.beerStyles[0].categories[this.value].styles == undefined || objBeer.beerStyles[1].categories[this.value].styles == undefined){
            document.getElementById("estiloCerveza").style.display="none";
            document.getElementById("infoCategory").style.display = "block";
            document.getElementById("infoStyle").style.display = "none";
        }

        if(document.getElementById("categoriaCerveza").value == 0){
        document.getElementById("estiloCerveza").style.display="none";
        } else {    
              if(document.getElementById("tipoCerveza").value == 0){
                  for ( var k=0 ; k< objBeer.beerStyles[0].categories[this.value].styles.length ; k++){
                      document.getElementById("estiloCerveza").innerHTML += '<option value="'+(k)+'">'+objBeer.beerStyles[0].categories[this.value].styles[k].style+'</option>';
                    } 
              } else {
                    for ( var k=0 ; k< objBeer.beerStyles[1].categories[this.value].styles.length ; k++){
                        document.getElementById("estiloCerveza").innerHTML += '<option value="'+(k)+'">'+objBeer.beerStyles[1].categories[this.value].styles[k].style+'</option>';
                        if (objBeer.beerStyles[1].categories[this.value].styles[k].style == ""){
                            document.getElementById("estiloCerveza").style.display = "none";
                         }
                    } 
            
                }
            }
    } // End functionCategoriaCerveza

  /******************************************************************/
  /**************** Buscador Autocompletable ************************/
  /******************************************************************/
    
  function autocomplete(inp, arr) {
    
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
  /*An array containing all the country names in the world:*/
  var beerstyles = ["Ale", "Pale Ale", "English Pale Ale / Bitter", "Burton Pale Ale", "Premium Bitter/ESB", "Light Ale", "Indian Pale Ale", "Double IPA", "Strong Pale Ale", "Scotch Ale", "Barley Wine", "American Strong Ale", "Old Ale", "English Strong Ale", "American Pale Ale", "Blonde Ale", "American Wheat Ale", "Amber Ale", "Stout/Porter", "American Stout", "Sweet Stout", "Oatmeal Stout", "Flavored Stout", "Imperial Stout", "Irish Stout", "Foreign Stout", "English Porter", "American Porter", "German Ale", "Roggenbier", "Weissbier", "Weizenbock", "Dunkelweizen", "Kristallweizen", "Berliner Weisse", "Gose", "Hefeweizen", "Belgian/French Ale", "Saison", "Oud Bruin", "Witbier", "Biere de Champagne", "Belgian Dark Ale", "Belgian Strong Dark Ale", "Quadrupel", "Dubbel", "Belgian Pale Ale", "Belgian Strong Pale Ale", "Tripel", "Flanders Red Ale", "Biere de Garde", "Lambic", "Faro", "Gueuze", "Fruit", "Unblended", "American Wild Ale", "Mild Ale", "Brown Ale", "Irish Ale", "Cream Ale", "California Common", "Lager", "German Lager", "Dortmunder", "Bock", "Maibock / Helles", "Doppelbock", "Eisbock", "Dunkler Bock", "Keller Bier", "Märzen", "SchwarzBier", "Munich Lager", "Munich Helles", "Munich Dunkel", "Vienna Lager", "Rauchbier", "European Lager", "European Pale Lager", "European Dark Lager", "European Strong Lager", "Pilsner", "Bohemian Pilsner", "German Pilsner", "American Pilsner", "American Imperial Pilsner", "American Lager", "American Pale Lager", "American Dark/Amber Lager", "American Adjunct Lager", "Light Beer", "Dry Beer", "Ice Beer", "Malt Liquor", "Kölsch", "Altbier", "Baltic Porter"];
  

  /*initiate the autocomplete function on the "myInput" element, and pass along the beerstyles array as possible autocomplete values:*/
  autocomplete(document.getElementById("myInput"), beerstyles);


}//function onload


