"use strict";
var Coet = /** @class */ (function () {
    function Coet(codi, numPropulsors) {
        this.propulsors = new Array();
        this.codi = codi;
        this.numPropulsors = numPropulsors;
        this.velocitatActual = 0;
    }
    Coet.prototype.addPropulsor = function (propulsor) {
        this.propulsors.push(propulsor);
    };
    Coet.prototype.velocitat = function () {
        this.velocitatActual = 0;
        for (var j = 0; j < this.propulsors.length; j++) {
            var numeroPotencias = this.propulsors[j].potenciaActual;
            this.velocitatActual += numeroPotencias;
        }
        return this.velocitatActual;
    };
    return Coet;
}());
