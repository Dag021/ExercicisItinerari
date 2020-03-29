//Clear all imput in load
document.getElementById("beerName").value = '';
document.getElementById("valorABV").value = '';
document.getElementById("tipoCerveza").value = "0";
document.getElementById("categoriaCerveza").value = "0";
document.getElementById("estiloCerveza").value = "0";
document.getElementById("breweryName").value = '';
document.getElementById("selectCountry").value = "0";


function validation(){ 
  
    var isCorrect = true; 

    if(document.getElementById('beerName').value != ""){
        document.getElementById("errorBeerName").className = "correctInput";
        document.getElementById("beerName").className = "form-control is-valid";
    } else{
        document.getElementById("errorBeerName").innerHTML = "Required field"; 
        document.getElementById("errorBeerName").className = "errorForm";
        document.getElementById("beerName").className = "form-control is-invalid";
        isCorrect = false;
    }

    if(document.getElementById('valorABV').value != ""){
        document.getElementById("errorValorABV").className = "correctInput";
        document.getElementById("valorABV").className = "form-control is-valid";
    } else{
        document.getElementById("errorValorABV").innerHTML = "Required field"; 
        document.getElementById("errorValorABV").className = "errorForm";
        document.getElementById("valorABV").className = "form-control is-invalid";
        isCorrect = false;
    }

    if(document.getElementById('breweryName').value != ""){
        document.getElementById("errorBreweryName").className = "correctInput";
        document.getElementById("breweryName").className = "form-control is-valid";
    } else{
        document.getElementById("errorBreweryName").innerHTML = "Required field"; 
        document.getElementById("errorBreweryName").className = "errorForm";
        document.getElementById("breweryName").className = "form-control is-invalid";
        isCorrect = false;
    }

    if(document.getElementById('selectCountry').value != "0"){
        document.getElementById("errorCountry").className = "correctInput";
        document.getElementById("selectCountry").className = "form-control is-valid";
    } else{
        document.getElementById("errorCountry").innerHTML = "Required field"; 
        document.getElementById("errorCountry").className = "errorForm";
        document.getElementById("selectCountry").className = "form-control is-invalid";
        isCorrect = false;
    }

    /********************************/
    //comprovar tot el formulari per enviar
    if(isCorrect == true){
        document.getElementById("formResult").innerHTML = "Formulari Correcte";
    } else {
            document.getElementById("formResult").innerHTML = "ERROR, Formulari Incorrecte";
            document.getElementById("formResult").style.color = "#ff0000";
        }
}



function clearBeerName(){
    document.getElementById('errorBeerName').className = "correctInput";
    document.getElementById("beerName").className = "form-control";
}
function clearValorABV(){
    document.getElementById('errorValorABV').className = "correctInput";
    document.getElementById("valorABV").className = "form-control";
}
function clearBreweryName(){
    document.getElementById('errorBreweryName').className = "correctInput";
    document.getElementById("breweryName").className = "form-control";
}


function popUp(){
    document.getElementById('blockPopUp').style.display = "flex";
    document.getElementById('pageSearch').style.overflow = "hidden";
}
function closedPopUp(){
    document.getElementById('blockPopUp').style.display = "none";
    document.getElementById('pageSearch').style.overflow = "auto";
}




