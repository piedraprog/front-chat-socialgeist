import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '@chat/services/chat.service';
import { cookies } from '@services/cookie.service';


@Component({
  selector: 'app-user-textinput',
  templateUrl: './user-textinput.component.html',
  styleUrls: ['./user-textinput.component.scss']
})
export class UserTextinputComponent implements OnInit {

  formMessage = new FormGroup({
    message: new FormControl(''),
    room: new FormControl('')
  });

  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute,
    private cookie: cookies
  ) {}

  ngOnInit(): void {
    const room = this.route.snapshot.paramMap.get('id');
    this.formMessage.patchValue({ room });
  }

  sendMessage(): void {
    const { message, room } = this.formMessage.value;

    if(message && room) { 
      this.chatService.sendMessage({ message , room, user: this.cookie.getCookie()});
    }
    this.formMessage.controls['message'].reset();
  }
}
