import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        public jwtHelper: JwtHelperService
    ) { }

    public canActivate() {
        if (this.loggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

    public loggedIn() {
        this.jwtHelper.isTokenExpired();
    }

    tokenGetter() {
        return localStorage.getItem('jwt');
    }
}
