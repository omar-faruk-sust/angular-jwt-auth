import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthorService {
    public apiAuthor: string = environment.API.apiAuthor;

    constructor(public http: HttpClient) {}

    public getAuthorList() {
        return this.http.get(this.apiAuthor + '/authors');
    }
}
