import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatPageComponent } from '@chat-pages/chat-page/chat-page.component';
import { UserSidenavChatsComponent } from '@chat-components/user-sidenav-chats/user-sidenav-chats.component';
import { UserTextinputComponent } from '@chat-components/user-textinput/user-textinput.component';
import { UserChatHistoryComponent } from '@chat-components/user-chat-history/user-chat-history.component';


import { ChatRoutingModule } from '@chat/chat-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChatPageComponent,
    UserSidenavChatsComponent,
    UserTextinputComponent,
    UserChatHistoryComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChatRoutingModule,
  ]
})
export class ChatModule { }
