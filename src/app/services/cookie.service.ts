import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class cookies {

  constructor(
    private cookieService: CookieService,
    private router : Router
  ) { }

    private existUser = new BehaviorSubject<boolean>(this.cookieService.check('user'));
  
  setCookie( id: string) : void {
    this.cookieService.set('user',id)
  }

  verifyCookie() {
    return this.existUser.asObservable();
  }

  deleteCookie() : void {

  }
}
