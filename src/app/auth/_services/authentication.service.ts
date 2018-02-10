
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../../environments/environment';

import { TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME, TOKEN_NAME } from '../auth.constant';



@Injectable()
export class AuthenticationService {

    static AUTH_TOKEN = environment.apiUrlAuth + '/oauth/token';

    constructor(private http: Http) {
    }

    login(username: string, password: string) {
        const body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=password`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD));
        
        return this.http
        .post(AuthenticationService.AUTH_TOKEN, body, { headers })
        .map((response: Response) => {
            let user = response.json();
            if (user && user.access_token) {
                localStorage.setItem(TOKEN_NAME, JSON.stringify(user));
                console.log(localStorage.getItem(TOKEN_NAME));
            }
        });
    }

    logout() {
        localStorage.removeItem(TOKEN_NAME);
    }
}
