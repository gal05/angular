import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class LoginService {

  constructor(
  	private http:HttpClient
  	) { }

    verificarUsuario(correo:String){

  	return this.http.get('/api/usuarioForMail/'+correo).toPromise();

  }

}
