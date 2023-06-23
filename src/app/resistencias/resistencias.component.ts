import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
  b1!:string;
  b2!:string;
  b3!:string;
  b4!:string;
  /*
  colBanda12:string[] = ['Negro','Cafe','Rojo','Naranja','Amarillo','Verde',
                        'Azul','Violeta','Gris','Blanco'];*/

  /*
  colBanda3:string[] = ['Negro','Cafe','Rojo','Naranja','Amarillo','Verde',
                        'Azul','Violeta','Gris','Blanco','Dorado','Plateado'];*/
                        
  //Colores en ingles para el bgcolor
  //Banda 1 y 2
  colBanda12_Ingles:string[] = ['Black','Brown','Red','Orange','Yellow','Green',
                                'Blue','Violet','Grey','White']; 
  //Banda 3
  colBanda3_Ingles:string[] = ['Black','Brown','Red','Orange','Yellow','Green',
                        'Blue','Violet','Grey','White','Gold','Silver'];                      
  //Lista para la banda 4
  colBanda4:string[] = ['Gold','Silver'];                                            

  min!:number;
  max!:number;
  resultado!:number;
 
  determinarValorRB1_B2(color: string): number {
  let valorR: number;

  if (color === 'Black') {
    valorR = 0;
  } else if (color === 'Brown') {
    valorR = 1;
  } else if (color === 'Red') {
    valorR = 2;
  } else if (color === 'Orange') {
    valorR = 3;
  } else if (color === 'Yellow') {
    valorR = 4;
  } else if (color === 'Green') {
    valorR = 5;
  } else if (color === 'Blue') {
    valorR = 6;
  } else if (color === 'Violet') {
    valorR = 7;
  } else if (color === 'Grey') {
    valorR = 8;
  } else if (color === 'White') {
    valorR = 9;
  }else {
    valorR = 0;
  }

  return valorR;
  }
  determinarValorMul(color: string): number {
  let valorR: number;

  if (color === 'Black') {
    valorR = 1;
  } else if (color === 'Brown') {
    valorR = 10;
  } else if (color === 'Red') {
    valorR = 100;
  } else if (color === 'Orange') {
    valorR = 1000;
  } else if (color === 'Yellow') {
    valorR = 10000;
  } else if (color === 'Green') {
    valorR = 100000;
  } else if (color === 'Blue') {
    valorR = 1000000;
  } else if (color === 'Violet') {
    valorR = 10000000;
  } else if (color === 'Grey') {
    valorR = 100000000;
  } else if (color === 'White') {
    valorR = 1000000000;
  } else if(color === 'Gold'){
    valorR = 0.1;
  } else if(color === 'Silver'){
    valorR = 0.01;
  } else if(color === 'Sin banda'){
    valorR = 0.2
  } else {
    valorR = 0.2;
  }

  return valorR;
  }

  determinarTolerancia(color:String):number{
    let valorT:number;

    if(color === 'Gold'){
      valorT = 0.05;
    }else if(color === 'Silver'){
      valorT = 0.1;
    }else{
      valorT = 0;
    }

    return valorT;
  }

 calcularResultado(){
  let vB1:string = this.determinarValorRB1_B2(this.b1).toString();
  let vB2:string = this.determinarValorRB1_B2(this.b2).toString();
  let vB3:number = this.determinarValorMul(this.b3);
  let vB4:number = this.determinarTolerancia(this.b4);

  let sumB1_B2:number = parseInt(vB1+vB2);

  this.min = (sumB1_B2*vB3)-((sumB1_B2*vB3)*vB4);
  this.max = (sumB1_B2*vB3)+((sumB1_B2*vB3)*vB4);
  this.resultado = (sumB1_B2)*vB3;
 }
}
