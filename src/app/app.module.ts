import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {RegistrationComponent} from './registration/registration.component';
import { AdminModule } from './admin/admin.module';
import { JwtModule } from '@auth0/angular-jwt';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { JwtInterceptor } from './helpers/jwt.interceptor';
import {ErrorInterceptor} from './helpers/error.interceptor';

export function tokenGetter() {
    return localStorage.getItem('jwt');
}

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegistrationComponent
    ],
    imports: [
        // The order of route configuration matters.
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AdminModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                whitelistedDomains: ['http://jumen-jwt-auth.local/auth/login'],
                blacklistedRoutes: ['localhost:4200/auth/login','localhost:4200/auth/register']
            }
        }),
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        JwtHelperService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
