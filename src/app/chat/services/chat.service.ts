import { Injectable } from '@angular/core';
import { cookies } from '@services/cookie.service';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {


  private _users$ = new BehaviorSubject<roomType[]>([
    {
      name: 'Soporte Tecnico',
      slogan: 'Canal de Ayuda y soporte',
      avatar: 'https://img2.freepng.es/20180613/ief/kisspng-technical-support-computer-icons-user-avatar-5b209ed47faf27.648037131528864468523.jpg',
      id: 'soporte',
    },
    {
      name: 'Juan Tecnico',
      slogan: 'Te ayudo a reparar lo que sea',
      avatar:
        'https://img2.freepng.es/20180613/ief/kisspng-technical-support-computer-icons-user-avatar-5b209ed47faf27.648037131528864468523.jpg',
      id: 'juan_tec',
    },
    {
      name: 'El jefe',
      slogan: 'Habla directamente con el CEO',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2QmG_KIxY4qfwzPGq8J6NaRzbc9g9HZDO9AMjT5ftaBGHptA9_Sjcty9vqttdG4_9E_o&usqp=CAU',
      id: 'jefe',
    }
  ]);

  public users$ = this._users$.asObservable();

  private _chat$ = new BehaviorSubject<chatType[]>([]);
  public chat$ = this._chat$.asObservable();

  private _room$ = new BehaviorSubject<string | null>(null);

  constructor(
    private socket: Socket,
    private cookie: cookies  
  ) {

    const user: string = this.cookie.getCookie()


    socket.fromEvent('new_message').subscribe((message: any) => {
      const chatObject: chatType = {
        user: {
          avatar: '',
          name: user,
          id: '0',
          slogan: '',
        },
        message,
      };
      this.setChat(chatObject);
    });


    socket.fromEvent('disconnect').subscribe(() => {
      const lastRoom = this._room$.getValue();
      if (lastRoom) this.joinRoom(lastRoom);
    });
  }

  public setUser(user: roomType): void {
    const current = this._users$.getValue();
    const state = [...current, user];
    this._users$.next(state);
  }

  public setChat(message: chatType): void {
    const current = this._chat$.getValue();
    const state = [...current, message];
    this._chat$.next(state);
  }

  public initChat(): void {
    this._chat$.next([]);
  }

  //Enviar mensaje desde el FRONT-> BACKEND
  sendMessage(payload: { message: string; room?: string, user: string }) {
    const roomCurrent = this._room$.getValue(); //TODO: js, ts, node
    if (roomCurrent) {
      payload = { ...payload, room: roomCurrent };
      console.log("envio al server",payload);
      this.socket.emit('event_message', payload); //TODO FRONT
    }
  }

  joinRoom(room: string): void {
    this._room$.next(room);
    this.socket.emit('event_join', room);
  }

  leaveRoom(): void {
    const room = this._room$.getValue();
    this.socket.emit('event_leave', room);
  }

  getMessage() {
    console.log("get mensaje", this.socket.fromEvent('message'))
    return this.socket.fromEvent('message');
  }

}

interface roomType {
  name: string;
  avatar: string;
  slogan: string;
  id: string;
}

interface chatType {
  user: roomType;
  message: {
    message: string,
    user: string,
  };
}
