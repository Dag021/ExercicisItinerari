//Clear all imput in load
document.getElementById("fName").value = "";
document.getElementById("lName").value = "";
document.getElementById("fMail").value = "";
document.getElementById("numPhone").value = "";
document.getElementById("numId").value = "";
document.getElementById("inputPassword4").value = "";
document.getElementById("inputConfirmPassword4").value = "";
document.getElementById("inputAddress").value = "";
document.getElementById("inputCity").value = "";
document.getElementById("selectCountry").value = "0";
document.getElementById("inputZip").value = "";
document.getElementById("gridCheck").checked = false;

function validation(){
    var isCorrect = true;
    
    //Checked First Name
    var elNombre = document.getElementById("fName").value;
    var patronNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    var compNombre = patronNombre.test(elNombre);
    if(compNombre == true){
        document.getElementById("errorFname").className = "correctInput";
        document.getElementById("fName").className = "form-control is-valid";
    } else {
        if(elNombre == ""){
            document.getElementById("errorFname").innerHTML = "Required field"; 
            document.getElementById("errorFname").className = "errorForm";
            document.getElementById("fName").className = "form-control is-invalid";
            isCorrect = false; 
        } else {
                document.getElementById("errorFname").innerHTML = "Error First Name"; 
                document.getElementById("errorFname").className = "errorForm";
                document.getElementById("fName").className = "form-control  is-invalid";
                isCorrect = false; 
            }   
      }

    //Checked Last Name
    var elApellido = document.getElementById("lName").value;
    var patronApellido = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    var compApellido = patronApellido.test(elApellido);
    if(compApellido == true){
        document.getElementById("errorLname").className = "correctInput";
        document.getElementById("lName").className = "form-control is-valid";
    } else{
        if(elApellido == ""){
            document.getElementById("errorLname").innerHTML = "Required field"; 
            document.getElementById("errorLname").className = "errorForm";
            document.getElementById("lName").className = "form-control is-invalid";
            isCorrect = false; 
        } else {
                document.getElementById("errorLname").innerHTML = "Error Last Name"; 
                document.getElementById("errorLname").className = "errorForm";
                document.getElementById("lName").className = "form-control is-invalid";
                isCorrect = false; 
            }
      }

    //Checked Email
    var elMail = document.getElementById("fMail").value;
    var patronMail = /^[\w]+@{1}[\w]+\.[a-z]{2,3}$/;
    var compMail = patronMail.test(elMail);
    if(compMail == true){
        document.getElementById("errorFmail").className = "correctInput";
        document.getElementById("fMail").className = "form-control is-valid";
    } else{
        if(elMail == ""){
            document.getElementById("errorFmail").innerHTML = "Required field"; 
            document.getElementById("errorFmail").className = "errorForm";
            document.getElementById("fMail").className = "form-control is-invalid";
            isCorrect = false; 
          } else {
                document.getElementById("errorLname").innerHTML = "Error Mail"; 
                document.getElementById("errorLname").className = "errorForm";
                document.getElementById("fMail").className = "form-control is-invalid";
                isCorrect = false; 
                }
          }
    
    //comprovar telèfon +(34 9XX XX XX XX 9XX XX XX XX 6XX XX XX XX 7XX-XX-XX-XX 6XXXXXXXX)
    var elTelefono = document.getElementById("numPhone").value;
    var patronTelefono = /^((\+?34([ \t|\-])?)?[9|6|7]((\d{1}([ \t|\-])?[0-9]{3})|(\d{2}([ \t|\-])?[0-9]{2}))([ \t|\-])?[0-9]{2}([ \t|\-])?[0-9]{2})$/;
    var compTelefono = patronTelefono.test(elTelefono);
    if(compTelefono == true){
        document.getElementById("errorFmail").className = "correctInput";
        document.getElementById("numPhone").className = "form-control is-valid";
    } else{
        if(elTelefono == ""){
            document.getElementById("errorPhone").innerHTML = "Required field"; 
            document.getElementById("errorPhone").className = "errorForm";
            document.getElementById("numPhone").className = "form-control is-invalid";
            isCorrect = false; 
          } else {
                document.getElementById("errorPhone").innerHTML = "Error Phone"; 
                document.getElementById("errorPhone").className = "errorForm";
                document.getElementById("numPhone").className = "form-control is-invalid";
                isCorrect = false; 
                }
      }        
       
   
    //comprovar DNI
    var numero, letr, letra;
    var codiDni = document.getElementById("numId").value;
    var patronDni = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
    var compDni = patronDni.test(codiDni);
    if(compDni == true){
        numero = codiDni.substr(0,codiDni.length-1);
        letr = codiDni.substr(codiDni.length-1,1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero,numero+1);
        if (letra != letr.toUpperCase()) {
            document.getElementById("errorNumDNI").innerHTML = "Error, the letter does not correspond"; 
            document.getElementById("errorNumDNI").className = "errorForm";
            document.getElementById("numId").className = "form-control is-invalid";
        } else {
                document.getElementById("errorNumDNI").innerHTML = "DNI, correct"; 
                document.getElementById("errorNumDNI").className = "correctInput";
                document.getElementById("numId").className = "form-control is-valid";
            }
    } else {
        if(compDni == "") { 
        document.getElementById("errorNumDNI").innerHTML = "Required field"; 
        document.getElementById("errorNumDNI").className = "errorForm";
        document.getElementById("numId").className = "form-control is-invalid";
        isCorrect = false; 
        }  else {
            document.getElementById("errorNumDNI").innerHTML = "Error, invalid format"; 
            document.getElementById("errorNumDNI").className = "errorForm";
            document.getElementById("numId").className = "form-control is-invalid";
            isCorrect = false;
        }
    }

    //comprovar password (entre 8 y 16 caracteres; al menos un dígito, una minuscula y una mayúscula)
    var elPassword = document.getElementById("inputPassword4").value;
    var patronPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    var compPassword = patronPassword.test(elPassword);
    if(compPassword == true){
        document.getElementById("errorFmail").className = "correctInput";
        document.getElementById("inputPassword4").className = "form-control is-valid";
    } else{
        if(elPassword == ""){
            document.getElementById("errorPassword").innerHTML = "Required field"; 
            document.getElementById("errorPassword").className = "errorForm";
            document.getElementById("inputPassword4").className = "form-control is-invalid";
            isCorrect = false; 
          } else {
                document.getElementById("errorPassword").innerHTML = "Error Password, Between 8 & 16 characters; at least 1 digit, 1 lowercase and 1 uppercase)"; 
                document.getElementById("errorPassword").className = "errorForm";
                document.getElementById("inputPassword4").className = "form-control is-invalid";
                isCorrect = false; 
              }
      }
        

    //comprovar repeat password

    var password = document.getElementById("inputPassword4").value;
    var repeatPassword = document.getElementById("inputConfirmPassword4").value;
    
    if((password == repeatPassword) && repeatPassword != ""){
        document.getElementById("errorRepeatPassword").className = "correctInput";
        document.getElementById("inputConfirmPassword4").className = "form-control is-valid";
    } else {
        if (repeatPassword == "") {
            document.getElementById("errorRepeatPassword").innerHTML = "Required field"; 
            document.getElementById("errorRepeatPassword").className = "errorForm";
            document.getElementById("inputConfirmPassword4").className = "form-control is-invalid";
            isCorrect = false;
        } else {
                document.getElementById("errorRepeatPassword").innerHTML = "Error Password, Between 8 & 16 characters; at least 1 digit, 1 lowercase and 1 uppercase)"; 
                document.getElementById("errorRepeatPassword").className = "errorForm";
                document.getElementById("inputConfirmPassword4").className = "form-control is-invalid";
                isCorrect = false;
            }
    }
    
    //comprovar camps adreça
    if(document.getElementById('inputAddress').value != ""){
        document.getElementById("errorAddress").className = "correctInput";
        document.getElementById("inputAddress").className = "form-control is-valid";
    } else{
        document.getElementById("errorAddress").innerHTML = "Required field"; 
        document.getElementById("errorAddress").className = "errorForm";
        document.getElementById("inputAddress").className = "form-control is-invalid";
    }

    if(document.getElementById('inputCity').value != ""){
        document.getElementById("errorCity").className = "correctInput";
        document.getElementById("inputCity").className = "form-control is-valid";
    } else{
        document.getElementById("errorCity").innerHTML = "Required field"; 
        document.getElementById("errorCity").className = "errorForm";
        document.getElementById("inputCity").className = "form-control is-invalid";
    }

    if(document.getElementById('selectCountry').value != "0"){
        document.getElementById("errorCountry").className = "correctInput";
        document.getElementById("selectCountry").className = "form-control is-valid";
    } else{
        document.getElementById("errorCountry").innerHTML = "Required field"; 
        document.getElementById("errorCountry").className = "errorForm";
        document.getElementById("selectCountry").className = "form-control is-invalid";
    }

    if(document.getElementById('inputZip').value != ""){
        document.getElementById("errorZip").className = "correctInput";
        document.getElementById("inputZip").className = "form-control is-valid";
    } else{
        document.getElementById("errorZip").innerHTML = "Required field"; 
        document.getElementById("errorZip").className = "errorForm";
        document.getElementById("inputZip").className = "form-control is-invalid";
    }


    //comprovar Accept the conditions
    var isChecked = document.getElementById('gridCheck').checked;
    if (isChecked == false){
        document.getElementById('errorCheckbox').className = "errorForm";
    } else {
            document.getElementById('errorCheckbox').className = "correctInput";
        }
    isCorrect = isChecked;


    /********************************/
    //comprovar tot el formulari per enviar
    if(isCorrect == true){
        document.getElementById("formResult").innerHTML = "Formulari Correcte";
    } else {
            document.getElementById("formResult").innerHTML = "ERROR, Formulari Incorrecte";
            document.getElementById("formResult").style.color = "#ff0000";
        }
}

