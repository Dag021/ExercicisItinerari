var arrayCoets : any= [];
var arrayPropulsors : any= [];

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

     //VALIDAR INPUTS (Un coet està identificat per un codi de 8 caràcters i un número de propulsors.)
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
                alert("exist");
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
                // introduim la potencia dels propulsors
                for (let i=1; i<= numPropulsors; i++){
                    let potenciaMaxima = Number(window.prompt("Potencia max propulsor " + i + " :"));
                    coet.addPropulsor(new Propulsor(potenciaMaxima));  
                } 
            } else {
                alert("Error: Code with 8 characters & number of thrusters");
                }
        }
    } else { 
        //al iniciar el array, creem els dos Rockets previament
        //Rocket 1
        coet  = new Coet("32WESSDS", 3);
        arrayCoets.push(coet);
        var propulsor = new Propulsor(10);
        coet.addPropulsor(propulsor);
        var propulsor = new Propulsor(30);
        coet.addPropulsor(propulsor);
        var propulsor = new Propulsor(80);
        coet.addPropulsor(propulsor);
        //Rocket 2
        coet = new Coet("LDSFJA32", 6);
        arrayCoets.push(coet);
        var propulsor = new Propulsor(30);
        coet.addPropulsor(propulsor);
        var propulsor = new Propulsor(40);
        coet.addPropulsor(propulsor);
        var propulsor = new Propulsor(50);
        coet.addPropulsor(propulsor);
        var propulsor = new Propulsor(50);
        coet.addPropulsor(propulsor);
        var propulsor = new Propulsor(30);
        coet.addPropulsor(propulsor);
        var propulsor = new Propulsor(10);
        coet.addPropulsor(propulsor);
        //New Rocket
        if(codi != ""){
            if(validarCodi == true && isNaN(numPropulsors) == false){
                coet = new Coet(codi,numPropulsors);
                arrayCoets.push(coet);
                // introduim la potencia dels propulsors
                for (let i=1; i<= numPropulsors; i++){
                    let potenciaMaxima = Number(window.prompt("Potencia max propulsor " + i + " :"));
                    coet.addPropulsor(new Propulsor(potenciaMaxima));  
                }
            }
        } 
    }

    //Cridem a la funció per mostrar TOTS el coet existents i les potencies dels propulsor
    consultCoet();
  
}

function consultCoet(){
    //Mostrar a pantalla el codi dels coets, el número de propulsors que té i la potència màxima de cada propulsor. 
    (<HTMLInputElement>document.getElementById("coetInfo")).innerHTML = "";
    for(let i=0; i< arrayCoets.length; i++){
        (<HTMLInputElement>document.getElementById("coetInfo")).innerHTML += arrayCoets[i].codi + ": ";
        for (let j=0; j< arrayCoets[i].propulsors.length; j++){
          (<HTMLInputElement>document.getElementById("coetInfo")).innerHTML +=   arrayCoets[i].propulsors[j].potenciaMaxima + " ";
        }
        (<HTMLInputElement>document.getElementById("coetInfo")).innerHTML += "</br>";
    }
}


function accelerarAllCoet(){
    (<HTMLInputElement>document.getElementById("potenciaActual")).innerHTML = "";
    for(let i=0; i< arrayCoets.length; i++){
        (<HTMLInputElement>document.getElementById("potenciaActual")).innerHTML += arrayCoets[i].codi + ": ";
        for (let j=0; j< arrayCoets[i].propulsors.length; j++){
          (<HTMLInputElement>document.getElementById("potenciaActual")).innerHTML +=   arrayCoets[i].propulsors[j].accelerar() + " ";
        }
        (<HTMLInputElement>document.getElementById("potenciaActual")).innerHTML += "</br>";
    }
}

function accelerarCoet(codi : string){
    (<HTMLInputElement>document.getElementById("potenciaActual")).innerHTML = "";
    for(let i=0; i< arrayCoets.length; i++){
        if(codi == arrayCoets[i].codi) {
            (<HTMLInputElement>document.getElementById("potenciaActual")).innerHTML += arrayCoets[i].codi + ": ";
            for (let j=0; j< arrayCoets[i].propulsors.length; j++){
            (<HTMLInputElement>document.getElementById("potenciaActual")).innerHTML +=   arrayCoets[i].propulsors[j].accelerar() + " ";
            }
            (<HTMLInputElement>document.getElementById("potenciaActual")).innerHTML += "</br>"; 
        }
    }
}

function frenarAllCoet(){
    (<HTMLInputElement>document.getElementById("potenciaActual")).innerHTML = "";
    for(let i=0; i< arrayCoets.length; i++){
        (<HTMLInputElement>document.getElementById("potenciaActual")).innerHTML += arrayCoets[i].codi + ": ";
        for (let j=0; j< arrayCoets[i].propulsors.length; j++){
          (<HTMLInputElement>document.getElementById("potenciaActual")).innerHTML +=   arrayCoets[i].propulsors[j].frenar() + " ";
        }
        (<HTMLInputElement>document.getElementById("potenciaActual")).innerHTML += "</br>";
    }
}

function frenarCoet(codi : string){
    (<HTMLInputElement>document.getElementById("potenciaActual")).innerHTML = "";
    for(let i=0; i< arrayCoets.length; i++){
        if(codi == arrayCoets[i].codi) {
            (<HTMLInputElement>document.getElementById("potenciaActual")).innerHTML += arrayCoets[i].codi + ": ";
            for (let j=0; j< arrayCoets[i].propulsors.length; j++){
            (<HTMLInputElement>document.getElementById("potenciaActual")).innerHTML +=   arrayCoets[i].propulsors[j].frenar() + " ";
            }
            (<HTMLInputElement>document.getElementById("potenciaActual")).innerHTML += "</br>";
        }
    }
}

/*
function velocitatActual(){
    (<HTMLInputElement>document.getElementById("potenciaActual")).innerHTML = "";
    
    for(let i=0; i< arrayCoets.length; i++){
        var sumaPotencias = 0;
        (<HTMLInputElement>document.getElementById("potenciaActual")).innerHTML += arrayCoets[i].codi + ": ";
        for (let j=0; j< arrayCoets[i].propulsors.length; j++){
            let numeroPotencias = arrayCoets[i].propulsors[j].potenciaActual ;
            sumaPotencias +=  numeroPotencias;
        }
        (<HTMLInputElement>document.getElementById("potenciaActual")).innerHTML +=   sumaPotencias + "</br>";
        //(<HTMLInputElement>document.getElementById("potenciaActual")).innerHTML += ";
    }
}*/

function velocitatActual(){
    (<HTMLInputElement>document.getElementById("potenciaActual")).innerHTML = "";
    
    for(let i=0; i< arrayCoets.length; i++){
        (<HTMLInputElement>document.getElementById("potenciaActual")).innerHTML += arrayCoets[i].codi + ": ";
        (<HTMLInputElement>document.getElementById("potenciaActual")).innerHTML += arrayCoets[i].velocitat() + " ";
        (<HTMLInputElement>document.getElementById("potenciaActual")).innerHTML +=  "</br>";
    }
}