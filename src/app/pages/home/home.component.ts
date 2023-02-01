import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { cookies } from '@services/cookie.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  formUser : FormGroup = new FormGroup({
    user: new FormControl('', 
      Validators.required
    )
  }); 

  constructor(
    private cookieService : cookies
  ){}

  registerMe(): void {
    console.log(this.formUser.get('user').value)
    this.cookieService.setCookie(this.formUser.get('user').value)
  }


}
