import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }
    public apiAuth: string = environment.API.apiAuth;

    public register(values) {
        return this.http.post(this.apiAuth + '/register', values);
    }

    public login(values) {
        return this.http.post(this.apiAuth + '/login', values);
    }

}
