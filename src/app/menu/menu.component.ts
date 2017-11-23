import { Component, OnInit } from '@angular/core';
import { Visitante } from '../visitante';

import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
	visitante:Visitante[];


  constructor(private route:ActivatedRoute) {

   }

  ngOnInit() {
  	  	this.route.params.subscribe((params:Visitante)=>{
  		console.log(params);
  	});
  }

}
