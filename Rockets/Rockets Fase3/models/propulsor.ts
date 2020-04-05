class Propulsor{
    public potenciaMaxima:number;
    public potenciaActual:number;

    constructor(potenciaMaxima:number){
        this.potenciaMaxima = potenciaMaxima;
        this.potenciaActual = 0;
    }

    accelerar(){
        if(this.potenciaMaxima > this.potenciaActual) {
            this.potenciaActual = this.potenciaActual + 10;
        }

        return this.potenciaActual;
    }
    frenar(){
        if(this.potenciaActual > 0) {
            this.potenciaActual = this.potenciaActual - 10;
        }

        return this.potenciaActual;
    }

}