function clearFname(){
    document.getElementById('errorFname').className = "correctInput";
    document.getElementById("fName").className = "form-control";
}
function clearLname(){
    document.getElementById('errorLname').className = "correctInput";
    document.getElementById("lName").className = "form-control";
}
function clearFmail(){
    document.getElementById('errorFmail').className = "correctInput";
    document.getElementById("fMail").className = "form-control";
}
function clearPhone(){
    document.getElementById('errorPhone').className = "correctInput";
    document.getElementById("numPhone").className = "form-control";
}
function clearNumDNI(){
    document.getElementById('errorNumDNI').className = "correctInput";
    document.getElementById("numId").className = "form-control";
}
function clearPassword(){
    document.getElementById('errorPassword').className = "correctInput";
    document.getElementById("inputPassword4").className = "form-control";
}
function clearRepeatPassword(){
    document.getElementById('errorRepeatPassword').className = "correctInput";
    document.getElementById("inputConfirmPassword4").className = "form-control";
}
function clearAddress (){
    document.getElementById('errorAddress').className = "correctInput";
    document.getElementById("inputAddress").className = "form-control";
}
function clearCity (){
    document.getElementById('errorCity').className = "correctInput";
    document.getElementById("inputCity").className = "form-control";
}
function clearCountry (){
    if(document.getElementById("country") != "0"){
       document.getElementById('errorCountry').className = "correctInput";
       document.getElementById("selectCountry").className = "form-control"; 
    }
}
function clearZip (){
    document.getElementById('errorZip').className = "correctInput";
    document.getElementById("inputZip").className = "form-control"; 
}
function clearCheckbox(){
    document.getElementById('errorCheckbox').className = "correctInput";   
}

//Show o Hidden Password
document.getElementById("openEyeP").onclick = function(){
    document.getElementById("openEyeP").style.display="none";
    document.getElementById("closedEyeP").style.display="block";
    document.getElementById("inputPassword4").type="text";
}
document.getElementById("closedEyeP").onclick = function(){
    document.getElementById("closedEyeP").style.display="none";
    document.getElementById("openEyeP").style.display="block";
    document.getElementById("inputPassword4").type="password";
}
document.getElementById("openEyeRP").onclick = function(){
    document.getElementById("openEyeRP").style.display="none";
    document.getElementById("closedEyeRP").style.display="block";
    document.getElementById("inputConfirmPassword4").type="text";
}
document.getElementById("closedEyeRP").onclick = function(){
    document.getElementById("closedEyeRP").style.display="none";
    document.getElementById("openEyeRP").style.display="block";
    document.getElementById("inputConfirmPassword4").type="password";
}

