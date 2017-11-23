import { Component, OnInit } from '@angular/core';
import { UsuarioService }  from './usuario.service';
import { Usuario } from './usuario';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
	usuarios:Usuario[];
  constructor(private usuarioSrv:UsuarioService) {
  	 this.usuarioSrv.getUsuarios()
  	 .then((d:Usuario[])=>{
  	 	this.usuarios=d;
  	 })
   }

  ngOnInit() {
  }

}
