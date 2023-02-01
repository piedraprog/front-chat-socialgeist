import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '@chat/services/chat.service';


@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit{
  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService
  ) {

    console.log("hola")
  }


  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.chatService.leaveRoom();
      this.chatService.initChat();
      this.chatService.joinRoom(id);
    });
  }

}
