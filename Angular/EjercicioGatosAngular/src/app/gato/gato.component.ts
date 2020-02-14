import { Component, OnInit } from '@angular/core';
import { Gato } from '../gato';
import { GatoService } from '../gato.service';

@Component({
  selector: 'app-gato',
  templateUrl: './gato.component.html',
  styleUrls: ['./gato.component.css']
})
export class GatoComponent implements OnInit {

  gato:Gato;
  visible:boolean;
  color:string;

  arrayGatos:Gato[];

  constructor(private gatoService: GatoService) { 
  }

  ngOnInit() {
    //alert("Soy el componente gato");
    this.gato = new Gato('','');
    this.visible = true;
    // Array de gatos
    this.arrayGatos = [
      new Gato('Benito','Siamés',16),
      new Gato('Tina','Persa'),
      new Gato('Sira','Común',1)
    ];
    this.color = "red";
    this.gatoService.addNumero();
  }

  cambiaVisibilidad(){
    this.visible = !this.visible;
  }

  addGato(){
    if(/\S+/.test(this.gato.nombre)){ // Impido que esté vacío el nombre
    	this.arrayGatos.push(this.gato);
    	this.gato = new Gato('','');
    }
  }

  delGato(i:number){
    this.arrayGatos.splice(i,1);
  }

}
