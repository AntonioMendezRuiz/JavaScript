import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GatoService {

  numeros:number[] = [];

  constructor() { }

  addNumero():void{
    this.numeros.push(Math.floor(Math.random()*10));
  }
}
