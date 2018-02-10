import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { UserDto } from '../_models/user'

import { TOKEN_NAME } from '../auth/auth.constant';
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrlRest;

@Injectable()
export class UserService {
    jwtHelper: JwtHelper = new JwtHelper();
     
    constructor(private http: Http) {}

    getUsername():string{
        return this.jwtHelper.decodeToken(localStorage.getItem(TOKEN_NAME)).user_name;
    }

    isAdmin(): boolean {
        return this.jwtHelper.decodeToken(localStorage.getItem(TOKEN_NAME)).authorities.some(el => el === 'ROLE_ADMIN');
    }

    isUser(): boolean {
        return this.jwtHelper.decodeToken(localStorage.getItem(TOKEN_NAME)).authorities.some(el => el === 'ROLE_STANDARD');
    }

    isTrustedGuest(): boolean {
        return this.jwtHelper.decodeToken(localStorage.getItem(TOKEN_NAME)).authorities.some(el => el === 'ROLE_TRUSTED_GUEST');
    }

    isGuest(): boolean {
        return this.jwtHelper.decodeToken(localStorage.getItem(TOKEN_NAME)).authorities.some(el => el === 'ROLE_GUEST');
    }

    cadastrar(user: UserDto): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(API_URL + '/guest', user, options)
            .map(success => success.status)
            .catch(this.handleError);
    }

    findByUsername():Observable<UserDto>{
        return this.http
        .get(API_URL + '/guest/' + this.getUsername())
        .map((res: Response) => res.json())
        .catch(this.handleError);
    }
    private handleError(error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }


    

}