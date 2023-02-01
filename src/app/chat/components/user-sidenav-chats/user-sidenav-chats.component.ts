import { Component } from '@angular/core';
import { ChatService } from '@chat/services/chat.service';

@Component({
  selector: 'app-user-sidenav-chats',
  templateUrl: './user-sidenav-chats.component.html',
  styleUrls: ['./user-sidenav-chats.component.scss']
})
export class UserSidenavChatsComponent {
  public users$ = this.chatService.users$;

  constructor(private chatService: ChatService) {}


}
