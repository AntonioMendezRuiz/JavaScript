import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaGatosComponent } from './lista-gatos/lista-gatos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaGatosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
