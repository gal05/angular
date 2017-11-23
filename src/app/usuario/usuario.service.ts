import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../login/login';

@Injectable()
export class UsuarioService {

  constructor(
  	private http:HttpClient
  	) { }



  //esto es para el login




  getUsuarios(){
  	return this.http.get('/api/usuarios').toPromise();
  }
  verificarUsuario(correo:String){
  	return this.http.get('/api/usuarioForMail/'+correo).toPromise();
    
  }
}
