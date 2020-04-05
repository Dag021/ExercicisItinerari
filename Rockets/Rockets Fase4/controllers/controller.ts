var arrayCoets : any= [];
var arrayPropulsors : any= [];

function createCoet(codi : string, numPropulsors : number){
    let coet = new Coet(codi, numPropulsors);
    let existCoet : boolean = false;
    let validarCodi : boolean = false;

    //validar si els Rockets existeixen a l'array
    for (let i = 0 ; i < arrayCoets.length ; i ++){
        if(coet.codi == arrayCoets[i].codi){
            existCoet = true; 
        }   
    }

    //VALIDAR INPUTS
    if (codi != ""){
        //validem que codi tingui 8 caràcters 
        let expreg = new RegExp(/^[a-zA-Z0-9]{8}$/);
        if(expreg.test(codi)){
            validarCodi = true;
        }
    }

    //si no crear Rockect o avisar que existeix
    if(existCoet == false){
        if(validarCodi == true && isNaN(numPropulsors) == false){
            arrayCoets.push(coet);
            (<HTMLInputElement>document.getElementById("infoRocketsMax")).innerHTML = "";
            (<HTMLInputElement>document.getElementById("infoRockets")).innerHTML = 'Created Rocket "' + coet.codi + '"';
        } else {
            alert("Error: Code with 8 characters & number of thrusters");
            }
    } else {
        (<HTMLInputElement>document.getElementById("infoRocketsMax")).innerHTML = "";
        (<HTMLInputElement>document.getElementById("infoRockets")).innerHTML = 'ERROR: The Rocket "' + coet.codi + '" EXIST!';
    }

    //propulsor Rocket 1
    if(coet.codi == "32WESSDS"){
        coet.addWheel(new Propulsor(10));
        coet.addWheel(new Propulsor(30));
        coet.addWheel(new Propulsor(80));
    }
    
    //propulsor Rocket 2
    if(coet.codi == "LDSFJA32"){
        coet.addWheel(new Propulsor(30));
        coet.addWheel(new Propulsor(40));
        coet.addWheel(new Propulsor(50));
        coet.addWheel(new Propulsor(50));
        coet.addWheel(new Propulsor(30));
        coet.addWheel(new Propulsor(10));
    }

}

//Consulta Info Coets (codi)
function consultCoet( codi: string ){
    (<HTMLInputElement>document.getElementById("infoRocketsMax")).innerHTML = "";
    for(let i=0; i< arrayCoets.length; i++){
        if (codi == arrayCoets[i].codi){
            (<HTMLInputElement>document.getElementById("infoRocketsMax")).innerHTML += "<sup>*</sup>Rocket " + arrayCoets[i].codi + " booster max power: ";
            for (let j=0; j< arrayCoets[i].propulsors.length; j++){
                (<HTMLInputElement>document.getElementById("infoRocketsMax")).innerHTML +=   arrayCoets[i].propulsors[j].potenciaMaxima + " ";
            }    
            (<HTMLInputElement>document.getElementById("infoRocketsMax")).innerHTML +=  "</br>";     
        }
    }
    consultPotenciaCoet(codi);
}

//Consulta Info TOTS els Coets
function consultAllRockets(){
    (<HTMLInputElement>document.getElementById("infoRocketsMax")).innerHTML = "";
    for(let i=0; i< arrayCoets.length; i++){
        (<HTMLInputElement>document.getElementById("infoRocketsMax")).innerHTML += "<sup>*</sup>Rocket " + arrayCoets[i].codi + " booster max power: ";
        for (let j=0; j< arrayCoets[i].propulsors.length; j++){
            (<HTMLInputElement>document.getElementById("infoRocketsMax")).innerHTML +=   arrayCoets[i].propulsors[j].potenciaMaxima + " ";
        }
        (<HTMLInputElement>document.getElementById("infoRocketsMax")).innerHTML +=  "</br>";            
    }
    consultPotenciaAllRockets();
}

