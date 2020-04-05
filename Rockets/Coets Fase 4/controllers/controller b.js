"use strict";
var arrayCoets = [];
var arrayPropulsors = [];
window.onload = function clear() {
    document.getElementById('codiCoet').value = "";
    document.getElementById('numPropulsorCoet').value = "";
};
function createCoet() {
    //Creem dos coets amb els codis “32WESSDS” I “LDSFJA32”. El primer coet tindrà tres propulsors i el segon sis propulsors.
    var codi = document.getElementById('codiCoet').value.toUpperCase();
    var numPropulsors = parseInt(document.getElementById('numPropulsorCoet').value);
    var coet = new Coet(codi, numPropulsors);
    var i = 0;
    var existCoet = false;
    var validarCodi = false;
    //VALIDAR INPUTS
    if (codi != "") {
        //validem que codi tingui 8 caràcters 
        var expreg = new RegExp(/^[a-zA-Z0-9]{8}$/);
        if (expreg.test(codi)) {
            validarCodi = true;
        }
    }
    if (arrayCoets.length != 0) {
        while (i < arrayCoets.length && existCoet == false) {
            if (coet.codi == arrayCoets[i].codi) {
                alert("exist");
                existCoet = true;
            }
            i++;
        }
        if (existCoet == false) {
            if (validarCodi == true && isNaN(numPropulsors) == false) {
                coet = new Coet(codi, numPropulsors);
                arrayCoets.push(coet);
                for (var i_1 = 1; i_1 <= numPropulsors; i_1++) {
                    var potenciaMaxima = Number(window.prompt("Potencia max propulsor " + i_1 + " :"));
                    coet.addWheel(new Propulsor(potenciaMaxima));
                }
            }
        }
    }
    else {
        //
        coet = new Coet("32WESSDS", 3);
        arrayCoets.push(coet);
        var propulsor = new Propulsor(10);
        coet.addWheel(propulsor);
        var propulsor = new Propulsor(30);
        coet.addWheel(propulsor);
        var propulsor = new Propulsor(80);
        coet.addWheel(propulsor);
        //
        coet = new Coet("LDSFJA32", 6);
        arrayCoets.push(coet);
        var propulsor = new Propulsor(30);
        coet.addWheel(propulsor);
        var propulsor = new Propulsor(40);
        coet.addWheel(propulsor);
        var propulsor = new Propulsor(50);
        coet.addWheel(propulsor);
        var propulsor = new Propulsor(50);
        coet.addWheel(propulsor);
        var propulsor = new Propulsor(30);
        coet.addWheel(propulsor);
        var propulsor = new Propulsor(10);
        coet.addWheel(propulsor);
        //
        if (codi != "") {
            if (validarCodi == true && isNaN(numPropulsors) == false) {
                coet = new Coet(codi, numPropulsors);
                arrayCoets.push(coet);
                for (var i_2 = 1; i_2 <= numPropulsors; i_2++) {
                    var potenciaMaxima = Number(window.prompt("Potencia max propulsor " + i_2 + " :"));
                    coet.addWheel(new Propulsor(potenciaMaxima));
                }
            }
        }
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
                var numeroPotencias = arrayCoets[i].propulsors[j].potenciaActual;
                sumaPotencias += numeroPotencias;
            }
            document.getElementById("infoRockets").innerHTML += "</br>" + "The current speed is " + sumaPotencias + "</br>";
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
            var numeroPotencias = arrayCoets[i].propulsors[j].potenciaActual;
            sumaPotencias += numeroPotencias;
        }
        document.getElementById("infoRockets").innerHTML += "</br>" + "The current speed is " + sumaPotencias + "</br>";
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
                var numeroPotencias = arrayCoets[i].propulsors[j].potenciaActual;
                sumaPotencias += numeroPotencias;
            }
            document.getElementById("infoRockets").innerHTML += "</br>" + "The current speed is " + sumaPotencias + "</br>";
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
                var numeroPotencias = arrayCoets[i].propulsors[j].potenciaActual;
                sumaPotencias += numeroPotencias;
            }
            document.getElementById("infoRockets").innerHTML += "</br>" + "The current speed is " + sumaPotencias + "</br>";
        }
    }
}
