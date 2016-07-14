import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  getMessages() : string[] {
    return ['msg 1', 'msg22'];
  }

}
