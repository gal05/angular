import { Component } from '@angular/core';
import { Visitante } from './visitante';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
visitante:Visitante=new Visitante();
  title = 'app';

  	
  	
  }

