import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListaGatosComponent } from './lista-gatos/lista-gatos.component';
import { MensajesComponent } from './mensajes/mensajes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaGatosComponent,
    MensajesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
