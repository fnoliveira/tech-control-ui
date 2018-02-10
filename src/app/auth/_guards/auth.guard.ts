import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import { UserService } from '../../_services/user.service';

import { TOKEN_NAME } from '../auth.constant';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _router: Router, private _userService: UserService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (tokenNotExpired(TOKEN_NAME, localStorage.getItem(TOKEN_NAME))) {
      return true;
    } else {
      this._router.navigate(['/login'], { queryParams: { redirectTo: state.url } });
      return false;
    }
  }
}