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
  tarjeta!: boolean;
}
