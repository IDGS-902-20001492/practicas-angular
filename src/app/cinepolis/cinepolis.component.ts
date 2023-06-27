import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nBoletos!: number;
  nPersonas!: number;
  nombre!: string;
  tarjeta!: number;
  resultado!: string;

  calcularTotal(): void {
    let total = 0;

    if(!(this.nBoletos > (this.nPersonas * 7))){
      total = this.nBoletos * 12;
      total = total - (total * this.calcularDescuento());

      if(this.tarjeta == 1){
        total = total - (total * 0.10);
      }

      this.resultado = this.nombre+" El total a pagar es: " + total;
    }else{
      this.resultado = this.nombre+" No se puede realizar la compra, solo 7 Boletos por persona";
    }
  }

  calcularDescuento(): number {
      let descuento = 0;
    
      if(this.nBoletos > 5){
          descuento = 0.15;
      }else if(this.nBoletos >= 3){
          descuento = 0.10;
      }else{
          descuento = 0;
      }
      return descuento;
  }
}
