var arrayCoets : any= [];

window.onload = function clear(){
    (<HTMLInputElement>document.getElementById('codiCoet')).value = "";
    (<HTMLInputElement>document.getElementById('numPropulsorCoet')).value = "";
}


function createCoet(){  

    //Creem dos coets amb els codis “32WESSDS” I “LDSFJA32”. El primer coet tindrà tres propulsors i el segon sis propulsors.
    //Un coet està identificat per un codi de 8 caràcters i un número de propulsors. 

    let codi : string = (<HTMLInputElement>document.getElementById('codiCoet')).value.toUpperCase();
    let numPropulsors : number = parseInt((<HTMLInputElement>document.getElementById('numPropulsorCoet')).value);
    let coet = new Coet(codi,numPropulsors);
    let i = 0;
    let existCoet : boolean = false;
    let validarCodi : boolean = false;


    //VALIDAR INPUTS (Un coet està identificat per un codi de 8 caràcters i un número de propulsors. )
    if (codi != ""){
        //validem que codi tingui 8 caràcters 
        let expreg = new RegExp(/^[a-zA-Z0-9]{8}$/);
        if(expreg.test(codi)){
            validarCodi = true;
        }
    }
    //si el array no està buit
    if(arrayCoets.length != 0){ 
        while ( i < arrayCoets.length && existCoet == false){ 
            //validem si el Coet ja existeix
            if(coet.codi == arrayCoets[i].codi ){ 
                alert("ERROR: This Rocket exist");
                existCoet = true;   
            }              
            i++; 
        }   
            //Si no existeix, creem el NEW rocket    
            if ( existCoet == false){
                //validem les dades del nou client (codi de 8 caràcters i un número de propulsors.
                if(validarCodi == true && isNaN(numPropulsors) == false){
                    coet = new Coet(codi,numPropulsors);
                    arrayCoets.push(coet);
                } else {
                    alert("Error: Code with 8 characters & number of thrusters");
                    }
            }

        } else { 
            //al iniciar el array, creem els dos Rockets previament
            //Rocket 1
            coet  = new Coet("32WESSDS", 3);
            arrayCoets.push(coet);
            //Rocket 2
            coet = new Coet("LDSFJA32", 6);
            arrayCoets.push(coet);
            //New Rocket
            if(codi != ""){
                if(validarCodi == true && isNaN(numPropulsors) == false){
                    coet = new Coet(codi,numPropulsors);
                    arrayCoets.push(coet);
                }
            } 
    }

    //Cridem a la funció per mostrar tots el coet existents
    consultCoet();
  
}

function consultCoet(){
    //Mostrar a pantalla el codi dels coets i el número de propulsors que té.
    (<HTMLInputElement>document.getElementById("coetInfo")).innerHTML = "";
    for(let i=0; i< arrayCoets.length; i++){
        (<HTMLInputElement>document.getElementById("coetInfo")).innerHTML += "Rocket " + arrayCoets[i].codi + " has " +  arrayCoets[i].numPropulsors + " thrusters. <br>";
    }
}
