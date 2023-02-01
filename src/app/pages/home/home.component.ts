import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { cookies } from '@services/cookie.service';
import { map, take } from 'rxjs';



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
    private cookieService : cookies,
    private router: Router
  ){

  }

  registerMe(): void {
    
    this.cookieService.setCookie(this.formUser.get('user').value)
    this.router.navigateByUrl('/chat/soporte')
  }


}
