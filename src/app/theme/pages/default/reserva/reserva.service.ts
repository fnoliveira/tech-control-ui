import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';

import { Response } from '@angular/http';
import {AuthHttp} from 'angular2-jwt';
import { Reserva } from './reserva';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrlRest;

@Injectable()
export class ReservaService {

    constructor(private http: AuthHttp) { }

    public getAll(): Observable<Reserva[]> {
        return this.http
            .get(API_URL + '/reserva')
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}