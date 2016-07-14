import { Component, OnInit } from '@angular/core';

import { MessageService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-hello',
  templateUrl: 'hello.component.html',
  styleUrls: ['hello.component.css'],
  providers: [MessageService]
})
export class HelloComponent implements OnInit {

  messages: string[];

  constructor(private messageService : MessageService) {}

  getMessages() {
    this.messages = this.messageService.getMessages();
  }

  ngOnInit() {
    this.getMessages();
  }

}
