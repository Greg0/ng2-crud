import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-hello',
  templateUrl: 'hello.component.html',
  styleUrls: ['hello.component.css'],
})
export class HelloComponent implements OnInit {

  messages: string[];

  constructor() {
  }

  getMessages() {
    this.messages = ['asda', '12e'];
  }

  ngOnInit() {
    this.getMessages();
  }

}
