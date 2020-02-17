import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../mensajes.service';
@Component({
 selector: 'app-mensajes',
 templateUrl: './mensajes.component.html',
 styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {
 constructor(public mensajeService : MensajeService) { }
 ngOnInit() {
 }
}
