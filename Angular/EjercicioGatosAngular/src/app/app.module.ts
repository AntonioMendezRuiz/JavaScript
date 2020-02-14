import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GatoComponent } from './gato/gato.component';
import { GatoMensajesComponent } from './gato-mensajes/gato-mensajes.component';
import { GatoNuevoComponent } from './gato-nuevo/gato-nuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    GatoComponent,
    GatoMensajesComponent,
    GatoNuevoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
