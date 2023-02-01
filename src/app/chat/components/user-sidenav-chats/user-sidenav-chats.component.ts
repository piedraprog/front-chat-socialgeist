import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { ChatService } from '@chat/services/chat.service';
import { cookies } from '@services/cookie.service';

@Component({
  selector: 'app-user-sidenav-chats',
  templateUrl: './user-sidenav-chats.component.html',
  styleUrls: ['./user-sidenav-chats.component.scss'],
})
export class UserSidenavChatsComponent {
  public users$ = this.chatService.users$;

  constructor(private chatService: ChatService, private cookies: cookies) {}

  public currentUser = this.cookies.getCookie();

  logout() {
    this.cookies.deleteCookie();
  }
}
