class Coet{
    codi:string;
    numPropulsors: number;
    propulsors:Propulsor[]=new Array();
    
    constructor(codi:string,numPropulsors:number){
        this.codi=codi;
        this.numPropulsors=numPropulsors;
    }
    
    addPropulsor(propulsor:Propulsor):void{
        this.propulsors.push(propulsor);
    }
}