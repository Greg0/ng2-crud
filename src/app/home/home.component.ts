import { Component, OnInit } from '@angular/core';
import {AlertComponent} from 'ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [AlertComponent],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
