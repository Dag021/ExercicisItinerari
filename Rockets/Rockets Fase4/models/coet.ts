class Coet{
    codi:string;
    numPropulsors: number;
    propulsors:Propulsor[]=new Array();
    velocitatActual: number;

    constructor(codi:string,numPropulsors:number){
        this.codi=codi;
        this.numPropulsors=numPropulsors;
        this.velocitatActual = 0;
    }
    
    addPropulsor(propulsor:Propulsor):void{
        this.propulsors.push(propulsor);
    }

    velocitat(){
        this.velocitatActual = 0;
        for (let j=0; j< this.propulsors.length; j++){
            let numeroPotencias = this.propulsors[j].potenciaActual ;
            this.velocitatActual +=  numeroPotencias;
            }
            
            return this.velocitatActual; 
    }
}