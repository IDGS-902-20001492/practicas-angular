import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzeriaComponent } from '../pizzeria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PizzeriaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    PizzeriaComponent
  ]
})
export class PizzaModule { }
