import { Component, OnInit } from '@angular/core';

import { MaterializeDirective } from "angular2-materialize";

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [MaterializeDirective],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
