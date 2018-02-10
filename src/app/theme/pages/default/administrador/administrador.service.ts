import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';

import { Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Administrador } from './administrador';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrlRest;

@Injectable()
export class AdministradorService {

    constructor(private http: AuthHttp) {
    }

    // API: GET /todos
    public getAll(): Observable<Administrador[]> {
        return this.http
            .get(API_URL + '/administrador')
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}