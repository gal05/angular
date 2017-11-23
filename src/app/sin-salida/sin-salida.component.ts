import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Visitante } from '../visitante';

@Component({
  selector: 'app-sin-salida',
  templateUrl: './sin-salida.component.html',
  styleUrls: ['./sin-salida.component.css']
})
export class SinSalidaComponent implements OnInit {
	visitante:Visitante=new Visitante()
	@Output() visitanteEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
 
  }

  verificar(visitante:Visitante){
  	console.log("sin salida "+ visitante);
  	
  }

}
