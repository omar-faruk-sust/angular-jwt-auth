import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    authorList;
  constructor(
      private readonly http: HttpClient,
      private readonly authorService: AuthorService) {

  }

  ngOnInit() {
      this.getAuthorData();
  }

  public getAuthorData() {
      this.authorService.getAuthorList().subscribe(
          res => {
              if (res['data']) {
                  this.authorList = res['data'];
              } else {

              }
          },
          err => {},
          () => {}
      );

  }

}
