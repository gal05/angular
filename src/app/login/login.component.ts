import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
//import { LoginService } from './login.service';
import { Login } from './login';
import { Visitante } from '../visitante'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() visitant;
  @Output() visitanteEvent=new EventEmitter();
  NewVisita: Visitante;
	loginVista=new Login;
	log:Login[];
  constructor(private usuarioSrv:UsuarioService	) {}

  ngOnInit() {
  }

  verificar(vista){
  	this.usuarioSrv.verificarUsuario(vista.correo)
  	.then((d:Login[])=>{

  		

  		if(vista.password==d[0].password){       
      //location.href="menu";
      this.NewVisita= new Visitante(true,d[0].correo,true);
      console.log(this.NewVisita);
      location.href="menu/"+this.NewVisita;
  		 this.visitanteEvent.emit(this.NewVisita)
      }else{
  			alert("LOL");
  		}

  	}).catch((err)=>{
  		alert("otro LOL");
  	});


/*this.loginSrc.verificarUsuario(correo)
  	.then((d:Login[])=>{
  		this.login=d;//esta mierda es el problema,
  		genera algun tipo de retraso en el boton de login
  		haciendo que reaccione a la segunda vez y no  a la primera >:|
  	});*/
  }

}
