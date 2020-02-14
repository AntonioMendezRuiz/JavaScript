import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Gato } from '../gato';


@Component({
  selector: 'app-gato-nuevo',
  templateUrl: './gato-nuevo.component.html',
  styleUrls: ['./gato-nuevo.component.css']
})
export class GatoNuevoComponent implements OnInit {

  @Output() mensajeDelHijo = new EventEmitter<Gato>();
  gato:Gato;
  constructor() { }

  ngOnInit() {
    this.gato = new Gato('','');
    
  }
  addGatoOutput():void{
    this.mensajeDelHijo.emit(this.gato);
    this.gato = new Gato('', '');
  }

}
