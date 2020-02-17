import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  titulo:string = "caluculadora";
  num1:number = null;
  num2:number = null;
  resultado:number = null;
  historial:string[] = [];
  constructor() { }

  ngOnInit() {
    
  }

  sumar(num1, num2):number{
    let suma;
    suma = num1 + num2;
    return suma;
  }

  restar(num1, num2):number{
    let resta;
    resta = num2 - num1;
    return resta;
  }
  
  multiplicar(num1, num2):number{
    let resultado;
    resultado = num1 * num2;
    return resultado;
  }

  dividir(num1, num2):number{
    let resultado;
    resultado = num1 / num2;
    return resultado;
  }

  binario(num1):string{
    let resultado;
    resultado = (num1 >>> 0).toString(2);
    return resultado;
  }

  limpiar(num1, num2):void{
    num1 = null;
    num2 = null;
  }
}
