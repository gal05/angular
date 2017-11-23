import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EventoComponent } from './evento/evento.component';
import { LoginComponent } from './login/login.component';
//router
import { RouterModule} from '@angular/router';
import { RouterConfig }  from './router.config';
//http funcking servicio!!
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './usuario/usuario.service';
import { LoginService } from './login/login.service';
//para los ngModels
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { SinSalidaComponent } from './sin-salida/sin-salida.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    EventoComponent,
    LoginComponent,
    MenuComponent,
    SinSalidaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig),
    HttpClientModule,
    FormsModule
  ],
  providers: [UsuarioService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
