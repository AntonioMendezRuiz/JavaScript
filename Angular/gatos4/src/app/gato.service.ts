import { Injectable } from '@angular/core';
import { GATOS } from 'src/assets/GATOS';
import { Observable, of } from 'rxjs';
import { Gato } from './gato';


@Injectable({
  providedIn: 'root'
})
export class GatoService {

  gatos = GATOS; // Array de gatos

  constructor() {
  }

  //getGatos(){ // Método que devuelve el array de gatos
  //return this.gatos;
  //}
  getGatos(): Observable<Gato[]> { // Observable para poder suscribirse
    return of(this.gatos);
  }
  edad(fi: string, fd?: string):number {
    if (fd) {
      let fecha1 = new Date(fi);
      let fecha2 = new Date(fd);
      let resta = fecha2.getTime() - fecha1.getTime()
      let final = Math.floor(resta / (1000 * 60 * 60 * 24 * 365));

      return final;
    }
    else {
      let fecha1 = new Date(fi);
      let fecha2 = new Date();
      let resta = fecha2.getTime() - fecha1.getTime()
      let final = Math.floor(resta / (1000 * 60 * 60 * 24 * 365));

      return final;
    }
  }
}
