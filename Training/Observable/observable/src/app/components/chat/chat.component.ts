import { Component, OnInit } from '@angular/core';
import {  Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/data.service';
import { Message } from 'src/app/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{

    messages$:Observable<Message[]>
    messageText = '';

    constructor(private messageService:DataService){}
  ngOnInit():void{
    this.messages$ = this.messageService.getMessages().pipe(
      map(messages=>messages.reverse())
    )
  }

  sendMessage(){
    if(this.messageText.trim()===""){
      return;
    }

    const message:Message={
      username:"mmk",
      timestamp:new Date().toLocaleString(),
      message:this.messageText.trim()
    }

    this.messageService.sendMessage(message);
    this.messageText='';
  }

  

    
}