//Consulta Potencia Actual Coets (codi)
function consultPotenciaCoet( codi: string ){
    (<HTMLInputElement>document.getElementById("infoRockets")).innerHTML = "";
    for(let i=0; i< arrayCoets.length; i++){
        let sumaPotencias = 0;
        if (codi == arrayCoets[i].codi){
            (<HTMLInputElement>document.getElementById("infoRockets")).innerHTML += "Rocket " + arrayCoets[i].codi + " booster power: ";
            for (let j=0; j< arrayCoets[i].propulsors.length; j++){
                (<HTMLInputElement>document.getElementById("infoRockets")).innerHTML +=   arrayCoets[i].propulsors[j].potenciaActual + " ";
                let numeroPotencias = arrayCoets[i].propulsors[j].potenciaActual ;
                sumaPotencias +=  numeroPotencias;
            }    
            (<HTMLInputElement>document.getElementById("infoRockets")).innerHTML +=  "</br>"+ "The current speed is " +  sumaPotencias + "</br>";     
        }
    }
}

//Consulta Potencia Actual TOTS els Coets
function consultPotenciaAllRockets(){
    (<HTMLInputElement>document.getElementById("infoRockets")).innerHTML = "";
    for(let i=0; i< arrayCoets.length; i++){
        let sumaPotencias = 0;
        (<HTMLInputElement>document.getElementById("infoRockets")).innerHTML += "Rocket " + arrayCoets[i].codi + " booster power: ";
        for (let j=0; j< arrayCoets[i].propulsors.length; j++){
            (<HTMLInputElement>document.getElementById("infoRockets")).innerHTML +=   arrayCoets[i].propulsors[j].potenciaActual + " ";
            let numeroPotencias = arrayCoets[i].propulsors[j].potenciaActual ;
            sumaPotencias +=  numeroPotencias;
        }
        (<HTMLInputElement>document.getElementById("infoRockets")).innerHTML +=  "</br>"+ "The current speed is " +  sumaPotencias + "</br>";            
    }
}

//Accelerar Propulsors
function accelerarCoet( codi: string ){
    (<HTMLInputElement>document.getElementById("infoRockets")).innerHTML = "";
    (<HTMLInputElement>document.getElementById("infoRocketsMax")).innerHTML = "";
    for(let i=0; i< arrayCoets.length; i++){
        let sumaPotencias = 0;
        if (codi == arrayCoets[i].codi){
            (<HTMLInputElement>document.getElementById("infoRockets")).innerHTML += "Rocket " + arrayCoets[i].codi + " booster power: ";
            for (let j=0; j< arrayCoets[i].propulsors.length; j++){
                (<HTMLInputElement>document.getElementById("infoRockets")).innerHTML +=  + arrayCoets[i].propulsors[j].accelerar() + " ";
                let numeroPotencias = arrayCoets[i].propulsors[j].potenciaActual ;
                sumaPotencias +=  numeroPotencias;
            }
            (<HTMLInputElement>document.getElementById("infoRockets")).innerHTML +=  "</br>"+ "The current speed is " +  sumaPotencias + "</br>";     
        }
    }
}

//Consulta Info TOTS els Coets
function frenarCoet(codi: string ){
    (<HTMLInputElement>document.getElementById("infoRockets")).innerHTML = "";
    (<HTMLInputElement>document.getElementById("infoRocketsMax")).innerHTML = "";
    for(let i=0; i< arrayCoets.length; i++){
        let sumaPotencias = 0;
        if (codi == arrayCoets[i].codi){
            (<HTMLInputElement>document.getElementById("infoRockets")).innerHTML += "Rocket " + arrayCoets[i].codi + " booster power: ";
            for (let j=0; j< arrayCoets[i].propulsors.length; j++){
                (<HTMLInputElement>document.getElementById("infoRockets")).innerHTML +=   "" + arrayCoets[i].propulsors[j].frenar() + " ";
                let numeroPotencias = arrayCoets[i].propulsors[j].potenciaActual ;
                sumaPotencias +=  numeroPotencias;
            }
            (<HTMLInputElement>document.getElementById("infoRockets")).innerHTML +=  "</br>"+ "The current speed is " +  sumaPotencias + "</br>";     
        }
    }
}

