export abstract class FiguraGeometrica{
    nombre: string =""
  
    constructor(nombre: string){
        this.nombre = nombre
    }
  
    abstract calcularPerimetro(): number
  }
  
 export class Circulo extends FiguraGeometrica{
    radio: number
    
    constructor(nombre: string, radio: number){
        super(nombre)
        this.radio = radio
    }
  
   override calcularPerimetro(): number{
        return 2 * Math.PI * this.radio 
    }
  }
  
 export class trianguloEscaleno extends FiguraGeometrica{
    ladoA: number
    ladoB: number
    ladoC: number
  
    constructor(nombre: string, ladoA: number, ladoB: number, ladoC: number){
        super(nombre)
        this.ladoA = ladoA
        this.ladoB = ladoB
        this.ladoC = ladoC
    }
  
    override calcularPerimetro(): number{
        return this.ladoA + this.ladoB + this.ladoC
    }
  }
  
 export class trianguloEquilater extends trianguloEscaleno{
    
    constructor(nombre:string, ladoA: number){
        super(nombre, ladoA, ladoA, ladoA)        
    }
  
    override calcularPerimetro(): number{
        return this.ladoA * 3 
    }
  }