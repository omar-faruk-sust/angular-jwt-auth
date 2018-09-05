import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   public loginForm: FormGroup;
   public submitted: Boolean = false;

  constructor(
        private authService: AuthService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

    private buildForm() {
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        });
    }

    private onSubmit() {
        this.submitted = true;
        if (this.loginForm.valid) {
            this.submitted = false;
            this.authService.login(this.loginForm.value).subscribe(
                data => {
                    console.log(data);
                },
                err => {},
                () => {}
            );
        }
    }

}
