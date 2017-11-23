import { Route } from '@angular/router';

import { EventoComponent } from './evento/evento.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SinSalidaComponent } from './sin-salida/sin-salida.component';

export const RouterConfig:Route[]=[
	{path:'eventos', component: EventoComponent},
	{path:'usuarios', component: UsuarioComponent},
//	{path:'', component: LoginComponent},
	{path:'menu/:objeto', component:EventoComponent},
//	{path:'menu', component:EventoComponent}

]
