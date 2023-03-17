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
export class ChatComponent{

    messages$:Observable<Message[]>
    messageText = '';

    constructor(private messageService:DataService){}
  debugger;
  ngOnInit():void{
    this.messages$ = this.messageService.getMessages()
  }

  // By calling the getMessages method in the ngOnInit method, we are ensuring that the messages are retrieved from the server and stored in the messages$ property before the component is rendered in the view. This way, we can be sure that the component has access to the latest data when it is rendered.

  sendMessage(){
    if(this.messageText.trim()===""){
      return;
    }

    const message:Message={
      username:"Meet Koradiya",
      timestamp:new Date().toLocaleString(),
      message:this.messageText.trim()
    }

    this.messageService.sendMessage(message);
    this.messageText='';
   
  }

  

    
}
