import { Component } from '@angular/core';
import { ChatService } from '@chat/services/chat.service';

@Component({
  selector: 'app-user-chat-history',
  templateUrl: './user-chat-history.component.html',
  styleUrls: ['./user-chat-history.component.scss']
})
export class UserChatHistoryComponent {
  public chat$ = this.chatService.chat$

  constructor(private chatService:ChatService) { 
  }

}
