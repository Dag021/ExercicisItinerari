"use strict";
var Propulsor = /** @class */ (function () {
    function Propulsor(potenciaMaxima) {
        this.potenciaMaxima = potenciaMaxima;
        this.potenciaActual = 0;
    }
    Propulsor.prototype.accelerar = function () {
        if (this.potenciaMaxima > this.potenciaActual) {
            this.potenciaActual = this.potenciaActual + 10;
        }
        return this.potenciaActual;
    };
    Propulsor.prototype.frenar = function () {
        if (this.potenciaActual > 0) {
            this.potenciaActual = this.potenciaActual - 10;
        }
        return this.potenciaActual;
    };
    return Propulsor;
}());
