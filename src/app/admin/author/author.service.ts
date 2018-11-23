import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthorService {
    public apiAuthor: string = environment.API.apiAuthor;

    constructor(public http: HttpClient) {}

    public getAuthorList() {
        return this.http.get(this.apiAuthor + '/authors');
    }

    public addAuthor(data) {
        return this.http.post(this.apiAuthor + '/authors', data);
    }

    public editAuthor(data) {
        return this.http.put(this.apiAuthor + '/authors/{id}', data);
    }
}
