import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DistModule } from './distancia/dist/dist.module';
import { ResisModule } from './resistencias/resis/resis.module';
import { CineModule } from './cinepolis/cine/cine.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DistModule,
    ResisModule,
    CineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
