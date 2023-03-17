import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from './message';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data = new Subject<string>();

  data$ = this.data.asObservable();

  setData(value: string) {
    this.data.next(value);
  }

  private messages: Message[] = [];
  private messagesSubject = new Subject<Message[]>();

  // constructor() {}

  getMessages() {
    return this.messagesSubject.asObservable();
  }

  sendMessage(message: Message) {
    this.messages.push(message);
    this.messagesSubject.next(this.messages);
  }
}
