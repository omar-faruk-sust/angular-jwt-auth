import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthorService} from '../author.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

 public authorForm;
 public submitted: boolean = false;

  constructor(
      private router: Router,
      private fb: FormBuilder,
      private authorService: AuthorService
  ) { }

  ngOnInit() {
      this.authorFormBuild();
  }

  private authorFormBuild() {
      this.authorForm = this.fb.group({
          name: new FormControl('', Validators.required),
          email: new FormControl('', Validators.required),
          github: new FormControl('', Validators.required),
          twitter: new FormControl('', Validators.required),
          location: new FormControl('', Validators.required),
          latest_article_published: new FormControl('', Validators.required)
      })
  }

    private onSubmit() {
        this.submitted = true;
        if (this.authorForm.valid) {
            console.log(this.authorForm.value);
            this.submitted = false;
            // now call to service
            this.authorService.addAuthor(this.authorForm.value).subscribe(
                data => {
                    console.log(data);
                    // if (data.error_code === 40001) {
                    //     this.router.navigate(['login']);
                    // } else {
                    //     this.router.navigate(['author/list']);
                    // }
                },
                error => {
                    this.router.navigate(['author/add']);
                },
                () => {

                }
            );
        }
    }

}
