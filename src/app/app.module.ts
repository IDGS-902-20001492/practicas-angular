import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DistModule } from './distancia/dist/dist.module';
import { ResisModule } from './resistencias/resis/resis.module';
import { CineModule } from './cinepolis/cine/cine.module';
import { AppRoutingModule } from './app.routing.module';
import { MenuComponent } from './menu/menu.component';
import { PizzaModule } from './pizzeria/pizza/pizza.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DistModule,
    ResisModule,
    CineModule,
    AppRoutingModule,
    PizzaModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
