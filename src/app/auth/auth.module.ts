import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { AuthConfig, AuthHttp } from 'angular2-jwt';

import { AuthRoutingModule } from './auth-routing.routing';
import { AuthComponent } from './auth.component';
import { AlertComponent } from './_directives/alert.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './_guards/auth.guard';
import { AdminAuthGuard } from './_guards/admin-auth-guard.service';
import { AlertService } from './_services/alert.service';
import { AuthenticationService } from './_services/authentication.service';
import { TOKEN_NAME } from './auth.constant';

export function authHttpServiceFactory(http: Http) {
    return new AuthHttp(new AuthConfig({
        tokenName: TOKEN_NAME,
        globalHeaders: [{ 'Content-Type': 'application/json' }],
        noJwtError: false,
        noTokenScheme: true,
        tokenGetter: (() => localStorage.getItem(TOKEN_NAME))
    }), http);
}

@NgModule({
    declarations: [
        AuthComponent,
        AlertComponent,
        LogoutComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AuthRoutingModule,
    ],
    providers: [
        { provide: AuthHttp, useFactory: authHttpServiceFactory, deps: [Http] },
        AuthenticationService,
        AuthGuard,
        AdminAuthGuard,
        AlertService,
    ],
    entryComponents: [AlertComponent],
})

export class AuthModule {
}