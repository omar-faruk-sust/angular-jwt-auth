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
        console.log(this.loggedIn());
        if (this.loggedIn() == false) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }

    public loggedIn() {
        return this.jwtHelper.isTokenExpired();
    }
}
