//Clear all imput in load
document.getElementById("fMail").value = "";
document.getElementById("inputPassword4").value = "";

function validation(){
    var isCorrect = true;
    
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
        

   


    /********************************/
    //comprovar tot el formulari per enviar
    if(isCorrect == true){
        document.getElementById("formResult").innerHTML = "Formulari Correcte";
    } else {
            document.getElementById("formResult").innerHTML = "ERROR, Formulari Incorrecte";
            document.getElementById("formResult").style.color = "#ff0000";
        }
}

function clearFmail(){
    document.getElementById('errorFmail').className = "correctInput";
    document.getElementById("fMail").className = "form-control";
}
function clearPassword(){
    document.getElementById('errorPassword').className = "correctInput";
    document.getElementById("inputPassword4").className = "form-control";
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


