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
import { HttpClientModule } from '@angular/common/http';

export function tokenGetter() {
    return localStorage.getItem('access_token');
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
                whitelistedDomains: ['localhost:4200'],
                blacklistedRoutes: ['localhost:4200/auth/login','localhost:4200/auth/register']
            }
        }),
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [JwtHelperService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
