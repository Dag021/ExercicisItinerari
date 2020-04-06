"use strict";
var arrayCoets = [];
var arrayPropulsors = [];
function createCoet(codi, numPropulsors) {
    var coet = new Coet(codi, numPropulsors);
    var existCoet = false;
    var validarCodi = false;
    //validar si els Rockets existeixen a l'array
    for (var i = 0; i < arrayCoets.length; i++) {
        if (coet.codi == arrayCoets[i].codi) {
            existCoet = true;
        }
    }
    //VALIDAR INPUTS
    if (codi != "") {
        //validem que codi tingui 8 caràcters 
        var expreg = new RegExp(/^[a-zA-Z0-9]{8}$/);
        if (expreg.test(codi)) {
            validarCodi = true;
        }
    }
    //si no crear Rockect o avisar que existeix
    if (existCoet == false) {
        if (validarCodi == true && isNaN(numPropulsors) == false) {
            arrayCoets.push(coet);
            document.getElementById("infoRocketsMax").innerHTML = "";
            document.getElementById("infoRockets").innerHTML = 'Created Rocket "' + coet.codi + '"';
        }
        else {
            alert("Error: Code with 8 characters & number of thrusters");
        }
    }
    else {
        document.getElementById("infoRocketsMax").innerHTML = "";
        document.getElementById("infoRockets").innerHTML = 'ERROR: The Rocket "' + coet.codi + '" EXIST!';
    }
    //propulsor Rocket 1
    if (coet.codi == "32WESSDS") {
        coet.addPropulsor(new Propulsor(10));
        coet.addPropulsor(new Propulsor(30));
        coet.addPropulsor(new Propulsor(80));
    }
    //propulsor Rocket 2
    if (coet.codi == "LDSFJA32") {
        coet.addPropulsor(new Propulsor(30));
        coet.addPropulsor(new Propulsor(40));
        coet.addPropulsor(new Propulsor(50));
        coet.addPropulsor(new Propulsor(50));
        coet.addPropulsor(new Propulsor(30));
        coet.addPropulsor(new Propulsor(10));
    }
}
//Consulta Info Coets (codi)
function consultCoet(codi) {
    document.getElementById("infoRocketsMax").innerHTML = "";
    for (var i = 0; i < arrayCoets.length; i++) {
        if (codi == arrayCoets[i].codi) {
            document.getElementById("infoRocketsMax").innerHTML += "<sup>*</sup>Rocket " + arrayCoets[i].codi + " booster max power: ";
            for (var j = 0; j < arrayCoets[i].propulsors.length; j++) {
                document.getElementById("infoRocketsMax").innerHTML += arrayCoets[i].propulsors[j].potenciaMaxima + " ";
            }
            document.getElementById("infoRocketsMax").innerHTML += "</br>";
        }
    }
    consultPotenciaCoet(codi);
}
//Consulta Info TOTS els Coets
function consultAllRockets() {
    document.getElementById("infoRocketsMax").innerHTML = "";
    for (var i = 0; i < arrayCoets.length; i++) {
        document.getElementById("infoRocketsMax").innerHTML += "<sup>*</sup>Rocket " + arrayCoets[i].codi + " booster max power: ";
        for (var j = 0; j < arrayCoets[i].propulsors.length; j++) {
            document.getElementById("infoRocketsMax").innerHTML += arrayCoets[i].propulsors[j].potenciaMaxima + " ";
        }
        document.getElementById("infoRocketsMax").innerHTML += "</br>";
    }
    consultPotenciaAllRockets();
}
//Consulta Potencia Actual Coets (codi)
function consultPotenciaCoet(codi) {
    document.getElementById("infoRockets").innerHTML = "";
    for (var i = 0; i < arrayCoets.length; i++) {
        var sumaPotencias = 0;
        if (codi == arrayCoets[i].codi) {
            document.getElementById("infoRockets").innerHTML += "Rocket " + arrayCoets[i].codi + " booster power: ";
            for (var j = 0; j < arrayCoets[i].propulsors.length; j++) {
                document.getElementById("infoRockets").innerHTML += arrayCoets[i].propulsors[j].potenciaActual + " ";
                //let numeroPotencias = arrayCoets[i].propulsors[j].potenciaActual ;
                //sumaPotencias +=  numeroPotencias;
            }
            document.getElementById("infoRockets").innerHTML += "</br>" + "The current speed is " + arrayCoets[i].velocitat() + "</br>";
        }
    }
}
//Consulta Potencia Actual TOTS els Coets
function consultPotenciaAllRockets() {
    document.getElementById("infoRockets").innerHTML = "";
    for (var i = 0; i < arrayCoets.length; i++) {
        var sumaPotencias = 0;
        document.getElementById("infoRockets").innerHTML += "Rocket " + arrayCoets[i].codi + " booster power: ";
        for (var j = 0; j < arrayCoets[i].propulsors.length; j++) {
            document.getElementById("infoRockets").innerHTML += arrayCoets[i].propulsors[j].potenciaActual + " ";
            //let numeroPotencias = arrayCoets[i].propulsors[j].potenciaActual ;
            //sumaPotencias +=  numeroPotencias;
        }
        document.getElementById("infoRockets").innerHTML += "</br>" + "The current speed is " + arrayCoets[i].velocitat() + "</br>";
    }
}
//Accelerar Propulsors
function accelerarCoet(codi) {
    document.getElementById("infoRockets").innerHTML = "";
    document.getElementById("infoRocketsMax").innerHTML = "";
    for (var i = 0; i < arrayCoets.length; i++) {
        var sumaPotencias = 0;
        if (codi == arrayCoets[i].codi) {
            document.getElementById("infoRockets").innerHTML += "Rocket " + arrayCoets[i].codi + " booster power: ";
            for (var j = 0; j < arrayCoets[i].propulsors.length; j++) {
                document.getElementById("infoRockets").innerHTML += +arrayCoets[i].propulsors[j].accelerar() + " ";
                //let numeroPotencias = arrayCoets[i].propulsors[j].potenciaActual ;
                //sumaPotencias +=  numeroPotencias;
            }
            document.getElementById("infoRockets").innerHTML += "</br>" + "The current speed is " + arrayCoets[i].velocitat() + "</br>";
        }
    }
}
//Consulta Info TOTS els Coets
function frenarCoet(codi) {
    document.getElementById("infoRockets").innerHTML = "";
    document.getElementById("infoRocketsMax").innerHTML = "";
    for (var i = 0; i < arrayCoets.length; i++) {
        var sumaPotencias = 0;
        if (codi == arrayCoets[i].codi) {
            document.getElementById("infoRockets").innerHTML += "Rocket " + arrayCoets[i].codi + " booster power: ";
            for (var j = 0; j < arrayCoets[i].propulsors.length; j++) {
                document.getElementById("infoRockets").innerHTML += "" + arrayCoets[i].propulsors[j].frenar() + " ";
                //let numeroPotencias = arrayCoets[i].propulsors[j].potenciaActual ;
                //sumaPotencias +=  numeroPotencias;
            }
            document.getElementById("infoRockets").innerHTML += "</br>" + "The current speed is " + arrayCoets[i].velocitat() + "</br>";
        }
    }
}
