import { Injectable } from '@angular/core';

const TOKEN = 'Token';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  isLoggedIn() {
    return localStorage.getItem(TOKEN) != null;
  }
}
