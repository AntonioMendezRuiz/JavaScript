import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MensajeService } from './mensajes.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Necesario para HTTP
@Injectable({
  providedIn: 'root'
})
export class GatoService {
  constructor(private mensajeService: MensajeService,
    private _http: HttpClient) { }
  getGatos(): Observable<any> {
    this.mensajeService.add("Desde http: gatos obtenidos");
    return this._http.get(`http://localhost:3000/gatos`);
  }
}