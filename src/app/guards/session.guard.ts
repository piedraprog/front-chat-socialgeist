import { Injectable } from '@angular/core';
import { 
  ActivatedRouteSnapshot, 
  CanActivate, 
  Router, 
  RouterStateSnapshot, 
  UrlTree 
} from '@angular/router';
import { 
  take,
  map, 
  Observable 
} from 'rxjs';
import { cookies } from '@services/cookie.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(
    private cookies: cookies,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.cookies.verifyCookie().pipe(
      take(1),
      map((existUser: boolean): boolean => {
        
        if (!existUser) {
          this.router.navigate(['/home']);
          return false;
        }
        return true;
      })
    );
  }
  
}
