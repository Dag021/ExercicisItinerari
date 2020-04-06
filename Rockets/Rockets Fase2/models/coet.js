"use strict";
var Coet = /** @class */ (function () {
    function Coet(codi, numPropulsors) {
        this.propulsors = new Array();
        this.codi = codi;
        this.numPropulsors = numPropulsors;
    }
    Coet.prototype.addPropulsor = function (propulsor) {
        this.propulsors.push(propulsor);
    };
    return Coet;
}());
